---
created: 2025-12-19
tags: [obsidian, custom-frames, notebooklm, automation]
---

# Custom Frames에 "Obsidian 저장" 버튼 추가 가이드

NotebookLM Custom Frames 안에 "📓 Obsidian에 저장" 버튼을 추가하여, Tampermonkey 없이도 Obsidian vault에 직접 저장할 수 있습니다.

## 🎯 개요

- **기존 방식**: Chrome + Tampermonkey 확장 프로그램
- **새 방식**: Obsidian Custom Frames 내장 (`customJs` 필드 활용)
- **장점**: Tampermonkey 불필요, Obsidian 내에서 완전 통합

## ⚠️ 중요 제약사항

Custom Frames의 `customJs`는 **Desktop 전용** 기능입니다:

- ✅ **작동**: `forceIframe: false` (Electron webview 사용)
- ❌ **작동 안 함**: `forceIframe: true` (일반 iframe 사용)
- ❌ **작동 안 함**: 모바일 환경

**현재 NotebookLM 프레임 설정**: `forceIframe: false` → ✅ **사용 가능!**

## 📋 방법 1: Obsidian 설정 UI에서 추가 (권장)

### Step 1: JavaScript 코드 복사

다음 파일을 열어서 **전체 내용을 복사**하세요:

```
.scripts/notebooklm-customframes.js
```

또는 아래 단축 명령어로 파일 내용을 클립보드에 복사:

```bash
cat ".scripts/notebooklm-customframes.js" | pbcopy
```

### Step 2: Obsidian Custom Frames 설정 열기

1. **Obsidian 설정** 열기 (⌘+,)
2. 왼쪽 메뉴에서 **"Community plugins"** 클릭
3. 설치된 플러그인 목록에서 **"Custom Frames"** 찾기
4. ⚙️ **설정 아이콘** 클릭

### Step 3: NotebookLM 프레임 설정 편집

1. Custom Frames 설정 페이지에서 **"NotebookLM"** 프레임 찾기
2. **"Show Settings"** 버튼 클릭 (설정 펼치기)
3. 아래로 스크롤하여 **"Additional JavaScript"** 텍스트 영역 찾기

### Step 4: 코드 붙여넣기

1. **"Additional JavaScript"** 텍스트 영역에 복사한 코드 붙여넣기 (⌘+V)
2. 설정 페이지는 **자동 저장**됨 (별도 저장 버튼 없음)
3. ✅ 완료!

### Step 5: Obsidian 재시작

Custom Frames 플러그인 변경사항 적용을 위해:

1. **방법 A**: Obsidian 완전 종료 후 재실행
2. **방법 B**: ⌘+R (Reload) - 빠른 재시작

### Step 6: 테스트

1. Custom Frames에서 NotebookLM 열기
2. 아무 노트 작성 또는 기존 노트 열기
3. 우측 하단에 **"📓 Obsidian에 저장"** 버튼 확인
4. 버튼 클릭 → 알림 확인 → Obsidian `NotebookLM/` 폴더에서 파일 확인

---

## 📋 방법 2: data.json 직접 수정 (고급)

**⚠️ 주의**: JSON 형식 오류 시 Custom Frames 플러그인이 작동하지 않을 수 있습니다. 반드시 백업하세요!

### Step 1: 백업

```bash
cp ".obsidian/plugins/obsidian-custom-frames/data.json" \
   ".obsidian/plugins/obsidian-custom-frames/data.json.backup"
```

### Step 2: 파일 수정

1. 다음 파일 열기:
   ```
   .obsidian/plugins/obsidian-custom-frames/data.json
   ```

2. `"NotebookLM"` 프레임 찾기 (대략 15-26줄)

3. `"customJs": ""` 부분을 아래와 같이 변경:

   **변경 전**:
   ```json
   "customJs": ""
   ```

   **변경 후** (한 줄로 압축된 코드):
   ```json
   "customJs": "/* 여기에 .scripts/notebooklm-customframes.js 내용을 한 줄로 압축하여 붙여넣기 */"
   ```

   ⚠️ **복잡함**: 여러 줄 JavaScript를 JSON 문자열로 변환해야 하므로, **방법 1을 권장**합니다.

### Step 3: Obsidian 재시작

```bash
# Obsidian 종료 후 재실행
pkill -9 Obsidian
open -a Obsidian
```

---

## 🔧 설정 커스터마이징

`.scripts/notebooklm-customframes.js` 파일의 `CONFIG` 섹션을 수정하여 동작을 변경할 수 있습니다:

```javascript
const CONFIG = {
    obsidianApiUrl: 'http://127.0.0.1:27123',  // Obsidian REST API URL
    obsidianApiKey: '68b243f4d0009646914570125cc8658dd677f26f0295d38b6d39d4106b27c7a4',
    targetFolder: 'NotebookLM',                 // 저장 폴더
    autoTags: ['notebooklm', 'imported'],      // 자동 태그
    autoSaveOnClick: true,                     // 자동 저장 vs 확인 후 저장
    showNotification: true                     // 알림 표시 여부
};
```

### 주요 옵션

| 설정 | 기본값 | 설명 |
|------|--------|------|
| `obsidianApiUrl` | `http://127.0.0.1:27123` | Obsidian Local REST API URL<br>⚠️ HTTP 사용 (CORS 문제 회피) |
| `obsidianApiKey` | (자동 생성) | Obsidian Local REST API 키<br>설정 → Local REST API에서 확인 |
| `targetFolder` | `NotebookLM` | 저장할 Obsidian 폴더 |
| `autoTags` | `['notebooklm', 'imported']` | 자동으로 추가될 태그 |
| `autoSaveOnClick` | `true` | `true`: 즉시 저장<br>`false`: 확인창 표시 후 저장 |
| `showNotification` | `true` | 저장 진행 상황 알림 표시 여부 |

