import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage(pickedLanguage, oppositeLangIconId) {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage(oppositeLangIconId) {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;

    const oppositeIcon = document.getElementById(oppositeLangIconId);
    const pickedIcon = document.getElementById(pickedLangIconId);

    if (oppositeIcon) oppositeIcon.style.filter = "grayscale(0%) opacity(1)";
    if (pickedIcon) pickedIcon.style.filter = "grayscale(100%) opacity(0.3)";
  }

  componentDidMount() {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath(path) {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData() {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${data.basic_info.name} | Portfolio`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    const isResumeDataLoaded = Object.keys(this.state.resumeData).length > 0;
    const isSharedDataLoaded = Object.keys(this.state.sharedData).length > 0;
    const isDataLoaded = isResumeDataLoaded && isSharedDataLoaded;

    return (
      <div style={styles.appWrapper}>
        {/* 헤더 섹션 */}
        {isSharedDataLoaded && (
          <Header sharedData={this.state.sharedData.basic_info} />
        )}

        {/* 세련된 언어 선택기 (플로팅 캡슐 스타일) */}
        <div style={styles.languageToggle}>
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$primaryLanguage,
                window.$secondaryLanguageIconId
              )
            }
            style={styles.langBtn}
          >
            <span
              className="iconify"
              data-icon="twemoji-flag-for-flag-south-korea"
              id={window.$primaryLanguageIconId}
              style={styles.flagIcon}
            ></span>
          </div>
          <div style={styles.langDivider}></div>
          <div
            onClick={() =>
              this.applyPickedLanguage(
                window.$secondaryLanguage,
                window.$primaryLanguageIconId
              )
            }
            style={styles.langBtn}
          >
            <span
              className="iconify"
              data-icon="twemoji-flag-for-flag-united-states"
              id={window.$secondaryLanguageIconId}
              style={styles.flagIcon}
            ></span>
          </div>
        </div>

        {/* 메인 컨텐츠 영역 */}
        {isDataLoaded ? (
          <main style={styles.mainContent}>
            <About
              resumeBasicInfo={this.state.resumeData}
              sharedBasicInfo={this.state.sharedData.basic_info}
            />
            <Projects
              resumeProjects={this.state.resumeData.projects}
              resumeBasicInfo={this.state.resumeData.basic_info}
            />
            <Skills
              sharedSkills={this.state.sharedData.skills}
              resumeBasicInfo={this.state.resumeData.basic_info}
            />
            <Experience
              resumeExperience={this.state.resumeData.experience}
              resumeBasicInfo={this.state.resumeData.basic_info}
            />
          </main>
        ) : (
          /* 트렌디한 로딩 화면 */
          <div style={styles.loadingScreen}>
            <div style={styles.loadingSpinner}></div>
            <p style={styles.loadingText}>Curating the Experience...</p>
          </div>
        )}

        {/* 푸터 섹션 */}
        {isSharedDataLoaded && (
          <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
        )}
      </div>
    );
  }
}

const styles = {
  appWrapper: {
    backgroundColor: "#ffffff",
    fontFamily: "'Inter', sans-serif", // 모던한 폰트 권장
  },

  // 언어 스위처: 오른쪽 하단에 고정된 세련된 캡슐 형태
  languageToggle: {
    position: "fixed",
    bottom: "30px",
    right: "30px",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(12px)",
    padding: "10px 18px",
    borderRadius: "100px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  langBtn: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    transition: "transform 0.2s ease",
  },
  langDivider: {
    width: "1px",
    height: "16px",
    backgroundColor: "#e2e8f0",
    margin: "0 12px",
  },
  flagIcon: {
    fontSize: "22px",
    transition: "all 0.3s ease",
  },

  mainContent: {
    animation: "fadeIn 0.8s ease-in",
  },

  // 로딩 화면 스타일
  loadingScreen: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)",
    backgroundSize: "40px 40px",
  },
  loadingSpinner: {
    width: "40px",
    height: "40px",
    border: "3px solid #f3f4f6",
    borderTop: "3px solid #8e70ff",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    marginBottom: "20px",
  },
  loadingText: {
    fontSize: "1rem",
    fontWeight: "700",
    color: "#94a3b8",
    letterSpacing: "0.1em",
    textTransform: "uppercase",
  },
};

export default App;
