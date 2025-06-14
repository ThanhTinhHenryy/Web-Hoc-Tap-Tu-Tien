import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../assets/background.jpg";

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

  // Lấy danh sách câu hỏi từ localStorage khi component được mount
  useEffect(() => {
    const savedQuestions =
      JSON.parse(localStorage.getItem("userQuestions")) || [];
    setUserQuestions(savedQuestions);
  }, []);

  // Cập nhật localStorage khi userQuestions thay đổi
  useEffect(() => {
    localStorage.setItem("userQuestions", JSON.stringify(userQuestions));
  }, [userQuestions]);

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
      className="min-h-screen py-10 relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        {/* Tiêu đề */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-yellow-300 flex items-center justify-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            <span className="text-blue-300 mr-4 text-3xl">✏️</span>
            Tạo Câu Hỏi Luyện Tập
          </h1>
          <p className="text-xl text-purple-200 mt-2 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]">
            Tạo câu hỏi của riêng bạn để luyện tập hiệu quả hơn
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

        {/* Form tạo câu hỏi */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-700">
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">
                {isEditing ? "Chỉnh sửa câu hỏi" : "Tạo câu hỏi mới"}
              </h2>

              <form onSubmit={handleSubmit}>
                {/* Câu hỏi */}
                <div className="mb-4">
                  <label className="block text-gray-200 mb-2">Câu hỏi:</label>
                  <textarea
                    name="question"
                    value={formData.question}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows="3"
                    placeholder="Nhập câu hỏi của bạn..."
                    required
                  />
                </div>

                {/* Đáp án */}
                <div className="mb-4">
                  <label className="block text-gray-200 mb-2">Đáp án:</label>
                  {formData.answers.map((answer, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <input
                        type="radio"
                        name="correctAnswer"
                        checked={formData.correctAnswer === index}
                        onChange={() => handleCorrectAnswerChange(index)}
                        className="mr-2 h-5 w-5 text-purple-600"
                      />
                      <input
                        type="text"
                        value={answer}
                        onChange={(e) =>
                          handleAnswerChange(index, e.target.value)
                        }
                        className="flex-1 p-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        placeholder={`Đáp án ${index + 1}`}
                        required
                      />
                    </div>
                  ))}
                  <p className="text-gray-400 text-sm mt-1">
                    * Chọn đáp án đúng bằng cách click vào nút radio bên trái
                  </p>
                </div>

                {/* Cấp độ */}
                <div className="mb-4">
                  <label className="block text-gray-200 mb-2">Cấp độ:</label>
                  <select
                    name="level"
                    value={formData.level}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="Phàm Nhân">Phàm Nhân</option>
                    <option value="Luyện Khí">Luyện Khí</option>
                    <option value="Trúc Cơ">Trúc Cơ</option>
                    <option value="Kim Đan">Kim Đan</option>
                    <option value="Nguyên Anh">Nguyên Anh</option>
                    <option value="Hóa Thần">Hóa Thần</option>
                  </select>
                </div>

                {/* Thuộc tính */}
                <div className="mb-4">
                  <label className="block text-gray-200 mb-2">
                    Thuộc tính:
                  </label>
                  <select
                    name="attribute"
                    value={formData.attribute}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="Cơ bản">Cơ bản</option>
                    <option value="Lý thuyết">Lý thuyết</option>
                    <option value="Thực hành">Thực hành</option>
                    <option value="Tiến bộ">Tiến bộ</option>
                  </select>
                </div>

                {/* Giải thích */}
                <div className="mb-4">
                  <label className="block text-gray-200 mb-2">
                    Giải thích:
                  </label>
                  <textarea
                    name="explanation"
                    value={formData.explanation}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    rows="3"
                    placeholder="Giải thích tại sao đáp án này là đúng..."
                    required
                  />
                </div>

                {/* Nút submit */}
                <div className="flex space-x-4">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-lg hover:from-purple-500 hover:to-indigo-400 transition-all duration-300 shadow-md hover:shadow-purple-500/50"
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
                      className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-500 transition-all duration-300"
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
            <div className="bg-gray-800/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-700">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-yellow-300">
                  Câu hỏi đã tạo ({userQuestions.length})
                </h2>
                {userQuestions.length > 0 && (
                  <button
                    onClick={handleStartPractice}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-500 transition-all duration-300 text-sm"
                  >
                    Bắt đầu luyện tập
                  </button>
                )}
              </div>

              {userQuestions.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-400">Chưa có câu hỏi nào được tạo</p>
                  <p className="text-gray-500 mt-2 text-sm">
                    Hãy tạo câu hỏi đầu tiên của bạn!
                  </p>
                </div>
              ) : (
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {userQuestions.map((q, index) => (
                    <div
                      key={q.id}
                      className="bg-gray-700 rounded-lg p-4 border border-gray-600"
                    >
                      <h3 className="text-white font-medium mb-2 line-clamp-2">
                        {q.question}
                      </h3>
                      <div className="flex items-center text-sm text-gray-400 mb-3">
                        <span className="bg-purple-900 text-purple-200 px-2 py-1 rounded mr-2">
                          {q.level}
                        </span>
                        <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded">
                          {q.attribute}
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handlePreview(index)}
                          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-500 transition-all duration-300"
                        >
                          Xem
                        </button>
                        <button
                          onClick={() => handleEdit(index)}
                          className="bg-yellow-600 text-white px-3 py-1 rounded text-sm hover:bg-yellow-500 transition-all duration-300"
                        >
                          Sửa
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-500 transition-all duration-300"
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
      </div>

      {/* Modal xem trước câu hỏi */}
      {showPreview && previewQuestion && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-yellow-300">
                Xem trước câu hỏi
              </h2>
              <button
                onClick={handleClosePreview}
                className="text-gray-400 hover:text-white text-2xl"
              >
                ×
              </button>
            </div>

            <div className="mb-6">
              <h3 className="text-xl text-white font-medium mb-4">
                {previewQuestion.question}
              </h3>

              <div className="space-y-3 mb-6">
                {previewQuestion.answers.map((answer, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded-lg border ${
                      index === previewQuestion.correctAnswer
                        ? "bg-green-800/50 border-green-500"
                        : "bg-gray-700 border-gray-600"
                    }`}
                  >
                    <div className="flex items-start">
                      <div
                        className={`flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3 ${
                          index === previewQuestion.correctAnswer
                            ? "bg-green-500 text-white"
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

              <div className="bg-gray-700/50 border border-gray-600 rounded-lg p-4">
                <h4 className="text-blue-300 font-medium mb-2">Giải thích:</h4>
                <p className="text-gray-300">{previewQuestion.explanation}</p>
              </div>

              <div className="flex items-center mt-4 text-sm text-gray-400">
                <span className="bg-purple-900 text-purple-200 px-2 py-1 rounded mr-2">
                  {previewQuestion.level}
                </span>
                <span className="bg-blue-900 text-blue-200 px-2 py-1 rounded">
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
