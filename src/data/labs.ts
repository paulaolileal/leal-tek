export interface LabProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: 'active' | 'wip' | 'complete';
  techStack: string[];
  logo?: string;
  href?: string;
  screenshots?: string[];
  demoUrl?: string;
  gitlabUrl?: string;
  githubUrl?: string;
}

export const labProjects: LabProject[] = [
  {
    id: 'meta-board',
    name: 'MetaBoard',
    tagline: 'Kanban board direto na sua planilha Google Sheets',
    description:
      'Transforma qualquer Google Sheets em um quadro Kanban interativo — sem backend, sem banco de dados próprio, sem mensalidade. Drag & drop, 17 tipos de campo, criação de cards com IA e responsivo por design.',
    status: 'active',
    logo: '/images/meta-board/mb-logo.png',
    href: '/labs/meta-board',
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'shadcn/ui', 'dnd-kit', 'Framer Motion', 'TanStack Query', 'Zustand', 'Google Sheets API', 'OpenAI API'],
    screenshots: [
      '/images/meta-board/mb-boards.png',
      '/images/meta-board/mb-board-treino.png',
      '/images/meta-board/mb-criar-card-padrao.png',
      '/images/meta-board/mb-criar-com-ia.png',
      '/images/meta-board/mb-edicao-board-01.png',
      '/images/meta-board/mb-edicao-board-02.png',
      '/images/meta-board/mb-edicao-board-03.png',
    ],
    githubUrl: 'https://github.com/paulaolileal/meta-board',
  },
  {
    id: 'syncr',
    name: 'Syncr',
    tagline: 'Media tracking with timestamp-based async discussions',
    description:
      'Multi-platform tracker for movies, series, anime, and games. Unique twist: timestamp-anchored comments that sync to specific moments of playback, plus emoji reactions visible as timeline markers and weekly scheduling.',
    status: 'wip',
    techStack: ['React 19', 'TanStack Start', '.NET 10', 'Myth Ecosystem', 'TMDB', 'IGDB', 'Trakt'],
  },
  {
    id: 'buddy',
    name: 'Buddy',
    tagline: 'AI desktop pet with voice and personality',
    description:
      'Interactive AI-powered desktop companion for Windows. Listens via wake-word or hotkey, responds with Edge TTS, reacts to your activity, and displays animated sprites with emotional states.',
    status: 'wip',
    techStack: ['Python', 'PyQt6', 'OpenAI Whisper', 'Edge TTS', 'GPT-4'],
    githubUrl: 'https://github.com/paulaolileal/buddy',
  },
  {
    id: 'sheet-budget',
    name: 'Sheet Budget',
    tagline: 'Personal finance tracking — Google Sheets as your database',
    description:
      'Zero-backend personal finance tracker that uses your own Google Sheets as a database. Handles recurring expenses with automatic monthly generation (idempotent), installment tracking with full visibility per month, credit card invoice grouping, and a 6-month spending trends dashboard. Your data never leaves your Google Drive.',
    status: 'complete',
    logo: '/images/sheet-budget/sb-logo.png',
    href: '/labs/sheet-budget',
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
    githubUrl: 'https://github.com/paulaolileal/sheet-budget',
  },
  {
    id: 'home-stock',
    name: 'Home Stock',
    tagline: 'Controle de estoque doméstico — Google Sheets como banco de dados',
    description:
      'Mantém o inventário da casa (despensa, geladeira, banheiro, limpeza) atualizado em segundos, com lista de compras gerada automaticamente a partir dos itens abaixo do mínimo. Scanner de código de barras preenche produtos automaticamente via Open Food Facts. Zero backend próprio, zero mensalidade — os dados vivem na sua própria planilha do Google Drive.',
    status: 'complete',
    logo: '/images/home-stock/hs-logo.png',
    href: '/labs/home-stock',
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS v4', 'TanStack Query', 'Google Sheets API'],
    screenshots: [
      '/images/home-stock/hs-inventario-desktop.png',
      '/images/home-stock/hs-busca-desktop.png',
      '/images/home-stock/hs-compras-desktop.png',
      '/images/home-stock/hs-novo-produto-desktop.png',
      '/images/home-stock/hs-item-details-desktop.png',
      '/images/home-stock/hs-item-details-2-desktop.png',
      '/images/home-stock/hs-ajustes-desktop.png',
      '/images/home-stock/hs-inventario-mobile.png',
    ],
    demoUrl: 'https://stock.lealtek.com',
    githubUrl: 'https://github.com/paulaolileal/home-stock',
  },
];
