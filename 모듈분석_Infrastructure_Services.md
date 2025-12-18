# KiiPS Infrastructure Services 모듈 분석

## 1. 모듈 개요

KiiPS 프로젝트의 인프라스트럭처 서비스는 마이크로서비스 아키텍처의 핵심 기반 구조를 제공합니다. 핵심 인프라 모듈로 구성되어 있으며, 직접적인 서비스 디스커버리나 API 게이트웨이 없이 독립적으로 운영되는 구조입니다.

### 1.1 구성 모듈
- **KiiPS-HUB**: 멀티모듈 빌드 관리 (Parent POM)
- **KiiPS-UTILS**: 공통 유틸리티 라이브러리

## 2. KiiPS-HUB (멀티모듈 빌드 관리)

### 2.1 기본 구성
```yaml
역할: Maven 멀티모듈 프로젝트의 Parent POM
기능: 공통 의존성 및 버전 관리
패키징: pom
```

### 2.2 주요 의존성
```xml
<!-- Spring Boot Parent -->
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>2.4.2</version>
</parent>

<!-- 공통 라이브러리 -->
<dependency>
    <groupId>commons-lang</groupId>
    <artifactId>commons-lang</artifactId>
    <version>2.6</version>
</dependency>

<!-- Lombok -->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <version>1.18.20</version>
    <scope>provided</scope>
</dependency>

<!-- Spring Security -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-security</artifactId>
</dependency>

<!-- Spring Boot Admin Client -->
<dependency>
    <groupId>de.codecentric</groupId>
    <artifactId>spring-boot-admin-starter-client</artifactId>
    <version>2.4.1</version>
</dependency>
```

### 2.3 모듈 구조
```xml
<!-- 등록된 모듈들 -->
<modules>
    <module>../KiiPS-UTILS</module>
    <module>../KiiPS-COMMON</module>
    <module>../KiiPS-FD</module>
    <module>../KiiPS-Login</module>
    <module>../KiiPS-UI</module>
    <module>../KiiPS-PG</module>
    <module>../KiiPS-AC</module>
    <module>../KiiPS-IL</module>
    <module>../KiiPS-SY</module>
    <module>../KiiPS-EL</module>
    <module>../KiiPS-RT</module>
    <module>../KiiPS-LP</module>
    <module>../KiiPS-MES</module>
    <module>../KIIPS-KSD</module>
    <module>../KIIPS-MOBILE</module>
    <module>../KIIPS-TRANSFER</module>
    <module>../KIIPS-SECURL</module>
    <module>../KIIPS-MSGSender</module>
    <module>../KIIPS-BATCH</module>
    <module>../KIIPS-HELP</module>
    <module>../KIIPS-LAB</module>
    <module>../KIIPS-DATA</module>
    <module>../KIIPS-EGOVDOCUMENT</module>
    <module>../KIIPS-IV</module>
</modules>
```

### 2.4 빌드 설정
```xml
<!-- 플러그인 관리 -->
<pluginManagement>
    <plugins>
        <plugin>
            <artifactId>maven-resources-plugin</artifactId>
            <version>3.0.2</version>
        </plugin>
        <plugin>
            <artifactId>maven-compiler-plugin</artifactId>
            <version>3.8.0</version>
        </plugin>
        <plugin>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>2.22.1</version>
            <configuration>
                <skipTests>true</skipTests>
            </configuration>
        </plugin>
        <plugin>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-maven-plugin</artifactId>
        </plugin>
    </plugins>
</pluginManagement>
```

### 2.5 주요 특징
1. **중앙 집중 의존성 관리**: 모든 모듈의 공통 라이브러리 버전 통일
2. **Spring Boot 통합**: Spring Boot 2.4.2 기반 표준화
3. **보안 설정**: Spring Security 기본 적용
4. **코드 간소화**: Lombok을 통한 보일러플레이트 코드 제거
5. **테스트 스킵**: 빌드 시간 단축을 위한 테스트 생략 설정

## 3. KiiPS-UTILS (공통 유틸리티)

### 3.1 기본 구성
```yaml
역할: 전체 프로젝트 공통 유틸리티 제공
기능: 공통 클래스, 상수, 헬퍼 메소드
패키징: jar
```

