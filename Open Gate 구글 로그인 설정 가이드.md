---
created: 2025-12-18
tags: [obsidian, open-gate, google, 설정, 로그인]
---

# Open Gate 구글 로그인 설정 가이드

## 문제 상황
Open Gate 플러그인에서 NotebookLM, Gemini, Google AI Studio 등의 구글 서비스 로그인 시 "로그인할 수 없음" 오류가 발생합니다.

## 해결 방법

### 1단계: User-Agent 변경 (완료 ✓)

Open Gate 설정 파일에서 User-Agent를 Mac 버전으로 변경했습니다:
- **변경 전**: Windows NT 10.0 User-Agent
- **변경 후**: Macintosh Intel Mac OS X 10_15_7 User-Agent

**파일 위치**: `.obsidian/plugins/open-gate/data.json`

### 2단계: Obsidian 재시작

1. Obsidian을 완전히 종료합니다 (Cmd + Q)
2. Obsidian을 다시 실행합니다
3. Open Gate에서 구글 서비스에 다시 로그인을 시도합니다

### 3단계: 로그인 시도

Open Gate의 NotebookLM, Gemini, Google AI Studio 탭에서 로그인을 다시 시도합니다.

---

## User-Agent 변경만으로 해결되지 않는 경우

### 방법 A: 외부 브라우저 로그인 (권장)

1. **Safari나 Chrome에서 먼저 로그인**
   - Safari/Chrome에서 https://notebooklm.google.com 접속
   - 구글 계정으로 로그인
   - 로그인 상태 유지

2. **Obsidian에서 Open Gate 사용**
   - 동일한 브라우저 세션을 공유하여 자동 로그인될 수 있습니다

### 방법 B: 데스크톱 앱 User-Agent 추가 설정

더 고급 User-Agent를 사용하여 데스크톱 앱으로 인식되도록 설정:

```json
"userAgent": "Mozilla/5.0 (Macintosh; Apple Silicon Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36 Edg/131.0.0.0"
```

### 방법 C: Google OAuth 앱 등록 (고급)

구글의 보안 정책을 우회하기 위해 자체 OAuth 앱을 등록할 수 있습니다:

#### 1. Google Cloud Console 설정

1. [Google Cloud Console](https://console.cloud.google.com) 접속
2. 새 프로젝트 생성: "Obsidian Open Gate"
3. **API 및 서비스** > **사용자 인증 정보**로 이동
4. **사용자 인증 정보 만들기** > **OAuth 클라이언트 ID** 선택

#### 2. OAuth 동의 화면 구성

1. **OAuth 동의 화면** 탭 선택
2. 사용자 유형: **외부** 선택
3. 앱 정보 입력:
   - 앱 이름: `Obsidian Open Gate`
   - 사용자 지원 이메일: 본인 이메일
   - 개발자 연락처 정보: 본인 이메일
4. **저장 후 계속**

#### 3. OAuth 클라이언트 ID 생성

1. **사용자 인증 정보** 탭으로 돌아가기
2. **사용자 인증 정보 만들기** > **OAuth 클라이언트 ID**
3. 애플리케이션 유형: **데스크톱 앱** 선택
4. 이름: `Obsidian Desktop App`
5. **만들기** 클릭

#### 4. 클라이언트 ID 및 시크릿 저장

생성된 클라이언트 ID와 클라이언트 시크릿을 안전한 곳에 저장합니다.

> ⚠️ **주의**: 이 방법은 Open Gate 플러그인이 OAuth를 지원하는 경우에만 작동합니다. 현재 Open Gate는 OAuth를 직접 지원하지 않을 수 있습니다.

---

## 대안: 구글 서비스 별도 사용

Open Gate에서 로그인이 계속 실패한다면:

### NotebookLM
- **브라우저 확장**: Chrome/Safari에서 직접 사용
- **자동화 스크립트**: `.scripts/notebooklm_sync/sync.py` 사용 (이미 설정됨)

### Gemini
- **웹 브라우저**: 별도 탭에서 사용
- **Obsidian Custom Frames 플러그인**: iframe으로 임베드 (로그인 제한 적음)

### Google AI Studio
- **웹 브라우저**: 직접 접속하여 사용
- **API 키 사용**: API 키를 발급받아 Obsidian 플러그인과 연동

---

## 참고 자료

- [Open Gate GitHub](https://github.com/nguyenvanduocit/obsidian-open-gate)
- [Google OAuth 문서](https://developers.google.com/identity/protocols/oauth2)
- [Electron User-Agent 설정](https://www.electronjs.org/docs/latest/api/session#sessetsetuseragent)

---

## 트러블슈팅

### 여전히 "로그인할 수 없음" 오류가 발생하는 경우

1. **브라우저 캐시 삭제**
   - Obsidian 설정 > 고급 > 캐시 삭제

2. **플러그인 재설치**
   - Open Gate 플러그인 비활성화
   - `.obsidian/plugins/open-gate` 폴더의 `data.json` 백업
   - 플러그인 삭제 후 재설치
   - `data.json` 복원

3. **Obsidian 버전 확인**
   - 최신 버전의 Obsidian을 사용 중인지 확인
   - 업데이트 필요 시 업데이트 진행

4. **네트워크 설정 확인**
   - VPN이나 프록시 사용 중이라면 비활성화
   - 방화벽 설정 확인

---

## 성공 확인

로그인 성공 시:
- ✅ 구글 계정 프로필이 표시됨
- ✅ NotebookLM/Gemini/AI Studio 정상 작동
- ✅ "로그인할 수 없음" 메시지 사라짐

문제가 지속되면 [Open Gate GitHub Issues](https://github.com/nguyenvanduocit/obsidian-open-gate/issues)에 문의하세요.
