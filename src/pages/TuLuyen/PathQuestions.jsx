import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import pathQuestions from "../../../data/pathQuestion.js";
import backgroundImage from "../../assets/background/auth.png";
import Confetti from "../../components/Confetti";
import AchievementBadge from "../../components/AchievementBadge";
import achievements from "../../../data/achievement.js";

const PathQuestions = () => {
  const { pathId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showHint, setShowHint] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  // Track user answers for each question
  const [userAnswers, setUserAnswers] = useState([]);
  const [earnedAchievements, setEarnedAchievements] = useState([]);
  const [showAchievementPopup, setShowAchievementPopup] = useState(false);

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
      const questionSet = pathQuestions[questionSetKey];
      setQuestions(questionSet);
      // Initialize userAnswers array with null values for each question
      setUserAnswers(new Array(questionSet.length).fill(null));
    }
    // Reset state when path changes
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowHint(false);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnsweredQuestions([]);
  }, [pathId]);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);

    // Track answered questions
    if (!answeredQuestions.includes(currentQuestionIndex)) {
      setAnsweredQuestions([...answeredQuestions, currentQuestionIndex]);
    }

    // Store user's answer for this question
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestionIndex] = answerIndex;
    setUserAnswers(newUserAnswers);
  };

  // Kiểm tra và cập nhật thành tựu
  const checkAndUpdateAchievements = (currentScore, totalQuestions) => {
    const newAchievements = [];
    const userAchievements = JSON.parse(localStorage.getItem("userAchievements")) || [];
    
    // Lấy số lần hoàn thành path với điểm số hoàn hảo
    let perfectPathCount = parseInt(localStorage.getItem("perfectPathCount") || "0");
    
    // Kiểm tra nếu đạt điểm tuyệt đối
    if (currentScore === totalQuestions) {
      perfectPathCount += 1;
      localStorage.setItem("perfectPathCount", perfectPathCount.toString());
    }
    
    // Kiểm tra các điều kiện thành tựu
    achievements.forEach(achievement => {
      if (!userAchievements.includes(achievement.id)) {
        let isEarned = false;
        
        switch (achievement.condition) {
          case "path_complete":
            isEarned = currentScore >= totalQuestions * 0.6;
            break;
          case "path_master":
            isEarned = currentScore === totalQuestions;
            break;
          default:
            break;
        }
        
        if (isEarned) {
          newAchievements.push(achievement);
          userAchievements.push(achievement.id);
        }
      }
    });
    
    // Lưu thành tựu vào localStorage
    if (newAchievements.length > 0) {
      localStorage.setItem("userAchievements", JSON.stringify(userAchievements));
      setEarnedAchievements(newAchievements);
      setShowAchievementPopup(true);
    }
  };

  const handleNextQuestion = () => {
    // Update score if answer is correct
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }

    // Move to next question or complete quiz
    if (currentQuestionIndex < questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);

      // Set selectedAnswer based on whether the next question has been answered
      if (answeredQuestions.includes(nextIndex)) {
        setSelectedAnswer(userAnswers[nextIndex]);
      } else {
        setSelectedAnswer(null);
      }

      setShowHint(false);
      setShowExplanation(false);
    } else {
      // Kiểm tra và cập nhật thành tựu khi hoàn thành bài kiểm tra
      checkAndUpdateAchievements(score + (selectedAnswer === currentQuestion.correctAnswer ? 1 : 0), questions.length);
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
    setAnsweredQuestions([]);
    // Reset all user answers
    setUserAnswers(new Array(questions.length).fill(null));
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
        <div className="text-center p-4 sm:p-6 bg-white rounded-lg shadow-lg max-w-sm mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
            Loading questions...
          </h2>
          <p className="text-gray-600">
            If questions don't load, the selected path may not have questions
            available.
          </p>
          <Link
            to="/tu-luyen/choose-your-path"
            className="mt-4 sm:mt-5 inline-block bg-[#2B003F] text-white px-4 py-1.5 sm:px-5 sm:py-2 rounded-full hover:bg-[#3D0059] transition-colors duration-300 text-sm sm:text-base"
          >
            Back to Paths
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-6 px-2 sm:py-8 sm:px-4"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        backgroundColor: "rgba(25, 23, 82, 0.7)",
      }}
    >
      <div className="w-full max-w-3xl px-3 sm:px-4 py-4 sm:py-6 relative z-10">
        {/* Title will be positioned at the top without the back button */}

        {/* Title */}
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            {pathDisplayNames[pathId]} Quiz
          </h1>
          {!quizCompleted && (
            <div>
              <p className="text-white mt-2">
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>
              <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                {questions.map((question, index) => {
                  // Determine if this question has been answered
                  const isAnswered = answeredQuestions.includes(index);
                  // Get the user's answer for this question from our stored answers
                  const userAnswerIndex = userAnswers[index];
                  // Determine if the answer was correct
                  const isCorrect = isAnswered
                    ? questions[index].correctAnswer === userAnswerIndex
                    : null;

                  // Determine button style based on status
                  let buttonStyle = "";
                  if (currentQuestionIndex === index) {
                    buttonStyle =
                      "bg-[#2B003F] text-white border-2 border-white";
                  } else if (isAnswered) {
                    buttonStyle = isCorrect
                      ? "bg-green-100 text-green-800 border border-green-500"
                      : "bg-red-100 text-red-800 border border-red-500";
                  } else {
                    buttonStyle =
                      "bg-white/80 text-[#2B003F] hover:bg-white border border-[#2B003F]";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentQuestionIndex(index);
                        // Set the correct selectedAnswer based on whether the question has been answered
                        if (answeredQuestions.includes(index)) {
                          setSelectedAnswer(userAnswers[index]);
                        } else {
                          setSelectedAnswer(null);
                        }
                        setShowHint(false);
                        setShowExplanation(false);
                      }}
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-medium transition-colors duration-200 ${buttonStyle}`}
                      title={`Question ${index + 1}${
                        isAnswered
                          ? isCorrect
                            ? " (Correct)"
                            : " (Incorrect)"
                          : ""
                      }`}
                    >
                      {isAnswered && index !== currentQuestionIndex ? (
                        isCorrect ? (
                          <span className="flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 sm:h-4 sm:w-4"
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
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3 w-3 sm:h-4 sm:w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </span>
                        )
                      ) : (
                        index + 1
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {!quizCompleted ? (
          <div className="bg-white/90 rounded-lg shadow-xl p-4 sm:p-6">
            {/* Question */}
            <h2 className="text-lg sm:text-xl font-bold text-[#2B003F] mb-3 sm:mb-4">
              {currentQuestion.question}
            </h2>

            {/* Answer options */}
            <div className="space-y-3 mb-4">
              {selectedAnswer !== null && (
                <div className="text-sm text-gray-600 italic mb-2 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5 mr-1 text-blue-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Đáp án đúng được đánh dấu màu xanh lá
                </div>
              )}
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  className={`w-full text-left p-3 sm:p-4 rounded-lg transition-colors duration-200 ${
                    selectedAnswer !== null
                      ? index === currentQuestion.correctAnswer
                        ? "bg-green-100 border-2 border-green-500 font-medium"
                        : selectedAnswer === index
                        ? "bg-red-100 border-2 border-red-500"
                        : "bg-gray-100 border-2 border-transparent opacity-70"
                      : "bg-gray-100 hover:bg-gray-200 border-2 border-transparent"
                  }`}
                  disabled={selectedAnswer !== null}
                >
                  <div className="flex items-center">
                    <span className="font-medium mr-2">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span>{option}</span>
                    {selectedAnswer !== null &&
                      index === currentQuestion.correctAnswer && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 sm:h-5 sm:w-5 ml-2 text-green-600"
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
                      )}
                  </div>
                </button>
              ))}
            </div>

            {/* Hint and Explanation */}
            <div className="space-y-3 mb-4 mt-4 pt-3 border-t border-gray-200">
              {/* Hint button and content */}
              <div>
                <button
                  onClick={toggleHint}
                  className="text-[#2B003F] underline font-medium focus:outline-none"
                >
                  {showHint ? "Ẩn gợi ý" : "Hiện gợi ý"}
                </button>
                {showHint && (
                  <div className="mt-2 p-2 sm:p-3 bg-blue-50 rounded-lg border border-blue-200 text-sm sm:text-base">
                    <p className="text-blue-800">
                      <span className="font-bold">Gợi ý:</span>{" "}
                      {currentQuestion.hint}
                    </p>
                  </div>
                )}
              </div>

              {/* Explanation (shown after answering) */}
              {selectedAnswer !== null && (
                <div>
                  {/* Show explanation button */}
                  <button
                    onClick={toggleExplanation}
                    className="text-[#2B003F] underline font-medium focus:outline-none mt-2"
                  >
                    {showExplanation ? "Ẩn giải thích" : "Hiện giải thích"}
                  </button>

                  {/* Auto-show explanation when answer is wrong */}
                  {(showExplanation ||
                    selectedAnswer !== currentQuestion.correctAnswer) && (
                    <div className="mt-2 p-2 sm:p-3 bg-purple-50 rounded-lg border border-purple-200 text-sm sm:text-base">
                      <p className="text-purple-800">
                        <span className="font-bold">Giải thích:</span>{" "}
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
                className={`px-5 py-2 sm:px-6 sm:py-2.5 rounded-full font-bold flex items-center gap-2 text-sm sm:text-base ${
                  selectedAnswer === null
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed border-2 border-gray-300"
                    : "bg-[#2B003F] text-white hover:bg-[#3D0059] transition-all duration-300 hover:scale-105 border-2 border-[#2B003F] shadow-lg hover:shadow-xl"
                }`}
              >
                {currentQuestionIndex < questions.length - 1 ? (
                  <>
                    <span className="text-lg">Câu hỏi tiếp theo</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5"
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
                    <span className="text-lg">Hoàn thành bài kiểm tra</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5"
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
          // Quiz completed screen with celebration effects
          <div className="bg-white/90 rounded-lg shadow-xl p-4 sm:p-6 text-center relative overflow-hidden">
            {/* Confetti effect for high scores */}
            <Confetti isActive={score / questions.length >= 0.7} />

            {/* Achievement badge based on score */}
            <AchievementBadge score={score} totalQuestions={questions.length} />

            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2B003F] mb-2 animate-bounce-once">
              {score / questions.length >= 0.9
                ? "🎉 Xuất sắc! 🎉"
                : score / questions.length >= 0.7
                ? "🌟 Rất tốt! 🌟"
                : score / questions.length >= 0.5
                ? "👍 Tốt! 👍"
                : "✨ Hoàn thành! ✨"}
            </h2>

            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#2B003F] mb-3 sm:mb-4">
              Chúc mừng bạn đã hoàn thành bài kiểm tra
            </h3>

            <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-3 sm:p-4 rounded-lg mb-4 shadow-inner">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
                <div className="text-center">
                  <p className="text-gray-600 text-sm uppercase font-semibold">
                    Điểm của bạn
                  </p>
                  <p className="text-4xl font-bold text-[#2B003F]">
                    {score}/{questions.length}
                  </p>
                </div>

                <div className="h-12 w-0.5 bg-purple-200 hidden sm:block"></div>

                <div className="text-center">
                  <p className="text-gray-600 text-sm uppercase font-semibold">
                    Tỷ lệ đúng
                  </p>
                  <p className="text-4xl font-bold text-[#2B003F]">
                    {Math.round((score / questions.length) * 100)}%
                  </p>
                </div>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-6 mb-2 overflow-hidden shadow-inner">
                <div
                  className={`h-6 rounded-full ${
                    score / questions.length >= 0.8
                      ? "bg-gradient-to-r from-green-400 to-green-600"
                      : score / questions.length >= 0.6
                      ? "bg-gradient-to-r from-blue-400 to-blue-600"
                      : score / questions.length >= 0.4
                      ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
                      : "bg-gradient-to-r from-red-400 to-red-600"
                  }`}
                  style={{
                    width: `${Math.round((score / questions.length) * 100)}%`,
                  }}
                >
                  <div className="h-full flex items-center justify-center">
                    {score / questions.length >= 0.3 && (
                      <span className="text-xs font-bold text-white px-2">
                        {Math.round((score / questions.length) * 100)}%
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-lg mb-4 sm:mb-6 shadow-inner border border-purple-100">
              <h4 className="font-bold text-[#2B003F] mb-2 text-lg">
                Thông điệp
              </h4>
              <p className="text-gray-700 italic">
                {score / questions.length >= 0.9
                  ? "✨ Thật ấn tượng! Bạn đã thể hiện sự hiểu biết tuyệt vời về chủ đề này. Bạn đã sẵn sàng cho những thử thách cao hơn!"
                  : score / questions.length >= 0.7
                  ? "🌟 Rất tốt! Bạn đã nắm vững hầu hết các khái niệm quan trọng. Chỉ còn một chút nữa là bạn sẽ thành thạo hoàn toàn!"
                  : score / questions.length >= 0.5
                  ? "👍 Bạn đã làm tốt! Hãy tiếp tục luyện tập để cải thiện thêm. Mỗi bước tiến đều đáng ghi nhận!"
                  : "💪 Đừng nản lòng! Mỗi lần thử là một cơ hội học hỏi. Hãy xem lại các câu hỏi và thử lại. Sự kiên trì sẽ mang lại thành công!"}
              </p>
            </div>

            {/* Achievement Popup */}
            {showAchievementPopup && earnedAchievements.length > 0 && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70 animate-fade-in">
                <div className="bg-white rounded-xl p-6 max-w-md w-full mx-4 shadow-2xl transform animate-scale-in">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-[#2B003F] mb-4">🎉 Thành tựu mới! 🎉</h3>
                    
                    <div className="space-y-4 mb-6">
                      {earnedAchievements.map((achievement) => (
                        <div key={achievement.id} className="bg-gradient-to-r from-purple-50 to-indigo-50 p-4 rounded-lg border border-purple-200">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-purple-100">
                              <img src={achievement.image} alt={achievement.name} className="w-10 h-10" />
                            </div>
                            <div className="text-left">
                              <h4 className="font-bold text-[#2B003F]">{achievement.name}</h4>
                              <p className="text-sm text-gray-600">{achievement.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => setShowAchievementPopup(false)}
                      className="px-6 py-2 bg-[#2B003F] text-white rounded-full font-bold hover:bg-[#3D0059] transition-all duration-300 hover:scale-105"
                    >
                      Tuyệt vời!
                    </button>
                  </div>
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              <button
                onClick={handleRestartQuiz}
                className="px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold bg-gradient-to-r from-[#2B003F] to-[#3D0059] text-white hover:from-[#3D0059] hover:to-[#4F0077] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border-2 border-[#2B003F] shadow-lg transform hover:-translate-y-1 text-sm sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 animate-spin-slow"
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
                <span className="relative">
                  Làm lại bài kiểm tra
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                </span>
              </button>
              <Link
                to="/tu-luyen/choose-your-path"
                className="group px-4 py-2 sm:px-5 sm:py-2.5 rounded-full font-bold bg-white text-[#2B003F] border-2 border-[#2B003F] hover:bg-gray-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg transform hover:-translate-y-1 text-sm sm:text-base"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300"
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
                <span className="relative">
                  Chọn chủ đề khác
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2B003F] transition-all duration-300 group-hover:w-full"></span>
                </span>
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Back buttons at the bottom left */}
      <div className="w-full max-w-3xl px-3 sm:px-4 mt-4 sm:mt-6 flex justify-start gap-3">
        <Link
          to={`/tu-luyen/instructions/${pathId}`}
          className="bg-white text-[#2B003F] font-bold p-1.5 sm:p-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center border border-[#2B003F]"
          title="Back to Instructions"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 sm:h-4 sm:w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </Link>

        <Link
          to="/tu-luyen/choose-your-path"
          className="bg-white text-[#2B003F] font-bold py-1 px-3 sm:py-1.5 sm:px-4 rounded-lg shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-1 sm:gap-1.5 border border-[#2B003F]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5 sm:h-4 sm:w-4"
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
          <span className="text-xs sm:text-sm font-bold">BACK TO PATHS</span>
        </Link>
      </div>
    </div>
  );
};

export default PathQuestions;
