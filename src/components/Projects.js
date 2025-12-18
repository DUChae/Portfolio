import React, { Component } from "react";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
    };
  }

  toggleProject = (index) => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  };

  render() {
    const { resumeProjects, resumeBasicInfo } = this.props;

    if (!resumeBasicInfo || !resumeProjects || resumeProjects.length === 0) {
      return (
        <div className="col-md-12 text-center" style={{ padding: "100px 0" }}>
          <p style={{ fontSize: "1.5rem", color: "#888" }}>
            프로젝트를 불러오는 중입니다...
          </p>
        </div>
      );
    }

    const sectionName = resumeBasicInfo.section_name.projects;

    const projects = resumeProjects.map((project, index) => {
      const isActive = this.state.activeIndex === index;
      const hasImage = project.images && project.images.length > 0;

      return (
        <div
          className="project-item"
          key={project.title}
          style={isActive ? styles.activeItem : styles.item}
        >
          {/* 헤더 부분: 클릭 시 열림/닫힘 */}
          <div
            className="project-header"
            onClick={() => this.toggleProject(index)}
            style={styles.header}
          >
            <h3 style={styles.title}>
              {project.title}
              <span style={styles.toggleIcon}>{isActive ? "−" : "+"}</span>
            </h3>
          </div>

          {/* 확장 내용: 애니메이션 느낌을 위해 조건부 렌더링 */}
          {isActive && (
            <div className="project-content" style={styles.content}>
              {/* 1. 프로젝트 이미지 (스크린샷처럼 중앙 배치) */}
              {hasImage && (
                <div style={styles.imageWrapper}>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    style={styles.image}
                    onError={(e) => (e.target.src = "/images/placeholder.jpg")}
                  />
                </div>
              )}

              {/* 2. 프로젝트 상세 설명 */}
              <div style={styles.details}>
                <p style={styles.description}>{project.description}</p>

                {/* 3. 기술 스택 (아이콘 + 이름) */}
                <div style={styles.techSection}>
                  <h4 style={styles.techTitle}>Technologies:</h4>
                  <ul style={styles.techList}>
                    {project.technologies.map((tech, i) => (
                      <li key={i} style={styles.techItem}>
                        <i className={tech.class} style={styles.techIcon}></i>
                        <span style={styles.techName}>{tech.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. 링크 버튼 (보라색 포인트) */}
                <div style={styles.linkSection}>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-github"
                    style={styles.githubBtn}
                  >
                    GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={styles.liveBtn}
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      );
    });

    return (
      <section id="portfolio" style={styles.section}>
        <div className="container">
          <div className="col-md-12">
            <h1 className="section-title" style={styles.mainTitle}>
              <span>{sectionName}</span>
            </h1>
            <div className="projects-container" style={styles.listContainer}>
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// --- 세련된 스타일 정의 ---
const styles = {
  // 1. 전체 섹션 배경: 스크린샷과 유사한 따뜻한 베이지/샌드 톤
  section: {
    padding: "100px 0",
    backgroundColor: "#E9D5A1", // 따뜻한 에그쉘/베이지 색상
    minHeight: "100vh",
  },

  mainTitle: {
    textAlign: "center",
    marginBottom: "60px",
    fontWeight: "800",
    color: "#333",
    fontSize: "2.5rem",
  },

  listContainer: { maxWidth: "1100px", margin: "0 auto", padding: "0 20px" },

  // 2. 닫혀있는 프로젝트 바: 반투명한 흰색을 써서 배경과 조화롭게
  item: {
    marginBottom: "18px",
    backgroundColor: "rgba(255, 255, 255, 0.8)", // 살짝 투명한 화이트
    borderRadius: "12px",
    overflow: "hidden",
    transition: "transform 0.2s ease, background-color 0.2s ease",
    border: "1px solid rgba(0,0,0,0.03)",
  },

  // 3. 열려있는 프로젝트 카드: 완전한 흰색으로 강조
  activeItem: {
    marginBottom: "30px",
    backgroundColor: "#ffffff",
    borderRadius: "15px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
    border: "1px solid #e0d9c5", // 배경색보다 살짝 진한 테두리
    transform: "scale(1.02)", // 열릴 때 살짝 커지는 효과
    transition: "all 0.3s ease",
  },

  header: {
    padding: "25px 35px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },

  title: {
    fontSize: "1.6rem", // 폰트 크기 상향
    fontWeight: "700",
    margin: 0,
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "#2c2c2c",
  },

  toggleIcon: {
    color: "#ae944f",
    fontSize: "1.8rem",
    fontWeight: "300",
  },

  // 컨텐츠 내부 상세 스타일
  content: {
    padding: "50px",
    borderTop: "1px solid #f1f1f1",
    animation: "fadeIn 0.5s ease", // 페이드인 효과 (CSS 파일에 정의 필요)
  },

  imageWrapper: {
    width: "100%",
    textAlign: "center",
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "15px",
    marginBottom: "40px",
    boxShadow: "inset 0 0 10px rgba(0,0,0,0.02)",
  },

  image: {
    maxWidth: "100%",
    maxHeight: "600px",
    borderRadius: "8px",
    objectFit: "contain",
  },

  description: {
    fontSize: "1.4rem", // About 섹션과 맞춘 큰 폰트
    lineHeight: "1.9",
    color: "#444",
    marginBottom: "40px",
    wordBreak: "keep-all", // 한글 줄바꿈 예쁘게
  },

  // 기술 스택 & 버튼 (이전과 동일하되 폰트만 키움)
  techTitle: {
    fontSize: "1.2rem",
    fontWeight: "700",
    color: "#999",
    marginBottom: "20px",
  },
  techList: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexWrap: "wrap",
    gap: "25px",
  },
  techItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontSize: "1.2rem",
  },

  linkSection: { display: "flex", gap: "20px", marginTop: "50px" },
  githubBtn: {
    padding: "15px 35px",
    backgroundColor: "#8e70ff", // 보라색 포인트
    color: "#fff",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "700",
    fontSize: "1.2rem",
    boxShadow: "0 4px 14px rgba(142, 112, 255, 0.3)",
  },
};

export default Projects;
