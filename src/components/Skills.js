import React from "react";
import BackButton from "./BackButton";
import "./Skills.css";

// 프론트엔드 아이콘
import { FaReact, FaGithub, FaGitAlt, FaCode } from "react-icons/fa";
import {
  DiJavascript1,
  DiCss3,
  DiMysql,
  DiPython,
  DiMongodb,
  DiNodejs,
  DiJava,
  DiIntellij,
} from "react-icons/di";
import { SiNextdotjs, SiTableau } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="skills-content">
        <h1 className="skills-title">Skills</h1>

        <div className="skills-section">
          <h2 className="section-title">프론트엔드 (Frontend)</h2>
          <ul className="skills-list">
            <li className="skill-item">
              <FaReact className="skill-icon" /> React, ReactJS
              <span className="skill-text">
                — 컴포넌트 기반 UI 개발 및 동적 웹 애플리케이션 구현
              </span>
            </li>
            <li className="skill-item">
              <DiJavascript1 className="skill-icon" /> JavaScript
              <span className="skill-text">
                — 클라이언트 로직 구현, 비동기 처리(Promise, Async/Await),
                사용자 인터랙션 최적화
              </span>
            </li>
            <li className="skill-item">
              <DiCss3 className="skill-icon" /> CSS, HTML
              <span className="skill-text"> — 마크업 및 스타일링</span>
            </li>
            <li className="skill-item">
              <SiNextdotjs className="skill-icon" /> Next.js
              <span className="skill-text">
                — 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG) 적용 경험
              </span>
            </li>
          </ul>
        </div>

        <div className="skills-section">
          <h2 className="section-title">백엔드 (Backend)</h2>
          <ul className="skills-list">
            <li className="skill-item">
              <DiMysql className="skill-icon" /> MySQL
              <span className="skill-text"> — 데이터 관리 및 연동</span>
            </li>
            <li className="skill-item">
              <DiMongodb className="skill-icon" /> MongoDB
              <span className="skill-text"> — NoSQL 데이터베이스 활용</span>
            </li>
            <li className="skill-item">
              <DiPython className="skill-icon" /> Python
              <span className="skill-text"> — 알고리즘 및 데이터 처리</span>
            </li>
            <li className="skill-item">
              <DiNodejs className="skill-icon" /> Node.js (Express/Socket.IO)
              <span className="skill-text">
                — RESTful API 설계, JWT 인증 시스템, 실시간 통신(WebSocket) 구현
                경험
              </span>
            </li>
            <li className="skill-item">
              <DiJava className="skill-icon" /> Java (Spring Boot)
              <span className="skill-text">
                — 게시판, 회원 기능 포함 RESTful 웹앱 구현 및 Spring Security /
                JWT 기반 인증/인가 시스템 설계 경험
              </span>
            </li>
          </ul>
        </div>

        <div className="skills-section">
          <h2 className="section-title">데이터 분석 (Data Analysis)</h2>
          <ul className="skills-list">
            <li className="skill-item">
              <DiMysql className="skill-icon" /> MySQL
              <span className="skill-text"> — 데이터 추출 및 분석</span>
            </li>
            <li className="skill-item">
              <DiPython className="skill-icon" /> Python
              <span className="skill-text"> — 데이터 처리 및 분석</span>
            </li>
            <li className="skill-item">
              <SiTableau className="skill-icon" /> Tableau
              <span className="skill-text">
                {" "}
                — 데이터 시각화 및 인사이트 도출
              </span>
            </li>
          </ul>
        </div>

        <div className="skills-section">
          <h2 className="section-title">개발 및 협업 도구</h2>
          <ul className="skills-list">
            <li className="skill-item">
              <FaGitAlt className="skill-icon" /> Git
              <span className="skill-text"> — 버전 관리</span>
            </li>
            <li className="skill-item">
              <FaGithub className="skill-icon" /> GitHub
              <span className="skill-text"> — 협업 및 코드 관리</span>
            </li>
            <li className="skill-item">
              <FaCode className="skill-icon" /> VS Code
              <span className="skill-text"> — 개발 환경 구축</span>
            </li>
            <li className="skill-item">
              <DiIntellij className="skill-icon" /> IntelliJ IDEA
              <span className="skill-text"> — Java 개발 환경</span>
            </li>
          </ul>
        </div>

        <BackButton to="/" />
      </div>
    </div>
  );
};

export default Skills;
