import React, { useState } from "react";
import { Link } from "react-router-dom";

const LinhTuLibrary = () => {
  const [activeTab, setActiveTab] = useState("vocabulary");

  // Dữ liệu mẫu cho từ vựng
  const vocabularyData = [
    {
      id: 1,
      english: "Cultivate",
      vietnamese: "Tu luyện",
      example: "He cultivates his mind through meditation.",
    },
    {
      id: 2,
      english: "Spirit",
      vietnamese: "Linh khí",
      example: "The spirit of the forest was ancient and powerful.",
    },
    {
      id: 3,
      english: "Energy",
      vietnamese: "Năng lượng",
      example: "She channeled her energy into the spell.",
    },
    {
      id: 4,
      english: "Meditation",
      vietnamese: "Thiền định",
      example: "Daily meditation improved his focus.",
    },
    {
      id: 5,
      english: "Power",
      vietnamese: "Sức mạnh",
      example: "The ancient text contained knowledge of great power.",
    },
    {
      id: 6,
      english: "Wisdom",
      vietnamese: "Trí tuệ",
      example: "With age comes wisdom and understanding.",
    },
    {
      id: 7,
      english: "Master",
      vietnamese: "Bậc thầy",
      example: "He sought the guidance of a master.",
    },
    {
      id: 8,
      english: "Discipline",
      vietnamese: "Kỷ luật",
      example: "Discipline is essential for cultivation.",
    },
    {
      id: 9,
      english: "Journey",
      vietnamese: "Hành trình",
      example: "The journey to enlightenment is long.",
    },
    {
      id: 10,
      english: "Transform",
      vietnamese: "Biến đổi",
      example: "The practice can transform your mind and body.",
    },
  ];

  // Dữ liệu mẫu cho ngữ pháp
  const grammarData = [
    {
      id: 1,
      title: "Present Simple Tense",
      explanation:
        "Used for habits, repeated actions, permanent situations, and general truths.",
      examples: [
        "I practice meditation every day.",
        "The sun rises in the east.",
        "Water boils at 100 degrees Celsius.",
      ],
    },
    {
      id: 2,
      title: "Past Simple Tense",
      explanation: "Used for completed actions in the past.",
      examples: [
        "I studied the ancient texts yesterday.",
        "The master taught his disciples for many years.",
        "She achieved enlightenment after decades of practice.",
      ],
    },
    {
      id: 3,
      title: "Present Perfect Tense",
      explanation:
        "Used for actions that started in the past and continue to the present or have present relevance.",
      examples: [
        "I have practiced this technique for five years.",
        "She has mastered three different cultivation methods.",
        "They have never encountered such powerful energy before.",
      ],
    },
  ];

  // Dữ liệu mẫu cho bài đọc
  const readingData = [
    {
      id: 1,
      title: "The Path of Cultivation",
      content: `Cultivation is a journey of self-improvement that has been practiced for thousands of years. It involves refining one's mind, body, and spirit through various techniques such as meditation, energy practices, and moral discipline.

The first step on the path of cultivation is often the purification of the mind. This involves clearing away distracting thoughts and emotions to achieve a state of mental clarity. Through regular meditation, practitioners learn to quiet the mind and focus their attention.

As one progresses, they begin to work with energy, often called qi or prana. This life force flows through all living beings and can be directed and strengthened through specific exercises. Advanced practitioners can sense this energy and use it for healing or spiritual development.

The highest levels of cultivation involve spiritual transformation, where the practitioner transcends ordinary human limitations and develops extraordinary abilities. However, true masters emphasize that these powers are merely side effects of cultivation, not the goal itself. The real purpose is to achieve wisdom, compassion, and harmony with the universe.`,
      vocabulary: [
        "cultivation",
        "purification",
        "meditation",
        "qi",
        "prana",
        "transcend",
      ],
    },
    {
      id: 2,
      title: "Ancient Wisdom in Modern Times",
      content: `In our fast-paced modern world, the ancient practices of cultivation offer valuable tools for maintaining balance and well-being. While technology has transformed our external environment, the fundamental nature of the human mind remains unchanged. We still face the same internal challenges of stress, emotional turbulence, and existential questions that our ancestors did.

Modern science is beginning to validate many traditional cultivation practices. Research has shown that meditation can reduce stress, improve focus, and even change the structure of the brain. Studies on qigong and tai chi have demonstrated their benefits for physical health, including improved balance, reduced inflammation, and better cardiovascular function.

Many people are now integrating these ancient practices into their daily lives, creating a bridge between traditional wisdom and contemporary needs. Corporate mindfulness programs, wellness retreats, and digital meditation apps all represent modern adaptations of age-old cultivation techniques.

The essence of cultivation—the systematic refinement of mind, body, and spirit—remains as relevant today as it was thousands of years ago. By drawing on this ancient wisdom while adapting it to our current context, we can find balance and meaning in our modern lives.`,
      vocabulary: [
        "fast-paced",
        "balance",
        "well-being",
        "mindfulness",
        "adaptation",
        "refinement",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Header */}
        <div className="text-center py-8 px-4 bg-gradient-to-r from-indigo-500 to-purple-600">
          <h1 className="text-3xl font-bold text-white mb-2">
            Thư viện Linh Tự
          </h1>
          <p className="text-indigo-100">
            Kho tàng kiến thức ngôn ngữ cho hành trình tu luyện của bạn
          </p>
        </div>

        {/* Navigation Bar */}
        {/* <div className="flex flex-col sm:flex-row justify-between items-center px-6 py-4 bg-indigo-50 border-b border-indigo-100">
          <Link to="/home" className="flex items-center text-indigo-700 hover:text-indigo-900 mb-4 sm:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Trở về Trang chính
          </Link>
          <div className="flex space-x-4">
            <Link to="/tu-luyen" className="px-4 py-2 text-sm font-medium text-indigo-700 hover:text-indigo-900 hover:bg-indigo-200 rounded-md transition duration-150">
              Tu luyện
            </Link>
            <Link to="/thi-luyen" className="px-4 py-2 text-sm font-medium text-indigo-700 hover:text-indigo-900 hover:bg-indigo-200 rounded-md transition duration-150">
              Thi luyện
            </Link>
            <Link to="/thu-vien-linh-tu" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 transition duration-150">
              Thư viện Linh Tự
            </Link>
          </div>
        </div> */}

        {/* Tabs */}
        <div className="flex justify-center border-b border-gray-200">
          <button
            className={`px-6 py-3 text-sm font-medium border-b-2 ${
              activeTab === "vocabulary"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("vocabulary")}
          >
            Từ vựng
          </button>
          <button
            className={`px-6 py-3 text-sm font-medium border-b-2 ${
              activeTab === "grammar"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("grammar")}
          >
            Ngữ pháp
          </button>
          <button
            className={`px-6 py-3 text-sm font-medium border-b-2 ${
              activeTab === "reading"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
            onClick={() => setActiveTab("reading")}
          >
            Bài đọc
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Vocabulary Section */}
          {activeTab === "vocabulary" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Từ vựng cơ bản
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {vocabularyData.map((word) => (
                  <div
                    key={word.id}
                    className="bg-white rounded-lg shadow-md border border-indigo-100 hover:shadow-lg transition duration-300 overflow-hidden"
                  >
                    <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                        {word.english}
                      </h3>
                      <p className="text-gray-800 font-medium mb-3">
                        {word.vietnamese}
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        <span className="text-indigo-600 font-medium not-italic">
                          Ví dụ:
                        </span>{" "}
                        {word.example}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Grammar Section */}
          {activeTab === "grammar" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Ngữ pháp tiếng Anh
              </h2>
              <div className="space-y-8">
                {grammarData.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-lg shadow-md border border-indigo-100 hover:shadow-lg transition duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-indigo-700 mb-3 pb-2 border-b border-gray-200">
                        {item.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{item.explanation}</p>
                      <div className="bg-indigo-50 rounded-lg p-4">
                        <h4 className="text-indigo-700 font-medium mb-2">
                          Ví dụ:
                        </h4>
                        <ul className="space-y-2">
                          {item.examples.map((example, index) => (
                            <li
                              key={index}
                              className="text-gray-600 italic border-b border-indigo-100 pb-2 last:border-0"
                            >
                              {example}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Reading Section */}
          {activeTab === "reading" && (
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Bài đọc tiếng Anh
              </h2>
              <div className="space-y-10">
                {readingData.map((article) => (
                  <div
                    key={article.id}
                    className="bg-white rounded-lg shadow-md border border-indigo-100 hover:shadow-lg transition duration-300 overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-indigo-700 mb-4 text-center">
                        {article.title}
                      </h3>
                      <div className="text-gray-700 mb-6 space-y-4">
                        {article.content
                          .split("\n\n")
                          .map((paragraph, index) => (
                            <p key={index} className="leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                      </div>
                      <div className="bg-indigo-50 rounded-lg p-4">
                        <h4 className="text-indigo-700 font-medium mb-2">
                          Từ vựng chính:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {article.vocabulary.map((word, index) => (
                            <span
                              key={index}
                              className="inline-block px-3 py-1 bg-white text-indigo-600 text-sm rounded-full border border-indigo-200 hover:bg-indigo-100 transition duration-150"
                            >
                              {word}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinhTuLibrary;
