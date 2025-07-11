import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/background/login.png";

// Import biểu tượng cho đăng nhập mạng xã hội
import { FaGoogle, FaFacebook } from "react-icons/fa";
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

      // Chuyển hướng đến trang HomePage
      navigate("/home");
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
      // Ở đây sẽ thêm logic đăng ký bằng Google
      // Sử dụng Firebase hoặc OAuth2 để xác thực
      console.log("Đăng ký bằng Google");

      // Giả lập đăng ký thành công
      setTimeout(() => {
        // Sau khi đăng ký thành công, chuyển hướng đến trang HomePage
        navigate("/home");
      }, 1500);
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
      // Ở đây sẽ thêm logic đăng ký bằng Facebook
      // Sử dụng Firebase hoặc OAuth2 để xác thực
      console.log("Đăng ký bằng Facebook");

      // Giả lập đăng ký thành công
      setTimeout(() => {
        // Sau khi đăng ký thành công, chuyển hướng đến trang HomePage
        navigate("/home");
      }, 1500);
    } catch (error) {
      console.error("Lỗi đăng ký Facebook:", error);
      setError("Đăng ký bằng Facebook thất bại. Vui lòng thử lại.");
      setSocialLoading({ ...socialLoading, facebook: false });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-1/2 flex flex-col justify-center items-center text-white p-10 bg-gradient-to-br from-[#779341] via-[#5a7035] to-[#3d4c24] rounded-r-[60px]">
          <h2 className="text-2xl font-semibold">Chào mừng đến</h2>
          <h1 className="text-5xl font-extrabold mt-2 text-white drop-shadow-lg">
            Học viện Everling
          </h1>
          <p className="text-lg mt-6 max-w-md text-center">
            Bắt đầu hành trình tu luyện mới cùng chúng tôi ✨
          </p>
        </div>

        <div className="w-1/2 max-w-lg min-h-[600px] bg-white/60 backdrop-blur-md rounded-3xl shadow-xl p-10 mx-6 overflow-y-auto">
          {/* Tiêu đề */}
          <div className="mb-8">
            <div className="flex items-center">
              <h2 className="text-xl font-medium text-gray-700">
                Chào mừng đến{" "}
                <span className="text-[#779341] font-bold">
                  Học viện Everling
                </span>
              </h2>
            </div>

            <div className="mt-4 flex justify-around">
              <h1 className="text-4xl font-bold text-gray-900 drop-shadow-sm">
                Đăng Ký
              </h1>

              <div className="flex flex-col items-end mt-2">
                <div className="text-sm text-gray-500">Đã có tài khoản?</div>
                <Link
                  to="/login"
                  className="text-sm text-[#779341] hover:underline font-medium mt-1"
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
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Họ tên đầy đủ */}
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Họ và tên của bạn
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#779341] focus:border-[#779341] bg-white/80"
                placeholder="Họ và tên"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Địa chỉ email của bạn
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#779341] focus:border-[#779341] bg-white/80"
                placeholder="Email address"
                required
              />
            </div>

            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Tên đăng nhập của bạn
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#779341] focus:border-[#779341] bg-white/80"
                placeholder="Username"
                required
              />
            </div>

            {/* Mật khẩu và Xác nhận mật khẩu (trên cùng một hàng) */}
            <div className="flex space-x-4">
              {/* Mật khẩu */}
              <div className="w-1/2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mật khẩu của bạn
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#779341] focus:border-[#779341] bg-white/80"
                  placeholder="Password"
                  required
                />
              </div>

              {/* Xác nhận mật khẩu */}
              <div className="w-1/2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Xác nhận mật khẩu
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#779341] focus:border-[#779341] bg-white/80"
                  placeholder="Confirm password"
                  required
                />
              </div>
            </div>

            {/* Điều khoản sử dụng */}
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 h-4 w-4 accent-[#779341]"
                required
              />
              <label htmlFor="terms" className="text-sm text-gray-700">
                Tôi đồng ý với{" "}
                <a href="#" className="text-[#779341] hover:underline">
                  Điều khoản sử dụng
                </a>
              </label>
            </div>

            {/* Nút đăng ký */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#779341] hover:bg-[#5e7434] text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-colors duration-300"
              >
                {loading ? "Đang xử lý..." : "Đăng ký"}
              </button>
            </div>
          </form>

          {/* Phần đăng ký bằng mạng xã hội */}
          <div className="mt-4">
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-300 w-full"></div>
              <div className="text-xs text-gray-500 bg-white/60 px-3 absolute">
                Hoặc đăng ký với
              </div>
            </div>

            <div className="flex justify-center space-x-3 mt-4">
              {/* Nút đăng ký Google */}
              <button
                onClick={handleGoogleRegister}
                disabled={socialLoading.google}
                className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors duration-300 w-1/2"
              >
                <FaGoogle className="text-red-500 mr-1 text-sm" />
                <span className="text-gray-700 text-xs">
                  {socialLoading.google ? "Đang xử lý..." : "Google"}
                </span>
              </button>

              {/* Nút đăng ký Facebook */}
              <button
                onClick={handleFacebookRegister}
                disabled={socialLoading.facebook}
                className="flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors duration-300 w-1/2"
              >
                <FaFacebook className="text-blue-600 mr-1 text-sm" />
                <span className="text-gray-700 text-xs">
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

export default Register;
