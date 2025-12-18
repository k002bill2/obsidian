 

## 📋 프로젝트 개요

  

**프로젝트명**: KiiPS-UI

**기술스택**: Spring Boot 2.4.3, Java 8, JSP, Maven

**아키텍처**: 모듈형 마이크로서비스 아키텍처

**패키징**: WAR

  

## 🏗️ 아키텍처 규칙

  

### 1. 모듈 구조

```

KiiPS-UI/

├── FD/ # Fund Management (펀드 관리)

├── IL/ # Investment & Loan (투자/대출)

├── EL/ # Electronic (전자결재)

├── MI/ # Management Information (관리정보)

├── AC/ # Account (회계)

├── SY/ # System (시스템)

├── PG/ # Program (프로그램)

├── RT/ # Report (리포트)

├── RM/ # Risk Management (리스크 관리)

├── MG/ # Management (관리)

├── ST/ # Statistics (통계)

└── COM/ # Common (공통)

```

  
### 2. 패키지 구조

```

com.kiips.ui/

├── controller/ # 컨트롤러 클래스들

├── config/ # 설정 클래스들

└── LogosApplication.java # 메인 애플리케이션

```

  
## 📝 코딩 규칙

  
### 1. 네이밍 컨벤션

  

#### 클래스명

- **컨트롤러**: `{모듈명}UIController.java` (예: `COMMONUIController.java`)

- **설정 클래스**: `{기능명}Configuration.java` (예: `WebMvcConfiguration.java`)

- **유틸리티**: `{기능명}Util.java`

  

#### 메서드명

- **컨트롤러 메서드**: `{모듈명}_{기능명}` (예: `COM_POPUP`)

- **일반 메서드**: camelCase 사용

  

#### 변수명

- **상수**: `UPPER_SNAKE_CASE` (예: `AUTH_USER_TOKEN`)

- **변수**: `camelCase`

- **전역 변수**: `UPPER_SNAKE_CASE`

  

### 2. 주석 규칙

```java

/**

* 메서드 설명

* @param param1 파라미터 설명

* @return 반환값 설명

* @throws Exception 예외 설명

*/

```

  

### 3. 로깅 규칙

```java

private final Logger logger = LoggerFactory.getLogger(getClass());

  

// 레벨별 사용

logger.debug("디버그 정보");

logger.info("정보성 메시지");

logger.warn("경고 메시지");

logger.error("에러 메시지", exception);

```

  

## 🔧 개발 환경 규칙

  

### 1. 환경 설정

- **로컬**: `app-local.properties`

- **개발**: `app-kiips.properties`

- **스테이징**: `app-stg.properties`

- **운영**: `app-kiips-dr.properties`

  

### 2. 포트 규칙

- **UI 서버**: 8100

- **로그인**: 8801

- **공통**: 8701

- **펀드**: 8601

- **회계**: 8901

- **투자/대출**: 8401

- **전자결재**: 8201

- **프로그램**: 8501

- **시스템**: 8301

- **리포트**: 8001

### 3. 빌드 규칙

```bash

# 빌드 스크립트 사용

./build_UI.sh

  

# 수동 빌드

mvn clean package -pl :KiiPS-UI -am

```

  

## 🛡️ 보안 규칙

  

### 1. 인증/인가

- **JWT 토큰** 사용 (7일 유효기간)

- **세션 관리** 필수

- **XSS 방지** (Lucy Filter 사용)

  

### 2. 입력 검증

```java

// 필수 파라미터 검증

if(StringUtils.isBlank(token) || token.equals("null")) {

// 처리 로직

}

  

// XSS 필터 적용

@Bean

public FilterRegistrationBean getFilterRegistrationBean(){

FilterRegistrationBean registrationBean = new FilterRegistrationBean();

registrationBean.setFilter(new XssEscapeServletFilter());

registrationBean.setOrder(1);

registrationBean.addUrlPatterns("/*");

return registrationBean;

}

```

  

### 3. CORS 설정

```java

@Override

public void addCorsMappings(CorsRegistry registry) {

registry.addMapping("/**")

.allowedOrigins("*")

.allowedMethods("GET", "POST", "OPTIONS")

.allowCredentials(false)

.maxAge(3600);

}

```

  

## 📊 데이터 처리 규칙

  

### 1. JSON 처리

