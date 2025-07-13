const pathQuestions = {
  // Các câu hỏi từ vựng cơ bản cho người mới bắt đầu học tiếng Anh chuyên ngành
  medicalEnglish: [
    // Từ vựng tiếng Anh y khoa cơ bản
    {
      id: 1,
      question: "Which organ pumps blood throughout the body?",
      options: ["Brain", "Heart", "Lungs", "Liver"],
      correctAnswer: 1,
      hint: "Đây là cơ quan cơ bắp đập liên tục trong lồng ngực của bạn.",
      explanation:
        "The heart is a muscular organ that pumps blood throughout the body via the circulatory system. It delivers oxygen and nutrients to the cells and removes carbon dioxide and other wastes.",
    },
    {
      id: 2,
      question: "What is the red fluid that flows through our veins?",
      options: ["Water", "Blood", "Sweat", "Tears"],
      correctAnswer: 1,
      hint: "Chất lỏng màu đỏ này chứa các tế bào và chất dinh dưỡng.",
      explanation:
        "Blood is a body fluid that delivers necessary substances such as nutrients and oxygen to the cells and transports metabolic waste products away from those same cells. It consists of plasma, red blood cells, white blood cells, and platelets.",
    },
    {
      id: 3,
      question: "Who do you visit when you are sick and need medical treatment?",
      options: ["Nurse", "Doctor", "Pharmacist", "Patient"],
      correctAnswer: 1,
      hint: "Người này đã học y khoa nhiều năm và có thể chẩn đoán bệnh.",
      explanation:
        "A doctor is a medical professional who practices medicine, which is concerned with promoting, maintaining, or restoring health through the study, diagnosis, prognosis, and treatment of disease, injury, and other physical and mental impairments.",
    },
    {
      id: 4,
      question: "Where do people go for medical treatment when they are seriously ill?",
      options: ["School", "Hospital", "Restaurant", "Hotel"],
      correctAnswer: 1,
      hint: "Nơi này có nhiều phòng cho bệnh nhân, phòng mổ và các thiết bị y tế.",
      explanation:
        "A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment. Hospitals are typically staffed by professional physicians, surgeons, nurses, and allied health practitioners.",
    },
    {
      id: 5,
      question: "What do you take when a doctor prescribes something to help you get better?",
      options: ["Disease", "Medicine", "Doctor", "Hospital"],
      correctAnswer: 1,
      hint: "Bạn thường uống hoặc tiêm cái này để điều trị bệnh.",
      explanation:
        "Medicine is a substance or preparation used to treat disease. It can come in many forms, including pills, liquids, creams, and injections. Medicines work by various mechanisms to treat, cure, or prevent diseases and relieve symptoms.",
    },
  ],

  businessEnglish: [
    // Từ vựng tiếng Anh kinh doanh cơ bản
    {
      id: 1,
      question: "What do people use to buy goods and services?",
      options: ["Time", "Money", "Health", "Happiness"],
      correctAnswer: 1,
      hint: "Bạn cần cái này để mua đồ trong cửa hàng hoặc thanh toán hóa đơn.",
      explanation:
        "Money is a medium of exchange that is used to purchase goods and services. It serves as a store of value and a unit of account in economic transactions. Money can take various forms, including cash, coins, and digital currency.",
    },
    {
      id: 2,
      question: "What is a business organization that sells products or services to make profit?",
      options: ["School", "Company", "Hospital", "Restaurant"],
      correctAnswer: 1,
      hint: "Tổ chức này có nhiều nhân viên, văn phòng và thường có mục tiêu kiếm lợi nhuận.",
      explanation:
        "A company is a legal entity formed by a group of individuals to engage in business. It is an organization that aims to earn profit by selling goods or services. Companies can range from small businesses to large corporations with many employees and offices worldwide.",
    },
    {
      id: 3,
      question: "Where do most business professionals work during the day?",
      options: ["Home", "Office", "School", "Hospital"],
      correctAnswer: 1,
      hint: "Nơi này thường có bàn làm việc, máy tính và phòng họp.",
      explanation:
        "An office is a space where professionals conduct administrative work, typically equipped with desks, computers, and meeting rooms. It serves as a central location for business operations, communication, and collaboration among employees.",
    },
    {
      id: 4,
      question: "Who is responsible for supervising employees and making decisions in a department?",
      options: ["Employee", "Manager", "Customer", "Partner"],
      correctAnswer: 1,
      hint: "Người này lãnh đạo một nhóm nhân viên và báo cáo cho cấp cao hơn.",
      explanation:
        "A manager is a person responsible for controlling or administering all or part of a company or organization. Managers supervise employees, make decisions, allocate resources, and ensure that goals are met efficiently and effectively.",
    },
    {
      id: 5,
      question: "What do people have that provides them with regular income?",
      options: ["Family", "Job", "School", "Hobby"],
      correctAnswer: 1,
      hint: "Bạn đi làm điều này hàng ngày để kiếm tiền và phát triển sự nghiệp.",
      explanation:
        "A job is a regular activity performed in exchange for payment. It typically involves a specific position or role within an organization where a person is employed to perform certain tasks or responsibilities. Jobs provide people with income, experience, and opportunities for career advancement.",
    },
  ],

  tourismHospitality: [
    // Từ vựng tiếng Anh du lịch và khách sạn cơ bản
    {
      id: 1,
      question: "Where do tourists usually stay during their trip?",
      options: ["Library", "Kitchen", "Hotel", "Office"],
      correctAnswer: 2,
      hint: "Bạn làm thủ tục ở đây, nhận chìa khóa và ngủ trong một phòng có giường. Nơi này thường có quầy lễ tân và dịch vụ phòng.",
      explanation:
        "A hotel is a place where people pay to stay for a short time when they are traveling. It usually offers rooms, beds, bathrooms, and other services like meals or cleaning.",
    },
    {
      id: 2,
      question: "Where do people go to eat meals prepared by professional chefs?",
      options: ["Hotel", "Restaurant", "Store", "Hospital"],
      correctAnswer: 1,
      hint: "Nơi này có thực đơn, bàn ăn và phục vụ các món ăn được nấu bởi đầu bếp.",
      explanation:
        "A restaurant is an establishment where meals are prepared and served to customers. Restaurants vary greatly in appearance and offerings, from fast food to fine dining, and typically have menus, tables, and waitstaff to serve customers.",
    },
    {
      id: 3,
      question: "What is a sandy shore next to the ocean where people swim and sunbathe?",
      options: ["Mountain", "Beach", "River", "Lake"],
      correctAnswer: 1,
      hint: "Nơi này có cát, sóng biển và thường là điểm đến phổ biến trong kỳ nghỉ hè.",
      explanation:
        "A beach is a landform alongside a body of water, consisting of loose particles like sand, gravel, or pebbles. Beaches are popular places for recreation, relaxation, and water activities such as swimming, surfing, and sunbathing.",
    },
    {
      id: 4,
      question: "Where do travelers go to board planes for their journey?",
      options: ["Bus station", "Airport", "Train station", "Harbor"],
      correctAnswer: 1,
      hint: "Nơi này có đường băng cho máy bay cất và hạ cánh, cùng với các cổng khởi hành.",
      explanation:
        "An airport is a complex of buildings, runways, and equipment for the takeoff, landing, and maintenance of aircraft, with facilities for passengers. It serves as a hub for air transportation, allowing people to travel to different destinations by plane.",
    },
    {
      id: 5,
      question: "What document do you need to travel to another country?",
      options: ["Plane ticket", "Passport", "Money", "Luggage"],
      correctAnswer: 1,
      hint: "Đây là giấy tờ chính thức có ảnh của bạn và được kiểm tra tại biên giới quốc tế.",
      explanation:
        "A passport is an official government document that certifies the identity and nationality of its holder for the purpose of international travel. It contains the holder's name, date of birth, photograph, signature, and other identifying information, and is required for crossing international borders.",
    },
  ],

  scienceTech: [
    // Từ vựng tiếng Anh khoa học và công nghệ cơ bản
    {
      id: 1,
      question: "Which electronic device do people use to browse the internet, write documents, and play games?",
      options: ["Smartphone", "Computer", "Television", "Camera"],
      correctAnswer: 1,
      hint: "Thiết bị này thường có bàn phím, chuột và màn hình lớn.",
      explanation:
        "A computer is an electronic device that manipulates information, or data. It has the ability to store, retrieve, and process data. Modern computers can perform complex tasks like browsing the internet, creating documents, playing games, and running various software applications.",
    },
    {
      id: 2,
      question: "What is the global network that connects millions of computers worldwide?",
      options: ["Smartphone", "Internet", "Television", "Book"],
      correctAnswer: 1,
      hint: "Bạn sử dụng cái này để truy cập websites, gửi email và xem video trực tuyến.",
      explanation:
        "The Internet is a global network of billions of computers and other electronic devices. With the Internet, it's possible to access almost any information, communicate with anyone else in the world, and do much more. It connects people through websites, email, social media, online gaming, and other services.",
    },
    {
      id: 3,
      question: "What do we call a mobile phone with advanced features like internet access and apps?",
      options: ["Computer", "Smartphone", "Camera", "Television"],
      correctAnswer: 1,
      hint: "Thiết bị này có thể gọi điện, nhắn tin, chụp ảnh và cài đặt nhiều ứng dụng khác nhau.",
      explanation:
        "A smartphone is a mobile phone that performs many of the functions of a computer, typically having a touchscreen interface, internet access, and an operating system capable of running downloaded applications. Smartphones allow users to make calls, send messages, take photos, browse the internet, use social media, and much more.",
    },
    {
      id: 4,
      question: "What is a software program designed to run on smartphones and tablets called?",
      options: ["Computer", "App", "Internet", "Screen"],
      correctAnswer: 1,
      hint: "Bạn tải cái này từ App Store hoặc Google Play để sử dụng trên điện thoại.",
      explanation:
        "An app (short for application) is a software program designed to run on smartphones, tablets, and other mobile devices. Apps can be downloaded from app stores like Apple's App Store or Google Play. They perform specific tasks such as providing news, games, banking services, social networking, or navigation.",
    },
    {
      id: 5,
      question: "What are platforms like Facebook, Instagram, and Twitter collectively known as?",
      options: ["Newspapers", "Social media", "Television", "Books"],
      correctAnswer: 1,
      hint: "Đây là nơi mọi người chia sẻ ảnh, video và kết nối với bạn bè trực tuyến.",
      explanation:
        "Social media refers to websites and applications that enable users to create and share content or to participate in social networking. Platforms like Facebook, Instagram, Twitter, and LinkedIn allow people to connect with friends and family, share photos and videos, express opinions, and stay updated on news and events around the world.",
    },
  ],

  education: [
    // Từ vựng tiếng Anh giáo dục cơ bản
    {
      id: 1,
      question: "Who stands in front of the class and explains lessons to students?",
      options: ["Student", "Teacher", "Principal", "Parent"],
      correctAnswer: 1,
      hint: "Người này có bằng cấp chuyên môn và dạy các môn học cho học sinh.",
      explanation:
        "A teacher is a person who helps students to acquire knowledge, competence, or virtue. Teachers guide students through the learning process, explain concepts, answer questions, and evaluate student progress. They play a crucial role in education by sharing their knowledge and helping students develop skills for their future.",
    },
    {
      id: 2,
      question: "Who attends school to learn from teachers?",
      options: ["Teacher", "Student", "Principal", "Parent"],
      correctAnswer: 1,
      hint: "Người này ngồi trong lớp, làm bài tập và tham gia các hoạt động học tập.",
      explanation:
        "A student is a person who is studying at a school, college, university, or other educational institution. Students attend classes, complete assignments, take tests, and engage in various learning activities to gain knowledge and skills. They are the primary recipients of educational services.",
    },
    {
      id: 3,
      question: "Where do students and teachers gather for lessons in a school?",
      options: ["Cafeteria", "Classroom", "Library", "Playground"],
      correctAnswer: 1,
      hint: "Nơi này có bàn ghế cho học sinh và bảng để giáo viên viết bài.",
      explanation:
        "A classroom is a room in a school or educational institution where classes are held. It typically contains desks or tables for students, a board for the teacher to write on, and various educational materials. Classrooms provide a dedicated space for teaching and learning activities.",
    },
    {
      id: 4,
      question: "What assignments do students complete after school hours?",
      options: [
        "Textbook",
        "Homework",
        "Exam",
        "Schedule",
      ],
      correctAnswer: 1,
      hint: "Học sinh làm việc này ở nhà sau giờ học để ôn tập và thực hành.",
      explanation:
        "Homework refers to tasks assigned to students by their teachers to be completed outside of class time, typically at home. These assignments help reinforce what was learned in class, develop independent learning skills, and prepare students for upcoming lessons. Homework can include reading, writing, problem-solving, or project work.",
    },
    {
      id: 5,
      question: "What do students take to demonstrate their knowledge of a subject?",
      options: [
        "Textbook",
        "Test",
        "Schedule",
        "Homework",
      ],
      correctAnswer: 1,
      hint: "Học sinh làm cái này để giáo viên đánh giá kiến thức và kỹ năng của họ.",
      explanation:
        "A test is an assessment intended to measure a student's knowledge, skill, aptitude, or understanding of a subject. Tests can take various forms, including multiple-choice questions, essays, or practical demonstrations. They help teachers evaluate student learning, identify areas for improvement, and determine grades.",
    },
  ],

  legalEnglish: [
    // Từ vựng tiếng Anh pháp lý cơ bản
    {
      id: 1,
      question: "Who represents clients in legal matters and provides legal advice?",
      options: ["Lawyer", "Judge", "Prosecutor", "Jury"],
      correctAnswer: 0,
      hint: "Người này có bằng luật, đại diện cho khách hàng trong các vụ kiện và đàm phán pháp lý.",
      explanation:
        "A lawyer is a professional who is trained and licensed to practice law. Lawyers provide legal advice to clients, represent them in legal negotiations and court proceedings, prepare legal documents, and interpret laws and regulations. They may specialize in different areas of law such as criminal law, corporate law, family law, or intellectual property law.",
    },
    {
      id: 2,
      question: "Who presides over court proceedings and makes rulings on legal matters?",
      options: ["Lawyer", "Judge", "Prosecutor", "Jury"],
      correctAnswer: 1,
      hint: "Người này mặc áo choàng đen, ngồi trên bục cao trong phòng xử án và đưa ra phán quyết.",
      explanation:
        "A judge is a public official appointed or elected to preside over court proceedings. Judges maintain order in the courtroom, determine whether evidence is admissible, instruct juries on the law, and in some cases, decide the outcome of cases. They ensure that trials are conducted fairly and according to established legal procedures.",
    },
    {
      id: 3,
      question: "Where are legal disputes resolved through formal proceedings?",
      options: ["Prison", "Court", "Law office", "Police station"],
      correctAnswer: 1,
      hint: "Nơi này có phòng xử án, nơi diễn ra các phiên tòa với thẩm phán, luật sư và các bên liên quan.",
      explanation:
        "A court is a governmental institution where legal disputes are resolved through formal proceedings. Courts interpret and apply the law, adjudicate legal disputes, and evaluate evidence presented by opposing parties. Different types of courts handle different kinds of cases, such as criminal courts, civil courts, family courts, and appellate courts.",
    },
    {
      id: 4,
      question: "What material is presented in court to prove or disprove facts in a case?",
      options: ["Evidence", "Testimony", "Verdict", "Sentence"],
      correctAnswer: 0,
      hint: "Đây có thể là tài liệu, lời khai, video, vật dụng hoặc thông tin khác được sử dụng để chứng minh sự thật.",
      explanation:
        "Evidence refers to information, documents, testimony, or physical objects that are presented in court to prove or disprove facts in a legal case. Evidence can include witness testimony, documents, photographs, video recordings, fingerprints, DNA samples, and other materials that help establish the truth of a matter. The admissibility of evidence is governed by rules that vary by jurisdiction.",
    },
    {
      id: 5,
      question: "What is the formal decision made by a jury or judge at the end of a trial?",
      options: ["Evidence", "Testimony", "Verdict", "Sentence"],
      correctAnswer: 2,
      hint: "Đây là quyết định cuối cùng về việc bị cáo có tội hay vô tội sau khi xem xét tất cả bằng chứng.",
      explanation:
        "A verdict is the formal decision or finding made by a jury or judge at the conclusion of a trial. In criminal cases, the verdict determines whether the defendant is guilty or not guilty of the charges. In civil cases, the verdict decides whether the defendant is liable or not liable. The verdict is reached after all evidence has been presented and deliberated upon.",
    },
  ],
};

export default pathQuestions;
