#!/usr/bin/env python3
"""
간단한 watchdog 테스트
"""

import time
from pathlib import Path
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class TestHandler(FileSystemEventHandler):
    def on_created(self, event):
        print(f"✓ 파일 생성 감지: {event.src_path}")
        if event.src_path.endswith('.md'):
            print(f"  → 마크다운 파일입니다!")

# 감시 시작
watch_folder = Path("~/Downloads").expanduser()
print(f"감시 시작: {watch_folder}")
print("Downloads 폴더에 .md 파일을 만들어보세요...")
print("종료: Ctrl+C\n")

handler = TestHandler()
observer = Observer()
observer.schedule(handler, str(watch_folder), recursive=False)
observer.start()

try:
    while True:
        time.sleep(1)
except KeyboardInterrupt:
    observer.stop()
    print("\n종료")

observer.join()
