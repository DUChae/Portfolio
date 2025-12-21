import React, { Component } from "react";

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

    const applyStyles = (text) => {
      if (!text) return "";
      return (
        text
          .replace(/\n/g, "<br/>")
          .replace(
            /\*\*(.*?)\*\*/g,
            "<strong style='color:#0f172a; font-weight:700;'>$1</strong>"
          )
          // 섹션 헤더 디자인 (Linear 스타일)
          .replace(
            /### (.*?)(<br\/>|$)/g,
            "<div style='margin-top:45px; margin-bottom:20px;'><span style='font-size:0.85rem; font-weight:800; color:#8e70ff; text-transform:uppercase; letter-spacing:0.1em; display:block; margin-bottom:8px;'>Section</span><h4 style='font-weight:800; color:#1e293b; font-size:1.6rem; letter-spacing:-0.03em; margin:0;'>$1</h4></div>"
          )
          // Key Insights 강조 (카드 스타일)
          .replace(
            /### Key Insights/g,
            "<div style='margin-top:45px; margin-bottom:20px; padding:20px; background:#fff7ed; border-radius:16px; border-left:4px solid #f59e0b;'><span style='font-size:0.85rem; font-weight:800; color:#d97706; text-transform:uppercase; letter-spacing:0.1em; display:block; margin-bottom:4px;'>Valuable Discovery</span><h4 style='font-weight:800; color:#9a3412; font-size:1.6rem; letter-spacing:-0.03em; margin:0;'>Key Insights</h4></div>"
          )
          // 리스트 아이템 (체크 아이콘 스타일)
          .replace(
            /- (.*?)(<br\/>|$)/g,
            "<div style='margin-bottom:12px; padding-left:28px; position:relative; color:#475569; font-size:1.1rem; line-height:1.6;'><span style='position:absolute; left:0; top:2px; color:#8e70ff;'>✦</span>$1</div>"
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
                      }}
                    >
                      <span style={{ fontSize: "2rem" }}>+</span>
                    </div>
                  </div>

                  <div
                    style={{
                      ...styles.contentWrapper,
                      maxHeight: isActive ? "3000px" : "0",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div
                      style={styles.innerContent}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.images && project.images[0] && (
                        <div style={styles.imageContainer}>
                          <img
                            src={project.images[0]}
                            alt={project.title}
                            style={styles.image}
                          />
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
    backgroundColor: "#ffffff",
    backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    minHeight: "100vh",
  },
  container: { maxWidth: "1000px", margin: "0 auto", padding: "0 24px" },
  headerArea: { textAlign: "left", marginBottom: "80px" },
  subTitle: {
    color: "#8e70ff",
    fontWeight: 800,
    fontSize: "0.9rem",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
  },
  mainTitle: {
    fontSize: "4rem",
    fontWeight: 900,
    color: "#0f172a",
    margin: "10px 0",
    letterSpacing: "-0.04em",
  },

  item: {
    backgroundColor: "#f8fafc",
    borderRadius: "24px",
    marginBottom: "16px",
    border: "1px solid #f1f5f9",
    cursor: "pointer",
    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
    overflow: "hidden",
  },
  activeItem: {
    backgroundColor: "#ffffff",
    borderRadius: "32px",
    marginBottom: "32px",
    border: "1px solid #e2e8f0",
    boxShadow: "0 40px 80px -20px rgba(0,0,0,0.08)",
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
    color: "#94a3b8",
    fontWeight: 600,
    display: "block",
    marginBottom: "4px",
  },
  projectTitle: {
    fontSize: "1.8rem",
    fontWeight: 800,
    color: "#1e293b",
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
    background: "#fff",
    border: "1px solid #e2e8f0",
    color: "#8e70ff",
    transition: "0.5s",
  },

  contentWrapper: { transition: "all 0.5s ease-in-out", overflow: "hidden" },
  innerContent: { padding: "0 40px 48px 40px" },

  imageContainer: {
    borderRadius: "20px",
    overflow: "hidden",
    background: "#f8fafc",
    padding: "20px",
    marginBottom: "40px",
  },
  image: {
    width: "100%",
    borderRadius: "12px",
    boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
  },

  techStack: {
    marginTop: "60px",
    borderTop: "1px solid #f1f5f9",
    paddingTop: "40px",
  },
  techLabel: {
    fontSize: "0.85rem",
    fontWeight: 800,
    color: "#94a3b8",
    textTransform: "uppercase",
    marginBottom: "20px",
    letterSpacing: "0.1em",
  },
  techGrid: { display: "flex", flexWrap: "wrap", gap: "10px" },
  techBadge: {
    padding: "8px 16px",
    background: "#f1f5f9",
    borderRadius: "100px",
    fontSize: "0.95rem",
    fontWeight: 600,
    color: "#475569",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },

  buttonGroup: { display: "flex", gap: "12px", marginTop: "50px" },
  primaryBtn: {
    padding: "16px 32px",
    background: "#0f172a",
    color: "#fff",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: 700,
    transition: "0.3s",
  },
  secondaryBtn: {
    padding: "16px 32px",
    background: "#fff",
    color: "#0f172a",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid #e2e8f0",
    transition: "0.3s",
  },
};

export default Projects;
