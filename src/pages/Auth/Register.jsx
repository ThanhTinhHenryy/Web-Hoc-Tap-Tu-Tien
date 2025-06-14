import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/background.jpg";
import logo from "../../assets/logo.png";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
// Import hàm register từ api.js
import { register } from "../../../data/api";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
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

    // Kiểm tra mật khẩu trùng khớp
    if (formData.password !== formData.confirmPassword) {
      setError("Mật khẩu không khớp!");
      return;
    }

    setLoading(true);

    try {
      // Chuẩn bị dữ liệu người dùng để đăng ký
      const userData = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        fullName: formData.fullName || `Người dùng ${formData.username}`,
        avatar: `https://randomuser.me/api/portraits/${
          Math.random() > 0.5 ? "men" : "women"
        }/${Math.floor(Math.random() * 100)}.jpg`,
      };

      // Sử dụng hàm register từ api.js
      const response = await register(userData);
      console.log("Đăng ký thành công:", response.user);

      // Lưu thông tin người dùng và token vào localStorage
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("token", response.token);

      // Chuyển hướng đến trang HomePage
      navigate("/home");
    } catch (error) {
      console.error("Lỗi đăng ký:", error);
      setError(error.message || "Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.");
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
            Đăng Ký <span className="text-yellow-300">EverLing</span>
          </h1>
          <p className="text-yellow-300 text-xl mt-2">
            ✨ Bắt đầu hành trình tu luyện mới!
          </p>
        </div>

        {/* Hiển thị thông báo lỗi nếu có */}
        {error && (
          <div className="mb-4 p-3 bg-red-500 bg-opacity-30 border border-red-500 rounded-md text-center">
            {error}
          </div>
        )}

        {/* Form đăng ký */}
        <form onSubmit={handleSubmit} className="space-y-6 text-lg">
          <div className="w-full flex flex-col items-center justify-center">
            {/* Họ tên đầy đủ */}
            <div className="w-4/5 mb-4">
              <label
                htmlFor="fullName"
                className="block mb-2 text-lg font-semibold text-blue-300"
              >
                👤 Họ và tên
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-900 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                placeholder="Nhập họ và tên đầy đủ"
                style={{ lineHeight: "50px" }}
              />
            </div>

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
                placeholder="Nhập tên đăng nhập"
                style={{ lineHeight: "50px" }}
                required
              />
            </div>

            {/* Email */}
            <div className="w-4/5 mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-lg font-semibold text-blue-300"
              >
                📧 Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-900 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                placeholder="Nhập địa chỉ email"
                style={{ lineHeight: "50px" }}
                required
              />
            </div>

            {/* Password */}
            <div className="w-4/5 mb-4">
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

            {/* Confirm Password */}
            <div className="w-4/5 mb-4">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-lg font-semibold text-blue-300"
              >
                🔐 Xác nhận mật khẩu
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-3 text-gray-900 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
                placeholder="Nhập lại mật khẩu"
                style={{ lineHeight: "50px" }}
                required
              />
            </div>

            {/* Terms */}
            <div className="w-4/5 flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms">
                Tôi đồng ý với{" "}
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 hover:underline"
                >
                  Điều khoản sử dụng
                </a>
              </label>
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
              {loading ? "Đang xử lý..." : "Đăng Ký"}
            </button>
          </div>

          {/* Đăng nhập */}
          <div className="text-center mt-4 text-base">
            <span>Đã có tài khoản? </span>
            <Link
              to="/login"
              className="text-blue-400 hover:text-blue-300 hover:underline transition-colors"
            >
              Đăng nhập
            </Link>
          </div>

          <div className="border-t border-gray-600 my-8"></div>

          {/* Đăng ký mạng xã hội */}
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

export default Register;
