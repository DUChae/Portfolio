// src/components/ProjectCard.js
import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ project, index }) => {
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
        <p className="project-description">{project.description}</p>
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
