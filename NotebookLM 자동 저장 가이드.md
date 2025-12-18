---
created: 2025-12-18
tags: [notebooklm, obsidian, automation, guide]
---

# NotebookLM → Obsidian 자동 저장 가이드

NotebookLM의 "메모에 저장" 버튼을 클릭하면 자동으로 Obsidian vault에 저장되도록 하는 자동화 시스템입니다.

## 🎯 주요 기능

- ✅ **원클릭 저장**: NotebookLM 버튼 클릭 시 Obsidian에 자동 저장
- ✅ **커스텀 버튼**: 화면 우측 하단에 "📓 Obsidian에 저장" 버튼 추가
- ✅ **자동 Frontmatter**: 생성 시간, 태그, 출처 자동 추가
- ✅ **실시간 알림**: 저장 진행 상황 알림 표시
- ✅ **한글 완벽 지원**: UTF-8 인코딩으로 한글 깨짐 없음

## 📋 필요 사항

### 1. Obsidian 플러그인
- ✅ **Obsidian Local REST API** - 이미 설치됨
  - 포트: `27124` (HTTPS)
  - API 활성화 확인 필요

### 2. 브라우저 확장
- **Tampermonkey** (Chrome, Edge, Safari)
  - Chrome: https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
  - Edge: https://microsoftedge.microsoft.com/addons/detail/tampermonkey/iikmkjmpaadaobahmlepeloendndfphd
  - Safari: App Store에서 "Tampermonkey" 검색

또는

- **Violentmonkey** (오픈소스 대안)
  - https://violentmonkey.github.io/get-it/

## 🚀 설치 방법

### Step 1: Tampermonkey 설치

1. 브라우저에서 Tampermonkey 확장 설치
2. 확장 아이콘을 클릭하여 활성화 확인

### Step 2: UserScript 설치

**방법 A: 파일에서 직접 설치**

1. 다음 파일 열기:
   ```
   .scripts/notebooklm-to-obsidian.user.js
   ```

2. 파일 내용 전체 복사 (⌘+A → ⌘+C)

3. Tampermonkey 아이콘 클릭 → **"새 스크립트 생성"**

4. 기본 템플릿 삭제 후 복사한 내용 붙여넣기

5. 저장 (⌘+S 또는 파일 → 저장)

**방법 B: 드래그 앤 드롭** (권장)

1. Finder에서 `.scripts/notebooklm-to-obsidian.user.js` 파일 찾기

2. 브라우저로 파일을 드래그 앤 드롭

3. Tampermonkey 설치 화면에서 **"설치"** 클릭

### Step 3: Obsidian 설정 확인

1. **Obsidian 실행**

2. **설정** (⌘+,) → **커뮤니티 플러그인**

3. **Obsidian Local REST API** 플러그인 찾기
   - ✅ 활성화되어 있는지 확인
   - ⚙️ 설정 클릭

4. **API 설정 확인**:
   - ✅ **Enable HTTPS Server**: 켜기
   - 포트: `27124`
   - API Key: 자동 생성됨

5. **필요 시 플러그인 재시작**:
   - 플러그인 비활성화 → 활성화

### Step 4: 테스트

1. **API 연동 테스트** (선택사항):
   ```bash
   bash ".scripts/test_obsidian_api.sh"
   ```

   ✅ 성공 시: `NotebookLM/API_테스트_노트.md` 파일 생성됨

2. **NotebookLM에서 테스트**:
   - https://notebooklm.google.com 접속
   - 아무 노트 열기
   - 우측 하단 **"📓 Obsidian에 저장"** 버튼 확인
   - 버튼 클릭 → 알림 확인 → Obsidian에서 파일 확인

## 📖 사용 방법

### 방법 1: 기존 버튼 활용

1. NotebookLM에서 노트 작성
2. Google의 **"메모에 저장"** 버튼 클릭
3. 자동으로 Obsidian에도 저장됨 ✨

### 방법 2: 커스텀 버튼 사용

1. NotebookLM 페이지 우측 하단의 **"📓 Obsidian에 저장"** 버튼 클릭
2. 알림 확인:
   - 📝 내용 추출 중...
   - 💾 Obsidian에 저장 중...
   - ✅ 저장 완료!

3. Obsidian의 `NotebookLM/` 폴더에서 파일 확인

## ⚙️ 설정 커스터마이징

UserScript 상단의 `CONFIG` 섹션에서 설정 변경 가능:

```javascript
const CONFIG = {
    obsidianApiUrl: 'https://127.0.0.1:27124',  // API URL
    obsidianApiKey: 'your-api-key-here',         // API 키
    targetFolder: 'NotebookLM',                   // 저장 폴더
    autoTags: ['notebooklm', 'imported'],        // 자동 태그
    autoSaveOnClick: true,                       // 자동 저장 (true) vs 확인 후 저장 (false)
    showNotification: true                       // 알림 표시 여부
};
```

### 주요 설정 옵션

| 설정 | 기본값 | 설명 |
|------|--------|------|
| `targetFolder` | `NotebookLM` | 저장할 Obsidian 폴더 |
| `autoTags` | `['notebooklm', 'imported']` | 자동으로 추가될 태그 |
| `autoSaveOnClick` | `true` | `true`: 즉시 저장<br>`false`: 확인창 표시 후 저장 |
| `showNotification` | `true` | 저장 진행 상황 알림 표시 여부 |

## 🔧 문제 해결

### ❌ "저장 실패: 네트워크 오류"

