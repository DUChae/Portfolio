// App.js
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import About from "./components/About";
import Skills from "./components/Skills";
import ProjectsPage from "./components/ProjectsPage";
import "./App.css"; // 전체 스타일 (CSS)
import Glitch from "./Glitch"; // 글리치 텍스트 컴포넌트

// ✅ 스플래시 컴포넌트 임포트
import Splash from "./components/Splash";

const App = () => {
  // 스플래시 화면 표시 여부 (기본 true)
  const [showSplash, setShowSplash] = useState(true);

  // 일정 시간 후 스플래시 화면 닫기
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000); // 3초 후 스플래시 닫기

    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 해제
  }, []);

  // 스플래시 화면이 true면 Splash, false면 기존 화면(AppContent) 렌더링
  if (showSplash) {
    return <Splash />;
  }

  // 스플래시가 끝난 후 기존 화면 표시
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();
  // 현재 경로가 "/"인지 확인
  const isHome = location.pathname === "/";

  return (
    <div className="app-container">
      {/* 노이즈 애니메이션 레이어 */}
      <div className="bg"></div>

      {/* 사이드 내비게이션을 홈 화면일 때만 표시 */}
      {isHome && (
        <nav className="side-navigation">
          <Link to="/">
            <Glitch text="Home" />
          </Link>
          <Link to="/about">
            <Glitch text="About" />
          </Link>
          <Link to="/skills">
            <Glitch text="Skills" />
          </Link>
          <Link to="/projects">
            <Glitch text="Projects" />
          </Link>
        </nav>
      )}

      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <div className="home-container">
                <h2>
                  <Glitch text="Portfolio" />
                </h2>
                <p>Welcome to my portfolio!</p>
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
