import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css"; // BackButton.css import

const BackButton = ({ to }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button className="back-button" onClick={handleClick}>
      {/* 화살표 아이콘 (이미지 또는 폰트 아이콘) */}
      <span
        className="arrow-icon"
        style={{ backgroundImage: `url(${BackButton.png})` }}
      ></span>
    </button>
  );
};

export default BackButton;
