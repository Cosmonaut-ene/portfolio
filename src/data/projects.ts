export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "UNSW Open Day RAG Chatbot",
    description:
      "An 8-node LangGraph pipeline combining hybrid BM25 + semantic retrieval, HyDE query expansion, and CRAG self-correction. Evaluated end-to-end with the RAGAS framework. Achieved 22% accuracy improvement and 46% latency reduction. Led the team as Scrum Master throughout the full development cycle.",
    techStack: [
      "Python",
      "LangGraph",
      "FastAPI",
      "BM25",
      "HyDE",
      "CRAG",
      "RAGAS",
      "FAISS",
    ],
    githubUrl: "https://github.com/Cosmonaut-ene/UNSW_RAG_Assistance",
  },
  {
    title: "Jobseeking Agent — Multi-Agent System",
    description:
      "Self-built 3-agent automation system (Scout / Tailor / Advisor) for AI job hunting. FastAPI backend, Next.js dashboard, Playwright browser automation, Discord webhook notifications, GitHub Actions CI/CD on a self-hosted Ubuntu VPS.",
    techStack: [
      "Multi-Agent",
      "FastAPI",
      "Next.js",
      "Playwright",
      "Docker",
      "GitHub Actions",
      "Discord API",
      "APScheduler",
    ],
    githubUrl: "https://github.com/Cosmonaut-ene/Jobseeking_Agent",
  },
];
