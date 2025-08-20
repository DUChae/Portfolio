import React from "react";
import ExpandableText from "./ExpandableText"; // ExpandableText 컴포넌트 임포트
import "./ProjectCard.css"; // ProjectCard의 스타일시트

const ProjectCard = ({ project, index }) => {
  // description이 길 경우를 대비하여 shortDescription을 생성하거나 잘라냅니다.
  // 이 예시에서는 shortDescription이 projects 데이터에 이미 있으므로 그대로 사용합니다.
  return (
    <div className="image-driven-card" style={{ "--card-index": index }}>
      {/* 왼쪽: 이미지 영역 */}
      {project.image && (
        <div className="image-container">
          <img
            src={project.image}
            alt={project.title}
            className="original-size-image"
          />
        </div>
      )}

      {/* 오른쪽: 텍스트 영역 */}
      <div className="info-container">
        <h2 className="project-title">{project.title}</h2>
        {/* ExpandableText 컴포넌트를 사용하여 설명 표시 */}
        <ExpandableText
          shortText={project.shortDescription}
          fullText={project.description}
        />
        <p className="project-tech-stack">
          <strong>Tech Stack:</strong> {project.technologies.join(", ")}
        </p>

        {(project.github || project.demo) && (
          <p className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {project.github && project.demo && " | "}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                Demo
              </a>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
