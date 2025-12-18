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
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    };

    return (
      <section id="about" style={styles.section}>
        <div className="container">
          <h1 className="section-title" style={styles.mainTitle}>
            <span>
              {resumeBasicInfo.basic_info?.section_name?.about || "소개"}
            </span>
          </h1>

          <div className="row align-items-start mt-5">
            {/* 왼쪽: 프로필 섹션 (완벽 중앙 정렬) */}
            <div className="col-md-3 mb-5 d-flex flex-column align-items-center justify-content-center">
              <div style={styles.profileWrapper}>
                <div className="polaroid" style={styles.polaroidCustom}>
                  <img
                    src={profilepic}
                    alt="Profile"
                    style={styles.profileImg}
                  />
                  <div style={styles.iconContainer}>
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

            {/* 오른쪽: 상세 설명 카드 (폰트 크기 대폭 상향) */}
            <div className="col-md-9">
              <div className="card" style={styles.aboutCard}>
                <div className="card-header" style={styles.cardHeader}>
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    style={styles.dot}
                  ></span>
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    style={styles.dot}
                  ></span>
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    style={styles.dot}
                  ></span>
                </div>

                <div className="card-body" style={styles.cardBody}>
                  <h2 style={styles.helloText}>
                    {resumeBasicInfo.basic_info?.description_header} :)
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
                      <h3 style={styles.infoTitle}>{section.title}</h3>
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
  section: { padding: "100px 0", backgroundColor: "#fcfcfc" },
  mainTitle: {
    textAlign: "center",
    marginBottom: "60px",
    fontWeight: "800",
    fontSize: "2.5rem",
  },

  // 프로필 영역 (왼쪽으로 더 밀기)
  profileWrapper: {
    width: "100%",
    maxWidth: "320px",
    position: "relative", // 상대 위치 설정
    left: "-80px", // 왼쪽으로 80px 이동 (더 왼쪽으로 가려면 숫자를 키우세요)
  },
  polaroidCustom: {
    padding: "20px 20px 20px 30px",
    backgroundColor: "#fff",
    boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
    borderRadius: "15px",
    border: "none",
  },
  profileImg: {
    width: "100%",
    height: "auto",
    borderRadius: "8px",
    marginBottom: "20px",
    // transform: "translateX(40px)" 를 삭제했습니다. (이미지 잘림 해결)
  },
  iconContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "10px 0",
  },
  techIcon: { fontSize: "3rem" },

  // 카드 영역 (너비를 넓게 유지하며 왼쪽으로 당기기)
  aboutCard: {
    borderRadius: "16px",
    border: "none",
    boxShadow: "0 20px 50px rgba(0,0,0,0.06)",
    overflow: "hidden",
    width: "110%", // 너비를 부모보다 10% 더 넓게 설정 가능
    position: "relative",
    left: "-50px", // 프로필 카드를 따라 왼쪽으로 50px 이동
  },

  // ... (나머지 cardHeader, cardBody, 텍스트 스타일은 동일)
  cardHeader: {
    backgroundColor: "#f5f5f5",
    borderBottom: "none",
    padding: "12px 20px",
    display: "flex",
    gap: "10px",
  },
  dot: { fontSize: "14px" },
  cardBody: { padding: "50px", color: "#333", lineHeight: "1.8" },

  helloText: {
    fontWeight: "800",
    marginBottom: "25px",
    color: "#111",
    fontSize: "3rem",
  },
  summaryText: {
    fontSize: "1.8rem",
    marginBottom: "30px",
    color: "#444",
    fontWeight: "400",
  },
  divider: { height: "2px", backgroundColor: "#eee", margin: "40px 0" },

  infoSection: { marginBottom: "40px" },
  infoTitle: {
    fontSize: "2rem",
    fontWeight: "700",
    color: "#222",
    marginBottom: "20px",
    borderLeft: "6px solid #ae944f",
    paddingLeft: "15px",
  },
  infoList: { paddingLeft: "25px", fontSize: "2.2rem" },
  infoItem: { marginBottom: "12px", fontSize: "1.8rem", color: "#444" },

  conclusionBox: {
    marginTop: "50px",
    padding: "30px",
    backgroundColor: "#f8f9fa",
    borderLeft: "4px solid #ddd",
    borderRadius: "4px",
    fontStyle: "italic",
    fontSize: "1.6rem",
    color: "#555",
  },
};

export default About;
