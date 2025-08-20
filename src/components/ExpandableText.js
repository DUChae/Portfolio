import React, { useState } from "react";
import "./ExpandableText.css";

const ExpandableText = ({ shortText, fullText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const showButton = fullText.trim() !== shortText.trim();

  return (
    <div className="expandable-text">
      <p className="description-text">{isExpanded ? fullText : shortText}</p>
      {showButton && (
        <button className="read-more-button" onClick={toggleExpand}>
          {isExpanded ? "접기" : "더보기"}
        </button>
      )}
    </div>
  );
};

export default ExpandableText;
