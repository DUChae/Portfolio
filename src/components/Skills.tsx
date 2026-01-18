// src/components/Skills.tsx
"use client";

import React, { Component } from "react";

// Props 인터페이스 정의 (타입 에러 해결 핵심)
// 실제 JSON 구조에 맞게 정확히 작성
interface SkillsProps {
  sharedSkills?: Array<{
    name: string;
    class?: string;
    icon?: string;
    level: string;
  }>;
  resumeBasicInfo?: {
    section_name?: {
      skills?: string;
    };
  };
}

// 스타일 객체 (as const로 타입 안전성 강화 + flexDirection 등 문제 해결)
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
    textAlign: "left" as const,
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
    justifyContent: "center" as const,
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
    textAlign: "center" as const,
    transition: "all 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
    display: "flex",
    flexDirection: "column" as const,
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
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "var(--text-main)",
    margin: 0,
    letterSpacing: "-0.01em",
  },
} as const;

class Skills extends Component<SkillsProps> {
  render() {
    const { sharedSkills, resumeBasicInfo } = this.props;

    if (!sharedSkills || !resumeBasicInfo) {
      return (
        <p style={{ color: "red", fontSize: "2rem" }}>
          데이터 없음 - Skills.tsx 디버깅
        </p>
      );
    }
    const sectionName = resumeBasicInfo.section_name?.skills || "Skills";

    // 기술 스택 리스트 렌더링 (암시적 any 제거)
    const skills = sharedSkills.map((item, i) => (
      <li key={i} style={styles.skillItem}>
        <div style={styles.skillCard}>
          {item.icon ? (
            <div style={styles.iconWrapper}>
              <span
                className="iconify"
                data-icon={item.icon}
                style={styles.skillIcon}
              />
            </div>
          ) : (
            <div style={styles.iconWrapper}>
              <i className={item.class} style={styles.skillIcon} />
            </div>
          )}
          <p style={styles.skillName}>{item.name}</p>
        </div>
      </li>
    ));

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

export default Skills;
