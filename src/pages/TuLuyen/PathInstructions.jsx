import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/background/auth.png";

const PathInstructions = () => {
  const { pathId } = useParams();
  const navigate = useNavigate();

  // Map pathId to path names
  const pathNames = {
    medical: "Medical English",
    business: "Business English",
    tourism: "Tourism & Hospitality",
    science: "Science & Tech",
    education: "Education",
    legal: "Legal English",
  };

  // Handle start quiz button click
  const handleStartQuiz = () => {
    navigate(`/tu-luyen/${pathId}`);
  };

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
      <div className="w-full max-w-4xl px-6 py-8 relative z-10">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center justify-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {pathNames[pathId] || "English"} Quiz Instructions
          </h1>
        </div>

        {/* Instructions Card */}
        <div className="bg-white/90 rounded-lg shadow-xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#2B003F] mb-4 text-center">
            How to Complete This Quiz
          </h2>

          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="bg-[#2B003F] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                1
              </div>
              <p>
                <span className="font-semibold">
                  Read each question carefully
                </span>{" "}
                - Take your time to understand what is being asked.
              </p>
            </div>

            <div className="flex items-start">
              <div className="bg-[#2B003F] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                2
              </div>
              <p>
                <span className="font-semibold">Select the best answer</span> -
                Choose the option you believe is correct.
              </p>
            </div>

            <div className="flex items-start">
              <div className="bg-[#2B003F] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                3
              </div>
              <p>
                <span className="font-semibold">Review feedback</span> - After
                selecting an answer, you'll see if it was correct and an
                explanation.
              </p>
            </div>

            <div className="flex items-start">
              <div className="bg-[#2B003F] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                4
              </div>
              <p>
                <span className="font-semibold">Use hints if needed</span> - If
                you're stuck, you can click the hint button for additional help.
              </p>
            </div>

            <div className="flex items-start">
              <div className="bg-[#2B003F] text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 mr-3">
                5
              </div>
              <p>
                <span className="font-semibold">Complete all questions</span> -
                There are 5 questions in this quiz. Try to answer all of them.
              </p>
            </div>
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="font-bold text-[#2B003F] mb-2">Tips for Success:</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-700">
              <li>Read all options before making your selection</li>
              <li>
                Pay attention to the explanations to improve your understanding
              </li>
              <li>Don't rush - take your time with each question</li>
              <li>Focus on learning rather than just getting a high score</li>
            </ul>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleStartQuiz}
            className="px-8 py-3 rounded-full font-bold bg-[#2B003F] text-white hover:bg-[#3D0059] transition-all duration-300 hover:scale-105 border-2 border-[#2B003F] shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <span className="text-lg">Start Quiz</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>

          <Link
            to="/tu-luyen/choose-your-path"
            className="px-8 py-3 rounded-full font-bold bg-white text-[#2B003F] border-2 border-[#2B003F] hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <span className="text-lg">Go Back</span>
          </Link>
        </div>
      </div>

      {/* Back button at the bottom left */}
      {/* <div className="w-full max-w-4xl px-4 sm:px-6 mt-8 flex justify-start">
        <Link
          to="/tu-luyen/choose-your-path"
          className="bg-white text-[#2B003F] font-bold py-1.5 px-4 sm:py-2 sm:px-5 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-1.5 border border-[#2B003F]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-base sm:text-lg font-bold">BACK TO PATHS</span>
        </Link>
      </div> */}
    </div>
  );
};

export default PathInstructions;
