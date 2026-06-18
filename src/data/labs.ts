export interface LabProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'active' | 'wip' | 'complete';
  techStack: string[];
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
    status: 'complete',
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
      'Zero-backend finance tracker that uses your own Google Sheets. Manages recurring expenses, installments, credit card invoices, and visualizes 6-month spending trends. Your data stays in your Drive.',
    status: 'complete',
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'Google Sheets API', 'Recharts'],
    gitlabUrl: 'https://gitlab.com/users/paulaolileal/',
  },
];
