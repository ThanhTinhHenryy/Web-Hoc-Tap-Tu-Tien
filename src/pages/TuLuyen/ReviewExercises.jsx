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
      const wrongQuestionsData = JSON.parse(localStorage.getItem('wrongQuestions')) || {};
      
      // Chuyển đổi từ object sang array
      const wrongQuestionsArray = Object.keys(wrongQuestionsData).map(id => {
        const questionId = parseInt(id);
        return exerciseQuestions.find(q => q.id === questionId);
      }).filter(q => q !== undefined); // Lọc bỏ các câu hỏi không tìm thấy
      
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
            "Hóa Thần": 5
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
      const wrongQuestions = JSON.parse(localStorage.getItem('wrongQuestions')) || {};
      const questionId = questions[currentQuestion].id;
      delete wrongQuestions[questionId];
      localStorage.setItem('wrongQuestions', JSON.stringify(wrongQuestions));
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
    localStorage.removeItem('wrongQuestions');
    setNoWrongAnswers(true);
    setQuestions([]);
    setShowQuiz(false);
    setShowResult(false);
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
            <span className="text-blue-300 mr-4 text-4xl">🔄</span>
            Luyện Tập Lại
          </h1>
          <p className="text-xl text-purple-200 mt-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            Ôn tập lại những câu hỏi bạn đã làm sai trước đây
          </p>
        </div>

        {/* Phần kiểm tra kiến thức */}
        {noWrongAnswers ? (
          <div className="bg-gray-400/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg min-h-[300px] flex flex-col items-center justify-center text-center border border-gray-300/30 p-8">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">Chúc mừng!</h2>
            <p className="text-xl text-gray-200 mb-8">
              Bạn chưa có câu hỏi nào trả lời sai. Hãy tiếp tục tu luyện để nâng cao trình độ!
            </p>
            <Link
              to="/tu-luyen"
              className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-400 transition-all duration-300 shadow-md hover:shadow-purple-500/50 flex items-center"
            >
              <span className="mr-2">Quay lại tu luyện</span>
              <span>⬅️</span>
            </Link>
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
                    Điểm: {score}/{questions.length}
                  </span>
                </div>

                {/* Thanh tiến trình */}
                <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-indigo-400 h-2.5 rounded-full"
                    style={{
                      width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                    }}
                  ></div>
                </div>
              </div>
            )}

            <div className="bg-gray-400/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg min-h-[500px] flex flex-col items-center justify-center text-center border border-gray-300/30">
              {!showQuiz && !showResult ? (
                <div className="text-center py-8 flex flex-col items-center justify-center">
                  <p className="text-gray-200 mb-6">
                    Bạn có {questions.length} câu hỏi đã trả lời sai trước đây. Hãy luyện tập lại để củng cố kiến thức!
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <button
                      onClick={startQuiz}
                      className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-400 transition-all duration-300 shadow-md hover:shadow-purple-500/50 flex items-center justify-center"
                    >
                      <span className="mr-2">Bắt đầu luyện tập</span>
                      <span>📝</span>
                    </button>
                    <button
                      onClick={clearAllWrongQuestions}
                      className="bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-3 rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-md hover:shadow-red-500/50 flex items-center justify-center"
                    >
                      <span className="mr-2">Xóa tất cả câu hỏi</span>
                      <span>🗑️</span>
                    </button>
                  </div>
                </div>
              ) : showResult ? (
                <div className="py-8">
                  {/* Trang kết quả */}
                  <div className="text-center">
                    <div className="mb-8">
                      <div className="text-6xl font-bold text-yellow-300 mb-4">
                        {score}/{questions.length}
                      </div>
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
                        Bạn đã trả lời đúng {score} trên tổng số {questions.length} câu hỏi
                      </div>
                      <div className="text-amber-300 mt-4 font-semibold">
                        {score === questions.length ? (
                          <span>Chúc mừng! Bạn đã trả lời đúng tất cả các câu hỏi! 🏆</span>
                        ) : (
                          <span>Còn {questions.length - score} câu hỏi cần luyện tập thêm</span>
                        )}
                      </div>
                    </div>

                    {/* Thanh tiến trình */}
                    <div className="w-full max-w-md mx-auto bg-gray-700 rounded-full h-4 mb-8">
                      <div
                        className="bg-gradient-to-r from-green-500 to-green-400 h-4 rounded-full"
                        style={{
                          width: `${(score / questions.length) * 100}%`,
                        }}
                      ></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
                      <button
                        onClick={startQuiz}
                        className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-400 transition-all duration-300 shadow-md hover:shadow-purple-500/50 flex items-center justify-center"
                      >
                        <span className="mr-2">Luyện tập lại</span>
                        <span>🔄</span>
                      </button>
                      <Link
                        to="/tu-luyen"
                        className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-8 py-3 rounded-lg hover:from-amber-500 hover:to-amber-400 transition-all duration-300 shadow-md hover:shadow-amber-500/50 flex items-center justify-center"
                      >
                        <span className="mr-2">Quay lại tu luyện</span>
                        <span>⬅️</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-6 px-4 w-full max-w-4xl mx-auto flex flex-col h-full">
                  {/* Phần câu hỏi - luôn ở trên cùng */}
                  <div className="flex-none" style={{ marginBottom: 10 }}>
                    {questions[currentQuestion] && (
                      <div>
                        <div className="bg-gray-800/70 px-4 py-2 rounded-lg inline-block mb-2">
                          <span className="text-yellow-400 font-medium">Cấp độ: {questions[currentQuestion].level}</span>
                        </div>
                        <h3 className="text-2xl font-semibold text-yellow-200 mb-8 px-6 py-4 bg-gray-800/50 rounded-lg border border-yellow-500/30 w-full text-center shadow-md">
                          {questions[currentQuestion].question}
                        </h3>
                      </div>
                    )}
                  </div>

                  {/* Phần lựa chọn - ở giữa */}
                  <div className="flex-grow flex" style={{ justifyContent: "center" }}>
                    {questions[currentQuestion] && (
                      <div className="space-y-4 mb-8 w-[90%] mx-auto">
                        {questions[currentQuestion].answers.map((answer, index) => (
                          <div
                            key={index}
                            onClick={() => handleAnswerSelect(index)}
                            className={`p-5 rounded-lg transition-all duration-200 ${
                              selectedAnswer === index
                                ? index === questions[currentQuestion].correctAnswer
                                  ? "bg-green-700/70 border-2 border-green-400"
                                  : "bg-red-700/70 border-2 border-red-400"
                                : "bg-gray-800/70 hover:bg-gray-700/70 border border-gray-600"
                            } 
                            ${
                              showAnswer &&
                              index === questions[currentQuestion].correctAnswer
                                ? "bg-green-700/70 border-2 border-green-400"
                                : ""
                            } ${
                              answeredQuestions.includes(currentQuestion)
                                ? "cursor-not-allowed"
                                : "cursor-pointer"
                            }`}
                            style={{ marginBottom: 5 }}
                          >
                            <div className="flex items-center">
                              <span className="bg-gray-700 text-white w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0 text-xl font-bold">
                                {String.fromCharCode(65 + index)}
                              </span>
                              <span className="text-gray-200 text-lg">{answer}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Phần giải thích - luôn ở dưới cùng */}
                  <div className="flex-none min-h-[150px] flex items-end justify-center w-full">
                    {questions[currentQuestion] && showAnswer ? (
                      <div className="bg-indigo-900/60 border border-indigo-500/50 rounded-lg p-6 mb-4 w-[90%] mx-auto shadow-lg">
                        <h4 className="text-indigo-300 font-semibold mb-4 text-center text-xl">
                          Giải thích:
                        </h4>
                        <p className="text-gray-300 text-lg">
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
            <div className="flex space-x-4">
              <button
                onClick={resetQuiz}
                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-6 py-3 rounded-lg hover:from-red-500 hover:to-red-400 transition-all duration-300 shadow-md hover:shadow-red-500/50 flex items-center"
              >
                <span className="mr-2">🔄</span>
                <span>Reset</span>
              </button>
              <button
                onClick={handlePreviousQuestion}
                className={`bg-gradient-to-r from-gray-600 to-gray-500 text-white px-6 py-3 rounded-lg hover:from-gray-500 hover:to-gray-400 transition-all duration-300 shadow-md hover:shadow-gray-500/50 flex items-center ${
                  currentQuestion === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={currentQuestion === 0}
              >
                <span>⬅️</span>
                <span className="ml-2">Câu trước</span>
              </button>
              {showAnswer ? (
                <button
                  onClick={handleNextQuestion}
                  className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-6 py-3 rounded-lg hover:from-blue-500 hover:to-indigo-400 transition-all duration-300 shadow-md hover:shadow-blue-500/50 flex items-center"
                >
                  <span className="mr-2">
                    {currentQuestion < questions.length - 1 ? "Câu tiếp theo" : "Kết thúc"}
                  </span>
                  <span>➡️</span>
                </button>
              ) : (
                <button
                  className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-6 py-3 rounded-lg opacity-50 cursor-not-allowed flex items-center"
                  disabled
                >
                  <span className="mr-2">
                    {currentQuestion < questions.length - 1 ? "Câu tiếp theo" : "Kết thúc"}
                  </span>
                  <span>➡️</span>
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