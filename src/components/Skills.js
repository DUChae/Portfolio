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
    backgroundColor: "var(--bg-color)",
    backgroundImage: "radial-gradient(var(--bg-dot) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    minHeight: "60vh",
    transition: "all 0.3s ease",
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

  gridWrapper: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  skillList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
    gap: "24px",
    width: "100%",
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  skillItem: {
    perspective: "1000px",
  },

  skillCard: {
    backgroundColor: "var(--card-bg)",
    backdropFilter: "blur(12px)",
    border: "1px solid var(--card-border)",
    borderRadius: "24px",
    padding: "32px 20px",
    textAlign: "center",
    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)",
  },

  iconWrapper: {
    width: "72px",
    height: "72px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--bg-color)",
    borderRadius: "20px",
    marginBottom: "4px",
    border: "1px solid var(--card-border)",
    transition: "transform 0.3s ease",
  },

  skillIcon: {
    fontSize: "40px",
    color: "var(--text-main)",
    filter: "drop-shadow(0 0 2px rgba(255,255,255,0.1))",
  },

  skillName: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "var(--text-main)",
    margin: 0,
    letterSpacing: "-0.01em",
  },
};
export default Skills;
