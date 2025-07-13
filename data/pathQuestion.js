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
      question: "What is 'app' in English?",
      options: [
        "Máy tính",
        "Ứng dụng",
        "Internet",
        "Màn hình"
      ],
      correctAnswer: 1,
      hint: "Đây là phần mềm bạn tải về và sử dụng trên điện thoại thông minh hoặc máy tính bảng.",
      explanation: "'App' (viết tắt của application) trong tiếng Anh có nghĩa là 'ứng dụng' trong tiếng Việt. Ứng dụng là phần mềm được thiết kế để thực hiện các tác vụ cụ thể và có thể được cài đặt trên điện thoại thông minh, máy tính bảng và máy tính."
    },
    {
      id: 5,
      question: "What is 'social media' in English?",
      options: [
        "Báo chí",
        "Mạng xã hội",
        "Tivi",
        "Sách"
      ],
      correctAnswer: 1,
      hint: "Đây là nơi mọi người chia sẻ ảnh, suy nghĩ và kết nối với bạn bè trực tuyến.",
      explanation: "'Social media' trong tiếng Anh có nghĩa là 'mạng xã hội' trong tiếng Việt. Mạng xã hội là các trang web và ứng dụng cho phép người dùng tạo và chia sẻ nội dung hoặc tham gia vào mạng lưới xã hội, ví dụ như Facebook, Instagram, Twitter."
    }
  ],
  
  education: [ // Từ vựng tiếng Anh giáo dục cơ bản
    {
      id: 1,
      question: "What is 'teacher' in English?",
      options: [
        "Học sinh",
        "Giáo viên",
        "Hiệu trưởng",
        "Phụ huynh"
      ],
      correctAnswer: 1,
      hint: "Đây là người đứng trước lớp học và giảng bài.",
      explanation: "'Teacher' trong tiếng Anh có nghĩa là 'giáo viên' trong tiếng Việt. Giáo viên là người giúp học sinh tiếp thu kiến thức, kỹ năng và phẩm chất. Họ hướng dẫn học sinh trong quá trình học tập, giải thích khái niệm và đánh giá sự tiến bộ của học sinh."
    },
    {
      id: 2,
      question: "What is 'student' in English?",
      options: [
        "Giáo viên",
        "Học sinh",
        "Hiệu trưởng",
        "Phụ huynh"
      ],
      correctAnswer: 1,
      hint: "Đây là người ngồi trong lớp học để học từ giáo viên.",
      explanation: "'Student' trong tiếng Anh có nghĩa là 'học sinh' hoặc 'sinh viên' trong tiếng Việt. Học sinh/sinh viên là người theo học tại trường học, cao đẳng, đại học hoặc cơ sở giáo dục khác để học tập. Họ tham gia các lớp học, hoàn thành bài tập và làm bài kiểm tra."
    },
    {
      id: 3,
      question: "What is 'classroom' in English?",
      options: [
        "Nhà ăn",
        "Lớp học",
        "Thư viện",
        "Sân chơi"
      ],
      correctAnswer: 1,
      hint: "Đây là nơi học sinh và giáo viên tụ họp để học bài.",
      explanation: "'Classroom' trong tiếng Anh có nghĩa là 'lớp học' trong tiếng Việt. Lớp học là phòng trong trường học hoặc cơ sở giáo dục nơi diễn ra việc dạy và học. Lớp học thường có bàn ghế cho học sinh, bảng để giáo viên viết và các tài liệu giáo dục khác nhau."
    },
    {
      id: 4,
      question: "What is 'homework' in English?",
      options: [
        "Sách giáo khoa",
        "Bài tập về nhà",
        "Bài kiểm tra",
        "Thời khóa biểu"
      ],
      correctAnswer: 1,
      hint: "Đây là công việc mà giáo viên giao cho học sinh làm sau giờ học.",
      explanation: "'Homework' trong tiếng Anh có nghĩa là 'bài tập về nhà' trong tiếng Việt. Bài tập về nhà là các nhiệm vụ được giáo viên giao cho học sinh để hoàn thành ngoài giờ học, thường là ở nhà. Bài tập về nhà giúp củng cố kiến thức đã học và phát triển kỹ năng tự học."
    },
    {
      id: 5,
      question: "What is 'test' in English?",
      options: [
        "Sách giáo khoa",
        "Bài kiểm tra",
        "Thời khóa biểu",
        "Bài tập về nhà"
      ],
      correctAnswer: 1,
      hint: "Đây là khi học sinh phải trả lời câu hỏi để thể hiện những gì họ đã học.",
      explanation: "'Test' trong tiếng Anh có nghĩa là 'bài kiểm tra' trong tiếng Việt. Bài kiểm tra là một đánh giá nhằm đo lường kiến thức, kỹ năng hoặc sự hiểu biết của học sinh về một môn học. Bài kiểm tra giúp giáo viên đánh giá việc học của học sinh."
    }
  ],
  
  legalEnglish: [ // Từ vựng tiếng Anh pháp lý cơ bản
    {
      id: 1,
      question: "What is 'law' in English?",
      options: [
        "Tòa án",
        "Luật pháp",
        "Cảnh sát",
        "Thẩm phán"
      ],
      correctAnswer: 1,
      hint: "Đây là quy tắc mà mọi người trong một quốc gia phải tuân theo.",
      explanation: "'Law' trong tiếng Anh có nghĩa là 'luật pháp' trong tiếng Việt. Luật pháp là quy tắc được chính phủ đặt ra và mọi người trong một quốc gia, tiểu bang hoặc cộng đồng phải tuân theo. Vi phạm luật pháp có thể dẫn đến các hình phạt như phạt tiền hoặc tù."
    },
    {
      id: 2,
      question: "What is 'court' in English?",
      options: [
        "Luật pháp",
        "Tòa án",
        "Cảnh sát",
        "Nhà tù"
      ],
      correctAnswer: 1,
      hint: "Đây là nơi mọi người đến khi họ có vấn đề pháp lý cần giải quyết.",
      explanation: "'Court' trong tiếng Anh có nghĩa là 'tòa án' trong tiếng Việt. Tòa án là nơi chính thức xét xử và quyết định các vấn đề pháp lý bởi thẩm phán hoặc bồi thẩm đoàn. Tòa án giải quyết tranh chấp giữa các bên và xác định tội hay vô tội của người bị buộc tội."
    },
    {
      id: 3,
      question: "What is 'judge' in English?",
      options: [
        "Luật sư",
        "Thẩm phán",
        "Cảnh sát",
        "Tội phạm"
      ],
      correctAnswer: 1,
      hint: "Đây là người ngồi ở phía trước phòng xử án và đưa ra quyết định cuối cùng.",
      explanation: "'Judge' trong tiếng Anh có nghĩa là 'thẩm phán' trong tiếng Việt. Thẩm phán là viên chức công quyền chủ trì tòa án. Thẩm phán nghe bằng chứng, xác định sự thật của vụ án, áp dụng luật liên quan và đưa ra quyết định hoặc phán quyết."
    },
    {
      id: 4,
      question: "What is 'lawyer' in English?",
      options: [
        "Thẩm phán",
        "Luật sư",
        "Cảnh sát",
        "Tội phạm"
      ],
      correctAnswer: 1,
      hint: "Đây là người giúp đỡ mọi người với các vấn đề pháp lý và đại diện cho họ tại tòa án.",
      explanation: "'Lawyer' trong tiếng Anh có nghĩa là 'luật sư' trong tiếng Việt. Luật sư là người được đào tạo và cấp phép để hành nghề luật, tư vấn pháp lý và đại diện cho khách hàng trong các vấn đề pháp lý. Luật sư giúp khách hàng hiểu quyền và nghĩa vụ pháp lý của họ."
    },
    {
      id: 5,
      question: "What is 'crime' in English?",
      options: [
        "Luật pháp",
        "Tội phạm",
        "Cảnh sát",
        "Nhà tù"
      ],
      correctAnswer: 1,
      hint: "Đây là hành động có thể khiến ai đó bị bắt giữ hoặc bị trừng phạt theo pháp luật.",
      explanation: "'Crime' trong tiếng Anh có nghĩa là 'tội phạm' trong tiếng Việt. Tội phạm là hành động vi phạm pháp luật và bị trừng phạt theo luật. Ví dụ phổ biến bao gồm trộm cắp, hành hung, giết người và lừa đảo. Khi ai đó phạm tội, họ có thể phải đối mặt với các hậu quả như phạt tiền hoặc tù."
    }
  ]
};

export default pathQuestions;