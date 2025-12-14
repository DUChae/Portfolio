import React, { Component } from "react";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null, // 현재 열린 프로젝트 인덱스
    };
  }

  toggleProject = (index) => {
    this.setState((prevState) => ({
      activeIndex: prevState.activeIndex === index ? null : index, // 같은 거 클릭 시 닫힘
    }));
  };

  render() {
    const { resumeProjects, resumeBasicInfo } = this.props;

    // 프로젝트 데이터가 없거나 기본 정보가 없을 경우 로딩 메시지 출력 (혹은 데이터가 없는 경우)
    if (!resumeBasicInfo || !resumeProjects || resumeProjects.length === 0) {
      // 데이터가 완전히 로드되지 않은 경우 또는 데이터는 로드됐으나 프로젝트 목록이 비어있는 경우
      return (
        <div className="col-md-12 text-center" style={{ padding: "50px 0" }}>
          <p>프로젝트 데이터를 로딩 중이거나, 등록된 프로젝트가 없습니다.</p>
        </div>
      );
    }

    var sectionName = resumeBasicInfo.section_name.projects;

    var projects = resumeProjects.map((project, index) => {
      const isActive = this.state.activeIndex === index;
      const hasImage = project.images && project.images.length > 0;

      return (
        <div className="project-accordion-item" key={project.title}>
          {/* 헤더: 항상 보이는 제목 + 날짜 */}
          <div
            className="project-accordion-header"
            onClick={() => this.toggleProject(index)}
          >
            <h3 className="project-title">
              {project.title}
              <span className="toggle-icon">{isActive ? "−" : "+"}</span>
            </h3>
            <p className="project-date">{project.startDate}</p>
          </div>

          {/* 확장 내용: 클릭 시 열림 */}
          {isActive && (
            <div className="project-accordion-content">
              {hasImage && (
                <div className="project-image">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "auto",
                      objectFit: "contain", // 왜곡 해결
                      maxHeight: "500px",
                      background: "#f8f9fa",
                    }}
                    onError={(e) => (e.target.src = "/images/placeholder.jpg")}
                  />
                </div>
              )}
              <div className="project-details">
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  <strong>Technologies:</strong>
                  <ul>
                    {project.technologies.map((tech, i) => (
                      <li key={i}>
                        <i className={tech.class}></i> {tech.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  {/* GitHub 링크 */}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  {/* Live Demo 링크 (선택 사항) */}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      );
    });

    return (
      <section id="portfolio">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span>{sectionName}</span>
          </h1>
          <div className="col-md-12 mx-auto">
            <div className="projects-list">{projects}</div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
