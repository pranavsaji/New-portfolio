// Easy-to-edit content configuration file
// Simply update the values below to customize your portfolio

export const personalInfo = {
  name: "Pranav Saji",
  title: "Full Stack AI Developer",
  location: "San Francisco Bay Area, CA",
  email: "pranavs.mec@gmail.com",
  github: "https://github.com/pranavsaji",
  linkedin: "https://www.linkedin.com/in/pranav-saji/",
  twitter: "https://x.com/PranavInnovates",
  bio: "Versatile AI and Full-Stack Engineering professional with 8+ years of experience delivering end-to-end, high-impact software solutions across startups, enterprises, and consulting. Expert in designing and deploying GenAI systems, architecting multi-cloud infrastructure (AWS, Azure, GCP), and leading cross-functional teams from concept to scale. Proven success building intelligent platforms for referral systems, lifestyle, real estate, healthcare, and genomics—leveraging FastAPI, React, Next.js, Python, and cloud-native services to drive efficiency, elevate user satisfaction, and deliver multimillion-dollar outcomes.",
  avatar: "/avatar.jpg", // Add your avatar image to public folder
};

export const professionalExperience = [
  {
    id: 1,
    company: "LinkedIn",
    role: "Machine Learning Consultant (Lead Engineer) – Contract",
    period: "Dec 2024 - Present",
    location: "Remote",
    description:
      "Leading secure AI and data-engineering initiatives for LinkedIn’s InfoSec organization, integrating 21+ third-party applications into Azure Databricks and Adaptive Shield.",
    achievements: [
      "Designed and implemented a secure, end-to-end Azure Databricks pipeline processing millions of records daily across 50+ environments with secrets managed via Azure Key Vault.",
      "Built advanced security checks directly in Adaptive Shield and delivered validated outputs to improve proactive threat detection and response.",
      "Led design and delivery of a LangChain-based AI agent to automate complex Jira InfoSec ticket triage for top-tier clients (Amazon, Google, Meta), achieving 90% accuracy vs a 70% target.",
      "Developed 3 custom tools with dynamic workflows, deployed on Azure with LangSmith-based observability and KMS-secured credential handling.",
    ],
    technologies: [
      "Python",
      "Azure Databricks",
      "Azure Key Vault",
      "LangChain",
      "LangSmith",
      "Adaptive Shield",
      "Jira",
      "Spark",
    ],
  },
  {
    id: 2,
    company: "Referrio",
    role: "Cofounder & CTO",
    period: "Feb 2025 - Aug 2025",
    location: "Remote",
    description:
      "Cofounded and led engineering for an AI-powered dual-sided referral platform connecting referrers and recruiters.",
    achievements: [
      "Architected and shipped a production-ready dual-platform MVP in 2 months (66% ahead of a 6-month plan) using a modern full-stack architecture.",
      "Implemented AI-driven candidate scoring and pros/cons analysis from job descriptions to streamline recruiter workflows.",
      "Integrated Stripe for automated referral payouts and built real-time notifications for both referrers and recruiters.",
      "Led a 10-member cross-functional team and established CI/CD-driven delivery practices aligned with product-led growth.",
    ],
    technologies: [
      "Next.js",
      "Node.js",
      "Python",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "GCP",
      "Nginx",
      "Cloudflare",
      "Stripe",
    ],
  },
  {
    id: 3,
    company: "BreatheIT",
    role: "CTO, Head of Engineering, Founding Engineer",
    period: "Jul 2024 - Jul 2025",
    location: "Remote",
    description:
      "Built and scaled a first-of-its-kind lifestyle wellness platform across Android, iOS, and Web, focused on holistic life improvement across 7 core disciplines.",
    achievements: [
      "Architected and launched a multi-platform lifestyle app featuring AI-guided journaling, mood tracking, goal setting, challenges, and an all-in-one organizer.",
      "Designed and implemented GenAI-powered recommendations for text, video, products, and services, contributing to a 60% increase in user satisfaction post-launch.",
      "Built 'Ask Yuva', a conversational GenAI assistant providing contextual lifestyle and wellness insights based on user data.",
      "Led and scaled a 15+ member cross-functional team on a microservices architecture with JWT-based auth and strict GDPR/HIPAA-aligned security and compliance.",
    ],
    technologies: [
      "React Native",
      "React",
      "Node.js",
      "PostgreSQL",
      "GCP",
      "GCS",
      "PM2",
      "Nginx",
      "Cloudflare",
      "Stripe",
      "JWT",
    ],
  },
  {
    id: 4,
    company: "Syndicated Bio Inc.",
    role: "AI Consultant – Contract",
    period: "Nov 2024 - Jul 2025",
    location: "Remote",
    description:
      "Delivered critical AI and data platforms for clinical research and genomic workflows across hospitals and sponsors.",
    achievements: [
      "Architected and built four production platforms (Site Registration, Hospital Portal, Admin Dashboard, Sponsor Portal) using microservices and secure APIs.",
      "Delivered 70+ secure workflows for onboarding, compliance, and clinical study management with RBAC and JWT auth.",
      "Designed a HIPAA/GDPR-compliant Trusted Research Environment (TRE) for genomic and clinical data using AWS-native services.",
      "Led a strategic migration from GCP/Databricks to AWS, improving scalability, data security, and cost efficiency.",
    ],
    technologies: [
      "Node.js",
      "React",
      "Docker",
      "Kubernetes",
      "GCP",
      "AWS Glue",
      "AWS Lambda",
      "S3",
      "DynamoDB",
      "Athena",
      "SageMaker",
      "KMS",
    ],
  },
  {
    id: 5,
    company: "FlairLabs Inc.",
    role: "Founding Engineer – Contract",
    period: "Sep 2024 - Nov 2024",
    location: "Remote",
    description:
      "Single-handedly built a GenAI-powered real estate search platform enabling natural-language queries for properties.",
    achievements: [
      "Developed an end-to-end platform that parses queries like '5 bed 3 bath in SF with a pool in a good school district' into structured search filters.",
      "Implemented a GenAI workflow that extracts property traits, generates SQL dynamically, and returns matching listings and agent details from Redfin/Zillow data.",
      "Integrated RCS/SMS-based messaging so users can receive property recommendations and connect with agents directly.",
    ],
    technologies: [
      "Flask",
      "React",
      "Python",
      "PostgreSQL",
      "OpenAI / LLMs",
      "LangChain",
      "RCS/SMS APIs",
    ],
  },
  {
    id: 6,
    company: "LinkedIn",
    role: "AI/ML Data Scientist – Contract",
    period: "Mar 2024 - Jun 2024",
    location: "Remote",
    description:
      "Built a large-scale RAG-based chatbot to accelerate document understanding and decision-making.",
    achievements: [
      "Developed a RAG chatbot using Azure OpenAI and Azure AI Search, reducing document processing time by 83% and saving about $3M in operational costs.",
      "Integrated Azure Cognitive Search, Speech Services, and Log Analytics to handle 100,000+ daily requests reliably.",
      "Deployed scalable backends using Azure Functions and Blob Storage with a React frontend for rich user interactions.",
    ],
    technologies: [
      "Python",
      "Azure OpenAI",
      "Azure AI Search",
      "Azure Functions",
      "React",
      "Blob Storage",
      "Log Analytics",
    ],
  },
  {
    id: 7,
    company: "Crewasis.ai",
    role: "Data Scientist – Contract",
    period: "Aug 2024 - Oct 2024",
    location: "Remote",
    description:
      "Delivered GenAI-driven market intelligence for leading clients, including Fortune 500 companies.",
    achievements: [
      "Built a GenAI solution to analyze text and video content and extract key market and brand insights.",
      "Enabled data-driven decision-making by surfacing actionable trends and focus areas for client stakeholders.",
    ],
    technologies: ["Python", "LLMs", "NLP", "Computer Vision", "Cloud Services"],
  },
  {
    id: 8,
    company: "Illinois Institute of Technology",
    role: "Graduate Teaching Assistant (Part-time)",
    period: "Aug 2023 - May 2024",
    location: "Chicago, IL",
    description:
      "Supported teaching and mentoring for advanced Computer Science courses.",
    achievements: [
      "Mentored 500+ students across Advanced Database Organization and Computer Networks courses.",
      "Guided students through core concepts, assignments, and projects, improving overall academic performance.",
    ],
    technologies: ["SQL", "Databases", "Computer Networks", "Python"],
  },
  {
    id: 9,
    company: "Deloitte",
    role: "Machine Learning Analyst",
    period: "Nov 2020 - Jul 2022",
    location: "India",
    description:
      "Built ML and AI solutions for financial services and healthcare clients at enterprise scale.",
    achievements: [
      "Revolutionized credit card fraud detection for a Fortune 500 bank using Kafka, Spark, and XGBoost, reducing false positives by 25%.",
      "Transformed a semi-automated extraction tool into a full AI system for a healthcare insurer using NLTK and CNNs, increasing extraction accuracy from 60% to 90%.",
      "Reengineered data pipelines with Apache Airflow, boosting processing efficiency by 75%.",
    ],
    technologies: [
      "Python",
      "Apache Kafka",
      "Apache Spark",
      "XGBoost",
      "Airflow",
      "TensorFlow",
      "NLTK",
      "SQL",
    ],
  },
  {
    id: 10,
    company: "Freelancer",
    role: "Software Developer – Contract",
    period: "Jun 2017 - Oct 2020",
    location: "Remote",
    description:
      "Delivered end-to-end software solutions across web, automation, and backend systems for multiple clients.",
    achievements: [
      "Independently gathered requirements, designed architectures, and shipped custom applications across industries.",
      "Worked across the full stack using Python, JavaScript, C++, Java, and SQL to build scalable, client-focused products.",
      "Built REST APIs, automation scripts, and web frontends tailored to client needs.",
    ],
    technologies: [
      "Python",
      "JavaScript",
      "C++",
      "Java",
      "Flask",
      "React",
      "SQL",
      "REST APIs",
    ],
  },
];

