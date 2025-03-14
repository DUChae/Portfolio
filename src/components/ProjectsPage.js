// src/components/ProjectsPage.js
import React from "react";
import ProjectCard from "./ProjectCard";
import BackButton from "./BackButton";
import "./ProjectsPage.css";
const ProjectsPage = () => {
  // 3개의 프로젝트 정보를 배열로 정리
  const projects = [
    {
      title: "졸업 프로젝트",
      description: `해당 플랫폼은 사진작가와 고객을 연결하는 플랫폼으로, 
사용자가 자신의 취향과 필요에 맞는 사진작가를 찾아 예약하고 소통할 수 있는 서비스를 제공합니다.
사진작가에게는 포트폴리오를 선보이고 잠재 고객을 확보할 기회를 제공하며, 
사용자에게는 다양한 사진작가를 한눈에 비교하고 적합한 작가를 선택할 수 있는 편리함을 제공합니다.

[프로젝트 기간] 2023년 3월 ~ 2023년 12월

주요 목표: 사용자 중심의 UI/UX 구현 (React Native + JavaScript)
게시판 기능, 카테고리 기반 작가 검색 개발.
      `,
      technologies: [
        "React Native",
        "JavaScript",
        "Node.js",
        "Express",
        "Git/GitHub",
        "VS Code",
      ],
      image: "/image/졸프홈.png",
      github: "https://github.com/DUChae/Chalkak",
    },
    {
      title: "토이프로젝트 - 노벨상 수상자 정보",
      description: `
이 프로젝트는 노벨상 수상자들의 정보를 검색하고, 
특정 카테고리에 따른 수상자 세부 정보를 제공하는 웹 애플리케이션입니다.
사용자는 노벨상 카테고리(물리학, 화학, 평화 등)를 선택하거나 
특정 수상자를 검색하여 상세 정보를 확인할 수 있습니다.
React 기반으로 개발되었으며, Nobel Prize API를 활용하여 실시간 데이터를 가져옵니다.
`,
      technologies: [
        "React",
        "JavaScript",
        "API Integration",
        "CSS Modules",
        "Git/GitHub",
      ],
      image: "/image/노벨.png",

      github: "https://github.com/DUChae/Nobel-prize",
    },
    {
      title: "데이터 분석 프로젝트 1 (YouTube)",
      description: `YouTube 채널 데이터를 활용하여 콘텐츠 성공 요인을 분석한 데이터 분석 프로젝트입니다.

 조회수, 수익, 동영상 길이 등 다양한 지표를 분석하여 수익 최적화 전략을 수립합니다.
 발행 요일, 동영상 길이, 조회수 등 콘텐츠 성공 요인을 다각도로 분석하여 인사이트를 도출합니다.
 YouTube API를 활용하여 데이터를 수집하고, Python을 사용하여 데이터를 가공 및 분석했습니다.
 Tableau를 사용하여 데이터를 시각화하고, 데이터 기반 의사 결정을 지원하는 대시보드를 구현했습니다.
      `,
      image: "/image/유튭.png",
      technologies: ["Tableau", "Python", "MySQL", "Data Visualization"],
      github: "https://github.com/DUChae/DataAnalysis_Youtube",
    },
    {
      title: "데이터 분석 프로젝트 2 (IMDB)",
      description: `
IMDB 영화 데이터를 활용한 데이터 분석 프로젝트입니다.
영화 데이터베이스에서 평점, 투표 수, 예산, 수익 등의 정보를 
분석하여 영화 콘텐츠의 트렌드를 도출하고 인사이트를 제공합니다.
Python과 Tableau를 사용하여 데이터를 가공하고 시각화하였으며, 
사용자 친화적인 대시보드를 구현하였습니다.
      `,
      image: "/image/imdb.png",

      technologies: ["Python", "Tableau", "IMDB API", "Data Analysis"],
      github: "https://github.com/DUChae/DataAnalysis_IMDB",
    },
  ];

  return (
    <div className="projects-page">
      <BackButton to="/" className="back-button" />
      <h1 className="page-title">Projects</h1>
      {/* index를 함께 전달해 카드 순서마다 딜레이를 줄 수 있음 */}
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
};

export default ProjectsPage;
