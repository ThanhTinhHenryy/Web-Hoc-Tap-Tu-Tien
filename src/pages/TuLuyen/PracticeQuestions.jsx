import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backgroundImage from "../../assets/background.jpg";

const PracticeQuestions = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(true);
  const [noQuestions, setNoQuestions] = useState(false);

  useEffect(() => {
    // Lấy danh sách câu hỏi từ localStorage
    const loadQuestions = () => {
      setLoading(true);
      const practiceQuestions = JSON.parse(localStorage.getItem('practiceQuestions')) || [];
      
      if (practiceQuestions.length === 0) {
        setNoQuestions(true);
      } else {
        setQuestions(practiceQuestions);
      }
      
      setLoading(false);
    };
    
    loadQuestions();
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
    setShowResult(false);
  };

  // Hàm quay lại trang tạo câu hỏi
  const goToCreateQuestion = () => {
    window.location.href = "/tu-luyen/tao-cau-hoi";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-purple-900">
        <p className="text-white text-xl">Đang tải thông tin...</p>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center py-10 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="w-full max-w-6xl px-6 py-8 relative z-10">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-yellow-300 flex items-center justify-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            <span className="text-blue-300 mr-4 text-4xl">📝</span>
            Luyện Tập Câu Hỏi
          </h1>
          <p className="text-xl text-purple-200 mt-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            Luyện tập với những câu hỏi bạn đã tạo
          </p>
        </div>

        {/* Nút quay lại */}
        <div className="mb-6">
          <Link
            to="/tu-luyen"
            className="bg-purple-700 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-all duration-300 inline-flex items-center"
          >
            <span className="mr-2">⬅️</span>
            Quay lại
          </Link>
        </div>

        {/* Phần kiểm tra kiến thức */}
        {noQuestions ? (
          <div className="bg-gray-400/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg min-h-[300px] flex flex-col items-center justify-center text-center border border-gray-300/30 p-8">
            <div className="text-6xl mb-6">📝</div>
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Chưa có câu hỏi nào!</h2>
            <p className="text-xl text-gray-200 mb-8">
              Bạn chưa tạo câu hỏi nào để luyện tập. Hãy tạo câu hỏi trước khi bắt đầu luyện tập.
            </p>
            <button
              onClick={goToCreateQuestion}
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-400 transition-all duration-300 shadow-md hover:shadow-purple-500/50 flex items-center"
            >
              <span className="mr-2">Tạo câu hỏi</span>
              <span>✏️</span>
            </button>
          </div>
        ) : (
          <div>
            {/* Thanh tiến trình - luôn hiển thị ở trên cùng khi đang làm bài kiểm tra */}
            {showQuiz && !showResult && questions.length > 0 && (
              <div className="w-full px-4 pt-4 mb-4" style={{ marginTop: 10 }}>
                {/* Hiển thị tiến trình */}
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">
                    Câu hỏi {currentQuestion + 1}/{questions.length}
                  </span>
                  <span className="text-gray-300">
                    Điểm: {score}/{answeredQuestions.length}
                  </span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-indigo-500 h-2.5 rounded-full"
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            )}

            {/* Phần giới thiệu bài kiểm tra */}
            {!showQuiz && !showResult && (
              <div className="bg-gray-400/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gray-300/30">
                <div className="p-8 text-center">
                  <div className="text-6xl mb-6">📝</div>
                  <h2 className="text-3xl font-bold text-yellow-300 mb-4">
                    Luyện tập với câu hỏi của bạn
                  </h2>
                  <p className="text-xl text-gray-200 mb-8">
                    Bạn đã tạo {questions.length} câu hỏi. Hãy kiểm tra kiến thức của mình!
                  </p>
                  <button
                    onClick={startQuiz}
                    className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-400 transition-all duration-300 shadow-md hover:shadow-purple-500/50"
                  >
                    Bắt đầu luyện tập
                  </button>
                </div>
              </div>
            )}

            {/* Trang kết quả */}
            {showResult && (
              <div className="bg-gray-400/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gray-300/30">
                <div className="p-8 text-center">
                  <div className="text-6xl mb-6">🏆</div>
                  <h2 className="text-3xl font-bold text-yellow-300 mb-4">
                    Kết quả luyện tập
                  </h2>
                  <p className="text-xl text-gray-200 mb-4">
                    Bạn đã trả lời đúng {score}/{questions.length} câu hỏi
                  </p>

                  {/* Hiển thị thanh tiến trình */}
                  <div className="w-full max-w-md mx-auto bg-gray-700 rounded-full h-4 mb-8">
                    <div
                      className={`h-4 rounded-full ${score / questions.length >= 0.7
                        ? "bg-green-500"
                        : score / questions.length >= 0.4
                          ? "bg-yellow-500"
                          : "bg-red-500"
                        }`}
                      style={{ width: `${(score / questions.length) * 100}%` }}
                    ></div>
                  </div>

                  <div className="flex flex-wrap justify-center gap-4">
                    <button
                      onClick={resetQuiz}
                      className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-400 transition-all duration-300 shadow-md hover:shadow-purple-500/50"
                    >
                      Luyện tập lại
                    </button>
                    <Link
                      to="/tu-luyen/tao-cau-hoi"
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-md hover:shadow-blue-500/50"
                    >
                      Tạo thêm câu hỏi
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Hiển thị câu hỏi và đáp án */}
            {showQuiz && !showResult && questions.length > 0 && (
              <div className="bg-gray-400/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg border border-gray-300/30">
                <div className="p-6">
                  {/* Câu hỏi */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {questions[currentQuestion].question}
                    </h3>
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <span className="bg-purple-900 text-purple-200 px-2 py-1 rounded mr-2">
                        {questions[currentQuestion].level}
                      </span>
                      <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded">
                        {questions[currentQuestion].attribute}
                      </span>
                    </div>
                  </div>

                  {/* Đáp án */}
                  <div className="space-y-3 mb-6">
                    {questions[currentQuestion].answers.map((answer, index) => (
                      <div
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
                          selectedAnswer === index
                            ? showAnswer
                              ? index === questions[currentQuestion].correctAnswer
                                ? "bg-green-800/50 border-green-500"
                                : "bg-red-800/50 border-red-500"
                              : "bg-purple-800/50 border-purple-500"
                            : "bg-gray-700/70 border-gray-600 hover:bg-gray-600/70"
                        }`}
                      >
                        <div className="flex items-start">
                          <div
                            className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 ${
                              selectedAnswer === index
                                ? showAnswer
                                  ? index === questions[currentQuestion].correctAnswer
                                    ? "bg-green-500 text-white"
                                    : "bg-red-500 text-white"
                                  : "bg-purple-500 text-white"
                                : "bg-gray-600 text-gray-300"
                            }`}
                          >
                            {String.fromCharCode(65 + index)}
                          </div>
                          <span className="text-white">{answer}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Giải thích */}
                  {showAnswer && (
                    <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4 mb-6">
                      <h4 className="text-blue-300 font-medium mb-2">Giải thích:</h4>
                      <p className="text-gray-300">
                        {questions[currentQuestion].explanation}
                      </p>
                    </div>
                  )}

                  {/* Nút điều hướng */}
                  <div className="flex justify-between">
                    <div>
                      <button
                        onClick={() => window.location.href = "/tu-luyen"}
                        className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-all duration-300 mr-2"
                      >
                        Quay lại
                      </button>
                      <button
                        onClick={resetQuiz}
                        className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-500 transition-all duration-300"
                      >
                        Làm lại
                      </button>
                    </div>
                    <div>
                      <button
                        onClick={handlePreviousQuestion}
                        disabled={currentQuestion === 0}
                        className={`px-4 py-2 rounded-lg mr-2 ${currentQuestion === 0
                          ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                          : "bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300"
                          }`}
                      >
                        Trước
                      </button>
                      <button
                        onClick={handleNextQuestion}
                        className={`px-4 py-2 rounded-lg ${
                          !showAnswer && !answeredQuestions.includes(currentQuestion)
                            ? "bg-gray-700 text-gray-500 cursor-not-allowed"
                            : "bg-blue-600 text-white hover:bg-blue-500 transition-all duration-300"
                        }`}
                        disabled={
                          !showAnswer && !answeredQuestions.includes(currentQuestion)
                        }
                      >
                        {currentQuestion === questions.length - 1 ? "Kết thúc" : "Tiếp theo"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticeQuestions;