// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Saleem Malik",
  role: "AI Full Stack Engineer",
  location: "Lahore, Pakistan",
  url: "https://saleem-malik.vercel.app",
  email: "saleemalik444@gmail.com",
  phone: "+92 323 9954754",
  whatsapp: "https://wa.me/923239954754",
  github: "https://github.com/SaleemMalik632",
  linkedin: "https://www.linkedin.com/in/devsaleemalik",
  resume: "/Saleem_Malik_Resume.pdf",
  photo: "/saleem-malik.jpg",
  headline: "I build production web apps and the AI APIs behind them.",
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

export const education = {
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
};

export const certifications = [
  { name: "SQL (Advanced)", issuer: "HackerRank" },
  { name: "Python (Basic, Intermediate)", issuer: "HackerRank" },
  { name: "Introduction to Generative AI", issuer: "Google Cloud" },
  { name: "React Basic", issuer: "Great Learning" },
];