```java

@Autowired

ObjectMapper mapper;

  

// JSON 파싱

Map<String, Object> keys = mapper.readValue(strkeys,

new TypeReference<Map<String, Object>>() {});

  

// JSON 직렬화

model.addAttribute("KEYS", mapper.writeValueAsString(keys));

```

  

### 2. 인코딩

- **기본 인코딩**: UTF-8

- **URL 인코딩**: `URLEncoder.encode(value, "utf-8")`

  

### 3. 날짜 형식

```java

SimpleDateFormat simpleDateFormat = new SimpleDateFormat("0000-00-00 00:00:00");

```

  

## 🌐 웹 규칙

  

### 1. URL 패턴

- **공통**: `/COM/{기능명}`

- **팝업**: `/COM/POPUP`

- **모듈별**: `/{모듈명}/{기능명}`

  

### 2. JSP 규칙

- **경로**: `/WEB-INF/jsp/kiips/{모듈명}/`

- **접두사**: `kiips/`

- **접미사**: `.jsp`

  

### 3. 정적 리소스

- **CSS**: `/static/css/`

- **JS**: `/static/js/`

- **이미지**: `/static/img/`

- **폰트**: `/static/fonts/`

  

## 🔄 API 규칙

  

### 1. REST API 설계

```java

@RequestMapping(value={"/COM/POPUP","/COM/postPop"},

method={RequestMethod.GET,RequestMethod.POST})

public String COM_POPUP(HttpServletRequest req, Model model,

@RequestParam Map<String, String> param) throws Exception {

// 구현

}

```

  

### 2. 응답 형식

- **성공**: JSP 뷰 반환

- **에러**: ExceptionControllerAdvice에서 처리

  

### 3. 파라미터 처리

```java

@RequestParam Map<String, String> param

// 또는

@PathVariable("LIB") String LIB

```

  

## 🧪 테스트 규칙

  

### 1. 테스트 구조

```

src/test/java/

└── kr/co/kiips/

└── ui/

└── controller/

```

  

### 2. 테스트 명명

- **테스트 클래스**: `{클래스명}Test.java`

- **테스트 메서드**: `test{메서드명}`

  

## 📚 문서화 규칙

  

### 1. Swagger/OpenAPI

```java

@Tag(name = "POPUP", description = "공통 팝업을 위한 URL")

@Operation(description = "공통 팝업 만듬", summary = "")

```

  

### 2. README 작성

- 프로젝트 개요

- 설치 방법

- 실행 방법

- API 문서 링크

  

## 🚀 배포 규칙

  

### 1. 배포 스크립트

```bash

# 시작

./start.sh

  

# 중지

./stop.sh

  

# 로그 확인

./log_UI.sh

```

  

### 2. 배포 순서

1. SVN 업데이트

2. Maven 빌드

3. WAR 파일 복사

4. 서버 재시작

5. 로그 확인

  

## 🔍 모니터링 규칙

  

### 1. Actuator 엔드포인트

- **기본 경로**: `/logos/monitor`

- **헬스체크**: `/logos/monitor/health`

- **메트릭**: `/logos/monitor/metrics`

  

### 2. 로그 관리

- **로그 경로**: `./logs/`

- **로그 레벨**: ERROR (프로덕션)

- **로그 포맷**: `log.YYYY-MM-DD-N.log`

  

## ⚠️ 주의사항

  

### 1. 보안

- 민감한 정보는 환경변수로 관리

- 라이선스 키는 별도 관리

- API 키 노출 금지

  

### 2. 성능

- 대용량 파일 업로드 시 메모리 고려

- JSP 컴파일 설정 최적화

- 캐시 설정 활용

  

### 3. 호환성

- Java 8 호환성 유지

- Spring Boot 2.4.3 버전 고정

- 브라우저 호환성 고려

  

## 📋 체크리스트

  

### 개발 전

- [ ] 환경 설정 파일 확인

- [ ] 모듈 구조 파악

- [ ] 네이밍 컨벤션 준수

  

### 개발 중

- [ ] 로깅 추가

- [ ] 예외 처리

- [ ] 입력 검증

- [ ] 보안 고려사항 적용

  

### 개발 후

- [ ] 테스트 실행

- [ ] 코드 리뷰

- [ ] 문서 업데이트

- [ ] 배포 스크립트 확인

  

---

  

**버전**: 1.0

**최종 업데이트**: 2024년

**작성자**: 개발팀