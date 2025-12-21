# KiiPS (Korea Investment Information Processing System) 프로젝트 상세 분석

## 1. 프로젝트 개요

### 1.1 시스템 소개
- **프로젝트명**: KiiPS (Korea Investment Information Processing System)
- **시스템 유형**: 대한민국 투자정보처리시스템
- **개발 언어**: Java 8
- **프레임워크**: Spring Boot 2.4.2
- **아키텍처**: 마이크로서비스 아키텍처 (MSA)
- **총 모듈 수**: 18개 독립 서비스 모듈

### 1.2 비즈니스 도메인
- **금융 투자 관리**: 벤처캐피탈, 펀드 운용, 투자 포트폴리오 관리
- **정부 연계 시스템**: 한국예탁결제원(KSD), 전자정부 시스템 연동
- **회계 및 결제**: 투자 회계, 결제 게이트웨이, 자금 관리
- **실시간 데이터 처리**: 투자 현황, 시장 데이터 실시간 모니터링

## 2. 시스템 아키텍처 분석

### 2.1 마이크로서비스 아키텍처 구조

#### 2.1.1 Core Infrastructure (핵심 인프라)
```
- KiiPS-HUB: 멀티모듈 빌드 관리 (Parent POM)
- KiiPS-UTILS: 공통 유틸리티 라이브러리
```

#### 2.1.2 Frontend & Authentication (프론트엔드 및 인증)
```
- KiiPS-UI (Port: 8100): 웹 사용자 인터페이스 (JSP + jQuery + Bootstrap)
- KiiPS-Login (Port: 8801): JWT 기반 인증 서비스
```

#### 2.1.3 Core Business Services (핵심 비즈니스 서비스)
```
- KiiPS-AC (Port: 8901): 회계 시스템 (Accounting)
- KiiPS-IL (Port: 8401): 투자한도 관리 (Investment Limit)
- KiiPS-FD (Port: 8601): 펀드 관리 (Fund Management)
- KiiPS-PG (Port: 8501): 결제 게이트웨이 (Payment Gateway)
- KiiPS-SY (Port: 8301): 시스템 관리 (System Management)
- KiiPS-EL (Port: 8201): 이벤트 로그 관리 (Event Log)
- KiiPS-RT (Port: 8001): 실시간 처리 (Real-time Processing)
- KiiPS-LP (Port: 8101): 대출 처리 (Loan Processing)
- KiiPS-COMMON (Port: 8701): 공통 서비스
```

#### 2.1.4 External Integration Services (외부 연동 서비스)
```
- KIIPS-KSD: 한국예탁결제원 연동 (NMI 프로토콜)
- KIIPS-TRANSFER: 데이터 전송 서비스
- KIIPS-SECURL: 보안 URL 처리
- KIIPS-EGOVDOCUMENT: 전자정부 문서 연동
```

#### 2.1.5 Support Services (지원 서비스)
```
- KIIPS-BATCH: 배치 작업 처리
- KIIPS-MOBILE: 모바일 API
- KIIPS-MSGSender: 메시지 발송 (SMS, 메일, Push)
- KIIPS-HELP (Port: 9400): 헬프데스크
- KIIPS-LAB (Port: 8888): 실험/테스트 환경
```

### 2.2 기술 스택 분석

#### 2.2.1 백엔드 기술 스택
- **Framework**: Spring Boot 2.4.2
- **Security**: Spring Security + JWT 인증
- **Build Tool**: Maven (멀티모듈 프로젝트)
- **Java Version**: Java 8 (1.8)
- **Communication**: RESTful API, HTTP 통신

#### 2.2.2 프론트엔드 기술 스택
- **View Technology**: JSP
- **JavaScript Library**: jQuery + jQuery UI
- **CSS Framework**: Bootstrap
- **Data Grid**: RealGrid
- **Charts**: AmCharts
- **Code Editor**: CodeMirror

#### 2.2.3 데이터베이스 지원
- **Primary DB**: Tibero (한국산 DBMS)
- **Secondary DB**: MySQL, MariaDB, MSSQL
- **ORM**: MyBatis 또는 JPA

#### 2.2.4 외부 라이브러리
- **Commons Lang**: 2.6
- **Lombok**: 1.18.20 (코드 간소화)
- **PopBill SDK**: 전자세금계산서 처리
- **AWS SDK**: 클라우드 서비스 연동

## 3. 모듈별 상세 분석

