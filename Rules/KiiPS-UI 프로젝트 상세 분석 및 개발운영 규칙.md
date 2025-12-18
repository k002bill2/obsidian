  
  

# 1. 프로젝트 상세 분석
  
### 1) 전체 구조 및 기술 스택

  

- **백엔드:** Java(Spring Framework 기반), application.properties/yml, logback-spring.xml, 다국어 메시지

- **프론트엔드:** JSP(업무별 분리), JavaScript, CSS, HTML, JSTL/EL 권장

- **정적 리소스:** src/main/resources/static 및 src/main/webapp 하위에 css, js, images, vendor(외부 라이브러리) 등

- **빌드/배포:** Maven 기반 빌드(target/에 결과물 생성, WAR 패키징)

- **로그/문서:** logs/ 폴더에 로그, ReportFile/에 리포트 샘플 및 JSON 등

- **다국어 지원:** messages.properties, messages_en.properties 등

  
  
  

### 2) 폴더 및 파일 구조

  

- **src/main/java/**: Java 소스(Controller, Service, DAO 등)

- **src/main/resources/**

- application.properties, logback-spring.xml, messages/

- static/ (css, js, images, vendor 등)

- templates/ (템플릿 HTML)

- **src/main/webapp/**

- 업무별 JSP(예: COM, preui, clipsoft5 등)

- WEB-INF/jsp/ (보안상 직접 접근 불가 JSP)

- **ReportFile/**: 리포트 샘플, JSON 등

- **logs/**: 각종 로그 파일

- **target/**: 빌드 결과물(WAR, 클래스, 정적 리소스 복사본 등)

  
  
  

### 3) 코드/운영 규칙 및 특징

   
#### (1) 네이밍/코딩 스타일

- Java, JSP, JS, CSS 모두 일관된 네이밍 컨벤션을 준수한다.

- Java: 카멜케이스(CamelCase), 클래스는 대문자 시작, 변수/메서드는 소문자 시작

- JSP/HTML/JS/CSS: 소문자, 하이픈(-) 또는 카멜케이스 사용

- 들여쓰기는 4칸(스페이스)로 통일한다.

- 불필요한 주석, 사용하지 않는 코드, 콘솔 출력은 금지한다.

  

#### (2) 폴더 및 파일 구조

- 업무별, 기능별로 폴더를 구분하여 관리한다.

- 정적 리소스(css, js, images 등)는 src/main/resources/static 또는 src/main/webapp 하위에 위치시킨다.

- JSP 파일은 src/main/webapp 하위에 업무별로 분리한다.

  

#### (3) 백엔드(Spring, Java)

- 모든 설정은 application.properties 또는 application.yml에 명확히 정의한다.

- 로그는 logback-spring.xml을 통해 관리하며, 로그 레벨 및 포맷을 준수한다.

- 메시지(다국어)는 messages.properties, messages_en.properties 등으로 관리한다.

- 예외 처리는 ControllerAdvice 등으로 일관되게 처리한다.

  

#### (4) 프론트엔드(JSP, JS, CSS)

- JSP 내 스크립트릿(scriptlet) 사용을 지양하고, JSTL 및 EL(Expression Language) 사용을 권장한다.

- JS/CSS는 외부 파일로 분리하여 관리하며, 인라인 스크립트/스타일 최소화

- 외부 라이브러리(bootstrap, jquery 등)는 vendor 폴더에 통합 관리한다.

- 반응형 웹 및 접근성(Accessibility)을 항상 고려한다.

  

#### (5) 보안 및 개인정보

- 모든 입력값은 서버/클라이언트 양쪽에서 유효성 검증을 수행한다.

- 개인정보, 민감정보는 암호화 및 접근제어를 철저히 한다.

- 파일 업로드/다운로드 시 확장자, 용량, 경로 등 보안 체크를 필수로 한다.

  

#### (6) 커밋 및 협업

- 커밋 메시지는 명확하고 일관되게 작성한다. (예: [기능] 투자관리 메뉴 추가)

- 불필요한 파일, 로그, 임시 파일은 커밋하지 않는다.

- 코드 리뷰 및 병합 전 반드시 빌드/테스트를 완료한다.

  

#### (7) 문서화 및 외부 라이브러리

- 모든 신규 기능/수정은 문서화(README, 위키 등)한다.

- 외부 라이브러리 추가 시 버전 및 라이선스를 명확히 기록한다.

- 배포 전 반드시 로그, 보안, 성능 점검을 수행한다.

  

#### (8) URL 및 JSP 규칙

- 공통: /COM/{기능명}, 팝업: /COM/POPUP, 모듈별: /{모듈명}/{기능명}

- JSP: /WEB-INF/jsp/kiips/{모듈명}/, 접두사 kiips/, 접미사 .jsp

- 정적 리소스: /static/css/, /static/js/, /static/img/, /static/fonts/

  

#### (9) REST API 및 파라미터

- @RequestMapping, @RequestParam, @PathVariable 활용

- 성공: JSP 뷰 반환, 에러: ExceptionControllerAdvice 처리

  

#### (10) 테스트 및 문서화

- 테스트: src/test/java/kr/co/kiips/ui/controller/

- 테스트 클래스: {클래스명}Test.java, 메서드: test{메서드명}

- Swagger/OpenAPI, README 작성

  

#### (11) 배포 및 모니터링

- 빌드: ./build_UI.sh, mvn clean package

- 배포: start.sh, stop.sh, log_UI.sh

- Actuator: /logos/monitor, /logos/monitor/health, /logos/monitor/metrics

- 로그: ./logs/, log.YYYY-MM-DD-N.log

  

#### (12) 보안/성능/호환성 주의사항

- 민감 정보 환경변수 관리, API 키 노출 금지

- 대용량 파일 업로드 시 메모리 고려, 캐시 활용

- Java 8, Spring Boot 2.4.3, 브라우저 호환성 유지

  

#### (13) 체크리스트

- 개발 전: 환경설정, 모듈 구조, 네이밍 컨벤션 확인

- 개발 중: 로깅, 예외, 입력 검증, 보안 적용

- 개발 후: 테스트, 코드 리뷰, 문서, 배포 스크립트 확인

  

#### (14) 접근성 및 성능 고려사항
 

### 접근성(A11y)

- 모든 이미지에는 적절한 `alt` 속성을 제공합니다.
- 폼 요소에는 적절한 `label`을 연결합니다.
- 키보드 탐색이 가능하도록 적절한 포커스 관리를 구현합니다.
- ARIA 속성을 적절히 사용하여 스크린 리더 지원을 강화합니다.

  

### 성능

- 큰 이미지는 최적화하여 사용합니다.
- 불필요한 리렌더링을 방지하기 위한 최적화 기법을 적용합니다.
- 코드 스플리팅을 활용하여 초기 로딩 시간을 단축합니다.
- 지연 로딩(Lazy Loading)을 적용하여 필요한 시점에 컴포넌트를 로드합니다.