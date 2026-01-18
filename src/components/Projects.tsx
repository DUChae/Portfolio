// src/components/Projects.tsx
"use client";

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image"; // <img> → <Image>로 교체 (경고 해결 + 성능 최적화)

// Props 인터페이스 정의 (타입 에러 해결 핵심)
interface ProjectsProps {
  resumeProjects?: Array<{
    title: string;
    startDate: string;
    description: string;
    images: string[];
    url: string;
    live?: string;
    technologies: Array<{
      name: string;
      class?: string;
    }>;
  }>;
  resumeBasicInfo?: {
    section_name?: {
      projects?: string;
    };
  };
}

// 슬라이더 화살표 커스텀 컴포넌트 (props 타입 명시 → any 에러 방지)
function NextArrow(props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        filter: "invert(1) grayscale(100%) brightness(1.5)",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        filter: "invert(1) grayscale(100%) brightness(1.5)",
        zIndex: 2,
      }}
      onClick={onClick}
    />
  );
}

class Projects extends Component<ProjectsProps> {
  state = { activeIndex: null as number | null };

  toggleProject = (index: number) => {
    this.setState((prevState: { activeIndex: number | null }) => ({
      activeIndex: prevState.activeIndex === index ? null : index,
    }));
  };

  render() {
    const { resumeProjects, resumeBasicInfo } = this.props;

    if (!resumeProjects || !resumeBasicInfo) {
      return (
        <p style={{ color: "red", fontSize: "2rem" }}>
          데이터 없음 - Projects.tsx 디버깅
        </p>
      );
    }

    const sectionName = resumeBasicInfo.section_name?.projects || "Projects";

    // 슬라이더 설정 (타입 안전하게)
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

    // 텍스트 스타일 적용 헬퍼 함수 (타입 명시)
    const applyStyles = (text?: string): string => {
      if (!text) return "";
      return text
        .replace(/\n/g, "<br/>")
        .replace(
          /^/,
          "<div style='font-size: 1.6rem; line-height: 1.9; color: var(--text-sub); font-weight: 400;'>"
        )
        .replace(/$/, "</div>")
        .replace(
          /\*\*(.*?)\*\*/g,
          "<strong style='color:var(--text-main); font-weight:700; font-size: 1.8rem;'>$1</strong>"
        )
        .replace(
          /### (.*?)(<br\/>|$)/g,
          "<div style='margin-top:60px; margin-bottom:30px;'><span style='font-size:1.2rem; font-weight:800; color:var(--accent-color); text-transform:uppercase; letter-spacing:0.15em; display:block; margin-bottom:12px;'>Section Review</span><h4 style='font-weight:800; color:var(--text-main); font-size:2.5rem; letter-spacing:-0.03em; margin:0;'>$1</h4></div>"
        )
        .replace(
          /### Key Insights/g,
          "<div style='margin-top:60px; margin-bottom:30px; padding:40px; background:var(--bg-dot); border-radius:32px; border-left:8px solid #f59e0b;'><span style='font-size:1.2rem; font-weight:800; color:#f59e0b; text-transform:uppercase; letter-spacing:0.15em; display:block; margin-bottom:8px;'>Valuable Discovery</span><h4 style='font-weight:800; color:var(--text-main); font-size:2.5rem; letter-spacing:-0.03em; margin:0;'>Key Insights</h4></div>"
        )
        .replace(
          /- (.*?)(<br\/>|$)/g,
          "<div style='margin-bottom:20px; padding-left:40px; position:relative; color:var(--text-sub); font-size:1.6rem; line-height:1.7;'><span style='position:absolute; left:0; top:2px; color:var(--accent-color); font-size:1.8rem;'>✦</span>$1</div>"
        );
    };

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
                      <span style={{ fontSize: "2.5rem" }}>+</span>
                    </div>
                  </div>

                  <div
                    style={{
                      ...styles.contentWrapper,
                      maxHeight: isActive ? "8000px" : "0",
                      opacity: isActive ? 1 : 0,
                    }}
                  >
                    <div
                      style={styles.innerContent}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* 사진 슬라이더 영역 - <img> → <Image>로 교체 */}
                      {project.images && project.images.length > 0 && (
                        <div style={styles.sliderWrapper}>
                          <Slider {...sliderSettings}>
                            {project.images.map((img, i) => (
                              <div key={i} style={styles.imageSlide}>
                                <Image
                                  src={img}
                                  alt={`${project.title} - Image ${i + 1}`}
                                  width={1200}
                                  height={800}
                                  style={styles.image}
                                  priority={i === 0} // 첫 번째 이미지만 우선 로드
                                />
                              </div>
                            ))}
                          </Slider>
                        </div>
                      )}

