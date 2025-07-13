import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background/auth.png";
import achievements from "../../data/achievement.js";
import AvatarSelector from "../components/UI/AvatarSelector";
import "../styles/animations.css";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [userAchievements, setUserAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAvatarSelector, setShowAvatarSelector] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Lấy thông tin người dùng từ localStorage
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (storedUser && token) {
      try {
        const userData = JSON.parse(storedUser);
        setUser(userData);
      } catch (error) {
        console.error("Lỗi khi phân tích dữ liệu người dùng:", error);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
      }
    } else {
      navigate("/login");
    }

    // Lấy thành tựu của người dùng từ localStorage
    const loadUserAchievements = () => {
      const savedAchievements =
        JSON.parse(localStorage.getItem("userAchievements")) || [];
      setUserAchievements(savedAchievements);
      setLoading(false);
    };

    loadUserAchievements();
  }, [navigate]);

  // Hàm xử lý khi avatar thay đổi
  const handleAvatarChange = (updatedUser) => {
    setUser(updatedUser);
  };

  // Hàm đăng xuất
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Phân loại thành tựu theo danh mục
  const categorizedAchievements = achievements.reduce((acc, achievement) => {
    if (!acc[achievement.category]) {
      acc[achievement.category] = [];
    }
    acc[achievement.category].push(achievement);
    return acc;
  }, {});

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-yellow-300 mx-auto"></div>
          <p className="mt-4 text-xl text-amber-100">Đang tải thông tin...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pt-20 pb-10 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply",
      }}
    >
      {/* Hiệu ứng ánh sáng nền */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-teal-500 rounded-full filter blur-[150px] opacity-20 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 bg-emerald-500 rounded-full filter blur-[150px] opacity-15 animate-float"></div>
      </div>
      {/* Avatar Selector Modal */}
      {showAvatarSelector && (
        <AvatarSelector
          onClose={() => setShowAvatarSelector(false)}
          onAvatarChange={handleAvatarChange}
        />
      )}

      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-2xl font-bold text-center text-teal-300 mb-6 animate-fade-in-down">
          Hồ Sơ Người Dùng
        </h1>
        <div className="flex flex-col lg:flex-row gap-6 max-w-5xl mx-auto">
          {/* Phần thông tin người dùng */}
          <div className="lg:w-2/5">
            <div className="bg-gradient-to-br from-[#0d4b6a] to-[#0f766e] p-5 rounded-xl shadow-xl border border-teal-700 bg-opacity-80 backdrop-blur-sm transform transition-all duration-300 hover:shadow-teal-500/20 hover:scale-[1.01] animate-fade-in">
              <h2 className="text-xl font-bold mb-4 text-teal-300 text-center">
                Thông tin người dùng
              </h2>
              <div className="flex flex-col items-center mb-8 justify-center">
                <div className="relative group mb-4">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full opacity-75 group-hover:opacity-100 blur-sm transition duration-300"></div>
                  <img
                    src={user.avatar}
                    alt="Avatar"
                    className="relative w-24 h-24 rounded-full border-2 border-teal-300 cursor-pointer transition-all duration-300 group-hover:opacity-90 object-cover"
                    onClick={() => setShowAvatarSelector(true)}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                    onClick={() => setShowAvatarSelector(true)}
                  >
                    <span className="text-sm font-medium text-white bg-black bg-opacity-60 px-3 py-1 rounded-full">
                      Đổi Avatar
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h2 className="text-xl font-bold text-teal-300 mb-1">
                    {user.fullName}
                  </h2>
                  <p className="text-emerald-100 bg-teal-800/30 px-3 py-1 rounded-full inline-block text-sm">
                    {user.level}
                  </p>
                </div>
              </div>

              <div className="mb-6 bg-teal-900/30 p-3 rounded-lg border border-teal-700/50">
                <h3 className="text-base font-semibold text-teal-300 mb-3 text-center border-b border-teal-300/30 pb-2">
                  Tiến Trình Tu Luyện
                </h3>
                <p className="text-emerald-100 mb-2 text-center text-sm">
                  Cấp độ hiện tại:{" "}
                  <span className="text-teal-300 font-bold ml-2 bg-teal-800/40 px-2 py-0.5 rounded-full text-sm">
                    {user.level}
                  </span>
                </p>
                <div className="w-full bg-gray-800 rounded-full h-4 p-0.5 mb-1 shadow-inner">
                  <div
                    className="bg-gradient-to-r from-teal-600 via-emerald-500 to-green-400 h-3 rounded-full relative overflow-hidden transition-all duration-1000 ease-out shadow-lg"
                    style={{ width: `${user.progress}%` }}
                  >
                    <div className="absolute inset-0 bg-white opacity-20 overflow-hidden rounded-full">
                      <div className="h-full w-20 bg-white/30 blur-md transform -skew-x-30 animate-shimmer"></div>
                    </div>
                  </div>
                </div>
                <p className="text-emerald-100 mt-2 text-right font-medium text-sm">
                  <span className="text-teal-300 font-bold">
                    {user.progress}%
                  </span>{" "}
                  đến cấp độ tiếp theo
                </p>
              </div>

              <div className="mb-6">
                <div className="bg-teal-900/30 p-4 rounded-lg border border-teal-700/50 shadow-inner">
                  <h3 className="text-base font-semibold text-teal-300 mb-3 text-center border-b border-teal-300/30 pb-2">
                    Nhiệm Vụ Tu Luyện
                  </h3>
                  <ul className="text-emerald-100 space-y-2 text-sm">
                    {user.tasks && user.tasks.length > 0 ? (
                      user.tasks.map((task, index) => (
                        <li
                          key={index}
                          className="flex items-start p-2 rounded-lg hover:bg-teal-800/20 transition-colors duration-200"
                        >
                          <span className="mr-3 text-xl">📜</span>
                          <span className="text-amber-100">{task}</span>
                        </li>
                      ))
                    ) : (
                      <li className="text-center py-3 italic text-emerald-100/70 text-sm">
                        Không có nhiệm vụ nào
                      </li>
                    )}
                  </ul>
                </div>
              </div>

              <div className="mt-auto w-full flex justify-center space-x-4">
                <Link
                  to="/gioi-thieu"
                  className="px-4 py-2 bg-gradient-to-r from-teal-600 to-emerald-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-0.5 font-medium flex items-center justify-center text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                  </svg>
                  Trang chủ
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gradient-to-r from-rose-600 to-rose-700 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/30 hover:-translate-y-0.5 font-medium flex items-center justify-center text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V7.414l-5-5H3zm7 5a1 1 0 10-2 0v4.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 12.586V8z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Đăng xuất
                </button>
              </div>
            </div>
          </div>

          {/* Phần thành tựu */}
          <div className="lg:w-3/5">
            <div className="bg-gradient-to-br from-[#0d4b6a] to-[#0f766e] p-4 rounded-xl shadow-xl border border-teal-700 bg-opacity-80 backdrop-blur-sm transform transition-all duration-300 hover:shadow-teal-500/20 hover:scale-[1.01] animate-fade-in delay-100">
              <div className="flex justify-center items-center mb-8">
                <h2 className="text-xl font-bold text-teal-300 relative inline-block">
                  <span className="relative z-10">Thành Tựu Của Bạn</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                </h2>
              </div>

              {Object.keys(categorizedAchievements).length > 0 ? (
                <div className="space-y-6">
                  {Object.entries(categorizedAchievements).map(
                    ([category, categoryAchievements]) => (
                      <div key={category} className="mb-6">
                        <h3 className="text-lg font-semibold text-teal-300 mb-4 text-center relative inline-block">
                          <span className="relative z-10 bg-gradient-to-r from-teal-200 via-teal-300 to-teal-200 bg-clip-text text-transparent">
                            {category}
                          </span>
                          <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {categoryAchievements.map((achievement) => {
                            const isUnlocked = userAchievements.includes(
                              achievement.id
                            );
                            return (
                              <div
                                key={achievement.id}
                                className={`p-3 rounded-lg border ${
                                  isUnlocked
                                    ? "border-emerald-500 bg-emerald-900/20"
                                    : "border-gray-600 bg-gray-800/40"
                                } transition-all duration-300 hover:shadow-lg ${
                                  isUnlocked
                                    ? "hover:shadow-emerald-500/20 hover:-translate-y-1"
                                    : "hover:shadow-teal-500/10 hover:-translate-y-0.5"
                                }`}
                              >
                                <div className="flex items-center">
                                  <div className="mr-4">
                                    {isUnlocked ? (
                                      <div className="relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 to-teal-600 rounded-full opacity-70 group-hover:opacity-100 blur-sm transition duration-300"></div>
                                        <img
                                          src={achievement.icon}
                                          alt={achievement.name}
                                          className="relative w-12 h-12 object-contain p-1 bg-emerald-900/30 rounded-full border border-emerald-500/50 transform transition-transform duration-300 group-hover:scale-110"
                                        />
                                      </div>
                                    ) : (
                                      <div className="relative w-12 h-12 flex items-center justify-center bg-gray-800 rounded-full border border-gray-600 shadow-inner">
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          className="h-7 w-7 text-gray-500 opacity-80"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          stroke="currentColor"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                          />
                                        </svg>
                                      </div>
                                    )}
                                  </div>
                                  <div>
                                    <h4
                                      className={`font-bold text-sm ${
                                        isUnlocked
                                          ? "text-teal-300"
                                          : "text-gray-400"
                                      }`}
                                    >
                                      {achievement.name}
                                    </h4>
                                    <p
                                      className={`text-xs ${
                                        isUnlocked
                                          ? "text-emerald-100"
                                          : "text-gray-500"
                                      }`}
                                    >
                                      {achievement.description}
                                    </p>
                                    <div className="mt-2">
                                      <span
                                        className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                                          isUnlocked
                                            ? "bg-green-900/70 text-green-300 border border-green-700"
                                            : "bg-gray-800 text-gray-400 border border-gray-700"
                                        }`}
                                      >
                                        {isUnlocked
                                          ? "Đã mở khóa"
                                          : "Chưa mở khóa"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className="text-center py-12 px-4">
                  <div className="mb-8">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 mx-auto text-amber-300/50 mb-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                    <p className="text-emerald-100 text-base mb-5">
                      Bạn chưa có thành tựu nào. Hãy bắt đầu luyện tập để mở
                      khóa thành tựu!
                    </p>
                  </div>
                  <Link
                    to="/tu-luyen"
                    className="px-6 py-2.5 bg-gradient-to-r from-teal-600 to-emerald-500 text-white rounded-lg hover:from-teal-700 hover:to-emerald-600 transition-all duration-300 shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1 font-medium inline-flex items-center text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Bắt đầu luyện tập
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
