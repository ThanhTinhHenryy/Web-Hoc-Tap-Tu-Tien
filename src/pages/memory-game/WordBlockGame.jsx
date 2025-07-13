import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { gameBlocks, backgrounds, gameSettings } from '../../../data/gameBlock';
import Confetti from '../../components/Confetti';

const WordBlockGame = () => {
  const { levelId } = useParams();
  const navigate = useNavigate();
  const [currentLevel, setCurrentLevel] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [availableLetters, setAvailableLetters] = useState([]);
  const [score, setScore] = useState(0);
  const [gems, setGems] = useState(parseInt(localStorage.getItem('userGems') || '0'));
  const [lives, setLives] = useState(gameSettings.initialLives);
  const [timeLeft, setTimeLeft] = useState(gameSettings.timePerQuestion);
  const [isTimerRunning, setIsTimerRunning] = useState(true);
  const [showHint, setShowHint] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [unlockedLevels, setUnlockedLevels] = useState(
    JSON.parse(localStorage.getItem('unlockedWordGameLevels') || '[1]')
  );

  // Khởi tạo level và câu hỏi
  useEffect(() => {
    const level = gameBlocks.find(block => block.id === parseInt(levelId || 1));
    if (level) {
      setCurrentLevel(level);
      resetQuestion(level.questions[0]);
    }
  }, [levelId]);

  // Đếm ngược thời gian
  useEffect(() => {
    let timer;
    if (isTimerRunning && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && lives > 0) {
      handleWrongAnswer();
    }

    return () => clearTimeout(timer);
  }, [timeLeft, isTimerRunning]);

  // Lưu trữ gems và levels đã mở khóa
  useEffect(() => {
    localStorage.setItem('userGems', gems.toString());
    localStorage.setItem('unlockedWordGameLevels', JSON.stringify(unlockedLevels));
  }, [gems, unlockedLevels]);

  // Reset câu hỏi hiện tại
  const resetQuestion = (question) => {
    if (!question) return;
    
    setSelectedLetters([]);
    setShowHint(false);
    setTimeLeft(gameSettings.timePerQuestion);
    setIsTimerRunning(true);
    
    // Shuffle các chữ cái cho câu hỏi
    const shuffledLetters = [...question.letterOptions].sort(() => Math.random() - 0.5);
    setAvailableLetters(shuffledLetters.map((letter, index) => ({
      letter,
      id: `letter-${index}-${Date.now()}`
    })));
  };

  // Xử lý khi người chơi chọn một chữ cái
  const handleLetterClick = (letter, index) => {
    // Thêm chữ cái vào mảng đã chọn
    const newSelectedLetters = [...selectedLetters, { letter: letter.letter, id: letter.id }];
    setSelectedLetters(newSelectedLetters);
    
    // Xóa chữ cái khỏi mảng có sẵn
    const newAvailableLetters = [...availableLetters];
    newAvailableLetters.splice(index, 1);
    setAvailableLetters(newAvailableLetters);
    
    // Kiểm tra câu trả lời sau khi chọn chữ cái
    checkAnswer(newSelectedLetters);
  };

  // Xử lý khi người chơi bỏ chọn một chữ cái
  const handleSelectedLetterClick = (letter, index) => {
    // Xóa chữ cái khỏi mảng đã chọn
    const newSelectedLetters = [...selectedLetters];
    newSelectedLetters.splice(index, 1);
    setSelectedLetters(newSelectedLetters);
    
    // Thêm chữ cái vào mảng có sẵn
    setAvailableLetters([...availableLetters, letter]);
  };

  // Kiểm tra câu trả lời
  const checkAnswer = (selected) => {
    if (!currentLevel) return;
    
    const currentQ = currentLevel.questions[currentQuestion];
    const userAnswer = selected.map(item => item.letter).join('');
    
    if (userAnswer === currentQ.answer) {
      // Câu trả lời đúng
      handleCorrectAnswer();
    } else if (userAnswer.length === currentQ.answer.length) {
      // Câu trả lời sai
      handleWrongAnswer();
    }
  };

  // Xử lý khi trả lời đúng
  const handleCorrectAnswer = () => {
    setIsTimerRunning(false);
    setScore(score + 1);
    setGems(gems + gameSettings.correctAnswerReward);
    
    // Hiển thị hiệu ứng confetti
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
    
    // Chuyển sang câu hỏi tiếp theo hoặc kết thúc game
    setTimeout(() => {
      if (currentQuestion < currentLevel.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        resetQuestion(currentLevel.questions[currentQuestion + 1]);
      } else {
        completeLevel();
      }
    }, 1500);
  };

  // Xử lý khi trả lời sai
  const handleWrongAnswer = () => {
    setIsTimerRunning(false);
    setLives(lives - 1);
    
    // Nếu hết mạng, kết thúc game
    if (lives <= 1) {
      setTimeout(() => {
        navigate('/tu-luyen/word-game');
      }, 2000);
    } else {
      // Reset câu hỏi hiện tại
      setTimeout(() => {
        resetQuestion(currentLevel.questions[currentQuestion]);
      }, 1500);
    }
  };

  // Xử lý khi hoàn thành level
  const completeLevel = () => {
    setGameCompleted(true);
    
    // Tính số sao đạt được dựa trên số câu trả lời đúng
    const totalQuestions = currentLevel.questions.length;
    const starsEarned = Math.ceil((score / totalQuestions) * currentLevel.rewards.stars);
    
    // Cập nhật gems
    setGems(gems + currentLevel.rewards.gems);
    
    // Mở khóa level tiếp theo
    if (currentLevel.id < gameBlocks.length && !unlockedLevels.includes(currentLevel.id + 1)) {
      setUnlockedLevels([...unlockedLevels, currentLevel.id + 1]);
    }
    
    // Lưu thành tích
    const levelStats = JSON.parse(localStorage.getItem('wordGameStats') || '{}');
    levelStats[currentLevel.id] = {
      completed: true,
      stars: Math.max(starsEarned, levelStats[currentLevel.id]?.stars || 0),
      highScore: Math.max(score, levelStats[currentLevel.id]?.highScore || 0)
    };
    localStorage.setItem('wordGameStats', JSON.stringify(levelStats));
  };

  // Sử dụng gợi ý
  const useHint = () => {
    if (gems >= gameSettings.hintCost) {
      setGems(gems - gameSettings.hintCost);
      setShowHint(true);
    }
  };

  // Bỏ qua câu hỏi hiện tại
  const skipQuestion = () => {
    if (gems >= gameSettings.skipCost) {
      setGems(gems - gameSettings.skipCost);
      
      if (currentQuestion < currentLevel.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        resetQuestion(currentLevel.questions[currentQuestion + 1]);
      } else {
        completeLevel();
      }
    }
  };

  // Quay lại màn hình chọn level
  const goToLevelSelection = () => {
    navigate('/tu-luyen/word-game');
  };

  // Chơi lại level hiện tại
  const restartLevel = () => {
    setCurrentQuestion(0);
    setScore(0);
    setLives(gameSettings.initialLives);
    setGameCompleted(false);
    resetQuestion(currentLevel.questions[0]);
  };

  if (!currentLevel) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 to-purple-600">
        <div className="text-white text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-xl">Đang tải...</p>
        </div>
      </div>
    );
  }

  // Lấy background cho level hiện tại
  const background = backgrounds[currentLevel.background];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 py-8 px-4">
      {showConfetti && <Confetti />}
      
      {/* Game container */}
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Game header */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 text-white flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button 
              onClick={goToLevelSelection}
              className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-xl font-bold">{currentLevel.title}</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Lives */}
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="ml-1 font-bold">{lives}</span>
            </div>
            
            {/* Gems */}
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span className="ml-1 font-bold">{gems}</span>
            </div>
            
            {/* Score */}
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-1 font-bold">{score}/{currentLevel.questions.length}</span>
            </div>
          </div>
        </div>
        
        {/* Game content */}
        {!gameCompleted ? (
          <div 
            className="relative p-6 overflow-hidden" 
            style={{
              backgroundImage: `url(${background.main})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '500px'
            }}
          >
            {/* Background elements */}
            {background.elements.map((element, index) => (
              <div 
                key={`bg-element-${index}`}
                className={`absolute ${getPositionClass(element.position)}`}
              >
                <img src={element.src} alt="" className="w-auto h-auto" />
              </div>
            ))}
            
            {/* Game UI */}
            <div className="relative z-10">
              {/* Timer */}
              <div className="mb-4 bg-white/80 rounded-full h-4 overflow-hidden shadow-inner">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-1000"
                  style={{ width: `${(timeLeft / gameSettings.timePerQuestion) * 100}%` }}
                ></div>
              </div>
              
              {/* Question */}
              <div className="bg-white/90 rounded-xl p-4 mb-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {currentQuestion + 1}. {currentLevel.questions[currentQuestion].question}
                </h3>
                
                {showHint && (
                  <p className="text-purple-600 italic">
                    Gợi ý: {currentLevel.questions[currentQuestion].hint}
                  </p>
                )}
              </div>
              
              {/* Answer area */}
              <div className="bg-white/90 rounded-xl p-4 mb-6 shadow-lg">
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {Array.from({ length: currentLevel.questions[currentQuestion].answer.length }).map((_, index) => {
                    const selectedLetter = selectedLetters[index];
                    return (
                      <div 
                        key={`answer-slot-${index}`}
                        className={`w-10 h-10 flex items-center justify-center rounded-md border-2 ${selectedLetter ? 'border-blue-500 bg-blue-100' : 'border-gray-300 bg-gray-100'}`}
                        onClick={() => selectedLetter && handleSelectedLetterClick(selectedLetter, index)}
                      >
                        {selectedLetter && (
                          <span className="text-xl font-bold text-blue-700">{selectedLetter.letter}</span>
                        )}
                      </div>
                    );
                  })}
                </div>
                
                {/* Available letters */}
                <div className="flex flex-wrap justify-center gap-2">
                  {availableLetters.map((letter, index) => (
                    <button
                      key={letter.id}
                      className="w-10 h-10 flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 rounded-md text-white font-bold shadow-md hover:shadow-lg transform hover:scale-105 transition-all"
                      onClick={() => handleLetterClick(letter, index)}
                    >
                      {letter.letter}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={useHint}
                  disabled={gems < gameSettings.hintCost || showHint}
                  className={`px-4 py-2 rounded-full flex items-center ${gems >= gameSettings.hintCost && !showHint ? 'bg-yellow-500 hover:bg-yellow-600' : 'bg-gray-400'} text-white font-bold transition-all`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  Gợi ý ({gameSettings.hintCost} 💎)
                </button>
                
                <button 
                  onClick={skipQuestion}
                  disabled={gems < gameSettings.skipCost}
                  className={`px-4 py-2 rounded-full flex items-center ${gems >= gameSettings.skipCost ? 'bg-red-500 hover:bg-red-600' : 'bg-gray-400'} text-white font-bold transition-all`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Bỏ qua ({gameSettings.skipCost} 💎)
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Game completed screen */
          <div 
            className="relative p-6 overflow-hidden" 
            style={{
              backgroundImage: `url(${background.main})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              minHeight: '500px'
            }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center bg-white/90 rounded-xl p-8 max-w-md mx-auto shadow-lg">
              <div className="text-5xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-purple-800 mb-2">Cấp độ hoàn thành!</h3>
              <p className="text-gray-700 mb-6 text-center">
                Bạn đã hoàn thành cấp độ {currentLevel.title} với số điểm {score}/{currentLevel.questions.length}
              </p>
              
              {/* Stars earned */}
              <div className="flex items-center justify-center mb-6">
                {Array.from({ length: currentLevel.rewards.stars }).map((_, index) => {
                  const earned = index < Math.ceil((score / currentLevel.questions.length) * currentLevel.rewards.stars);
                  return (
                    <div key={`star-${index}`} className="mx-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-10 w-10 ${earned ? 'text-yellow-400' : 'text-gray-300'}`} viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  );
                })}
              </div>
              
              {/* Rewards */}
              <div className="flex items-center justify-center mb-8 bg-purple-100 p-4 rounded-lg">
                <div className="flex items-center mr-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-2 text-lg font-bold">
                    +{Math.ceil((score / currentLevel.questions.length) * currentLevel.rewards.stars)}
                  </span>
                </div>
                
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  <span className="ml-2 text-lg font-bold">+{currentLevel.rewards.gems}</span>
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={restartLevel}
                  className="px-6 py-3 bg-purple-600 text-white rounded-full font-bold hover:bg-purple-700 transition-all flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                  Chơi lại
                </button>
                
                <button 
                  onClick={goToLevelSelection}
                  className="px-6 py-3 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    <path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  Chọn cấp độ khác
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Helper function để xác định vị trí của các phần tử nền
const getPositionClass = (position) => {
  switch (position) {
    case 'left':
      return 'left-0 bottom-0';
    case 'left-center':
      return 'left-0 bottom-1/4';
    case 'left-top':
      return 'left-0 top-0';
    case 'right':
      return 'right-0 bottom-0';
    case 'right-top':
      return 'right-0 top-0';
    case 'center':
      return 'left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2';
    case 'bottom':
      return 'bottom-0 left-1/2 transform -translate-x-1/2';
    default:
      return '';
  }
};

export default WordBlockGame;