export interface LabProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'active' | 'wip' | 'complete';
  techStack: string[];
  screenshots?: string[];
  demoUrl?: string;
  gitlabUrl?: string;
  githubUrl?: string;
}

export const labProjects: LabProject[] = [
  {
    id: 'syncr',
    name: 'Syncr',
    tagline: 'Media tracking with timestamp-based async discussions',
    description:
      'Multi-platform tracker for movies, series, anime, and games. Unique twist: timestamp-anchored comments that sync to specific moments of playback, plus emoji reactions visible as timeline markers and weekly scheduling.',
    status: 'wip',
    techStack: ['React 19', 'TanStack Start', '.NET 10', 'Myth Ecosystem', 'TMDB', 'IGDB', 'Trakt'],
    gitlabUrl: 'https://gitlab.com/users/paulaolileal/',
  },
  {
    id: 'buddy',
    name: 'Buddy',
    tagline: 'AI desktop pet with voice and personality',
    description:
      'Interactive AI-powered desktop companion for Windows. Listens via wake-word or hotkey, responds with Edge TTS, reacts to your activity, and displays animated sprites with emotional states.',
    status: 'wip',
    techStack: ['Python', 'PyQt6', 'OpenAI Whisper', 'Edge TTS', 'GPT-4'],
    gitlabUrl: 'https://gitlab.com/users/paulaolileal/',
  },
  {
    id: 'deca',
    name: 'Deca',
    tagline: 'Distributed reasoning engine for voice assistants',
    description:
      'Architecture that separates AI reasoning (Mind) from hardware I/O (Node). The Mind handles memory, intent classification, and personality — while Nodes execute actions. Built for distributed, multi-device voice workflows.',
    status: 'wip',
    techStack: ['.NET 10', 'Clean Architecture', 'SQLite', 'EF Core', 'Docker'],
    gitlabUrl: 'https://gitlab.com/users/paulaolileal/',
  },
  {
    id: 'sheet-budget',
    name: 'Sheet Budget',
    tagline: 'Personal finance tracking — Google Sheets as your database',
    description:
      'Zero-backend personal finance tracker that uses your own Google Sheets as a database. Handles recurring expenses with automatic monthly generation (idempotent), installment tracking with full visibility per month, credit card invoice grouping, and a 6-month spending trends dashboard. Your data never leaves your Google Drive.',
    status: 'complete',
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Google Sheets API', 'Recharts'],
    screenshots: [
      '/images/sheet-budget/sb-dashboard.png',
      '/images/sheet-budget/sb-tema-claro.png',
      '/images/sheet-budget/sb-lancamentos.png',
      '/images/sheet-budget/sb-receita.png',
      '/images/sheet-budget/sb-recorrencias.png',
      '/images/sheet-budget/sb-configuracoes.png',
      '/images/sheet-budget/sb-login.png',
    ],
    gitlabUrl: 'https://gitlab.com/users/paulaolileal/',
  },
];
