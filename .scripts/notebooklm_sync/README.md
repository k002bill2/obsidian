# NotebookLM → Obsidian 자동 동기화

NotebookLM에서 내보낸 마크다운 파일을 자동으로 Obsidian vault로 동기화하는 스크립트입니다.

## 주요 기능

✅ **자동 파일 감시**: 지정한 폴더를 실시간으로 모니터링
✅ **Obsidian Frontmatter 자동 추가**: 생성일, 소스, 태그 등 메타데이터 자동 삽입
✅ **중복 파일 처리**: 덮어쓰기, 스킵, 이름 변경 옵션 제공
✅ **안정적인 파일 처리**: 다운로드 완료 후 처리 (파일 손상 방지)
✅ **상세한 로깅**: 모든 동기화 활동 기록

## 설치 방법

### 1. Python 설치 확인

```bash
python3 --version
```

Python 3.7 이상이 필요합니다.

### 2. 필요한 패키지 설치

```bash
cd ".scripts/notebooklm_sync"
pip3 install -r requirements.txt
```

### 3. 설정 파일 수정

`config.yaml` 파일을 열어 필요에 따라 수정하세요:

```yaml
# 감시할 폴더 (NotebookLM 파일을 저장할 위치)
watch_folder: "~/Downloads"

# Obsidian 내 저장 폴더
target_folder: "NotebookLM"

# 옵션들...
```

## 사용 방법

### 기본 사용

1. **스크립트 실행**:
   ```bash
   cd ".scripts/notebooklm_sync"
   python3 sync.py
   ```

2. **NotebookLM에서 파일 내보내기**:
   - NotebookLM에서 노트를 마크다운(.md)으로 내보내기
   - `watch_folder`에 지정한 폴더(기본: Downloads)에 저장

3. **자동 동기화**:
   - 스크립트가 자동으로 파일을 감지하고 Obsidian vault로 복사
   - `NotebookLM` 폴더에 파일이 나타납니다

### 백그라운드 실행 (macOS/Linux)

터미널을 닫아도 계속 실행하고 싶다면:

```bash
nohup python3 sync.py &
```

종료하려면:
```bash
pkill -f sync.py
```

## 설정 옵션

### config.yaml 주요 설정

| 옵션 | 설명 | 기본값 |
|------|------|--------|
| `watch_folder` | 감시할 폴더 경로 | `~/Downloads` |
| `target_folder` | Obsidian 내 저장 폴더 | `NotebookLM` |
| `move_original` | 원본 파일 삭제 여부 | `false` |
| `add_frontmatter` | Frontmatter 추가 여부 | `true` |
| `auto_tags` | 자동 추가할 태그 | `[notebooklm, imported]` |
| `duplicate_handling` | 중복 파일 처리 방법 | `rename` |
| `file_stable_time` | 파일 안정화 대기 시간(초) | `2` |

### 중복 파일 처리 방법

- `overwrite`: 기존 파일 덮어쓰기
- `skip`: 건너뛰기 (동기화하지 않음)
- `rename`: 타임스탬프를 추가하여 새 이름으로 저장

## Frontmatter 예시

스크립트가 자동으로 추가하는 Frontmatter:

```yaml
---
created: 2025-12-17 10:30:00
source: NotebookLM
original_filename: my_note.md
tags: [notebooklm, imported]
---
```

## 문제 해결

### 파일이 동기화되지 않아요

1. 로그 파일 확인:
   ```bash
   cat .scripts/notebooklm_sync/sync.log
   ```

2. 파일 형식 확인:
   - `.md` 확장자인지 확인
   - 파일이 완전히 다운로드되었는지 확인

3. 권한 확인:
   ```bash
   ls -la ~/Downloads
   ls -la "~/Library/Mobile Documents/iCloud~md~obsidian/Documents/icloud Obsidian/NotebookLM"
   ```

### 스크립트가 실행되지 않아요

1. Python 버전 확인:
   ```bash
   python3 --version
   ```

2. 패키지 재설치:
   ```bash
   pip3 install -r requirements.txt --upgrade
   ```

3. 스크립트 실행 권한 부여:
   ```bash
   chmod +x sync.py
   ```

## 고급 사용

### 특정 파일만 동기화

`config.yaml`의 `file_patterns`를 수정하세요:

```yaml
file_patterns:
  - "NotebookLM_*.md"  # "NotebookLM_"로 시작하는 파일만
  - "*_notes.md"       # "_notes.md"로 끝나는 파일만
```

### 여러 폴더 감시

여러 폴더를 감시하려면 스크립트를 여러 개 실행하거나,
설정 파일을 복사하여 다른 이름으로 저장하세요:

```bash
cp config.yaml config_work.yaml
python3 sync.py config_work.yaml
```

## 자동 시작 설정 (macOS)

시스템 시작 시 자동으로 실행하려면 LaunchAgent를 사용하세요:

1. LaunchAgent 파일 생성:
   ```bash
   nano ~/Library/LaunchAgents/com.notebooklm.sync.plist
   ```

2. 다음 내용 입력:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
   <plist version="1.0">
   <dict>
       <key>Label</key>
       <string>com.notebooklm.sync</string>
       <key>ProgramArguments</key>
       <array>
           <string>/usr/bin/python3</string>
           <string>/Users/younghwankang/Library/Mobile Documents/iCloud~md~obsidian/Documents/icloud Obsidian/.scripts/notebooklm_sync/sync.py</string>
       </array>
       <key>RunAtLoad</key>
       <true/>
       <key>KeepAlive</key>
       <true/>
   </dict>
   </plist>
   ```

3. 로드:
   ```bash
   launchctl load ~/Library/LaunchAgents/com.notebooklm.sync.plist
   ```

## 라이선스

MIT License

## 지원

문제가 있으면 GitHub Issues를 이용하거나 직접 수정해서 사용하세요!
