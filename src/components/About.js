import React, { Component } from "react";
import { Icon } from "@iconify/react";
import angularIcon from "@iconify/icons-logos/angular-icon";
import reactIcon from "@iconify/icons-logos/react";
import vueIcon from "@iconify/icons-logos/vue";

class About extends Component {
  render() {
    const { resumeBasicInfo, sharedBasicInfo } = this.props; // resumeBasicInfo가 전체 resumeData

    // 데이터 없으면 로딩 메시지 (error handling)
    if (!resumeBasicInfo || !sharedBasicInfo) {
      return <div className="col-md-12 text-center">소개 로딩 중...</div>;
    }

    const profilepic = "images/portfolio/photo/ID_Photo.jpg";

    // 기존 구조 호환 (기존 JSON 사용 시)
    const sectionName =
      resumeBasicInfo.basic_info?.section_name?.about ||
      resumeBasicInfo.section_name?.about ||
      "소개";
    const hello =
      resumeBasicInfo.basic_info?.description_header || "안녕하세요";
    const oldAbout =
      resumeBasicInfo.basic_info?.description ||
      resumeBasicInfo.description ||
      "";

    // 새 구조 지원 (about_summary, about_sections, about_conclusion)
    const summary = resumeBasicInfo.about_summary;
    const sections = resumeBasicInfo.about_sections || [];
    const conclusion = resumeBasicInfo.about_conclusion;

    // about_sections 렌더링 (edge case: 빈 배열 처리)
    const aboutContent =
      sections.length > 0
        ? sections.map((section, index) => (
            <div key={index} style={{ marginBottom: "2.5rem" }}>
              <h4
                style={{
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                {section.title}
              </h4>
              <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                {section.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          ))
        : null;

    return (
      <section id="about">
        <div className="col-md-12">
          <h1 style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="row center mx-auto mb-5">
            <div className="col-md-4 mb-5 center">
              <div className="polaroid">
                <span style={{ cursor: "auto" }}>
                  <img height="250px" src={profilepic} alt="Profile" />
                  <Icon
                    icon={angularIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={reactIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                  <Icon
                    icon={vueIcon}
                    style={{ fontSize: "400%", margin: "9% 5% 0 5%" }}
                  />
                </span>
              </div>
            </div>

            <div className="col-md-8 center">
              <div className="col-md-10">
                <div className="card">
                  <div className="card-header">
                    <span
                      className="iconify"
                      data-icon="emojione:red-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                      data-inline="false"
                    ></span>{" "}
                    &nbsp;
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
                      data-inline="false"
                    ></span>
                  </div>
                  <div
                    className="card-body font-trebuchet text-justify ml-3 mr-3"
                    style={{
                      height: "auto",
                      fontSize: "132%",
                      lineHeight: "200%",
                    }}
                  >
                    <br />
                    <span className="wave">{hello} :)</span>
                    <br />
                    <br />

                    {/* 새 구조 우선, 없으면 기존 description 사용 (호환성) */}
                    {summary ? (
                      <p>{summary}</p>
                    ) : oldAbout ? (
                      <p>{oldAbout}</p>
                    ) : null}

                    <br />

                    {/* 구조화된 섹션 */}
                    {aboutContent}

                    <br />

                    {/* 마무리 문장 */}
                    {conclusion && (
                      <p style={{ fontStyle: "italic", color: "#555" }}>
                        {conclusion}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