export const skills = {
  frontend: [
    "React",
    "Next.js",
    "React Native",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],
  backend: [
    "Python",
    "Node.js",
    "Flask",
    "FastAPI",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "GraphQL",
    "REST APIs",
  ],
  tools: [
    "Git / GitHub / GitLab",
    "Docker",
    "Kubernetes",
    "Databricks",
    "AWS",
    "GCP",
    "Azure",
    "Nginx",
    "Cloudflare",
    "CI/CD (GitHub Actions, GitLab CI)",
    "Jira",
  ],
};

export const projects = [
  {
    id: 1,
    title: "Referrio – AI-Powered Referral Platform",
    description:
      "Dual-sided platform for referrers and recruiters with AI-driven candidate scoring, pros/cons analysis, real-time notifications, and Stripe-powered automated payouts.",
    image: "/projects/referrio.jpg",
    technologies: ["Next.js", "Node.js", "Python", "PostgreSQL", "Stripe", "Docker", "GCP"],
    link: "https://referrio.io",
    github: "https://github.com/pranavsaji",
  },
  {
    id: 2,
    title: "BreatheIT – Lifestyle Wellness Platform",
    description:
      "Holistic lifestyle app across Android, iOS, and Web with AI-guided journaling, mood tracking, goal setting, challenges, and GenAI-powered recommendations across 7 life domains.",
    image: "/projects/breatheit.jpg",
    technologies: ["React Native", "React", "Node.js", "PostgreSQL", "GCP", "Stripe", "JWT"],
    link: "https://apps.apple.com/us/app/ultopia/id6742277064",
    github: "https://github.com/pranavsaji",
  },
];

