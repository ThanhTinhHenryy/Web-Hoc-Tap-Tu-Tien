// English questions about doctors and medical practice

const exerciseQuestions = [
  // Phàm Nhân
  {
    id: 1,
    question: "What is the first step in a standard patient examination?",
    answers: [
      "Prescribe medication",
      "Order laboratory tests",
      "Take patient history",
      "Perform surgery",
    ],
    correctAnswer: 2, // Index của câu trả lời đúng (0-based)
    level: "Phàm Nhân",
    attribute: "Cơ bản",
    explanation:
      "Taking a patient's medical history is the crucial first step in any examination, as it provides essential context for symptoms and guides the physical examination and diagnostic process.",
  },
  {
    id: 2,
    question:
      "Why is understanding anatomy important for new medical students?",
    answers: [
      "To impress colleagues",
      "To understand the structural and functional relationships in the human body",
      "To memorize medical terms",
      "To speed up diagnosis",
    ],
    correctAnswer: 1,
    level: "Phàm Nhân",
    attribute: "Lý thuyết",
    explanation:
      "Understanding anatomy helps medical students comprehend how different body systems interact, which is fundamental for accurate diagnosis and effective treatment planning.",
  },
  {
    id: 3,
    question:
      "Which approach is NOT appropriate for a doctor when delivering bad news to patients?",
    answers: [
      "Using clear, simple language",
      "Providing emotional support",
      "Rushing through the information to minimize discomfort",
      "Allowing time for questions",
    ],
    correctAnswer: 2,
    level: "Phàm Nhân",
    attribute: "Thực hành",
    explanation:
      "Rushing through difficult information can prevent patients from properly processing important details and may damage the doctor-patient relationship. Delivering bad news requires sensitivity, clarity, and adequate time for discussion.",
  },
  {
    id: 4,
    question:
      "What sign indicates that a medical student is ready to begin clinical rotations?",
    answers: [
      "Memorizing all medications",
      "Demonstrating proficiency in basic clinical skills and medical knowledge",
      "Being able to perform surgery",
      "Diagnosing rare conditions",
    ],
    correctAnswer: 1,
    level: "Phàm Nhân",
    attribute: "Tiến bộ",
    explanation:
      "Readiness for clinical rotations is demonstrated by proficiency in fundamental clinical skills (like taking vital signs and patient histories) and having sufficient medical knowledge to apply in clinical settings.",
  },
  {
    id: 5,
    question:
      "Why is maintaining physical health important for medical professionals?",
    answers: [
      "To look more professional",
      "To impress patients",
      "To maintain stamina for long shifts and reduce burnout",
      "To demonstrate medical knowledge",
    ],
    correctAnswer: 2,
    level: "Phàm Nhân",
    attribute: "Cơ bản",
    explanation:
      "Medical professionals often work long, demanding shifts that require physical stamina. Maintaining good physical health helps prevent burnout, improves cognitive function, and enables better patient care.",
  },

  // Luyện Khí
  {
    id: 6,
    question: "What is the primary goal of differential diagnosis?",
    answers: [
      "Creating a treatment plan without testing",
      "Identifying possible conditions that could explain a patient's symptoms",
      "Avoiding laboratory tests",
      "Prescribing multiple medications",
    ],
    correctAnswer: 1,
    level: "Luyện Khí",
    attribute: "Cơ bản",
    explanation:
      "Differential diagnosis involves systematically identifying possible conditions that could explain a patient's symptoms, which helps doctors narrow down the most likely diagnosis and plan appropriate testing.",
  },
  {
    id: 7,
    question:
      "What is the most effective method for medical students to gain clinical experience?",
    answers: [
      "Participating in supervised clinical rotations in various specialties",
      "Reading medical textbooks",
      "Watching medical dramas",
      "Discussing cases with peers only",
    ],
    correctAnswer: 0,
    level: "Luyện Khí",
    attribute: "Thực hành",
    explanation:
      "Supervised clinical rotations provide hands-on experience with real patients under the guidance of experienced physicians, allowing students to apply theoretical knowledge in practical settings across different medical specialties.",
  },
  {
    id: 8,
    question: "Why is maintaining 'clinical balance' important in medical practice?",
    answers: [
      "To maintain physical fitness",
      "To increase physical strength",
      "To balance evidence-based medicine with patient-centered care",
      "To create new medical devices",
    ],
    correctAnswer: 2,
    level: "Luyện Khí",
    attribute: "Lý thuyết",
    explanation:
      "Balancing evidence-based medicine with patient-centered care ensures that treatment decisions are scientifically sound while also considering individual patient preferences, values, and circumstances, leading to better outcomes.",
  },
  {
    id: 9,
    question: "When is a medical student considered ready to become a resident physician?",
    answers: [
      "When they can perform one surgery independently",
      "When they've diagnosed 100 patients",
      "When they've completed medical school and passed licensing examinations",
      "When they can prescribe medications",
    ],
    correctAnswer: 2,
    level: "Luyện Khí",
    attribute: "Tiến bộ",
    explanation:
      "A medical student is ready to become a resident physician when they have successfully completed medical school, passed licensing examinations, and demonstrated the knowledge and skills necessary for supervised practice in their chosen specialty.",
  },
  {
    id: 10,
    question: "What is the greatest risk for medical students during clinical training?",
    answers: [
      "Being attacked by patients",
      "Burnout and mental health issues from stress and long hours",
      "Memory loss",
      "Inability to return to normal life",
    ],
    correctAnswer: 1,
    level: "Luyện Khí",
    attribute: "Cảnh báo",
    explanation:
      "Medical students face significant risk of burnout and mental health issues due to high stress, long hours, exposure to suffering, and the pressure to perform. This can lead to depression, anxiety, and even suicidal ideation if not properly addressed.",
  },

  // Trúc Cơ
  {
    id: 11,
    question: "What is the main goal of residency training?",
    answers: [
      "Creating medical devices",
      "Building a solid foundation of specialized clinical skills and knowledge",
      "Competing with other residents",
      "Learning powerful surgical techniques only",
    ],
    correctAnswer: 1,
    level: "Trúc Cơ",
    attribute: "Cơ bản",
    explanation:
      "Residency training focuses on building a solid foundation of specialized clinical skills and knowledge in a specific medical field, allowing physicians to develop competence and eventually independence in their chosen specialty.",
  },
  {
    id: 12,
    question:
      "What does 'high-efficiency clinical reasoning' refer to in medical practice?",
    answers: [
      "Ability to lift heavy patients",
      "Ability to quickly and accurately diagnose conditions with minimal testing",
      "Increased physical strength",
      "Ability to see patients faster",
    ],
    correctAnswer: 1,
    level: "Trúc Cơ",
    attribute: "Lý thuyết",
    explanation:
      "High-efficiency clinical reasoning refers to a physician's ability to quickly and accurately diagnose conditions using pattern recognition, critical thinking, and selective testing, saving time and resources while maintaining diagnostic accuracy.",
  },
  {
    id: 13,
    question:
      "Which of the following is NOT part of residency training?",
    answers: [
      "Strengthening clinical skills",
      "Developing a systematic approach to patient care",
      "Independently running a private practice",
      "Enhancing diagnostic abilities",
    ],
    correctAnswer: 2,
    level: "Trúc Cơ",
    attribute: "Phân biệt",
    explanation:
      "Independently running a private practice is not part of residency training. Residents work under supervision in teaching hospitals or clinics, focusing on building clinical skills and knowledge before practicing independently.",
  },
  {
    id: 14,
    question:
      "What indicates that a resident physician is ready to become a specialist?",
    answers: [
      "Being able to work independently",
      "Diagnosing 1000 patients",
      "Completing residency training and passing board certification examinations",
      "Creating new medical techniques",
    ],
    correctAnswer: 2,
    level: "Trúc Cơ",
    attribute: "Tiến bộ",
    explanation:
      "A resident is ready to become a specialist when they have completed their residency program and passed board certification examinations, demonstrating they have acquired the necessary knowledge and skills for independent practice in their specialty.",
  },
  {
    id: 15,
    question:
      "Why is reflective practice particularly important during residency training?",
    answers: [
      "To increase physical strength",
      "To improve time management",
      "To develop self-awareness and improve clinical decision-making",
      "To create medical devices",
    ],
    correctAnswer: 2,
    level: "Trúc Cơ",
    attribute: "Thực hành",
    explanation:
      "Reflective practice helps residents develop self-awareness about their clinical reasoning, identify knowledge gaps, learn from mistakes, and continuously improve their decision-making skills as they handle increasingly complex cases.",
  },

  // Kim Đan
  {
    id: 16,
    question: "What is board certification in medicine?",
    answers: [
      "A type of medical license",
      "A credential indicating a physician has met specialty-specific standards",
      "A type of medical device",
      "A combat technique",
    ],
    correctAnswer: 1,
    level: "Kim Đan",
    attribute: "Cơ bản",
    explanation:
      "Board certification is a credential that indicates a physician has met specialty-specific standards beyond basic medical licensure by completing accredited training and passing rigorous examinations in their specialty area.",
  },
  {
    id: 17,
    question:
      "What does 'clinical mastery and teaching ability' refer to in specialist physicians?",
    answers: [
      "Ability to create illusions",
      "Ability to avoid patient complaints",
      "Ability to expertly practice medicine and effectively train others",
      "Ability to move medical equipment remotely",
    ],
    correctAnswer: 2,
    level: "Kim Đan",
    attribute: "Lý thuyết",
    explanation:
      "'Clinical mastery and teaching ability' refers to a specialist physician's expert clinical skills and their capacity to effectively train medical students, residents, and other healthcare professionals, passing on their knowledge and experience.",
  },
  {
    id: 18,
    question:
      "Which of the following is NOT part of becoming board certified?",
    answers: [
      "Completing accredited residency training",
      "Passing specialty board examinations",
      "Separating from hospital employment",
      "Demonstrating clinical competence",
    ],
    correctAnswer: 2,
    level: "Kim Đan",
    attribute: "Phân biệt",
    explanation:
      "Separating from hospital employment is not a requirement for board certification. Many board-certified specialists continue to work in hospitals, while others may choose private practice, academic medicine, or research.",
  },
  {
    id: 19,
    question: "What is the greatest benefit of becoming a board-certified specialist?",
    answers: [
      "Being able to work fewer hours",
      "Having recognized expertise and greater career opportunities",
      "Being able to perform experimental procedures",
      "Living longer",
    ],
    correctAnswer: 1,
    level: "Kim Đan",
    attribute: "Lợi ích",
    explanation:
      "Board certification provides recognized expertise in a specialty, leading to greater career opportunities, higher compensation, increased patient trust, and the ability to practice at top medical institutions.",
  },
  {
    id: 20,
    question: "What is the greatest challenge in becoming board certified?",
    answers: [
      "Finding enough medical textbooks",
      "Competing with other physicians",
      "Managing the rigorous preparation and examination process while maintaining clinical duties",
      "Finding a hospital with enough patients",
    ],
    correctAnswer: 2,
    level: "Kim Đan",
    attribute: "Thách thức",
    explanation:
      "The greatest challenge in becoming board certified is balancing intensive study and preparation for difficult examinations while maintaining clinical responsibilities, often requiring significant personal sacrifice and stress management.",
  },
];

export default exerciseQuestions;
