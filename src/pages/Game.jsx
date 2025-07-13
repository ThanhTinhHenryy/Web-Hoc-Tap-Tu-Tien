import React from "react";
import { Link } from "react-router-dom";
import { gameBlocks } from "../../data/gameBlock";

const Game = () => {
  return (
    <div
      className="min-h-screen bg-gray-100 pt-20 pb-10 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}assets/game/backgrounds/forest-bgbackup.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 mt-4">
          Trò chơi học tiếng Anh
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Trò chơi từ vựng */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">
                Trò chơi từ vựng
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Học từ vựng tiếng Anh thông qua trò chơi ghép chữ với 5 cấp độ
                khác nhau.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {gameBlocks.map((level) => (
                  <div key={level.id} className="flex items-center">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/game/levels/level${level.level}.jpg`}
                      alt={`Level ${level.level}`}
                      className="w-12 h-12 rounded-md object-cover"
                    />
                    <span className="ml-1 text-sm text-gray-500">
                      {level.level}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/game/vocabulary"
                className="block w-full text-center py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Chơi ngay
              </Link>
            </div>
          </div>

          {/* Trò chơi trí nhớ */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">
                Trò chơi trí nhớ
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Luyện trí nhớ và học từ vựng tiếng Anh thông qua trò chơi lật
                thẻ bài.
              </p>
              <Link
                to="/thi-luyen"
                className="block w-full text-center py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300"
              >
                Chơi ngay
              </Link>
            </div>
          </div>

          {/* Trò chơi từ vựng khối */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="h-48 bg-gradient-to-r from-yellow-500 to-orange-600 flex items-center justify-center">
              <h3 className="text-2xl font-bold text-white">
                Trò chơi từ vựng khối
              </h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">
                Xây dựng từ vựng tiếng Anh bằng cách kéo và thả các khối chữ
                cái.
              </p>
              <Link
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Tính năng này đang được phát triển!");
                }}
                className="block w-full text-center py-2 px-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-colors duration-300"
              >
                Sắp ra mắt
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-amber-400 mb-4">
            Lợi ích của trò chơi học tiếng Anh
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-blue-600 text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-semibold mb-2">Tăng cường trí nhớ</h3>
              <p className="text-gray-600">
                Các trò chơi giúp bạn ghi nhớ từ vựng lâu hơn thông qua việc lặp
                lại và liên kết.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-600 text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Học mà chơi</h3>
              <p className="text-gray-600">
                Biến việc học tiếng Anh thành hoạt động thú vị, giảm áp lực và
                tăng động lực học tập.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-purple-600 text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">Theo dõi tiến độ</h3>
              <p className="text-gray-600">
                Dễ dàng theo dõi sự tiến bộ của bạn qua các cấp độ và thành tích
                đạt được.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