### 3.2 주요 유틸리티 구성
```java
// 공통 상수 정의
public class CommonConstants {
    public static final String DEFAULT_ENCODING = "UTF-8";
    public static final String DATE_FORMAT = "yyyy-MM-dd";
    public static final String DATETIME_FORMAT = "yyyy-MM-dd HH:mm:ss";
    
    // API 응답 코드
    public static final String SUCCESS_CODE = "0000";
    public static final String ERROR_CODE = "9999";
    
    // 시스템 설정
    public static final int DEFAULT_PAGE_SIZE = 20;
    public static final int MAX_PAGE_SIZE = 100;
}

// 날짜 유틸리티
public class DateUtils {
    public static String getCurrentDate() {
        return LocalDate.now().format(DateTimeFormatter.ofPattern(CommonConstants.DATE_FORMAT));
    }
    
    public static String getCurrentDateTime() {
        return LocalDateTime.now().format(DateTimeFormatter.ofPattern(CommonConstants.DATETIME_FORMAT));
    }
    
    public static boolean isValidDateFormat(String dateString) {
        try {
            LocalDate.parse(dateString, DateTimeFormatter.ofPattern(CommonConstants.DATE_FORMAT));
            return true;
        } catch (DateTimeParseException e) {
            return false;
        }
    }
}

// 문자열 유틸리티
public class StringUtils {
    public static boolean isEmpty(String str) {
        return str == null || str.trim().isEmpty();
    }
    
    public static boolean isNotEmpty(String str) {
        return !isEmpty(str);
    }
    
    public static String nvl(String str, String defaultValue) {
        return isEmpty(str) ? defaultValue : str;
    }
    
    public static String maskString(String str, int startIndex, int endIndex) {
        if (isEmpty(str) || str.length() <= startIndex + endIndex) {
            return str;
        }
        
        StringBuilder masked = new StringBuilder();
        masked.append(str.substring(0, startIndex));
        masked.append("*".repeat(str.length() - startIndex - endIndex));
        masked.append(str.substring(str.length() - endIndex));
        
        return masked.toString();
    }
}

// 암호화 유틸리티
public class CryptoUtils {
    private static final String ALGORITHM = "AES";
    private static final String TRANSFORMATION = "AES/CBC/PKCS5Padding";
    
    public static String encrypt(String plainText, String secretKey) throws Exception {
        SecretKeySpec keySpec = new SecretKeySpec(secretKey.getBytes(), ALGORITHM);
        Cipher cipher = Cipher.getInstance(TRANSFORMATION);
        cipher.init(Cipher.ENCRYPT_MODE, keySpec);
        
        byte[] encrypted = cipher.doFinal(plainText.getBytes());
        return Base64.getEncoder().encodeToString(encrypted);
    }
    
    public static String decrypt(String encryptedText, String secretKey) throws Exception {
        SecretKeySpec keySpec = new SecretKeySpec(secretKey.getBytes(), ALGORITHM);
        Cipher cipher = Cipher.getInstance(TRANSFORMATION);
        cipher.init(Cipher.DECRYPT_MODE, keySpec);
        
        byte[] decrypted = cipher.doFinal(Base64.getDecoder().decode(encryptedText));
        return new String(decrypted);
    }
}

// JSON 유틸리티
public class JsonUtils {
    private static final ObjectMapper objectMapper = new ObjectMapper();
    
    static {
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        objectMapper.configure(SerializationFeature.FAIL_ON_EMPTY_BEANS, false);
        objectMapper.setPropertyNamingStrategy(PropertyNamingStrategies.SNAKE_CASE);
    }
    
    public static String toJson(Object object) throws JsonProcessingException {
        return objectMapper.writeValueAsString(object);
    }
    
    public static <T> T fromJson(String json, Class<T> clazz) throws JsonProcessingException {
        return objectMapper.readValue(json, clazz);
    }
    
    public static <T> T fromJson(String json, TypeReference<T> typeRef) throws JsonProcessingException {
        return objectMapper.readValue(json, typeRef);
    }
}

// 파일 유틸리티
public class FileUtils {
    public static boolean isValidFileExtension(String fileName, String[] allowedExtensions) {
        if (isEmpty(fileName)) {
            return false;
        }
        
        String extension = getFileExtension(fileName).toLowerCase();
        return Arrays.asList(allowedExtensions).contains(extension);
    }
    
    public static String getFileExtension(String fileName) {
        if (isEmpty(fileName)) {
            return "";
        }
        
        int lastDotIndex = fileName.lastIndexOf('.');
        return lastDotIndex > 0 ? fileName.substring(lastDotIndex + 1) : "";
    }
    
    public static String generateUniqueFileName(String originalFileName) {
        String extension = getFileExtension(originalFileName);
        String nameWithoutExtension = originalFileName.substring(0, originalFileName.lastIndexOf('.'));
        String timestamp = String.valueOf(System.currentTimeMillis());
        
        return nameWithoutExtension + "_" + timestamp + "." + extension;
    }
    
    public static byte[] readFileToByteArray(File file) throws IOException {
        return Files.readAllBytes(file.toPath());
    }
}

// 검증 유틸리티
public class ValidationUtils {
    private static final String EMAIL_PATTERN = 
        "^[a-zA-Z0-9_+&*-]+(?:\\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,7}$";
    
    private static final String PHONE_PATTERN = "^01[0-9]-?[0-9]{4}-?[0-9]{4}$";
    
    private static final Pattern emailPattern = Pattern.compile(EMAIL_PATTERN);
    private static final Pattern phonePattern = Pattern.compile(PHONE_PATTERN);
    
    public static boolean isValidEmail(String email) {
        return StringUtils.isNotEmpty(email) && emailPattern.matcher(email).matches();
    }
    
    public static boolean isValidPhoneNumber(String phoneNumber) {
        return StringUtils.isNotEmpty(phoneNumber) && phonePattern.matcher(phoneNumber).matches();
    }
    
    public static boolean isValidBusinessNumber(String businessNumber) {
        if (StringUtils.isEmpty(businessNumber)) {
            return false;
        }
        
        // 사업자등록번호 검증 로직 (간소화)
        String cleanNumber = businessNumber.replaceAll("-", "");
        return cleanNumber.length() == 10 && cleanNumber.matches("\\d{10}");
    }
}
```

