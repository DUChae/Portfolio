import React from "react";
import ProjectCard from "./ProjectCard";
import BackButton from "./BackButton";
import "./ProjectsPage.css";

const ProjectsPage = () => {
  const projects = [
    {
      title: "졸업 프로젝트 - 사진작가 & 고객 매칭 플랫폼",
      shortDescription: `이 프로젝트는 사진작가와 고객을 연결하는 모바일 플랫폼을 구축하는 것을 목표로 했습니다. 사용자는 원하는 스타일과 조건에 맞는 작가를 검색·예약하고, 리뷰를 통해 작가를 비교할 수 있습니다.`,
      description: `
역할: 프론트엔드 개발 (React Native)

📝 프로젝트 개요
이 프로젝트는 사진작가와 고객을 연결하는 모바일 플랫폼을 구축하는 것을 목표로 했습니다.
사용자 입장: 원하는 스타일과 조건에 맞는 작가를 검색·예약하고, 리뷰를 통해 작가를 비교할 수 있습니다.
작가 입장: 자신의 포트폴리오를 등록하여 고객에게 노출되고, 예약·리뷰 시스템을 통해 평판을 관리할 수 있습니다.
단순히 검색/예약을 넘어, 커뮤니티 게시판을 제공하여 사용자들이 사진 경험을 공유하고 작가와 소통할 수 있는 기능까지 확장했습니다.

🛠️ 기술 스택
Frontend: React Native, JavaScript
Backend: Node.js, Express
협업/환경: Git/GitHub, VS Code

⭐ 주요 기능
회원 관리: 이메일 기반 회원가입 및 로그인, JWT 기반 토큰 인증 → 모바일 환경에서 보안 강화
작가 포트폴리오: 카테고리(웨딩, 프로필, 풍경 등) 필터 기반 검색, 상세 페이지에서 포트폴리오 사진 및 이력 확인
예약 시스템: 고객 → 작가로 예약 신청, 작가 → 수락/거절 및 스케줄 관리
게시판 기능: 리뷰 등록 및 댓글 기능, 커뮤니티 공간(사진 촬영 팁, 후기 공유)

⚡ 기술적 도전 & 해결
문제 1: 모바일 환경에서 API 요청 지연
→ Axios 인터셉터로 에러 핸들링 통합, 로딩 스피너 적용
→ 불필요한 API 호출을 줄이고, 요청/응답 캐싱 처리
문제 2: 대량 데이터 렌더링 시 성능 저하
→ FlatList의 lazy loading + 서버 단의 페이지네이션 적용
→ UI 스크롤 성능을 40% 이상 개선
문제 3: 협업 과정에서 Git 충돌 빈번
→ Git Flow 전략 도입 (feature → develop → main)
→ Pull Request & 코드 리뷰 프로세스로 충돌 최소화

🎯 성과 & 배운 점
사용자 중심 UX 설계: “작가-고객”이라는 양방향 플랫폼 특성을 고려한 UI 설계 경험
서비스 완성도 향상: 단순 매칭을 넘어 리뷰·예약·소통 기능까지 갖춘 MVP 구축
협업 능력 강화: 디자이너·기획자와 협업하면서 “기술적 제약과 사용자 요구 사이 균형”을 맞추는 방법 학습
      `,
      technologies: [
        "React Native",
        "JavaScript",
        "Node.js",
        "Express",
        "Git/GitHub",
        "VS Code",
      ],
      image: "/image/졸프홈.png",
      github: "https://github.com/DUChae/Chalkak",
    },
    {
      title: "토이 프로젝트 - 노벨상 수상자 정보 웹사이트",
      shortDescription: `Nobel Prize API를 활용한 정보 조회 웹 애플리케이션으로, 사용자는 카테고리(물리학, 화학, 평화 등)로 탐색하거나 이름 검색으로 수상자를 조회할 수 있습니다.`,
      description: `
역할: 프론트엔드 개발

📝 프로젝트 개요
Nobel Prize API를 활용한 정보 조회 웹 애플리케이션.
사용자는 카테고리(물리학, 화학, 평화 등)로 탐색하거나 이름 검색으로 수상자를 조회할 수 있습니다.
복잡한 데이터를 직관적으로 제공하기 위해 간결하고 반응형 UI를 구현했습니다.

🛠️ 기술 스택
Frontend: React, JavaScript, CSS Modules
API: Nobel Prize API
협업/환경: Git/GitHub

⭐ 주요 기능
카테고리 기반 탐색: API에서 수상자 데이터를 불러와 카테고리별 리스트 출력
검색 기능: 이름 기반 검색 → 일치 수상자 상세 정보 렌더링
반응형 UI 설계: 모바일/데스크톱 환경 모두 지원

⚡ 기술적 도전 & 해결
문제 1: API 응답 데이터 구조 복잡
→ 불필요한 필드를 제거하고 useMemo로 가공 후 렌더링
→ 초기 로딩 속도 개선
문제 2: 상태 관리 혼잡
→ React 훅(useState, useEffect)만으로 관리 단순화
→ props drilling 최소화

🎯 성과 & 배운 점
실시간 API 데이터 처리 경험 축적
단순 데이터 나열이 아닌, 사용자 친화적인 데이터 흐름 설계 능력 배양
소규모 토이 프로젝트지만 “작은 완성도”의 중요성을 학습
`,
      technologies: [
        "React",
        "JavaScript",
        "API Integration",
        "CSS Modules",
        "Git/GitHub",
      ],
      image: "/image/노벨.png",
      github: "https://github.com/DUChae/Nobel-prize",
    },
    {
      title: "데이터 분석 프로젝트 1 - YouTube 채널 분석",
      shortDescription: `YouTube API 데이터를 기반으로 인기 요인을 분석하여 수익 최적화 전략을 제안한 프로젝트입니다.`,
      description: `
역할: 데이터 수집, 분석 및 시각화

📝 프로젝트 개요
YouTube API 데이터를 기반으로 인기 요인을 분석하여 수익 최적화 전략을 제안한 프로젝트.
조회수, 구독자 증가, 동영상 길이, 업로드 요일 등의 지표를 분석
Tableau 대시보드로 직관적인 데이터 시각화 제공

🛠️ 기술 스택
분석: Python (Pandas, NumPy), MySQL
시각화: Tableau
데이터 수집: YouTube API

⭐ 주요 분석 포인트
업로드 요일 → 조회수와의 상관관계
영상 길이 → 평균 시청 지속시간 영향
수익 vs 조회수 → 광고 수익 최적화 요인

⚡ 기술적 도전 & 해결
문제 1: API 호출 제한
→ 배치(batch) 단위 요청 & DB 저장 → 데이터 손실 최소화
문제 2: 대시보드 정보 과다
→ KPI(조회수·구독자·광고 수익) 중심 단순화

🎯 성과 & 배운 점
데이터 수집분석시각화 전체 파이프라인 경험
데이터 기반으로 “콘텐츠 전략” 제안 능력 습득
단순 분석이 아닌 의사결정 지원형 시각화의 중요성 체감
      `,
      image: "/image/유튭.png",
      technologies: ["Tableau", "Python", "MySQL", "Data Visualization"],
      github: "https://github.com/DUChae/DataAnalysis_Youtube",
    },
    {
      title: "데이터 분석 프로젝트 2 - IMDB 영화 데이터 분석",
      shortDescription: `IMDB 영화 데이터를 분석하여 흥행 요인 및 장르별 트렌드를 도출하고 시각화한 프로젝트입니다.`,
      description: `
역할: 데이터 분석 및 시각화

📝 프로젝트 개요
IMDB 영화 데이터를 분석하여 흥행 요인 및 장르별 트렌드를 도출.
평점, 투표 수, 예산, 수익 데이터를 분석
Tableau 대시보드로 시각화하여 직관적 인사이트 제공

🛠️ 기술 스택
분석: Python (Pandas, Matplotlib, Seaborn), MySQL
시각화: Tableau
데이터 출처: IMDB 오픈 데이터셋

⭐ 주요 분석 포인트
예산 vs 수익률 분석 → 저예산 고수익 영화 패턴 확인
평점 vs 투표 수 → 특정 장르에서 강한 상관관계 발견
장르별 흥행 패턴 → 시대별 장르 인기 변화 시각화

⚡ 기술적 도전 & 해결
문제 1: 결측치 & 이상치 다수 존재
→ Python 전처리: 결측치 보간, 이상치 제거
문제 2: Tableau 성능 저하
→ SQL 단계에서 집계 처리 → 경량 데이터로 시각화

🎯 성과 & 배운 점
데이터 클리닝부터 시각화까지 엔드투엔드 분석 경험
프론트엔드 개발에도 필요한 데이터 기반 사고 습득
복잡한 정보를 사용자 친화적 형태로 전달하는 능력 강화
      `,
      image: "/image/imdb.png",
      technologies: ["Python", "Tableau", "IMDB API", "Data Analysis"],
      github: "https://github.com/DUChae/DataAnalysis_IMDB",
    },
    {
      title: "Spring Boot 기반 게시판 웹 애플리케이션",
      shortDescription: `Spring Boot와 JPA를 활용하여 게시글, 댓글, 회원 기능을 갖춘 백엔드 웹 애플리케이션을 구현했습니다.`,
      description: `
역할: 백엔드 개발

📝 프로젝트 개요
Spring Boot와 JPA를 활용하여 게시글, 댓글, 회원 기능을 갖춘 웹 애플리케이션을 구현했습니다.
전통적인 MVC 방식과 REST API 방식을 동시에 적용하여 백엔드 개발의 다양한 아키텍처를 실습
Spring Security 기반의 인증/인가 로직을 학습하며 보안 개념 심화
Postman을 통한 API 테스트 환경 구축

🛠️ 기술 스택
Backend: Spring Boot, Spring Security, JPA, Lombok
Database: H2 Database (개발용)
환경/툴: Postman (API 테스트), IntelliJ

⭐ 핵심 기능
회원 기능: Spring Security 기반 회원가입, 로그인/로그아웃, 비밀번호 암호화(BCrypt) 적용
게시판 기능: 게시글 CRUD (등록, 조회, 수정, 삭제), 게시글 상세 페이지에서 댓글/좋아요 연동
댓글 기능: 특정 게시글에 종속된 댓글 CRUD, 삭제 시 게시글-댓글 관계 무결성 유지
좋아요 기능: 게시글 좋아요 추가/취소, 중복 요청 방지를 위한 체크 로직 적용

⚡ 기술적 도전 & 해결
문제 1: MVC와 REST API의 공존
상황: 웹 페이지 요청과 REST API 요청이 Security FilterChain에서 충돌
해결: SecurityFilterChain을 2개로 분리, @Order로 우선순위를 지정
MVC 요청: 세션 기반 인증
REST 요청: permitAll() 적용 → 로그인 리다이렉트 회피
문제 2: REST API 인증 문제
상황: Postman 테스트 시 @AuthenticationPrincipal이 null → NPE 발생
해결: 개발 환경에서는 “test” 유저를 하드코딩하여 주입
기능 검증에 집중 가능
실제 배포 단계에서는 JWT 기반 인증으로 전환 계획

🎯 성과 & 배운 점
백엔드-프론트엔드 분리의 필요성: MVC의 한계를 직접 체감, REST API 기반 구조의 장점을 이해
API-First 개발 습관: 클라이언트와의 데이터 계약을 먼저 정의하고, 그에 맞춰 서버 로직을 구현하는 것이 개발 속도와 확장성을 높임
Spring Security 심화 학습: 필터 체인, 인증 객체 관리, 세션 vs 토큰 기반 인증의 차이를 실무적으로 체험
      `,
      technologies: [
        "Spring Boot",
        "Spring Security",
        "JPA",
        "H2 Database",
        "Postman",
        "IntelliJ",
      ],
      image: "",
      github: "https://github.com/DUChae/Spring-boot",
    },
    {
      title: "Spring Boot 기반 RESTful 게시판 API",
      shortDescription: `JWT 인증/인가를 적용한 순수 REST API 기반의 게시판 서비스로, 작성자 권한 검증 및 코드 리팩토링을 통해 완성도를 높였습니다.`,
      description: `
역할: 백엔드 개발

 📝 프로젝트 개요
이 프로젝트는 Spring Boot와 JWT를 활용하여 게시판 REST API 서비스를 구현했습니다. 기존 프로젝트에서 겪었던 문제를 해결하기 위해, 순수한 RESTful 아키텍처를 채택하고, JWT를 통한 강력한 인증/인가 시스템을 구축하여 API의 보안성과 확장성을 모두 확보했습니다.

 🛠️ 기술 스택
- Backend: Java 17, Spring Boot, Spring Security, JPA, JWT
- Database: MySQL
- ORM: Hibernate
- Build Tool: Gradle
- Test: JUnit5, Postman
- Tooling: IntelliJ IDEA

 ⭐ 핵심 기능
- JWT 기반 회원/게시글/댓글/좋아요 관리
  - 회원가입, 로그인 후 JWT 토큰을 발급받아 API 요청에 사용
  - 게시글, 댓글, 좋아요 기능에 인증/인가 로직 적용
- 작성자 권한 검증
  - 게시글과 댓글의 수정 및 삭제 시, 토큰 정보와 데이터베이스의 작성자 정보를 비교하여 권한 확인
- 코드 리팩토링
  - 중복되는 데이터 조회 로직을 헬퍼 메서드로 분리하는 등 DRY 원칙을 적용하여 코드의 응집도 및 유지보수성 향상

 ⚡ 기술적 도전 & 해결
- 문제 1: REST API 인증/인가 시스템 구축
  - 상황 기존 프로젝트의 하드코딩된 인증 방식으로는 실제 서비스에 적용하기 어려웠음.
  - 해결 Spring Security 필터 체인에 JWT 검증 필터를 추가하고, @AuthenticationPrincipal을 활용하여 Controller-Service 계층에서 간결하게 사용자 정보를 활용하도록 구현.
- 문제 2: API 데이터 변경 권한
  - 상황 토큰만 있으면 누구나 다른 사용자의 게시글을 수정/삭제할 수 있는 보안 취약점 존재.
  - 해결 모든 데이터 변경(수정, 삭제) 로직 전에, 토큰의 사용자 정보와 해당 데이터의 작성자 정보를 비교하는 소유권 검증 로직을 추가하여 보안 강화.

 🎯 성과 & 배운 점
- 안전한 API 설계 JWT 기반의 토큰 인증/인가 흐름을 완벽하게 이해하고 실제 구현함으로써 API 보안 역량 강화.
- 효율적인 코드 관리 리팩토링을 통해 코드 중복을 제거하고, 각 계층의 역할을 명확히 함으로써 개발 생산성 향상.
- 실무 지향적 경험 개발용 데이터베이스(H2)에서 벗어나 MySQL을 직접 다루고, REST API만으로 백엔드 로직을 설계하며 실무에 필요한 역량 습득.
  `,
      technologies: [
        "Spring Boot",
        "Spring Security",
        "JPA",
        "JWT",
        "MySQL",
        "Postman",
      ],
      github: "https://github.com/DUChae/Study-REST-API", // 실제 깃허브 URL로 변경하세요.
    },
    {
      title: "실시간 다국어 채팅 웹 - WebSocket & 번역 API",
      shortDescription: `WebSocket과 Google Translation API를 활용하여 한국인, 미국인, 일본인이 언어 장벽 없이 대화할 수 있는 실시간 번역 채팅 웹 애플리케이션입니다.`,
      description: `
역할: 풀스택 개발 (Node.js, Express, Socket.IO, MongoDB)

📝 프로젝트 개요
이 프로젝트는 서로 다른 언어를 사용하는 사용자들이 하나의 채팅방에서 자연스럽게 대화할 수 있도록 설계된 실시간 번역 채팅 웹입니다.  
WebSocket 기반의 양방향 통신으로 메시지를 즉시 주고받으며, Google Cloud Translation API를 통해 각 사용자의 언어로 자동 번역이 이뤄집니다.  

🛠️ 기술 스택
- Backend: Node.js, Express, Socket.IO, Mongoose
- Database: MongoDB (Atlas)
- API: Google Cloud Translation API
- Frontend: HTML, CSS, JavaScript (Vanilla)
- 배포/환경: dotenv, nodemon

⭐ 주요 기능
- 실시간 채팅: Socket.IO를 이용한 양방향 통신으로, 지연 없는 메시지 전송
- 자동 번역: 사용자의 언어 설정에 따라 Google Translation API가 메시지를 번역
- 대화 기록 관리: MongoDB에 메시지 저장 및 관리 (clearChat.js로 DB 초기화 가능)
- 사용자 구분: 닉네임 기반 입장, 입퇴장 알림 표시

⚡ 기술적 도전 & 해결
문제 1: Google Translation API 인증 오류  
→ .env 환경변수 및 서비스 계정 키를 이용한 안전한 인증 설정으로 해결  
문제 2: WebSocket 연결 안정성  
→ 클라이언트 단에서 연결/해제 이벤트를 명확히 정의하고, 서버에서 이벤트 리스너 누적 방지를 위해 disconnect 처리 추가  
문제 3: DB 관리  
→ 대화 내역이 누적되며 DB 용량이 커지는 문제를 clearChat.js 스크립트로 해결

🎯 성과 & 배운 점
- WebSocket 기반의 실시간 통신 구조를 직접 구현하면서, 이벤트 중심 프로그래밍의 흐름을 이해함
- REST API와는 다른 양방향 통신 구조를 체험
- API 연동 및 인증 과정을 통해 외부 서비스와의 통신 안정성을 높이는 방법을 익힘
- 번역, 데이터 저장, 통신 등 다양한 비동기 흐름을 통합 제어하는 경험을 통해 서버 구조 설계 능력 향상

  `,
      technologies: [
        "Node.js",
        "Express",
        "Socket.IO",
        "MongoDB",
        "Google Translation API",
        "JavaScript",
      ],
      image: "/image/Thumbnail.png",
      github: "https://github.com/DUChae/Chatting",
    },
  ];

  return (
    <div className="projects-page">
      <BackButton to="/" className="back-button" />
      <h1 className="page-title">Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectsPage;
