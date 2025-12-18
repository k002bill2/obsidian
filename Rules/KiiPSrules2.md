# KiiPS 프로젝트 구조 분석 결과

## 프로젝트 개요
**KiiPS (Korea Investment Information Processing System)**는 대한민국의 투자정보처리시스템으로, Spring Boot 기반의 마이크로서비스 아키텍처를 채택한 엔터프라이즈급 금융 시스템입니다.

## 주요 기술 스택
- **Framework**: Spring Boot 2.4.2
- **Build Tool**: Maven (Multi-module)
- **Java Version**: Java 8
- **Architecture**: 마이크로서비스 (Spring Cloud 2020.0.0)
- **Service Discovery**: Netflix Eureka
- **API Gateway**: Spring Cloud Gateway
- **Database**: Tibero (한국산 DBMS), MySQL, MariaDB, MSSQL 지원
- **Frontend**: JSP + jQuery + Bootstrap
- **Security**: JWT + Spring Security

## 시스템 아키텍처

### 1. 마이크로서비스 구조
총 **22개의 독립적인 서비스 모듈**로 구성:

#### 📌 **Core Infrastructure**
- **KIIPS-Eureka**: 서비스 디스커버리 서버
- **KIIPS-APIGateway**: API 게이트웨이 (외부 진입점)
- **KiiPS-HUB**: 멀티모듈 빌드 관리 (Parent POM)

#### 📌 **Business Services**
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

#### 📌 **External Integration**
- **KIIPS-KSD**: 한국예탁결제원(KSD) 연동
- **KIIPS-TRANSFER**: 데이터 전송 서비스
- **KIIPS-SECURL**: 보안 URL 처리
- **KIIPS-EGOVDOCUMENT**: 전자정부 문서 연동

#### 📌 **Support Services**
- **KIIPS-BATCH**: 배치 작업 처리
- **KIIPS-MOBILE**: 모바일 API
- **KIIPS-MSGSender**: 메시지 발송 (SMS, 메일, Push)
- **KIIPS-MES**: 메시징 시스템
- **KIIPS-HELP**: 헬프데스크
- **KIIPS-LAB**: 실험/테스트 환경
- **KIIPS-Infra-Admin**: 인프라 관리

## 디렉토리 구조 요약

```
KiiPS/
├── KiiPS-HUB/               # Maven 멀티모듈 관리
├── KIIPS-Eureka/           # 서비스 디스커버리
├── KIIPS-APIGateway/       # API 게이트웨이
├── KiiPS-UI/               # 웹 UI (JSP)
├── KiiPS-Login/            # 인증 서비스
├── KiiPS-AC/               # 회계 시스템
├── KiiPS-IL/               # 투자한도 관리
├── KiiPS-PG/               # 결제 게이트웨이
├── KIIPS-KSD/              # 한국예탁결제원 연동
├── KIIPS-BATCH/            # 배치 처리
├── KIIPS-MOBILE/           # 모바일 API
├── KIIPS-TRANSFER/         # 데이터 전송
├── KIIPS-SECURL/           # 보안 URL
├── KIIPS-MSGSender/        # 메시지 발송
└── [기타 15개 모듈...]
```

## 핵심 특징

### 1. **멀티 환경 지원**
각 모듈은 다양한 환경별 설정 파일을 보유:
- `app-local.properties` (개발)
- `app-stg.properties` (스테이징)
- `app-prd.properties` (운영)
- `app-kiips.properties` (KiiPS 전용)
- `app-shinhanvc.properties` (신한벤처캐피탈)

### 2. **운영 스크립트**
각 모듈별 표준화된 운영 스크립트:
- `start.sh` / `stop.sh` - 서비스 시작/종료
- `build_*.sh` - 빌드 스크립트
- `log_*.sh` - 로그 모니터링

### 3. **로깅 시스템**
상세한 도메인별 로그 분리:
- `api_time.log` - API 응답시간
- `err_log.log` - 에러 로그
- `sql.log` - SQL 실행 로그
- 각 도메인별 전용 로그 파일

