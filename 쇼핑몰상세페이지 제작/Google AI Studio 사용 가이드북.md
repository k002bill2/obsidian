

> AI싱크클럽 썸네일 및 AI 상세페이지 빌더를 위한 API 설정 가이드

---

## 목차

1. [Google AI Studio 소개](#1-google-ai-studio-소개)
2. [계정 생성 및 로그인](#2-계정-생성-및-로그인)
3. [API Key 발급받기](#3-api-key-발급받기)
4. [API Key 프로젝트에 적용하기](#4-api-key-프로젝트에-적용하기)
5. [사용량 및 요금 확인](#5-사용량-및-요금-확인)
6. [자주 묻는 질문(FAQ)](#6-자주-묻는-질문faq)
7. [문제 해결 가이드](#7-문제-해결-가이드)

---

## 1. Google AI Studio 소개

### Google AI Studio란?

Google AI Studio는 Google의 Gemini AI 모델을 쉽게 테스트하고 API Key를 발급받을 수 있는 웹 기반 플랫폼입니다.

### 우리 프로젝트에서 사용하는 모델

| 모델명 | 용도 | 설명 |
|--------|------|------|
| `gemini-2.0-flash` | 텍스트 기획 | 상세페이지 구조 및 카피 생성 |
| `gemini-2.0-flash-exp-image-generation` | 이미지 생성 | 상세페이지/썸네일 이미지 생성 |

---

## 2. 계정 생성 및 로그인

### Step 1: Google AI Studio 접속

1. 웹 브라우저에서 **[https://aistudio.google.com](https://aistudio.google.com)** 접속
2. Google 계정으로 로그인 (Gmail 계정 필요)

### Step 2: 서비스 약관 동의

1. 처음 접속 시 서비스 약관이 표시됩니다
2. 약관을 읽고 **"동의"** 버튼 클릭
3. 사용 목적 선택 (개인/비즈니스)

> **참고**: 한국에서도 정상적으로 사용 가능합니다.

---

## 3. API Key 발급받기

### Step 1: API Key 메뉴 접근

1. AI Studio 메인 화면에서 좌측 사이드바 확인
2. **"Get API key"** 버튼 클릭

![API Key 메뉴 위치](https://via.placeholder.com/600x200?text=좌측+사이드바+→+Get+API+key)

### Step 2: 새 API Key 생성

1. **"Create API key"** 버튼 클릭
2. 프로젝트 선택 화면이 나타남:
   - **새 프로젝트 생성**: "Create API key in new project" 선택
   - **기존 프로젝트 사용**: 드롭다운에서 프로젝트 선택

### Step 3: API Key 복사 및 저장

1. 생성된 API Key가 화면에 표시됩니다
2. **"Copy"** 버튼을 클릭하여 복사
3. **중요**: 이 키를 안전한 곳에 저장하세요!

```
예시 형식: AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

> **보안 주의사항**
> - API Key는 비밀번호처럼 관리하세요
> - 공개 저장소(GitHub 등)에 절대 업로드하지 마세요
> - 타인과 공유하지 마세요

---

## 4. API Key 프로젝트에 적용하기

### 방법 1: 환경 변수 파일 사용 (권장)

프로젝트 루트 폴더에 `.env` 파일을 생성합니다:

```bash
# .env 파일 생성
VITE_GEMINI_API_KEY=여기에_발급받은_API_KEY_입력
```

> **주의**: `.env` 파일은 `.gitignore`에 추가하여 Git에 포함되지 않도록 하세요.

### 방법 2: 앱 내 직접 입력

1. AI싱크클럽 빌더 앱 실행
2. 상단의 **"API Key 설정"** 버튼 클릭
3. 발급받은 API Key 입력
4. **"저장"** 버튼 클릭

```
┌─────────────────────────────────────────┐
│  Google AI Studio API Key 입력          │
│  ┌───────────────────────────────────┐  │
│  │ AIzaSy...                         │  │
│  └───────────────────────────────────┘  │
│                            [저장] [취소] │
└─────────────────────────────────────────┘
```

### API Key 연결 확인

정상적으로 연결되면:
- 상태 표시: ✅ "API 연결됨"
- 기능 사용 가능: 기획 생성, 이미지 생성 버튼 활성화

---

## 5. 사용량 및 요금 확인

### 무료 사용량 (Free Tier)

Google AI Studio는 무료로 시작할 수 있습니다:

| 항목 | 무료 한도 |
|------|-----------|
| Gemini 2.0 Flash | 분당 15 요청, 일일 1,500 요청 |
| 이미지 생성 | 분당 10 요청 |

### 사용량 확인 방법

1. [Google Cloud Console](https://console.cloud.google.com) 접속
2. 좌측 메뉴에서 **"APIs & Services"** → **"Dashboard"** 선택
3. "Generative Language API" 클릭
4. 사용량 그래프 확인

### 유료 전환 시 요금

대량 사용 시 유료 전환이 필요합니다:

| 모델 | 입력 (100만 토큰당) | 출력 (100만 토큰당) |
|------|---------------------|---------------------|
| Gemini 2.0 Flash | $0.10 | $0.40 |
| 이미지 생성 | 이미지당 약 $0.02~0.04 |

> **팁**: 처음에는 무료 한도 내에서 테스트하고, 서비스 확장 시 유료 전환을 고려하세요.

---

## 6. 자주 묻는 질문(FAQ)

### Q1. API Key가 작동하지 않아요

**확인사항:**
- [ ] API Key를 정확히 복사했는지 확인 (앞뒤 공백 제거)
- [ ] 프로젝트에서 Generative Language API가 활성화되어 있는지 확인
- [ ] 무료 한도를 초과하지 않았는지 확인

### Q2. "Quota exceeded" 오류가 발생해요

**해결방법:**
1. 잠시 기다렸다가 다시 시도 (분당 요청 제한)
2. 일일 한도 초과 시 다음 날까지 대기
3. 유료 플랜으로 업그레이드 고려

### Q3. 이미지가 생성되지 않아요

**확인사항:**
- [ ] 이미지 생성 모델(`gemini-2.0-flash-exp-image-generation`)이 지원되는지 확인
- [ ] 프롬프트에 부적절한 내용이 포함되지 않았는지 확인
- [ ] 네트워크 연결 상태 확인

### Q4. 한국어 카피가 영어로 생성돼요

**해결방법:**
- 시스템 프롬프트에 "반드시 한국어로만 작성하세요"가 포함되어 있는지 확인
- 프롬프트 마지막에 "언어: 한국어" 명시

### Q5. API Key를 잃어버렸어요

**해결방법:**
1. AI Studio에서 기존 키 삭제
2. 새 API Key 발급
3. 프로젝트에 새 키 적용

---

## 7. 문제 해결 가이드

### 오류 코드별 해결방법

| 오류 코드 | 의미 | 해결방법 |
|-----------|------|----------|
| 400 | 잘못된 요청 | 프롬프트 형식 확인 |
| 401 | 인증 실패 | API Key 재확인 |
| 403 | 권한 없음 | API 활성화 상태 확인 |
| 429 | 요청 한도 초과 | 잠시 대기 후 재시도 |
| 500 | 서버 오류 | Google 상태 확인 후 재시도 |

### API 활성화 확인 방법

1. [Google Cloud Console](https://console.cloud.google.com) 접속
2. **"APIs & Services"** → **"Enabled APIs"** 이동
3. **"Generative Language API"** 가 목록에 있는지 확인
4. 없다면 **"+ ENABLE APIS AND SERVICES"** 클릭 후 검색하여 활성화

### 디버깅 팁

브라우저 개발자 도구(F12)에서 네트워크 탭을 확인하세요:

```javascript
// 콘솔에서 API 연결 테스트
fetch('https://generativelanguage.googleapis.com/v1/models?key=YOUR_API_KEY')
  .then(res => res.json())
  .then(data => console.log('사용 가능한 모델:', data))
  .catch(err => console.error('오류:', err));
```

---

## 부록: 빠른 체크리스트

### 시작 전 준비물
- [ ] Google 계정 (Gmail)
- [ ] 인터넷 연결

### 설정 완료 체크리스트
- [ ] Google AI Studio 가입 완료
- [ ] API Key 발급 완료
- [ ] API Key 안전한 곳에 저장
- [ ] 프로젝트에 API Key 적용
- [ ] 연결 테스트 성공

---

## 문의 및 지원

- **Google AI Studio 공식 문서**: [https://ai.google.dev/docs](https://ai.google.dev/docs)
- **API 레퍼런스**: [https://ai.google.dev/api](https://ai.google.dev/api)
- **커뮤니티 포럼**: [Google AI 개발자 포럼](https://discuss.ai.google.dev/)

---

*마지막 업데이트: 2025년 12월*
