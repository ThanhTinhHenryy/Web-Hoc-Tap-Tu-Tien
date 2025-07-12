import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/background/auth.png";

// Import hàm login từ api.js
import { login } from "../../../data/api";

// Import biểu tượng cho đăng nhập mạng xã hội
import { FaGoogle, FaFacebook } from "react-icons/fa";

// Import component Alert
import { showAlert } from "../../components/UI/Alert";
import "../../components/UI/Alert.css";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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

  // Xử lý đăng nhập bằng Google
  const handleGoogleLogin = async () => {
    setSocialLoading({ ...socialLoading, google: true });
    setError("");

    try {
      // Hiển thị thông báo đang phát triển với component Alert tùy chỉnh
      showAlert("Tính năng đăng nhập bằng Google đang được phát triển!", "info", 3000);
      console.log("Đăng nhập bằng Google");

      // Đặt lại trạng thái loading sau khi hiển thị thông báo
      setTimeout(() => {
        setSocialLoading({ ...socialLoading, google: false });
      }, 500);
    } catch (error) {
      console.error("Lỗi đăng nhập Google:", error);
      setError("Đăng nhập bằng Google thất bại. Vui lòng thử lại.");
      setSocialLoading({ ...socialLoading, google: false });
    }
  };

  // Xử lý đăng nhập bằng Facebook
  const handleFacebookLogin = async () => {
    setSocialLoading({ ...socialLoading, facebook: true });
    setError("");

    try {
      // Hiển thị thông báo đang phát triển với component Alert tùy chỉnh
      showAlert("Tính năng đăng nhập bằng Facebook đang được phát triển!", "info", 3000);
      console.log("Đăng nhập bằng Facebook");

      // Đặt lại trạng thái loading sau khi hiển thị thông báo
      setTimeout(() => {
        setSocialLoading({ ...socialLoading, facebook: false });
      }, 500);
    } catch (error) {
      console.error("Lỗi đăng nhập Facebook:", error);
      setError("Đăng nhập bằng Facebook thất bại. Vui lòng thử lại.");
      setSocialLoading({ ...socialLoading, facebook: false });
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-8 sm:px-6 sm:py-12"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h2 className="text-4xl font-bold mb-8 text-center">
        <span className="text-white drop-shadow-lg">Chào mừng đến với </span>
        <span className="text-yellow-400 drop-shadow-lg">
          HỌC VIỆN EVERLING
        </span>
      </h2>
      <div className="w-full flex items-center justify-center">
        <div className="w-full sm:w-4/5 md:w-3/5 lg:w-2/5 max-w-lg bg-white/70 backdrop-blur-md rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 mx-auto transition-all duration-300 hover:shadow-2xl border border-white/20">
          {/* Tiêu đề */}
          <div className="mb-8 text-center">
            <div className="mt-4 flex justify-around">
              <h1 className="text-4xl font-bold text-gray-900 drop-shadow-sm">
                Đăng Nhập
              </h1>

              <div className="flex flex-col items-end mt-2">
                <div className="text-sm text-gray-500">Chưa có tài khoản?</div>
                <Link
                  to="/register"
                  className="text-sm text-[#2B003F] hover:underline font-medium mt-1"
                >
                  Đăng ký
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

          {/* Form đăng nhập */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nhập tên đăng nhập hoặc email của bạn
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B003F] focus:border-[#2B003F] bg-white/80 transition-all duration-300"
                placeholder="Username hoặc email"
                required
              />
            </div>

            {/* Mật khẩu */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Nhập mật khẩu của bạn
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2B003F] focus:border-[#2B003F] bg-white/80 transition-all duration-300"
                placeholder="Password"
                required
              />
              <div className="flex justify-end mt-2">
                <Link
                  to="/forgot-password"
                  className="text-sm text-[#2B003F] hover:text-[#3D0059] hover:underline transition-colors duration-300"
                >
                  Quên mật khẩu?
                </Link>
              </div>
            </div>

            {/* Nút đăng nhập */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2B003F] hover:bg-[#3D0059] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 mt-2 transform hover:scale-[1.02]"
              >
                {loading ? "Đang xử lý..." : "Đăng nhập"}
              </button>
            </div>
          </form>

          {/* Phần đăng nhập bằng mạng xã hội */}
          <div className="mt-8">
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-300 w-full"></div>
              <div className="text-sm text-gray-600 bg-white/80 px-4 py-1 absolute rounded-full">
                Hoặc đăng nhập với
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-6">
              {/* Nút đăng nhập Google */}
              <button
                onClick={handleGoogleLogin}
                disabled={socialLoading.google}
                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors duration-300 w-full sm:w-1/2"
              >
                <FaGoogle className="text-red-500 mr-2" />
                <span className="text-gray-700">
                  {socialLoading.google ? "Đang xử lý..." : "Google"}
                </span>
              </button>

              {/* Nút đăng nhập Facebook */}
              <button
                onClick={handleFacebookLogin}
                disabled={socialLoading.facebook}
                className="flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors duration-300 w-full sm:w-1/2"
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
    </div>
  );
};

export default Login;
