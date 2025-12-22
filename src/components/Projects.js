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
      return text
        .replace(/\n/g, "<br/>")
        .replace(
          /\*\*(.*?)\*\*/g,
          "<strong style='color:var(--text-main); font-weight:700;'>$1</strong>"
        )
        .replace(
          /### (.*?)(<br\/>|$)/g,
          "<div style='margin-top:45px; margin-bottom:20px;'><span style='font-size:0.85rem; font-weight:800; color:var(--accent-color); text-transform:uppercase; letter-spacing:0.1em; display:block; margin-bottom:8px;'>Section</span><h4 style='font-weight:800; color:var(--text-main); font-size:1.6rem; letter-spacing:-0.03em; margin:0;'>$1</h4></div>"
        )
        .replace(
          /### Key Insights/g,
          "<div style='margin-top:45px; margin-bottom:20px; padding:20px; background:var(--bg-dot); border-radius:16px; border-left:4px solid #f59e0b;'><span style='font-size:0.85rem; font-weight:800; color:#f59e0b; text-transform:uppercase; letter-spacing:0.1em; display:block; margin-bottom:4px;'>Valuable Discovery</span><h4 style='font-weight:800; color:var(--text-main); font-size:1.6rem; letter-spacing:-0.03em; margin:0;'>Key Insights</h4></div>"
        )
        .replace(
          /- (.*?)(<br\/>|$)/g,
          "<div style='margin-bottom:12px; padding-left:28px; position:relative; color:var(--text-sub); font-size:1.1rem; line-height:1.6;'><span style='position:absolute; left:0; top:2px; color:var(--accent-color);'>✦</span>$1</div>"
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
                      <span style={{ fontSize: "2rem" }}>+</span>
                    </div>
                  </div>

                  <div
                    style={{
                      ...styles.contentWrapper,
                      maxHeight: isActive ? "5000px" : "0",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div
                      style={styles.innerContent}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* 사진 슬라이더 영역 - 이미지 확대 방지 및 여러 장 대응 */}
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
  container: { maxWidth: "1000px", margin: "0 auto", padding: "0 24px" },
  headerArea: { textAlign: "left", marginBottom: "80px" },
  subTitle: {
    color: "var(--accent-color)",
    fontWeight: 800,
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
  },
  mainTitle: {
    fontSize: "4rem",
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
    padding: "32px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  projectYear: {
    fontSize: "0.9rem",
    color: "var(--text-sub)",
    fontWeight: 600,
    display: "block",
    marginBottom: "4px",
  },
  projectTitle: {
    fontSize: "1.8rem",
    fontWeight: 800,
    color: "var(--text-main)",
    margin: 0,
    letterSpacing: "-0.02em",
  },
  toggleIcon: {
    width: "48px",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    border: "1px solid var(--card-border)",
    transition: "0.5s",
  },
  contentWrapper: { transition: "all 0.5s ease-in-out", overflow: "hidden" },
  innerContent: { padding: "0 40px 48px 40px" },

  // --- 슬라이더 및 이미지 최적화 스타일 ---
  sliderWrapper: {
    marginBottom: "40px",
    padding: "0 10px", // 화살표 공간
  },
  imageSlide: {
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--bg-dot)",
    borderRadius: "20px",
    overflow: "hidden",
    height: "500px", // 슬라이더 전체 높이 고정
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "auto",
    height: "auto",
    objectFit: "contain", // 원본 비율 유지하면서 영역 안에 맞춤
    margin: "0 auto",
  },
  // ------------------------------------

  techStack: {
    marginTop: "60px",
    borderTop: "1px solid var(--card-border)",
    paddingTop: "40px",
  },
  techLabel: {
    fontSize: "0.85rem",
    fontWeight: 800,
    color: "var(--text-sub)",
    textTransform: "uppercase",
    marginBottom: "20px",
    letterSpacing: "0.1em",
  },
  techGrid: { display: "flex", flexWrap: "wrap", gap: "10px" },
  techBadge: {
    padding: "8px 16px",
    background: "var(--bg-dot)",
    borderRadius: "100px",
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "var(--text-main)",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    border: "1px solid var(--card-border)",
  },
  buttonGroup: { display: "flex", gap: "12px", marginTop: "50px" },
  primaryBtn: {
    padding: "16px 32px",
    background: "var(--accent-color)",
    color: "#fff",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: 700,
    transition: "0.3s",
  },
  secondaryBtn: {
    padding: "16px 32px",
    background: "transparent",
    color: "var(--text-main)",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid var(--card-border)",
    transition: "0.3s",
  },
};

export default Projects;