### 3.3 예외 처리 클래스
```java
// 기본 비즈니스 예외
public class BusinessException extends RuntimeException {
    private final String errorCode;
    
    public BusinessException(String errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }
    
    public BusinessException(String errorCode, String message, Throwable cause) {
        super(message, cause);
        this.errorCode = errorCode;
    }
    
    public String getErrorCode() {
        return errorCode;
    }
}

// 검증 예외
public class ValidationException extends BusinessException {
    public ValidationException(String message) {
        super("VALIDATION_ERROR", message);
    }
    
    public ValidationException(String message, Throwable cause) {
        super("VALIDATION_ERROR", message, cause);
    }
}

// 데이터 접근 예외
public class DataAccessException extends BusinessException {
    public DataAccessException(String message) {
        super("DATA_ACCESS_ERROR", message);
    }
    
    public DataAccessException(String message, Throwable cause) {
        super("DATA_ACCESS_ERROR", message, cause);
    }
}

// 외부 시스템 연동 예외
public class ExternalSystemException extends BusinessException {
    public ExternalSystemException(String message) {
        super("EXTERNAL_SYSTEM_ERROR", message);
    }
    
    public ExternalSystemException(String message, Throwable cause) {
        super("EXTERNAL_SYSTEM_ERROR", message, cause);
    }
}
```

