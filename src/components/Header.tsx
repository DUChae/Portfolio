// src/components/Header.tsx
"use client";

import React, { useState, useEffect, useMemo } from "react";
import Switch from "react-switch";

// Props 인터페이스
interface HeaderProps {
  sharedData?: {
    basic_info?: {
      name?: string;
      titles?: string[];
    };
    skills?: {
      icons?: Array<{
        name: string;
        class?: string;
        icon?: string;
      }>;
    };
  };
}

// 스타일 객체
const styles = {
  header: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--bg-color)",
    backgroundImage: "radial-gradient(var(--bg-dot) 1px, transparent 1px)",
    backgroundSize: "40px 40px",
    position: "relative" as const,
    overflow: "hidden",
    transition: "all 0.3s ease",
  },
  container: {
    maxWidth: "1100px",
    width: "100%",
    padding: "0 24px",
    textAlign: "center" as const,
  },
  contentBox: {
    animation: "fadeInUp 1s ease-out",
  },
  subTitle: {
    color: "var(--accent-color)",
    fontWeight: 800,
    fontSize: "1rem",
    textTransform: "uppercase",
    letterSpacing: "0.3em",
    display: "block",
    marginBottom: "20px",
  },
  nameText: {
    fontSize: "6rem",
    fontWeight: 900,
    color: "var(--text-main)",
    letterSpacing: "-0.05em",
    margin: "0 0 10px 0",
    lineHeight: 1.1,
  },
  cursor: {
    color: "var(--accent-color)",
    animation: "blink 1s infinite",
  },
  titleContainer: {
    fontSize: "1.8rem",
    fontWeight: 500,
    color: "var(--text-sub)",
    width: "100%",
    marginBottom: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  typingText: {
    display: "inline-block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    borderRight: "3px solid var(--accent-color)",
    width: 0, // 타이핑 시작점
    animation:
      "typing var(--typing-duration) steps(var(--typing-steps)) forwards, blinkCursor 0.75s step-end infinite",
  },
  switchWrapper: {
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "12px",
    marginTop: "20px",
  },
  switchLabel: {
    fontSize: "0.85rem",
    fontWeight: 700,
    color: "var(--text-sub)",
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
  scrollIndicator: {
    position: "absolute" as const,
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "10px",
  },
  mouseWheel: {
    width: "24px",
    height: "40px",
    border: "2px solid var(--card-border)",
    borderRadius: "12px",
    position: "relative" as const,
  },
  scrollText: {
    fontSize: "1.7rem",
    fontWeight: 700,
    color: "var(--text-sub)",
    textTransform: "uppercase",
    letterSpacing: "0.2em",
  },
} as const;

const Header: React.FC<HeaderProps> = ({ sharedData }) => {
  const titles = useMemo<string[]>(
    () => sharedData?.basic_info?.titles || ["Creative Developer"],
    [sharedData?.basic_info?.titles]
  );

  const name = sharedData?.basic_info?.name || "DUChae";

  // ✅ 테마 초기값은 useState에서 결정 (ESLint 통과)
  const [checked, setChecked] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;

    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return savedTheme === "dark" || (!savedTheme && prefersDark);
  });

  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);

  const currentTitle =
    titles[currentTitleIndex]?.toUpperCase() || "CREATIVE DEVELOPER";

  // 타이핑 시간 계산
  const typingDuration = useMemo(() => {
    const length = currentTitle.trim().length;
    return Math.min(Math.max(length * 70, 1200), 2200);
  }, [currentTitle]);

  // ✅ 테마 DOM 동기화 전용 effect
  useEffect(() => {
    document.body.setAttribute("data-theme", checked ? "dark" : "light");
    localStorage.setItem("theme", checked ? "dark" : "light");
  }, [checked]);

  // ✅ 타이틀 순환 effect (애니메이션 책임 분리)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const cycle = () => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
      setAnimationKey((k) => k + 1);
      timeoutId = setTimeout(cycle, typingDuration + 300);
    };

    timeoutId = setTimeout(cycle, typingDuration + 300);

    return () => clearTimeout(timeoutId);
  }, [titles.length, typingDuration]);

  return (
    <header id="home" style={styles.header}>
      <div style={styles.container}>
        <div style={styles.contentBox}>
          <span style={styles.subTitle}>Creative Developer</span>

          <h1 style={styles.nameText}>
            {name}
            <span style={styles.cursor}>_</span>
          </h1>

          {/* 타이핑 애니메이션 */}
          <div style={styles.titleContainer} key={animationKey}>
            <span
              style={{
                ...styles.typingText,
                ["--typing-width" as string]: `${currentTitle.length}ch`,
                ["--typing-duration" as string]: `${typingDuration}ms`,
                ["--typing-steps" as string]: currentTitle.length,
              }}
            >
              {currentTitle}
            </span>
          </div>

          <div style={styles.switchWrapper} suppressHydrationWarning>
            <Switch
              checked={checked}
              onChange={setChecked}
              offColor="#8e70ff"
              onColor="#1e293b"
              width={70}
              height={32}
              handleDiameter={24}
              uncheckedIcon={<div style={styles.switchIcon}>🌙</div>}
              checkedIcon={<div style={styles.switchIcon}>☀️</div>}
            />
            <span style={styles.switchLabel}>
              {checked ? "Light Mode" : "Dark Mode"}
            </span>
          </div>
        </div>

        <div style={styles.scrollIndicator}>
          <div style={styles.mouseWheel} />
          <span style={styles.scrollText}>Scroll Down</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
