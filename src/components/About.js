import React, { Component } from "react";

class About extends Component {
  render() {
    const { resumeBasicInfo, sharedBasicInfo } = this.props;
    if (!resumeBasicInfo || !sharedBasicInfo) return null;

    const profilepic = "images/portfolio/photo/ID_Photo.jpg";
    const {
      about_summary: summary,
      about_sections: sections = [],
      about_conclusion: conclusion,
    } = resumeBasicInfo;

    const applyStyles = (text) => {
      if (!text) return "";
      return text
        .replace(/\n/g, "<br/>")
        .replace(
          /\*\*(.*?)\*\*/g,
          "<strong style='color:#0f172a;'>$1</strong>"
        );
    };

    return (
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          {/* 상단 캡션 레이아웃 */}
          <div style={styles.headerArea}>
            <span style={styles.subTitle}>Introduction</span>
            <h1 style={styles.mainTitle}>
              {resumeBasicInfo.basic_info?.section_name?.about || "About Me"}
            </h1>
          </div>

          <div style={styles.contentGrid}>
            {/* 왼쪽: 프로필 카드 (Floating 스타일) */}
            <div style={styles.profileColumn}>
              <div style={styles.profileCard}>
                <div style={styles.imageWrapper}>
                  <img
                    src={profilepic}
                    alt="Profile"
                    style={styles.profileImg}
                  />
                </div>
                <div style={styles.techStack}>
                  <p style={styles.techLabel}>Main Stack</p>
                  <div style={styles.iconRow}>
                    <span
                      className="iconify"
                      data-icon="skill-icons:javascript"
                      style={styles.techIcon}
                    ></span>
                    <span
                      className="iconify"
                      data-icon="logos:react"
                      style={styles.techIcon}
                    ></span>
                    <span
                      className="iconify"
                      data-icon="logos:mysql"
                      style={styles.techIcon}
                    ></span>
                  </div>
                </div>
              </div>
            </div>

            {/* 오른쪽: 상세 정보 (Bento 스타일의 깔끔한 카드) */}
            <div style={styles.detailsColumn}>
              <div style={styles.infoCard}>
                <div style={styles.cardContent}>
                  <h2 style={styles.helloText}>
                    {resumeBasicInfo.basic_info?.description_header}
                    <span style={styles.accentDot}>.</span>
                  </h2>

                  {summary && (
                    <div style={styles.summaryText}>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: applyStyles(summary),
                        }}
                      />
                    </div>
                  )}

                  <div style={styles.divider}></div>

                  {sections.map((section, index) => (
                    <div key={index} style={styles.infoSection}>
                      <div style={styles.sectionCaption}>
                        0{index + 1} / {section.title}
                      </div>
                      <ul style={styles.infoList}>
                        {section.details.map((detail, i) => (
                          <li key={i} style={styles.infoItem}>
                            <span
                              dangerouslySetInnerHTML={{
                                __html: applyStyles(detail),
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {conclusion && (
                    <div style={styles.conclusionBox}>
                      <span style={styles.quoteIcon}>“</span>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: applyStyles(conclusion),
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
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
    backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)", // Projects와 동일한 도트 패턴
    backgroundSize: "40px 40px",
    minHeight: "100vh",
  },
  container: { maxWidth: "1100px", margin: "0 auto", padding: "0 24px" },
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

  contentGrid: {
    display: "flex",
    gap: "60px",
    alignItems: "flex-start",
    flexWrap: "wrap",
  },

  // 왼쪽 프로필 스타일
  profileColumn: { flex: "1", minWidth: "300px" },
  profileCard: {
    backgroundColor: "#fff",
    borderRadius: "32px",
    padding: "24px",
    border: "1px solid #f1f5f9",
    boxShadow: "0 30px 60px -12px rgba(0,0,0,0.08)",
  },
  imageWrapper: {
    width: "100%",
    borderRadius: "20px",
    overflow: "hidden",
    marginBottom: "24px",
  },
  profileImg: { width: "100%", height: "auto", display: "block" },
  techStack: { textAlign: "center", paddingTop: "10px" },
  techLabel: {
    fontSize: "0.75rem",
    fontWeight: 800,
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: "16px",
  },
  iconRow: { display: "flex", justifyContent: "center", gap: "20px" },
  techIcon: { fontSize: "2.5rem" },

  // 오른쪽 정보 카드 스타일
  detailsColumn: { flex: "2.5", minWidth: "450px" },
  infoCard: {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(10px)",
    borderRadius: "32px",
    border: "1px solid #f1f5f9",
    padding: "60px",
  },
  helloText: {
    fontSize: "3.5rem",
    fontWeight: 900,
    color: "#0f172a",
    marginBottom: "30px",
    letterSpacing: "-0.04em",
  },
  accentDot: { color: "#8e70ff" },
  summaryText: {
    fontSize: "1.25rem",
    color: "#475569",
    lineHeight: "1.7",
    marginBottom: "40px",
  },
  divider: { height: "1px", backgroundColor: "#f1f5f9", margin: "40px 0" },

  infoSection: { marginBottom: "50px" },
  sectionCaption: {
    fontSize: "0.85rem",
    fontWeight: 800,
    color: "#8e70ff",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  infoList: { listStyle: "none", padding: 0 },
  infoItem: {
    fontSize: "1.15rem",
    color: "#1e293b",
    marginBottom: "16px",
    paddingLeft: "24px",
    position: "relative",
    lineHeight: "1.6",
  },
  // 프로젝트 섹션과 통일된 불렛 포인트
  infoItemBefore: {
    // CSS 파일이 있다면 추가 권장, 인라인으로는 ✦ 사용
    content: "'✦'",
    position: "absolute",
    left: 0,
    color: "#8e70ff",
  },

  conclusionBox: {
    marginTop: "60px",
    padding: "40px",
    backgroundColor: "#f8fafc",
    borderRadius: "24px",
    position: "relative",
    fontSize: "1.2rem",
    color: "#475569",
    lineHeight: "1.8",
    fontWeight: "500",
  },
  quoteIcon: {
    position: "absolute",
    top: "-10px",
    left: "20px",
    fontSize: "4rem",
    color: "#e2e8f0",
    fontFamily: "serif",
  },
};

export default About;
