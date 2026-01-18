// src/components/Footer.tsx
"use client";

import React, { Component } from "react";

// Props 인터페이스 정의 (타입 에러 해결 핵심)
// JSON 구조에 맞게 정확히 작성
interface FooterProps {
  sharedBasicInfo?: {
    name?: string;
    social?: Array<{
      name: string;
      url: string;
      class: string;
    }>;
  };
}

class Footer extends Component<FooterProps> {
  render() {
    const { sharedBasicInfo } = this.props;

    // social 배열이 있을 때만 렌더링 (에러 방지 + any 제거)
    const networks =
      sharedBasicInfo?.social?.map((network) => (
        <span key={network.name} className="m-4">
          <a href={network.url} target="_blank" rel="noopener noreferrer">
            <i className={network.class}></i>
          </a>
        </span>
      )) || null;

    return (
      <footer>
        <div className="col-md-12">
          <div className="social-links">{networks}</div>

          <div className="copyright py-4 text-center">
            <div className="container">
              <small>
                Copyright &copy; {sharedBasicInfo?.name || "DUChae"}{" "}
                {/* 기본값 제공 */}
              </small>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