### 3.4 응답 표준화
```java
// 표준 API 응답 클래스
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ApiResponse<T> {
    private String code;
    private String message;
    private T data;
    private String timestamp;
    
    public static <T> ApiResponse<T> success(T data) {
        return ApiResponse.<T>builder()
            .code(CommonConstants.SUCCESS_CODE)
            .message("SUCCESS")
            .data(data)
            .timestamp(DateUtils.getCurrentDateTime())
            .build();
    }
    
    public static <T> ApiResponse<T> success(T data, String message) {
        return ApiResponse.<T>builder()
            .code(CommonConstants.SUCCESS_CODE)
            .message(message)
            .data(data)
            .timestamp(DateUtils.getCurrentDateTime())
            .build();
    }
    
    public static <T> ApiResponse<T> error(String code, String message) {
        return ApiResponse.<T>builder()
            .code(code)
            .message(message)
            .data(null)
            .timestamp(DateUtils.getCurrentDateTime())
            .build();
    }
    
    public static <T> ApiResponse<T> error(String message) {
        return error(CommonConstants.ERROR_CODE, message);
    }
}

// 페이징 응답 클래스
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PageResponse<T> {
    private List<T> content;
    private int pageNumber;
    private int pageSize;
    private long totalElements;
    private int totalPages;
    private boolean first;
    private boolean last;
    
    public static <T> PageResponse<T> of(List<T> content, int pageNumber, int pageSize, long totalElements) {
        int totalPages = (int) Math.ceil((double) totalElements / pageSize);
        
        return PageResponse.<T>builder()
            .content(content)
            .pageNumber(pageNumber)
            .pageSize(pageSize)
            .totalElements(totalElements)
            .totalPages(totalPages)
            .first(pageNumber == 0)
            .last(pageNumber == totalPages - 1)
            .build();
    }
}
```

## 4. 아키텍처 분석

### 4.1 현재 아키텍처의 특징

#### 4.1.1 분산 아키텍처
- **독립 실행**: 각 모듈이 독립적으로 실행되는 분산 시스템
- **직접 통신**: 서비스 디스커버리 없이 직접 HTTP 통신
- **포트 기반 라우팅**: 각 서비스별 고정 포트 할당

#### 4.1.2 공통 인프라 패턴
- **중앙 집중 빌드**: Maven 멀티모듈을 통한 통합 빌드
- **표준화된 구조**: 모든 모듈의 일관된 디렉토리 및 설정 구조
- **공통 유틸리티**: 중복 코드 제거를 위한 유틸리티 라이브러리

### 4.2 장점 분석

#### 4.2.1 단순성
- **설정 간소화**: 복잡한 서비스 디스커버리 설정 불필요
- **직관적 구조**: 명확한 포트 기반 서비스 식별
- **빠른 개발**: 별도 인프라 구축 없이 즉시 개발 가능

#### 4.2.2 독립성
- **모듈 격리**: 각 모듈의 완전한 독립 실행
- **기술 선택**: 모듈별 최적화된 기술 스택 선택 가능
- **배포 독립성**: 개별 모듈 단위 배포 및 롤백

#### 4.2.3 운영 효율성
- **표준화**: 일관된 로깅, 모니터링, 배포 스크립트
- **버전 관리**: 중앙 집중 의존성 관리
- **디버깅 용이성**: 직접 통신으로 인한 명확한 호출 경로

### 4.3 개선 필요사항

#### 4.3.1 서비스 관리
- **서비스 디스커버리**: 동적 서비스 발견 및 로드 밸런싱
- **API 게이트웨이**: 통합 진입점 및 횡단 관심사 처리
- **설정 관리**: 중앙 집중 설정 서버

#### 4.3.2 관찰성 (Observability)
- **분산 추적**: 서비스 간 호출 추적
- **중앙 집중 로깅**: 통합 로그 수집 및 분석
- **메트릭 수집**: 통합 모니터링 대시보드

#### 4.3.3 복원력 (Resilience)
- **Circuit Breaker**: 장애 전파 방지
- **재시도 패턴**: 일시적 장애 대응
- **타임아웃 관리**: 적절한 타임아웃 설정

## 5. 표준화된 구조

### 5.1 모듈 표준 구조
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
├── logs/               # 로그 파일 디렉토리
├── start.sh           # 서비스 시작 스크립트
├── stop.sh            # 서비스 종료 스크립트
├── build_*.sh         # 빌드 스크립트
└── pom.xml            # Maven 설정 파일
```

### 5.2 설정 파일 표준
```properties
# 공통 설정 패턴
server.port=${SERVICE_PORT:8080}
spring.application.name=${SERVICE_NAME}

# 데이터베이스 설정
spring.datasource.driver-class-name=oracle.jdbc.OracleDriver
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}

# 로깅 설정
logging.config=classpath:logback-spring.xml
logging.level.com.logos=${LOG_LEVEL:INFO}

