import React from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background/auth.png";
import trophyImage from "../../assets/practice/trophy.png";
import booksImage from "../../assets/practice/books.png";
import stationaryImage from "../../assets/practice/stationary-jar.png";

const PracticeGoal = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(25, 23, 82, 0.7)",
      }}
    >
      <div className="w-full max-w-6xl px-6 py-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white flex items-center justify-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            Choose Your Practice Goal
          </h1>
        </div>

        {/* Practice Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Self Practice */}
          <div className="bg-white/90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
            <Link to="/tu-luyen/choose-your-path">
              <div className="p-8 flex flex-col items-center">
                <img 
                  src={trophyImage} 
                  alt="Self Practice" 
                  className="w-32 h-32 object-contain mb-6" 
                />
                <h2 className="text-2xl font-bold text-[#2B003F] mb-3 text-center">
                  Self Practice
                </h2>
                <p className="text-gray-600 text-center">
                  Practice with questions to test your knowledge and improve your skills
                </p>
              </div>
            </Link>
          </div>

          {/* Review Practice */}
          <div className="bg-white/90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
            <Link to="/tu-luyen/luyen-tap-lai">
              <div className="p-8 flex flex-col items-center">
                <img 
                  src={booksImage} 
                  alt="Review Practice" 
                  className="w-32 h-32 object-contain mb-6" 
                />
                <h2 className="text-2xl font-bold text-[#2B003F] mb-3 text-center">
                  Review Practice
                </h2>
                <p className="text-gray-600 text-center">
                  Review previous exercises and strengthen your understanding
                </p>
              </div>
            </Link>
          </div>

          {/* Create Exercises */}
          <div className="bg-white/90 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 cursor-pointer">
            <Link to="/tu-luyen/tao-cau-hoi">
              <div className="p-8 flex flex-col items-center">
                <img 
                  src={stationaryImage} 
                  alt="Create Exercises" 
                  className="w-32 h-32 object-contain mb-6" 
                />
                <h2 className="text-2xl font-bold text-[#2B003F] mb-3 text-center">
                  Create Exercises
                </h2>
                <p className="text-gray-600 text-center">
                  Create your own exercises and contribute to the learning community
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* Navigation Button */}
        <div className="flex justify-center mt-16">
          <Link
            to="/tu-luyen"
            className="bg-[#2B003F] hover:bg-[#3D0059] text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-purple-600/50 hover:scale-105 transition-all duration-300 flex items-center"
          >
            <span className="mr-2 text-xl">⬅️</span>
            <span className="text-lg">Back to Cultivation</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PracticeGoal;