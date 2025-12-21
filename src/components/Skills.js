import React, { Component } from "react";

class Skills extends Component {
  render() {
    const { sharedSkills, resumeBasicInfo } = this.props;
    if (!sharedSkills || !resumeBasicInfo) return null;

    const sectionName = resumeBasicInfo.section_name.skills;

    const skills = sharedSkills.icons.map((item, i) => {
      return (
        <li key={i} style={styles.skillItem}>
          <div style={styles.skillCard}>
            {item.icon ? (
              <div style={styles.iconWrapper}>
                <span
                  className="iconify"
                  data-icon={item.icon}
                  style={styles.skillIcon}
                ></span>
              </div>
            ) : (
              <div style={styles.iconWrapper}>
                <i className={item.class} style={styles.skillIcon}></i>
              </div>
            )}
            <p style={styles.skillName}>{item.name}</p>
          </div>
        </li>
      );
    });

    return (
      <section id="skills" style={styles.section}>
        <div style={styles.container}>
          {/* 일관성 있는 헤더 레이아웃 */}
          <div style={styles.headerArea}>
            <span style={styles.subTitle}>Expertise</span>
            <h1 style={styles.mainTitle}>{sectionName}</h1>
          </div>

          <div style={styles.gridWrapper}>
            <ul style={styles.skillList}>{skills}</ul>
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
    backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)", // 다른 섹션과 통일된 도트 패턴
    backgroundSize: "40px 40px",
    minHeight: "60vh",
  },
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "0 24px",
  },
  headerArea: {
    textAlign: "left",
    marginBottom: "80px",
  },
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

  gridWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  skillList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", // 반응형 그리드
    gap: "24px",
    width: "100%",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  skillItem: {
    perspective: "1000px", // 3D 효과를 위한 설정
  },

  skillCard: {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(8px)",
    border: "1px solid #f1f5f9",
    borderRadius: "24px",
    padding: "32px 20px",
    textAlign: "center",
    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    cursor: "default",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
    // 호버 효과를 CSS 파일 없이 구현하려면 onMouseEnter/Leave가 필요하지만,
    // 인라인 구조상 기본 상태만 정의합니다.
  },

  iconWrapper: {
    width: "64px",
    height: "64px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f8fafc",
    borderRadius: "16px",
    marginBottom: "4px",
    transition: "transform 0.3s ease",
  },

  skillIcon: {
    fontSize: "40px",
    // Devicon이나 Iconify 색상을 유지하기 위해 별도 색상 지정 안함
  },

  skillName: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#1e293b",
    margin: 0,
    letterSpacing: "-0.01em",
  },
};

export default Skills;
