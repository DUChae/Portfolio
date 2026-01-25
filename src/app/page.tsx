"use client";

import React, { useState, useEffect, useCallback } from "react";
import $ from "jquery";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// 공통 타입 import
import {
  BasicInfo,
  AboutSection,
  Project,
  Skill,
  Experience as ExperienceType,
} from "@/types/portfolio";

// 전역 언어 변수 타입 선언
declare global {
  interface Window {
    $primaryLanguage: string;
    $secondaryLanguage: string;
    $primaryLanguageIconId: string;
    $secondaryLanguageIconId: string;
  }
}

const styles = {
  appWrapper: {
    backgroundColor: "#ffffff",
    fontFamily: "'Inter', sans-serif",
  },
  languageToggle: {
    position: "fixed" as const,
    bottom: "30px",
    right: "30px",
    zIndex: 9999,
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(12px)",
    padding: "8px 16px",
    borderRadius: "100px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  langBtn: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.2s ease",
    fontSize: "24px", // 이모지 크기 조절
    padding: "4px",
  },
  langDivider: {
    width: "1px",
    height: "16px",
    backgroundColor: "#e2e8f0",
    margin: "0 12px",
  },
  flagIcon: {
    lineHeight: 1,
    display: "inline-block",
    transition: "all 0.3s ease",
  },
  mainContent: {
    animation: "fadeIn 0.8s ease-in",
  },
  loadingScreen: {
    height: "100vh",
    display: "flex",
    flexDirection: "column" as const,
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
} as const;

interface ResumeData {
  basic_info?: BasicInfo;
  about_summary?: string;
  about_sections?: AboutSection[];
  about_conclusion?: string;
  projects?: Project[];
  experience?: ExperienceType[];
  section_name?: {
    projects?: string;
    skills?: string;
    experience?: string;
  };
  [key: string]: unknown;
}

interface SharedData {
  basic_info: BasicInfo;
  skills: {
    icons: Skill[];
  };
  [key: string]: unknown;
}

export default function Home() {
  const [resumeData, setResumeData] = useState<
    ResumeData | Record<string, never>
  >({});
  const [sharedData, setSharedData] = useState<
    SharedData | Record<string, never>
  >({});
  const [currentLang, setCurrentLang] = useState<string>("ko");
  const [isSharedLoaded, setIsSharedLoaded] = useState(false);

  const changeLanguage = (newLang: string) => {
    setCurrentLang(newLang);
  };

  useEffect(() => {
    $.ajax({
      url: "/portfolio_shared_data.json",
      dataType: "json",
      cache: false,
      success: (data: SharedData) => {
        setSharedData(data);
        setIsSharedLoaded(true);
        document.title = `${data.basic_info.name} | Portfolio`;
      },
      error: (xhr, status, err) => console.error("Shared data 로드 실패:", err),
    });
  }, []);

  const loadResumeFromPath = useCallback(
    (path: string) => {
      if (!isSharedLoaded) return;
      $.ajax({
        url: `/${path}`,
        dataType: "json",
        cache: false,
        success: (data: ResumeData) => setResumeData(data),
        error: (xhr, status, err) =>
          console.error(`Resume data 로드 실패 (${path}):`, err),
      });
    },
    [isSharedLoaded],
  );

  useEffect(() => {
    if (!isSharedLoaded) return;

    const resumePath =
      currentLang === "ko"
        ? "res_primaryLanguage.json"
        : "res_secondaryLanguage.json";

    loadResumeFromPath(resumePath);
    document.documentElement.lang = currentLang;
  }, [currentLang, isSharedLoaded, loadResumeFromPath]);

  const isDataLoaded = isSharedLoaded && Object.keys(resumeData).length > 0;

  return (
    <div style={styles.appWrapper}>
      {/* 언어 토글 UI (이모지 버전) */}
      <div style={styles.languageToggle}>
        <div
          onClick={() => changeLanguage("ko")}
          style={{
            ...styles.langBtn,
            opacity: currentLang === "ko" ? 1 : 0.3,
            filter: currentLang === "ko" ? "none" : "grayscale(100%)",
          }}
        >
          <span style={styles.flagIcon}>🇰🇷</span>
        </div>
        <div style={styles.langDivider} />
        <div
          onClick={() => changeLanguage("en")}
          style={{
            ...styles.langBtn,
            opacity: currentLang === "en" ? 1 : 0.3,
            filter: currentLang === "en" ? "none" : "grayscale(100%)",
          }}
        >
          <span style={styles.flagIcon}>🇺🇸</span>
        </div>
      </div>

      {isDataLoaded ? (
        <main style={styles.mainContent}>
          <Header sharedData={sharedData} />
          <About
            resumeBasicInfo={{
              basic_info: resumeData.basic_info,
              about_summary: resumeData.about_summary ?? "",
              about_sections: resumeData.about_sections ?? [],
              about_conclusion: resumeData.about_conclusion ?? "",
            }}
            sharedBasicInfo={sharedData.basic_info as BasicInfo}
            currentLang={currentLang}
          />
          <Projects
            resumeProjects={resumeData.projects ?? []}
            resumeBasicInfo={{
              section_name: {
                projects: resumeData.section_name?.projects ?? "Projects",
              },
            }}
            currentLang={currentLang}
          />
          <Skills
            sharedSkills={sharedData.skills?.icons ?? []}
            resumeBasicInfo={{
              section_name: {
                skills: resumeData.section_name?.skills ?? "Skills",
              },
            }}
          />
          <Experience
            resumeExperience={resumeData.experience ?? []}
            resumeBasicInfo={{
              section_name: {
                experience: resumeData.section_name?.experience ?? "Experience",
              },
            }}
          />
          <Footer sharedBasicInfo={sharedData.basic_info as BasicInfo} />
        </main>
      ) : (
        <div style={styles.loadingScreen}>
          <div style={styles.loadingSpinner} />
          <p style={styles.loadingText}>데이터 로딩 중...</p>
        </div>
      )}
    </div>
  );
}
