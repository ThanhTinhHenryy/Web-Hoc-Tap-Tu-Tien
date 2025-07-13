import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/background/auth.png";
import achievements from "../../../data/achievement.js";

const CreateQuestion = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    question: "",
    answers: ["", "", "", ""],
    correctAnswer: 0,
    level: "Phàm Nhân",
    attribute: "Cơ bản",
    explanation: "",
  });

  const [userQuestions, setUserQuestions] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [previewQuestion, setPreviewQuestion] = useState(null);
  const [compactView, setCompactView] = useState(true);
  const [earnedAchievements, setEarnedAchievements] = useState([]);
  const [showAchievementPopup, setShowAchievementPopup] = useState(false);

  // Lấy danh sách câu hỏi từ localStorage khi component được mount
  useEffect(() => {
    const savedQuestions =
      JSON.parse(localStorage.getItem("userQuestions")) || [];
    setUserQuestions(savedQuestions);
  }, []);

  // Cập nhật localStorage khi userQuestions thay đổi và kiểm tra thành tựu
  useEffect(() => {
    localStorage.setItem("userQuestions", JSON.stringify(userQuestions));
    
    // Kiểm tra thành tựu khi số lượng câu hỏi thay đổi
    if (userQuestions.length > 0) {
      checkAndUpdateAchievements(userQuestions.length);
    }
  }, [userQuestions]);
  
  // Kiểm tra và cập nhật thành tựu
  const checkAndUpdateAchievements = (questionCount) => {
    const newAchievements = [];
    const userAchievements = JSON.parse(localStorage.getItem("userAchievements")) || [];
    
    // Kiểm tra các điều kiện thành tựu
    achievements.forEach(achievement => {
      if (!userAchievements.includes(achievement.id)) {
        let isEarned = false;
        
        switch (achievement.condition) {
          case "first_question":
            isEarned = questionCount === 1;
            break;
          case "ten_questions":
            isEarned = questionCount >= 10;
            break;
          default:
            break;
        }
        
        if (isEarned) {
          newAchievements.push(achievement);
          userAchievements.push(achievement.id);
        }
      }
    });
    
    // Lưu thành tựu vào localStorage
    if (newAchievements.length > 0) {
      localStorage.setItem("userAchievements", JSON.stringify(userAchievements));
      setEarnedAchievements(newAchievements);
      setShowAchievementPopup(true);
    }
  };

  // Xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Xử lý thay đổi đáp án
  const handleAnswerChange = (index, value) => {
    const newAnswers = [...formData.answers];
    newAnswers[index] = value;
    setFormData({
      ...formData,
      answers: newAnswers,
    });
  };

  // Xử lý thay đổi đáp án đúng
  const handleCorrectAnswerChange = (index) => {
    setFormData({
      ...formData,
      correctAnswer: index,
    });
  };

  // Xử lý submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Kiểm tra dữ liệu
    if (!formData.question.trim()) {
      alert("Vui lòng nhập câu hỏi");
      return;
    }

    if (formData.answers.some((answer) => !answer.trim())) {
      alert("Vui lòng nhập đầy đủ các đáp án");
      return;
    }

    if (!formData.explanation.trim()) {
      alert("Vui lòng nhập giải thích cho đáp án");
      return;
    }

    // Tạo câu hỏi mới với ID
    const newQuestion = {
      ...formData,
      id: isEditing ? userQuestions[editIndex].id : Date.now(), // Sử dụng ID hiện tại nếu đang chỉnh sửa, ngược lại tạo ID mới
    };

    if (isEditing) {
      // Cập nhật câu hỏi hiện có
      const updatedQuestions = [...userQuestions];
      updatedQuestions[editIndex] = newQuestion;
      setUserQuestions(updatedQuestions);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Thêm câu hỏi mới
      setUserQuestions([...userQuestions, newQuestion]);
    }

    // Reset form
    resetForm();
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      question: "",
      answers: ["", "", "", ""],
      correctAnswer: 0,
      level: "Phàm Nhân",
      attribute: "Cơ bản",
      explanation: "",
    });
  };

  // Xử lý chỉnh sửa câu hỏi
  const handleEdit = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setFormData(userQuestions[index]);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Xử lý xóa câu hỏi
  const handleDelete = (index) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa câu hỏi này không?")) {
      const updatedQuestions = [...userQuestions];
      updatedQuestions.splice(index, 1);
      setUserQuestions(updatedQuestions);
    }
  };

  // Xử lý xem trước câu hỏi
  const handlePreview = (index) => {
    setPreviewQuestion(userQuestions[index]);
    setShowPreview(true);
  };

  // Xử lý đóng xem trước
  const handleClosePreview = () => {
    setShowPreview(false);
    setPreviewQuestion(null);
  };

  // Xử lý bắt đầu luyện tập
  const handleStartPractice = () => {
    if (userQuestions.length === 0) {
      alert("Bạn cần tạo ít nhất một câu hỏi để bắt đầu luyện tập");
      return;
    }

    // Lưu câu hỏi vào localStorage để sử dụng trong trang luyện tập
    localStorage.setItem("practiceQuestions", JSON.stringify(userQuestions));
    navigate("/tu-luyen/luyen-tap-cau-hoi");
  };

  return (
    <div
      className="min-h-screen pt-16 pb-6 relative" // Thêm padding-top để tránh bị header che khuất
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container mx-auto px-4 relative z-10 max-w-6xl flex flex-col items-center">
        {/* Popup hiển thị thành tựu đạt được */}
        {showAchievementPopup && earnedAchievements.length > 0 && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/70">
            <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full mx-4 border border-yellow-500 shadow-lg shadow-yellow-500/20 animate-fade-in">
              <div className="text-center">
                <div className="text-5xl mb-4">🏆</div>
                <h2 className="text-2xl font-bold text-yellow-300 mb-6">Thành tựu mới!</h2>
                
                <div className="space-y-6 mb-8">
                  {earnedAchievements.map((achievement) => (
                    <div key={achievement.id} className="flex items-center bg-gray-700/50 p-4 rounded-lg border border-yellow-600/30">
                      <div className="w-16 h-16 rounded-full flex items-center justify-center mr-4 bg-yellow-500/20">
                        <img src={achievement.image} alt={achievement.name} className="w-12 h-12" />
                      </div>
                      <div className="text-left">
                        <h3 className="text-xl font-bold text-yellow-300">{achievement.name}</h3>
                        <p className="text-gray-300">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={() => setShowAchievementPopup(false)}
                    className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-all duration-300"
                  >
                    Đóng
                  </button>
                  <Link
                    to="/tu-luyen/thanh-tuu"
                    onClick={() => setShowAchievementPopup(false)}
                    className="bg-gradient-to-r from-yellow-600 to-amber-500 text-white px-4 py-2 rounded-lg hover:from-yellow-500 hover:to-amber-400 transition-all duration-300"
                  >
                    Xem tất cả thành tựu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* Giới hạn chiều rộng tối đa và căn giữa */}
        {/* Tiêu đề và nút chuyển đổi chế độ xem */}
        <div className="flex justify-center items-center mb-4 w-full relative">
          <h1 className="text-2xl font-bold text-yellow-300 flex items-center justify-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            <span className="text-blue-300 mr-2 text-xl">✏️</span>
            Tạo Câu Hỏi
          </h1>

          <button
            onClick={() => setCompactView(!compactView)}
            className="bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-500 transition-all duration-300 text-sm flex items-center absolute right-0"
          >
            {compactView ? "Mở rộng" : "Thu gọn"}
            <span className="ml-1">{compactView ? "🔍" : "🔎"}</span>
          </button>
        </div>
        {/* Form tạo câu hỏi */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          {/* Giảm gap */}
          <div className="lg:col-span-2">
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-700">
              {" "}
              {/* Giảm padding */}
              <h2 className="text-xl font-bold text-yellow-300 mb-3">
                {" "}
                {/* Giảm kích thước tiêu đề */}
                {isEditing ? "Chỉnh sửa câu hỏi" : "Tạo câu hỏi mới"}
              </h2>
              <form onSubmit={handleSubmit}>
                {/* Câu hỏi */}
                <div className="mb-3">
                  {" "}
                  {/* Giảm margin */}
                  <label className="block text-gray-200 mb-1 text-sm">
                    Câu hỏi:
                  </label>{" "}
                  {/* Giảm kích thước và margin */}
                  <textarea
                    name="question"
                    value={formData.question}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
                    rows={compactView ? "2" : "3"}
                    placeholder="Nhập câu hỏi của bạn..."
                    required
                  />
                  {/* Giảm padding và kích thước chữ cho textarea câu hỏi */}
                  {/* Điều chỉnh số dòng dựa trên chế độ xem */}
                </div>

                {/* Đáp án */}
                <div className="mb-3">
                  {/* Giảm margin */}
                  <label className="block text-gray-200 mb-1 text-sm">
                    Đáp án:
                  </label>
                  {/* Giảm kích thước và margin */}
                  {formData.answers.map((answer, index) => (
                    <div key={index} className="flex items-center mb-1">
                      {/* Giảm margin */}
                      <input
                        type="radio"
                        name="correctAnswer"
                        checked={formData.correctAnswer === index}
                        onChange={() => handleCorrectAnswerChange(index)}
                        className="mr-1 h-4 w-4 text-purple-600"
                      />
                      {/* Giảm kích thước và margin */}
                      <input
                        type="text"
                        value={answer}
                        onChange={(e) =>
                          handleAnswerChange(index, e.target.value)
                        }
                        className="flex-1 p-1.5 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
                        placeholder={`Đáp án ${index + 1}`}
                        required
                      />
                      {/* Giảm padding và kích thước chữ */}
                    </div>
                  ))}
                  <p className="text-gray-400 text-xs mt-1">
                    {/* Giảm kích thước chữ */}* Chọn đáp án đúng bằng cách
                    click vào nút radio bên trái
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-3">
                  {/* Sử dụng grid để đặt cấp độ và thuộc tính cạnh nhau */}
                  {/* Cấp độ */}
                  <div>
                    <label className="block text-gray-200 mb-1 text-sm">
                      Cấp độ:
                    </label>
                    {/* Giảm kích thước và margin */}
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleInputChange}
                      className="w-full p-1.5 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
                    >
                      {/* Giảm padding và kích thước chữ */}
                      <option value="Phàm Nhân">Phàm Nhân</option>
                      <option value="Luyện Khí">Luyện Khí</option>
                      <option value="Trúc Cơ">Trúc Cơ</option>
                      <option value="Kim Đan">Kim Đan</option>
                      <option value="Nguyên Anh">Nguyên Anh</option>
                      <option value="Hóa Thần">Hóa Thần</option>
                    </select>
                  </div>

                  {/* Thuộc tính */}
                  <div>
                    <label className="block text-gray-200 mb-1 text-sm">
                      Thuộc tính:
                    </label>
                    <select
                      name="attribute"
                      value={formData.attribute}
                      onChange={handleInputChange}
                      className="w-full p-1.5 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
                    >
                      <option value="Cơ bản">Cơ bản</option>
                      <option value="Lý thuyết">Lý thuyết</option>
                      <option value="Thực hành">Thực hành</option>
                      <option value="Tiến bộ">Tiến bộ</option>
                    </select>
                  </div>
                </div>

                {/* Giải thích */}
                <div className="mb-3">
                  <label className="block text-gray-200 mb-1 text-sm">
                    Giải thích:
                  </label>
                  <textarea
                    name="explanation"
                    value={formData.explanation}
                    onChange={handleInputChange}
                    className="w-full p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 text-sm"
                    rows={compactView ? "2" : "3"}
                    placeholder="Giải thích tại sao đáp án này là đúng..."
                    required
                  />
                </div>

                {/* Nút submit */}
                <div className="flex space-x-2">
                  {/* Giảm khoảng cách */}
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 rounded-lg hover:from-purple-500 hover:to-indigo-400 transition-all duration-300 shadow-md hover:shadow-purple-500/50 text-sm"
                  >
                    {isEditing ? "Cập nhật câu hỏi" : "Thêm câu hỏi"}
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                        setEditIndex(null);
                        resetForm();
                      }}
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition-all duration-300 text-sm"
                    >
                      Hủy
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
          {/* Danh sách câu hỏi đã tạo */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-gray-700">
              {/* Giảm padding */}
              <div className="flex justify-between items-center mb-2">
                {/* Giảm margin */}
                <h2 className="text-lg font-bold text-yellow-300">
                  {/* Giảm kích thước tiêu đề */}
                  Câu hỏi đã tạo ({userQuestions.length})
                </h2>
                {userQuestions.length > 0 && (
                  <button
                    onClick={handleStartPractice}
                    className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-500 transition-all duration-300 text-xs"
                  >
                    Bắt đầu luyện tập
                  </button>
                )}
              </div>

              {userQuestions.length === 0 ? (
                <div className="text-center py-4">
                  {/* Giảm padding */}
                  <p className="text-gray-400 text-sm">
                    Chưa có câu hỏi nào được tạo
                  </p>
                  {/* Giảm kích thước chữ */}
                  <p className="text-gray-500 mt-1 text-xs">
                    {/* Giảm margin và kích thước chữ */}
                    Hãy tạo câu hỏi đầu tiên của bạn!
                  </p>
                </div>
              ) : (
                <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1">
                  {/* Giảm khoảng cách và chiều cao tối đa */}
                  {userQuestions.map((q, index) => (
                    <div
                      key={q.id}
                      className="bg-gray-700 rounded-lg p-2 border border-gray-600 text-sm"
                    >
                      <h3 className="text-white font-medium mb-1 line-clamp-2 text-sm">
                        {/* Giảm margin và kích thước chữ */}
                        {q.question}
                      </h3>
                      <div className="flex items-center text-xs text-gray-400 mb-1">
                        {/* Giảm kích thước chữ và margin */}
                        <span className="bg-purple-900 text-purple-200 px-1.5 py-0.5 rounded mr-1 text-xs">
                          {/* Giảm padding, margin và kích thước chữ */}
                          {q.level}
                        </span>
                        <span className="bg-blue-900 text-blue-200 px-1.5 py-0.5 rounded text-xs">
                          {/* Giảm padding và kích thước chữ */}
                          {q.attribute}
                        </span>
                      </div>
                      <div className="flex space-x-1">
                        {/* Giảm khoảng cách */}
                        <button
                          onClick={() => handlePreview(index)}
                          className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs hover:bg-blue-500 transition-all duration-300"
                        >
                          Xem
                        </button>
                        <button
                          onClick={() => handleEdit(index)}
                          className="bg-yellow-600 text-white px-2 py-0.5 rounded text-xs hover:bg-yellow-500 transition-all duration-300"
                        >
                          Sửa
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-600 text-white px-2 py-0.5 rounded text-xs hover:bg-red-500 transition-all duration-300"
                        >
                          Xóa
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Nút quay lại */}
        <div className="mt-6 mb-4">
          <Link
            to="/tu-luyen/practice-goal"
            className="bg-white text-[#2B003F] font-bold py-2 px-6 rounded-lg shadow-lg hover:shadow-white/30 hover:scale-105 transition-all duration-300 flex items-center"
          >
            <span className="text-lg font-bold">QUAY LẠI</span>
          </Link>
        </div>
      </div>

      {/* Modal xem trước câu hỏi */}
      {showPreview && previewQuestion && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2">
          {/* Giảm padding */}
          <div className="bg-gray-800 rounded-lg p-4 max-w-xl w-full max-h-[80vh] overflow-y-auto">
            {/* Giảm padding, chiều rộng tối đa và chiều cao tối đa */}
            <div className="flex justify-between items-center mb-2">
              {/* Giảm margin */}
              <h2 className="text-xl font-bold text-yellow-300">
                {/* Giảm kích thước tiêu đề */}
                Xem trước câu hỏi
              </h2>
              <button
                onClick={handleClosePreview}
                className="text-gray-400 hover:text-white text-xl"
              >
                ×
              </button>
            </div>

            <div className="mb-4">
              {/* Giảm margin */}
              <h3 className="text-lg text-white font-medium mb-2">
                {/* Giảm kích thước tiêu đề và margin */}
                {previewQuestion.question}
              </h3>

              <div className="space-y-2 mb-4">
                {/* Giảm khoảng cách và margin */}
                {previewQuestion.answers.map((answer, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded-lg border ${
                      /* Giảm padding */
                      index === previewQuestion.correctAnswer
                        ? "bg-green-800/50 border-green-500"
                        : "bg-gray-700 border-gray-600"
                    }`}
                  >
                    <div className="flex items-start">
                      <div
                        className={`flex-shrink-0 h-5 w-5 rounded-full flex items-center justify-center mr-2 ${
                          /* Giảm kích thước và margin */
                          index === previewQuestion.correctAnswer
                            ? "bg-green-500 text-white"
                            : "bg-gray-600 text-gray-300"
                        }`}
                      >
                        {String.fromCharCode(65 + index)}
                      </div>
                      <span className="text-white text-sm">{answer}</span>
                      {/* Giảm kích thước chữ */}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-3">
                {/* Giảm padding */}
                <h4 className="text-blue-300 font-medium mb-1 text-sm">
                  Giải thích:
                </h4>
                {/* Giảm margin và kích thước chữ */}
                <p className="text-gray-300 text-sm">
                  {previewQuestion.explanation}
                </p>
                {/* Giảm kích thước chữ */}
              </div>

              <div className="flex items-center mt-3 text-xs text-gray-400">
                {/* Giảm margin và kích thước chữ */}
                <span className="bg-purple-900 text-purple-200 px-1.5 py-0.5 rounded mr-1 text-xs">
                  {/* Giảm padding, margin và kích thước chữ */}
                  {previewQuestion.level}
                </span>
                <span className="bg-blue-900 text-blue-200 px-1.5 py-0.5 rounded text-xs">
                  {/* Giảm padding và kích thước chữ */}
                  {previewQuestion.attribute}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateQuestion;
