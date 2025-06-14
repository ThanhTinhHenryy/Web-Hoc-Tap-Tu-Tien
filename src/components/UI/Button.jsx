import React from "react";
import "./FancyButton.css"; // chứa custom shape

const FancyButton = ({ children, onClick }) => {
  return (
    <button
      className="fancy-button bg-[#e8d1a2] text-[#381d46] text-lg font-serif px-6 py-2"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default FancyButton;
