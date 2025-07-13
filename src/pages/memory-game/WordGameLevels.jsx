import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gameBlocks } from '../../../data/gameBlock';

const WordGameLevels = () => {
  const [unlockedLevels, setUnlockedLevels] = useState([1]);
  const [levelStats, setLevelStats] = useState({});
  const [gems, setGems] = useState(0);

  useEffect(() => {
    // Lấy thông tin về các cấp độ đã mở khóa và thành tích từ localStorage
    const savedUnlockedLevels = JSON.parse(localStorage.getItem('unlockedWordGameLevels') || '[1]');
    const savedLevelStats = JSON.parse(localStorage.getItem('wordGameStats') || '{}');
    const savedGems = parseInt(localStorage.getItem('userGems') || '0');

    setUnlockedLevels(savedUnlockedLevels);
    setLevelStats(savedLevelStats);
    setGems(savedGems);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-purple-600 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-purple-800">Trò Chơi Ghép Chữ</h1>
              <p className="text-gray-600">Hãy chọn một cấp độ để bắt đầu thử thách!</p>
            </div>
            <div className="flex items-center bg-purple-100 px-4 py-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 font-bold text-purple-800">{gems}</span>
            </div>
          </div>
        </div>

        {/* Level grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gameBlocks.map((level) => {
            const isUnlocked = unlockedLevels.includes(level.id);
            const levelStat = levelStats[level.id] || { stars: 0, completed: false };
            
            return (
              <div 
                key={level.id} 
                className={`relative rounded-xl overflow-hidden shadow-lg transition-all transform hover:scale-105 ${isUnlocked ? '' : 'opacity-70'}`}
              >
                {/* Level background */}
                <div 
                  className="h-48 bg-cover bg-center" 
                  style={{ backgroundImage: `url(${level.thumbnail || `${import.meta.env.BASE_URL}assets/game/level-bg.jpg`})` }}
                >
                  {/* Level number */}
                  <div className="absolute top-4 left-4 bg-white/90 rounded-full w-10 h-10 flex items-center justify-center shadow-md">
                    <span className="text-xl font-bold text-purple-800">{level.id}</span>
                  </div>
                  
                  {/* Lock icon for locked levels */}
                  {!isUnlocked && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                      <div className="bg-white/90 rounded-full p-4 shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Level info */}
                <div className="bg-white p-4">
                  <h3 className="text-xl font-bold text-purple-800 mb-2">{level.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{level.description}</p>
                  
                  {/* Stars */}
                  <div className="flex items-center mb-4">
                    {Array.from({ length: level.rewards.stars }).map((_, index) => (
                      <svg 
                        key={`star-${level.id}-${index}`} 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={`h-6 w-6 ${index < levelStat.stars ? 'text-yellow-400' : 'text-gray-300'}`} 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  
                  {/* Rewards */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-1 text-sm">{level.rewards.gems}</span>
                    </div>
                    
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                      </svg>
                      <span className="ml-1 text-sm">{level.questions.length} câu hỏi</span>
                    </div>
                  </div>
                  
                  {/* Play button */}
                  {isUnlocked ? (
                    <Link 
                      to={`/tu-luyen/word-game/${level.id}`}
                      className="block w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-2 rounded-lg font-bold text-center hover:from-purple-700 hover:to-indigo-700 transition-all"
                    >
                      {levelStat.completed ? 'Chơi lại' : 'Bắt đầu'}
                    </Link>
                  ) : (
                    <button 
                      disabled
                      className="block w-full bg-gray-400 text-white py-2 rounded-lg font-bold text-center cursor-not-allowed"
                    >
                      Đã khóa
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WordGameLevels;