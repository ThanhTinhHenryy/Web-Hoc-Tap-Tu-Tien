import React from 'react';

const AchievementBadge = ({ score, totalQuestions }) => {
  const percentage = (score / totalQuestions) * 100;
  
  let badgeInfo = {
    title: '',
    color: '',
    icon: '',
    description: ''
  };

  if (percentage === 100) {
    badgeInfo = {
      title: 'Bậc Thầy',
      color: 'bg-yellow-500',
      icon: '🏆',
      description: 'Hoàn hảo! Bạn đã trả lời đúng tất cả các câu hỏi.'
    };
  } else if (percentage >= 80) {
    badgeInfo = {
      title: 'Cao Thủ',
      color: 'bg-blue-500',
      icon: '🥇',
      description: 'Xuất sắc! Bạn đã nắm vững kiến thức.'
    };
  } else if (percentage >= 60) {
    badgeInfo = {
      title: 'Thành Thạo',
      color: 'bg-green-500',
      icon: '🥈',
      description: 'Tốt! Bạn đã hiểu phần lớn nội dung.'
    };
  } else if (percentage >= 40) {
    badgeInfo = {
      title: 'Tiến Bộ',
      color: 'bg-orange-500',
      icon: '🥉',
      description: 'Bạn đang trên đường đúng. Hãy tiếp tục cố gắng!'
    };
  } else {
    badgeInfo = {
      title: 'Khởi Đầu',
      color: 'bg-red-500',
      icon: '🔍',
      description: 'Hãy xem lại bài học và thử lại nhé!'
    };
  }

  return (
    <div className="flex flex-col items-center mb-6 animate-bounce-once">
      <div className={`${badgeInfo.color} text-white rounded-full w-24 h-24 flex items-center justify-center mb-2 shadow-lg`}>
        <span className="text-4xl">{badgeInfo.icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-1">{badgeInfo.title}</h3>
      <p className="text-gray-600 text-center">{badgeInfo.description}</p>
    </div>
  );
};

export default AchievementBadge;