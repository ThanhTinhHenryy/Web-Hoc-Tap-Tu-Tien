import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background.jpg";
import exerciseQuestions from "../../../data/exercises.js";

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
          <p className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 mt-4 animate-pulse">Đang tải thông tin...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-6 sm:py-10 relative overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(25, 23, 82, 0.7)",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-500 rounded-full filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>
      
      <div className="w-full max-w-6xl px-4 sm:px-6 py-6 sm:py-8 relative z-10">
        {/* Tiêu đề */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block bg-gradient-to-r from-indigo-900/70 to-purple-900/70 backdrop-blur-sm p-3 sm:p-5 rounded-2xl shadow-lg border border-indigo-500/30 mb-4 transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-amber-400 flex items-center justify-center">
              <span className="relative mr-4 text-3xl sm:text-4xl animate-spin-slow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 sm:h-12 sm:w-12 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </span>
              <span className="relative">
                Luyện Tập Lại
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-amber-400 rounded-full"></span>
              </span>
            </h1>
          </div>
          <p className="text-lg sm:text-xl text-purple-100 mt-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] max-w-2xl mx-auto bg-purple-900/30 backdrop-blur-sm py-2 px-4 rounded-full border border-purple-500/20">
            Ôn tập lại những câu hỏi bạn đã làm sai trước đây
          </p>
        </div>

        {/* Phần kiểm tra kiến thức */}
        {noWrongAnswers ? (
          <div className="bg-gradient-to-b from-gray-400/30 to-gray-500/30 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl min-h-[300px] flex flex-col items-center justify-center text-center border border-gray-300/30 p-8 transform hover:scale-[1.02] transition-all duration-300">
            <div className="relative mb-6 inline-block">
              <div className="text-6xl sm:text-7xl relative z-10 animate-bounce-slow">🎉</div>
              <div className="absolute -inset-4 bg-yellow-500/20 rounded-full blur-xl z-0"></div>
            </div>
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300 mb-4">
              Chúc mừng!
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-md mx-auto bg-gray-800/50 p-3 rounded-lg border border-gray-700/30">
              Bạn chưa có câu hỏi nào trả lời sai. Hãy tiếp tục tu luyện để nâng
              cao trình độ!
            </p>
            <Link
              to="/tu-luyen"
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-400 transition-all duration-300 shadow-lg shadow-purple-500/20 flex items-center transform hover:-translate-y-1"
            >
              <span className="mr-2">Quay lại tu luyện</span>
              <span>⬅️</span>
            </Link>
          </div>
        ) : (
          <div>
            {/* Thanh tiến trình - luôn hiển thị ở trên cùng khi đang làm bài kiểm tra */}
            {showQuiz && !showResult && questions.length > 0 && (
              <div className="w-full px-4 pt-4 mb-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-700/30 shadow-lg" style={{ marginTop: 10 }}>
                {/* Hiển thị tiến trình */}
                <div className="flex justify-between items-center mb-2 py-2">
                  <span className="text-gray-300 bg-gray-800/70 px-3 py-1 rounded-full border border-gray-700/30 shadow-inner flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Câu hỏi {currentQuestion + 1}/{questions.length}
                  </span>
                  <span className="text-gray-300 bg-gray-800/70 px-3 py-1 rounded-full border border-gray-700/30 shadow-inner flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    Điểm: {score}/{questions.length}
                  </span>
                </div>

                {/* Thanh tiến trình */}
                <div className="w-full bg-gray-800/70 rounded-full h-2.5 mb-2 shadow-inner overflow-hidden border border-gray-700/30">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-indigo-400 h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{
                      width: `${
                        ((currentQuestion + 1) / questions.length) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            )}

            <div className="bg-gray-400/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg min-h-[500px] flex flex-col items-center justify-center text-center border border-gray-300/30">
              {!showQuiz && !showResult ? (
                <div className="text-center p-6 sm:p-8 flex flex-col items-center justify-center">
                  <div className="relative mb-6 inline-block">
                    <div className="text-6xl sm:text-7xl relative z-10 animate-bounce-slow">📝</div>
                    <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-xl z-0"></div>
                  </div>
                  <p className="text-gray-200 mb-8 max-w-md mx-auto bg-gray-800/50 p-3 rounded-lg border border-gray-700/30">
                    Bạn có {questions.length} câu hỏi đã trả lời sai trước đây.
                    Hãy luyện tập lại để củng cố kiến thức!
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button
                      onClick={startQuiz}
                      className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-400 transition-all duration-300 shadow-lg shadow-purple-500/20 flex items-center justify-center transform hover:-translate-y-1"
                    >
                      <span className="mr-2">Bắt đầu luyện tập</span>
                      <span>📝</span>
                    </button>
                    <button
                      onClick={clearAllWrongQuestions}
                      className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg shadow-red-500/20 flex items-center justify-center transform hover:-translate-y-1"
                    >
                      <span className="mr-2">Xóa tất cả câu hỏi</span>
                      <span>🗑️</span>
                    </button>
                  </div>
                </div>
              ) : showResult ? (
                <div className="py-8">
                  {/* Trang kết quả */}
                  <div className="text-center transform hover:scale-[1.01] transition-all duration-500">
                    <div className="relative mb-6 inline-block">
                      <div className="text-6xl sm:text-7xl relative z-10 animate-bounce-slow">🏆</div>
                      <div className="absolute -inset-4 bg-yellow-500/30 rounded-full blur-xl z-0"></div>
                    </div>
                    <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-md p-6 sm:p-8 rounded-2xl shadow-2xl border border-yellow-500/30 mb-8 max-w-xl mx-auto">
                      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300 mb-6">
                        Kết quả luyện tập
                      </h2>
                      <div className="relative mb-8 p-4 bg-gray-800/70 rounded-xl border border-gray-700/50">
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                          Điểm số
                        </div>
                        <p className="text-4xl font-bold text-white mt-2">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{score}</span>
                          <span className="text-gray-400">/</span>
                          <span className="text-gray-300">{questions.length}</span>
                        </p>
                        <div className="text-2xl text-purple-300 mb-2">
                          {score === questions.length
                            ? "Hoàn hảo! 🎉"
                            : score >= questions.length * 0.8
                            ? "Xuất sắc! 🌟"
                            : score >= questions.length * 0.6
                            ? "Tốt! 👍"
                            : score >= questions.length * 0.4
                            ? "Cần cố gắng thêm 💪"
                            : "Hãy học lại 📚"}
                        </div>
                        <div className="text-gray-300">
                          Bạn đã trả lời đúng {score} trên tổng số{" "}
                          {questions.length} câu hỏi
                        </div>
                        <div className="text-amber-300 mt-4 font-semibold">
                          {score === questions.length ? (
                            <span>
                              Chúc mừng! Bạn đã trả lời đúng tất cả các câu hỏi!
                              🏆
                            </span>
                          ) : (
                            <span>
                              Còn {questions.length - score} câu hỏi cần luyện tập
                              thêm
                            </span>
                          )}
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-2.5 mt-4">
                          <div
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-2.5 rounded-full"
                            style={{
                              width: `${(score / questions.length) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                        <button
                          onClick={startQuiz}
                          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg shadow-blue-500/20 transform hover:-translate-y-1 border border-blue-500/30"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                          Luyện tập lại
                        </button>
                        <Link
                          to="/tu-luyen"
                          className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center shadow-lg shadow-purple-500/20 transform hover:-translate-y-1 border border-purple-500/30"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          Quay lại tu luyện
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-6 px-4 w-full max-w-4xl mx-auto flex flex-col h-full">
                  {/* Phần câu hỏi - luôn ở trên cùng */}
                  <div className="flex-none" style={{ marginBottom: 10 }}>
                    {questions[currentQuestion] && (
                      <div>
                        <div className="bg-gradient-to-r from-gray-800/80 to-gray-900/80 px-4 py-2 rounded-lg inline-block mb-2 border border-yellow-500/20 shadow-lg transform hover:scale-105 transition-all duration-300">
                          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-amber-300 font-medium">
                            Cấp độ: {questions[currentQuestion].level}
                          </span>
                        </div>
                        <h3 className="text-2xl font-semibold text-yellow-200 mb-8 px-6 py-4 bg-gradient-to-r from-gray-800/70 to-gray-900/70 rounded-lg border border-yellow-500/30 w-full text-center shadow-lg backdrop-blur-sm">
                          {questions[currentQuestion].question}
                        </h3>
                      </div>
                    )}
                  </div>

                  {/* Phần lựa chọn - ở giữa */}
                  <div
                    className="flex-grow flex"
                    style={{ justifyContent: "center" }}
                  >
                    {questions[currentQuestion] && (
                      <div className="space-y-4 mb-8 w-[90%] mx-auto">
                        {questions[currentQuestion].answers.map(
                          (answer, index) => (
                            <div
                              key={index}
                              onClick={() => handleAnswerSelect(index)}
                              className={`p-5 rounded-lg transition-all duration-300 transform hover:scale-[1.01] shadow-md ${
                                selectedAnswer === index
                                  ? index ===
                                    questions[currentQuestion].correctAnswer
                                    ? "bg-gradient-to-r from-green-700/80 to-green-800/80 border-2 border-green-400 shadow-lg shadow-green-500/20"
                                    : "bg-gradient-to-r from-red-700/80 to-red-800/80 border-2 border-red-400 shadow-lg shadow-red-500/20"
                                  : "bg-gradient-to-r from-gray-800/80 to-gray-900/80 hover:from-gray-700/80 hover:to-gray-800/80 border border-gray-600/50"
                              } 
                            ${
                              showAnswer &&
                              index === questions[currentQuestion].correctAnswer
                                ? "bg-gradient-to-r from-green-700/80 to-green-800/80 border-2 border-green-400 shadow-lg shadow-green-500/20"
                                : ""
                            } ${
                                answeredQuestions.includes(currentQuestion)
                                  ? "cursor-not-allowed"
                                  : "cursor-pointer"
                              }`}
                              style={{ marginBottom: 5 }}
                            >
                              <div className="flex items-center">
                                <span className="bg-gray-800 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-xl font-bold border border-gray-700/50 shadow-inner">
                                  {String.fromCharCode(65 + index)}
                                </span>
                                <span className="text-gray-200 text-lg">
                                  {answer}
                                </span>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>

                  {/* Phần giải thích - luôn ở dưới cùng */}
                  <div className="flex-none min-h-[150px] flex items-end justify-center w-full">
                    {questions[currentQuestion] && showAnswer ? (
                      <div className="bg-gradient-to-r from-indigo-900/70 to-indigo-800/70 border border-indigo-500/50 rounded-lg p-6 mb-4 w-[90%] mx-auto shadow-lg transform hover:scale-[1.01] transition-all duration-300">
                        <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300 font-semibold mb-4 text-center text-xl flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Giải thích:
                        </h4>
                        <p className="text-gray-300 text-lg bg-indigo-950/50 p-4 rounded-lg border border-indigo-700/30">
                          {questions[currentQuestion].explanation}
                        </p>
                      </div>
                    ) : (
                      <div className="h-[150px] w-full"></div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Nút điều hướng */}
        <div className="flex justify-between mt-16">
          <Link
            to="/tu-luyen"
            className="bg-gradient-to-r from-amber-700 to-amber-600 text-yellow-100 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-amber-600/50 hover:scale-105 transition-all duration-300 border-2 border-amber-500 flex items-center"
          >
            <span className="mr-2 text-xl">⬅️</span>
            <span className="text-lg">Quay lại</span>
          </Link>

          {/* Nút điều hướng câu hỏi - hiển thị khi đang làm bài kiểm tra */}
          {showQuiz && !showResult && questions.length > 0 && (
            <div className="flex space-x-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-gray-700/30 shadow-lg">
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-lg hover:shadow-red-500/50 flex items-center transform hover:-translate-y-1 border border-red-500/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Reset</span>
              </button>
              <button
                onClick={handlePreviousQuestion}
                className={`bg-gradient-to-r from-gray-600 to-gray-500 text-white px-6 py-3 rounded-lg hover:from-gray-500 hover:to-gray-400 transition-all duration-300 shadow-lg hover:shadow-gray-500/50 flex items-center transform hover:-translate-y-1 border border-gray-500/30 ${
                  currentQuestion === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentQuestion === 0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Câu trước</span>
              </button>
              {showAnswer ? (
                <button
                  onClick={handleNextQuestion}
                  className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-6 py-3 rounded-lg hover:from-blue-500 hover:to-indigo-400 transition-all duration-300 shadow-lg hover:shadow-blue-500/50 flex items-center transform hover:-translate-y-1 border border-blue-500/30"
                >
                  <span className="mr-2">
                    {currentQuestion < questions.length - 1
                      ? "Câu tiếp theo"
                      : "Kết thúc"}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ) : (
                <button
                  className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-6 py-3 rounded-lg opacity-50 cursor-not-allowed flex items-center border border-blue-500/30"
                  disabled
                >
                  <span className="mr-2">
                    {currentQuestion < questions.length - 1
                      ? "Câu tiếp theo"
                      : "Kết thúc"}
                  </span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewExercises;
