import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background.jpg";
import exerciseQuestions from "../../../data/exercises.js";

const CultivationLevels = () => {
  // Đếm số lượng câu hỏi cho mỗi tầng tu luyện
  const countQuestionsByLevel = (levelName) => {
    return exerciseQuestions.filter((q) => q.level === levelName).length;
  };

  // Danh sách các tầng tu luyện
  const levels = [
    {
      id: 0,
      name: "Phàm Nhân",
      description: "Khai diễu Ngự Đạo Tu luyện cơ bản",
      icon: "🍃",
      color: "from-green-600 to-green-500",
      textColor: "text-green-300",
    },
    {
      id: 1,
      name: "Luyện Khí",
      description: "Ngự pháp, cân cơ bản",
      icon: "💨",
      color: "from-blue-600 to-blue-500",
      textColor: "text-blue-300",
    },
    {
      id: 2,
      name: "Trúc Cơ",
      description: "Vận & Sức hiệu năng cao",
      icon: "🌀",
      color: "from-purple-600 to-purple-500",
      textColor: "text-purple-300",
    },
    {
      id: 3,
      name: "Kim Đan",
      description: "Luyện thể & Rung Ảnh thuật",
      icon: "⚡",
      color: "from-yellow-600 to-yellow-500",
      textColor: "text-yellow-300",
    },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply",
      }}
    >
      {/* Overlay để tăng độ tương phản của background */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      <div className="w-full max-w-6xl px-6 py-8 relative z-10">
        {/* Tiêu đề */}
        <div className="text-center mb-16" style={{ marginBottom: 20 }}>
          <h1 className="text-5xl font-bold text-yellow-300 flex items-center justify-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            <span className="text-green-300 mr-4 text-4xl">🧙‍♂️</span>
            Các Tầng Tu Luyện
          </h1>
          <p className="text-xl text-purple-200 mt-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            Hồi Linh Chân Nhân - Con đường chữa lành
          </p>
        </div>

        {/* Danh sách các tầng tu luyện */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {levels.map((level) => (
            <Link
              key={level.id}
              to={`/tu-luyen/co-ban/healing-cultivator/exercises/${level.id}`}
              className="bg-gray-400/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 h-64 flex flex-col items-center justify-center text-center border border-gray-300/30"
            >
              <div className="p-6 flex flex-col items-center justify-center h-full w-full">
                <div className={`text-6xl mb-4 ${level.textColor}`}>
                  {level.icon}
                </div>
                <h2 className="text-2xl font-bold mb-2 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  {level.name}
                </h2>
                <p className="text-sm text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                  {level.description}
                </p>
                <div className="mt-4 flex flex-col items-center">
                  <span
                    className={`bg-gradient-to-r ${level.color} text-white px-4 py-1 rounded-full text-sm font-medium inline-block mb-2`}
                  >
                    Xem bài tập
                  </span>
                  <span className="text-xs text-gray-300">
                    {countQuestionsByLevel(level.name)} câu hỏi trắc nghiệm
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Nút điều hướng */}
        <div className="flex justify-between mt-16">
          <Link
            to="/tu-luyen/co-ban"
            className="bg-gradient-to-r from-amber-700 to-amber-600 text-yellow-100 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-amber-600/50 hover:scale-105 transition-all duration-300 border-2 border-amber-500 flex items-center"
            style={{ marginTop: 20 }}
          >
            <span className="mr-2 text-xl">⬅️</span>
            <span className="text-lg">Quay lại</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CultivationLevels;
