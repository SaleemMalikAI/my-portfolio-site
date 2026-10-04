// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Saleem Malik",
  role: "AI Full Stack Engineer",
  location: "Lahore, Pakistan",
  url: "https://saleem-malik.vercel.app",
  email: "saleemalik444@gmail.com",
  phone: "+92 323 9954754",
  whatsapp: "https://wa.me/923239954754",
  github: "https://github.com/SaleemMalikAI",
  linkedin: "https://www.linkedin.com/in/devsaleemalik",
  resume: "/Saleem_Malik_Resume.pdf",
  photo: "/saleem-malik.jpg",
  headline: "I build production web apps and the AI APIs behind them.",
  // Lines typed out in the hero terminal
  prompts: [
    "build a RAG chatbot over PDFs → LangChain + Pinecone",
    "ship speech-to-text API → FastAPI, async Python",
    "fine-tune LLaMA-3 → QLoRA, PyTorch",
    "orchestrate agents → CrewAI, MCP",
    "frontend end to end → Next.js + TypeScript",
  ],
  summary:
    "AI Full Stack Engineer with 2 years of experience. I build responsive frontends with React, Next.js, TypeScript and Tailwind CSS, and scalable backend services with FastAPI, Python and Node.js. I integrate LLMs into real products using RAG, LangChain, vector databases and multi-agent workflows, and ship features end to end, from UI to API to deployment.",
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  groups: { title: string; points: string[] }[];
};

export const experience: Experience[] = [
  {
    company: "JFreaks Software Solutions",
    role: "AI Full Stack Engineer",
    location: "Lahore · Onsite",
    period: "Apr 2025 – Present",
    groups: [
      {
        title: "Frontend engineering",
        points: [
          "Built and maintain the APIFreaks frontend end to end across multiple Next.js / TypeScript repositories: website, developer tools and API documentation.",
          "Created a shared component and utility package, published to a private npm registry and reused across every frontend repository.",
          "Fixed a critical authentication redirect loop affecting about 20 call sites, and debugged Core Web Vitals (LCP, CLS, INP) issues.",
        ],
      },
      {
        title: "Backend & AI",
        points: [
          "Designed and deployed production APIs for Speech-to-Text, Text-to-Speech and Voice Cloning with FastAPI and async Python, serving concurrent users.",
          "Optimized audio processing pipelines for real-time inference and lower latency.",
          "Cleaned inconsistent bank names and addresses in a PostgreSQL SWIFT code dataset, automating safe fixes and routing risky changes to manual review.",
          "Set up an AI-assisted development workflow with custom coding agents and MCP integrations across repositories.",
        ],
      },
    ],
  },
  {
    company: "PureLogics",
    role: "AI Engineer Intern",
    location: "Lahore · Onsite",
    period: "Jun 2024 – Sep 2024",
    groups: [
      {
        title: "AI / ML development",
        points: [
          "Developed RAG-based NLP solutions with LangChain and LlamaIndex, optimizing vector search with Pinecone and ChromaDB.",
          "Built deep learning models (CNN, RNN, LSTM) with NumPy and implemented object detection with YOLO.",
        ],
      },
      {
        title: "Featured projects",
        points: [
          "Multimodal Chatbot with RAG: chatbot over PDF documents using LangChain, Gemini API and Pinecone, with Tavily web search as a fallback when retrieved context was insufficient.",
          "HR Review Automation System: multi-agent HR review system with CrewAI, where agents run sequential tasks and pass outputs to each other.",
        ],
      },
    ],
  },
  {
    company: "Xavor Corporation",
    role: "Gen-AI Engineer Intern",
    location: "Hybrid",
    period: "Jun 2024 – Aug 2024",
    groups: [
      {
        title: "AI / NLP development",
        points: [
          "Learned NLP fundamentals: tokenization, text preprocessing and sequence modeling.",
          "Studied the Transformer architecture and Large Language Models, including their training and optimization.",
          "Implemented LoRA and QLoRA for efficient LLM fine-tuning.",
        ],
      },
      {
        title: "Featured project",
        points: [
          "Medical QA Chatbot: fine-tuned LLaMA-3 with QLoRA on the ngram/medchat-qa dataset to answer medical questions, using PyTorch.",
        ],
      },
    ],
  },
  {
    company: "Infotech",
    role: "MERN Stack Developer Intern",
    location: "Lahore · Onsite",
    period: "2023 · 6 weeks",
    groups: [
      {
        title: "Full stack development",
        points: [
          "Gained hands-on experience with React and Node.js and industry best practices.",
          "Built a service provider web app with buyer and seller roles: orders on gigs, real-time chat and two-way reviews.",
        ],
      },
    ],
  },
];

