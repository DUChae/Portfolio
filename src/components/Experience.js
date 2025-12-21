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
    backgroundColor: "var(--bg-color)", // 수정
    backgroundImage: "radial-gradient(var(--bg-dot) 1px, transparent 1px)", // 수정
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
    textAlign: "left",
    marginBottom: "80px",
  },
  subTitle: {
    color: "var(--accent-color)", // 수정
    fontWeight: 800,
    fontSize: "1.7rem",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
  },
  mainTitle: {
    fontSize: "4rem",
    fontWeight: 900,
    color: "var(--text-main)", // 수정
    margin: "10px 0",
    letterSpacing: "-0.04em",
  },

  timelineWrapper: {
    marginTop: "40px",
  },

  // 타임라인 카드 스타일
  contentStyle: {
    background: "var(--card-bg)", // 수정
    backdropFilter: "blur(10px)",
    borderRadius: "24px",
    border: "1px solid var(--card-border)", // 수정
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05)",
    textAlign: "left",
    padding: "40px",
  },
  contentArrowStyle: {
    borderRight: "7px solid var(--card-border)", // 수정
  },

  // 아이콘 스타일
  iconStyle: {
    background: "var(--accent-color)", // 수정
    color: "#fff",
    boxShadow:
      "0 0 0 4px var(--bg-color), inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)", // 테두리 색상도 배경색 변수로
  },
  endIconStyle: {
    background: "var(--card-border)", // 수정
    color: "var(--text-sub)", // 수정
    boxShadow:
      "0 0 0 4px var(--bg-color), inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)",
  },
  briefcaseIcon: {
    fontSize: "1.2rem",
    marginTop: "2px",
  },

  // 텍스트 스타일
  dateText: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "var(--text-sub)", // 수정
  },
  workTitle: {
    fontSize: "1.8rem",
    fontWeight: "800",
    color: "var(--text-main)", // 수정
    letterSpacing: "-0.02em",
    margin: "10px 0 5px 0",
  },
  workCompany: {
    fontSize: "1.7rem",
    fontWeight: "600",
    color: "var(--accent-color)", // 수정
    margin: 0,
  },

  // 뱃지 스타일
  mainBadge: {
    backgroundColor: "var(--accent-color)", // 수정
    color: "#fff",
    padding: "8px 16px",
    fontSize: "1.2rem",
    fontWeight: "700",
    marginRight: "8px",
    marginBottom: "8px",
    border: "none",
  },
  techBadge: {
    backgroundColor: "var(--bg-dot)", // 수정
    color: "var(--text-sub)", // 수정
    padding: "6px 14px",
    fontSize: "1.2rem",
    fontWeight: "600",
    marginRight: "6px",
    marginBottom: "6px",
    border: "1px solid var(--card-border)", // 수정
  },
};
export default Experience;
