import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background.jpg";
import trainingData from "../../../data/baiTapCuaGiaoVien";

const Training = () => {

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
      <div className="w-full max-w-6xl px-6 py-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-yellow-300 flex items-center justify-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            <span className="text-amber-300 mr-4 text-4xl">✨</span>
            Cultivation Training
          </h1>
          <p className="text-xl text-gray-200 mt-4 max-w-3xl mx-auto">
            Master your cultivation path with specialized training exercises
          </p>
        </div>

        {/* Training Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {trainingData.map((category, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 h-80 cursor-pointer"
            >
              <Link to={`/tu-luyen/huan-luyen/${category.type}`}>
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: category.type === "mental" 
                      ? "url(https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)" 
                      : category.type === "energy" 
                      ? "url(https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)" 
                      : "url(https://images.unsplash.com/photo-1434596922112-19c563067271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)"
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-white">
                  <div className="text-center">
                    <div className="text-6xl mb-4">
                      {category.type === "mental" ? "🧠" : category.type === "energy" ? "⚡" : "💪"}
                    </div>
                    <h2 className="text-3xl font-bold mb-3 drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                      {category.title}
                    </h2>
                    <div className="w-16 h-1 bg-yellow-300 mx-auto mb-4"></div>
                    <p className="text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] mb-6 line-clamp-3">
                      {category.description}
                    </p>
                    <span 
                      className={`inline-block px-4 py-2 rounded-full font-semibold text-white ${category.type === "mental" ? "bg-purple-700" : category.type === "energy" ? "bg-blue-700" : "bg-green-700"} hover:scale-105 transition-transform duration-300`}
                    >
                      Explore {category.type === "mental" ? "Mental" : category.type === "energy" ? "Energy" : "Physical"} Training
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center mt-16">
          <Link
            to="/tu-luyen/co-ban"
            className="bg-gradient-to-r from-amber-700 to-amber-600 text-yellow-100 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-amber-600/50 hover:scale-105 transition-all duration-300 border-2 border-amber-500 flex items-center"
          >
            <span className="mr-2 text-xl">⬅️</span>
            <span className="text-lg">Back to Cultivation</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Training;
