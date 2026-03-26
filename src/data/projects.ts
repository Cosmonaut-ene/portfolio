export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: 'UNSW Open Day RAG Chatbot',
    description:
      '8-node LangGraph pipeline with hybrid BM25 + semantic retrieval, HyDE, and CRAG. Achieved 22% accuracy improvement and 46% latency reduction. Served as Scrum Master.',
    techStack: ['Python', 'LangGraph', 'FastAPI', 'BM25', 'RAGAS'],
    githubUrl: 'https://github.com/Cosmonaut-ene/UNSW_RAG_Assistance',
  },
  {
    title: 'Jobseeking Agent',
    description:
      '4-agent autonomous job application system with Scout, Tailor, Applier, and Advisor agents. Integrates Discord notifications and automated browser interaction.',
    techStack: ['FastAPI', 'Next.js', 'Playwright', 'Discord', 'GitHub Actions'],
    githubUrl: 'https://github.com/Cosmonaut-ene/Jobseeking_Agent',
  },
];
