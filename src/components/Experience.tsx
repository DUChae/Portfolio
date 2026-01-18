// src/components/Experience.tsx
"use client";

import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

// 타입 import
import { Experience as ExperienceType } from "@/types/portfolio";

interface ExperienceProps {
  resumeExperience?: ExperienceType[];
  resumeBasicInfo?: {
    section_name?: {
      experience?: string;
    };
  };
}

// 스타일 객체 (겹침 해결 핵심 수정)
const styles = {
  section: {
    padding: "140px 0",
    backgroundColor: "var(--bg-color)",
    backgroundImage: "radial-gradient(var(--bg-dot) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    minHeight: "100vh",
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
    fontSize: "1.7rem",
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
  timelineWrapper: {
    marginTop: "40px",
  },
  contentStyle: {
    background: "var(--card-bg)",
    backdropFilter: "blur(10px)",
    borderRadius: "24px",
    border: "1px solid var(--card-border)",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)",
    textAlign: "left" as const,
    padding: "40px !important", // !important로 강제 적용
    maxWidth: "100%", // 부모 너비 초과 방지
    wordBreak: "break-word" as const, // 긴 단어 줄바꿈
    overflowWrap: "break-word" as const,
  },
  contentArrowStyle: {
    borderRight: "7px solid var(--card-border)",
  },
  iconStyle: {
    background: "var(--accent-color)",
    color: "#fff",
    boxShadow: "0 0 0 4px var(--bg-color)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  endIconStyle: {
    background: "var(--accent-color)",
    color: "#fff",
    boxShadow:
      "0 0 0 4px var(--bg-color), inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  briefcaseIcon: {
    fontSize: "2rem",
    marginTop: "2px",
  },
  dateText: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "var(--text-sub)",
  },
  workTitle: {
    fontSize: "1.8rem",
    fontWeight: "800",
    color: "var(--text-main)",
    letterSpacing: "-0.02em",
    margin: "10px 0 5px 0",
  },
  workCompany: {
    fontSize: "1.7rem",
    fontWeight: "600",
    color: "var(--accent-color)",
    margin: 0,
  },
  mainTechContainer: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "12px", // 뱃지 간격
    marginBottom: "20px",
  },
  techContainer: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "10px",
    marginTop: "20px",
  },
  mainBadge: {
    backgroundColor: "var(--accent-color)",
    color: "#fff",
    padding: "8px 16px",
    fontSize: "1.1rem",
    fontWeight: "700",
    borderRadius: "20px",
    whiteSpace: "nowrap" as const,
    flexShrink: 0,
  },
  techBadge: {
    backgroundColor: "var(--bg-dot)",
    color: "var(--text-sub)",
    padding: "6px 14px",
    fontSize: "1rem",
    fontWeight: "600",
    borderRadius: "20px",
    border: "1px solid var(--card-border)",
    whiteSpace: "nowrap" as const,
    flexShrink: 0,
  },
} as const;

class Experience extends Component<ExperienceProps> {
  render() {
    const { resumeExperience, resumeBasicInfo } = this.props;

    if (!resumeExperience || !resumeBasicInfo) {
      return (
        <p style={{ color: "red", fontSize: "2rem" }}>
          데이터 없음 - Experience.tsx 디버깅
        </p>
      );
    }

    const sectionName =
      resumeBasicInfo.section_name?.experience || "Experience";

    const work = resumeExperience.map((work: ExperienceType, i: number) => {
      const mainTech = work.mainTech.map((technology: string, idx: number) => (
        <Badge pill style={styles.mainBadge} key={idx}>
          {technology}
        </Badge>
      ));

      const tech = work.technologies.map((technology: string, idx: number) => (
        <Badge pill style={styles.techBadge} key={idx}>
          {technology}
        </Badge>
      ));

      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.years}
          iconStyle={styles.iconStyle}
          icon={<i className="fas fa-briefcase" style={styles.briefcaseIcon} />}
          key={i}
          contentStyle={styles.contentStyle}
          contentArrowStyle={styles.contentArrowStyle}
        >
          {/* 주요 기술 (상단) */}
          <div style={styles.mainTechContainer}>{mainTech}</div>

          {/* 제목 및 회사 */}
          <h3 style={styles.workTitle}>{work.title}</h3>
          <h4 style={styles.workCompany}>{work.company}</h4>

          {/* 전체 기술 (하단) */}
          <div style={styles.techContainer}>{tech}</div>
        </VerticalTimelineElement>
      );
    });

    return (
      <section id="resume" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.headerArea}>
            <span style={styles.subTitle}>Career Path</span>
            <h1 style={styles.mainTitle}>{sectionName}</h1>
          </div>

          <div style={styles.timelineWrapper}>
            <VerticalTimeline lineColor="#f1f5f9">
              {work}
              <VerticalTimelineElement
                iconStyle={styles.endIconStyle}
                icon={
                  <i
                    className="fas fa-hourglass-start"
                    style={styles.briefcaseIcon}
                  />
                }
                contentStyle={{ display: "none" }}
                contentArrowStyle={{ display: "none" }}
              />
            </VerticalTimeline>
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;
