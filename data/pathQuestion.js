const pathQuestions = {
  medicalEnglish: [
    {
      id: 1,
      question: "What does 'tachycardia' refer to in medical terminology?",
      options: [
        "Slow heart rate",
        "Fast heart rate",
        "Irregular breathing",
        "Low blood pressure"
      ],
      correctAnswer: 1,
      hint: "The prefix 'tachy-' relates to speed.",
      explanation: "'Tachycardia' comes from the Greek words 'tachys' (fast) and 'kardia' (heart). It refers to a heart rate that exceeds the normal resting rate, typically over 100 beats per minute in adults."
    },
    {
      id: 2,
      question: "Which of the following is NOT a common symptom of appendicitis?",
      options: [
        "Pain around the navel",
        "Fever",
        "Rash on extremities",
        "Nausea and vomiting"
      ],
      correctAnswer: 2,
      hint: "Think about the typical presentation of appendicitis in emergency rooms.",
      explanation: "Appendicitis typically presents with pain that starts around the navel and shifts to the lower right abdomen, along with fever, nausea, and vomiting. A rash on extremities is not a common symptom of appendicitis but may indicate other conditions like meningitis or certain allergic reactions."
    },
    {
      id: 3,
      question: "What does the abbreviation 'NPO' stand for in hospital instructions?",
      options: [
        "Normal Pressure Observed",
        "Nothing Per Oral",
        "Nurse Practitioner Order",
        "Next Procedure Option"
      ],
      correctAnswer: 1,
      hint: "This is commonly used before surgical procedures.",
      explanation: "'NPO' stands for 'Nothing Per Oral' (or 'Nil Per Os' in Latin), which means the patient should not eat or drink anything. This instruction is often given before surgery or certain medical procedures to ensure the stomach is empty."
    },
    {
      id: 4,
      question: "Which of the following is the correct term for the surgical removal of the gallbladder?",
      options: [
        "Appendectomy",
        "Cholecystectomy",
        "Nephrectomy",
        "Hysterectomy"
      ],
      correctAnswer: 1,
      hint: "'Chole' refers to bile, and 'cyst' refers to a bladder or sac.",
      explanation: "'Cholecystectomy' is the surgical removal of the gallbladder. 'Appendectomy' is removal of the appendix, 'Nephrectomy' is removal of a kidney, and 'Hysterectomy' is removal of the uterus."
    },
    {
      id: 5,
      question: "What is the primary function of an ECG (Electrocardiogram)?",
      options: [
        "To measure brain activity",
        "To record electrical activity of the heart",
        "To monitor blood oxygen levels",
        "To assess lung function"
      ],
      correctAnswer: 1,
      hint: "Think about what the 'cardio' part of the word suggests.",
      explanation: "An ECG (Electrocardiogram) records the electrical activity of the heart over a period of time. It's used to detect cardiac abnormalities like arrhythmias and evidence of heart attacks. Brain activity is measured by an EEG (Electroencephalogram), blood oxygen by pulse oximetry, and lung function by spirometry."
    }
  ],
  
  businessEnglish: [
    {
      id: 1,
      question: "In a business context, what does ROI stand for?",
      options: [
        "Range Of Interest",
        "Return On Investment",
        "Risk Of Inflation",
        "Record Of Inventory"
      ],
      correctAnswer: 1,
      hint: "This term is commonly used when evaluating the profitability of an investment.",
      explanation: "ROI stands for 'Return On Investment'. It's a performance measure used to evaluate the efficiency or profitability of an investment, calculated by dividing the benefit (return) of an investment by its cost."
    },
    {
      id: 2,
      question: "Which of the following is NOT typically included in a SWOT analysis?",
      options: [
        "Strengths",
        "Weaknesses",
        "Timelines",
        "Opportunities"
      ],
      correctAnswer: 2,
      hint: "SWOT is an acronym for four specific elements of business analysis.",
      explanation: "A SWOT analysis examines Strengths, Weaknesses, Opportunities, and Threats. Timelines would not be part of a SWOT analysis but might be included in project management tools like Gantt charts or critical path methods."
    },
    {
      id: 3,
      question: "What is the main purpose of a 'cold call' in business?",
      options: [
        "To resolve customer complaints",
        "To solicit business from potential customers who have not previously expressed interest",
        "To follow up with existing clients",
        "To conduct market research at low temperatures"
      ],
      correctAnswer: 1,
      hint: "Think about the metaphorical temperature of the lead.",
      explanation: "A 'cold call' is an unsolicited call or visit to a potential customer who has not previously expressed interest in the product or service being offered. It's a direct sales technique used to generate new business leads."
    },
    {
      id: 4,
      question: "In business email etiquette, what does 'CC' stand for?",
      options: [
        "Carbon Copy",
        "Company Communication",
        "Courtesy Call",
        "Client Confirmation"
      ],
      correctAnswer: 0,
      hint: "This term originated from the days of typewriters and carbon paper.",
      explanation: "CC stands for 'Carbon Copy'. In emails, it's used to send a copy of an email to recipients other than the primary recipient(s). The term comes from carbon paper used to make copies of documents before photocopiers and computers."
    },
    {
      id: 5,
      question: "What is a 'unicorn' in business terminology?",
      options: [
        "A company with a perfect credit score",
        "A startup valued at over $1 billion",
        "A product that sells in all global markets",
        "A CEO who has founded multiple successful companies"
      ],
      correctAnswer: 1,
      hint: "This term refers to something rare and valuable in the startup ecosystem.",
      explanation: "In business terminology, a 'unicorn' is a privately held startup company valued at over $1 billion. The term was coined because such successful startups were once considered as rare as the mythical creature."
    }
  ],
  
  tourismHospitality: [
    {
      id: 1,
      question: "What does 'all-inclusive' typically mean in resort terminology?",
      options: [
        "The resort welcomes guests of all nationalities",
        "The resort price includes accommodation, meals, and most activities",
        "The resort has facilities for people with all types of disabilities",
        "The resort is open all year round"
      ],
      correctAnswer: 1,
      hint: "Think about what's included in the price of your stay.",
      explanation: "An 'all-inclusive' resort package typically includes accommodation, meals, beverages (often including alcohol), and various activities in one price. This pricing model allows guests to pay one upfront fee for most or all services rather than paying separately for each."
    },
    {
      id: 2,
      question: "What is the term for the person who supervises the dining room in a restaurant?",
      options: [
        "Concierge",
        "Sommelier",
        "Maître d'",
        "Executive Chef"
      ],
      correctAnswer: 2,
      hint: "This French term is short for 'maître d'hôtel'.",
      explanation: "A 'Maître d'' (short for Maître d'hôtel) is the person who supervises the dining room in a restaurant. They manage reservations, greet guests, and oversee the service staff. A concierge assists hotel guests with various services, a sommelier specializes in wines, and an executive chef runs the kitchen."
    },
    {
      id: 3,
      question: "What does 'B&B' stand for in accommodation terminology?",
      options: [
        "Bed and Breakfast",
        "Board and Bathing",
        "Business and Budget",
        "Booking and Billing"
      ],
      correctAnswer: 0,
      hint: "This type of accommodation typically offers a place to sleep and a morning meal.",
      explanation: "B&B stands for 'Bed and Breakfast'. It's a small lodging establishment that offers overnight accommodation and breakfast, but usually doesn't offer other meals. B&Bs are often private homes with fewer than 10 bedrooms available for commercial use."
    },
    {
      id: 4,
      question: "What is 'ecotourism'?",
      options: [
        "Tourism focused on visiting economic centers",
        "Budget travel options for economically disadvantaged tourists",
        "Responsible travel to natural areas that conserves the environment and improves local welfare",
        "Tourism that uses only electronic payment methods"
      ],
      correctAnswer: 2,
      hint: "The 'eco' prefix relates to ecology and the environment.",
      explanation: "Ecotourism is responsible travel to natural areas that conserves the environment, sustains the well-being of local people, and involves interpretation and education. It's aimed at minimizing impact on the environment while providing positive experiences for visitors and hosts."
    },
    {
      id: 5,
      question: "What does 'half-board' mean in hotel accommodation?",
      options: [
        "Only half of the hotel facilities are available",
        "The room is shared with another guest",
        "Breakfast and one other meal (usually dinner) are included",
        "The hotel is under partial renovation"
      ],
      correctAnswer: 2,
      hint: "This term refers to which meals are included in your stay.",
      explanation: "'Half-board' (also known as 'demi-pension') is a type of hotel rate that includes accommodation, breakfast, and one other meal, usually dinner. It differs from 'full-board' (all meals included) and 'bed and breakfast' (only breakfast included)."
    }
  ],
  
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
      explanation: "AI stands for 'Artificial Intelligence'. It refers to the simulation of human intelligence in machines that are programmed to think and learn like humans. AI encompasses various technologies including machine learning, natural language processing, and computer vision."
    },
    {
      id: 2,
      question: "What is the main function of DNS in internet technology?",
      options: [
        "To protect websites from cyber attacks",
        "To translate domain names to IP addresses",
        "To encrypt data transmitted over the internet",
        "To compress digital files for faster transmission"
      ],
      correctAnswer: 1,
      hint: "Think about how computers locate websites on the internet.",
      explanation: "DNS (Domain Name System) translates human-readable domain names (like www.example.com) into machine-readable IP addresses (like 192.0.2.1). This allows users to access websites using easy-to-remember names instead of numerical IP addresses."
    },
    {
      id: 3,
      question: "In chemistry, what does 'pH' measure?",
      options: [
        "Potential Hydrogen",
        "Power of Hydrogen",
        "Percentage of Hydrogen",
        "Pressure of Hydrogen"
      ],
      correctAnswer: 0,
      hint: "This scale measures how acidic or basic a solution is.",
      explanation: "pH stands for 'Potential of Hydrogen' and measures the acidity or alkalinity of a solution on a scale of 0 to 14. A pH of 7 is neutral, below 7 is acidic, and above 7 is alkaline (basic). The scale is logarithmic, meaning each step represents a tenfold change."
    },
    {
      id: 4,
      question: "What is 'quantum computing'?",
      options: [
        "Computing using very small, miniaturized components",
        "Computing that uses quantum mechanical phenomena such as superposition and entanglement",
        "Computing that processes data in discrete quantities rather than continuously",
        "Computing that focuses on quality over quantity of calculations"
      ],
      correctAnswer: 1,
      hint: "This type of computing leverages principles from quantum physics.",
      explanation: "Quantum computing uses quantum mechanical phenomena like superposition and entanglement to perform operations on data. Unlike classical computers that use bits (0 or 1), quantum computers use quantum bits or 'qubits' that can exist in multiple states simultaneously, potentially solving certain problems much faster."
    },
    {
      id: 5,
      question: "What is 'CRISPR' used for in science?",
      options: [
        "Measuring cosmic radiation",
        "Analyzing crystal structures",
        "Gene editing",
        "Climate prediction modeling"
      ],
      correctAnswer: 2,
      hint: "This technology has revolutionary applications in genetics and medicine.",
      explanation: "CRISPR (Clustered Regularly Interspaced Short Palindromic Repeats) is a revolutionary gene-editing technology that allows scientists to modify DNA sequences and alter gene function. It has potential applications in treating genetic diseases, agriculture, and biological research."
    }
  ],
  
  education: [
    {
      id: 1,
      question: "What teaching approach emphasizes student-centered learning and active participation?",
      options: [
        "Lecture-based instruction",
        "Constructivist approach",
        "Rote memorization",
        "Standardized testing"
      ],
      correctAnswer: 1,
      hint: "This approach views learning as an active process of creating meaning from experiences.",
      explanation: "The constructivist approach emphasizes student-centered learning where students actively participate in the learning process. It's based on the idea that learners construct knowledge through experiences and reflection, rather than passively receiving information from the teacher."
    },
    {
      id: 2,
      question: "What does 'ESL' stand for in education?",
      options: [
        "European Standard Learning",
        "English as a Second Language",
        "Enhanced Student Learning",
        "Educational Standards Laboratory"
      ],
      correctAnswer: 1,
      hint: "This term refers to teaching English to non-native speakers.",
      explanation: "ESL stands for 'English as a Second Language'. It refers to the teaching of English to students whose first language is not English, typically in an English-speaking country. Similar terms include EFL (English as a Foreign Language) and TESOL (Teaching English to Speakers of Other Languages)."
    },
    {
      id: 3,
      question: "What is 'formative assessment' in education?",
      options: [
        "Final exams that determine a student's grade",
        "Standardized tests used for college admissions",
        "Ongoing evaluation used to monitor student learning and provide feedback",
        "Assessment of a teacher's performance by school administrators"
      ],
      correctAnswer: 2,
      hint: "This type of assessment happens during the learning process, not just at the end.",
      explanation: "Formative assessment is ongoing evaluation used to monitor student learning and provide feedback during the instructional process. Unlike summative assessment (which evaluates learning at the end of a unit), formative assessment helps teachers identify areas where students are struggling so they can adjust their teaching accordingly."
    },
    {
      id: 4,
      question: "What is 'differentiated instruction' in teaching?",
      options: [
        "Teaching different subjects in different classrooms",
        "Separating students based on ability levels",
        "Tailoring teaching approaches to meet individual student needs",
        "Using different textbooks for different grades"
      ],
      correctAnswer: 2,
      hint: "This approach recognizes that students have different learning styles and abilities.",
      explanation: "Differentiated instruction is an approach where teachers tailor their teaching methods to meet the diverse needs of individual students. It recognizes that students differ in readiness, interests, and learning profiles, and adjusts content, process, products, or the learning environment accordingly."
    },
    {
      id: 5,
      question: "What does 'IEP' stand for in special education?",
      options: [
        "International Education Program",
        "Intensive English Practice",
        "Individualized Education Program",
        "Integrated Evaluation Process"
      ],
      correctAnswer: 2,
      hint: "This document outlines specialized educational services for students with disabilities.",
      explanation: "IEP stands for 'Individualized Education Program'. It's a written document developed for each public school child who is eligible for special education. The IEP outlines the special educational services the student will receive, including specific learning goals and how progress will be measured."
    }
  ],
  
  legalEnglish: [
    {
      id: 1,
      question: "What does 'pro bono' mean in legal practice?",
      options: [
        "For the public good, without charge",
        "Professional bonding between lawyer and client",
        "Provisional bond until trial",
        "Probationary period for new lawyers"
      ],
      correctAnswer: 0,
      hint: "This Latin term describes work done without compensation for the public good.",
      explanation: "'Pro bono' comes from the Latin phrase 'pro bono publico' meaning 'for the public good'. In legal practice, it refers to services provided by lawyers without charge, especially for the public good or for clients with limited means."
    },
    {
      id: 2,
      question: "What is a 'tort' in legal terminology?",
      options: [
        "A legal document filed with the court",
        "A civil wrong that causes someone to suffer loss or harm",
        "A type of criminal offense involving theft",
        "A contract between two parties"
      ],
      correctAnswer: 1,
      hint: "This term relates to civil (not criminal) wrongs that can lead to lawsuits.",
      explanation: "A tort is a civil wrong that causes someone to suffer loss or harm, resulting in legal liability for the person who commits the act. Unlike criminal cases (brought by the government), tort cases are brought by individuals or entities seeking compensation for harm caused by the wrongdoer."
    },
    {
      id: 3,
      question: "What does 'habeas corpus' literally mean?",
      options: [
        "You have the body",
        "Hear the evidence",
        "Hold the case",
        "Honor the court"
      ],
      correctAnswer: 0,
      hint: "This Latin term relates to bringing a detained person before a court.",
      explanation: "'Habeas corpus' literally means 'you have the body' in Latin. It refers to a legal writ that requires a person under arrest to be brought before a judge or court to determine if there is sufficient cause for their detention. It's a fundamental protection against unlawful imprisonment."
    },
    {
      id: 4,
      question: "What is 'jurisprudence'?",
      options: [
        "The process of selecting jurors for a trial",
        "The oath taken by witnesses in court",
        "The philosophy or theory of law",
        "The jurisdiction of a specific court"
      ],
      correctAnswer: 2,
      hint: "This term refers to the theoretical study of law and legal principles.",
      explanation: "Jurisprudence is the philosophy or theory of law - the theoretical study of law, its nature, principles, and the legal systems in which it operates. It examines questions like 'What is law?', 'What should law be?', and 'How do legal systems work?'"
    },
    {
      id: 5,
      question: "What is a 'deposition' in legal proceedings?",
      options: [
        "The final judgment in a case",
        "Out-of-court testimony given under oath",
        "The dismissal of charges against a defendant",
        "A financial penalty imposed by the court"
      ],
      correctAnswer: 1,
      hint: "This process happens during the discovery phase before a trial.",
      explanation: "A deposition is out-of-court testimony given under oath by a witness in response to questions from attorneys. It's part of the pre-trial discovery process and allows both sides to learn what the witness knows and preserve their testimony. Depositions can be used to impeach witnesses if they change their testimony at trial."
    }
  ]
};

export default pathQuestions;