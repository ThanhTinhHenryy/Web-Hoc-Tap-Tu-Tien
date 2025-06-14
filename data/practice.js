// Dữ liệu mẫu cho các câu hỏi luyện tập do người dùng tạo

const practiceQuestions = [
  {
    id: 1,
    question: "Đâu là phương pháp hiệu quả nhất để ghi nhớ từ vựng mới?",
    answers: [
      "Đọc to nhiều lần",
      "Viết lại từ vựng nhiều lần",
      "Sử dụng từ vựng trong ngữ cảnh thực tế",
      "Học thuộc lòng danh sách từ vựng",
    ],
    correctAnswer: 2, // Index của câu trả lời đúng (0-based)
    level: "Phàm Nhân",
    attribute: "Lý thuyết",
    explanation:
      "Sử dụng từ vựng trong ngữ cảnh thực tế giúp não bộ tạo ra các kết nối có ý nghĩa, giúp ghi nhớ từ vựng lâu hơn và hiểu rõ cách sử dụng từ trong tình huống thực tế.",
  },
  {
    id: 2,
    question: "Khi gặp một từ mới trong bài đọc, bạn nên làm gì?",
    answers: [
      "Bỏ qua và đọc tiếp",
      "Dừng lại và tra từ điển ngay lập tức",
      "Đoán nghĩa từ ngữ cảnh và kiểm tra sau",
      "Hỏi người khác ngay lập tức",
    ],
    correctAnswer: 2,
    level: "Luyện Khí",
    attribute: "Thực hành",
    explanation:
      "Đoán nghĩa từ ngữ cảnh trước, sau đó kiểm tra lại bằng từ điển là cách hiệu quả nhất. Phương pháp này giúp phát triển kỹ năng suy luận ngữ cảnh và không làm gián đoạn quá trình đọc.",
  },
  {
    id: 3,
    question: "Phương pháp nào sau đây KHÔNG hiệu quả trong việc cải thiện kỹ năng viết?",
    answers: [
      "Đọc nhiều tài liệu đa dạng",
      "Thực hành viết hàng ngày",
      "Học thuộc lòng các mẫu câu",
      "Nhận phản hồi và sửa lỗi",
    ],
    correctAnswer: 2,
    level: "Trúc Cơ",
    attribute: "Cơ bản",
    explanation:
      "Học thuộc lòng các mẫu câu không giúp cải thiện kỹ năng viết một cách hiệu quả vì nó hạn chế sự sáng tạo và khả năng thích ứng với các tình huống viết khác nhau. Thay vào đó, việc hiểu cấu trúc và thực hành linh hoạt sẽ hiệu quả hơn.",
  },
  {
    id: 4,
    question: "Cách tốt nhất để cải thiện phát âm là gì?",
    answers: [
      "Học lý thuyết về ngữ âm học",
      "Nghe và bắt chước người bản xứ",
      "Đọc to từ vựng nhiều lần",
      "Học các quy tắc phát âm",
    ],
    correctAnswer: 1,
    level: "Kim Đan",
    attribute: "Thực hành",
    explanation:
      "Nghe và bắt chước người bản xứ là cách hiệu quả nhất để cải thiện phát âm vì nó giúp tai của bạn quen với âm thanh chính xác và giúp bạn điều chỉnh cách phát âm của mình để gần với người bản xứ nhất.",
  },
  {
    id: 5,
    question: "Đâu là chiến lược hiệu quả nhất để duy trì động lực học ngoại ngữ lâu dài?",
    answers: [
      "Đặt mục tiêu rõ ràng và thực tế",
      "Thưởng cho bản thân sau mỗi buổi học",
      "Học cùng bạn bè",
      "Tham gia các khóa học trả phí",
    ],
    correctAnswer: 0,
    level: "Nguyên Anh",
    attribute: "Tiến bộ",
    explanation:
      "Đặt mục tiêu rõ ràng và thực tế giúp bạn có định hướng cụ thể, đo lường được tiến bộ, và tạo cảm giác thành công khi đạt được mục tiêu, từ đó duy trì động lực học tập lâu dài.",
  },
];

export default practiceQuestions;