                      {/* 프로젝트 설명 */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: applyStyles(project.description),
                        }}
                      />

                      {/* 기술 스택 */}
                      <div style={styles.techStack}>
                        <p style={styles.techLabel}>Built with</p>
                        <div style={styles.techGrid}>
                          {project.technologies.map((tech, i) => (
                            <div key={i} style={styles.techBadge}>
                              {tech.class && <i className={tech.class} />}
                              <span>{tech.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* 버튼 그룹 */}
                      <div style={styles.buttonGroup}>
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={styles.primaryBtn}
                        >
                          View Repository
                        </a>
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
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

// 스타일 객체 (as const로 타입 안전성 강화, textAlign 등 문제 해결)
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
    fontSize: "1.3rem",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
  },
  mainTitle: {
    fontSize: "4.5rem",
    fontWeight: 900,
    color: "var(--text-main)",
    margin: "10px 0",
    letterSpacing: "-0.04em",
  },
  listContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "24px",
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
    padding: "36px 48px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleGroup: {
    display: "flex",
    flexDirection: "column" as const,
  },
  projectYear: {
    fontSize: "1.3rem",
    color: "var(--text-sub)",
    fontWeight: 600,
    display: "block",
    marginBottom: "6px",
  },
  projectTitle: {
    fontSize: "2.4rem",
    fontWeight: 800,
    color: "var(--text-main)",
    margin: 0,
    letterSpacing: "-0.02em",
  },
  toggleIcon: {
    width: "56px",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    border: "1px solid var(--card-border)",
    transition: "0.5s",
  },
  contentWrapper: {
    transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
    overflow: "hidden",
  },
  innerContent: { padding: "0 48px 56px 48px" },
  sliderWrapper: {
    marginBottom: "50px",
    padding: "0 20px",
  },
  imageSlide: {
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "var(--bg-dot)",
    borderRadius: "24px",
    overflow: "hidden",
    height: "550px",
  },
  image: {
    maxHeight: "100%",
    maxWidth: "100%",
    width: "auto",
    height: "auto",
    objectFit: "contain",
    margin: "0 auto",
  },
  techStack: {
    marginTop: "70px",
    borderTop: "1px solid var(--card-border)",
    paddingTop: "40px",
  },
  techLabel: {
    fontSize: "1.3rem",
    fontWeight: 800,
    color: "var(--text-sub)",
    textTransform: "uppercase",
    marginBottom: "25px",
    letterSpacing: "0.1em",
  },
  techGrid: { display: "flex", flexWrap: "wrap" as const, gap: "12px" },
  techBadge: {
    padding: "10px 20px",
    background: "var(--bg-dot)",
    borderRadius: "100px",
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "var(--text-main)",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "1px solid var(--card-border)",
  },
  buttonGroup: { display: "flex", gap: "16px", marginTop: "60px" },
  primaryBtn: {
    padding: "20px 40px",
    fontSize: "1.2rem",
    background: "var(--accent-color)",
    color: "#fff",
    borderRadius: "16px",
    textDecoration: "none",
    fontWeight: 700,
    transition: "0.3s",
  },
  secondaryBtn: {
    padding: "20px 40px",
    fontSize: "1.2rem",
    background: "transparent",
    color: "var(--text-main)",
    borderRadius: "16px",
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid var(--card-border)",
    transition: "0.3s",
  },
} as const;

export default Projects;
