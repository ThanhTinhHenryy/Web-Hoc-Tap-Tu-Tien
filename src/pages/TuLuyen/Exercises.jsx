import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import backgroundImage from "../../assets/background.jpg";
import exerciseQuestions from "../../../data/exercises.js";

const Exercises = () => {
  const { levelId } = useParams();
  const [level, setLevel] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]); // Mảng lưu trữ câu trả lời đã chọn cho mỗi câu hỏi
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0); // Biến lưu điểm cao nhất
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Dữ liệu các tầng tu luyện và bài tập tương ứng

  useEffect(() => {
    // Ánh xạ levelId sang tên tầng tu luyện                                  
    const levelNames = {
      1: "Luyện Khí",
      2: "Trúc Cơ",
      3: "Kim Đan",
      4: "Nguyên Anh",
      5: "Hóa Thần",
      0: "Phàm Nhân",
    };

    // Lọc câu hỏi dựa trên tầng tu luyện
    const levelName = levelNames[levelId];
    const filteredQuestions = exerciseQuestions.filter(
      (q) => q.level === levelName
    );
    setQuestions(filteredQuestions);
    setCurrentQuestion(0);
    setShowAnswer(false);
    setSelectedAnswer(null);
    setScore(0);
    setAnsweredQuestions([]);
    localStorage.removeItem('userAnswers');

    // Tạo thông tin tầng tu luyện
    if (levelId && levelNames[levelId]) {
      setLevel({
        name: levelNames[levelId],
        description: `Tầng tu luyện ${levelNames[levelId]} - Hãy kiểm tra kiến thức của bạn.`,
        exercises: [],
      });
    }
  }, [levelId]);
  
  // Tải dữ liệu câu trả lời đã lưu khi component được tải
  useEffect(() => {
    if (showQuiz && !showResult) {
      const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || {};
      const answeredQuestionsArray = Object.keys(userAnswers).map(Number);
      
      if (answeredQuestionsArray.length > 0) {
        setAnsweredQuestions(answeredQuestionsArray);
        
        // Nếu câu hỏi hiện tại đã được trả lời, hiển thị câu trả lời đã chọn
        if (answeredQuestionsArray.includes(currentQuestion)) {
          const savedAnswer = userAnswers[currentQuestion];
          if (savedAnswer !== undefined) {
            setSelectedAnswer(savedAnswer);
            setShowAnswer(true);
          }
        }
      }
    }
  }, [showQuiz, showResult, currentQuestion]);

  // Hàm xử lý khi người dùng chọn câu trả lời
  const handleAnswerSelect = (answerIndex) => {
    // Kiểm tra xem câu hỏi đã được trả lời chưa
    if (showAnswer || answeredQuestions.includes(currentQuestion)) return; // Không cho phép chọn nếu đã hiển thị đáp án hoặc câu hỏi đã được trả lời
    
    setSelectedAnswer(answerIndex);
    setShowAnswer(true);
    
    // Thêm câu hỏi hiện tại vào mảng câu hỏi đã trả lời
    setAnsweredQuestions([...answeredQuestions, currentQuestion]);
    
    // Lưu câu trả lời vào localStorage
    const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || {};
    userAnswers[currentQuestion] = answerIndex;
    localStorage.setItem('userAnswers', JSON.stringify(userAnswers));

    // Kiểm tra đáp án và cập nhật điểm số
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    } else {
      // Nếu trả lời sai, lưu câu hỏi vào danh sách câu hỏi sai
      const wrongQuestions = JSON.parse(localStorage.getItem('wrongQuestions')) || {};
      const questionId = questions[currentQuestion].id;
      wrongQuestions[questionId] = true;
      localStorage.setItem('wrongQuestions', JSON.stringify(wrongQuestions));
    }
  };

  // Hàm chuyển sang câu hỏi tiếp theo
  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      
      // Kiểm tra xem câu hỏi tiếp theo đã được trả lời chưa
      if (answeredQuestions.includes(nextQuestion)) {
        // Nếu đã trả lời, hiển thị câu trả lời đã chọn
        const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || {};
        const savedAnswer = userAnswers[nextQuestion];
        if (savedAnswer !== undefined) {
          setSelectedAnswer(savedAnswer);
          setShowAnswer(true);
        }
      } else {
        // Nếu chưa trả lời, đặt lại trạng thái
        setSelectedAnswer(null);
        setShowAnswer(false);
      }
    } else {
      // Đã hoàn thành tất cả câu hỏi, chuyển sang trang kết quả
      setShowResult(true);
      // Cập nhật điểm cao nhất nếu điểm hiện tại cao hơn
      if (score > highestScore) {
        setHighestScore(score);
      }
    }
  };

  // Hàm quay lại câu hỏi trước đó
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      const prevQuestion = currentQuestion - 1;
      setCurrentQuestion(prevQuestion);
      
      // Kiểm tra xem câu hỏi trước đó đã được trả lời chưa
      if (answeredQuestions.includes(prevQuestion)) {
        // Nếu đã trả lời, hiển thị câu trả lời đã chọn
        const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || {};
        const savedAnswer = userAnswers[prevQuestion];
        if (savedAnswer !== undefined) {
          setSelectedAnswer(savedAnswer);
          setShowAnswer(true);
        }
      } else {
        // Nếu chưa trả lời, đặt lại trạng thái
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
    setAnsweredQuestions([]); // Xóa danh sách câu hỏi đã trả lời
    localStorage.removeItem('userAnswers'); // Xóa dữ liệu câu trả lời đã lưu
  };
  
  // Hàm reset bài kiểm tra
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowAnswer(false);
    setAnsweredQuestions([]); // Xóa danh sách câu hỏi đã trả lời
    localStorage.removeItem('userAnswers'); // Xóa dữ liệu câu trả lời đã lưu
  };

  if (!level) {
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
      {/* Overlay để tăng độ tương phản của background */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}

      <div className="w-full max-w-6xl px-6 py-8 relative z-10">
        {/* Tiêu đề */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-yellow-300 flex items-center justify-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            <span className="text-green-300 mr-4 text-4xl">📚</span>
            Bài Tập Tu Luyện
          </h1>
          <p className="text-xl text-purple-200 mt-4 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            Tầng {level.name} - Hồi Linh Chân Nhân
          </p>
          <p className="text-lg text-gray-300 mt-2 max-w-3xl mx-auto">
            {level.description}
          </p>
        </div>

        {/* Danh sách bài tập */}
        <div className="space-y-8">
          {level.exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="bg-gradient-to-r from-green-900/80 to-teal-900/80 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-green-500/50"
            >
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-green-300 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
                    {exercise.id}. {exercise.name}
                  </h2>
                  <span className="bg-green-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                    {exercise.difficulty}
                  </span>
                </div>

                <p className="text-gray-200 mt-3">{exercise.description}</p>

                <div className="mt-4">
                  <h3 className="text-yellow-300 font-semibold mb-2">
                    Các bước thực hiện:
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-gray-300 pl-4">
                    {exercise.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-blue-300 font-semibold mb-1">
                      Thời gian:
                    </h3>
                    <p className="text-gray-300">{exercise.duration}</p>
                  </div>
                  <div>
                    <h3 className="text-purple-300 font-semibold mb-1">
                      Lợi ích:
                    </h3>
                    <p className="text-gray-300">{exercise.benefits}</p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2 rounded-lg hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-md hover:shadow-green-500/50 flex items-center">
                    <span className="mr-2">Bắt đầu tu luyện</span>
                    <span>🧘‍♂️</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Phần kiểm tra kiến thức */}
        {questions.length > 0 && (
          <div className="mt-16">
            {/* Thanh tiến trình - luôn hiển thị ở trên cùng khi đang làm bài kiểm tra */}
            <h2 className="text-3xl font-bold text-purple-300 mb-2 flex items-center">
              <span className="text-yellow-300 mr-3">🧠</span>
              Kiểm tra kiến thức
            </h2>
            {showQuiz && !showResult && (
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
                      width: `${
                        ((currentQuestion + 1) / questions.length) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            )}

            <div
              // className="bg-gradient-to-r from-purple-900/90 to-indigo-900/90 rounded-lg overflow-hidden shadow-lg border border-purple-500/50 p-6"
              className="bg-gray-400/30 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg min-h-[500px] flex flex-col items-center justify-center text-center border border-gray-300/30"
            >
              {/* <h2 className="text-3xl font-bold text-purple-300 mb-2 flex items-center">
                <span className="text-yellow-300 mr-3">🧠</span>
                Kiểm tra kiến thức
              </h2> */}

              {!showQuiz && !showResult ? (
                <div className="text-center py-8 flex flex-col items-center justify-center">
                  <p className="text-gray-200 mb-6">
                    Kiểm tra kiến thức của bạn về tầng {level.name} với{" "}
                    {questions.length} câu hỏi trắc nghiệm.
                  </p>
                  <button
                    onClick={startQuiz}
                    className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-400 transition-all duration-300 shadow-md hover:shadow-purple-500/50 flex items-center justify-center mx-auto"
                  >
                    <span className="mr-2">Bắt đầu kiểm tra</span>
                    <span>📝</span>
                  </button>
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
                        Bạn đã trả lời đúng {score} trên tổng số{" "}
                        {questions.length} câu hỏi
                      </div>
                      <div className="text-amber-300 mt-4 font-semibold">
                        Điểm cao nhất: {highestScore}/{questions.length}
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

                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={startQuiz}
                        className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-8 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-400 transition-all duration-300 shadow-md hover:shadow-purple-500/50 flex items-center"
                      >
                        <span className="mr-2">Làm lại bài kiểm tra</span>
                        <span>🔄</span>
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="py-6 px-4 w-full max-w-4xl mx-auto flex flex-col h-full">
                  {/* Phần câu hỏi - luôn ở trên cùng */}
                  <div className="flex-none" style={{ marginBottom: 10 }}>
                    {questions[currentQuestion] && (
                      <h3 className="text-2xl font-semibold text-yellow-200 mb-8 px-6 py-4 bg-gray-800/50 rounded-lg border border-yellow-500/30 w-full text-center shadow-md">
                        {questions[currentQuestion].question}
                      </h3>
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
                              className={`p-5 rounded-lg transition-all duration-200 ${
                                selectedAnswer === index
                                  ? index ===
                                    questions[currentQuestion].correctAnswer
                                    ? "bg-green-700/70 border-2 border-green-400"
                                    : "bg-red-700/70 border-2 border-red-400"
                                  : "bg-gray-800/70 hover:bg-gray-700/70 border border-gray-600"
                              } 
                              ${
                                showAnswer &&
                                index ===
                                  questions[currentQuestion].correctAnswer
                                  ? "bg-green-700/70 border-0 border-green-400"
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
            to="/tu-luyen/co-ban/healing-cultivator"
            className="bg-gradient-to-r from-amber-700 to-amber-600 text-yellow-100 font-bold py-3 px-8 rounded-lg shadow-lg hover:shadow-amber-600/50 hover:scale-105 transition-all duration-300 border-2 border-amber-500 flex items-center"
          >
            <span className="mr-2 text-xl">⬅️</span>
            <span className="text-lg">Quay lại</span>
          </Link>

          {/* Nút điều hướng câu hỏi - hiển thị khi đang làm bài kiểm tra */}
          {showQuiz && !showResult && (
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
                    {currentQuestion < questions.length - 1
                      ? "Câu tiếp theo"
                      : "Kết thúc"}
                  </span>
                  <span>➡️</span>
                </button>
              ) : (
                <button
                  className="bg-gradient-to-r from-blue-600 to-indigo-500 text-white px-6 py-3 rounded-lg opacity-50 cursor-not-allowed flex items-center"
                  disabled
                >
                  <span className="mr-2">
                    {currentQuestion < questions.length - 1
                      ? "Câu tiếp theo"
                      : "Kết thúc"}
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

export default Exercises;
