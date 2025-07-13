import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import pathQuestions from "../../data/pathQuestion.js";
import backgroundImage from "../../assets/background/auth.png";

const PathQuestions = () => {
  const { pathId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Map route parameter to question set key
  const pathToQuestionSet = {
    medical: "medicalEnglish",
    business: "businessEnglish",
    tourism: "tourismHospitality",
    science: "scienceTech",
    education: "education",
    legal: "legalEnglish",
  };

  // Map for path display names
  const pathDisplayNames = {
    medical: "Medical English",
    business: "Business English",
    tourism: "Tourism & Hospitality",
    science: "Science & Technology",
    education: "Education",
    legal: "Legal English",
  };

  useEffect(() => {
    // Get the appropriate question set based on the path
    const questionSetKey = pathToQuestionSet[pathId];
    if (questionSetKey && pathQuestions[questionSetKey]) {
      setQuestions(pathQuestions[questionSetKey]);
    }
    // Reset state when path changes
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowHint(false);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  }, [pathId]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    // Update score if answer is correct
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question or complete quiz
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowHint(false);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowHint(false);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation);
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Loading questions...
          </h2>
          <p className="text-gray-600">
            If questions don't load, the selected path may not have questions
            available.
          </p>
          <Link
            to="/tu-luyen/choose-your-path"
            className="mt-6 inline-block bg-[#2B003F] text-white px-6 py-2 rounded-full hover:bg-[#3D0059] transition-colors duration-300"
          >
            Back to Paths
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(25, 23, 82, 0.7)",
      }}
    >
      <div className="w-full max-w-4xl px-4 sm:px-6 py-8 relative z-10">
        {/* Title will be positioned at the top without the back button */}

        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {pathDisplayNames[pathId]} Quiz
          </h1>
          {!quizCompleted && (
            <p className="text-white mt-2">
              Question {currentQuestionIndex + 1} of {questions.length}
            </p>
          )}
        </div>

        {!quizCompleted ? (
          <div className="bg-white/90 rounded-lg shadow-xl p-6 sm:p-8">
            {/* Question */}
            <h2 className="text-xl sm:text-2xl font-bold text-[#2B003F] mb-6">
              {currentQuestion.question}
            </h2>

            {/* Answer options */}
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                    selectedAnswer === index
                      ? selectedAnswer === currentQuestion.correctAnswer
                        ? "bg-green-100 border-2 border-green-500"
                        : "bg-red-100 border-2 border-red-500"
                      : "bg-gray-100 hover:bg-gray-200 border-2 border-transparent"
                  }`}
                  disabled={selectedAnswer !== null}
                >
                  <span className="font-medium">
                    {String.fromCharCode(65 + index)}.
                  </span>{" "}
                  {option}
                </button>
              ))}
            </div>

            {/* Hint and Explanation */}
            <div className="space-y-4 mb-6">
              {/* Hint button and content */}
              <div>
                <button
                  onClick={toggleHint}
                  className="text-[#2B003F] underline font-medium focus:outline-none"
                >
                  {showHint ? "Hide Hint" : "Show Hint"}
                </button>
                {showHint && (
                  <div className="mt-2 p-3 bg-blue-50 rounded-lg">
                    <p className="text-blue-800">
                      <span className="font-bold">Hint:</span>{" "}
                      {currentQuestion.hint}
                    </p>
                  </div>
                )}
              </div>

              {/* Explanation (only shown after answering) */}
              {selectedAnswer !== null && (
                <div>
                  <button
                    onClick={toggleExplanation}
                    className="text-[#2B003F] underline font-medium focus:outline-none"
                  >
                    {showExplanation ? "Hide Explanation" : "Show Explanation"}
                  </button>
                  {showExplanation && (
                    <div className="mt-2 p-3 bg-purple-50 rounded-lg">
                      <p className="text-purple-800">
                        <span className="font-bold">Explanation:</span>{" "}
                        {currentQuestion.explanation}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Next button (only enabled after selecting an answer) */}
            <div className="flex justify-center">
              <button
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                className={`px-8 py-3 rounded-full font-bold flex items-center gap-2 ${
                  selectedAnswer === null
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed border-2 border-gray-300"
                    : "bg-[#2B003F] text-white hover:bg-[#3D0059] transition-all duration-300 hover:scale-105 border-2 border-[#2B003F] shadow-lg hover:shadow-xl"
                }`}
              >
                {currentQuestionIndex < questions.length - 1 ? (
                  <>
                    <span className="text-lg">Next Question</span>
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
                  </>
                ) : (
                  <>
                    <span className="text-lg">Finish Quiz</span>
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
          </div>
        ) : (
          // Quiz completed screen
          <div className="bg-white/90 rounded-lg shadow-xl p-6 sm:p-8 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#2B003F] mb-4">
              Quiz Completed!
            </h2>
            <p className="text-xl mb-6">
              Your score: <span className="font-bold">{score}</span> out of{" "}
              <span className="font-bold">{questions.length}</span>
              <span className="block mt-2 text-lg">
                ({Math.round((score / questions.length) * 100)}%)
              </span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <button
                onClick={handleRestartQuiz}
                className="px-6 py-2 rounded-full font-bold bg-[#2B003F] text-white hover:bg-[#3D0059] transition-colors duration-300 flex items-center justify-center gap-2 border-2 border-[#2B003F]"
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Restart Quiz
              </button>
              <Link
                to="/tu-luyen/practice-goal"
                className="px-6 py-2 rounded-full font-bold bg-white text-[#2B003F] border-2 border-[#2B003F] hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
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
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
                Choose Another Path
              </Link>
            </div>
          </div>
        )}
      </div>
      
      {/* Back button at the bottom left */}
      <div className="w-full max-w-4xl px-4 sm:px-6 mt-8 flex justify-start">
        <Link
          to="/tu-luyen/practice-goal"
          className="bg-white text-[#2B003F] font-bold py-1.5 px-4 sm:py-2 sm:px-5 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-1.5 border border-[#2B003F]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span className="text-base sm:text-lg font-bold">BACK</span>
        </Link>
      </div>
    </div>
  );
};

export default PathQuestions;