### 3.1 KiiPS-HUB (Parent Module)
- **역할**: 멀티모듈 빌드 관리 및 공통 의존성 관리
- **특징**: 
  - 모든 서브 모듈의 Parent POM
  - 공통 라이브러리 및 버전 관리
  - Spring Boot Starter Parent 2.4.2 상속

### 3.2 Core Business Modules

#### KiiPS-UI (사용자 인터페이스)
- **포트**: 8100
- **기술 스택**: JSP + jQuery + Bootstrap
- **주요 컨트롤러**:
  - ACUIController: 회계 화면
  - ILUIController: 투자한도 화면
  - FDUIController: 펀드 화면
  - PGUIController: 결제 화면
  - SYUIController: 시스템 관리 화면

#### KiiPS-AC (회계 시스템)
- **포트**: 8901
- **역할**: 투자 회계, 자산 관리, 재무 보고
- **API Path**: /ACAPI/**
- **주요 기능**: 계정과목 관리, 분개 처리, 재무제표 생성

#### KiiPS-IL (투자한도 관리)
- **포트**: 8401
- **역할**: 투자 한도 설정, 모니터링, 리스크 관리
- **API Path**: /ILAPI/**
- **주요 기능**: 투자 프로젝트 관리, 실사 프로세스, 포트폴리오 모니터링

#### KiiPS-FD (펀드 관리)
- **포트**: 8601
- **역할**: 펀드 설정, 운용, 성과 관리
- **API Path**: /FDAPI/**
- **주요 기능**: 펀드 구조 설계, 성과 측정, 분배 관리

#### KiiPS-PG (포트폴리오 관리)
- **포트**: 8501
- **역할**: 포트폴리오 구성 및 분석
- **API Path**: /PGAPI/**
- **주요 기능**: 포트폴리오 구성, 투자 분석, 리스크 분석

#### KiiPS-SY (시스템 관리)
- **포트**: 8301
- **역할**: 시스템 전반 관리 및 설정
- **API Path**: /SYAPI/**
- **주요 기능**: 사용자 관리, 권한 설정, 코드 관리

#### KiiPS-EL (전자결재)
- **포트**: 8201
- **역할**: 전자결재 및 워크플로우
- **API Path**: /ELAPI/**
- **주요 기능**: 결재 라인 관리, 전자서명, 승인 프로세스

#### KiiPS-RT (리포팅 시스템)
- **포트**: 8001
- **역할**: 보고서 생성 및 템플릿 관리
- **API Path**: /RTAPI/**
- **주요 기능**: 리포트 템플릿 관리, 비동기 리포트 생성

#### KiiPS-LP (LP 관계 관리)
- **포트**: 8101
- **역할**: Limited Partner 관계 및 외부 연동
- **API Path**: /LPAPI/**
- **주요 기능**: LP 데이터 관리, 외부 보고, 다중 데이터베이스 지원

#### KiiPS-COMMON (공통 서비스)
- **포트**: 8701
- **역할**: 공통 유틸리티 및 외부 연동
- **API Path**: /COMMONAPI/**
- **주요 기능**: 파일 관리, 이메일/SMS 발송, AWS 연동

### 3.3 External Integration Analysis

#### KIIPS-KSD (한국예탁결제원 연동)
- **연동 대상**: 한국예탁결제원 벤처넷 시스템
- **통신 프로토콜**: NMI (Network Message Interface)
- **주요 기능**: 
  - 벤처투자정보 송수신
  - 운용지원 전문 처리
  - 증권계좌자산관리
- **XSD 파일**: 30여개 전문 스키마 정의

#### KIIPS-TRANSFER (데이터 전송 서비스)
- **역할**: 다중 데이터베이스 간 데이터 동기화
- **지원 DB**: Oracle, MySQL, MariaDB, MSSQL, Tibero
- **전송 방식**: CSV 파일 기반 일괄 처리

#### KIIPS-SECURL (보안 URL 처리)
- **역할**: 외부 API 게이트웨이 및 보안 처리
- **연동 시스템**: QuotaBook, PDF 생성, AWS S3
- **보안**: 토큰 기반 인증, 파일 암호화

#### KIIPS-EGOVDOCUMENT (전자정부 문서 연동)
- **연동 대상**: 전자정부 문서 시스템
- **프로토콜**: XML 기반 문서 처리 + XSLT 변환
- **역할**: 정부 보고서, 공시 문서 연동

### 3.4 Support Services Analysis

#### KIIPS-BATCH (배치 처리 서비스)
- **역할**: 자동화된 배치 처리 및 작업 스케줄링
- **주요 기능**: 정기 작업, 데이터 마이그레이션, PopBill 연동
- **스케줄링**: Spring @Scheduled 기반 자동 실행

#### KIIPS-MOBILE (모바일 API 서비스)
- **역할**: 모바일 애플리케이션 백엔드 API
- **기술**: JSP + JWT + AWS S3
- **API 모듈**: AU(인증), AT(자산), CO(공통), EL(전자결재) 등

#### KIIPS-MSGSender (메시지 발송 서비스)
- **역할**: 멀티채널 메시지 전송 시스템
- **지원 채널**: SMS, LMS, 이메일, Push 알림
- **기술**: PopBill SMS, Firebase FCM, JavaMail

#### KIIPS-HELP (헬프데스크 서비스)
- **포트**: 8086
- **역할**: 사용자 지원 및 시스템 문서화
- **기능**: FAQ 관리, 모듈별 도움말, 검색 시스템

#### KIIPS-LAB (개발 자동화 서비스)
- **포트**: 8087
- **역할**: 개발 자동화, CI/CD, 테스트 환경 관리
- **기능**: Jenkins 연동, 클라우드 관리, 실시간 알림

## 4. 환경 구성 분석

### 4.1 멀티 환경 지원
각 모듈은 다음 환경별 설정 파일을 보유:
- `app-local.properties`: 로컬 개발 환경
- `app-stg.properties`: 스테이징 환경  
- `app-kiips.properties`: KiiPS 운영 환경
- `app-shinhanvc.properties`: 신한벤처캐피탈 전용 환경
- `app-prd.properties`: 일반 운영 환경
- `app-dr.properties`: 재해복구 환경

### 4.2 데이터베이스 환경
- `app-tibero.properties`: Tibero DB 환경
- `app-mysql.properties`: MySQL 환경
- `app-maria.properties`: MariaDB 환경
- `app-mssql.properties`: MSSQL 환경

## 5. 로깅 시스템 분석

### 5.1 표준 로그 파일 구조
모든 모듈은 다음 로그 파일을 생성:
```
logs/
├── api_time.{date}.log     # API 응답시간 측정
├── err_log.{date}.log      # 에러 로그
├── sql.{date}.log          # SQL 실행 로그
├── auth.{date}.log         # 인증 로그 (UI 모듈)
├── session.{date}.log      # 세션 로그 (UI 모듈)
└── {domain}.{date}.log     # 도메인별 비즈니스 로그
```

### 5.2 도메인별 특화 로그
- **KIIPS-KSD**: msg_log (전문 통신 로그)
- **KIIPS-BATCH**: 배치별 도메인 로그 (card, kif, mail, sms 등)
- **KIIPS-SECURL**: call_kiips, dataprocess, quotabook 로그

## 6. 보안 아키텍처 분석

### 6.1 인증/인가 체계
- **JWT 토큰 기반 인증**: 무상태 인증 방식
- **Spring Security**: 보안 프레임워크
- **세션 관리**: UI 모듈에서 세션 기반 상태 관리
- **API 보안**: RESTful API 토큰 인증

### 6.2 금융권 보안 요구사항
- **XSS 보호**: 입력값 검증 및 필터링 (Lucy XSS Filter)
- **SQL Injection 방지**: PreparedStatement 사용
- **CSRF 보호**: Spring Security CSRF 토큰
- **보안 헤더**: 보안 관련 HTTP 헤더 설정
- **데이터 암호화**: 전송 중 및 저장 시 암호화

## 7. 배포 및 운영 분석

### 7.1 표준 운영 스크립트
각 모듈은 다음 스크립트를 보유:
- `start.sh`: 서비스 시작
- `stop.sh`: 서비스 종료  
- `build_*.sh`: 빌드 및 배포
- `log_*.sh`: 로그 모니터링

### 7.2 빌드 시스템
- **Maven 멀티모듈**: 중앙 집중 빌드 관리
- **Parent POM**: KiiPS-HUB에서 공통 설정 관리
- **모듈 의존성**: UTILS → COMMON → Business Modules

## 8. 서비스 간 통신 패턴

### 8.1 통신 방식
- **RESTful API**: HTTP 기반 동기 통신
- **JWT 토큰**: 서비스 간 인증
- **직접 호출**: 서비스 디스커버리 없이 직접 URL 호출
- **파일 기반**: CSV, XML 파일을 통한 데이터 교환

### 8.2 데이터 교환
- **JSON**: REST API 표준 포맷
- **XML**: 정부기관 연동 (NMI, 전자정부)
- **CSV**: 대용량 데이터 일괄 처리
- **Binary**: 파일 업로드/다운로드

## 9. 개발 프로세스 분석

### 9.1 코딩 표준
- **Java 코딩 컨벤션** 준수
- **변수명**: camelCase
- **클래스명**: PascalCase
- **상수명**: UPPER_SNAKE_CASE

### 9.2 테스트 전략
- **단위 테스트**: JUnit 5
- **통합 테스트**: Spring Boot Test
- **테스트 커버리지**: 70% 이상 목표

## 10. 시스템 특징 및 강점

### 10.1 아키텍처 강점
- **모듈화**: 도메인별 명확한 모듈 분리
- **확장성**: 개별 모듈 독립적 확장 가능
- **유지보수성**: 모듈별 독립 개발 및 배포
- **안정성**: 모듈 격리로 장애 전파 최소화

### 10.2 비즈니스 특징
- **정부 연계**: 한국예탁결제원, 전자정부 시스템 연동
- **금융 특화**: 투자, 펀드, 회계 도메인 특화
- **실시간 처리**: 투자 현황 실시간 모니터링
- **멀티 테넌트**: 여러 벤처캐피탈사 지원

### 10.3 기술적 혁신
- **다중 데이터베이스**: Tibero, MySQL, MariaDB, MSSQL 지원
- **클라우드 연동**: AWS S3, OCI 하이브리드 환경
- **자동화**: 배치 처리, CI/CD, 메시지 발송 자동화
- **모바일 지원**: 전용 모바일 API 및 UI

## 11. 기술적 도전과 해결방안

### 11.1 분산 시스템 관리
- **문제**: 18개 모듈의 분산 관리 복잡성
- **해결**: 표준화된 로깅, 모니터링, 배포 스크립트

### 11.2 외부 시스템 연동
- **문제**: 다양한 프로토콜의 외부 시스템 연동
- **해결**: 전용 Integration 모듈 분리 (KSD, EGOVDOC, TRANSFER)

### 11.3 데이터베이스 다양성
- **문제**: 여러 DBMS 지원 필요성
- **해결**: 환경별 설정 파일 분리, 추상화 계층 구현

### 11.4 실시간 처리 요구사항
- **문제**: 금융 데이터 실시간 처리
- **해결**: 전용 RT 모듈, 이벤트 로그 관리

## 12. 향후 발전 방향

### 12.1 기술적 개선사항
- **Java 버전 업그레이드**: Java 8 → Java 11/17
- **Spring Boot 업그레이드**: 최신 버전 적용
- **프론트엔드 현대화**: React/Vue.js 도입 검토
- **컨테이너화**: Docker/Kubernetes 도입

### 12.2 아키텍처 개선
- **Service Discovery**: Eureka 또는 Consul 도입
- **API Gateway**: 통합 API 게이트웨이 구축
- **Event-Driven Architecture**: 비동기 메시징 강화
- **CQRS 패턴**: 읽기/쓰기 분리
- **API 문서화**: OpenAPI 3.0 도입

### 12.3 운영 개선
- **중앙 집중 모니터링**: ELK Stack 또는 Prometheus + Grafana
- **분산 추적**: Jaeger 또는 Zipkin 도입
- **Circuit Breaker**: Hystrix 또는 Resilience4j
- **Configuration Management**: Spring Cloud Config

## 13. 결론

KiiPS는 금융 투자 도메인에 특화된 엔터프라이즈급 마이크로서비스 시스템으로, 정부 연계 시스템과의 안정적인 연동을 통해 투자정보처리의 전 과정을 지원하는 포괄적인 플랫폼입니다.

### 13.1 핵심 성과
- **18개 모듈**: 체계적인 도메인 분리와 책임 분산
- **다중 환경**: 개발/스테이징/운영 환경 완전 분리
- **외부 연동**: 정부기관 및 금융기관과의 안정적 연동
- **보안 준수**: 금융권 보안 요구사항 완전 충족

### 13.2 기술적 우수성
- **확장 가능한 아키텍처**: 모듈별 독립적 확장
- **안정적인 운영**: 표준화된 로깅 및 모니터링
- **효율적인 개발**: Maven 멀티모듈과 자동화 도구
- **사용자 중심**: 모바일 지원과 헬프데스크 시스템

KiiPS는 현재 상태에서도 충분히 운영 가능한 견고한 시스템이며, 향후 제시된 개선사항들을 단계적으로 적용하면 더욱 현대적이고 확장 가능한 투자정보처리 플랫폼으로 발전할 수 있을 것입니다.