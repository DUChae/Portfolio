import React from "react";
import "./Glitch.scss"; // SCSS 파일 불러오기

const Glitch = ({ text }) => {
  return (
    <span className="glitch" data-text={text}>
      {text}
    </span>
  );
};

export default Glitch;
