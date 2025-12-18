

## 📌 빠른 참조

| 도구                 | 주요 명령어          | 설명                    |
| ------------------ | --------------- | --------------------- |
| **Claude Code**    | `claude`        | Claude Code 시작        |
|                    | `claude -c`     | 최근 세션 이어서             |
|                    | `claude update` | 최신 버전 업데이트            |
| **SuperClaude v3** | `/sc:analyze`   | 코드 분석                 |
|                    | `/sc:implement` | 기능 구현 (v2의 /build 대체) |
|                    | `/sc:workflow`  | PRD 기반 워크플로우 생성       |

---

# 🚀 SuperClaude Framework v3

SuperClaude는 Claude Code를 확장하는 프레임워크로 16개의 전문 명령어, 스마트 페르소나, MCP 서버 통합을 제공합니다.

## 설치 및 초기 설정

### 방법 1: pip 설치 (권장)

```bash
# pip로 설치
pip install SuperClaude

# 또는 uv 사용 (더 빠른 패키지 매니저)
uv pip install SuperClaude

# 설치 후 SuperClaude 설정
SuperClaude install              # 빠른 설정 (권장)
SuperClaude install --interactive # 대화형 구성요소 선택
SuperClaude install --profile developer  # 개발자 프로필
```

### 방법 2: Git 클론 설치

```bash
# 저장소 클론
git clone https://github.com/SuperClaude-Org/SuperClaude_Framework.git
cd SuperClaude_Framework

# uv 사용 설치
uv sync

# 또는 Python 직접 실행
python3 SuperClaude install
python3 -m SuperClaude install  # 또는 이 방법
```

### 설치 프로필 옵션

```bash
# 최소 설치 (핵심 기능만)
SuperClaude install --profile minimal

# 빠른 설치 (대부분의 사용자에게 권장)
SuperClaude install --profile quick

# 개발자 설치 (모든 기능 + 개발 도구)
SuperClaude install --profile developer
```

## 📝 16개 SuperClaude 슬래시 명령어

### 개발 명령어

| 명령어 | 설명 | 자동 활성화 |
|--------|------|------------|
| `/sc:implement` | 기능 구현 (v2 /build 대체) | Frontend, Backend, Architect 페르소나 |
| `/sc:build` | 프로젝트 빌드 및 컴파일 | DevOps, Backend 페르소나 |
| `/sc:design` | 시스템 설계 및 아키텍처 | Architect, Security 페르소나 |

#### /sc:implement 사용 예제
```bash
# 기본 사용
/sc:implement user authentication system

# 컴포넌트 생성
/sc:implement --type component LoginForm

# API 엔드포인트 구축
/sc:implement --type api user-management

# 프레임워크 지정
/sc:implement --framework react dashboard

# 전체 옵션
/sc:implement payment processing --type service --iterative --with-tests
```

### 분석 명령어

| 명령어 | 설명 | 자동 활성화 |
|--------|------|------------|
| `/sc:analyze` | 코드 분석 | Analyzer, Security 페르소나 |
| `/sc:troubleshoot` | 문제 해결 | Analyzer, QA 페르소나 |
| `/sc:explain` | 코드 설명 | Mentor, Scribe 페르소나 |

#### /sc:analyze 사용 예제
```bash
# 기본 분석
/sc:analyze src/

# 깊은 분석 모드
/sc:analyze code.js --think

# 특정 페르소나 지정
/sc:analyze payment.js --persona security

# 내부 프로세스 확인
/sc:analyze code.js --introspect
```

### 품질 명령어

| 명령어 | 설명 | 자동 활성화 |
|--------|------|------------|
| `/sc:improve` | 코드 개선 | Optimizer, QA 페르소나 |
| `/sc:test` | 테스트 생성 | QA, Backend 페르소나 |
| `/sc:cleanup` | 코드 정리 | Optimizer 페르소나 |