# Actuator 설정
management.endpoints.web.exposure.include=health,info,metrics
management.endpoint.health.show-details=always
```

### 5.3 로깅 표준
```xml
<!-- logback-spring.xml 표준 템플릿 -->
<configuration>
    <springProfile name="!prod">
        <appender name="CONSOLE" class="ch.qos.logback.core.ConsoleAppender">
            <encoder>
                <pattern>%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n</pattern>
            </encoder>
        </appender>
    </springProfile>
    
    <appender name="FILE" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>logs/logback.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>logs/logback.%d{yyyy-MM-dd}.%i.log</fileNamePattern>
            <timeBasedFileNamingAndTriggeringPolicy 
                class="ch.qos.logback.core.rolling.SizeAndTimeBasedFNATP">
                <maxFileSize>100MB</maxFileSize>
            </timeBasedFileNamingAndTriggeringPolicy>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>
    
    <!-- API 응답시간 로그 -->
    <appender name="API_TIME" class="ch.qos.logback.core.rolling.RollingFileAppender">
        <file>logs/api_time.log</file>
        <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">
            <fileNamePattern>logs/api_time.%d{yyyy-MM-dd}-%i.log</fileNamePattern>
            <maxFileSize>100MB</maxFileSize>
            <maxHistory>30</maxHistory>
        </rollingPolicy>
        <encoder>
            <pattern>%d{yyyy-MM-dd HH:mm:ss} - %msg%n</pattern>
        </encoder>
    </appender>
    
    <logger name="api.time" level="INFO" additivity="false">
        <appender-ref ref="API_TIME"/>
    </logger>
    
    <root level="INFO">
        <appender-ref ref="FILE"/>
        <springProfile name="!prod">
            <appender-ref ref="CONSOLE"/>
        </springProfile>
    </root>
</configuration>
```

## 6. 운영 스크립트 표준화

### 6.1 서비스 시작 스크립트 (start.sh)
```bash
#!/bin/bash

# 환경 변수 설정
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk
export SERVICE_NAME="KiiPS-MODULE"
export PROFILE="local"
export JVM_OPTS="-Xms512m -Xmx1024m"

# 프로파일 확인
if [ "$1" != "" ]; then
    PROFILE=$1
fi

echo "Starting $SERVICE_NAME with profile: $PROFILE"

# JAR 파일 찾기
JAR_FILE=$(find target -name "*.jar" | head -1)

if [ ! -f "$JAR_FILE" ]; then
    echo "JAR file not found. Please build the project first."
    exit 1
fi

# 기존 프로세스 확인
PID=$(ps -ef | grep $JAR_FILE | grep -v grep | awk '{print $2}')
if [ "$PID" != "" ]; then
    echo "Service is already running (PID: $PID)"
    exit 1
fi

# 서비스 시작
nohup java $JVM_OPTS -Dspring.profiles.active=$PROFILE -jar $JAR_FILE > logs/nohup.out 2>&1 &

# PID 저장
echo $! > $SERVICE_NAME.pid

echo "Service started successfully"
echo "PID: $(cat $SERVICE_NAME.pid)"
echo "Log file: logs/nohup.out"
```

### 6.2 서비스 종료 스크립트 (stop.sh)
```bash
#!/bin/bash

export SERVICE_NAME="KiiPS-MODULE"

# PID 파일에서 프로세스 ID 읽기
if [ -f "$SERVICE_NAME.pid" ]; then
    PID=$(cat $SERVICE_NAME.pid)
    
    if [ "$PID" != "" ]; then
        echo "Stopping $SERVICE_NAME (PID: $PID)"
        
        # SIGTERM 신호 전송
        kill $PID
        
        # 종료 대기 (최대 30초)
        for i in {1..30}; do
            if ! kill -0 $PID 2>/dev/null; then
                echo "Service stopped successfully"
                rm -f $SERVICE_NAME.pid
                exit 0
            fi
            sleep 1
        done
        
        # 강제 종료
        echo "Force killing service"
        kill -9 $PID
        rm -f $SERVICE_NAME.pid
        echo "Service force stopped"
    else
        echo "PID file is empty"
        rm -f $SERVICE_NAME.pid
    fi
else
    echo "PID file not found. Service may not be running."
fi
```

### 6.3 빌드 스크립트 (build.sh)
```bash
#!/bin/bash

export SERVICE_NAME="KiiPS-MODULE"
export MAVEN_OPTS="-Xmx1024m"

echo "Building $SERVICE_NAME..."