### 4. **외부 연동**
- **KSD (한국예탁결제원)**: NMI 프로토콜을 통한 벤처넷 연동
- **전자정부**: 정부 문서 시스템 연동
- **다양한 DBMS**: Tibero, MySQL, MariaDB, MSSQL 지원

## 시스템 특이사항

1. **한국 금융권 특화**: 한국예탁결제원, 벤처캐피탈 업무 특화
2. **엔터프라이즈급**: 대용량 트랜잭션 처리 가능한 구조
3. **보안 중심**: JWT, XSS 보호, 세션 관리 등 금융권 보안 요구사항 반영
4. **확장 가능**: 마이크로서비스 아키텍처로 모듈별 독립 확장 가능

이 시스템은 벤처캐피탈 투자정보 처리를 위한 종합 플랫폼으로, 투자 심사부터 관리, 회계, 정산까지 전 과정을 디지털화한 시스템으로 보입니다.

## 주요 모듈별 상세 분석

### KiiPS-UI (사용자 인터페이스)
**패키지 구조:**
- `config/` - 웹 보안, 세션 관리, 인터셉터 등 설정
- `controller/` - 각 모듈별 UI 컨트롤러

**핵심 기능:**
- JSP 기반 웹 인터페이스
- 세션 기반 인증 및 권한 관리
- 각 비즈니스 모듈의 화면 진입점

### KiiPS-AC (회계 관련)
**패키지 구조:**
- `config/` - 데이터베이스 트랜잭션, AOP, 메시지 설정
- `controll/` - AC0101~AC2020까지 다수의 API 컨트롤러
- `dao/` - 데이터 액세스 계층
- `model/` - VO 모델 클래스들
- `service/` - 비즈니스 로직 서비스

**핵심 기능:**
- 회계 업무 처리 (계정과목 관리, 회계 처리 등)
- RESTful API 서비스 제공
- Swagger API 문서화

### KiiPS-IL (투자 한도 관리)
**패키지 구조:**
- `config/` - 데이터베이스 트랜잭션, AOP, 메시지 설정
- `controll/` - IL0010~IL1814까지 다수의 API 컨트롤러
- `dao/` - 데이터 액세스 계층
- `model/` - VO 모델 클래스들
- `service/` - 비즈니스 로직 서비스

**핵심 기능:**
- 투자 한도 관리 업무 처리
- 계약품의, 투자 한도 설정
- RM(리스크 관리) 기능

### KIIPS-APIGateway (API 게이트웨이)
**패키지 구조:**
- `KiipsApiGatewayApplication.java` - 메인 애플리케이션
- `PassCorsRoutePredicateHandlerMapping.java` - CORS 처리
- `WebMvcConfiguration.java` - 웹 설정

**핵심 기능:**
- 마이크로서비스 간 API 라우팅
- CORS 정책 관리
- 로드 밸런싱 및 서비스 라우팅

### KIIPS-Eureka (서비스 디스커버리)
**패키지 구조:**
- `KiipsEurekaApplication.java` - Eureka 서버 애플리케이션

**핵심 기능:**
- 마이크로서비스 레지스트리 서버
- 서비스 인스턴스 등록 및 디스커버리
- 헬스 체크 및 서비스 상태 모니터링

### KIIPS-KSD (한국예탁결제원 연동)
**패키지 구조:**
- `config/` - AWS S3, 데이터베이스, 웹 설정
- `controll/` - 송수신 컨트롤러
- `dao/` - 데이터 액세스 계층
- `model/` - 다양한 전문 메시지 모델
- `service/` - 비동기/동기 송수신 서비스
- `util/` - KSD 연동 유틸리티
- `ksd/safe/nmi/` - NMI 메시지 및 웹서비스 연동

**핵심 기능:**
- 한국예탁결제원과의 전문 통신 처리
- NMI 프로토콜 구현
- 벤처넷 시스템과의 데이터 송수신
- AWS S3 연동을 통한 파일 관리

## 전체 시스템 아키텍처 관계도

```
[외부 요청] → [API Gateway] → [Eureka 서비스 디스커버리]
                    ↓
[UI 모듈] ← → [AC 모듈 (회계)] ← → [IL 모듈 (투자한도)]
                    ↓                    ↓
            [KSD 모듈 (한국예탁결제원 연동)]
```