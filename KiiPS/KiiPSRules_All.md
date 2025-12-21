# KiiPS 프로젝트 종합 개발 규칙

## 1. 프로젝트 개요
**KiiPS (Korea Investment Information Processing System)**는 대한민국의 투자정보처리시스템으로, Spring Boot 기반의 마이크로서비스 아키텍처를 채택한 엔터프라이즈급 금융 시스템입니다.

## 2. 아키텍처 원칙

### 2.1 마이크로서비스 아키텍처
- **서비스 분리**: 각 비즈니스 도메인별로 독립적인 서비스 모듈 구성
- **서비스 디스커버리**: Netflix Eureka를 통한 서비스 등록 및 발견
- **API 게이트웨이**: Spring Cloud Gateway를 통한 단일 진입점 관리
- **총 22개의 독립 서비스 모듈** 운영

### 2.2 기술 스택 표준
- **Framework**: Spring Boot 2.4.2
- **Build Tool**: Maven (Multi-module)
- **Java Version**: Java 8
- **Service Discovery**: Netflix Eureka
- **API Gateway**: Spring Cloud Gateway 2020.0.0
- **Security**: JWT + Spring Security
- **Frontend**: JSP + jQuery + Bootstrap
- **Database**: Tibero (Primary), MySQL, MariaDB, MSSQL 지원

## 3. 모듈 구조 규칙

### 3.1 Core Infrastructure 모듈
- **KIIPS-Eureka**: 서비스 디스커버리 서버
- **KIIPS-APIGateway**: API 게이트웨이 (외부 진입점)
- **KiiPS-HUB**: 멀티모듈 빌드 관리 (Parent POM)

### 3.2 Business Services 모듈
- **KiiPS-UI**: 웹 사용자 인터페이스 (Port 8100)
- **KiiPS-Login**: 인증/로그인 서비스 (Port 8801)
- **KiiPS-AC**: 회계 시스템 (Accounting)
- **KiiPS-IL**: 투자한도 관리 (Investment Limit)
- **KiiPS-PG**: 결제 게이트웨이 (Payment Gateway)
- **KiiPS-SY**: 시스템 관리 (System)
- **KiiPS-EL**: 이벤트 로그 관리
- **KiiPS-RT**: 실시간 처리
- **KiiPS-LP**: 대출 처리 (Loan Processing)
- **KiiPS-FD**: 펀드 관리 (Fund)
- **KiiPS-COMMON**: 공통 서비스

### 3.3 External Integration 모듈
- **KIIPS-KSD**: 한국예탁결제원(KSD) 연동
- **KIIPS-TRANSFER**: 데이터 전송 서비스
- **KIIPS-SECURL**: 보안 URL 처리
- **KIIPS-EGOVDOCUMENT**: 전자정부 문서 연동

### 3.4 Support Services 모듈
- **KIIPS-BATCH**: 배치 작업 처리
- **KIIPS-MOBILE**: 모바일 API
- **KIIPS-MSGSender**: 메시지 발송 (SMS, 메일, Push)
- **KIIPS-MES**: 메시징 시스템
- **KIIPS-HELP**: 헬프데스크
- **KIIPS-LAB**: 실험/테스트 환경
- **KIIPS-Infra-Admin**: 인프라 관리

## 4. 디렉토리 구조 규칙

### 4.1 표준 패키지 구조
```
[MODULE_NAME]/
├── src/main/java/com/logos/[module]/
│   ├── config/          # 설정 관련 클래스
│   ├── controller/      # REST API 컨트롤러
│   ├── dao/            # 데이터 액세스 계층
│   ├── model/          # VO, DTO 모델 클래스
│   ├── service/        # 비즈니스 로직 서비스
│   └── util/           # 유틸리티 클래스
├── src/main/resources/
│   ├── application.properties
│   ├── app-local.properties
│   ├── app-stg.properties
│   ├── app-prd.properties
│   ├── app-kiips.properties
│   └── app-shinhanvc.properties
└── [운영 스크립트들]
```

### 4.2 필수 운영 스크립트
- `start.sh` / `stop.sh`: 서비스 시작/종료 스크립트
- `build_*.sh`: 빌드 스크립트
- `log_*.sh`: 로그 모니터링 스크립트

## 5. 환경 설정 규칙

### 5.1 멀티 환경 지원
각 모듈은 다음 환경별 설정 파일을 필수로 보유해야 함:
- `app-local.properties`: 로컬 개발 환경
- `app-stg.properties`: 스테이징 환경
- `app-prd.properties`: 운영 환경
- `app-kiips.properties`: KiiPS 전용 환경
- `app-shinhanvc.properties`: 신한벤처캐피탈 환경

### 5.2 포트 할당 규칙
- **UI 모듈**: 8100번 포트
- **Login 서비스**: 8801번 포트
- **Eureka 서버**: 8761번 포트 (기본)
- **API Gateway**: 8080번 포트 (기본)
- **각 비즈니스 모듈**: 8200번대 이후 할당

## 6. 로깅 시스템 규칙

### 6.1 로그 파일 분류
- `api_time.log`: API 응답시간 측정
- `err_log.log`: 에러 로그
- `sql.log`: SQL 실행 로그
- `도메인별 전용 로그`: 각 모듈별 비즈니스 로그

