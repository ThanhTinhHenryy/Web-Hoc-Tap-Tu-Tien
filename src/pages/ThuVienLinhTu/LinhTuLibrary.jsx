import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./LinhTuLibrary.css";
import backgroundImage from "../../assets/background.jpg";

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
    <div
      className="linh-tu-library"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="library-content-overlay">
        <div className="library-header" style={{ marginTop: "3rem" }}>
          <h1>Thư viện Linh Tự</h1>
          <p>Kho tàng kiến thức ngôn ngữ cho hành trình tu luyện của bạn</p>
        </div>

        <div className="navigation-bar">
          <Link to="/home" className="back-button">
            ← Trở về Trang chính
          </Link>
          <div className="additional-links">
            <Link to="/tu-luyen" className="nav-link">
              Tu luyện
            </Link>
            <Link to="/thi-luyen" className="nav-link">
              Thi luyện
            </Link>
            <Link to="/thu-vien-linh-tu" className="nav-link active">
              Thư viện Linh Tự
            </Link>
          </div>
        </div>

        <div className="library-tabs">
          <button
            className={`tab-button ${
              activeTab === "vocabulary" ? "active" : ""
            }`}
            onClick={() => setActiveTab("vocabulary")}
          >
            Từ vựng
          </button>
          <button
            className={`tab-button ${activeTab === "grammar" ? "active" : ""}`}
            onClick={() => setActiveTab("grammar")}
          >
            Ngữ pháp
          </button>
          <button
            className={`tab-button ${activeTab === "reading" ? "active" : ""}`}
            onClick={() => setActiveTab("reading")}
          >
            Bài đọc
          </button>
        </div>

        <div className="library-content">
          {activeTab === "vocabulary" && (
            <div className="vocabulary-section">
              <h2>Từ vựng cơ bản</h2>
              <div className="vocabulary-list">
                {vocabularyData.map((word) => (
                  <div key={word.id} className="vocabulary-card">
                    <h3>{word.english}</h3>
                    <p className="vietnamese">{word.vietnamese}</p>
                    <p className="example">
                      <span>Ví dụ:</span> {word.example}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "grammar" && (
            <div className="grammar-section">
              <h2>Ngữ pháp tiếng Anh</h2>
              <div className="grammar-list">
                {grammarData.map((item) => (
                  <div key={item.id} className="grammar-card">
                    <h3>{item.title}</h3>
                    <p className="explanation">{item.explanation}</p>
                    <div className="examples">
                      <h4>Ví dụ:</h4>
                      <ul>
                        {item.examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "reading" && (
            <div className="reading-section">
              <h2>Bài đọc tiếng Anh</h2>
              <div className="reading-list">
                {readingData.map((article) => (
                  <div key={article.id} className="reading-card">
                    <h3>{article.title}</h3>
                    <div className="reading-content">
                      {article.content.split("\n\n").map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                    </div>
                    <div className="key-vocabulary">
                      <h4>Từ vựng chính:</h4>
                      <div className="vocabulary-tags">
                        {article.vocabulary.map((word, index) => (
                          <span key={index} className="vocabulary-tag">
                            {word}
                          </span>
                        ))}
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