#### /sc:improve 사용 예제
```bash
# 기본 개선
/sc:improve messy-file.js

# 특정 포커스
/sc:improve code.js --focus performance --safe-mode

# 미리보기
/sc:improve code.js --preview

# 반복 개선
/sc:improve code.js --loop
```

### 기타 명령어

| 명령어 | 설명 | 자동 활성화 |
|--------|------|------------|
| `/sc:document` | 문서 생성 | Scribe, Mentor 페르소나 |
| `/sc:git` | Git 작업 | DevOps 페르소나 |
| `/sc:estimate` | 작업 예측 | Architect, PM 페르소나 |
| `/sc:task` | 작업 관리 | PM 페르소나 |
| `/sc:index` | 프로젝트 인덱싱 | Analyzer 페르소나 |
| `/sc:load` | 컨텍스트 로드 | - |
| `/sc:spawn` | 작업 오케스트레이션 | Analyzer, Architect, DevOps |

### 특별 명령어: /sc:workflow

PRD(제품 요구사항 문서)를 단계별 구현 워크플로우로 변환합니다.

```bash
# PRD 파일로부터 워크플로우 생성
/sc:workflow docs/feature-100-prd.md

# 전략 지정
/sc:workflow feature-100-prd.md --strategy systematic

# MCP 서버 활용
/sc:workflow "user auth system" --c7 --sequential

# 상세 출력
/sc:workflow "feature spec" --persona security --output detailed
```

## 🎭 11개 스마트 페르소나

SuperClaude는 작업에 따라 자동으로 적절한 전문가를 활성화합니다:

| 페르소나 | 전문 분야 | 자동 활성화 상황 |
|----------|----------|----------------|
| **Frontend** | UI/UX, React, Vue | 프론트엔드 파일 감지 시 |
| **Backend** | API, 데이터베이스 | 서버 코드 작업 시 |
| **Security** | 보안, 취약점 | 인증, 결제 코드 감지 시 |
| **Architect** | 시스템 설계 | 복잡한 구조 작업 시 |
| **Optimizer** | 성능 최적화 | 성능 이슈 감지 시 |
| **QA** | 테스트, 품질 | 테스트 관련 작업 시 |
| **DevOps** | 배포, CI/CD | 빌드/배포 작업 시 |
| **Analyzer** | 코드 분석 | 분석 명령 시 |
| **Mentor** | 교육, 설명 | 설명 요청 시 |
| **Scribe** | 문서화 | 문서 작업 시 |
| **PM** | 프로젝트 관리 | 작업 계획 시 |

### 페르소나 수동 제어

```bash
# 특정 페르소나 강제 지정
/sc:analyze frontend.js --persona security

# 페르소나 조합
/sc:implement auth --persona-security --persona-backend

# 자동 활성화 확인
/sc:analyze code.js --introspect
```

## 🔧 플래그 시스템

### 핵심 플래그

| 플래그 | 설명 | 사용 예 |
|--------|------|---------|
| `--think` | 깊은 분석 모드 | `/sc:analyze --think` |
| `--safe` | 안전 모드 (보수적 변경) | `/sc:improve --safe` |
| `--preview` | 변경사항 미리보기 | `/sc:improve --preview` |
| `--iterative` | 반복 개선 | `/sc:implement --iterative` |
| `--loop` | 연속 개선 루프 | `/sc:improve --loop` |

### MCP 서버 플래그

| 플래그 | MCP 서버 | 용도 |
|--------|----------|------|
| `--c7` | Context7 | 문서/패턴 조회 |
| `--seq` 또는 `--sequential` | Sequential | 복잡한 분석 |
| `--magic` | Magic | UI 컴포넌트 생성 |
| `--puppeteer` | Puppeteer | 브라우저 자동화 |

### 출력 제어 플래그

```bash
# 상세 출력
/sc:analyze --verbose

# 간결한 출력
/sc:analyze --concise

# 특정 형식
/sc:document --format markdown

# 파일로 저장
/sc:analyze --output analysis.md
```