# 기존 빌드 결과 정리
mvn clean

# 빌드 실행
mvn package -DskipTests

if [ $? -eq 0 ]; then
    echo "Build completed successfully"
    
    # JAR 파일 정보 출력
    JAR_FILE=$(find target -name "*.jar" | head -1)
    if [ -f "$JAR_FILE" ]; then
        echo "JAR file: $JAR_FILE"
        echo "File size: $(du -h $JAR_FILE | cut -f1)"
    fi
else
    echo "Build failed"
    exit 1
fi
```

## 7. 개선 권장사항

### 7.1 단기 개선사항 (1-3개월)

#### 7.1.1 중앙 집중 설정 관리
```java
// Spring Cloud Config 도입 검토
@Configuration
@EnableConfigServer
public class ConfigServerConfig {
    // 중앙 집중 설정 서버 구축
}
```

#### 7.1.2 헬스체크 표준화
```java
// 표준 헬스체크 구현
@Component
public class CustomHealthIndicator implements HealthIndicator {
    
    @Override
    public Health health() {
        // 데이터베이스 연결 체크
        // 외부 시스템 연결 체크
        // 메모리 사용률 체크
        return Health.up()
            .withDetail("database", "UP")
            .withDetail("external-system", "UP")
            .build();
    }
}
```

#### 7.1.3 로그 수집 개선
```yaml
# ELK Stack 또는 Fluentd 도입
logging:
  pattern:
    console: "%d{yyyy-MM-dd HH:mm:ss} [%X{traceId}] [%thread] %-5level %logger{36} - %msg%n"
    file: "%d{yyyy-MM-dd HH:mm:ss} [%X{traceId}] [%thread] %-5level %logger{36} - %msg%n"
```

### 7.2 중기 개선사항 (3-6개월)

#### 7.2.1 API 게이트웨이 도입
```java
// Spring Cloud Gateway 구현
@Configuration
public class GatewayConfig {
    
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
            .route("ac-service", r -> r.path("/ACAPI/**")
                .uri("http://localhost:8901"))
            .route("il-service", r -> r.path("/ILAPI/**")
                .uri("http://localhost:8401"))
            .build();
    }
}
```

#### 7.2.2 서비스 디스커버리 도입
```java
// Eureka 또는 Consul 도입
@EnableEurekaServer
@SpringBootApplication
public class ServiceDiscoveryApplication {
    public static void main(String[] args) {
        SpringApplication.run(ServiceDiscoveryApplication.class, args);
    }
}
```

### 7.3 장기 개선사항 (6개월 이상)

#### 7.3.1 컨테이너화
```dockerfile
# Dockerfile 표준 템플릿
FROM openjdk:8-jre-alpine

WORKDIR /app

COPY target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
```

#### 7.3.2 오케스트레이션
```yaml
# Kubernetes 배포 템플릿
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kiips-service
spec:
  replicas: 2
  selector:
    matchLabels:
      app: kiips-service
  template:
    metadata:
      labels:
        app: kiips-service
    spec:
      containers:
      - name: kiips-service
        image: kiips/service:latest
        ports:
        - containerPort: 8080
```

## 8. 결론

KiiPS의 인프라스트럭처 서비스는 단순하고 효과적인 아키텍처를 기반으로 안정적인 서비스를 제공하고 있습니다.

### 8.1 현재 상태의 강점
- **단순성**: 복잡한 인프라 없이 직관적인 서비스 구조
- **표준화**: 일관된 빌드, 배포, 모니터링 체계
- **독립성**: 각 모듈의 완전한 독립 실행
- **효율성**: Maven 멀티모듈을 통한 효율적 빌드 관리

### 8.2 개선을 통한 기대효과
- **확장성**: 서비스 디스커버리를 통한 동적 확장
- **가용성**: API 게이트웨이와 로드밸런싱을 통한 고가용성
- **관찰성**: 중앙 집중 모니터링을 통한 운영 효율성 향상
- **복원력**: Circuit Breaker 등을 통한 장애 대응력 강화

현재의 단순한 구조를 유지하면서도 단계적으로 현대적인 마이크로서비스 패턴을 도입하면, 더욱 견고하고 확장 가능한 시스템으로 발전할 수 있을 것입니다.