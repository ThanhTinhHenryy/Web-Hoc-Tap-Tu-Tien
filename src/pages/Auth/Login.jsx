import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/background/login.png";

// Import hàm login từ api.js
import { login } from "../../../data/api";

// Import biểu tượng cho đăng nhập mạng xã hội
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
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
      const response = await login(formData.email, formData.password);
      console.log("Đăng nhập thành công:", response.user);

      // Lưu thông tin người dùng và token vào localStorage
      localStorage.setItem("user", JSON.stringify(response.user));
      localStorage.setItem("token", response.token);

      // Chuyển hướng đến trang HomePage
      navigate("/home");
    } catch (error) {
      console.error("Lỗi đăng nhập:", error);
      setError(error.message || "Email hoặc mật khẩu không đúng");
    } finally {
      setLoading(false);
    }
  };

  // Xử lý đăng nhập bằng Google
  const handleGoogleLogin = async () => {
    setSocialLoading({ ...socialLoading, google: true });
    setError("");

    try {
      // Ở đây sẽ thêm logic đăng nhập bằng Google
      // Sử dụng Firebase hoặc OAuth2 để xác thực
      console.log("Đăng nhập bằng Google");

      // Giả lập đăng nhập thành công
      setTimeout(() => {
        // Sau khi đăng nhập thành công, chuyển hướng đến trang HomePage
        navigate("/home");
      }, 1500);
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
      // Ở đây sẽ thêm logic đăng nhập bằng Facebook
      // Sử dụng Firebase hoặc OAuth2 để xác thực
      console.log("Đăng nhập bằng Facebook");

      // Giả lập đăng nhập thành công
      setTimeout(() => {
        // Sau khi đăng nhập thành công, chuyển hướng đến trang HomePage
        navigate("/home");
      }, 1500);
    } catch (error) {
      console.error("Lỗi đăng nhập Facebook:", error);
      setError("Đăng nhập bằng Facebook thất bại. Vui lòng thử lại.");
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
        <div className="w-1/2 flex flex-col justify-center items-center text-white p-10 bg-gradient-to-br from-green-400 via-blue-400 to-blue-600 rounded-r-[60px]">
          <h2 className="text-2xl font-semibold">Chào mừng đến</h2>
          <h1 className="text-5xl font-extrabold mt-2 text-white drop-shadow-lg">
            Học viện Everling
          </h1>
          <p className="text-lg mt-6 max-w-md text-center">
            Khám phá thế giới tri thức kỳ diệu cùng chúng tôi ✨
          </p>
        </div>

        <div className="w-1/2 max-w-lg min-h-[600px] bg-white/60 backdrop-blur-md rounded-3xl shadow-xl p-10 mx-6 ">
          {/* Tiêu đề */}
          <div className="mb-8">
            <div className="flex items-center">
              <h2 className="text-xl font-medium text-gray-700">
                Chào mừng đến{" "}
                <span className="text-green-600 font-bold">
                  Học viện Everling
                </span>
              </h2>
            </div>

            <div className="mt-4 flex justify-around">
              <h1 className="text-4xl font-bold text-gray-900 drop-shadow-sm">
                Đăng Nhập
              </h1>

              <div className="flex flex-col items-end mt-2">
                <div className="text-sm text-gray-500">Chưa có tài khoản?</div>
                <Link
                  to="/register"
                  className="text-sm text-green-600 hover:underline font-medium mt-1"
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
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Enter your email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/80"
                placeholder="Email address"
                required
                autoComplete="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              />
            </div>

            {/* Phần tên người dùng và số điện thoại đã được xóa */}

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
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 bg-white/80"
                placeholder="Password"
                required
              />
              <div className="flex justify-end mt-2">
                <Link
                  to="/forgot-password"
                  className="text-sm text-green-600 hover:text-green-700 hover:underline"
                >
                  Quên mật khẩu?
                </Link>
              </div>
            </div>

            {/* Nút đăng nhập */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#779341] hover:bg-[#5e7434] text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-colors duration-300 mt-2"
              >
                {loading ? "Đang xử lý..." : "Đăng nhập"}
              </button>
            </div>
          </form>

          {/* Phần đăng nhập bằng mạng xã hội */}
          <div className="mt-6">
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-300 w-full"></div>
              <div className="text-sm text-gray-500 bg-white/60 px-3 absolute">
                Hoặc đăng nhập với
              </div>
            </div>

            <div className="flex justify-center space-x-4 mt-6">
              {/* Nút đăng nhập Google */}
              <button
                onClick={handleGoogleLogin}
                disabled={socialLoading.google}
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors duration-300 w-1/2"
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
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-colors duration-300 w-1/2"
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
