import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false };
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
  }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
    if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles
        .map((x) => [x.toUpperCase(), 1500])
        .flat();
    }

    const HeaderTitleTypeAnimation = React.memo(
      () => {
        return (
          <Typical className="title-styles" steps={this.titles} loop={50} />
        );
      },
      (props, prevProp) => true
    );

    return (
      <header id="home" style={styles.header}>
        <div style={styles.container}>
          <div style={styles.contentBox}>
            {/* 상단 캡션 (다른 섹션과 통일) */}
            <span style={styles.subTitle}>Creative Developer</span>

            {/* 메인 이름: 더 크고 강렬하게 */}
            <h1 style={styles.nameText}>
              <Typical steps={[name]} wrapper="span" />
              <span style={styles.cursor}>_</span>
            </h1>

            {/* 타이핑 애니메이션 영역 */}
            <div style={styles.titleContainer}>
              <HeaderTitleTypeAnimation />
            </div>

            {/* 테마 스위치 섹션 */}
            <div style={styles.switchWrapper}>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#8e70ff" // 포인트 컬러로 변경
                onColor="#1e293b"
                className="react-switch"
                width={70}
                height={32}
                handleDiameter={24}
                uncheckedIcon={
                  <div style={styles.switchIcon}>
                    <span className="iconify" data-icon="feather:moon"></span>
                  </div>
                }
                checkedIcon={
                  <div style={styles.switchIcon}>
                    <span
                      className="iconify"
                      data-icon="feather:sun"
                      style={{ color: "#fbbf24" }}
                    ></span>
                  </div>
                }
                id="icon-switch"
              />
              <span style={styles.switchLabel}>
                {this.state.checked ? "Light Mode" : "Dark Mode"}
              </span>
            </div>
          </div>

          {/* 스크롤 유도 디자인 (최하단) */}
          <div style={styles.scrollIndicator}>
            <div style={styles.mouseWheel}></div>
            <span style={styles.scrollText}>Scroll Down</span>
          </div>
        </div>
      </header>
    );
  }
}

const styles = {
  header: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
    backgroundImage: "radial-gradient(#e5e7eb 1px, transparent 1px)", // 도트 패턴 유지
    backgroundSize: "40px 40px",
    position: "relative",
    overflow: "hidden",
  },
  container: {
    maxWidth: "1100px",
    width: "100%",
    padding: "0 24px",
    textAlign: "center",
  },
  contentBox: {
    animation: "fadeInUp 1s ease-out", // CSS에 추가 권장
  },
  subTitle: {
    color: "#8e70ff",
    fontWeight: 800,
    fontSize: "1rem",
    textTransform: "uppercase",
    letterSpacing: "0.3em",
    display: "block",
    marginBottom: "20px",
  },
  nameText: {
    fontSize: "6rem", // 압도적인 크기
    fontWeight: 900,
    color: "#0f172a",
    letterSpacing: "-0.05em",
    margin: "0 0 10px 0",
    lineHeight: 1.1,
  },
  cursor: {
    color: "#8e70ff",
    animation: "blink 1s infinite",
  },
  titleContainer: {
    fontSize: "1.8rem",
    fontWeight: 500,
    color: "#64748b",
    height: "2.5rem", // 타이핑 시 레이아웃 흔들림 방지
    marginBottom: "50px",
  },
  switchWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "12px",
    marginTop: "20px",
  },
  switchLabel: {
    fontSize: "0.85rem",
    fontWeight: 700,
    color: "#94a3b8",
    textTransform: "uppercase",
    letterSpacing: "0.1em",
  },
  switchIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    fontSize: "18px",
    color: "white",
  },

  // 스크롤 가이드 디자인
  scrollIndicator: {
    position: "absolute",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  mouseWheel: {
    width: "24px",
    height: "40px",
    border: "2px solid #e2e8f0",
    borderRadius: "12px",
    position: "relative",
    // 내부 휠 애니메이션은 CSS 추가 필요
  },
  scrollText: {
    fontSize: "0.75rem",
    fontWeight: 700,
    color: "#cbd5e1",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
  },
};

export default Header;
