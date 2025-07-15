import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background/auth.png";
import exerciseQuestions from "../../../data/exercises.js";
import Confetti from "../../components/Confetti";
import AchievementBadge from "../../components/AchievementBadge";

// Using imported Confetti and AchievementBadge components

const ReviewExercises = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [noWrongAnswers, setNoWrongAnswers] = useState(false);

  useEffect(() => {
    // Lấy danh sách câu hỏi đã làm sai từ localStorage
    const loadWrongQuestions = () => {
      setLoading(true);
      const wrongQuestionsData =
        JSON.parse(localStorage.getItem("wrongQuestions")) || {};

      // Chuyển đổi từ object sang array
      const wrongQuestionsArray = Object.keys(wrongQuestionsData)
        .map((id) => {
          const questionId = parseInt(id);
          return exerciseQuestions.find((q) => q.id === questionId);
        })
        .filter((q) => q !== undefined); // Lọc bỏ các câu hỏi không tìm thấy

      if (wrongQuestionsArray.length === 0) {
        setNoWrongAnswers(true);
      } else {
        // Sắp xếp câu hỏi theo cấp độ
        wrongQuestionsArray.sort((a, b) => {
          const levelOrder = {
            "Phàm Nhân": 0,
            "Luyện Khí": 1,
            "Trúc Cơ": 2,
            "Kim Đan": 3,
            "Nguyên Anh": 4,
            "Hóa Thần": 5,
          };
          return levelOrder[a.level] - levelOrder[b.level];
        });

        setQuestions(wrongQuestionsArray);
      }

      setLoading(false);
    };

    loadWrongQuestions();
  }, []);

  // Hàm xử lý khi người dùng chọn câu trả lời
  const handleAnswerSelect = (answerIndex) => {
    if (showAnswer || answeredQuestions.includes(currentQuestion)) return;

    setSelectedAnswer(answerIndex);
    setShowAnswer(true);

    setAnsweredQuestions([...answeredQuestions, currentQuestion]);

    // Kiểm tra đáp án và cập nhật điểm số
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);

      // Nếu trả lời đúng, xóa câu hỏi khỏi danh sách câu hỏi sai
      const wrongQuestions =
        JSON.parse(localStorage.getItem("wrongQuestions")) || {};
      const questionId = questions[currentQuestion].id;
      delete wrongQuestions[questionId];
      localStorage.setItem("wrongQuestions", JSON.stringify(wrongQuestions));
    }
  };

  // Hàm chuyển sang câu hỏi tiếp theo
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);

      if (answeredQuestions.includes(nextQuestion)) {
        const savedAnswer = selectedAnswer;
        if (savedAnswer !== undefined) {
          setSelectedAnswer(savedAnswer);
          setShowAnswer(true);
        }
      } else {
        setSelectedAnswer(null);
        setShowAnswer(false);
      }
    } else {
      setShowResult(true);
    }
  };

  // Hàm quay lại câu hỏi trước đó
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      const prevQuestion = currentQuestion - 1;
      setCurrentQuestion(prevQuestion);

      if (answeredQuestions.includes(prevQuestion)) {
        const savedAnswer = selectedAnswer;
        if (savedAnswer !== undefined) {
          setSelectedAnswer(savedAnswer);
          setShowAnswer(true);
        }
      } else {
        setSelectedAnswer(null);
        setShowAnswer(false);
      }
    }
  };

  // Hàm bắt đầu bài kiểm tra
  const startQuiz = () => {
    setShowQuiz(true);
    setShowResult(false);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  // Hàm reset bài kiểm tra
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setAnsweredQuestions([]);
  };

  // Hàm xóa tất cả câu hỏi sai
  const clearAllWrongQuestions = () => {
    localStorage.removeItem("wrongQuestions");
    setNoWrongAnswers(true);
    setQuestions([]);
    setShowQuiz(false);
    setShowResult(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-900">
        <div className="flex flex-col items-center justify-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <div className="w-14 h-14 border-4 border-purple-500 border-b-transparent rounded-full animate-spin absolute top-3 left-3"></div>
            <div className="w-8 h-8 border-4 border-blue-500 border-l-transparent rounded-full animate-spin absolute top-6 left-6"></div>
          </div>
          <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 mt-4 animate-pulse">
            Đang tải thông tin...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-4 sm:py-6 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(43, 0, 63, 0.6)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-24 h-24 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-indigo-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>

      <div className="w-full max-w-3xl px-3 sm:px-4 py-4 sm:py-6 relative z-10">
        {/* Tiêu đề */}
        <div className="text-center mb-4 sm:mb-6">
          <div className="inline-block bg-gradient-to-r from-[#2B003F]/80 to-[#3D0059]/80 backdrop-blur-sm p-1.5 sm:p-2.5 rounded-xl shadow-lg border border-purple-500/30 mb-2 transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-400 flex items-center justify-center">
              <span className="relative mr-3 text-xl sm:text-2xl animate-spin-slow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 sm:h-8 sm:w-8 text-blue-300"
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
              </span>
              <span className="relative text-amber-400">
                Luyện Tập Lại
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full"></span>
              </span>
            </h1>
          </div>
          <p className="text-sm sm:text-base text-purple-100 mt-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] max-w-xl mx-auto bg-[#2B003F]/50 backdrop-blur-sm py-1.5 px-3 rounded-full border border-purple-500/20">
            Ôn tập lại những câu hỏi bạn đã làm sai trước đây
          </p>
        </div>

        {/* Phần kiểm tra kiến thức */}
        {noWrongAnswers ? (
          <div className="bg-white/90 rounded-lg shadow-xl p-4 sm:p-5 text-center relative overflow-hidden max-w-xl mx-auto">
            <div className="relative mb-4 inline-block">
              <div className="text-5xl sm:text-6xl relative z-10 animate-bounce-slow">
                🎉
              </div>
              <div className="absolute -inset-4 bg-green-200/50 rounded-full blur-md z-0"></div>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#2B003F] mb-3">
              Chúc mừng!
            </h2>
            <p className="text-base text-gray-700 mb-6 max-w-md mx-auto bg-gradient-to-r from-purple-50 to-indigo-50 p-3 rounded-lg border border-purple-100 shadow-inner">
              Bạn chưa có câu hỏi nào trả lời sai. Hãy tiếp tục tu luyện để nâng
              cao trình độ!
            </p>
            <div className="mt-6 flex justify-center">
              <Link
                to="/tu-luyen/practice-goal"
                className="bg-white text-[#2B003F] font-bold py-1.5 px-4 sm:py-2 sm:px-5 rounded-lg shadow-lg hover:shadow-white/30 hover:scale-105 transition-all duration-300 flex items-center"
              >
                <span className="text-lg sm:text-xl font-bold">BACK</span>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            {/* Thanh tiến trình - luôn hiển thị ở trên cùng khi đang làm bài kiểm tra */}
            {showQuiz && !showResult && questions.length > 0 && (
              <div className="w-full mb-2 sm:mb-3 bg-white/90 rounded-lg shadow-md border border-purple-100 overflow-hidden">
                {/* Hiển thị tiến trình */}
                <div className="flex justify-between items-center px-2.5 py-1.5 sm:px-3 sm:py-2 border-b border-purple-100">
                  <span className="text-[#2B003F] text-xs sm:text-sm font-medium flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Câu hỏi {currentQuestion + 1}/{questions.length}
                  </span>
                  <span className="text-[#2B003F] text-xs sm:text-sm font-medium flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3.5 w-3.5 sm:h-4 sm:w-4 mr-1 text-yellow-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                      />
                    </svg>
                    Điểm: {score}/{questions.length}
                  </span>
                </div>

                {/* Thanh tiến trình */}
                <div className="w-full bg-gray-200 h-1.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#2B003F] to-[#3D0059] h-1.5 transition-all duration-500 ease-out"
                    style={{
                      width: `${
                        ((currentQuestion + 1) / questions.length) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            )}

            <div className="bg-white/90 rounded-lg shadow-xl overflow-hidden flex flex-col items-center justify-center text-center">
              {!showQuiz && !showResult ? (
                <div className="text-center p-4 sm:p-6 flex flex-col items-center justify-center">
                  <div className="relative mb-4 inline-block">
                    <div className="text-5xl sm:text-6xl relative z-10 animate-bounce-slow">
                      📝
                    </div>
                    <div className="absolute -inset-4 bg-purple-200/50 rounded-full blur-md z-0"></div>
                  </div>
                  <div className="bg-white p-4 sm:p-5 rounded-xl shadow-md border border-purple-200 mb-5 max-w-lg mx-auto w-full">
                    <h2 className="text-xl sm:text-2xl font-bold text-[#2B003F] mb-3 sm:mb-4">
                      Luyện tập lại các câu hỏi sai
                    </h2>
                    <p className="text-gray-700 mb-6 text-sm sm:text-base">
                      Bạn có {questions.length} câu hỏi cần luyện tập lại. Hãy
                      cố gắng trả lời đúng tất cả các câu hỏi nhé!
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button
                      onClick={startQuiz}
                      className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold bg-gradient-to-r from-[#2B003F] to-[#3D0059] text-white hover:from-[#3D0059] hover:to-[#4F0077] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border-2 border-[#2B003F] shadow-lg transform hover:-translate-y-1 text-xs sm:text-sm"
                    >
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
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      <span className="relative">
                        Bắt đầu luyện tập
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </button>
                    <button
                      onClick={clearAllWrongQuestions}
                      className="group px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold bg-white text-[#2B003F] border-2 border-[#2B003F] hover:bg-gray-50 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 shadow-lg transform hover:-translate-y-1 text-xs sm:text-sm"
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
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                      <span className="relative">
                        Xóa tất cả câu hỏi
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2B003F] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                    </button>
                  </div>
                </div>
              ) : showResult ? (
                <div className="p-3 sm:p-5 max-w-2xl mx-auto">
                  {/* Trang kết quả */}
                  <div className="text-center">
                    {/* Confetti effect for high scores */}
                    <Confetti isActive={score / questions.length >= 0.7} />

                    {/* Achievement badge based on score */}
                    <AchievementBadge
                      score={score}
                      totalQuestions={questions.length}
                    />

                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#2B003F] mb-2 animate-bounce-once">
                      {score / questions.length >= 0.9
                        ? "🎉 Xuất sắc! 🎉"
                        : score / questions.length >= 0.7
                        ? "🌟 Rất tốt! 🌟"
                        : score / questions.length >= 0.5
                        ? "👍 Tốt! 👍"
                        : "✨ Hoàn thành! ✨"}
                    </h2>

                    <h3 className="text-lg sm:text-xl font-semibold text-[#2B003F] mb-3 sm:mb-4">
                      Chúc mừng bạn đã hoàn thành bài luyện tập
                    </h3>

                    <div className="bg-gradient-to-r from-purple-100 to-indigo-100 p-2.5 sm:p-3.5 rounded-lg mb-3 shadow-inner">
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
                            width: `${Math.round(
                              (score / questions.length) * 100
                            )}%`,
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

                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-2.5 rounded-lg mb-3 sm:mb-5 shadow-inner border border-purple-100">
                      <h4 className="font-bold text-[#2B003F] mb-2 text-lg">
                        Thông điệp
                      </h4>
                      <p className="text-gray-700 italic">
                        {score / questions.length >= 0.9
                          ? "✨ Thật ấn tượng! Bạn đã thể hiện sự hiểu biết tuyệt vời về những câu hỏi này. Bạn đã sẵn sàng cho những thử thách cao hơn!"
                          : score / questions.length >= 0.7
                          ? "🌟 Rất tốt! Bạn đã nắm vững hầu hết các khái niệm quan trọng. Chỉ còn một chút nữa là bạn sẽ thành thạo hoàn toàn!"
                          : score / questions.length >= 0.5
                          ? "👍 Bạn đã làm tốt! Hãy tiếp tục luyện tập để cải thiện thêm. Mỗi bước tiến đều đáng ghi nhận!"
                          : "💪 Đừng nản lòng! Mỗi lần thử là một cơ hội học hỏi. Hãy xem lại các câu hỏi và thử lại. Sự kiên trì sẽ mang lại thành công!"}
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
                      <button
                        onClick={startQuiz}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold bg-gradient-to-r from-[#2B003F] to-[#3D0059] text-white hover:from-[#3D0059] hover:to-[#4F0077] transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 border-2 border-[#2B003F] shadow-lg transform hover:-translate-y-1 text-xs sm:text-sm"
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
                          Làm lại bài luyện tập
                          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </span>
                      </button>
                      <div className="mt-6 flex justify-center">
                        <Link
                          to="/tu-luyen/practice-goal"
                          className="bg-white text-[#2B003F] font-bold py-1.5 px-4 sm:py-2 sm:px-5 rounded-lg shadow-lg hover:shadow-white/30 hover:scale-105 transition-all duration-300 flex items-center"
                        >
                          <span className="text-lg sm:text-xl font-bold">
                            BACK
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-4 sm:py-6 px-4 w-full max-w-3xl mx-auto flex flex-col h-full">
                  {/* Phần câu hỏi - luôn ở trên cùng */}
                  <div className="flex-none mb-4 sm:mb-6">
                    {questions[currentQuestion] && (
                      <div>
                        <div className="bg-white/90 px-2.5 py-1 rounded-lg inline-block mb-2 border border-purple-200 shadow-md transform hover:scale-105 transition-all duration-300 text-xs">
                          <span className="text-[#2B003F] font-medium">
                            Cấp độ: {questions[currentQuestion].level}
                          </span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold text-[#2B003F] mb-3 sm:mb-5 px-3 py-2.5 bg-white/90 rounded-lg border border-purple-200 w-full text-center shadow-md">
                          {questions[currentQuestion].question}
                        </h3>
                      </div>
                    )}
                  </div>

                  {/* Phần lựa chọn - ở giữa */}
                  <div className="flex-grow flex justify-center">
                    {questions[currentQuestion] && (
                      <div className="space-y-3 mb-6 w-full sm:w-[85%] mx-auto">
                        {questions[currentQuestion].answers.map(
                          (answer, index) => {
                            const isSelected = selectedAnswer === index;
                            const isCorrect =
                              index ===
                              questions[currentQuestion].correctAnswer;
                            const isWrong = isSelected && !isCorrect;
                            const isDisabled =
                              answeredQuestions.includes(currentQuestion);

                            return (
                              <div
                                key={index}
                                onClick={
                                  isDisabled
                                    ? undefined
                                    : () => handleAnswerSelect(index)
                                }
                                className={`p-3 sm:p-4 rounded-lg transition-all duration-300 ${
                                  isSelected || (showAnswer && isCorrect)
                                    ? "border-2"
                                    : "border"
                                } ${
                                  (showAnswer && isCorrect) ||
                                  (isSelected && isCorrect)
                                    ? "bg-green-100 border-green-500 shadow-md"
                                    : isWrong
                                    ? "bg-red-100 border-red-500 shadow-md"
                                    : isSelected
                                    ? "bg-indigo-100 border-indigo-500 shadow-md"
                                    : "bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300"
                                } ${
                                  isDisabled &&
                                  !isSelected &&
                                  !(showAnswer && isCorrect)
                                    ? "opacity-80"
                                    : ""
                                } ${
                                  isDisabled
                                    ? "cursor-default"
                                    : "cursor-pointer hover:scale-[1.01]"
                                }`}
                              >
                                <div className="flex items-center">
                                  <div
                                    className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center mr-3 text-white font-bold flex-shrink-0 ${
                                      (showAnswer && isCorrect) ||
                                      (isSelected && isCorrect)
                                        ? "bg-green-600"
                                        : isWrong
                                        ? "bg-red-600"
                                        : isSelected
                                        ? "bg-indigo-600"
                                        : "bg-[#2B003F]"
                                    }`}
                                  >
                                    {String.fromCharCode(65 + index)}
                                  </div>
                                  <div
                                    className={`${
                                      (showAnswer && isCorrect) ||
                                      (isSelected && isCorrect)
                                        ? "text-green-800"
                                        : isWrong
                                        ? "text-red-800"
                                        : isSelected
                                        ? "text-indigo-800"
                                        : "text-gray-800"
                                    } text-sm sm:text-base`}
                                  >
                                    {answer}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>

                  {/* Phần giải thích - luôn ở dưới cùng */}
                  <div className="flex-none min-h-[120px] sm:min-h-[150px] flex items-end justify-center w-full">
                    {questions[currentQuestion] && showAnswer ? (
                      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-purple-200 rounded-lg p-4 sm:p-5 mb-4 w-full sm:w-[85%] mx-auto shadow-md transform hover:scale-[1.01] transition-all duration-300">
                        <h4 className="text-[#2B003F] font-semibold mb-3 text-center text-base sm:text-lg flex items-center justify-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-purple-600"
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
                          Giải thích:
                        </h4>
                        <p className="text-gray-700 text-sm sm:text-base bg-white p-3 sm:p-4 rounded-lg border border-purple-100">
                          {questions[currentQuestion].explanation}
                        </p>
                      </div>
                    ) : (
                      <div className="h-[120px] sm:h-[150px] w-full"></div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Nút điều hướng */}
        <div className="mt-10 max-w-3xl mx-auto px-3">
          {/* Nút điều hướng câu hỏi - hiển thị khi đang làm bài kiểm tra */}
          {showQuiz && !showResult && questions.length > 0 ? (
            <div className="flex space-x-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/30 shadow-lg">
              <Link
                to="/tu-luyen/practice-goal"
                className="bg-white text-[#2B003F] font-bold py-2.5 px-4 rounded-lg hover:shadow-white/30 hover:scale-105 transition-all duration-300 flex items-center transform hover:-translate-y-1 text-sm"
              >
                <span className="font-bold">BACK</span>
              </Link>
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-5 py-2.5 rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg hover:shadow-red-500/50 flex items-center transform hover:-translate-y-1 border border-red-500/30 text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
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
                <span>Reset</span>
              </button>
              <button
                onClick={handlePreviousQuestion}
                className={`bg-gradient-to-r from-gray-600 to-gray-500 text-white px-5 py-2.5 rounded-lg hover:from-gray-500 hover:to-gray-400 transition-all duration-300 shadow-lg hover:shadow-gray-500/50 flex items-center transform hover:-translate-y-1 border border-gray-500/30 text-sm ${
                  currentQuestion === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentQuestion === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span>Câu trước</span>
              </button>
              {showAnswer ? (
                <button
                  onClick={handleNextQuestion}
                  className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-5 py-2.5 rounded-lg hover:from-blue-500 hover:to-indigo-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center transform hover:-translate-y-1 border border-blue-500/30 text-sm"
                >
                  <span className="mr-2">
                    {currentQuestion < questions.length - 1
                      ? "Câu tiếp theo"
                      : "Kết thúc"}
                  </span>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              ) : (
                <button
                  className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-5 py-2.5 rounded-lg opacity-50 cursor-not-allowed flex items-center border border-blue-500/30 text-sm"
                  disabled
                >
                  <span className="mr-2">
                    {currentQuestion < questions.length - 1
                      ? "Câu tiếp theo"
                      : "Kết thúc"}
                  </span>
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
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              )}
            </div>
          ) : (
            <div className="flex justify-center">
              <Link
                to="/tu-luyen/practice-goal"
                className="bg-white text-[#2B003F] font-bold py-1.5 px-4 sm:py-2 sm:px-5 rounded-lg shadow-lg hover:shadow-white/30 hover:scale-105 transition-all duration-300 flex items-center"
              >
                <span className="text-lg sm:text-xl font-bold">BACK</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewExercises;