export type Project = {
  name: string;
  kind: string;
  year: string;
  description: string;
  points: string[];
  tech: string[];
  // Add links when available, e.g. { label: "GitHub", href: "https://github.com/..." }
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    name: "APIFreaks Frontend",
    kind: "Production · JFreaks",
    year: "2025",
    description:
      "Website, developer tools and API documentation for the APIFreaks API platform, built across several Next.js repositories with a shared component package.",
    points: [
      "Shared UI and utility package on a private npm registry",
      "Core Web Vitals debugging and auth flow fixes",
    ],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "npm"],
    links: [{ label: "Live", href: "https://apifreaks.com" }],
  },
  {
    name: "Sign Connect",
    kind: "Final Year Project",
    year: "2025",
    description:
      "Voice-to-sign-language generation system using Progressive Transformers trained on the PHOENIX-14T dataset.",
    points: [
      "TSPNet-based detection module for hierarchical feature learning",
      "Speech processing and NLP pipeline end to end",
    ],
    tech: ["Python", "PyTorch", "Transformers"],
    links: [],
  },
  {
    name: "Multimodal RAG Chatbot",
    kind: "PureLogics",
    year: "2024",
    description:
      "Chatbot that answers questions over PDF documents, falling back to Tavily web search when the retrieved context isn't enough.",
    points: [
      "Retrieval with Pinecone vector search",
      "Gemini API for generation",
    ],
    tech: ["LangChain", "Gemini", "Pinecone", "Tavily"],
    links: [],
  },
  {
    name: "Medical QA Chatbot",
    kind: "Xavor",
    year: "2024",
    description:
      "Medical question-answering chatbot built by fine-tuning LLaMA-3 on the ngram/medchat-qa dataset.",
    points: [
      "Parameter-efficient fine-tuning with QLoRA",
      "Trained and evaluated in PyTorch",
    ],
    tech: ["LLaMA-3", "QLoRA", "PyTorch", "Python"],
    links: [],
  },
  {
    name: "HR Review Automation",
    kind: "PureLogics",
    year: "2024",
    description:
      "Multi-agent HR review system where agents run sequential tasks and pass their outputs to each other.",
    points: ["Agent roles and task hand-off with CrewAI"],
    tech: ["CrewAI", "Python", "LLMs"],
    links: [],
  },
  {
    name: "Professional Services Platform",
    kind: "Full Stack Web App",
    year: "2023",
    description:
      "Hire electricians, plumbers, beauticians and other professionals from home, with separate customer and provider roles.",
    points: [
      "Service ordering and real-time chat",
      "Two-way review system",
    ],
    tech: ["React", "Node.js"],
    links: [],
  },
];

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
  { group: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "HTML", "CSS"] },
  {
    group: "Backend",
    items: ["FastAPI", "Node.js", "REST APIs", "OpenAPI / Swagger", "Async Programming"],
  },
  {
    group: "AI / LLM",
    items: ["LangChain", "LlamaIndex", "CrewAI", "RAG", "Pinecone", "ChromaDB", "PyTorch"],
  },
  { group: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"] },
  { group: "Tools", items: ["Git", "Docker", "Vercel", "Postman", "npm (private registry)"] },
];

export type Education = {
  school: string;
  degree: string;
  location: string;
  period: string;
  note?: string;
  courses: string[];
};

export const education: Education[] = [
  {
    school: "University of Engineering and Technology",
    degree: "Bachelor of Computer Science",
    location: "Lahore, Pakistan",
    period: "Sep 2021 – Jun 2025",
    courses: [
      "Operating Systems",
      "Data Structures",
      "Analysis of Algorithms",
      "Artificial Intelligence",
      "Machine Learning",
      "Networking",
      "Databases",
    ],
  },
  {
    school: "Degree College Kahror Pacca",
    degree: "FSc Pre-Engineering",
    location: "Multan, Pakistan",
    period: "Mar 2019 – May 2021",
    note: "Score: 1073 / 1100",
    courses: ["Chemistry", "Mathematics", "Physics", "English"],
  },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
];

export const certifications = [
  { name: "SQL (Advanced)", issuer: "HackerRank" },
  { name: "Python (Basic, Intermediate)", issuer: "HackerRank" },
  { name: "Introduction to Generative AI", issuer: "Google Cloud" },
  { name: "React Basic", issuer: "Great Learning" },
];