export const education = [
  {
    degree: "Master of Computer Science (Specialization in AI)",
    school: "Illinois Institute of Technology",
    period: "In progress",
    location: "Chicago, IL",
  },
  {
    degree: "Executive Post Graduate Programme in Machine Learning & AI",
    school: "International Institute of Information Technology, Bangalore",
    period: "Completed",
    location: "Bangalore, India",
  },
  {
    degree: "Bachelor of Technology in Electronics and Communication",
    school: "Govt. Model Engineering College",
    period: "Completed",
    location: "Kochi, India",
  },
];

export const certifications = [
  {
    name: "Microsoft Certified: Azure AI Engineer Associate",
    issuer: "Microsoft",
    date: "",
  },
  {
    name: "Oracle Cloud Infrastructure Generative AI Professional",
    issuer: "Oracle",
    date: "",
  },
  {
    name: "Azure Databricks Platform Architect Accreditation",
    issuer: "Databricks",
    date: "",
  },
  {
    name: "Databricks Academy Accreditation – Generative AI Fundamentals",
    issuer: "Databricks",
    date: "",
  },
  {
    name: "Databricks Fundamental Accreditation",
    issuer: "Databricks",
    date: "",
  },
  {
    name: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "",
  },
  {
    name:
      "deeplearning.ai / Coursera: Neural Networks and Deep Learning; Improving Deep Neural Networks; Structuring Machine Learning Projects",
    issuer: "deeplearning.ai / Coursera",
    date: "",
  },
];

