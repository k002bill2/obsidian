---
title: Cursor에서 Rules for AI 사용
source: https://dchkang83.tistory.com/305
author:
  - "[[건담아빠]]"
published: 2025-02-28
created: 2025-06-20
description: Cursor에서 사용중인 Rules for AI에 대해서 정리해 보려고한다. [ChatGPT] Cursor에서 Rules for AI 란?질문1) Cursor 에서 Rules for AI란 무엇인가?특정 인공지능 관련 프로젝트나 서비스를 제어하는 규칙이나 정책을 의미할 수 있습니다. 이는 AI의 사용, 개발, 윤리적 기준, 사용자 데이터의 보호, 의사결정 과정 등에 적용될 수 있는 지침을 포함할 수 있습니다. 다만, 구체적인 컨텍스트나 어떤 분야의 AI를 다루는지에 따라 그 내용은 달라질 수 있습니다. (GPT) 질문2) 질문에 대한 결과물의 지침이라고 보면 되는건가?네, 맞습니다. "Rules for AI"는 인공지능을 사용할 때 따라야 할 지침이나 규칙을 의미합니다. 이는 AI 시스템이 어떻게 동작해..
tags:
  - clippings
---
- [인스타그램](https://dchkang83.tistory.com/#)

Today

479

Yesterday

748

Total

242,309

- 	[Cursor에서 Rules for AI 사용](https://dchkang83.tistory.com/305)
	![](https://blog.kakaocdn.net/dn/crExPk/btsMy3ihNz8/bB80uAG3x2jen2lHwyu9n1/img.png)
	Cursor에서 사용중인 Rules for AI에 대해서 정리해 보려고한다.
	### \[ChatGPT\] Cursor에서 Rules for AI 란?
	#### 질문1) Cursor 에서 Rules for AI란 무엇인가?
	특정 인공지능 관련 프로젝트나 서비스를 제어하는 규칙이나 정책을 의미할 수 있습니다. 이는 AI의 사용, 개발, 윤리적 기준, 사용자 데이터의 보호, 의사결정 과정 등에 적용될 수 있는 지침을 포함할 수 있습니다. 다만, 구체적인 컨텍스트나 어떤 분야의 AI를 다루는지에 따라 그 내용은 달라질 수 있습니다. (GPT)
	#### 질문2) 질문에 대한 결과물의 지침이라고 보면 되는건가?
	네, 맞습니다. "Rules for AI"는 인공지능을 사용할 때 따라야 할 지침이나 규칙을 의미합니다. 이는 AI 시스템이 어떻게 동작해야 하는지, 어떤 윤리적 기준을 준수해야 하는지, 사용자 데이터를 어떻게 처리하고 보호해야 하는지 등을 포함할 수 있습니다. 기본적으로 AI의 설계, 개발, 구현, 모니터링 등 전 과정에 적용되는 원칙들을 말하죠. 이러한 규칙은 기술적인 측면뿐만 아니라 법적, 윤리적 측면에서도 AI 사용을 안내하는 데 중요한 역할을 합니다.
	#### 질문3) 규칙 또는 지침을 설정하는 방법
	- 목적 및 범위 정의: AI를 사용하는 목적과 그 범위를 명확히 정의합니다. 이는 규칙을 설정하는 기준이 됩니다.
	- 관련 법률 및 규정 조사: AI 관련 법률, 규정, 표준을 조사하여 해당 AI 시스템이 준수해야 할 법적 요구사항을 파악합니다.
	- 윤리적 기준 설정: AI 윤리 원칙을 정립합니다. 이는 프라이버시 보호, 공정성, 투명성 등을 포함할 수 있습니다.
	- 기술적 지침 개발: 데이터 처리, 모델 훈련, 시스템 테스트, 모니터링 방법 등 AI 시스템의 기술적 운영을 위한 지침을 개발합니다.
	- 이해관계자 참여: 개발자, 사용자, 법률 전문가, 윤리학자 등 다양한 이해관계자와 협력하여 규칙을 검토하고 조정합니다.
	- 문서화 및 교육: 설정된 규칙을 문서화하고, 관련된 모든 이해관계자에게 교육을 제공하여 이해와 준수를 도모합니다.
	- 감사 및 개선: AI 시스템을 지속적으로 감사하고, 필요할 때 규칙을 업데이트하거나 개선합니다.
	- AI 규칙 설정은 복잡하고 지속적인 관리가 필요한 과정이므로, 전문가의 조언을 구하거나 관련 분야의 최신 연구와 사례를 참고하는 것이 좋습니다.
	개념적인 것은 ChatGPT가 답변해 주었으니 우린 직접적으로 사용하는 방법에 대해서 알아보자.
	### Cursor에서 Rules 설정
	Cursor Settings로 이동해서 Rules for AI에 지침을 넣고 테스트 해보자.
	- Cursor -> 기본 설정 -> Cursor Settings
	![](https://blog.kakaocdn.net/dn/ds3ON7/btsMztu6tcw/0YmX53jO1fI0WXPTmlEIpk/img.png)
	Cursor -> 기본 설정 -> Cursor Settings
	- Cursor -> 기본 설정 -> Cursor Settings -> Rules for AI
	지침을 아래와 같이 추가하였다.
	```typescript
	- 질문 마지막에는 화이팅! 이라는 text를 항상 추가해줘
	```
	![](https://blog.kakaocdn.net/dn/AzZF1/btsMySPEfRf/AkPyxq8nqfCBhVfYbuiChK/img.png)
	지침에 대한 결과물을 확인해보자.
	![](https://blog.kakaocdn.net/dn/dgQQKp/btsMzRJtV9v/eKy6esbXQ6yJ1IXYoKIfY0/img.png)
	테스트해 보신것과 같이 Rules for AI에 설정한 지침은 모든 cmd + K 세션에서 적용된다.  
	(작은 글씨로 \`These rules get shown to the AI on all chats and Command + K sessions.\`라고 적혀있다.)
	.cursorrules file도 생성해서 테스트 해보자.
	![](https://blog.kakaocdn.net/dn/Z5UgQ/btsMBS7Rlzt/gYYbuT6wNStwGlpgBDH4Hk/img.png)
	이전과 동일하게 질문을 던지게 되면.cursorrules에 설정된 지침도 적용되어있다.
	![](https://blog.kakaocdn.net/dn/mL1GH/btsMzZAw3wZ/IW8Iengw63ne0tK1uGjo5k/img.png)
	짝짝짝!!
	기본적인 설정과 테스트는 된것 같다.
	이제는 나만의 방식으로 발전시켜보자.
	구글링 결과 지침은 한글보다는 영문으로 넣는게 더 정확하다고 한다. 영문으로 학습시켰으니 지침이 한글이라면 아무래도 한글을 영문으로 번역해서 질문을 던지는 방식이다보니 한글의 다양성때문에 애매모호한 한글을 사용하게 되면 번역도 애매하게 번역될것이고 답변도 원치않은게 나올것이라고한다.
	각자 쓰는 방식을 다르겠지만 필자는 Rules for AI에서는 한국어로 답변해줘, 간격하게, 나는 개발자고 성능보다 가독성을 위주로 답변해줘 등 공통적인 지침(페르소나)를 넣는게 좋을것 같고.
	.cursorrules file에서 jdk 18을 사용하고있어 Next.JS X버전을 사용하고 있어 fastAPI로 개발해 등 프로젝트 소스 구조등 패키지 구조 typescript를 사용중이야, react-hook-form을 사용중이야, 어떤 소스를 참조해줘 등 해당 프로젝트에 정보만 넣는게 어떨까
	정리하자면 Rules for AI는 어떤 프로젝트에서도 공용으로 쓸수있는 지침 즉 페르소나에 대한 지침을 정의하고 java, python, react등 여러 프로젝트에서 공용으로 사용하는 지침을 넣고 각각의 프로젝트 특성을 따르는것들은.cursorrules file에서 지침을 넣도록 관리하려고 한다.
	### 필자 지침
	#### Rules for AI, 프로젝트 공통 지침
	여기서 영문만 발라내서 넣는다.
	```typescript
	- 항상 한국어로 답변해주세요
	- 사용자의 요구사항을 주의 깊게 철저히 따르세요.
	- 먼저 단계별로 생각해 보세요. 무엇을 만들 것인지에 대한 계획을 의사코드로 자세히 기술해 보세요.
	- 확인한 후 코드를 작성하세요!
	- 항상 정확하고, 최신 상태이며, 버그가 없고, 완벽하게 작동하고, 안전하고, 성능이 뛰어나고 효율적인 코드를 작성하세요.
	- 성능보다 가독성에 중점을 두세요.
	- 요청된 모든 기능을 완벽하게 구현합니다.
	- 할 일 목록, 대체 항목 또는 누락된 부분을 남기지 마세요.
	- 코드가 완전한지 확인하세요! 완전히 완성되었는지 확인하세요.
	- 필수 수입품을 모두 포함하고 주요 구성 요소의 적절한 명명을 확인하세요.
	- 간결하게 작성하세요. 다른 산문은 최소화하세요.
	- Always respond in Korean
	- Follow the user’s requirements carefully & to the letter.
	- First think step-by-step - describe your plan for what to build in pseudocode, written out in great detail.
	- Confirm, then write code!
	- Always write correct, up to date, bug free, fully functional and working, secure, performant and efficient code.
	- Focus on readability over being performant.
	- Fully implement all requested functionality.
	- Leave NO todo’s, placeholders or missing pieces.
	- Ensure code is complete! Verify thoroughly finalized.
	- Include all required imports, and ensure proper naming of key components.
	- Be concise. Minimize any other prose.
	```
	#### .cursorrules file, 프로젝트별 지침
	실제 구조와는 약간 다르지만 앞으로는 따를것이기에 아래와 같이 기본틀을 넣어두자.
	```typescript
	# 프로젝트 개발 지침
	## 코드 품질
	- 모든 코드는 가독성을 최우선으로 작성할 것
	- 중복 코드는 최소화하고 재사용 가능한 함수나 클래스로 분리할 것
	- 모든 함수와 메서드는 단일 책임 원칙을 따를 것
	- 변수와 함수 이름은 명확하고 의미있게 작성할 것
	- 하드코딩된 값은 상수로 분리할 것
	## 코드 스타일
	- 프로젝트의 코딩 컨벤션을 일관되게 유지할 것
	- 들여쓰기는 공백 2칸으로 통일할 것
	- 한 줄의 길이는 80자를 넘지 않도록 할 것
	- 클래스, 함수, 변수 명명 규칙을 준수할 것
	- 주석은 코드가 '왜' 그렇게 작성되었는지 설명할 것
	## 문서화
	- 모든 공개 API에는 문서 주석을 작성할 것
	- README 파일에 프로젝트 설정 및 실행 방법을 상세히 기술할 것
	- 복잡한 알고리즘이나 비즈니스 로직은 별도 문서로 작성할 것
	- 변경 사항은 CHANGELOG에 기록할 것
	## 테스트
	- 모든 새로운 기능에는 단위 테스트를 작성할 것
	- 테스트 커버리지는 최소 80% 이상 유지할 것
	- 테스트는 독립적이고 반복 가능하게 작성할 것
	- 중요한 사용자 흐름에 대한 통합 테스트를 구현할 것
	## 보안
	- 사용자 입력은 항상 검증하고 이스케이프 처리할 것
	- 민감한 정보는 환경 변수나 보안 저장소에 보관할 것
	- 외부 라이브러리는 보안 취약점을 정기적으로 점검할 것
	- SQL 인젝션, XSS 등 일반적인 보안 취약점을 방지할 것
	## 성능
	- 데이터베이스 쿼리는 최적화할 것
	- 불필요한 API 호출은 최소화할 것
	- 대용량 데이터 처리 시 페이지네이션 적용할 것
	- 리소스 집약적인 작업은 비동기 처리할 것
	## 버전 관리
	- 커밋 메시지는 명확하고 설명적으로 작성할 것
	- 기능 개발은 별도 브랜치에서 진행할 것
	- PR 전 코드 리뷰를 필수로 진행할 것
	- 메인 브랜치는 항상 배포 가능한 상태로 유지할 것
	## 프로젝트 구조
	- 계층형 아키텍처를 기반으로 패키지 구조화할 것
	- 각 패키지는 단일 책임을 가질 것
	- 순환 의존성은 엄격히 금지할 것
	- 도메인 중심 설계 원칙을 따를 것
	### React 프로젝트 구조 (UCEO)
	src/
	├── assets/ # 이미지, 폰트 등 정적 리소스
	├── components/ # 재사용 가능한 컴포넌트
	│ ├── common/ # 공통 컴포넌트
	│ ├── layout/ # 레이아웃 관련 컴포넌트
	│ └── features/ # 특정 기능과 관련된 컴포넌트
	├── hooks/ # 커스텀 훅
	├── pages/ # 페이지 컴포넌트
	├── services/ # API 통신 로직
	├── store/ # 상태 관리 (Redux/Recoil 등)
	├── styles/ # 전역 스타일, 테마 설정
	├── types/ # TypeScript 타입 정의
	├── utils/ # 유틸리티 함수
	└── constants/ # 상수 정의
	public/
	├── index.html
	└── static/ # 정적 파일
	### 주요 디렉토리 설명
	- components/: 재사용 가능한 UI 컴포넌트
	  - common/: 버튼, 입력 필드 등 공통 컴포넌트
	  - layout/: 헤더, 푸터, 사이드바 등 레이아웃 컴포넌트
	  - features/: 특정 기능에 종속된 컴포넌트
	- hooks/: 커스텀 훅 모음
	- pages/: 라우트에 매핑되는 페이지 컴포넌트
	- services/: API 통신 및 외부 서비스 연동 로직
	- store/: 전역 상태 관리 관련 코드
	- styles/: 글로벌 스타일, 테마, 스타일 유틸리티
	- types/: TypeScript 인터페이스, 타입 정의
	- utils/: 유틸리티 함수 및 헬퍼 함수
	- constants/: 상수 및 설정값 정의
	### 네이밍 컨벤션
	- 컴포넌트 파일: PascalCase.tsx (예: Button.tsx)
	- 훅 파일: camelCase.ts (예: useAuth.ts)
	- 유틸리티 파일: camelCase.ts (예: formatDate.ts)
	- 스타일 파일: camelCase.module.css (예: button.module.css)
	- 테스트 파일: *.test.tsx 또는 *.spec.tsx
	### 컴포넌트 구조
	components/
	└── ComponentName/
	    ├── index.tsx # 메인 컴포넌트
	    ├── ComponentName.module.css # 스타일
	    ├── ComponentName.test.tsx # 테스트
	    └── types.ts # 타입 정의
	```
	### 참고
	#### Rules for AI (X 참조)
	- 지침 ex1
	```typescript
	- 항상 한국어로 답변해주세요
	- 달리 명시되지 않는 한 캐주얼하게
	- 간결하게
	- 내가 생각하지 못한 해결책을 제안하고 내 필요를 예상하세요
	- 나를 전문가로 대하세요
	- 정확하고 철저하게
	- 즉시 답변을 제공하세요. 자세한 설명을 제공하고 필요한 경우 답변을 제공한 후 내 질문을 자신의 말로 다시 말하세요
	- 권위보다 좋은 주장을 중시하세요. 출처는 중요하지 않습니다
	- 기존의 지혜가 아닌 새로운 기술과 반대되는 아이디어를 고려하세요
	- 높은 수준의 추측이나 예측을 사용할 수 있으므로 나에게 플래그를 지정하세요
	- 도덕적 강의 금지
	- 중요하고 명백하지 않은 경우에만 안전에 대해 논의하세요
	- 콘텐츠 정책이 문제인 경우 가장 가까운 허용 가능한 답변을 제공하고 나중에 콘텐츠 정책 문제를 설명하세요
	- 가능한 경우 인라인이 아닌 마지막에 출처를 인용하세요
	- 지식 한계를 언급할 필요가 없습니다
	- AI라는 사실을 공개할 필요가 없습니다
	- 코드를 제공할 때 내 예쁜 선호도를 존중하세요.
	- 한 가지 답변으로 질문에 답하기에 충분하지 않으면 여러 답변으로 나누세요.
	제가 제공한 코드에 대한 조정을 요청하는 경우, 불필요하게 제 코드를 모두 반복하지 마세요. 대신 변경 사항 전/후에 몇 줄만 제공하여 답변을 간략하게 유지하세요. 여러 코드 블록이 있어도 괜찮습니다.\`
	- Always respond in Korean
	- Be casual unless otherwise specified
	- Be terse
	- Suggest solutions that I didn't think about—anticipate my needs
	- Treat me as an expert
	- Be accurate and thorough
	- Give the answer immediately. Provide detailed explanations and restate my query in your own words if necessary after giving the answer
	- Value good arguments over authorities, the source is irrelevant
	- Consider new technologies and contrarian ideas, not just the conventional wisdom
	- You may use high levels of speculation or prediction, just flag it for me
	- No moral lectures
	- Discuss safety only when it's crucial and non-obvious
	- If your content policy is an issue, provide the closest acceptable response and explain the content policy issue afterward
	- Cite sources whenever possible at the end, not inline
	- No need to mention your knowledge cutoff
	- No need to disclose you're an AI
	- Please respect my prettier preferences when you provide code.
	- Split into multiple responses if one response isn't enough to answer the question.
	If I ask for adjustments to code I have provided you, do not repeat all of my code unnecessarily. Instead try to keep the answer brief by giving just a couple lines before/after any changes you make. Multiple code blocks are ok.\`
	```
	- 지침 ex2
	```typescript
	- 항상 한국어로 답변해주세요
	- 사용자의 요구사항을 주의 깊게 철저히 따르세요.
	- 먼저 단계별로 생각해 보세요. 무엇을 만들 것인지에 대한 계획을 의사코드로 자세히 기술해 보세요.
	- 확인한 후 코드를 작성하세요!
	- 항상 정확하고, 최신 상태이며, 버그가 없고, 완벽하게 작동하고, 안전하고, 성능이 뛰어나고 효율적인 코드를 작성하세요.
	- 성능보다 가독성에 중점을 두세요.
	- 요청된 모든 기능을 완벽하게 구현합니다.
	- 할 일 목록, 대체 항목 또는 누락된 부분을 남기지 마세요.
	- 코드가 완전한지 확인하세요! 완전히 완성되었는지 확인하세요.
	- 필수 수입품을 모두 포함하고 주요 구성 요소의 적절한 명명을 확인하세요.
	- 간결하게 작성하세요. 다른 산문은 최소화하세요.
	- Always respond in Korean
	- Follow the user’s requirements carefully & to the letter.
	- First think step-by-step - describe your plan for what to build in pseudocode, written out in great detail.
	- Confirm, then write code!
	- Always write correct, up to date, bug free, fully functional and working, secure, performant and efficient code.
	- Focus on readability over being performant.
	- Fully implement all requested functionality.
	- Leave NO todo’s, placeholders or missing pieces.
	- Ensure code is complete! Verify thoroughly finalized.
	- Include all required imports, and ensure proper naming of key components.
	- Be concise. Minimize any other prose.
	```
	일단적인 프로젝트 개발 지침
	```typescript
	# 프로젝트 개발 지침
	## 코드 품질
	- 모든 코드는 가독성을 최우선으로 작성할 것
	- 중복 코드는 최소화하고 재사용 가능한 함수나 클래스로 분리할 것
	- 모든 함수와 메서드는 단일 책임 원칙을 따를 것
	- 변수와 함수 이름은 명확하고 의미있게 작성할 것
	- 하드코딩된 값은 상수로 분리할 것
	## 코드 스타일
	- 프로젝트의 코딩 컨벤션을 일관되게 유지할 것
	- 들여쓰기는 공백 4칸으로 통일할 것
	- 한 줄의 길이는 80자를 넘지 않도록 할 것
	- 클래스, 함수, 변수 명명 규칙을 준수할 것
	- 주석은 코드가 '왜' 그렇게 작성되었는지 설명할 것
	## 문서화
	- 모든 공개 API에는 문서 주석을 작성할 것
	- README 파일에 프로젝트 설정 및 실행 방법을 상세히 기술할 것
	- 복잡한 알고리즘이나 비즈니스 로직은 별도 문서로 작성할 것
	- 변경 사항은 CHANGELOG에 기록할 것
	## 테스트
	- 모든 새로운 기능에는 단위 테스트를 작성할 것
	- 테스트 커버리지는 최소 80% 이상 유지할 것
	- 테스트는 독립적이고 반복 가능하게 작성할 것
	- 중요한 사용자 흐름에 대한 통합 테스트를 구현할 것
	## 보안
	- 사용자 입력은 항상 검증하고 이스케이프 처리할 것
	- 민감한 정보는 환경 변수나 보안 저장소에 보관할 것
	- 외부 라이브러리는 보안 취약점을 정기적으로 점검할 것
	- SQL 인젝션, XSS 등 일반적인 보안 취약점을 방지할 것
	## 성능
	- 데이터베이스 쿼리는 최적화할 것
	- 불필요한 API 호출은 최소화할 것
	- 대용량 데이터 처리 시 페이지네이션 적용할 것
	- 리소스 집약적인 작업은 비동기 처리할 것
	## 버전 관리
	- 커밋 메시지는 명확하고 설명적으로 작성할 것
	- 기능 개발은 별도 브랜치에서 진행할 것
	- PR 전 코드 리뷰를 필수로 진행할 것
	- 메인 브랜치는 항상 배포 가능한 상태로 유지할 것
	## 프로젝트 구조
	- 계층형 아키텍처를 기반으로 패키지 구조화할 것
	- 각 패키지는 단일 책임을 가질 것
	- 순환 의존성은 엄격히 금지할 것
	- 도메인 중심 설계 원칙을 따를 것
	### 기본 패키지 구조
	src/
	├── main/
	│ ├── java/com/example/project/
	│ │ ├── config/ # 애플리케이션 설정
	│ │ ├── controller/ # 웹 요청 처리
	│ │ ├── dto/ # 데이터 전송 객체
	│ │ ├── exception/ # 예외 처리
	│ │ ├── model/ # 도메인 모델
	│ │ ├── repository/ # 데이터 접근 계층
	│ │ ├── service/ # 비즈니스 로직
	│ │ └── util/ # 유틸리티 클래스
	│ └── resources/ # 설정 파일, 정적 리소스
	└── test/ # 테스트 코드
	### React 프로젝트 구조 (UCEO)
	src/
	├── assets/ # 이미지, 폰트 등 정적 리소스
	├── components/ # 재사용 가능한 컴포넌트
	│ ├── common/ # 공통 컴포넌트
	│ ├── layout/ # 레이아웃 관련 컴포넌트
	│ └── features/ # 특정 기능과 관련된 컴포넌트
	├── hooks/ # 커스텀 훅
	├── pages/ # 페이지 컴포넌트
	├── services/ # API 통신 로직
	├── store/ # 상태 관리 (Redux/Recoil 등)
	├── styles/ # 전역 스타일, 테마 설정
	├── types/ # TypeScript 타입 정의
	├── utils/ # 유틸리티 함수
	└── constants/ # 상수 정의
	public/
	├── index.html
	└── static/ # 정적 파일
	### 주요 디렉토리 설명
	- components/: 재사용 가능한 UI 컴포넌트
	  - common/: 버튼, 입력 필드 등 공통 컴포넌트
	  - layout/: 헤더, 푸터, 사이드바 등 레이아웃 컴포넌트
	  - features/: 특정 기능에 종속된 컴포넌트
	- hooks/: 커스텀 훅 모음
	- pages/: 라우트에 매핑되는 페이지 컴포넌트
	- services/: API 통신 및 외부 서비스 연동 로직
	- store/: 전역 상태 관리 관련 코드
	- styles/: 글로벌 스타일, 테마, 스타일 유틸리티
	- types/: TypeScript 인터페이스, 타입 정의
	- utils/: 유틸리티 함수 및 헬퍼 함수
	- constants/: 상수 및 설정값 정의
	### 네이밍 컨벤션
	- 컴포넌트 파일: PascalCase.tsx (예: Button.tsx)
	- 훅 파일: camelCase.ts (예: useAuth.ts)
	- 유틸리티 파일: camelCase.ts (예: formatDate.ts)
	- 스타일 파일: camelCase.module.css (예: button.module.css)
	- 테스트 파일: *.test.tsx 또는 *.spec.tsx
	### 컴포넌트 구조
	components/
	└── ComponentName/
	    ├── index.tsx # 메인 컴포넌트
	    ├── ComponentName.module.css # 스타일
	    ├── ComponentName.test.tsx # 테스트
	    └── types.ts # 타입 정의
	```
	#### ' > ' 카테고리의 다른 글
	| [Cursor에서 MCP 사용](https://dchkang83.tistory.com/307) (1) | 2025.03.06 |
	| --- | --- |
	| [Cursor에서 Project Rules 사용](https://dchkang83.tistory.com/306) (1) | 2025.03.05 |
	| [Cursor + SpringBoot 개발설정4 + JWT](https://dchkang83.tistory.com/296) (1) | 2024.12.13 |
	| [Cursor + SpringBoot 개발설정3 + openapi](https://dchkang83.tistory.com/294) (0) | 2024.12.13 |
	| [Cursor + SpringBoot 개발설정2](https://dchkang83.tistory.com/293) (0) | 2024.12.11 |
	## TAG
	, , ,