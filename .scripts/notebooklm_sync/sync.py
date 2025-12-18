#!/usr/bin/env python3
"""
NotebookLM to Obsidian 자동 동기화 스크립트

NotebookLM에서 내보낸 마크다운 파일을 자동으로 Obsidian vault로 동기화합니다.
"""

import os
import sys
import time
import yaml
import shutil
import logging
from pathlib import Path
from datetime import datetime
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler, FileCreatedEvent
from typing import Dict, Any


class NotebookLMSyncHandler(FileSystemEventHandler):
    """NotebookLM 파일을 감시하고 Obsidian으로 동기화하는 핸들러"""

    def __init__(self, config: Dict[str, Any]):
        self.config = config
        self.watch_folder = Path(config['watch_folder']).expanduser()
        self.obsidian_vault = Path(config['obsidian_vault']).expanduser()
        self.target_folder = self.obsidian_vault / config['target_folder']
        self.target_folder.mkdir(parents=True, exist_ok=True)

        # 처리 대기 중인 파일들 (파일이 완전히 쓰여질 때까지 대기)
        self.pending_files = {}

    def on_created(self, event: FileCreatedEvent):
        """새 파일이 생성되었을 때 호출"""
        self._handle_file_event(event.src_path, "created")

    def on_moved(self, event):
        """파일이 이동/이름 변경되었을 때 호출"""
        # 임시 파일이 최종 이름으로 변경되는 경우 처리
        self._handle_file_event(event.dest_path, "moved")

    def _handle_file_event(self, file_path_str: str, event_type: str):
        """파일 이벤트 처리 (created, moved 공통 로직)"""
        print(f"[DEBUG] {event_type} 이벤트 감지: {file_path_str}")

        file_path = Path(file_path_str)

        # 디렉토리 무시
        if file_path.is_dir():
            print(f"[DEBUG] 디렉토리이므로 무시")
            return

        print(f"[DEBUG] 파일 확장자: {file_path.suffix}")

        # 마크다운 파일만 처리
        if file_path.suffix.lower() != '.md':
            print(f"[DEBUG] 마크다운 파일이 아니므로 무시")
            return

        logging.info(f"새 마크다운 파일 감지: {file_path.name}")
        print(f"[INFO] 새 마크다운 파일 감지: {file_path.name}")

        # 파일이 완전히 쓰여질 때까지 대기
        self.pending_files[str(file_path)] = time.time()
        print(f"[DEBUG] pending_files에 추가: {file_path.name}")

    def process_pending_files(self):
        """대기 중인 파일들을 처리"""
        if self.pending_files:
            print(f"[DEBUG] pending_files 확인: {len(self.pending_files)}개 파일 대기 중")

        stable_time = self.config['options']['file_stable_time']
        current_time = time.time()

        files_to_process = []
        for file_path, created_time in list(self.pending_files.items()):
            elapsed = current_time - created_time
            if elapsed >= stable_time:
                print(f"[DEBUG] 파일 안정화 완료 ({elapsed:.1f}초): {Path(file_path).name}")
                files_to_process.append(file_path)
                del self.pending_files[file_path]

        for file_path in files_to_process:
            print(f"[DEBUG] 동기화 시작: {Path(file_path).name}")
            self._sync_file(Path(file_path))

    def _sync_file(self, source_path: Path):
        """파일을 Obsidian vault로 동기화"""
        try:
            # 파일이 여전히 존재하는지 확인
            if not source_path.exists():
                logging.warning(f"파일이 존재하지 않습니다: {source_path}")
                return

            # 대상 파일 경로 결정
            target_path = self._get_target_path(source_path)

            # 파일 내용 읽기
            content = source_path.read_text(encoding='utf-8')

            # Frontmatter 추가
            if self.config['options']['add_frontmatter']:
                content = self._add_frontmatter(content, source_path)

            # 파일 저장
            target_path.write_text(content, encoding='utf-8')
            logging.info(f"동기화 완료: {source_path.name} → {target_path}")

            # 원본 파일 처리
            if self.config['options']['move_original']:
                source_path.unlink()
                logging.info(f"원본 파일 삭제: {source_path}")

        except Exception as e:
            logging.error(f"파일 동기화 실패: {source_path.name} - {e}")

    def _get_target_path(self, source_path: Path) -> Path:
        """중복 처리를 고려한 대상 경로 반환"""
        target_path = self.target_folder / source_path.name
        duplicate_handling = self.config['options']['duplicate_handling']

        if not target_path.exists():
            return target_path

        if duplicate_handling == 'overwrite':
            return target_path
        elif duplicate_handling == 'skip':
            logging.info(f"파일이 이미 존재합니다 (스킵): {target_path.name}")
            return None
        elif duplicate_handling == 'rename':
            # 타임스탬프를 추가하여 이름 변경
            timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
            new_name = f"{source_path.stem}_{timestamp}{source_path.suffix}"
            return self.target_folder / new_name

        return target_path

    def _add_frontmatter(self, content: str, source_path: Path) -> str:
        """Obsidian frontmatter 추가"""
        # 이미 frontmatter가 있는지 확인
        if content.startswith('---'):
            return content

        # Frontmatter 생성
        frontmatter = "---\n"
        frontmatter += f"created: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n"
        frontmatter += f"source: NotebookLM\n"
        frontmatter += f"original_filename: {source_path.name}\n"

        # 태그 추가
        tags = self.config['options'].get('auto_tags', [])
        if tags:
            frontmatter += f"tags: [{', '.join(tags)}]\n"

        frontmatter += "---\n\n"

        return frontmatter + content


