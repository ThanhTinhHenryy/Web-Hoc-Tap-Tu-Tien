const pathQuestions = {
  // Các câu hỏi từ vựng cơ bản cho người mới bắt đầu học tiếng Anh chuyên ngành
  medicalEnglish: [ // Từ vựng tiếng Anh y khoa cơ bản
    {
      id: 1,
      question: "What is 'heart' in English?",
      options: [
        "Đầu",
        "Tim",
        "Phổi",
        "Dạ dày"
      ],
      correctAnswer: 1,
      hint: "Đây là cơ quan bơm máu trong cơ thể.",
      explanation: "'Heart' trong tiếng Anh có nghĩa là 'tim' trong tiếng Việt. Tim là cơ quan cơ bắp có chức năng bơm máu đi khắp cơ thể thông qua hệ thống tuần hoàn."
    },
    {
      id: 2,
      question: "What is 'blood' in English?",
      options: [
        "Nước",
        "Máu",
        "Mồ hôi",
        "Nước mắt"
      ],
      correctAnswer: 1,
      hint: "Đây là chất lỏng màu đỏ chảy trong mạch máu.",
      explanation: "'Blood' trong tiếng Anh có nghĩa là 'máu' trong tiếng Việt. Máu là chất lỏng màu đỏ chảy trong mạch máu, có chức năng vận chuyển oxy và chất dinh dưỡng đến các tế bào trong cơ thể."
    },
    {
      id: 3,
      question: "What is 'doctor' in English?",
      options: [
        "Y tá",
        "Bác sĩ",
        "Dược sĩ",
        "Bệnh nhân"
      ],
      correctAnswer: 1,
      hint: "Đây là người khám và điều trị bệnh.",
      explanation: "'Doctor' trong tiếng Anh có nghĩa là 'bác sĩ' trong tiếng Việt. Bác sĩ là người được đào tạo và có chuyên môn trong việc chẩn đoán, điều trị bệnh và chăm sóc sức khỏe cho bệnh nhân."
    },
    {
      id: 4,
      question: "What is 'hospital' in English?",
      options: [
        "Trường học",
        "Bệnh viện",
        "Nhà hàng",
        "Khách sạn"
      ],
      correctAnswer: 1,
      hint: "Đây là nơi điều trị cho người bệnh.",
      explanation: "'Hospital' trong tiếng Anh có nghĩa là 'bệnh viện' trong tiếng Việt. Bệnh viện là cơ sở y tế nơi bệnh nhân được chăm sóc, điều trị bởi các bác sĩ, y tá và nhân viên y tế khác."
    },
    {
      id: 5,
      question: "What is 'medicine' in English?",
      options: [
        "Bệnh",
        "Thuốc",
        "Bác sĩ",
        "Bệnh viện"
      ],
      correctAnswer: 1,
      hint: "Đây là chất dùng để điều trị bệnh.",
      explanation: "'Medicine' trong tiếng Anh có nghĩa là 'thuốc' trong tiếng Việt. Thuốc là chất được sử dụng để điều trị, chẩn đoán, ngăn ngừa bệnh tật hoặc cải thiện sức khỏe."
    }
  ],

  businessEnglish: [ // Từ vựng tiếng Anh kinh doanh cơ bản
    {
      id: 1,
      question: "What is 'money' in English?",
      options: [
        "Thời gian",
        "Tiền",
        "Sức khỏe",
        "Hạnh phúc"
      ],
      correctAnswer: 1,
      hint: "Đây là thứ bạn dùng để mua hàng hóa và dịch vụ.",
      explanation: "'Money' trong tiếng Anh có nghĩa là 'tiền' trong tiếng Việt. Tiền là phương tiện thanh toán được sử dụng để mua hàng hóa và dịch vụ, trả nợ, hoặc thực hiện các giao dịch kinh tế khác."
    },
    {
      id: 2,
      question: "What is 'company' in English?",
      options: [
        "Trường học",
        "Công ty",
        "Bệnh viện",
        "Nhà hàng"
      ],
      correctAnswer: 1,
      hint: "Đây là tổ chức kinh doanh có nhiều nhân viên.",
      explanation: "'Company' trong tiếng Anh có nghĩa là 'công ty' trong tiếng Việt. Công ty là một tổ chức kinh doanh được thành lập để cung cấp hàng hóa hoặc dịch vụ nhằm mục đích tạo ra lợi nhuận."
    },
    {
      id: 3,
      question: "What is 'office' in English?",
      options: [
        "Nhà",
        "Văn phòng",
        "Trường học",
        "Bệnh viện"
      ],
      correctAnswer: 1,
      hint: "Đây là nơi nhiều người làm việc với máy tính và giấy tờ.",
      explanation: "'Office' trong tiếng Anh có nghĩa là 'văn phòng' trong tiếng Việt. Văn phòng là không gian làm việc nơi người ta thực hiện các công việc hành chính, kinh doanh hoặc chuyên môn."
    },
    {
      id: 4,
      question: "What is 'manager' in English?",
      options: [
        "Nhân viên",
        "Quản lý",
        "Khách hàng",
        "Đối tác"
      ],
      correctAnswer: 1,
      hint: "Đây là người điều hành một nhóm nhân viên hoặc một bộ phận.",
      explanation: "'Manager' trong tiếng Anh có nghĩa là 'quản lý' trong tiếng Việt. Quản lý là người chịu trách nhiệm điều hành một nhóm nhân viên, một bộ phận hoặc một tổ chức, đưa ra quyết định và đảm bảo công việc được hoàn thành."
    },
    {
      id: 5,
      question: "What is 'job' in English?",
      options: [
        "Gia đình",
        "Công việc",
        "Trường học",
        "Sở thích"
      ],
      correctAnswer: 1,
      hint: "Đây là hoạt động bạn làm để kiếm tiền.",
      explanation: "'Job' trong tiếng Anh có nghĩa là 'công việc' trong tiếng Việt. Công việc là hoạt động thường xuyên được thực hiện để kiếm tiền, thường là trong một tổ chức hoặc cho một người sử dụng lao động."
    }
  ],

  tourismHospitality: [ // Từ vựng tiếng Anh du lịch và khách sạn cơ bản
    {
      id: 1,
      question: "What is 'hotel' in English?",
      options: [
        "Nhà hàng",
        "Khách sạn",
        "Sân bay",
        "Bãi biển"
      ],
      correctAnswer: 1,
      hint: "Đây là nơi du khách ở khi đi du lịch.",
      explanation: "'Hotel' trong tiếng Anh có nghĩa là 'khách sạn' trong tiếng Việt. Khách sạn là nơi cung cấp phòng nghỉ và các dịch vụ khác cho khách du lịch hoặc người đi công tác."
    },
    {
      id: 2,
      question: "What is 'restaurant' in English?",
      options: [
        "Khách sạn",
        "Nhà hàng",
        "Cửa hàng",
        "Bệnh viện"
      ],
      correctAnswer: 1,
      hint: "Đây là nơi bạn đi ăn khi không muốn nấu ăn ở nhà.",
      explanation: "'Restaurant' trong tiếng Anh có nghĩa là 'nhà hàng' trong tiếng Việt. Nhà hàng là nơi chuẩn bị và phục vụ thức ăn, đồ uống cho khách hàng."
    },
    {
      id: 3,
      question: "What is 'beach' in English?",
      options: [
        "Núi",
        "Bãi biển",
        "Sông",
        "Hồ"
      ],
      correctAnswer: 1,
      hint: "Đây là nơi có cát và biển, nơi mọi người đi tắm nắng và bơi lội.",
      explanation: "'Beach' trong tiếng Anh có nghĩa là 'bãi biển' trong tiếng Việt. Bãi biển là khu vực cát hoặc sỏi dọc theo bờ biển, nơi mọi người thường đến để tắm nắng, bơi lội và thư giãn."
    },
    {
      id: 4,
      question: "What is 'airport' in English?",
      options: [
        "Bến xe",
        "Sân bay",
        "Ga tàu",
        "Bến cảng"
      ],
      correctAnswer: 1,
      hint: "Đây là nơi máy bay cất cánh và hạ cánh.",
      explanation: "'Airport' trong tiếng Anh có nghĩa là 'sân bay' trong tiếng Việt. Sân bay là nơi máy bay cất cánh, hạ cánh và nơi hành khách lên xuống máy bay."
    },
    {
      id: 5,
      question: "What is 'passport' in English?",
      options: [
        "Vé máy bay",
        "Hộ chiếu",
        "Tiền",
        "Hành lý"
      ],
      correctAnswer: 1,
      hint: "Đây là giấy tờ bạn cần có khi đi du lịch nước ngoài.",
      explanation: "'Passport' trong tiếng Anh có nghĩa là 'hộ chiếu' trong tiếng Việt. Hộ chiếu là giấy tờ chính thức do chính phủ cấp để xác nhận danh tính và quốc tịch của một người khi đi du lịch nước ngoài."
    }
  ],

  scienceTech: [ // Từ vựng tiếng Anh khoa học và công nghệ cơ bản
    {
      id: 1,
      question: "What is 'computer' in English?",
      options: [
        "Điện thoại",
        "Máy tính",
        "Tivi",
        "Máy ảnh"
      ],
      correctAnswer: 1,
      hint: "Đây là thiết bị điện tử bạn dùng để lướt web, viết văn bản, chơi game.",
      explanation: "'Computer' trong tiếng Anh có nghĩa là 'máy tính' trong tiếng Việt. Máy tính là thiết bị điện tử có khả năng lưu trữ, xử lý dữ liệu và thực hiện các tác vụ khác nhau."
    },
    {
      id: 2,
      question: "What is 'internet' in English?",
      options: [
        "Điện thoại",
        "Internet",
        "Tivi",
        "Sách"
      ],
      correctAnswer: 1,
      hint: "Đây là mạng toàn cầu kết nối hàng triệu máy tính.",
      explanation: "'Internet' trong tiếng Anh cũng được gọi là 'internet' trong tiếng Việt. Internet là mạng lưới toàn cầu kết nối hàng tỷ thiết bị điện tử, cho phép mọi người chia sẻ thông tin và giao tiếp với nhau."
    },
    {
      id: 3,
      question: "What is 'smartphone' in English?",
      options: [
        "Máy tính",
        "Điện thoại thông minh",
        "Máy ảnh",
        "Tivi"
      ],
      correctAnswer: 1,
      hint: "Đây là loại điện thoại có nhiều tính năng như máy tính.",
      explanation: "'Smartphone' trong tiếng Anh có nghĩa là 'điện thoại thông minh' trong tiếng Việt. Điện thoại thông minh là loại điện thoại di động có nhiều tính năng như máy tính, thường có màn hình cảm ứng, kết nối internet và có thể cài đặt các ứng dụng."
    },
    {
      id: 4,
      question: "What is 'software' in English?",
      options: [
        "Phần cứng",
        "Phần mềm",
        "Mạng internet",
        "Dữ liệu"
      ],
      correctAnswer: 1,
      hint: "Đây là các chương trình và ứng dụng chạy trên máy tính.",
      explanation: "'Software' trong tiếng Anh có nghĩa là 'phần mềm' trong tiếng Việt. Phần mềm là tập hợp các chương trình, ứng dụng và dữ liệu được thiết kế để thực hiện các tác vụ cụ thể trên máy tính hoặc thiết bị điện tử."
    },
    {
      id: 5,
      question: "What is 'email' in English?",
      options: [
        "Tin nhắn",
        "Thư điện tử",
        "Cuộc gọi",
        "Trang web"
      ],
      correctAnswer: 1,
      hint: "Đây là phương thức liên lạc điện tử phổ biến qua internet.",
      explanation: "'Email' trong tiếng Anh có nghĩa là 'thư điện tử' trong tiếng Việt. Email là phương thức trao đổi thông điệp kỹ thuật số được gửi qua mạng internet, cho phép người dùng gửi và nhận thư, tài liệu và các tệp đính kèm."
    }
  ],

  // Education Questions
  education: [
    {
      id: 1,
      question: "What is 'school' in English?",
      options: [
        "Bệnh viện",
        "Trường học",
        "Công ty",
        "Nhà hàng"
      ],
      correctAnswer: 1,
      hint: "Đây là nơi học sinh đến để học tập.",
      explanation: "'School' trong tiếng Anh có nghĩa là 'trường học' trong tiếng Việt. Trường học là cơ sở giáo dục nơi học sinh đến để học tập và phát triển kiến thức, kỹ năng dưới sự hướng dẫn của giáo viên."
    },
    {
      id: 2,
      question: "What is 'teacher' in English?",
      options: [
        "Học sinh",
        "Giáo viên",
        "Hiệu trưởng",
        "Phụ huynh"
      ],
      correctAnswer: 1,
      hint: "Đây là người dạy học trong trường học.",
      explanation: "'Teacher' trong tiếng Anh có nghĩa là 'giáo viên' trong tiếng Việt. Giáo viên là người có chuyên môn trong việc giảng dạy, truyền đạt kiến thức và hướng dẫn học sinh trong quá trình học tập."
    },
    {
      id: 3,
      question: "What is 'student' in English?",
      options: [
        "Giáo viên",
        "Học sinh",
        "Hiệu trưởng",
        "Phụ huynh"
      ],
      correctAnswer: 1,
      hint: "Đây là người đi học tại trường học.",
      explanation: "'Student' trong tiếng Anh có nghĩa là 'học sinh' trong tiếng Việt. Học sinh là người đang theo học tại một cơ sở giáo dục để tiếp thu kiến thức và phát triển kỹ năng."
    },
    {
      id: 4,
      question: "What is 'book' in English?",
      options: [
        "Bút",
        "Sách",
        "Bảng",
        "Bàn"
      ],
      correctAnswer: 1,
      hint: "Đây là vật chứa nhiều trang giấy có nội dung để đọc.",
      explanation: "'Book' trong tiếng Anh có nghĩa là 'sách' trong tiếng Việt. Sách là một ấn phẩm in hoặc điện tử chứa văn bản, hình ảnh và thông tin được sắp xếp thành các trang để đọc."
    },
    {
      id: 5,
      question: "What is 'classroom' in English?",
      options: [
        "Trường học",
        "Lớp học",
        "Thư viện",
        "Sân chơi"
      ],
      correctAnswer: 1,
      hint: "Đây là phòng trong trường học nơi diễn ra việc dạy và học.",
      explanation: "'Classroom' trong tiếng Anh có nghĩa là 'lớp học' trong tiếng Việt. Lớp học là phòng trong trường học nơi giáo viên giảng dạy và học sinh học tập."
    }
  ],

  // Legal English Questions
  legalEnglish: [
    {
      id: 1,
      question: "What is 'law' in English?",
      options: [
        "Tòa án",
        "Luật",
        "Thẩm phán",
        "Luật sư"
      ],
      correctAnswer: 1,
      hint: "Đây là hệ thống quy tắc và quy định trong xã hội.",
      explanation: "'Law' trong tiếng Anh có nghĩa là 'luật' trong tiếng Việt. Luật là hệ thống các quy tắc và quy định được thiết lập bởi chính phủ hoặc xã hội để điều chỉnh hành vi, duy trì trật tự và giải quyết tranh chấp."
    },
    {
      id: 2,
      question: "What is 'court' in English?",
      options: [
        "Luật",
        "Tòa án",
        "Luật sư",
        "Tội phạm"
      ],
      correctAnswer: 1,
      hint: "Đây là nơi xét xử các vụ án.",
      explanation: "'Court' trong tiếng Anh có nghĩa là 'tòa án' trong tiếng Việt. Tòa án là nơi xét xử các vụ án, giải quyết tranh chấp pháp lý và đưa ra phán quyết dựa trên luật pháp."
    },
    {
      id: 3,
      question: "What is 'judge' in English?",
      options: [
        "Luật sư",
        "Thẩm phán",
        "Tòa án",
        "Tội phạm"
      ],
      correctAnswer: 1,
      hint: "Đây là người đưa ra phán quyết trong tòa án.",
      explanation: "'Judge' trong tiếng Anh có nghĩa là 'thẩm phán' trong tiếng Việt. Thẩm phán là người có thẩm quyền xét xử các vụ án, đưa ra phán quyết và áp dụng luật pháp trong tòa án."
    },
    {
      id: 4,
      question: "What is 'lawyer' in English?",
      options: [
        "Thẩm phán",
        "Luật sư",
        "Tòa án",
        "Luật"
      ],
      correctAnswer: 1,
      hint: "Đây là người đại diện và tư vấn pháp lý cho thân chủ.",
      explanation: "'Lawyer' trong tiếng Anh có nghĩa là 'luật sư' trong tiếng Việt. Luật sư là người được đào tạo và có chuyên môn về luật pháp, đại diện và tư vấn pháp lý cho thân chủ trong các vấn đề pháp lý."
    },
    {
      id: 5,
      question: "What is 'crime' in English?",
      options: [
        "Luật",
        "Tội phạm",
        "Tòa án",
        "Luật sư"
      ],
      correctAnswer: 1,
      hint: "Đây là hành vi vi phạm pháp luật và có thể bị trừng phạt.",
      explanation: "'Crime' trong tiếng Anh có nghĩa là 'tội phạm' trong tiếng Việt. Tội phạm là hành vi vi phạm pháp luật, gây hại cho cá nhân hoặc xã hội và có thể bị trừng phạt theo luật pháp."
    }
  ]
};

export default pathQuestions;