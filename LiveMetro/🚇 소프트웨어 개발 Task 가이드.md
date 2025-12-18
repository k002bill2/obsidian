

```
# 🛠️ 3단계 소프트웨어 개발 Task 가이드

---

## 📌 Phase 1: Codebase Exploration & Analysis

**목표:**  
- 프로젝트의 구조와 스타일을 체계적으로 파악  
- 적용된 프레임워크/라이브러리, 코딩 컨벤션, 에러 처리, 주요 파일 등 분석

---

### 1. 코드베이스 파일 목록 & 분석

- 관련 파일, 디렉터리, 모듈 전체 탐색  
- 주요 함수, 클래스, 패턴, 키워드 정리
- 각 파일별 용도 및 relevance 간략 기록

---

### 2. 코드 스타일 및 아키텍처 문서화

- 네이밍, 코드 포매팅, 아키텍처 구조 기술
- 사용 프레임워크/라이브러리 패턴
- 에러 처리 및 예외 정책

---

**실제 작성 예시**

> **Relevant Files**
> - `/src/App.js` : 메인 React 컴포넌트  
> - `/utils/api.js` : API 연동 함수 모음  
> - `/styles/theme.css` : 전체 테마 CSS  
>
> **Code Conventions**
> - Naming: camelCase, PascalCase(컴포넌트)
> - Architecture: Atomic Design 패턴
> - Styling: 2칸 들여쓰기, ESLint 룰 적용
>
> **Key Dependencies & Patterns**
> - React: 함수형 컴포넌트, 훅 중심  
> - Axios: API 통신  
> - React Query: 서버 상태 관리

---

## 📌 Phase 2: Implementation Planning

**목표:**  
- 각 모듈/기능별로 세부 업무(Task) 분리  
- Step별 명확한 Acceptance Criteria로 완성 기준 설정

---

### [예시] Module: UserProfile

**요약:**  
- 사용자 프로필 페이지에 정보 표시 및 편집 기능 추가

**주요 업무(Task):**  
- [ ] 프로필 정보 조회/표시 기능 구현  
- [ ] 프로필 정보 수정/저장 로직 구현

**Acceptance Criteria:**  
- [ ] 프로필 데이터 정확히 로딩/표시 
- [ ] 저장 버튼 클릭 시 수정내용 반영  
- [ ] 실패 시 적절한 에러 메시지 노출  
- [ ] 코드 일관성, 최적화, 가독성 준수

#### 📋 다른 모듈도 동일 방식으로 기재

---

## 📌 Phase 3: Implementation Execution

**목표:**  
- 각 Task별로 Plan에 따라 구현  
- 코드 품질, 컨벤션, 최소주의, Acceptance Criteria 충족 실시간 검증

---

### 🛡️ 검증 체크리스트

- [ ] Acceptance Criteria 100% 달성  
- [ ] 컨벤션 준수 확인  
- [ ] 최소화된/명확한 코드 구조 유지  
- [ ] 전문가 수준 코드 품질 달성

---

## ✅ 성공 검증(Validation)

- 모든 단계가 순차적으로 진행되었는지 확인
- 각 단계 결과가 요구 형식/기준 충족하는지 점검
- Acceptance Criteria 및 코드 품질 최종 만족 확인

---

> *이 문서를 Notion에 복사하여, 각 업무(Task)/모듈별로 할 일 항목을 체크박스로 관리하면 실질적인 Task Tracking 기반의 소프트웨어 개발이 가능합니다.*
```

**활용 팁**

- 실제 작업 시 각 Phase 및 Task별 진행상황을 체크리스트, 표, 하이라이트 등을 활용하여 Notion 내에서 가시적으로 관리하세요.
- 위 예시를 "템플릿"으로 복제해 모듈/기능별 Task 관리에 반복 활용할 수 있습니다.

