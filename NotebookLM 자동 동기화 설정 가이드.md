---
created: 2025-12-17
tags: [notebooklm, automation, setup, guide]
---

# NotebookLM 자동 동기화 설정 완료 가이드

Chrome 확장프로그램 **NotebookLM Exporter**와 자동 동기화 연동 가이드입니다.

## 🎯 목표

NotebookLM Exporter에서 마크다운 다운로드 → **자동으로** Obsidian에 나타나게 하기

## ⚠️ 현재 상태 & 해결 필요

현재 LaunchAgent가 실행 중이지만 macOS 보안 정책으로 인해 Downloads 폴더 접근이 차단되었습니다.

```
ERROR: [Errno 1] Operation not permitted
```

## 🔧 해결 방법 (2가지 중 선택)

### 방법 1: Terminal에 Full Disk Access 권한 부여 ⭐ (가장 확실함)

#### 1단계: 시스템 설정에서 권한 부여

1. **시스템 설정 열기**
   - 🍎 Apple 메뉴 → **시스템 설정** (System Settings)
   - 또는 Spotlight (⌘ Space) → "시스템 설정" 검색

2. **개인정보 보호 및 보안**
   - 왼쪽 메뉴: **개인정보 보호 및 보안** (Privacy & Security)
   - 오른쪽에서 아래로 스크롤: **전체 디스크 접근 권한** (Full Disk Access) 클릭

3. **Terminal 추가**
   - 🔒 자물쇠 아이콘 클릭 → 비밀번호 입력
   - **➕** (더하기) 버튼 클릭
   - 위치 이동: `⌘ Shift G` → `/Applications/Utilities/` 입력
   - **Terminal.app** 선택 → **열기**
   - Terminal 옆 ✅ 체크박스 활성화 확인

4. **LaunchAgent 재시작**

   터미널 열고:
   ```bash
   launchctl unload ~/Library/LaunchAgents/com.notebooklm.sync.plist
   launchctl load ~/Library/LaunchAgents/com.notebooklm.sync.plist
   ```

5. **작동 확인**
   ```bash
   # 실행 중인지 확인
   launchctl list | grep notebooklm

   # 로그 확인
   tail -f ~/.local/scripts/notebooklm_sync/sync.log
   ```

---

### 방법 2: Automator 앱으로 실행 (Full Disk Access 불필요)

#### 1단계: Automator 앱 만들기

1. **Automator 실행**
   - Spotlight (⌘ Space) → "Automator" 검색 → 실행

2. **새로운 문서**
   - **응용 프로그램** (Application) 선택 → **선택** 버튼

3. **액션 추가**
   - 왼쪽 검색창에 "쉘 스크립트 실행" 또는 "Run Shell Script" 검색
   - "**쉘 스크립트 실행**" 액션을 오른쪽으로 드래그

4. **스크립트 입력**

   기존 내용 모두 삭제하고 아래 코드 붙여넣기:
   ```bash
   cd "$HOME/.local/scripts/notebooklm_sync"
   source venv/bin/activate
   python3 sync.py > sync.log 2>&1
   ```

5. **저장**
   - `⌘ S` 또는 파일 → 저장
   - 이름: **NotebookLM Sync**
   - 위치: **응용 프로그램** (Applications) 폴더
   - 저장

#### 2단계: 로그인 시 자동 실행 설정

1. **시스템 설정 열기**
   - 🍎 Apple 메뉴 → **시스템 설정**

2. **일반 → 로그인 항목**
   - 왼쪽: **일반** (General)
   - 오른쪽: **로그인 항목** (Login Items)

3. **앱 추가**
   - "로그인 시 열기" 아래 **➕** 버튼 클릭
   - **응용 프로그램** 폴더에서 **NotebookLM Sync.app** 선택
   - **추가**

4. **기존 LaunchAgent 제거** (중복 방지)
   ```bash
   launchctl unload ~/Library/LaunchAgents/com.notebooklm.sync.plist
   rm ~/Library/LaunchAgents/com.notebooklm.sync.plist
   ```

5. **앱 실행 테스트**
   - **응용 프로그램** 폴더에서 **NotebookLM Sync** 더블클릭
   - 앱이 백그라운드에서 실행됨 (창이 뜨지 않음)

#### 3단계: 작동 확인

```bash
# 프로세스 확인
ps aux | grep sync.py

# 로그 확인
tail -f ~/.local/scripts/notebooklm_sync/sync.log
```

---

## 🎨 NotebookLM Exporter 사용 방법

### Chrome 확장프로그램 설치

1. Chrome 웹 스토어에서 "NotebookLM Exporter" 검색
2. 확장프로그램 설치

### 사용 방법

