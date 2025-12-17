import React, { Component } from "react";
// import { Icon } from "@iconify/react"; // 컴포넌트 방식이 안 될 경우 필요 없음

class About extends Component {
  render() {
    const { resumeBasicInfo, sharedBasicInfo } = this.props;

    if (!resumeBasicInfo || !sharedBasicInfo) {
      return <div className="col-md-12 text-center">소개 로딩 중...</div>;
    }

    const profilepic = "images/portfolio/photo/ID_Photo.jpg";

    const sectionName =
      resumeBasicInfo.basic_info?.section_name?.about ||
      resumeBasicInfo.section_name?.about ||
      "소개";
    const hello =
      resumeBasicInfo.basic_info?.description_header || "안녕하세요";

    const summary = resumeBasicInfo.about_summary;
    const sections = resumeBasicInfo.about_sections || [];
    const conclusion = resumeBasicInfo.about_conclusion;

    const aboutContent =
      sections.length > 0
        ? sections.map((section, index) => (
            <div key={index} style={{ marginBottom: "2.5rem" }}>
              <h2
                style={{
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "1rem",
                }}
              >
                {section.title}
              </h2>
              <ul style={{ paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                {section.details.map((detail, i) => (
                  <li key={i}>
                    <span dangerouslySetInnerHTML={{ __html: detail }} />
                  </li>
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

                  {/* 핵심 수정: Skills.js와 동일한 span 태그 방식으로 교체 */}
                  <span
                    className="iconify"
                    data-icon="skill-icons:javascript"
                    style={{
                      fontSize: "400%",
                      margin: "9% 5% 0 5%",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    className="iconify"
                    data-icon="logos:react"
                    style={{
                      fontSize: "400%",
                      margin: "9% 5% 0 5%",
                      display: "inline-block",
                    }}
                  ></span>
                  <span
                    className="iconify"
                    data-icon="tabler:sql"
                    style={{
                      fontSize: "400%",
                      margin: "9% 5% 0 5%",
                      display: "inline-block",
                    }}
                  ></span>
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
                    ></span>{" "}
                    &nbsp;
                    <span
                      className="iconify"
                      data-icon="twemoji:yellow-circle"
                    ></span>{" "}
                    &nbsp;
                    <span
                      className="iconify"
                      data-icon="twemoji:green-circle"
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
                    {summary && (
                      <p>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: summary.replace(/\n/g, "<br/>"),
                          }}
                        />
                      </p>
                    )}
                    <br />
                    {aboutContent}
                    <br />
                    {conclusion && (
                      <p style={{ fontStyle: "italic", color: "#555" }}>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: conclusion.replace(/\n/g, "<br/>"),
                          }}
                        />
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
