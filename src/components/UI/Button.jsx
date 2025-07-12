import React from "react";
import "./FancyButton.css"; // chứa custom shape

const Button = ({ children, onClick, variant = "primary", size = "md", className = "" }) => {
  const sizeClasses = {
    sm: "px-4 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg"
  };

  const variantClasses = {
    primary: "bg-[#4B0082] hover:bg-[#5c1a93] text-white",
    secondary: "bg-[#e8d1a2] hover:bg-[#f0dfb4] text-[#381d46]"
  };

  return (
    <button
      className={`rounded-full ${sizeClasses[size]} ${variantClasses[variant]} font-medium transition-all duration-300 shadow-lg hover:shadow-xl ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
