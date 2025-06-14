import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background.jpg";

const Choose = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#2a1b3d",
        filter: "brightness(0.8)",
      }}
    >
      {/* Overlay để giảm độ chói của background */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}
      <div className="w-full max-w-4xl px-6 py-8 relative z-10">
        {/* Tiêu đề */}
        <div className="text-center mb-16">
          <h1
            className="text-5xl font-bold text-yellow-300 flex items-center justify-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
            style={{
              marginBottom: "110px",
            }}
          >
            <span className="text-purple-300 mr-4 text-4xl">🔮</span>
            Chọn Chế Độ Tu Luyện
          </h1>
        </div>

        {/* Các lựa chọn */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Tu luyện cơ bản */}
          <Link
            to="/tu-luyen/co-ban"
            className="bg-gradient-to-b from-[#f8f4e3] to-[#e8d1a2] rounded-xl p-10 shadow-xl border-4 border-amber-600 hover:shadow-amber-600/50 hover:scale-105 transition-all duration-300 flex flex-col items-center transform hover:-translate-y-2"
          >
            <div className="text-center">
              <div className="text-6xl mb-6">📘</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-5">
                Tu luyện cơ bản
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                Luyện các bài tập ngữ pháp, từ vựng, dịch nghĩa.
              </p>
            </div>
          </Link>

          {/* Huấn luyện */}
          <Link
            to="/tu-luyen/huan-luyen"
            className="bg-gradient-to-b from-[#f8f4e3] to-[#e8d1a2] rounded-xl p-10 shadow-xl border-4 border-amber-600 hover:shadow-amber-600/50 hover:scale-105 transition-all duration-300 flex flex-col items-center transform hover:-translate-y-2"
          >
            <div className="text-center">
              <div className="text-6xl mb-6">🏋️</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-5">
                Huấn luyện
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                Tham gia bài tập đặc biệt do Giáo viên của bạn giao. Nhiệm vụ có
                thưởng!
              </p>
            </div>
          </Link>

          {/* Tạo câu hỏi luyện tập lại */}
          <Link
            to="/tu-luyen/luyen-tap-lai"
            className="bg-gradient-to-b from-[#f8f4e3] to-[#e8d1a2] rounded-xl p-10 shadow-xl border-4 border-amber-600 hover:shadow-amber-600/50 hover:scale-105 transition-all duration-300 flex flex-col items-center transform hover:-translate-y-2"
          >
            <div className="text-center">
              <div className="text-6xl mb-6">🔄</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-5">
                Luyện tập lại
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                Ôn tập lại những câu hỏi bạn đã làm sai trước đây để củng cố kiến thức.
              </p>
            </div>
          </Link>

          {/* Tạo câu hỏi mới */}
          <Link
            to="/tu-luyen/tao-cau-hoi"
            className="bg-gradient-to-b from-[#f8f4e3] to-[#e8d1a2] rounded-xl p-10 shadow-xl border-4 border-amber-600 hover:shadow-amber-600/50 hover:scale-105 transition-all duration-300 flex flex-col items-center transform hover:-translate-y-2"
          >
            <div className="text-center">
              <div className="text-6xl mb-6">✏️</div>
              <h2 className="text-3xl font-bold text-gray-800 mb-5">
                Tạo câu hỏi
              </h2>
              <p className="text-xl text-gray-700 font-medium">
                Tạo câu hỏi luyện tập của riêng bạn để học tập hiệu quả hơn.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Choose;