### 6.2 로그 레벨 관리
- **개발 환경**: DEBUG 레벨
- **스테이징 환경**: INFO 레벨
- **운영 환경**: WARN 레벨 이상

## 7. 보안 규칙

### 7.1 인증/인가
- **JWT 토큰 기반 인증** 사용
- **Spring Security** 기반 보안 설정
- **세션 관리**: 세션 기반 상태 관리 (UI 모듈)

### 7.2 금융권 보안 요구사항
- **XSS 보호**: 모든 입력값 검증
- **SQL Injection 방지**: PreparedStatement 사용
- **CSRF 보호**: Spring Security CSRF 토큰 사용
- **보안 헤더**: 보안 관련 HTTP 헤더 설정

## 8. 데이터베이스 규칙

### 8.1 지원 DBMS
- **Primary**: Tibero (한국산 DBMS)
- **Secondary**: MySQL, MariaDB, MSSQL

### 8.2 트랜잭션 관리
- **@Transactional** 어노테이션 사용
- **AOP 기반 트랜잭션 관리**
- **롤백 정책**: RuntimeException 발생 시 자동 롤백

## 9. API 설계 규칙

### 9.1 RESTful API
- **HTTP 메소드**: GET, POST, PUT, DELETE 적절히 사용
- **URL 패턴**: `/api/v1/[domain]/[resource]`
- **응답 형식**: JSON 표준 형식

### 9.2 API 문서화
- **Swagger/OpenAPI 3.0** 사용
- **API 명세서 자동 생성**
- **테스트 가능한 API 문서** 제공

## 10. 외부 연동 규칙

### 10.1 한국예탁결제원(KSD) 연동
- **NMI 프로토콜** 사용
- **벤처넷 시스템 연동**
- **전문 통신 처리**

### 10.2 전자정부 연동
- **정부 문서 시스템** 연동
- **표준 전자정부 프레임워크** 준수

## 11. 개발 규칙

### 11.1 코딩 표준
- **Java 코딩 컨벤션** 준수
- **Google Java Style Guide** 참조
- **변수명**: camelCase
- **클래스명**: PascalCase
- **상수명**: UPPER_SNAKE_CASE

### 11.2 테스트 규칙
- **단위 테스트**: JUnit 5 사용
- **통합 테스트**: Spring Boot Test 사용
- **테스트 커버리지**: 최소 70% 이상 유지

### 11.3 빌드 규칙
- **Maven 멀티모듈 프로젝트** 구조
- **Parent POM**: KiiPS-HUB 모듈에서 관리
- **의존성 관리**: Spring Boot Dependency Management 사용

## 12. 배포 규칙

### 12.1 배포 환경
- **로컬 개발**: 개발자 로컬 환경
- **스테이징**: 통합 테스트 환경
- **운영**: 실제 서비스 환경

### 12.2 배포 프로세스
1. **코드 리뷰** 완료
2. **테스트 통과** 확인
3. **스테이징 배포** 및 검증
4. **운영 배포** 승인 후 진행

## 13. 모니터링 규칙

### 13.1 서비스 모니터링
- **Eureka 대시보드**: 서비스 상태 모니터링
- **Spring Boot Actuator**: 헬스체크 및 메트릭 수집
- **로그 모니터링**: 각 모듈별 로그 파일 모니터링

### 13.2 성능 모니터링
- **API 응답시간**: api_time.log 모니터링
- **데이터베이스 성능**: sql.log 모니터링
- **메모리 사용량**: JVM 메트릭 모니터링

## 14. 장애 대응 규칙

### 14.1 장애 레벨
- **Level 1**: 서비스 중단 (즉시 대응)
- **Level 2**: 성능 저하 (1시간 이내 대응)
- **Level 3**: 기능 오류 (당일 대응)

### 14.2 장애 복구
- **롤백 계획**: 이전 버전 즉시 롤백 가능
- **데이터 백업**: 정기적인 데이터 백업
- **복구 테스트**: 정기적인 복구 훈련

## 15. 문서화 규칙

### 15.1 필수 문서
- **API 명세서**: Swagger 자동 생성
- **시스템 아키텍처**: 다이어그램 포함
- **배포 가이드**: 환경별 배포 절차
- **장애 대응 매뉴얼**: 장애 유형별 대응 방법

### 15.2 코드 문서화
- **JavaDoc**: 공개 API 메소드 필수
- **README.md**: 각 모듈별 설명
- **변경 이력**: CHANGELOG.md 관리

## 16. 협업 규칙

### 16.1 버전 관리
- **Git Flow** 브랜치 전략 사용
- **커밋 메시지**: Conventional Commits 규칙
- **PR 리뷰**: 최소 2명 이상 승인

### 16.2 커뮤니케이션
- **이슈 트래킹**: JIRA 또는 GitHub Issues
- **문서 공유**: Confluence 또는 Wiki
- **코드 리뷰**: GitHub Pull Request

이 규칙들은 KiiPS 프로젝트의 안정성, 확장성, 유지보수성을 보장하기 위한 종합적인 가이드라인입니다.