// Dữ liệu câu hỏi cho các tầng tu luyện

const exerciseQuestions = [
  // Phàm Nhân
  {
    id: 1,
    question: "Đâu là bước đầu tiên để bắt đầu con đường tu luyện?",
    answers: [
      "Tích lũy linh thạch",
      "Tìm kiếm công pháp",
      "Ổn định tâm thần và điều hòa hơi thở",
      "Tìm sư phụ",
    ],
    correctAnswer: 2, // Index của câu trả lời đúng (0-based)
    level: "Phàm Nhân",
    attribute: "Cơ bản",
    explanation:
      "Trước khi bắt đầu tu luyện, việc ổn định tâm thần và điều hòa hơi thở là bước đầu tiên và quan trọng nhất, giúp cơ thể sẵn sàng tiếp nhận linh khí.",
  },
  {
    id: 2,
    question:
      "Tại sao việc hiểu biết về Ngự Đạo lại quan trọng đối với người mới bắt đầu?",
    answers: [
      "Để có thể khoe khoang với người khác",
      "Để hiểu được nguyên lý vận hành của linh khí trong cơ thể",
      "Để có thể đánh bại kẻ thù",
      "Để tăng tốc độ tu luyện",
    ],
    correctAnswer: 1,
    level: "Phàm Nhân",
    attribute: "Lý thuyết",
    explanation:
      "Hiểu biết về Ngự Đạo giúp người tu luyện nắm được nguyên lý vận hành của linh khí trong cơ thể, từ đó có thể tu luyện một cách hiệu quả và an toàn.",
  },
  {
    id: 3,
    question:
      "Phương pháp nào sau đây KHÔNG phù hợp cho người mới bắt đầu tu luyện?",
    answers: [
      "Thiền định mỗi ngày",
      "Tập luyện thể chất nhẹ nhàng",
      "Cố gắng hấp thụ nhiều linh khí nhất có thể",
      "Học hỏi kiến thức cơ bản",
    ],
    correctAnswer: 2,
    level: "Phàm Nhân",
    attribute: "Thực hành",
    explanation:
      "Việc cố gắng hấp thụ quá nhiều linh khí khi chưa có nền tảng vững chắc có thể gây tổn thương cho kinh mạch và cơ thể, đặc biệt là đối với người mới bắt đầu.",
  },
  {
    id: 4,
    question:
      "Đâu là dấu hiệu cho thấy bạn đã sẵn sàng tiến lên tầng Luyện Khí?",
    answers: [
      "Có thể nhìn thấy linh khí",
      "Cảm nhận được sự tồn tại của linh khí xung quanh",
      "Có thể bay lượn",
      "Đánh bại được 10 đối thủ",
    ],
    correctAnswer: 1,
    level: "Phàm Nhân",
    attribute: "Tiến bộ",
    explanation:
      "Khi có thể cảm nhận được sự tồn tại của linh khí xung quanh, đó là dấu hiệu cho thấy cơ thể đã bắt đầu thích nghi và sẵn sàng cho việc hấp thụ linh khí - bước đầu tiên của tầng Luyện Khí.",
  },
  {
    id: 5,
    question:
      "Tại sao việc rèn luyện thể chất lại quan trọng trong giai đoạn Phàm Nhân?",
    answers: [
      "Để trông khỏe mạnh hơn",
      "Để có thể chiến đấu tốt hơn",
      "Để chuẩn bị cơ thể cho việc chứa đựng linh khí",
      "Để gây ấn tượng với các tu sĩ khác",
    ],
    correctAnswer: 2,
    level: "Phàm Nhân",
    attribute: "Cơ bản",
    explanation:
      "Một cơ thể khỏe mạnh sẽ có khả năng chứa đựng và vận chuyển linh khí tốt hơn, giảm thiểu rủi ro khi tu luyện và tăng hiệu quả hấp thụ linh khí.",
  },

  // Luyện Khí
  {
    id: 6,
    question: "Đâu là mục tiêu chính của tầng Luyện Khí?",
    answers: [
      "Tạo ra vũ khí từ linh khí",
      "Hấp thụ và tích trữ linh khí trong cơ thể",
      "Chiến đấu với các tu sĩ khác",
      "Bay lượn tự do",
    ],
    correctAnswer: 1,
    level: "Luyện Khí",
    attribute: "Cơ bản",
    explanation:
      "Tầng Luyện Khí tập trung vào việc hấp thụ linh khí từ thiên nhiên và tích trữ nó trong cơ thể, tạo nền tảng cho các tầng tu luyện cao hơn.",
  },
  {
    id: 7,
    question:
      "Phương pháp nào hiệu quả nhất để hấp thụ linh khí trong tầng Luyện Khí?",
    answers: [
      "Thiền định tại nơi có mật độ linh khí cao",
      "Uống thuốc linh",
      "Đọc sách cổ",
      "Chiến đấu liên tục",
    ],
    correctAnswer: 0,
    level: "Luyện Khí",
    attribute: "Thực hành",
    explanation:
      "Thiền định tại những nơi có mật độ linh khí cao như núi non, thác nước giúp tăng hiệu quả hấp thụ linh khí đáng kể so với các phương pháp khác.",
  },
  {
    id: 8,
    question: "Tại sao việc 'cân cơ bản' lại quan trọng trong tầng Luyện Khí?",
    answers: [
      "Để có thể bay lượn",
      "Để tăng sức mạnh vật lý",
      "Để cân bằng linh khí trong các kinh mạch",
      "Để tạo ra vũ khí linh khí",
    ],
    correctAnswer: 2,
    level: "Luyện Khí",
    attribute: "Lý thuyết",
    explanation:
      "Cân bằng linh khí trong các kinh mạch giúp ngăn ngừa tắc nghẽn, tổn thương và tạo nền tảng vững chắc cho việc tu luyện lên các tầng cao hơn.",
  },
  {
    id: 9,
    question: "Khi nào một tu sĩ được coi là đã hoàn thành tầng Luyện Khí?",
    answers: [
      "Khi có thể tạo ra một quả cầu linh khí",
      "Khi đánh bại được 100 đối thủ",
      "Khi linh khí đã lưu thông đầy đủ trong tất cả các kinh mạch chính",
      "Khi có thể bay lượn",
    ],
    correctAnswer: 2,
    level: "Luyện Khí",
    attribute: "Tiến bộ",
    explanation:
      "Khi linh khí đã lưu thông đầy đủ trong tất cả các kinh mạch chính, đó là dấu hiệu cho thấy cơ thể đã sẵn sàng cho việc tạo nền tảng vững chắc ở tầng Trúc Cơ.",
  },
  {
    id: 10,
    question: "Nguy hiểm lớn nhất khi tu luyện ở tầng Luyện Khí là gì?",
    answers: [
      "Bị các tu sĩ khác tấn công",
      "Kinh mạch bị vỡ do hấp thụ quá nhiều linh khí",
      "Mất trí nhớ",
      "Không thể quay về trạng thái Phàm Nhân",
    ],
    correctAnswer: 1,
    level: "Luyện Khí",
    attribute: "Cảnh báo",
    explanation:
      "Việc hấp thụ quá nhiều linh khí khi kinh mạch chưa đủ mạnh có thể gây ra hiện tượng vỡ kinh mạch, dẫn đến tổn thương nghiêm trọng hoặc thậm chí tử vong.",
  },

  // Trúc Cơ
  {
    id: 11,
    question: "Mục tiêu chính của tầng Trúc Cơ là gì?",
    answers: [
      "Tạo ra vũ khí linh khí",
      "Xây dựng nền tảng vững chắc cho việc tu luyện",
      "Chiến đấu với các tu sĩ khác",
      "Học các phép thuật mạnh mẽ",
    ],
    correctAnswer: 1,
    level: "Trúc Cơ",
    attribute: "Cơ bản",
    explanation:
      "Tầng Trúc Cơ tập trung vào việc xây dựng nền tảng vững chắc cho việc tu luyện, củng cố kinh mạch và tạo ra một hệ thống tuần hoàn linh khí ổn định trong cơ thể.",
  },
  {
    id: 12,
    question:
      "'Vận & Sức hiệu năng cao' trong tầng Trúc Cơ đề cập đến điều gì?",
    answers: [
      "Khả năng vận chuyển vật nặng",
      "Khả năng vận hành linh khí với hiệu suất cao",
      "Sức mạnh vật lý tăng cao",
      "Khả năng bay lượn nhanh hơn",
    ],
    correctAnswer: 1,
    level: "Trúc Cơ",
    attribute: "Lý thuyết",
    explanation:
      "'Vận & Sức hiệu năng cao' đề cập đến khả năng vận hành và sử dụng linh khí một cách hiệu quả, tiết kiệm năng lượng và tạo ra hiệu ứng mạnh mẽ hơn.",
  },
  {
    id: 13,
    question:
      "Phương pháp nào sau đây KHÔNG phải là một phần của tầng Trúc Cơ?",
    answers: [
      "Củng cố kinh mạch",
      "Tạo ra một hệ thống tuần hoàn linh khí",
      "Ngưng tụ linh khí thành Kim Đan",
      "Tăng cường khả năng hấp thụ linh khí",
    ],
    correctAnswer: 2,
    level: "Trúc Cơ",
    attribute: "Phân biệt",
    explanation:
      "Ngưng tụ linh khí thành Kim Đan là mục tiêu của tầng Kim Đan, không phải Trúc Cơ. Tầng Trúc Cơ tập trung vào việc củng cố nền tảng và chuẩn bị cho việc tạo Kim Đan.",
  },
  {
    id: 14,
    question:
      "Dấu hiệu nào cho thấy một tu sĩ đã sẵn sàng tiến lên tầng Kim Đan?",
    answers: [
      "Có thể bay lượn tự do",
      "Đánh bại được 1000 đối thủ",
      "Kinh mạch đã được củng cố hoàn toàn và hệ thống tuần hoàn linh khí ổn định",
      "Có thể tạo ra các phép thuật mạnh mẽ",
    ],
    correctAnswer: 2,
    level: "Trúc Cơ",
    attribute: "Tiến bộ",
    explanation:
      "Khi kinh mạch đã được củng cố hoàn toàn và hệ thống tuần hoàn linh khí ổn định, cơ thể đã sẵn sàng cho quá trình ngưng tụ Kim Đan - một quá trình đòi hỏi nền tảng vững chắc.",
  },
  {
    id: 15,
    question:
      "Tại sao việc thiền định lại đặc biệt quan trọng trong tầng Trúc Cơ?",
    answers: [
      "Để tăng sức mạnh vật lý",
      "Để có thể bay lượn",
      "Để ổn định tâm thần và kiểm soát linh khí tốt hơn",
      "Để tạo ra vũ khí linh khí",
    ],
    correctAnswer: 2,
    level: "Trúc Cơ",
    attribute: "Thực hành",
    explanation:
      "Thiền định giúp ổn định tâm thần và tăng cường khả năng kiểm soát linh khí, điều này rất quan trọng trong tầng Trúc Cơ khi lượng linh khí trong cơ thể ngày càng tăng.",
  },

  // Kim Đan
  {
    id: 16,
    question: "Kim Đan là gì?",
    answers: [
      "Một loại thuốc linh",
      "Một khối cầu linh khí được ngưng tụ trong cơ thể",
      "Một loại vũ khí",
      "Một kỹ thuật chiến đấu",
    ],
    correctAnswer: 1,
    level: "Kim Đan",
    attribute: "Cơ bản",
    explanation:
      "Kim Đan là một khối cầu linh khí được ngưng tụ từ tinh hoa linh khí trong cơ thể, là nguồn sức mạnh lớn và là dấu hiệu của việc tiến vào tầng Kim Đan.",
  },
  {
    id: 17,
    question:
      "'Luyện thể & Rung Ảnh thuật' trong tầng Kim Đan đề cập đến điều gì?",
    answers: [
      "Khả năng tạo ra ảo ảnh",
      "Khả năng rung động cơ thể để tránh đòn tấn công",
      "Khả năng luyện hóa cơ thể và tạo ra phân thân",
      "Khả năng làm rung chuyển vật thể từ xa",
    ],
    correctAnswer: 2,
    level: "Kim Đan",
    attribute: "Lý thuyết",
    explanation:
      "'Luyện thể & Rung Ảnh thuật' đề cập đến khả năng luyện hóa cơ thể để trở nên mạnh mẽ hơn và tạo ra phân thân (rung ảnh) - một bản sao của bản thân có thể hoạt động độc lập trong thời gian ngắn.",
  },
  {
    id: 18,
    question:
      "Quá trình nào sau đây KHÔNG phải là một phần của việc tạo Kim Đan?",
    answers: [
      "Ngưng tụ tinh hoa linh khí",
      "Ổn định Kim Đan",
      "Tách rời linh hồn khỏi cơ thể",
      "Tăng cường mật độ linh khí",
    ],
    correctAnswer: 2,
    level: "Kim Đan",
    attribute: "Phân biệt",
    explanation:
      "Tách rời linh hồn khỏi cơ thể là một phần của tầng Nguyên Anh, không phải Kim Đan. Tầng Kim Đan tập trung vào việc ngưng tụ và ổn định Kim Đan.",
  },
  {
    id: 19,
    question: "Lợi ích lớn nhất của việc có Kim Đan là gì?",
    answers: [
      "Có thể bay lượn tự do",
      "Có nguồn năng lượng mạnh mẽ và ổn định",
      "Có thể tạo ra các phép thuật mạnh mẽ",
      "Có thể sống lâu hơn",
    ],
    correctAnswer: 1,
    level: "Kim Đan",
    attribute: "Lợi ích",
    explanation:
      "Kim Đan cung cấp một nguồn năng lượng mạnh mẽ và ổn định, giúp tu sĩ có thể thực hiện các kỹ thuật cao cấp, tăng cường sức mạnh và kéo dài tuổi thọ.",
  },
  {
    id: 20,
    question: "Thách thức lớn nhất khi tạo Kim Đan là gì?",
    answers: [
      "Tìm kiếm đủ linh thảo",
      "Đánh bại các tu sĩ khác",
      "Kiểm soát quá trình ngưng tụ để tránh nổ Kim Đan",
      "Tìm kiếm một nơi có đủ linh khí",
    ],
    correctAnswer: 2,
    level: "Kim Đan",
    attribute: "Thách thức",
    explanation:
      "Quá trình ngưng tụ Kim Đan rất nguy hiểm, nếu không kiểm soát tốt có thể dẫn đến hiện tượng nổ Kim Đan, gây tổn thương nghiêm trọng hoặc thậm chí tử vong.",
  },
];

export default exerciseQuestions;