1. **NotebookLM 웹사이트** 열기 (notebooklm.google.com)
2. 원하는 노트북 선택
3. 확장프로그램 아이콘 클릭
4. **"Export as Markdown"** 선택
5. 파일이 Downloads 폴더에 자동 저장
6. **2~3초 후** Obsidian의 `NotebookLM/` 폴더에 자동으로 나타남! ✨

### 파일 형식

자동으로 추가되는 Frontmatter:
```yaml
---
created: 2025-12-17 23:17:25
source: NotebookLM
original_filename: notebooklm-export-2025-12-17.md
tags: [notebooklm, imported]
---

# 원본 내용
...
```

---

## 📊 관리 명령어

### 상태 확인

```bash
# LaunchAgent 방식 (방법 1)
launchctl list | grep notebooklm

# Automator 앱 방식 (방법 2)
ps aux | grep sync.py

# 로그 실시간 보기
tail -f ~/.local/scripts/notebooklm_sync/sync.log
```

### 중지/시작

**LaunchAgent 방식:**
```bash
# 중지
launchctl unload ~/Library/LaunchAgents/com.notebooklm.sync.plist

# 시작
launchctl load ~/Library/LaunchAgents/com.notebooklm.sync.plist
```

**Automator 앱 방식:**
```bash
# 중지
pkill -f "notebooklm_sync/sync.py"

# 시작
open -a "NotebookLM Sync"
```

### 설정 변경

```bash
# 설정 파일 편집
nano ~/.local/scripts/notebooklm_sync/config.yaml

# 변경 후 재시작
pkill -f sync.py
open -a "NotebookLM Sync"  # 또는 launchctl 명령어
```

---

## 🧪 테스트 방법

### 1. 간단한 파일 테스트

```bash
# 테스트 파일 생성
cat > ~/Downloads/test_sync.md << 'EOF'
# 테스트 노트

자동 동기화 테스트입니다.
EOF

# 2~3초 후 확인
sleep 3
ls -lh "/Users/002billmac_home/Library/Mobile Documents/iCloud~md~obsidian/Documents/icloud Obsidian/NotebookLM/"
```

### 2. 로그로 확인

```bash
# 실시간 로그 보기
tail -f ~/.local/scripts/notebooklm_sync/sync.log

# 이 상태에서 NotebookLM Exporter로 다운로드하면
# 로그에 감지 메시지가 나타남
```

### 3. Obsidian에서 확인

- Obsidian 열기
- `NotebookLM` 폴더 확인
- 새 파일이 frontmatter와 함께 나타남

---

## 🐛 문제 해결

### 파일이 동기화되지 않아요

1. **프로세스 확인**
   ```bash
   ps aux | grep sync.py
   ```
   - 실행 중이 아니면 다시 시작

2. **로그 확인**
   ```bash
   cat ~/.local/scripts/notebooklm_sync/sync_error.log
   ```

3. **권한 문제** (Operation not permitted)
   - **방법 1** 사용 시: Terminal에 Full Disk Access 부여했는지 확인
   - **방법 2** 사용 시: Automator 앱으로 변경

### Chrome이 다른 폴더에 저장해요

```bash
# Chrome 다운로드 폴더 확인
defaults read com.google.Chrome DownloadDirectory

# 설정 변경
config.yaml의 watch_folder를 해당 폴더로 변경
```

### 중복 파일이 계속 생겨요

`config.yaml` 수정:
```yaml
options:
  duplicate_handling: "overwrite"  # 덮어쓰기로 변경
```

---

## ✅ 완료 체크리스트

- [ ] Full Disk Access 권한 부여 (방법 1) 또는 Automator 앱 생성 (방법 2)
- [ ] 스크립트 실행 확인 (`ps aux | grep sync.py`)
- [ ] 테스트 파일로 동기화 확인
- [ ] NotebookLM Exporter 확장프로그램 설치
- [ ] 실제 NotebookLM 노트로 테스트
- [ ] Obsidian에서 파일 확인

---

## 📁 파일 위치 요약

| 항목 | 경로 |
|------|------|
| 동기화 스크립트 | `~/.local/scripts/notebooklm_sync/` |
| 설정 파일 | `~/.local/scripts/notebooklm_sync/config.yaml` |
| 로그 파일 | `~/.local/scripts/notebooklm_sync/sync.log` |
| LaunchAgent | `~/Library/LaunchAgents/com.notebooklm.sync.plist` |
| Automator 앱 | `/Applications/NotebookLM Sync.app` |
| Obsidian 저장 위치 | `NotebookLM/` 폴더 |

---

★ **이제 NotebookLM Exporter에서 Export만 하면 자동으로 Obsidian에 나타납니다!** ✨
