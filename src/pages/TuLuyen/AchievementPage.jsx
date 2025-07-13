import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background/auth.png";
import achievements from "../../../data/achievement.js";

const AchievementPage = () => {
  const [userAchievements, setUserAchievements] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lấy thành tựu của người dùng từ localStorage
    const loadUserAchievements = () => {
      setLoading(true);
      const savedAchievements = JSON.parse(localStorage.getItem("userAchievements")) || [];
      setUserAchievements(savedAchievements);
      setLoading(false);
    };

    loadUserAchievements();
  }, []);

  // Phân loại thành tựu theo danh mục
  const categorizedAchievements = achievements.reduce((acc, achievement) => {
    if (!acc[achievement.category]) {
      acc[achievement.category] = [];
    }
    acc[achievement.category].push(achievement);
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-900">
        <p className="text-white text-xl">Đang tải thông tin...</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-10 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="w-full max-w-6xl px-6 py-8 relative z-10">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-yellow-300 flex items-center justify-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            <span className="text-blue-300 mr-4 text-4xl">🏆</span>
            Thành Tựu Của Bạn
          </h1>
          <p className="text-xl text-purple-200 mt-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            Những thành tựu bạn đã đạt được trong hành trình tu luyện
          </p>
        </div>

        {/* Nút quay lại */}
        <div className="mb-6">
          <Link
            to="/tu-luyen"
            className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all duration-300 inline-flex items-center"
          >
            <span className="mr-2">⬅️</span>
            Quay lại
          </Link>
        </div>

        {/* Hiển thị thành tựu theo danh mục */}
        {Object.keys(categorizedAchievements).length > 0 ? (
          Object.entries(categorizedAchievements).map(([category, categoryAchievements]) => (
            <div key={category} className="mb-10">
              <h2 className="text-3xl font-bold text-blue-300 mb-6 border-b border-blue-500 pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryAchievements.map((achievement) => {
                  const isUnlocked = userAchievements.includes(achievement.id);
                  return (
                    <div
                      key={achievement.id}
                      className={`bg-gray-800/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border ${isUnlocked ? "border-yellow-500" : "border-gray-700"} transition-all duration-300 hover:shadow-lg ${isUnlocked ? "hover:shadow-yellow-500/20" : "hover:shadow-blue-500/10"}`}
                    >
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className={`w-16 h-16 rounded-full flex items-center justify-center mr-4 ${isUnlocked ? "bg-yellow-500/20" : "bg-gray-700/50"}`}>
                            {isUnlocked ? (
                              <img src={achievement.image} alt={achievement.name} className="w-12 h-12" />
                            ) : (
                              <span className="text-3xl text-gray-500">🔒</span>
                            )}
                          </div>
                          <div>
                            <h3 className={`text-xl font-bold ${isUnlocked ? "text-yellow-300" : "text-gray-400"}`}>
                              {achievement.name}
                            </h3>
                            <p className={`text-sm ${isUnlocked ? "text-gray-300" : "text-gray-500"}`}>
                              {isUnlocked ? achievement.description : "Thành tựu chưa mở khóa"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="bg-gray-800/70 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gray-700 p-8 text-center">
            <div className="text-6xl mb-6">🏆</div>
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">
              Chưa có thành tựu nào!
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Hãy tiếp tục luyện tập để đạt được các thành tựu.
            </p>
            <Link
              to="/tu-luyen/practice-goal"
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-400 transition-all duration-300 shadow-md hover:shadow-purple-500/50 inline-block"
            >
              Bắt đầu luyện tập
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AchievementPage;