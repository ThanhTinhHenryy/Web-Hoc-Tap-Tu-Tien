import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.jpg";
// import logo from "../assets/logo.png";
import AvatarSelector from "../components/UI/AvatarSelector";
import AvatarGrid from "../components/UI/AvatarGrid";

// Thiết lập biến màu sắc để dễ dàng thay đổi
const colors = {
  // Màu nền gradient
  bgGradientFrom: "#6a3c99",
  bgGradientTo: "#4c2a70",

  // Màu viền
  borderColor: "purple-600/70",
  borderHoverColor: "purple-900/70",

  // Màu chữ
  titleColor: "yellow-300",
  titleHoverColor: "yellow-200",
  textColor: "amber-100",

  // Màu nút
  buttonGradientFrom: "blue-600",
  buttonGradientTo: "purple-600",
  buttonTextColor: "white",
  buttonShadowColor: "blue-600/50",

  // Màu hiệu ứng
  glowPurple: "purple-500/20",
  glowPurpleHover: "purple-500/30",
  glowIndigo: "indigo-500/20",
  glowIndigoHover: "indigo-500/30",
  borderAccent: "purple-500/50",
  borderAccentHover: "purple-500",

  // Màu khác
  achievementBg: "#a68d8b",
};

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage khi component được mount
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (storedUser && token) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (error) {
        console.error("Lỗi khi phân tích dữ liệu người dùng:", error);
        // Nếu có lỗi, xóa dữ liệu không hợp lệ
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
      }
    } else {
      // Nếu không có thông tin đăng nhập, chuyển hướng về trang đăng nhập
      navigate("/login");
    }
  }, [navigate]);

  // Hàm đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Hàm xử lý khi avatar thay đổi
  const handleAvatarChange = (updatedUser) => {
    setUser(updatedUser);
  };

  // Hàm xử lý khi chọn avatar từ AvatarGrid
  const handleSelectAvatar = async (avatar) => {
    try {
      // Lấy thông tin người dùng từ localStorage
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (!storedUser) {
        throw new Error("Không tìm thấy thông tin người dùng");
      }

      // Cập nhật avatar trong localStorage
      const updatedUser = { ...storedUser, avatar: avatar.image };
      localStorage.setItem("user", JSON.stringify(updatedUser));

      // Phát sự kiện storage để thông báo cho các component khác
      window.dispatchEvent(new Event("storage"));

      // Phát sự kiện tùy chỉnh avatarChange
      const avatarChangeEvent = new CustomEvent("avatarChange", {
        detail: updatedUser,
      });
      window.dispatchEvent(avatarChangeEvent);

      // Cập nhật state
      setUser(updatedUser);
    } catch (error) {
      console.error("Lỗi khi cập nhật avatar:", error);
    }
  };

  // Hiển thị loading khi chưa lấy được thông tin người dùng
  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-300 mx-auto"></div>
          <p className="mt-4 text-xl text-amber-100">Đang tải thông tin...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay để làm tối background */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-99"></div> */}

      {/* Content */}
      <div className="relative z-10 min-h-screen py-20">
        <div
          className="w-full mx-auto"
          style={{
            marginTop: "65px",
            justifyContent: "center",
          }}
        >
          {/* Avatar Selector Modal */}
          {showAvatarSelector && (
            <AvatarSelector
              onClose={() => setShowAvatarSelector(false)}
              onAvatarChange={handleAvatarChange}
            />
          )}

          {/* Hero Section */}
          <section
            className="mb-16 text-center mx-auto"
            style={{ justifyContent: "center" }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl mb-6 text-purple-300 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Chào mừng đến với{" "}
              <span className="text-yellow-300">EverLing</span>
            </h1>
            <p
              className="text-2xl text-amber-100 mb-8 mx-auto font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] tracking-wide"
              style={{ marginBottom: "10px" }}
            >
              Bắt đầu hành trình tu luyện của bạn và khám phá thế giới Ngữ Linh
              Trường Sinh Giới
            </p>
          </section>
        </div>

        <div className="w-full mx-auto flex justify-center">
          {/* Container grid với 12 cột */}
          <div className="grid grid-cols-12 gap-8 w-[90%] mx-auto">
            {/* Phần tử chiếm 4 cột: phần này là thông tin của người dùng */}
            <div className="col-span-4">
              <section className="flex flex-col h-full bg-gradient-to-br from-[#6a3c99] to-[#4c2a70] p-6 rounded-xl shadow-lg border border-purple-700 bg-opacity-80">
                <h2 className="text-2xl font-bold mb-6 text-yellow-300 text-center">
                  Thông tin người dùng
                </h2>
                <div className="flex items-center mb-6 justify-center">
                  <div className="relative group">
                    <img
                      src={user.avatar}
                      alt="Avatar"
                      className="w-20 h-20 rounded-full border-2 border-yellow-300 mr-4 cursor-pointer transition-all duration-300 group-hover:opacity-80"
                      onClick={() => setShowAvatarSelector(true)}
                    />
                    <div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                      onClick={() => setShowAvatarSelector(true)}
                    >
                      <span className="text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                        Đổi
                      </span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-yellow-300">
                      {user.fullName}
                    </h2>
                    <p className="text-amber-100">{user.level}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-yellow-300 mb-4 text-center">
                    Tiến trình tu luyện
                  </h3>
                  <p className="text-amber-100 mb-2">
                    Cấp độ hiện tại:{" "}
                    <span className="text-yellow-300 font-bold">
                      {user.level}
                    </span>
                  </p>
                  <div className="w-full bg-gray-700 rounded-full h-4">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-yellow-400 h-4 rounded-full"
                      style={{ width: `${user.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-amber-100 mt-2 text-right">
                    {user.progress}% đến cấp độ tiếp theo
                  </p>
                </div>

                <div
                  className="mb-6"
                  style={{
                    marginLeft: "10px",
                    marginRight: "10px",
                    marginBottom: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <div
                    className="bg-purple-900/30 p-4 rounded-lg mb-4"
                    style={{
                      backgroundColor: colors.achievementBg,
                      borderRadius: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                      Thành tựu gần đây
                    </h3>
                    <ul className="text-amber-100 space-y-2">
                      {user.achievements && user.achievements.length > 0 ? (
                        user.achievements.map((achievement, index) => (
                          <li key={index}>✅ {achievement}</li>
                        ))
                      ) : (
                        <li>Chưa có thành tựu nào</li>
                      )}
                    </ul>
                  </div>
                  <div
                    className="bg-purple-900/30 p-4 rounded-lg"
                    style={{ backgroundColor: "#a68d8b", borderRadius: "10px" }}
                  >
                    <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                      Nhiệm vụ tiếp theo
                    </h3>
                    <ul className="text-amber-100 space-y-2">
                      {user.tasks && user.tasks.length > 0 ? (
                        user.tasks.map((task, index) => (
                          <li key={index}>📝 {task}</li>
                        ))
                      ) : (
                        <li>Không có nhiệm vụ nào</li>
                      )}
                    </ul>
                  </div>
                </div>

                <div className="mt-auto w-full flex justify-center">
                  <button
                    onClick={handleLogout}
                    className="w-3/5 px-4 py-2  hover:bg-red-700 text-white rounded-lg transition-colors !bg-[#627585]"
                  >
                    Đăng xuất
                  </button>
                </div>
              </section>
            </div>

            {/* Phần tử chiếm 8 cột: phần này là content của web */}
            <div className="col-span-8">
              {/* Main Content - Đã chuyển vào phần content 8 cột */}
              <div className="mb-8">
                <div
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  style={{ marginBottom: "10px" }}
                >
                  {/* Card 1: Bắt đầu tu luyện */}
                  <div
                    className={`bg-gradient-to-br from-[${colors.bgGradientFrom}] to-[${colors.bgGradientTo}] p-8 rounded-xl shadow-xl border-2 border-${colors.borderColor} hover:shadow-${colors.borderHoverColor} hover:scale-105 transition-all duration-300 bg-opacity-90 relative overflow-hidden group`}
                  >
                    {/* Hiệu ứng ánh sáng nền */}
                    <div
                      className={`absolute -top-20 -right-20 w-40 h-40 bg-${colors.glowPurple} rounded-full blur-xl group-hover:bg-${colors.glowPurpleHover} transition-all duration-500`}
                    ></div>
                    <div
                      className={`absolute -bottom-20 -left-20 w-40 h-40 bg-${colors.glowIndigo} rounded-full blur-xl group-hover:bg-${colors.glowIndigoHover} transition-all duration-500`}
                    ></div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-5">
                        <span
                          className={`text-${colors.titleColor} mr-3 text-3xl`}
                        >
                          ✨
                        </span>
                        <h2
                          className={`text-2xl font-bold text-${colors.titleColor} group-hover:text-${colors.titleHoverColor} transition-colors`}
                        >
                          Bắt đầu Tu luyện
                        </h2>
                      </div>

                      <p
                        className={`text-${colors.textColor} mb-8 pl-2 border-l-2 border-${colors.borderAccent} group-hover:border-${colors.borderAccentHover} transition-all`}
                      >
                        Khám phá các bài học cơ bản và nâng cao kỹ năng ngôn ngữ
                        của bạn thông qua các bài tập tương tác.
                      </p>

                      <div className="text-center">
                        <Link
                          to="/tu-luyen"
                          className={`inline-block px-16 py-5 bg-gradient-to-r from-${colors.buttonGradientFrom} to-${colors.buttonGradientTo} text-${colors.buttonTextColor} rounded-lg transition-all shadow-lg hover:shadow-${colors.buttonShadowColor} font-medium text-lg`}
                        >
                          <span
                            className="flex items-center justify-center"
                            style={{ padding: "5px" }}
                          >
                            <span>Bắt đầu ngay</span>
                            <span className="ml-2">→</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Thư viện Linh Tự */}
                  <div
                    className={`bg-gradient-to-br from-[${colors.bgGradientFrom}] to-[${colors.bgGradientTo}] p-8 rounded-xl shadow-xl border-2 border-${colors.borderColor} hover:shadow-${colors.borderHoverColor} hover:scale-105 transition-all duration-300 bg-opacity-90 relative overflow-hidden group`}
                  >
                    {/* Hiệu ứng ánh sáng nền */}
                    <div
                      className={`absolute -top-20 -right-20 w-40 h-40 bg-${colors.glowPurple} rounded-full blur-xl group-hover:bg-${colors.glowPurpleHover} transition-all duration-500`}
                    ></div>
                    <div
                      className={`absolute -bottom-20 -left-20 w-40 h-40 bg-${colors.glowIndigo} rounded-full blur-xl group-hover:bg-${colors.glowIndigoHover} transition-all duration-500`}
                    ></div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-5">
                        <span
                          className={`text-${colors.titleColor} mr-3 text-3xl`}
                        >
                          📚
                        </span>
                        <h2
                          className={`text-2xl font-bold text-${colors.titleColor} group-hover:text-${colors.titleHoverColor} transition-colors`}
                        >
                          Thư viện Linh Tự
                        </h2>
                      </div>

                      <p
                        className={`text-${colors.textColor} mb-8 pl-2 border-l-2 border-${colors.borderAccent} group-hover:border-${colors.borderAccentHover} transition-all`}
                      >
                        Truy cập kho tàng kiến thức với hàng ngàn từ vựng, ngữ
                        pháp và các bài đọc phong phú.
                      </p>

                      <div className="text-center">
                        <Link
                          to="/thu-vien-linh-tu"
                          className="inline-block px-16 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg transition-all shadow-lg hover:shadow-blue-600/50 font-medium text-lg"
                        >
                          <span
                            className="flex items-center justify-center"
                            style={{ padding: "5px" }}
                          >
                            <span>Khám phá</span>
                            <span className="ml-2">→</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Thi luyện */}
                  <div
                    className={`bg-gradient-to-br from-[${colors.bgGradientFrom}] to-[${colors.bgGradientTo}] p-8 rounded-xl shadow-xl border-2 border-${colors.borderColor} hover:shadow-${colors.borderHoverColor} hover:scale-105 transition-all duration-300 bg-opacity-90 relative overflow-hidden group`}
                  >
                    {/* Hiệu ứng ánh sáng nền */}
                    <div
                      className={`absolute -top-20 -right-20 w-40 h-40 bg-${colors.glowPurple} rounded-full blur-xl group-hover:bg-${colors.glowPurpleHover} transition-all duration-500`}
                    ></div>
                    <div
                      className={`absolute -bottom-20 -left-20 w-40 h-40 bg-${colors.glowIndigo} rounded-full blur-xl group-hover:bg-${colors.glowIndigoHover} transition-all duration-500`}
                    ></div>

                    <div className="relative z-10">
                      <div className="flex items-center mb-5">
                        <span
                          className={`text-${colors.titleColor} mr-3 text-3xl`}
                        >
                          🏆
                        </span>
                        <h2
                          className={`text-2xl font-bold text-${colors.titleColor} group-hover:text-${colors.titleHoverColor} transition-colors`}
                        >
                          Thi luyện
                        </h2>
                      </div>

                      <p
                        className={`text-${colors.textColor} mb-8 pl-2 border-l-2 border-${colors.borderAccent} group-hover:border-${colors.borderAccentHover} transition-all`}
                      >
                        Thử thách bản thân với các bài kiểm tra và đánh giá
                        trình độ để nâng cao cảnh giới của bản thân.
                      </p>

                      <div className="text-center">
                        <Link
                          to="/thi-luyen"
                          className={`inline-block px-16 py-5 bg-gradient-to-r from-${colors.buttonGradientFrom} to-${colors.buttonGradientTo} text-${colors.buttonTextColor} rounded-lg transition-all shadow-lg hover:shadow-${colors.buttonShadowColor} font-medium text-lg`}
                        >
                          <span
                            className="flex items-center justify-center"
                            style={{ padding: "5px" }}
                          >
                            <span>Thử thách ngay</span>
                            <span className="ml-2">→</span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Avatar Gallery Section */}
              <section className="bg-gradient-to-br from-[#6a3c99] to-[#4c2a70] p-8 rounded-xl shadow-lg border border-purple-700 bg-opacity-80">
                <h2 className="text-2xl font-bold mb-6 text-yellow-300 text-center">
                  Bộ sưu tập Avatar
                </h2>
                <p className="text-amber-100 text-center mb-6">
                  Khám phá và chọn avatar phù hợp với phong cách tu luyện của
                  bạn
                </p>

                {/* Import AvatarGrid component */}
                <div className="mt-4">
                  <AvatarGrid onSelectAvatar={handleSelectAvatar} />
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
