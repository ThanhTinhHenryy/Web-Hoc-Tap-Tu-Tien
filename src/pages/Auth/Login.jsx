import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FancyButton from "../../components/UI/Button";
import backgroundImage from "../../assets/background.jpg";
import logo from "../../assets/logo.png";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
// Import hàm login từ api.js
import { login } from "../../../data/api";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      // Sử dụng hàm login từ api.js
      const response = await login(formData.username, formData.password);
      console.log("Đăng nhập thành công:", response.user);

      // Lưu thông tin người dùng và token vào localStorage
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("token", response.token);

      // Chuyển hướng đến trang HomePage
      navigate("/home");
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      setError(error.message || "Tên đăng nhập hoặc mật khẩu không đúng");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center text-white px-6 md:px-20 py-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#2a1b3d",
      }}
    >
      <div className="w-full max-w-2xl p-12 md:p-16 rounded-3xl shadow-2xl bg-[#2e2145bf] bg-opacity-95 backdrop-blur-sm mt-10 mb-10 border border-[#4a2d6d]">
        {/* Logo và Tiêu đề */}
        <div className="text-center mb-10">
          <div className="flex justify-center items-center mb-4">
            <img src={logo} alt="Logo" className="w-28 h-28" />
          </div>
          <h1 className="text-4xl font-extrabold tracking-wide leading-snug">
            Đăng Nhập <span className="text-yellow-300">EverLing</span>
          </h1>
          <p className="text-yellow-300 text-xl mt-2">
            ✨ Quay trở lại hành trình tu luyện!
          </p>
        </div>

        {/* Hiển thị thông báo lỗi nếu có */}
        {error && (
          <div className="mb-4 p-3 bg-red-500 bg-opacity-30 border border-red-500 rounded-md text-center">
            {error}
          </div>
        )}

        {/* Form đăng nhập */}
        <form onSubmit={handleSubmit} className="space-y-6 text-lg">
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
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-900 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                placeholder="Nhập tên đăng nhập hoặc email"
                style={{ lineHeight: "50px" }}
                required
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
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-900 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                placeholder="Nhập mật khẩu"
                style={{ lineHeight: "50px" }}
                required
              />
            </div>
          </div>

          {/* Ghi nhớ đăng nhập và Quên mật khẩu */}
          <div className="flex justify-center w-full">
            <div className="w-4/5 flex justify-between items-center">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="mr-2" />
                <label htmlFor="remember">Ghi nhớ đăng nhập</label>
              </div>
              <Link
                to="/forgot-password"
                className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
              >
                Quên mật khẩu?
              </Link>
            </div>
          </div>

          {/* Nút hành động */}
          <div className="flex justify-center gap-8 pt-2">
            <button
              type="submit"
              disabled={loading}
              className="w-1/3 flex items-center justify-center bg-[#e8d1a2] hover:bg-[#f0dfb4] text-gray-900 font-bold text-lg transition-all duration-300 clip-path-polygon border-2 border-[#381d46]"
              style={{ lineHeight: "40px", height: "50px" }}
            >
              {loading ? "Đang xử lý..." : "Đăng Nhập"}
            </button>
          </div>

          {/* Đăng ký */}
          <div className="text-center mt-4 text-base">
            <span>Chưa có tài khoản? </span>
            <Link
              to="/register"
              className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
            >
              Đăng ký ngay
            </Link>
          </div>

          <div className="border-t border-gray-600 my-8"></div>

          {/* Đăng nhập mạng xã hội */}
          <div className="flex flex-col items-center space-y-10 w-full mb-8">
            <button
              type="button"
              className="w-4/5 flex items-center justify-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-md text-lg font-medium transition-all duration-300 text-zinc-950"
              style={{ marginBottom: "10px", marginTop: "10px" }}
            >
              <FaGoogle className="text-red-400 text-xl" />
              Đăng nhập bằng Google
            </button>
            <button
              type="button"
              className="w-4/5 flex items-center justify-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-md text-lg font-medium transition-all duration-300 text-zinc-950"
              style={{ marginBottom: "10px" }}
            >
              <FaFacebook className="text-blue-400 text-xl" />
              Đăng nhập bằng Facebook
            </button>
            <button
              type="button"
              className="w-4/5 flex items-center justify-center gap-3 px-4 py-3 bg-gray-800 hover:bg-gray-700 rounded-md text-lg font-medium transition-all duration-300 text-zinc-950"
            >
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
        </form>
      </div>
    </div>
  );
};

export default Login;
