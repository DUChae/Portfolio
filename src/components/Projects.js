import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 슬라이더 화살표 커스텀 (다크모드 가시성 확보)
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        filter: "invert(1) grayscale(100%) brightness(1.5)",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        filter: "invert(1) grayscale(100%) brightness(1.5)",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: null };
  }

  toggleProject = (index) => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  };

  render() {
    const { resumeProjects, resumeBasicInfo } = this.props;

    // 슬라이더 설정
    const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };

    const applyStyles = (text) => {
      if (!text) return "";
      return (
        text
          .replace(/\n/g, "<br/>")
          // 1. 전체 본문 기본 크기를 1.25rem으로 상향
          .replace(
            /^/,
            "<div style='font-size: 1.25rem; line-height: 1.8; color: var(--text-sub);'>"
          )
          .replace(/$/, "</div>")
          // 2. 강조 텍스트(**) 크기 상향
          .replace(
            /\*\*(.*?)\*\*/g,
            "<strong style='color:var(--text-main); font-weight:700; font-size: 1.35rem;'>$1</strong>"
          )
          // 3. 섹션 제목(###) 크기를 2rem으로 상향
          .replace(
            /### (.*?)(<br\/>|$)/g,
            "<div style='margin-top:50px; margin-bottom:25px;'><span style='font-size:1.1rem; font-weight:800; color:var(--accent-color); text-transform:uppercase; letter-spacing:0.1em; display:block; margin-bottom:10px;'>Section</span><h4 style='font-weight:800; color:var(--text-main); font-size:2.2rem; letter-spacing:-0.03em; margin:0;'>$1</h4></div>"
          )
          // 4. Key Insights 특별 섹션 스타일 유지 및 크기 상향
          .replace(
            /### Key Insights/g,
            "<div style='margin-top:50px; margin-bottom:25px; padding:30px; background:var(--bg-dot); border-radius:24px; border-left:6px solid #f59e0b;'><span style='font-size:1.1rem; font-weight:800; color:#f59e0b; text-transform:uppercase; letter-spacing:0.1em; display:block; margin-bottom:6px;'>Valuable Discovery</span><h4 style='font-weight:800; color:var(--text-main); font-size:2.2rem; letter-spacing:-0.03em; margin:0;'>Key Insights</h4></div>"
          )
          // 5. 리스트 아이템 불렛 크기 및 텍스트 크기(1.25rem) 상향
          .replace(
            /- (.*?)(<br\/>|$)/g,
            "<div style='margin-bottom:16px; padding-left:35px; position:relative; color:var(--text-sub); font-size:1.25rem; line-height:1.6;'><span style='position:absolute; left:0; top:2px; color:var(--accent-color); font-size:1.5rem;'>✦</span>$1</div>"
          )
      );
    };

    if (!resumeBasicInfo || !resumeProjects || resumeProjects.length === 0)
      return null;

    const sectionName = resumeBasicInfo.section_name.projects;

    return (
      <section id="portfolio" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.headerArea}>
            <span style={styles.subTitle}>Selected Works</span>
            <h1 style={styles.mainTitle}>{sectionName}</h1>
          </div>

          <div style={styles.listContainer}>
            {resumeProjects.map((project, index) => {
              const isActive = this.state.activeIndex === index;
              return (
                <div
                  key={project.title}
                  style={isActive ? styles.activeItem : styles.item}
                  onClick={() => this.toggleProject(index)}
                >
                  <div style={styles.cardHeader}>
                    <div style={styles.titleGroup}>
                      <span style={styles.projectYear}>
                        {project.startDate}
                      </span>
                      <h3 style={styles.projectTitle}>{project.title}</h3>
                    </div>
                    <div
                      style={{
                        ...styles.toggleIcon,
                        transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
                        background: isActive
                          ? "var(--accent-color)"
                          : "var(--bg-color)",
                        color: isActive ? "#fff" : "var(--accent-color)",
                      }}
                    >
                      <span style={{ fontSize: "2.5rem" }}>+</span>
                    </div>
                  </div>

                  <div
                    style={{
                      ...styles.contentWrapper,
                      maxHeight: isActive ? "8000px" : "0", // 내용이 길어질 것에 대비해 상향
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div
                      style={styles.innerContent}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* 사진 슬라이더 영역 - 비율 유지 및 크기 최적화 */}
                      {project.images && project.images.length > 0 && (
                        <div style={styles.sliderWrapper}>
                          <Slider {...sliderSettings}>
                            {project.images.map((img, i) => (
                              <div key={i} style={styles.imageSlide}>
                                <img
                                  src={img}
                                  alt={`${project.title}-${i}`}
                                  style={styles.image}
                                />
                              </div>
                            ))}
                          </Slider>
                        </div>
                      )}

                      <div
                        dangerouslySetInnerHTML={{
                          __html: applyStyles(project.description),
                        }}
                      />

                      <div style={styles.techStack}>
                        <p style={styles.techLabel}>Built with</p>
                        <div style={styles.techGrid}>
                          {project.technologies.map((tech, i) => (
                            <div key={i} style={styles.techBadge}>
                              <i className={tech.class}></i>
                              <span>{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div style={styles.buttonGroup}>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          style={styles.primaryBtn}
                        >
                          View Repository
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            style={styles.secondaryBtn}
                          >
                            Live Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

const styles = {
  section: {
    padding: "140px 0",
    backgroundColor: "var(--bg-color)",
    backgroundImage: "radial-gradient(var(--bg-dot) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  },
  container: { maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }, // 컨테이너 소폭 확장
  headerArea: { textAlign: "left", marginBottom: "80px" },
  subTitle: {
    color: "var(--accent-color)",
    fontWeight: 800,
    fontSize: "1.3rem", // 상향
    textTransform: "uppercase",
    letterSpacing: "0.2em",
  },
  mainTitle: {
    fontSize: "4.5rem", // 상향
    fontWeight: 900,
    color: "var(--text-main)",
    margin: "10px 0",
    letterSpacing: "-0.04em",
  },
  item: {
    backgroundColor: "var(--bg-dot)",
    borderRadius: "24px",
    marginBottom: "16px",
    border: "1px solid var(--card-border)",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
    overflow: "hidden",
  },
  activeItem: {
    backgroundColor: "var(--card-bg)",
    backdropFilter: "blur(10px)",
    borderRadius: "32px",
    marginBottom: "32px",
    border: "1px solid var(--accent-color)",
    boxShadow: "0 40px 80px -20px rgba(0,0,0,0.2)",
    cursor: "default",
    overflow: "hidden",
    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
  },
  cardHeader: {
    padding: "36px 48px", // 패딩 소폭 증가
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  projectYear: {
    fontSize: "1.3rem", // 상향
    color: "var(--text-sub)",
    fontWeight: 600,
    display: "block",
    marginBottom: "6px",
  },
  projectTitle: {
    fontSize: "2.4rem", // 상향
    fontWeight: 800,
    color: "var(--text-main)",
    margin: 0,
    letterSpacing: "-0.02em",
  },
  toggleIcon: {
    width: "56px", // 크기 증가
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    border: "1px solid var(--card-border)",
    transition: "0.5s",
  },
  contentWrapper: {
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    overflow: "hidden",
  },
  innerContent: { padding: "0 48px 56px 48px" },

  sliderWrapper: {
    marginBottom: "50px",
    padding: "0 20px",
  },
  imageSlide: {
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--bg-dot)",
    borderRadius: "24px",
    overflow: "hidden",
    height: "550px", // 높이 소폭 증가
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    margin: "0 auto",
  },

  techStack: {
    marginTop: "70px",
    borderTop: "1px solid var(--card-border)",
    paddingTop: "40px",
  },
  techLabel: {
    fontSize: "1.3rem", // 상향
    fontWeight: 800,
    color: "var(--text-sub)",
    textTransform: "uppercase",
    marginBottom: "25px",
    letterSpacing: "0.1em",
  },
  techGrid: { display: "flex", flexWrap: "wrap", gap: "12px" },
  techBadge: {
    padding: "10px 20px",
    background: "var(--bg-dot)",
    borderRadius: "100px",
    fontSize: "1.15rem", // 상향
    fontWeight: 600,
    color: "var(--text-main)",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "1px solid var(--card-border)",
  },
  buttonGroup: { display: "flex", gap: "16px", marginTop: "60px" },
  primaryBtn: {
    padding: "20px 40px", // 크기 증가
    fontSize: "1.2rem",
    background: "var(--accent-color)",
    color: "#fff",
    borderRadius: "16px",
    textDecoration: "none",
    fontWeight: 700,
    transition: "0.3s",
  },
  secondaryBtn: {
    padding: "20px 40px", // 크기 증가
    fontSize: "1.2rem",
    background: "transparent",
    color: "var(--text-main)",
    borderRadius: "16px",
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid var(--card-border)",
    transition: "0.3s",
  },
};

export default Projects;