def load_config(config_path: str = None) -> Dict[str, Any]:
    """설정 파일 로드"""
    if config_path is None:
        script_dir = Path(__file__).parent
        config_path = script_dir / 'config.yaml'

    with open(config_path, 'r', encoding='utf-8') as f:
        config = yaml.safe_load(f)

    return config


def setup_logging(config: Dict[str, Any]):
    """로깅 설정"""
    if not config['logging']['enabled']:
        logging.disable(logging.CRITICAL)
        return

    log_level = getattr(logging, config['logging']['level'])
    log_file = Path(config['logging']['log_file']).expanduser()
    log_file.parent.mkdir(parents=True, exist_ok=True)

    logging.basicConfig(
        level=log_level,
        format='%(asctime)s - %(levelname)s - %(message)s',
        handlers=[
            logging.FileHandler(log_file, encoding='utf-8'),
            logging.StreamHandler(sys.stdout)
        ]
    )


def main():
    """메인 함수"""
    print("NotebookLM → Obsidian 동기화 시작...")

    # 설정 로드
    config = load_config()
    setup_logging(config)

    # 감시 폴더 확인
    watch_folder = Path(config['watch_folder']).expanduser()
    if not watch_folder.exists():
        logging.error(f"감시 폴더가 존재하지 않습니다: {watch_folder}")
        return

    logging.info(f"감시 폴더: {watch_folder}")
    logging.info(f"Obsidian vault: {config['obsidian_vault']}")
    logging.info(f"대상 폴더: {config['target_folder']}")

    # 파일 감시 시작
    event_handler = NotebookLMSyncHandler(config)
    observer = Observer()
    observer.schedule(event_handler, str(watch_folder), recursive=False)
    observer.start()

    print(f"\n✓ 파일 감시 시작: {watch_folder}")
    print(f"✓ NotebookLM에서 내보낸 .md 파일을 위 폴더에 저장하세요")
    print(f"✓ 자동으로 Obsidian vault로 동기화됩니다")
    print(f"\n종료하려면 Ctrl+C를 누르세요...\n")

    try:
        while True:
            time.sleep(1)
            # 대기 중인 파일들 처리
            event_handler.process_pending_files()
    except KeyboardInterrupt:
        observer.stop()
        print("\n\n동기화 종료")

    observer.join()


if __name__ == '__main__':
    main()
