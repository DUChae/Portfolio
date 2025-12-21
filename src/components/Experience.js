import React, { Component } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";

class Experience extends Component {
  render() {
    const { resumeExperience, resumeBasicInfo } = this.props;
    if (!resumeExperience || !resumeBasicInfo) return null;

    const sectionName = resumeBasicInfo.section_name.experience;

    const work = resumeExperience.map((work, i) => {
      const mainTech = work.mainTech.map((technology, i) => (
        <Badge pill style={styles.mainBadge} key={i}>
          {technology}
        </Badge>
      ));

      const tech = work.technologies.map((technology, i) => (
        <Badge pill style={styles.techBadge} key={i}>
          {technology}
        </Badge>
      ));

      return (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={<span style={styles.dateText}>{work.years}</span>}
          iconStyle={styles.iconStyle}
          icon={
            <i className="fas fa-briefcase" style={styles.briefcaseIcon}></i>
          }
          key={i}
          contentStyle={styles.contentStyle}
          contentArrowStyle={styles.contentArrowStyle}
        >
          {/* 주요 기술 스택 (상단) */}
          <div style={{ textAlign: "left", marginBottom: "15px" }}>
            {mainTech}
          </div>

          {/* 제목 및 회사명 */}
          <h3 style={styles.workTitle}>{work.title}</h3>
          <h4 style={styles.workCompany}>{work.company}</h4>

          {/* 전체 기술 스택 (하단) */}
          <div style={{ textAlign: "left", marginTop: "20px" }}>{tech}</div>
        </VerticalTimelineElement>
      );
    });

    return (
      <section id="resume" style={styles.section}>
        <div style={styles.container}>
          {/* 일관성 있는 헤더 레이아웃 */}
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
                  ></i>
                }
              />
            </VerticalTimeline>
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
    backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)", // 통일된 도트 패턴
    backgroundSize: "40px 40px",
    minHeight: "100vh",
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

  timelineWrapper: {
    marginTop: "40px",
  },

  // 타임라인 카드 스타일
  contentStyle: {
    background: "rgba(255, 255, 255, 0.7)",
    backdropFilter: "blur(10px)",
    borderRadius: "24px",
    border: "1px solid #f1f5f9",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)",
    textAlign: "left",
    padding: "40px",
  },
  contentArrowStyle: {
    borderRight: "7px solid #f1f5f9",
  },

  // 아이콘 스타일
  iconStyle: {
    background: "#8e70ff",
    color: "#fff",
    boxShadow:
      "0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)",
  },
  endIconStyle: {
    background: "#f1f5f9",
    color: "#94a3b8",
    boxShadow:
      "0 0 0 4px #fff, inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)",
  },
  briefcaseIcon: {
    fontSize: "1.2rem",
    marginTop: "2px",
  },

  // 텍스트 스타일
  dateText: {
    fontSize: "1.1rem",
    fontWeight: "700",
    color: "#64748b",
    opacity: 1,
  },
  workTitle: {
    fontSize: "1.8rem",
    fontWeight: "800",
    color: "#1e293b",
    letterSpacing: "-0.02em",
    margin: "10px 0 5px 0",
  },
  workCompany: {
    fontSize: "1.2rem",
    fontWeight: "600",
    color: "#8e70ff",
    margin: 0,
  },

  // 뱃지 스타일
  mainBadge: {
    backgroundColor: "#8e70ff",
    color: "#fff",
    padding: "8px 16px",
    fontSize: "0.85rem",
    fontWeight: "700",
    marginRight: "8px",
    marginBottom: "8px",
    border: "none",
  },
  techBadge: {
    backgroundColor: "#f1f5f9",
    color: "#475569",
    padding: "6px 14px",
    fontSize: "0.8rem",
    fontWeight: "600",
    marginRight: "6px",
    marginBottom: "6px",
    border: "1px solid #e2e8f0",
  },
};

export default Experience;
