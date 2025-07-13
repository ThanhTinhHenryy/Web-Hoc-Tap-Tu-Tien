import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/background/auth.png";

// Import biểu tượng cho đăng nhập mạng xã hội
import { FaGoogle, FaFacebook } from "react-icons/fa";
// Import hàm register từ api.js
import { register } from "../../../data/api";

// Import component Alert
import { showAlert } from "../../components/UI/Alert";
import "../../components/UI/Alert.css";

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
  const [socialLoading, setSocialLoading] = useState({
    google: false,
    facebook: false,
  });
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
        avatar: "", // Khởi tạo với avatar rỗng
      };

      // Sử dụng hàm register từ api.js
      const response = await register(userData);
      console.log("Đăng ký thành công:", response.user);

      // Lưu thông tin người dùng và token vào localStorage
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("token", response.token);

      // Chuyển hướng đến trang chọn avatar
      navigate("/choose-avatar");
    } catch (error) {
      console.error("Lỗi đăng ký:", error);
      setError(error.message || "Đã xảy ra lỗi khi đăng ký. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  // Xử lý đăng ký bằng Google
  const handleGoogleRegister = async () => {
    setSocialLoading({ ...socialLoading, google: true });
    setError("");

    try {
      // Hiển thị thông báo đang phát triển với component Alert tùy chỉnh
      showAlert("Tính năng đăng ký bằng Google đang được phát triển!", "info", 3000);
      console.log("Đăng ký bằng Google");

      // Đặt lại trạng thái loading sau khi hiển thị thông báo
      setTimeout(() => {
        setSocialLoading({ ...socialLoading, google: false });
      }, 500);
    } catch (error) {
      console.error("Lỗi đăng ký Google:", error);
      setError("Đăng ký bằng Google thất bại. Vui lòng thử lại.");
      setSocialLoading({ ...socialLoading, google: false });
    }
  };

  // Xử lý đăng ký bằng Facebook
  const handleFacebookRegister = async () => {
    setSocialLoading({ ...socialLoading, facebook: true });
    setError("");

    try {
      // Hiển thị thông báo đang phát triển với component Alert tùy chỉnh
      showAlert("Tính năng đăng ký bằng Facebook đang được phát triển!", "info", 3000);
      console.log("Đăng ký bằng Facebook");

      // Đặt lại trạng thái loading sau khi hiển thị thông báo
      setTimeout(() => {
        setSocialLoading({ ...socialLoading, facebook: false });
      }, 500);
    } catch (error) {
      console.error("Lỗi đăng ký Facebook:", error);
      setError("Đăng ký bằng Facebook thất bại. Vui lòng thử lại.");
      setSocialLoading({ ...socialLoading, facebook: false });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-2 sm:px-6 sm:py-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-center">
        <span className="text-white drop-shadow-lg">Chào mừng đến với </span>
        <span className="text-yellow-400 drop-shadow-lg">
          HỌC VIỆN EVERLING
        </span>
      </h2>
      <div className="w-full flex items-center justify-center">
        <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 max-w-lg bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 mx-auto transition-all duration-300 hover:shadow-2xl border border-white/20">
          {/* Tiêu đề */}
          <div className="mb-4 sm:mb-6 text-center">
            <div className="flex justify-around">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 drop-shadow-sm">
                Đăng Ký
              </h1>

              <div className="flex flex-col items-end">
                <div className="text-xs sm:text-sm text-gray-500">Đã có tài khoản?</div>
                <Link
                  to="/login"
                  className="text-xs sm:text-sm text-[#2B003F] hover:underline font-medium mt-1"
                >
                  Đăng nhập
                </Link>
              </div>
            </div>
          </div>

          {/* Hiển thị thông báo lỗi nếu có */}
          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-center text-sm">
              {error}
            </div>
          )}

          {/* Form đăng ký */}
          <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
            {/* Họ tên đầy đủ */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
              >
                Họ và tên của bạn
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B003F] focus:border-[#2B003F] bg-white/80 transition-all duration-300"
                placeholder="Họ và tên"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
              >
                Địa chỉ email của bạn
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B003F] focus:border-[#2B003F] bg-white/80 transition-all duration-300"
                placeholder="Email address"
                required
              />
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
              >
                Tên đăng nhập của bạn
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B003F] focus:border-[#2B003F] bg-white/80 transition-all duration-300"
                placeholder="Username"
                required
              />
            </div>

            {/* Mật khẩu và Xác nhận mật khẩu (trên cùng một hàng) */}
            <div className="flex space-x-2 sm:space-x-3">
              {/* Mật khẩu */}
              <div className="w-1/2">
                <label
                  htmlFor="password"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  Mật khẩu của bạn
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B003F] focus:border-[#2B003F] bg-white/80 transition-all duration-300"
                  placeholder="Password"
                  required
                />
              </div>

              {/* Xác nhận mật khẩu */}
              <div className="w-1/2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-xs sm:text-sm font-medium text-gray-700 mb-1"
                >
                  Xác nhận mật khẩu
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B003F] focus:border-[#2B003F] bg-white/80 transition-all duration-300"
                  placeholder="Confirm password"
                  required
                />
              </div>
            </div>

            {/* Điều khoản sử dụng */}
            <div className="flex items-center mt-1">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 h-3 w-3 sm:h-4 sm:w-4 accent-[#2B003F]"
                required
              />
              <label htmlFor="terms" className="text-xs sm:text-sm text-gray-700">
                Tôi đồng ý với{" "}
                <a href="#" className="text-[#2B003F] hover:text-[#3D0059] hover:underline transition-colors duration-300">
                  Điều khoản sử dụng
                </a>
              </label>
            </div>

            {/* Nút đăng ký */}
            <div className="pt-1 sm:pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2B003F] hover:bg-[#3D0059] text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm sm:text-base transform hover:scale-[1.02]"
              >
                {loading ? "Đang xử lý..." : "Đăng ký"}
              </button>
            </div>
          </form>

          {/* Phần đăng ký bằng mạng xã hội */}
          <div className="mt-4 sm:mt-6">
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-300 w-full"></div>
              <div className="text-xs sm:text-sm text-gray-600 bg-white/80 px-3 py-1 absolute rounded-full">
                Hoặc đăng ký với
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-3 mt-4 sm:mt-5">
              {/* Nút đăng ký Google */}
              <button
                onClick={handleGoogleRegister}
                disabled={socialLoading.google}
                className="flex items-center justify-center px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors duration-300 w-full sm:w-1/2"
              >
                <FaGoogle className="text-red-500 mr-2" />
                <span className="text-gray-700">
                  {socialLoading.google ? "Đang xử lý..." : "Google"}
                </span>
              </button>

              {/* Nút đăng ký Facebook */}
              <button
                onClick={handleFacebookRegister}
                disabled={socialLoading.facebook}
                className="flex items-center justify-center px-3 py-2 text-xs sm:text-sm border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors duration-300 w-full sm:w-1/2"
              >
                <FaFacebook className="text-blue-600 mr-2" />
                <span className="text-gray-700">
                  {socialLoading.facebook ? "Đang xử lý..." : "Facebook"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 sm:mt-3 text-center text-xs sm:text-sm text-white">
        <p>© {new Date().getFullYear()} Học Viện Everling. Tất cả quyền được bảo lưu.</p>
      </div>
    </div>
  );
};

export default Register;
