import React, { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background.jpg";
import trainingData from "../../../data/baiTapCuaGiaoVien";

const PhysicalTraining = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  // Filter physical exercises
  const physicalExercises = trainingData.find(
    (category) => category.type === "physical"
  );

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleBackClick = () => {
    setSelectedExercise(null);
  };

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
            <span className="text-green-300 mr-4 text-4xl">💪</span>
            Physical Cultivation
          </h1>
          <p className="text-xl text-gray-200 mt-4 max-w-3xl mx-auto">
            Strengthen your body to support your spiritual journey
          </p>
        </div>

        {selectedExercise ? (
          <div className="bg-gray-900/80 rounded-xl p-8 shadow-2xl border border-green-500/30">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold text-yellow-300">
                {selectedExercise.name}
              </h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm bg-green-700 text-white px-3 py-1 rounded-full">
                  Level: {physicalExercises.level}
                </span>
                <span className="text-sm bg-green-700 text-white px-3 py-1 rounded-full">
                  Difficulty: {selectedExercise.difficulty}
                </span>
              </div>
            </div>

            <p className="text-gray-300 mb-6 text-lg">
              {selectedExercise.description}
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-green-300 mb-3">
                Steps to Follow:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-gray-200">
                {selectedExercise.steps.map((step, index) => (
                  <li key={index} className="pl-2">
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-xl font-semibold text-green-300 mb-3">
                  Duration:
                </h3>
                <p className="text-gray-200">{selectedExercise.duration}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-300 mb-3">
                  Benefits:
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-200">
                  {selectedExercise.benefits.map((benefit, index) => (
                    <li key={index} className="pl-2">
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-between mt-8">
              <button
                onClick={handleBackClick}
                className="bg-gradient-to-r from-amber-700 to-amber-600 text-yellow-100 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-amber-600/50 hover:scale-105 transition-all duration-300 border-2 border-amber-500 flex items-center"
              >
                <span className="mr-2 text-xl">⬅️</span>
                <span className="text-lg">Back to List</span>
              </button>
              <button className="bg-gradient-to-r from-green-700 to-green-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-green-600/50 hover:scale-105 transition-all duration-300 border-2 border-green-500 flex items-center">
                <span className="text-lg">Start Physical Training</span>
                <span className="ml-2 text-xl">💪</span>
              </button>
            </div>
          </div>
        ) : (
          <>
            {/* Exercise List */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-yellow-300 mb-6 flex items-center">
                <span className="mr-3">💪</span>
                {physicalExercises.title}
              </h2>
              <p className="text-gray-300 mb-8 text-lg">
                {physicalExercises.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {physicalExercises.exercises.map((exercise, index) => (
                <div
                  key={index}
                  onClick={() => handleExerciseClick(exercise)}
                  className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 h-64 cursor-pointer"
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${exercise.imageUrl})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex justify-between items-center mb-2">
                      <h2 className="text-2xl font-bold drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
                        {exercise.name}
                      </h2>
                      <span className="bg-green-700/80 text-white text-xs px-2 py-1 rounded-full">
                        {exercise.difficulty}
                      </span>
                    </div>
                    <p className="text-sm text-gray-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] line-clamp-2">
                      {exercise.description}
                    </p>
                    <div className="mt-3 flex items-center space-x-2">
                      <span className="text-xs bg-amber-700/80 text-white px-2 py-1 rounded-full">
                        {exercise.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-16">
              <Link
                to="/tu-luyen/huan-luyen/energy"
                className="bg-gradient-to-r from-blue-700 to-blue-600 text-yellow-100 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-blue-600/50 hover:scale-105 transition-all duration-300 border-2 border-blue-500 flex items-center"
              >
                <span className="mr-2 text-xl">⚡</span>
                <span className="text-lg">Energy Training</span>
              </Link>
              <Link
                to="/tu-luyen/huan-luyen"
                className="bg-gradient-to-r from-amber-700 to-amber-600 text-yellow-100 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-amber-600/50 hover:scale-105 transition-all duration-300 border-2 border-amber-500 flex items-center"
              >
                <span className="text-lg">Back to Training</span>
                <span className="ml-2 text-xl">⬅️</span>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PhysicalTraining;
