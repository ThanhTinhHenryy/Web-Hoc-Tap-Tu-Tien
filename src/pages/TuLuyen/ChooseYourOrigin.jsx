import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background.jpg";
import origin1 from "../../assets/origin-background/origin-1.jpg";
import origin2 from "../../assets/origin-background/origin-2.jpg";
import origin3 from "../../assets/origin-background/origin-3.jpg";
import origin4 from "../../assets/origin-background/origin-4.jpg";
import origin5 from "../../assets/origin-background/origin-5.jpg";
import origin6 from "../../assets/origin-background/origin-6.jpg";

const ChooseYourOrigin = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#2a1b3d",
        filter: "brightness(0.9)",
      }}
    >
      {/* Overlay để tăng độ tương phản của background */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      <div className="w-full max-w-6xl px-6 py-8 relative z-10">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-yellow-300 flex items-center justify-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            <span className="text-purple-300 mr-4 text-4xl">🧙‍♂️</span>
            Choose Your Origin
          </h1>
        </div>

        {/* Các lựa chọn nguồn gốc */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Terrain Scout */}
          <Link
            to="/tu-luyen/co-ban/terrain-scout"
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 h-64"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${origin1})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Terrain Scout
              </h2>
              <p className="text-lg text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                Địa Linh Chân Nhân
              </p>
            </div>
          </Link>

          {/* Sword Cultivator */}
          <Link
            to="/tu-luyen/co-ban/sword-cultivator"
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 h-64"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${origin2})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Sword Cultivator
              </h2>
              <p className="text-lg text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                Chiến Linh Chân Nhân
              </p>
            </div>
          </Link>

          {/* Healing Cultivator */}
          <Link
            to="/tu-luyen/co-ban/healing-cultivator"
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 h-64"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${origin3})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Healing Cultivator
              </h2>
              <p className="text-lg text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                Hồi Linh Chân Nhân
              </p>
              <div className="mt-2 bg-green-600/70 px-3 py-1 rounded-full inline-block">
                <span className="text-sm font-medium">
                  Xem các tầng tu luyện
                </span>
              </div>
            </div>
          </Link>

          {/* Spirit Finance Cultivator */}
          <Link
            to="/tu-luyen/co-ban/spirit-finance"
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 h-64"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${origin4})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Spirit Finance Cultivator
              </h2>
              <p className="text-lg text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                Tài Pháp Hành Giả
              </p>
            </div>
          </Link>

          {/* Enlightenment Cultivator */}
          <Link
            to="/tu-luyen/co-ban/enlightenment"
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 h-64"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${origin5})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Enlightenment Cultivator
              </h2>
              <p className="text-lg text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                Vân Linh Chân Nhân
              </p>
            </div>
          </Link>

          {/* Biolife Cultivator */}
          <Link
            to="/tu-luyen/co-ban/biolife"
            className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 h-64"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${origin6})` }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl font-bold mb-2 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                Biolife Cultivator
              </h2>
              <p className="text-lg text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                Sinh Diễn Chân Nhân
              </p>
            </div>
          </Link>
        </div>

        {/* Nút điều hướng */}
        <div className="flex justify-between mt-16">
          <div className="flex space-x-4">
            <Link
              to="/tu-luyen"
              className="bg-gradient-to-r from-amber-700 to-amber-600 text-yellow-100 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-amber-600/50 hover:scale-105 transition-all duration-300 border-2 border-amber-500 flex items-center"
            >
              <span className="mr-2 text-xl">⬅️</span>
              <span className="text-lg">Quay lại</span>
            </Link>
            <Link
              to="/tu-luyen/huan-luyen"
              className="bg-gradient-to-r from-green-700 to-green-600 text-yellow-100 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-green-600/50 hover:scale-105 transition-all duration-300 border-2 border-green-500 flex items-center"
            >
              <span className="mr-2 text-xl">🏋️‍♂️</span>
              <span className="text-lg">Huấn luyện</span>
            </Link>
          </div>
          <Link
            to="/tu-luyen/co-ban/healing-cultivator"
            className="bg-gradient-to-r from-purple-800 to-purple-600 text-yellow-100 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-purple-600/50 hover:scale-105 transition-all duration-300 border-2 border-purple-500 flex items-center"
          >
            <span className="text-lg">Tiếp tục</span>
            <span className="ml-2 text-xl">➡️</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseYourOrigin;
