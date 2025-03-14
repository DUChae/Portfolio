import React from "react";
import BackButton from "./BackButton";
import "./Skills.css";

// 프론트엔드 아이콘
import { FaReact, FaGithub, FaGitAlt, FaCode } from "react-icons/fa";
import { DiJavascript1, DiCss3, DiMysql, DiPython } from "react-icons/di";
import { SiNextdotjs, SiTableau } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills-container">
      {/* ★ 모든 텍스트/내용을 .skills-content 안에 넣기 */}
      <div className="skills-content">
        <h1 className="skills-title">Skills</h1>

        <div className="skills-section">
          <h2 className="section-title">프론트엔드 (Frontend)</h2>
          <ul className="skills-list">
            <li className="skill-item">
              <FaReact className="skill-icon" /> React, ReactJS — 컴포넌트 기반
              UI 개발 및 동적 웹 애플리케이션 구현
            </li>
            <li className="skill-item">
              <DiJavascript1 className="skill-icon" /> JavaScript — 사용자
              중심의 인터랙티브 기능 구현
            </li>
            <li className="skill-item">
              <DiCss3 className="skill-icon" /> CSS, HTML — 마크업 및 스타일링
            </li>
            <li className="skill-item">
              <SiNextdotjs className="skill-icon" /> Next.js — 서버 사이드
              렌더링(SSR), 정적 사이트 생성(SSG) 등의 개념 숙지 및 적용
            </li>
          </ul>
        </div>

        <div className="skills-section">
          <h2 className="section-title">백엔드 (Backend)</h2>
          <ul className="skills-list">
            <li className="skill-item">
              <DiMysql className="skill-icon" /> MySQL — 데이터 관리 및 연동
            </li>
            <li className="skill-item">
              <DiPython className="skill-icon" /> Python — 알고리즘 개발
            </li>
            <li className="skill-item">
              <FaCode className="skill-icon" /> Java — 프로젝트를 진행한 경험은
              없지만, 강의나 책을 보며 따라 해 본 경험이 있습니다.
            </li>
          </ul>
        </div>

        <div className="skills-section">
          <h2 className="section-title">데이터 분석 (Data Analysis)</h2>
          <ul className="skills-list">
            <li className="skill-item">
              <DiMysql className="skill-icon" /> MySQL — 데이터 추출 및 분석
            </li>
            <li className="skill-item">
              <DiPython className="skill-icon" /> Python — 데이터 처리
            </li>
            <li className="skill-item">
              <SiTableau className="skill-icon" /> Tableau — 데이터 시각화 및
              인사이트 도출
            </li>
          </ul>
        </div>

        <div className="skills-section">
          <h2 className="section-title">개발 및 협업 도구</h2>
          <ul className="skills-list">
            <li className="skill-item">
              <FaGitAlt className="skill-icon" /> Git — 버전 관리
            </li>
            <li className="skill-item">
              <FaGithub className="skill-icon" /> GitHub — 협업 플랫폼
            </li>
            <li className="skill-item">
              <FaCode className="skill-icon" /> VS Code — 개발 환경
            </li>
          </ul>
        </div>

        <BackButton to="/" />
      </div>
    </div>
  );
};

export default Skills;
