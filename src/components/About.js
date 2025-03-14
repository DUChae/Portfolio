// About.js
import React from "react";
import BackButton from "./BackButton";
import "./About.css";

// 1) 아이콘 import
import { FaEnvelope, FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

const About = () => {
  return (
    <div className="about-page">
      <div className="about-content">
        <div className="about-text">
          <h1>About</h1>
          <h2>[사용자 경험을 선도하는 프론트엔드]</h2>
          <p>
            React, React Native, JS, HTML, CSS, SCSS 등 다양한 웹 기술을 접하며
            사용자 인터페이스(UI)의 중요성을 깨달았습니다. 이후 React,
            TypeScript, Tailwind CSS 등 최신 스택을 적극 도입해, 사용자
            친화적이고 반응형 높은 UI를 구현하는 데 집중하고 있습니다.
          </p>

          <h2>[끊임없는 자기 발전과 도전]</h2>
          <p>
            프로젝트마다 이전에 아쉬웠던 부분을 개선하고 새로운 코드 스타일과
            기술을 도입하는 과정을 즐깁니다. 졸업 프로젝트(아마추어 사진작가
            플랫폼)에서는 설문조사를 통해 UI/UX를 지속적으로 개선하였으며
            토이프로젝트에서는 그 전 프로젝트의 아쉬움을 충족시키기 위해 반응형
            웹사이트를 구현, REST API를 활용한 웹사이트 구현 등을 경험했습니다.
            이를 통해 사용자 경험을 높이는 개발자로 성장하고 있습니다.
          </p>

          <h2>[데이터를 기반으로 개발하는 개발자]</h2>
          <p>
            사용자 설문조사 등의 데이터를 분석해 요구 사항을 정량적으로
            파악하고, 이를 통해 기능과 디자인을 최적화하는 접근을 선호합니다.
            졸업 프로젝트에서 카테고리·검색 기능을 개선해 서비스 성과를 높인
            경험이 대표적이며, 데이터 기반의 문제 해결이 팀 협업과 서비스 향상에
            큰 도움이 된다고 믿습니다.
          </p>
        </div>

        <div className="about-info">
          <div className="about-section">
            <h3>📌 분야</h3>
            <p>
              🔹 프론트엔드 개발 — React, JavaScript, 반응형 웹 개발
              <br />
              🔹 기술 기획 — 데이터 기반 UI/UX 최적화
              <br />
              🔹 데이터 분석 — SQL, Tableau, API 연동 및 데이터 시각화
              <br />
              🔹 웹 성능 개선 — 최적화 및 확장성 고려한 개발
              <br />
            </p>
          </div>
          <div className="about-section">
            <h3>🏆 프로젝트 및 성과</h3>
            <p>
              🔹 Nobel Prize API 프로젝트 — 카테고리별 검색 및 데이터 시각화
              기능 개발
              <br />
              🔹 IMDB 영화 데이터 분석 — 평점, 관객 수 변화 분석을 통한 트렌드
              도출
              <br />
              🔹 YouTube 데이터 분석 — 시청자 참여도 및 콘텐츠 성과 분석
              <br />
              🔹 사진 플랫폼 — 아마추어 사진 작가와 고객을 연결시켜주는 플랫폼
              개발
            </p>
          </div>
        </div>

        {/* 🔥 추가: 연락처/추가 정보 섹션 */}
        <div className="about-contact">
          <h3>[Contact & More]</h3>
          <p>아래 링크를 통해 더 많은 정보를 확인하실 수 있습니다.</p>
          <div className="contact-links">
            {/* 이메일 아이콘 + 텍스트 */}
            <a
              href="mailto:sangdyjjang@naver.com"
              className="contact-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="icon" />
              Email
            </a>

            {/* 깃허브 아이콘 + 텍스트 */}
            <a
              href="https://github.com/DUChae"
              className="contact-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
              GitHub
            </a>

            {/* Velog 아이콘 + 텍스트 */}
            <a
              href="https://velog.io/@du-log/posts"
              className="contact-item"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiVelog className="icon" />
              Velog
            </a>
          </div>
        </div>
      </div>

      <BackButton to="/" />
    </div>
  );
};

export default About;