**설정 변경 후**:
1. `.scripts/notebooklm-customframes.js` 파일 수정
2. 수정한 내용을 다시 복사
3. Obsidian 설정 → Custom Frames → NotebookLM → Additional JavaScript에 붙여넣기
4. Obsidian 재시작

---

## 🔧 문제 해결

### ❌ 버튼이 보이지 않음

**원인**: JavaScript가 실행되지 않았거나, 페이지 로딩 문제

**해결**:
1. Obsidian 재시작 (⌘+R)
2. Custom Frames에서 NotebookLM 프레임 다시 열기
3. 브라우저 개발자 도구 확인 (방법은 아래 참조)

### ❌ "저장 실패: 네트워크 오류"

**원인**: Obsidian Local REST API가 실행 중이지 않음

**해결**:
1. Obsidian 설정 → 커뮤니티 플러그인 → **Obsidian Local REST API**
2. **활성화** 확인
3. 설정에서 **"Enable HTTPS Server"** 또는 **"Enable HTTP Server"** 켜기
   - ⚠️ 스크립트에서 HTTP 사용 중이므로 HTTP 서버 활성화 필요
4. 포트 번호 확인: `27123` (스크립트와 일치해야 함)

### ❌ "추출할 내용이 없습니다"

**원인**: NotebookLM 페이지 구조 변경 또는 빈 노트

**해결**:
1. 노트에 내용이 있는지 확인
2. 페이지가 완전히 로드될 때까지 대기
3. NotebookLM UI가 변경되었다면 스크립트 업데이트 필요

### ❌ CORS 오류 (Console에 표시)

**원인**: webview에서 localhost 접근이 차단됨

**해결 방법 A - HTTP 사용** (현재 스크립트 설정):
```javascript
obsidianApiUrl: 'http://127.0.0.1:27123',  // HTTP (CORS 완화)
```

**해결 방법 B - HTTPS + 인증서 문제 무시**:
- Obsidian Local REST API 설정에서 HTTPS 사용
- 자체 서명 인증서 신뢰 설정 (복잡함)

**해결 방법 C - forceIframe 비활성화 확인**:
```json
{
  "forceIframe": false  // ✅ webview 사용 (customJs 작동)
}
```

### 🔍 디버깅 방법

Custom Frames webview에서 개발자 도구는 **직접 열 수 없습니다**. 하지만 Obsidian의 개발자 도구에서 로그를 확인할 수 있습니다:

1. **Obsidian 개발자 도구 열기**:
   - macOS: `⌘+Option+I`
   - Windows/Linux: `Ctrl+Shift+I`

2. **Console 탭**에서 로그 확인:
   ```
   [NotebookLM→Obsidian] 스크립트 시작 (v2.2.0 - Custom Frames Edition)
   [NotebookLM→Obsidian] "메모에 저장" 버튼 감지됨
   [NotebookLM→Obsidian] 버튼 클릭 감지
   ```

3. 오류 메시지가 있다면 복사하여 분석

**대안**: Chrome에서 NotebookLM을 열고, 브라우저 개발자 도구(F12)에서 테스트한 후 Custom Frames에 적용

---

## 🆚 Tampermonkey vs Custom Frames 비교

| 특징 | Tampermonkey UserScript | Custom Frames customJs |
|------|-------------------------|------------------------|
| **설치 위치** | Chrome 확장 프로그램 | Obsidian 플러그인 설정 |
| **환경** | Chrome, Edge, Safari | Obsidian Desktop만 |
| **API** | `GM_xmlhttpRequest` | 일반 `fetch` API |
| **CORS 제한** | 없음 (GM API 사용) | 있음 (localhost는 OK) |
| **업데이트** | Tampermonkey에서 관리 | 수동 복사/붙여넣기 |
| **모바일 지원** | ✅ 가능 (Safari + Tampermonkey) | ❌ 불가능 |
| **통합성** | 별도 확장 필요 | Obsidian에 완전 통합 |
| **편의성** | 자동 업데이트 | 수동 관리 |

**권장 사용**:
- **Desktop에서 Obsidian 주로 사용**: Custom Frames (`customJs`)
- **모바일 또는 외부 브라우저 사용**: Tampermonkey UserScript
- **둘 다 사용**: 병행 가능 (중복 저장 주의)

---

## 📚 관련 파일

- **Custom Frames 코드**: `.scripts/notebooklm-customframes.js`
- **Tampermonkey 버전**: `.scripts/notebooklm-to-obsidian.user.js`
- **설정 파일**: `.obsidian/plugins/obsidian-custom-frames/data.json`
- **가이드 문서**: [[NotebookLM 자동 저장 가이드]]

---

## 🔐 보안 고려사항

### API 키 노출

- ⚠️ **주의**: JavaScript 코드에 API 키가 하드코딩됩니다.
- ✅ **안전**: 로컬 머신에서만 실행 (127.0.0.1)
- ✅ **안전**: Custom Frames는 외부로 전송되지 않음
- ⚠️ **주의**: data.json을 Git에 커밋하지 마세요 (이미 .gitignore에 포함됨)

### 권장 사항

1. `.gitignore`에 다음 항목 포함 여부 확인:
   ```
   .obsidian/plugins/*/data.json
   ```

2. API 키 주기적 재생성:
   - Obsidian 설정 → Local REST API → "Regenerate API Key"

---

**제작**: Claude Code
**날짜**: 2025-12-19
**버전**: 2.2.0 (Custom Frames Edition)
