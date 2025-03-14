# 포트폴리오 웹사이트

이 프로젝트는 사이버펑크 느낌의 UI와 애니메이션 효과를 적용하여,
**프론트엔드 개발 포트폴리오**를 한눈에 볼 수 있도록 만든 웹 애플리케이션입니다.  
**React**, **React Router**, **React Icons** 등을 활용해 구현하였으며,
스플래시 화면, 사이버펑크 테마, 수평 레이아웃의 프로젝트 카드 등을 포함합니다.

<br/>

## **목차**

1. [프로젝트 소개](#프로젝트-소개)
2. [주요 기능](#주요-기능)
3. [기술 스택](#기술-스택)
4. [프로젝트 구조](#프로젝트-구조)
5. [설치 및 실행 방법](#설치-및-실행-방법)
6. [스크린샷](#스크린샷)
7. [개발자 정보](#개발자-정보)

<br/>

---

## **프로젝트 소개**

> ### 사용자 경험을 선도하는 **프론트엔드** 포트폴리오 사이트

- **홈** 화면: 사이버펑크 느낌의 배경 애니메이션, 노이즈·스캔 라인 효과
- **About** 페이지: 개발 철학, 성장 과정, Contact 정보(Email/GitHub/Velog)
- **Skills** 페이지: 보유 기술 목록 + 반응형 UI
- **Projects** 페이지: 수평 레이아웃으로 배치된 프로젝트 카드
  - **이미지** (왼쪽) + **텍스트** (오른쪽)
  - 깔끔한 카드 레이아웃, 확대된 이미지, 텍스트 겹침 or 분할

<br/>

---

## **주요 기능**

1. **스플래시 화면**

   - 초기 로딩 시 3초간 사이버펑크 스플래시 애니메이션을 보여주고, 자동으로 홈 화면으로 전환

2. **사이버펑크 테마**

   - **네온 글리치** 애니메이션, **스캔 라인** 효과, **반투명 오버레이**를 활용

3. **글리치 텍스트**

   - 각 메뉴(About, Skills, Projects 등)에 마우스오버 시 **글리치 애니메이션** 적용

4. **프로젝트 카드**

   - **이미지** + **텍스트**가 **수평 레이아웃**으로 구성
   - **애니메이션**: 카드가 아래서 위로 부드럽게 나타나는 `cardFadeIn`
   - 반응형 레이아웃(모바일에서는 세로 배치)

5. **반응형 디자인**
   - **768px 이하** 환경에서 폰트 사이즈 조절, 수직 레이아웃 전환

<br/>

---

## **기술 스택**

- **Front-end**:

  - [React](https://reactjs.org/)
  - [React Router](https://reactrouter.com/)
  - [React Icons](https://react-icons.github.io/react-icons/)
  - CSS Modules / SCSS / Tailwind (필요한 경우)

- **Back-end** (Optional, 만약 존재한다면):

  - Node.js (Express)
  - REST API or GraphQL

- **Build/Dev Tools**:
  - [Vite](https://vitejs.dev/) or [Create React App](https://create-react-app.dev/)
  - Git / GitHub
  - VS Code

<br/>

---

## **프로젝트 구조**

```bash
├─ public/
│   ├─ image/
│   └─ index.html
├─ src/
│   ├─ components/
│   │   ├─ Splash.js    # 스플래시 화면
│   │   ├─ About.js
│   │   ├─ Skills.js
│   │   ├─ ProjectsPage.js
│   │   ├─ ProjectCard.js
│   │   └─ ...css files
│   ├─ App.js           # 메인 라우터 + 스플래시 로직
│   ├─ Glitch.js        # 글리치 텍스트 컴포넌트
│   └─ index.js
├─ package.json
└─ README.md
```
