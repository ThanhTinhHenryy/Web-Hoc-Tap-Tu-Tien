import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { gameBlocks } from "../../data/gameBlock";

const VocabularyGame = () => {
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [availableLetters, setAvailableLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [gems, setGems] = useState(0);
  const [stars, setStars] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [timer, setTimer] = useState(null);
  const navigate = useNavigate();
  const { levelId } = useParams();

  // Load user data from localStorage
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      setGems(user.gems || 0);
      setStars(user.stars || 0);
    }
  }, []);

  // Initialize game if levelId is provided in URL
  useEffect(() => {
    if (levelId) {
      const level = gameBlocks.find((block) => block.id === parseInt(levelId));
      if (level) {
        setSelectedLevel(level);
      }
    }
  }, [levelId]);

  // Set up the game when a level is selected
  useEffect(() => {
    if (selectedLevel) {
      startGame();
    }
  }, [selectedLevel]);

  // Timer countdown
  useEffect(() => {
    if (currentQuestion && !gameOver && !gameWon) {
      const countdown = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(countdown);
            handleWrongAnswer();
            return 60; // Reset for next question
          }
          return prev - 1;
        });
      }, 1000);
      setTimer(countdown);

      return () => clearInterval(countdown);
    }
  }, [currentQuestion, gameOver, gameWon]);

  const startGame = () => {
    setLives(3);
    setScore(0);
    setGameOver(false);
    setGameWon(false);
    loadNextQuestion();
  };

  const loadNextQuestion = () => {
    if (!selectedLevel) return;

    const answeredQuestions = score;
    if (answeredQuestions >= selectedLevel.questions.length) {
      // All questions answered, game won
      handleGameWon();
      return;
    }

    const nextQuestion = selectedLevel.questions[answeredQuestions];
    setCurrentQuestion(nextQuestion);
    setSelectedLetters([]);
    setAvailableLetters(shuffleArray([...nextQuestion.letterOptions]));
    setShowHint(false);
    setTimeLeft(60); // Reset timer for new question
  };

  const handleLetterSelect = (letter, index) => {
    if (gameOver || gameWon) return;

    const newSelectedLetters = [
      ...selectedLetters,
      { letter, originalIndex: index },
    ];
    setSelectedLetters(newSelectedLetters);

    // Remove from available letters
    const newAvailableLetters = [...availableLetters];
    newAvailableLetters[index] = null; // Mark as used
    setAvailableLetters(newAvailableLetters);

    // Check if answer is complete
    const currentAnswer = newSelectedLetters
      .map((item) => item.letter)
      .join("");
    if (currentAnswer.length === currentQuestion.answer.length) {
      // Clear timer
      if (timer) clearInterval(timer);

      // Check if answer is correct
      if (currentAnswer === currentQuestion.answer) {
        handleCorrectAnswer();
      } else {
        handleWrongAnswer();
      }
    }
  };

  const handleLetterRemove = (index) => {
    if (gameOver || gameWon) return;

    const removedLetter = selectedLetters[index];
    const newSelectedLetters = selectedLetters.filter((_, i) => i !== index);
    setSelectedLetters(newSelectedLetters);

    // Add back to available letters
    const newAvailableLetters = [...availableLetters];
    newAvailableLetters[removedLetter.originalIndex] = removedLetter.letter;
    setAvailableLetters(newAvailableLetters);
  };

  const handleCorrectAnswer = () => {
    setScore(score + 1);
    setGems(gems + 2); // Reward for correct answer
    updateUserData(gems + 2, stars);
    loadNextQuestion();
  };

  const handleWrongAnswer = () => {
    setLives(lives - 1);
    if (lives <= 1) {
      setGameOver(true);
    } else {
      // Reset current question
      setSelectedLetters([]);
      setAvailableLetters(shuffleArray([...currentQuestion.letterOptions]));
    }
  };

  const handleGameWon = () => {
    setGameWon(true);
    const levelRewards = selectedLevel.rewards;
    const newGems = gems + levelRewards.gems;
    const newStars = stars + levelRewards.stars;
    setGems(newGems);
    setStars(newStars);
    updateUserData(newGems, newStars);
  };

  const updateUserData = (newGems, newStars) => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      user.gems = newGems;
      user.stars = newStars;
      localStorage.setItem("user", JSON.stringify(user));
    }
  };

  const showHintHandler = () => {
    if (gems >= 5) {
      setShowHint(true);
      setGems(gems - 5); // Cost for hint
      updateUserData(gems - 5, stars);
    }
  };

  const skipQuestionHandler = () => {
    if (gems >= 10) {
      setGems(gems - 10); // Cost for skip
      updateUserData(gems - 10, stars);
      loadNextQuestion();
    }
  };

  // Helper function to shuffle array
  const shuffleArray = (array) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Render level selection screen
  if (!selectedLevel) {
    return (
      <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8 mt-4">
            Chọn cấp độ
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameBlocks.map((level) => (
              <div
                key={level.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                onClick={() => setSelectedLevel(level)}
              >
                <div className="h-40 relative">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/game/thumbnails/thumb${level.level}.png`}
                    alt={`Level ${level.level}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-md">
                    <span className="font-bold text-gray-800">
                      {level.level}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 mb-1">
                    {level.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {level.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-1">⭐</span>
                      <span className="text-sm text-gray-600">
                        {level.rewards.stars}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-1">💎</span>
                      <span className="text-sm text-gray-600">
                        {level.rewards.gems}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate("/game")}
              className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
              Quay lại
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render game over screen
  if (gameOver) {
    return (
      <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-4">Game Over!</h2>
          <p className="text-gray-600 mb-6">
            Bạn đã trả lời đúng {score} câu hỏi.
          </p>
          <div className="flex justify-center space-x-4">
            <button
              onClick={startGame}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Chơi lại
            </button>
            <button
              onClick={() => setSelectedLevel(null)}
              className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
              Chọn cấp độ khác
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render game won screen
  if (gameWon) {
    return (
      <div className="min-h-screen bg-gray-100 pt-20 pb-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Chúc mừng!</h2>
          <p className="text-gray-600 mb-4">
            Bạn đã hoàn thành cấp độ {selectedLevel.level}!
          </p>
          <div className="flex justify-center space-x-4 mb-6">
            <div className="flex items-center">
              <span className="text-yellow-500 text-2xl mr-1">⭐</span>
              <span className="text-xl">+{selectedLevel.rewards.stars}</span>
            </div>
            <div className="flex items-center">
              <span className="text-red-500 text-2xl mr-1">💎</span>
              <span className="text-xl">+{selectedLevel.rewards.gems}</span>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              onClick={startGame}
              className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Chơi lại
            </button>
            <button
              onClick={() => setSelectedLevel(null)}
              className="px-6 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
              Chọn cấp độ khác
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render game screen
  return (
    <div
      className="min-h-screen pt-20 pb-10 px-4 sm:px-6 lg:px-8 bg-cover bg-center"
      style={{
        backgroundImage: `url(/src/assets/game/backgrounds/${selectedLevel.background}-bg.jpg)`,
      }}
    >
      <div className="max-w-4xl mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg p-6">
        {/* Game header */}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <span className="text-red-500 mr-1">❤️</span>
            <span className="font-bold">{lives}</span>
          </div>
          <div className="text-center">
            <h2 className="text-xl font-bold text-gray-800">
              {selectedLevel.title}
            </h2>
            <p className="text-sm text-gray-600">
              Câu hỏi {score + 1}/{selectedLevel.questions.length}
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <span className="text-yellow-500 mr-1">⭐</span>
              <span className="font-bold">{stars}</span>
            </div>
            <div className="flex items-center">
              <span className="text-red-500 mr-1">💎</span>
              <span className="font-bold">{gems}</span>
            </div>
          </div>
        </div>

        {/* Timer */}
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{
              width: `${(timeLeft / 60) * 100}%`,
              transition: "width 1s linear",
            }}
          ></div>
        </div>

        {/* Question */}
        <div className="mb-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">Câu hỏi:</h3>
          <p className="text-gray-700">{currentQuestion?.question}</p>

          {showHint && (
            <div className="mt-2 p-2 bg-yellow-100 rounded-md">
              <p className="text-sm text-gray-700">
                <strong>Gợi ý:</strong> {currentQuestion?.hint}
              </p>
            </div>
          )}
        </div>

        {/* Answer area */}
        <div className="mb-8">
          <div className="flex justify-center mb-4">
            <div className="flex flex-wrap justify-center gap-2">
              {Array.from({ length: currentQuestion?.answer.length || 0 }).map(
                (_, index) => {
                  const selectedLetter = selectedLetters[index];
                  return (
                    <div
                      key={index}
                      className={`w-12 h-12 flex items-center justify-center rounded-md border-2 ${
                        selectedLetter
                          ? "border-blue-500 bg-blue-100"
                          : "border-gray-300"
                      }`}
                      onClick={() =>
                        selectedLetter && handleLetterRemove(index)
                      }
                    >
                      <span className="text-xl font-bold text-gray-800">
                        {selectedLetter?.letter || ""}
                      </span>
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* Available letters */}
          <div className="flex flex-wrap justify-center gap-2">
            {availableLetters.map(
              (letter, index) =>
                letter && (
                  <div
                    key={index}
                    className="w-12 h-12 flex items-center justify-center rounded-md bg-blue-500 text-white cursor-pointer hover:bg-blue-600 transition-colors duration-200"
                    onClick={() => handleLetterSelect(letter, index)}
                  >
                    <span className="text-xl font-bold">{letter}</span>
                  </div>
                )
            )}
          </div>
        </div>

        {/* Game controls */}
        <div className="flex justify-center space-x-4">
          <button
            onClick={showHintHandler}
            className={`px-4 py-2 rounded-md ${
              gems >= 5
                ? "bg-yellow-500 hover:bg-yellow-600"
                : "bg-gray-400 cursor-not-allowed"
            } text-white transition-colors duration-300 flex items-center`}
            disabled={gems < 5 || showHint}
          >
            <span className="mr-1">💡</span> Gợi ý (5 💎)
          </button>
          <button
            onClick={skipQuestionHandler}
            className={`px-4 py-2 rounded-md ${
              gems >= 10
                ? "bg-purple-500 hover:bg-purple-600"
                : "bg-gray-400 cursor-not-allowed"
            } text-white transition-colors duration-300 flex items-center`}
            disabled={gems < 10}
          >
            <span className="mr-1">⏭️</span> Bỏ qua (10 💎)
          </button>
        </div>
      </div>
    </div>
  );
};

export default VocabularyGame;
