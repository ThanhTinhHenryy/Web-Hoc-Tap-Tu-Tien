import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import backgroundImage from "../assets/background.jpg";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";

const Welcome = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-white px-6 md:px-20 py-10"
      style={{
        // backgroundImage: `url(${backgroundImage})`,
        background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#2a1b3d", // Deep mystical purple, fitting for cultivation theme
      }}
    >
      <div className="w-full max-w-2xl p-12 md:p-16 rounded-3xl shadow-2xl bg-[#2e2145bf] bg-opacity-95 backdrop-blur-sm mt-10 mb-10 border border-[#4a2d6d]">
        {/* Logo và Tiêu đề */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center mb-4">
            <img src={logo} alt="Logo" className="w-28 h-28" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-wide leading-snug">
            Học Viện <span className="text-yellow-300">EverLing</span>
          </h1>
          <p className="text-yellow-300 text-xl mt-2">
            ✨ Tu luyện Anh ngữ để phi thăng!
          </p>
        </div>

        {/* Form đăng nhập */}
        <div className="space-y-6 text-lg">
          <div className="w-full flex flex-col items-center justify-center">
            {/* Username */}
            <div className="w-4/5 mb-4">
              <label
                htmlFor="username"
                className="block mb-2 text-lg font-semibold text-blue-300"
              >
                🧙‍♂️ Tên đăng nhập
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-3 text-gray-900 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                placeholder="Nhập tên đăng nhập"
                style={{ lineHeight: "50px" }}
              />
            </div>

            {/* Password */}
            <div className="w-4/5">
              <label
                htmlFor="password"
                className="block mb-2 text-lg font-semibold text-blue-300"
              >
                🔐 Mật khẩu
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 text-gray-900 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                placeholder="Nhập mật khẩu"
                style={{ lineHeight: "50px" }}
              />
            </div>
          </div>

          {/* Nút hành động */}
          <div
            className="flex justify-center gap-8 pt-2"
            style={{
              clipPath:
                "polygon(10% 0%, 90% 0%, 100% 30%, 100% 70%, 90% 100%, 10% 100%, 0% 70%, 0% 30%)",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <Link
              to="/login"
              className="w-1/3 flex items-center justify-center bg-[#e8d1a2] hover:bg-[#f0dfb4] text-gray-900 font-bold text-lg transition-all duration-300 clip-path-polygon border-2 border-[#381d46]"
              style={{ lineHeight: "40px", height: "50px" }}
            >
              Gia nhập phái
            </Link>
            <Link
              to="/register"
              className="w-1/3 flex items-center justify-center bg-[#e8d1a2] hover:bg-[#f0dfb4] text-gray-900 font-bold text-lg transition-all duration-300 clip-path-polygon border-2 border-[#381d46]"
              style={{ lineHeight: "40px", height: "50px" }}
            >
              Ghi danh mới
            </Link>
          </div>

          {/* Quên mật khẩu */}
          <div className="text-center mt-4 text-base">
            <Link
              to="/forgot-password"
              className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
            >
              🔄 Quên mật khẩu?
            </Link>
          </div>

          {/* Kẻ ngang */}
          <div className="border-t border-gray-600 my-8"></div>

          {/* Đăng nhập mạng xã hội */}
          <div className="flex flex-col items-center space-y-10 w-full mb-8">
            <button
              className="w-4/5 flex items-center justify-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-md text-lg font-medium transition-all duration-300 text-zinc-950"
              style={{ marginBottom: "10px", marginTop: "10px" }}
            >
              <FaGoogle className="text-red-400 text-xl" />
              Đăng nhập bằng Google
            </button>
            <button
              className="w-4/5 flex items-center justify-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-md text-lg font-medium transition-all duration-300 text-zinc-950"
              style={{ marginBottom: "10px" }}
            >
              <FaFacebook className="text-blue-400 text-xl" />
              Đăng nhập bằng Facebook
            </button>
            <button className="w-4/5 flex items-center justify-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-md text-lg font-medium transition-all duration-300 text-zinc-950">
              <FaApple className="text-gray-300 text-xl" />
              Đăng nhập bằng Apple
            </button>
          </div>

          {/* Ghi chú */}
          <div
            className="text-center mt-6 text-sm text-gray-400"
            style={{ marginTop: "10px", marginBottom: "10px" }}
          >
            📜 Bí kíp học mỗi ngày sẽ giúp bạn tăng tu vi và nhận phần thưởng!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
