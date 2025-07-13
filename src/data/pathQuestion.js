const pathQuestions = {
  // Medical English Questions
  medicalEnglish: [
    {
      id: 1,
      question: "What does 'NPO' stand for in a medical context?",
      options: [
        "No Physician Orders",
        "Nothing Per Oral",
        "Negative Patient Outcome",
        "Normal Physical Operation"
      ],
      correctAnswer: 1,
      hint: "This is a common abbreviation used when patients shouldn't eat or drink before procedures.",
      explanation: "'NPO' stands for 'Nothing Per Oral' (or 'Nil Per Os' in Latin), meaning the patient should not eat or drink anything by mouth, typically before a medical procedure or surgery."
    },
    {
      id: 2,
      question: "Which of the following is NOT a common vital sign?",
      options: [
        "Blood pressure",
        "Respiratory rate",
        "Body temperature",
        "Liver function"
      ],
      correctAnswer: 3,
      hint: "Vital signs are measurements of the body's most basic functions.",
      explanation: "Liver function is not a vital sign. The five main vital signs are blood pressure, pulse (heart rate), respiratory rate, temperature, and oxygen saturation. Liver function is assessed through specific blood tests."
    },
    {
      id: 3,
      question: "What does 'acute' mean in medical terminology?",
      options: [
        "Mild or minor",
        "Sudden and severe",
        "Long-lasting",
        "Recurring periodically"
      ],
      correctAnswer: 1,
      hint: "Think about the timeframe and intensity of symptoms.",
      explanation: "In medical terminology, 'acute' refers to conditions that have a rapid onset and are often severe but typically short in duration, as opposed to 'chronic' conditions which develop slowly and persist over time."
    },
    {
      id: 4,
      question: "Which term describes the process of listening to internal body sounds using a stethoscope?",
      options: [
        "Palpation",
        "Percussion",
        "Auscultation",
        "Inspection"
      ],
      correctAnswer: 2,
      hint: "This is one of the four main physical examination techniques.",
      explanation: "Auscultation is the process of listening to internal body sounds using a stethoscope. It's commonly used to listen to heart, lung, and bowel sounds as part of a physical examination."
    },
    {
      id: 5,
      question: "What does 'prognosis' refer to in healthcare?",
      options: [
        "The identification of a disease",
        "The prediction of disease outcome",
        "The treatment plan",
        "The patient's medical history"
      ],
      correctAnswer: 1,
      hint: "This term relates to predicting the future course of a condition.",
      explanation: "Prognosis refers to the predicted or likely outcome of a disease or the prospect of recovery. It's a healthcare provider's assessment of how a patient's disease or condition will likely progress and their chances of recovery."
    }
  ],

  // Business English Questions
  businessEnglish: [
    {
      id: 1,
      question: "What does ROI stand for in business?",
      options: [
        "Range Of Investment",
        "Return On Investment",
        "Rate Of Increase",
        "Review Of Income"
      ],
      correctAnswer: 1,
      hint: "This is a measure of profitability relative to investment costs.",
      explanation: "ROI stands for 'Return On Investment.' It's a performance measure used to evaluate the efficiency or profitability of an investment, calculated by dividing the benefit (return) by the cost of the investment."
    },
    {
      id: 2,
      question: "Which of these is NOT typically included in a SWOT analysis?",
      options: [
        "Strengths",
        "Weaknesses",
        "Targets",
        "Opportunities"
      ],
      correctAnswer: 2,
      hint: "SWOT is an acronym for four specific elements of business analysis.",
      explanation: "'Targets' is not part of a SWOT analysis. SWOT stands for Strengths, Weaknesses, Opportunities, and Threats. It's a strategic planning technique used to identify these four elements related to business competition or project planning."
    },
    {
      id: 3,
      question: "What is the main purpose of a business pitch?",
      options: [
        "To analyze competitors",
        "To present a business idea to potential investors",
        "To train new employees",
        "To document business processes"
      ],
      correctAnswer: 1,
      hint: "Think about who the audience would be and what outcome you're seeking.",
      explanation: "The main purpose of a business pitch is to present a business idea or opportunity to potential investors, partners, or customers in a compelling way to secure funding, partnership, or sales."
    },
    {
      id: 4,
      question: "In business communication, what does 'B2B' stand for?",
      options: [
        "Back to Business",
        "Business to Business",
        "Business to Buyer",
        "Budget to Budget"
      ],
      correctAnswer: 1,
      hint: "This describes transactions between two companies rather than between a company and consumers.",
      explanation: "B2B stands for 'Business to Business.' It refers to business transactions, relationships, or communications that occur between businesses rather than between a business and individual consumers (which would be B2C, or Business to Consumer)."
    },
    {
      id: 5,
      question: "What is a 'stakeholder' in business terminology?",
      options: [
        "Only the company's shareholders",
        "Anyone with a financial investment in the company",
        "Any person or group affected by or who can affect a business",
        "The founding members of a company"
      ],
      correctAnswer: 2,
      hint: "This term encompasses a broader group than just investors.",
      explanation: "A stakeholder is any person, group, or organization that has an interest in or is affected by the actions, objectives, and policies of a business. This includes employees, customers, suppliers, communities, investors, and even competitors."
    }
  ],

  // Tourism & Hospitality Questions
  tourismHospitality: [
    {
      id: 1,
      question: "What does 'all-inclusive' mean in the context of a resort?",
      options: [
        "The resort welcomes guests of all backgrounds",
        "The resort fee includes accommodation, meals, and most activities",
        "The resort is accessible to people with disabilities",
        "The resort is open all year round"
      ],
      correctAnswer: 1,
      hint: "This term relates to what's covered in the price of your stay.",
      explanation: "An 'all-inclusive' resort is one where the price includes accommodation, meals, beverages (often including alcohol), and various activities and entertainment. This pricing model allows guests to pay one upfront fee for most of their vacation expenses."
    },
    {
      id: 2,
      question: "What is the primary purpose of a concierge in a hotel?",
      options: [
        "To clean guest rooms",
        "To prepare food in the restaurant",
        "To assist guests with information and services",
        "To manage hotel finances"
      ],
      correctAnswer: 2,
      hint: "This hotel staff member helps enhance the guest experience.",
      explanation: "A concierge's primary purpose is to assist hotel guests with various services such as making restaurant reservations, arranging transportation, providing information about local attractions, and fulfilling special requests to enhance the guest's stay."
    },
    {
      id: 3,
      question: "What does 'ecotourism' focus on?",
      options: [
        "Luxury travel experiences",
        "Budget-friendly travel options",
        "Responsible travel to natural areas that conserves the environment",
        "Virtual tourism experiences"
      ],
      correctAnswer: 2,
      hint: "This type of tourism is concerned with environmental impact.",
      explanation: "Ecotourism focuses on responsible travel to natural areas that conserves the environment, sustains the well-being of local people, and involves education. It aims to minimize the negative impacts of tourism on the environment and enhance the cultural integrity of local people."
    },
    {
      id: 4,
      question: "What is a 'red-eye flight'?",
      options: [
        "A flight that's been canceled",
        "A flight that departs late at night and arrives early in the morning",
        "An emergency flight for medical purposes",
        "A flight that makes multiple stops"
      ],
      correctAnswer: 1,
      hint: "The name refers to the physical effect on passengers.",
      explanation: "A 'red-eye flight' is one that departs late at night and arrives early the next morning. The term comes from the red eyes passengers may have from lack of sleep during an overnight flight."
    },
    {
      id: 5,
      question: "What does 'B&B' stand for in the hospitality industry?",
      options: [
        "Bed and Breakfast",
        "Board and Beverages",
        "Business and Budget",
        "Booking and Billing"
      ],
      correctAnswer: 0,
      hint: "This accommodation type typically offers a more personal experience than hotels.",
      explanation: "B&B stands for 'Bed and Breakfast.' It's a small lodging establishment that offers overnight accommodation and breakfast, but usually doesn't provide other meals. B&Bs are often private homes with fewer rooms than hotels and a more personal atmosphere."
    }
  ],

  // Science & Tech Questions
  scienceTech: [
    {
      id: 1,
      question: "What does 'AI' stand for in technology?",
      options: [
        "Automated Interface",
        "Artificial Intelligence",
        "Advanced Integration",
        "Alternate Input"
      ],
      correctAnswer: 1,
      hint: "This technology aims to simulate human intelligence in machines.",
      explanation: "AI stands for 'Artificial Intelligence.' It refers to the simulation of human intelligence in machines that are programmed to think and learn like humans, performing tasks that typically require human intelligence such as visual perception, speech recognition, and decision-making."
    },
    {
      id: 2,
      question: "What is the main function of an API in software development?",
      options: [
        "To create user interfaces",
        "To allow different software applications to communicate with each other",
        "To protect software from viruses",
        "To compress data files"
      ],
      correctAnswer: 1,
      hint: "Think about how different software systems interact.",
      explanation: "API stands for 'Application Programming Interface.' Its main function is to allow different software applications to communicate and interact with each other. APIs define the methods and data formats that applications can use to request and exchange information."
    },
    {
      id: 3,
      question: "In scientific research, what is a 'control group'?",
      options: [
        "The group of scientists conducting the experiment",
        "The group of subjects not receiving the experimental treatment",
        "The equipment used to control the experiment",
        "The group that controls funding for the research"
      ],
      correctAnswer: 1,
      hint: "This is a fundamental concept in experimental design.",
      explanation: "A control group in scientific research is the group of subjects that does not receive the experimental treatment or intervention. It serves as a baseline for comparison to assess the effect of the treatment on the experimental group."
    },
    {
      id: 4,
      question: "What does 'IoT' stand for in technology?",
      options: [
        "Internet of Things",
        "Integration of Technology",
        "Input/Output Terminal",
        "International Online Transactions"
      ],
      correctAnswer: 0,
      hint: "This refers to everyday devices connected to the internet.",
      explanation: "IoT stands for 'Internet of Things.' It refers to the network of physical objects—'things'—embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet."
    },
    {
      id: 5,
      question: "What is 'machine learning' in the context of computer science?",
      options: [
        "Teaching computers how to manufacture other machines",
        "A method of data analysis that automates analytical model building",
        "The process of physically assembling computer hardware",
        "A technique for making computers run faster"
      ],
      correctAnswer: 1,
      hint: "This is a subset of artificial intelligence focused on data patterns.",
      explanation: "Machine learning is a method of data analysis and a subset of artificial intelligence that automates analytical model building. It's based on the idea that systems can learn from data, identify patterns, and make decisions with minimal human intervention."
    }
  ],

  // Education Questions
  education: [
    {
      id: 1,
      question: "What is a 'curriculum' in education?",
      options: [
        "A type of degree or qualification",
        "The planned sequence of instruction for a course or program",
        "A method of student assessment",
        "The physical campus of an educational institution"
      ],
      correctAnswer: 1,
      hint: "This term relates to what is taught in schools or courses.",
      explanation: "A curriculum is the planned sequence of instruction, or the content that teachers teach and students are expected to learn, in a given course or program. It outlines the lessons, assignments, and materials used to organize and teach a particular subject."
    },
    {
      id: 2,
      question: "What does 'ESL' stand for in education?",
      options: [
        "Early Student Learning",
        "Educational Standards Laboratory",
        "English as a Second Language",
        "Enhanced School Literacy"
      ],
      correctAnswer: 2,
      hint: "This term relates to language acquisition for non-native speakers.",
      explanation: "ESL stands for 'English as a Second Language.' It refers to the study of English by non-native speakers in an English-speaking environment. ESL programs are designed to help students learn English language skills for academic, professional, or personal purposes."
    },
    {
      id: 3,
      question: "What is 'formative assessment' in education?",
      options: [
        "Final exams that determine a student's grade",
        "Ongoing evaluation to monitor learning and provide feedback",
        "The process of forming class groups",
        "Assessment of teachers by school administrators"
      ],
      correctAnswer: 1,
      hint: "This type of assessment happens during the learning process, not just at the end.",
      explanation: "Formative assessment is a range of formal and informal assessment procedures conducted during the learning process to modify teaching and learning activities to improve student achievement. It provides feedback to both teachers and students about ongoing progress and understanding."
    },
    {
      id: 4,
      question: "What is a 'flipped classroom' model?",
      options: [
        "A classroom where desks are arranged in a circle",
        "A teaching approach where students switch classrooms throughout the day",
        "An instructional strategy where students learn content at home and practice in class",
        "A classroom designed for left-handed students"
      ],
      correctAnswer: 2,
      hint: "This model reverses the traditional learning environment.",
      explanation: "A flipped classroom is an instructional strategy and a type of blended learning that reverses the traditional learning environment. Students are introduced to learning material before class (often through online lectures or readings), while classroom time is used for deeper discussion, problem-solving, and practical application of the material."
    },
    {
      id: 5,
      question: "What does 'STEM' education focus on?",
      options: [
        "Sports, Theater, Engineering, and Mathematics",
        "Science, Technology, Engineering, and Mathematics",
        "Social Studies, Technology, English, and Music",
        "Student Teacher Education Management"
      ],
      correctAnswer: 1,
      hint: "This educational approach integrates four specific disciplines.",
      explanation: "STEM education focuses on Science, Technology, Engineering, and Mathematics. It's an interdisciplinary approach to learning where academic concepts are coupled with real-world applications, helping students connect their learning to the wider world and future careers in these fields."
    }
  ],

  // Legal English Questions
  legalEnglish: [
    {
      id: 1,
      question: "What does 'plaintiff' mean in legal terminology?",
      options: [
        "A person who brings a case against another in a court of law",
        "A lawyer representing a client in court",
        "A witness in a legal case",
        "A judge who presides over a court case"
      ],
      correctAnswer: 0,
      hint: "This is one of the parties in a lawsuit.",
      explanation: "A plaintiff is the person or entity that initiates a lawsuit by filing a complaint with the court against a defendant, claiming that the defendant has caused harm or failed to fulfill a legal obligation."
    },
    {
      id: 2,
      question: "What is a 'deposition' in legal proceedings?",
      options: [
        "The final decision in a court case",
        "A formal written statement",
        "Out-of-court testimony given under oath",
        "The process of selecting a jury"
      ],
      correctAnswer: 2,
      hint: "This happens during the discovery phase of litigation.",
      explanation: "A deposition is an out-of-court testimony given under oath by a witness or party involved in a legal case. It's part of the pre-trial discovery process where witnesses are questioned by attorneys, and their responses are recorded for potential use in court proceedings."
    },
    {
      id: 3,
      question: "What does 'pro bono' mean in legal practice?",
      options: [
        "For the public good, without charge",
        "In favor of the defendant",
        "With professional expertise",
        "According to legal precedent"
      ],
      correctAnswer: 0,
      hint: "This Latin term relates to services provided without fee.",
      explanation: "'Pro bono' comes from the Latin phrase 'pro bono publico,' meaning 'for the public good.' In legal practice, it refers to services provided by lawyers without charge, typically for clients with limited means or for causes that serve the public interest."
    },
    {
      id: 4,
      question: "What is a 'tort' in law?",
      options: [
        "A legal document",
        "A type of court",
        "A civil wrong that causes harm",
        "A criminal offense"
      ],
      correctAnswer: 2,
      hint: "This relates to civil liability rather than criminal charges.",
      explanation: "A tort is a civil wrong that causes someone to suffer loss or harm, resulting in legal liability for the person who commits the act. Unlike criminal cases, tort cases are filed by the injured party (plaintiff) seeking compensation rather than by the government seeking punishment."
    },
    {
      id: 5,
      question: "What does 'habeas corpus' refer to?",
      options: [
        "The right to a fair trial",
        "A legal writ requiring a person to be brought before a judge",
        "The burden of proof in criminal cases",
        "The process of appealing a court decision"
      ],
      correctAnswer: 1,
      hint: "This ancient legal principle protects against unlawful detention.",
      explanation: "'Habeas corpus' (Latin for 'you shall have the body') is a legal writ or order that requires a person under arrest to be brought before a judge or court to determine if their detention is lawful. It's a fundamental protection against arbitrary state action and unlawful imprisonment."
    }
  ]
};

export default pathQuestions;