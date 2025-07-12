import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/background/auth.png";

import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const Welcome = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/home");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#0a1744", // Fallback color
      }}
    >
      {/* Overlay để làm tối hình nền một chút */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Hiệu ứng ngôi sao */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, index) => (
          <div
            key={index}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: "white",
              boxShadow: "0 0 10px 2px rgba(255, 255, 255, 0.7)",
              animation: `twinkle ${Math.random() * 5 + 3}s infinite ${
                Math.random() * 5
              }s`,
              opacity: Math.random() * 0.5 + 0.5,
            }}
          />
        ))}
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={`bright-${index}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              backgroundColor: "white",
              boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.9)",
              animation: `twinkle ${Math.random() * 7 + 4}s infinite ${
                Math.random() * 5
              }s`,
              opacity: 0.9,
            }}
          />
        ))}
      </div>

      {/* Nội dung chính */}
      <div className="z-10 flex flex-col items-center justify-center text-center px-4 py-8">
        {/* Logo và tiêu đề */}
        <div className="mb-8 relative">
          <div className="absolute inset-0 bg-blue-500 opacity-20 blur-xl rounded-full"></div>
          <div className="border-4 border-blue-300 border-opacity-30 rounded-full p-4 bg-blue-900 bg-opacity-20 relative">
            <img
              src={logo}
              alt="Logo"
              className="w-32 h-32 md:w-40 md:h-40 object-contain"
            />
          </div>
        </div>

        {/* Tiêu đề */}
        <div className="mb-12 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-100 mb-4 tracking-wider">
            Học viện EverLing
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 italic">
            Học gia nhập đạo, ngôn giả thành tiên
          </p>
        </div>

        {/* Nút bắt đầu */}
        <button
          onClick={handleStart}
          className="px-12 py-3 bg-purple-900 hover:bg-purple-800 text-amber-100 text-xl font-semibold rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 focus:outline-none"
        >
          Bắt đầu
        </button>
      </div>

      <style jsx="true">{`
        @keyframes twinkle {
          0% {
            opacity: 0.2;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};

export default Welcome;