**원인**: Obsidian이 실행 중이지 않거나 REST API가 비활성화됨

**해결**:
1. Obsidian 실행 확인
2. 설정 → 커뮤니티 플러그인 → Local REST API 활성화
3. API 설정에서 "Enable HTTPS Server" 켜기
4. Obsidian 재시작

### ❌ "추출할 내용이 없습니다"

**원인**: NotebookLM 페이지 구조 변경 또는 빈 페이지

**해결**:
1. 노트에 내용이 있는지 확인
2. UserScript의 `extractNotebookContent()` 함수 업데이트 필요
3. 개발자 도구(F12)에서 페이지 구조 확인 후 셀렉터 수정

### ❌ 버튼이 보이지 않음

**원인**: Tampermonkey가 비활성화되었거나 스크립트가 설치되지 않음

**해결**:
1. Tampermonkey 아이콘 클릭 → 스크립트 활성화 확인
2. 스크립트 목록에서 "NotebookLM to Obsidian Auto-Saver" 찾기
3. 스크립트 옆 토글 스위치가 켜져있는지 확인
4. 페이지 새로고침 (⌘+R)

### ❌ 한글이 깨져서 저장됨

**원인**: 인코딩 문제 (현재 스크립트는 UTF-8 사용으로 문제 없음)

**해결**:
1. UserScript의 `Content-Type: text/markdown` 헤더 확인
2. Obsidian 설정에서 파일 인코딩 확인

### 🔍 디버깅 방법

1. **브라우저 개발자 도구 열기** (F12 또는 ⌘+Option+I)

2. **Console 탭**에서 로그 확인:
   ```
   [NotebookLM→Obsidian] 스크립트 시작
   [NotebookLM→Obsidian] "메모에 저장" 버튼 감지됨
   [NotebookLM→Obsidian] 버튼 클릭 감지
   ```

3. 오류 메시지 확인 및 복사하여 문제 분석

## 📊 파일 구조

저장된 파일은 다음과 같은 구조를 가집니다:

```markdown
---
created: 2025-12-18 16:30:00
source: NotebookLM
tags: [notebooklm, imported]
---

# 노트 제목

노트 내용...
```

### Frontmatter 필드

- `created`: 파일 생성 시간
- `source`: 출처 (NotebookLM)
- `tags`: 자동 태그 배열

## 🆚 기존 시스템과 비교

| 기능 | 기존 시스템 (Downloads 감시) | 새 시스템 (UserScript) |
|------|------------------------------|------------------------|
| 저장 방식 | Downloads 폴더 → 파일 감시 → 이동 | 브라우저 → REST API → 직접 저장 |
| 클릭 횟수 | 2회 (다운로드 + 확인) | 1회 (버튼만) |
| 저장 속도 | 2초 대기 (file_stable_time) | 즉시 (0.5초 이내) |
| 파일 위치 | Downloads → NotebookLM 폴더 | 바로 NotebookLM 폴더 |
| 브라우저 의존성 | 없음 (독립 실행) | Tampermonkey 필요 |
| 장점 | 안정적, 범용적 | 빠름, 원클릭 |

**권장**: 두 시스템을 함께 사용 (UserScript는 편의성, Downloads 감시는 백업/안정성)

## 🔐 보안 고려사항

### API 키 보안

- ✅ UserScript에 API 키가 하드코딩됨
- ✅ 로컬 머신에서만 동작 (127.0.0.1)
- ✅ HTTPS 암호화 통신
- ⚠️ UserScript를 공개 저장소에 업로드하지 마세요

### 권장 보안 설정

1. **Obsidian Local REST API**:
   - "Insecure Server" 비활성화 (HTTP 차단)
   - API 키 주기적 재생성 (설정에서 "Regenerate API Key")

2. **Tampermonkey**:
   - 신뢰할 수 있는 스크립트만 설치
   - 정기적으로 설치된 스크립트 검토

## 📚 추가 자료

### 관련 문서

- [[NotebookLM 동기화 가이드]] - 기존 Downloads 폴더 감시 시스템
- [[Obsidian Local REST API 사용법]]
- [[Tampermonkey 사용 가이드]]

### 참고 링크

- [Obsidian Local REST API 공식 문서](https://github.com/coddingtonbear/obsidian-local-rest-api)
- [Tampermonkey 공식 사이트](https://www.tampermonkey.net/)
- [UserScript 작성 가이드](https://www.tampermonkey.net/documentation.php)

## 🤝 기여 및 피드백

개선 사항이나 버그를 발견하면:

1. UserScript 코드 개선
2. `extractNotebookContent()` 함수 최적화 (NotebookLM UI 변경 대응)
3. 새로운 기능 추가

## 📝 변경 이력

### v1.0.0 (2025-12-18)
- ✨ 초기 버전 출시
- ✅ Obsidian Local REST API 연동
- ✅ 자동 Frontmatter 추가
- ✅ 커스텀 버튼 UI
- ✅ 실시간 알림 시스템
- ✅ 한글 완벽 지원

## 💡 팁

1. **빠른 저장**: `⌘+Option+S` 단축키 추가 (향후 버전)
2. **태그 자동화**: Obsidian의 Dataview 플러그인과 함께 사용하여 NotebookLM 노트 자동 분류
3. **백업**: 기존 Downloads 감시 시스템과 병행하여 이중 백업
4. **검색**: Obsidian에서 `tag:#notebooklm`으로 모든 가져온 노트 검색

---

**제작**: Claude Code
**날짜**: 2025-12-18
**버전**: 1.0.0