## 🔄 MCP 서버 통합

SuperClaude는 여러 MCP(Multi-Context Processor) 서버와 통합됩니다:

### Context7
- 문서 및 패턴 조회
- 사용: `--c7` 플래그
- 예: `/sc:implement auth --c7`

### Sequential
- 다단계 추론
- 복잡한 분석
- 사용: `--sequential` 또는 `--seq`
- 예: `/sc:analyze complex-system --seq`

### Magic
- React UI 컴포넌트 생성
- 사용: `--magic` 플래그
- 예: `/sc:implement LoginForm --type component --magic`

### Puppeteer/Playwright
- 브라우저 자동화
- E2E 테스트
- 사용: `--puppeteer` 플래그
- 예: `/sc:test e2e --puppeteer`

## 📊 Wave Orchestration Engine

복잡한 작업을 위한 다단계 실행 엔진:

### 자동 활성화 조건
- 복잡도 ≥ 0.7
- 파일 수 > 20
- 작업 유형 > 2

### Wave 모드 사용
```bash
# 자동 Wave 모드 (복잡한 작업 감지 시)
/sc:implement large-feature

# 강제 Wave 모드
/sc:analyze project/ --wave

# Wave 모드 비활성화
/sc:implement simple-task --no-wave
```

## 🛠️ SuperClaude 관리 명령어

### 업데이트 및 유지보수

```bash
# 업데이트 확인
SuperClaude update

# 강제 업데이트
SuperClaude update --force

# 특정 구성요소만 업데이트
SuperClaude update --components core,commands

# 드라이런 (미리보기)
SuperClaude update --dry-run
```

### 백업 및 복원

```bash
# 백업 생성
SuperClaude backup --create

# 이름 지정 백업
SuperClaude backup --create --name "before-update"

# 백업 목록
SuperClaude backup --list

# 백업에서 복원
SuperClaude backup --restore
```

### 제거

```bash
# SuperClaude 제거 (백업 유지)
SuperClaude uninstall

# 완전 제거
SuperClaude uninstall --complete

# 제거 미리보기
SuperClaude uninstall --dry-run
```

---

# 💻 Claude Code 명령어

## CLI 기본 명령어

### 기본 실행
```bash
claude                    # Claude Code 시작
claude "프롬프트"         # 바로 시작
claude -c                 # 최근 세션 이어서
claude -r                 # 세션 목록에서 선택
claude update             # 업데이트
```

### 옵션
```bash
claude --model opus       # 모델 지정
claude --verbose          # 상세 로그
claude --version          # 버전 확인
claude --help            # 도움말
```

## 대화형 슬래시 명령어

### 기본 명령어
- `/help` - 명령어 목록
- `/exit` 또는 `/quit` - 종료
- `/clear` - 대화 초기화
- `/compact` - 컨텍스트 압축
- `/undo` - 작업 취소
- `/redo` - 취소 복구

### 설정 및 상태
- `/config` - 설정 조정
- `/model` - 모델 변경
- `/cost` - 비용 확인
- `/status` - 상태 확인
- `/doctor` - 환경 진단
- `/debug` - 디버그 모드

### 프로젝트 관리
- `/init` - 프로젝트 초기화 및 claude.md 생성
- `/memory` - claude.md 수정
- `/permissions` - 파일 권한 관리
- `/project` - 프로젝트 정보
- `/scan` - 프로젝트 재스캔

### 파일 작업
- `/add <경로>` - 파일 추가
- `/remove <경로>` - 파일 제거
- `/files` - 파일 목록
- `/diff` - 변경사항 보기
- `/save` - 변경사항 저장

### Git 통합
- `/review` - PR 검토
- `/commit` - 커밋
- `/branch` - 브랜치 정보
- `/rollback` - 되돌리기

---

## 🔄 Claude Code vs SuperClaude v3 비교