// export const professionalExperience = [
//   {
//     id: 1,
//     company: "Tech Company Inc.",
//     role: "Senior Full Stack Developer",
//     period: "2022 - Present",
//     location: "San Francisco, CA",
//     description: "Leading development of next-generation web applications using React, Node.js, and cloud technologies.",
//     achievements: [
//       "Architected and implemented scalable microservices handling 1M+ daily requests",
//       "Reduced application load time by 60% through performance optimization",
//       "Mentored team of 5 junior developers and established best practices",
//       "Led migration to modern tech stack, improving developer productivity by 40%",
//     ],
//     technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes"],
//   },
//   {
//     id: 2,
//     company: "StartupXYZ",
//     role: "Full Stack Developer",
//     period: "2020 - 2022",
//     location: "Remote",
//     description: "Built and maintained multiple client-facing applications and internal tools.",
//     achievements: [
//       "Developed real-time collaboration features using WebSockets",
//       "Implemented CI/CD pipelines reducing deployment time by 70%",
//       "Created reusable component library used across 10+ projects",
//     ],
//     technologies: ["Vue.js", "Python", "PostgreSQL", "Redis", "GraphQL"],
//   },
//   {
//     id: 3,
//     company: "Digital Agency",
//     role: "Frontend Developer",
//     period: "2018 - 2020",
//     location: "New York, NY",
//     description: "Created beautiful and interactive user interfaces for various clients.",
//     achievements: [
//       "Delivered 20+ responsive web applications for enterprise clients",
//       "Improved client conversion rates by 35% through UX optimization",
//       "Collaborated with designers to implement pixel-perfect designs",
//     ],
//     technologies: ["React", "JavaScript", "CSS3", "Sass", "Webpack"],
//   },
// ];

// export const skills = {
//   frontend: [
//     "React",
//     "Next.js",
//     "TypeScript",
//     "Three.js",
//     "WebGL",
//     "Tailwind CSS",
//     "Framer Motion",
//   ],
//   backend: [
//     "Node.js",
//     "Python",
//     "PostgreSQL",
//     "MongoDB",
//     "GraphQL",
//     "REST APIs",
//   ],
//   tools: [
//     "Git",
//     "Docker",
//     "AWS",
//     "CI/CD",
//     "Figma",
//     "Webpack",
//     "Vite",
//   ],
// };

// export const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform",
//     description: "A full-stack e-commerce solution with real-time inventory management and payment processing.",
//     image: "/project1.jpg",
//     technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
//     link: "https://example.com",
//     github: "https://github.com/yourusername/project1",
//   },
//   {
//     id: 2,
//     title: "3D Visualization Tool",
//     description: "Interactive 3D data visualization using WebGL and Three.js for complex datasets.",
//     image: "/project2.jpg",
//     technologies: ["Three.js", "React", "WebGL", "D3.js"],
//     link: "https://example.com",
//     github: "https://github.com/yourusername/project2",
//   },
//   {
//     id: 3,
//     title: "AI-Powered Analytics Dashboard",
//     description: "Real-time analytics dashboard with machine learning predictions and insights.",
//     image: "/project3.jpg",
//     technologies: ["Next.js", "Python", "TensorFlow", "Chart.js"],
//     link: "https://example.com",
//     github: "https://github.com/yourusername/project3",
//   },
// ];

// export const education = [
//   {
//     degree: "Bachelor of Science in Computer Science",
//     school: "University Name",
//     period: "2014 - 2018",
//     location: "City, State",
//   },
// ];

// export const certifications = [
//   {
//     name: "AWS Certified Solutions Architect",
//     issuer: "Amazon Web Services",
//     date: "2023",
//   },
//   {
//     name: "Google Cloud Professional Developer",
//     issuer: "Google Cloud",
//     date: "2022",
//   },
// ];

