// src/components/About.tsx
"use client";

import React, { Component } from "react";
import Image from "next/image";
import { BasicInfo, AboutSection } from "@/types/portfolio";

interface AboutProps {
  resumeBasicInfo?: {
    basic_info?: BasicInfo;
    about_summary?: string;
    about_sections?: AboutSection[];
    about_conclusion?: string;
  };
  sharedBasicInfo?: BasicInfo;
  currentLang?: string; // ← 핵심! page.tsx에서 currentLang 상태를 props로 전달
}

// 스타일 객체 (기존 유지)
const styles = {
  section: {
    padding: "140px 0",
    backgroundColor: "var(--bg-color)",
    backgroundImage: "radial-gradient(var(--bg-dot) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    minHeight: "100vh",
    transition: "all 0.3s ease",
  },
  container: { maxWidth: "1100px", margin: "0 auto", padding: "0 24px" },
  headerArea: { textAlign: "left" as const, marginBottom: "80px" },
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
  contentGrid: {
    display: "flex",
    gap: "60px",
    alignItems: "flex-start",
    flexWrap: "wrap" as const,
  },
  profileColumn: { flex: "1", minWidth: "300px" },
  profileCard: {
    backgroundColor: "var(--card-bg)",
    borderRadius: "32px",
    padding: "24px",
    border: "1px solid var(--card-border)",
    boxShadow: "0 30px 60px -12px rgba(0,0,0,0.1)",
    backdropFilter: "blur(10px)",
  },
  imageWrapper: {
    width: "100%",
    borderRadius: "20px",
    overflow: "hidden",
    marginBottom: "24px",
  },
  profileImg: { width: "100%", height: "auto", display: "block" },
  detailsColumn: { flex: "2.5", minWidth: "500px" },
  infoCard: {
    backgroundColor: "var(--card-bg)",
    backdropFilter: "blur(10px)",
    borderRadius: "32px",
    border: "1px solid var(--card-border)",
    padding: "60px",
  },
  helloText: {
    fontSize: "3.5rem",
    fontWeight: 900,
    color: "var(--text-main)",
    marginBottom: "30px",
    letterSpacing: "-0.04em",
  },
  accentDot: { color: "var(--accent-color)" },
  summaryText: {
    fontSize: "1.7rem",
    color: "var(--text-sub)",
    lineHeight: "1.7",
    marginBottom: "40px",
  },
  divider: {
    height: "1px",
    backgroundColor: "var(--card-border)",
    margin: "40px 0",
  },
  infoSection: { marginBottom: "50px" },
  sectionCaption: {
    fontSize: "1.7rem",
    fontWeight: 800,
    color: "var(--accent-color)",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
    marginBottom: "20px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  infoList: { listStyle: "none", padding: 0 },
  infoItem: {
    fontSize: "1.7rem",
    color: "var(--text-main)",
    marginBottom: "16px",
    paddingLeft: "24px",
    position: "relative",
    lineHeight: "1.6",
  },
  conclusionBox: {
    marginTop: "60px",
    padding: "40px 40px 40px 80px",
    backgroundColor: "var(--bg-dot)",
    borderRadius: "24px",
    position: "relative",
    fontSize: "1.6rem",
    color: "var(--text-main)",
    lineHeight: "1.8",
    fontWeight: "500",
    fontStyle: "italic" as const,
  },
  quoteIconOpen: {
    position: "absolute",
    top: "-20px",
    left: "20px",
    fontSize: "8rem",
    color: "var(--accent-color)",
    opacity: 0.25,
    fontFamily: "Georgia, serif",
    pointerEvents: "none" as const,
  },
  quoteIconClose: {
    position: "absolute",
    bottom: "-40px",
    right: "20px",
    fontSize: "8rem",
    color: "var(--accent-color)",
    opacity: 0.25,
    fontFamily: "Georgia, serif",
    transform: "rotate(180deg)",
    pointerEvents: "none" as const,
  },
} as const;

// 텍스트 스타일 헬퍼
const applyStyles = (text?: string): string => {
  if (!text) return "";
  return text
    .replace(/\n/g, "<br/>")
    .replace(
      /\*\*(.*?)\*\*/g,
      "<strong style='color:var(--text-main); font-weight:700;'>$1</strong>"
    );
};

class About extends Component<AboutProps> {
  render() {
    const { resumeBasicInfo, sharedBasicInfo, currentLang = "ko" } = this.props;

    // 데이터 없으면 로딩 메시지
    if (!resumeBasicInfo || !sharedBasicInfo) {
      return (
        <section id="about" style={styles.section}>
          <div style={styles.container}>
            <p>데이터 로딩 중...</p>
          </div>
        </section>
      );
    }

    const profilepic = "/images/portfolio/photo/ID_Photo.jpg";

    // 언어별 인사말 매핑
    const helloMessages: Record<string, string> = {
      ko: "안녕하세요",
      en: "Hello",
    };

    // page.tsx에서 전달받은 currentLang 사용 (가장 정확함)
    const helloText = helloMessages[currentLang] || "안녕하세요";

    const summary = resumeBasicInfo.about_summary || "";
    const sections = resumeBasicInfo.about_sections || [];
    const conclusion = resumeBasicInfo.about_conclusion || "";

    const sectionName =
      resumeBasicInfo.basic_info?.section_name?.about || "About Me";

    return (
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.headerArea}>
            <span style={styles.subTitle}>Introduction</span>
            <h1 style={styles.mainTitle}>{sectionName}</h1>
          </div>

          <div style={styles.contentGrid}>
            <div style={styles.profileColumn}>
              <div style={styles.profileCard}>
                <div style={styles.imageWrapper}>
                  <Image
                    src={profilepic}
                    alt="Profile Photo"
                    width={400}
                    height={500}
                    style={styles.profileImg}
                    priority
                  />
                </div>
              </div>
            </div>

            <div style={styles.detailsColumn}>
              <div style={styles.infoCard}>
                {/* 인사말: props로 받은 currentLang 기준으로 표시 */}
                <h2 style={styles.helloText}>
                  {helloText}
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

                <div style={styles.divider} />

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
                    <span style={styles.quoteIconOpen}>“</span>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: applyStyles(conclusion),
                      }}
                    />
                    <span style={styles.quoteIconClose}>”</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