| 기능 | Claude Code | SuperClaude v3 |
|------|------------|----------------|
| **용도** | 범용 AI 코딩 어시스턴트 | Claude Code 확장 프레임워크 |
| **설치** | 독립 실행 | Claude Code 위에 설치 |
| **명령어** | 기본 슬래시 명령어 | 16개 /sc: 전문 명령어 |
| **페르소나** | 없음 | 11개 스마트 페르소나 자동 활성화 |
| **MCP 통합** | 제한적 | Context7, Sequential, Magic, Puppeteer |
| **Wave 엔진** | 없음 | 복잡한 작업 자동 오케스트레이션 |
| **Git 통합** | 기본 | 고급 (커밋 메시지, 체인지로그) |

---

## 🚀 실전 워크플로우

### 1. 새 기능 구현

```bash
# SuperClaude로 PRD 분석 및 워크플로우 생성
/sc:workflow feature-prd.md --strategy systematic

# 구현 시작
/sc:implement user-auth --type feature --with-tests

# Claude Code로 세부 코딩
/add src/auth/
# 실제 코드 작성...
```

### 2. 코드 개선 워크플로우

```bash
# 분석 먼저
/sc:analyze src/ --think --introspect

# 개선 실행
/sc:improve src/main.js --focus performance --preview
/sc:improve src/main.js --safe --iterative

# 테스트 추가
/sc:test src/main.js --comprehensive
```

### 3. 문제 해결

```bash
# 문제 진단
/sc:troubleshoot "auth failing" --seq

# Claude Code로 디버깅
/debug
/add error.log
```

### 4. 문서화

```bash
# SuperClaude로 자동 문서 생성
/sc:document src/ --format markdown

# Claude Code로 README 작성
/add README.md
```

---

## 📝 핵심 팁

### SuperClaude 사용 팁

1. **자동 활성화 믿기**: 대부분의 경우 SuperClaude가 적절한 페르소나와 도구를 자동 선택
2. **간단하게 시작**: `/sc:analyze`나 `/sc:implement`로 시작해서 점진적으로 플래그 추가
3. **--introspect 활용**: 자동 활성화가 어떻게 작동하는지 확인
4. **--preview 사용**: 큰 변경 전 미리보기
5. **Wave 모드**: 복잡한 작업은 자동으로 Wave 모드 활성화

### v2에서 v3 마이그레이션

```bash
# 주요 변경사항
/build → /sc:implement
/quick → /sc:spawn

# v2 제거
rm -rf SuperClaude/
rm -rf ~/.claude/shared/
rm -rf ~/.claude/commands/

# v3 설치
pip install SuperClaude
SuperClaude install
```

---

## 🔧 문제 해결

### SuperClaude 문제 해결

```bash
# Python 버전 확인
python3 --version  # 3.8+ 필요

# 설치 경로 확인
ls -la ~/.claude/

# 강제 재설치
SuperClaude uninstall --complete
SuperClaude install --force

# 로그 확인
cat ~/.claude/logs/superclaude.log
```

### 일반적인 문제

1. **명령어가 작동하지 않음**
   - `/sc:` 접두사 확인
   - SuperClaude 설치 확인: `SuperClaude --version`

2. **페르소나가 활성화되지 않음**
   - `--introspect` 플래그로 확인
   - 수동 지정: `--persona-<name>`

3. **MCP 서버 연결 실패**
   - 설치 프로필 확인
   - 재설치: `SuperClaude install --profile developer`

---

## 📚 추가 리소스

- **GitHub**: https://github.com/SuperClaude-Org/SuperClaude_Framework
- **문서**: 
  - `/Docs/commands-guide.md` - 명령어 상세 가이드
  - `/Docs/personas-guide.md` - 페르소나 가이드
  - `/Docs/superclaude-user-guide.md` - 사용자 가이드
  - `/Docs/installation-guide.md` - 설치 가이드
- **설정 파일**: `~/.claude/` 디렉토리
