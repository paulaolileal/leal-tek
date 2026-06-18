export type Locale = 'pt' | 'en';

export const translations = {
  pt: {
    nav: {
      home: 'Início',
      products: 'Produtos',
      labs: 'Labs',
      games: 'Jogos',
      blog: 'Blog',
      about: 'Sobre',
      now: 'Agora',
      contact: 'Contato',
    },
    langSwitch: 'EN',

    home: {
      meta: {
        title: 'Início',
        description: 'LealTEK — Arquitetura de software, ecossistemas open-source e produtos digitais construídos para ter impacto.',
      },
      heroHeadline1: 'Transformando Ideias',
      heroHeadline2: 'Em Realidade',
      heroSub: 'Arquitetura de software, ecossistemas open-source e produtos digitais construídos para ter impacto.',
      cta1: 'Ver Produtos',
      cta2: 'Sobre Paula',
      statYears: 'anos de experiência',
      statPackages: 'pacotes NuGet',
      statIncidents: 'menos incidentes em produção',
      statGames: 'jogos lançados',
      productsLabel: 'Produtos',
      productsHeading: 'O Que Eu Construo',
      productsDesc: 'Plataformas e ecossistemas open-source criados para desafios reais de engenharia.',
      labsLabel: 'Labs',
      labsHeading: 'Experimentos & Explorações',
      labsDesc: 'Projetos paralelos, provas de conceito e ferramentas construídas por curiosidade.',
      labActive: 'Ativo',
      labWip: 'Em Andamento',
      labComplete: 'Concluído',
      labViewProject: 'Ver projeto',
      gamesLabel: 'Jogos',
      gamesHeading: 'Jogar Algo',
      gamesDesc: 'Jogos para grupos no browser, sem instalação, funciona offline.',
      writingLabel: 'Escrita',
      writingHeading: 'Pensamentos & Artigos',
      writingDesc: 'Insights de engenharia, decisões de arquitetura e lições do campo.',
      followLinkedIn: 'Seguir no LinkedIn',
      ctaLabel: 'Vamos Conectar',
      ctaHeading: 'Vamos construir algo incrível.',
      ctaText: 'Tem um desafio de arquitetura, uma ideia de produto ou quer colaborar em open-source?',
      ctaBtn: 'Entre em Contato',
    },

    about: {
      meta: {
        title: 'Sobre',
        description: 'Paula Leal — Staff Engineer na TOTVS, Fundadora da MindCircle. Arquiteta de software especializada em modernização de arquiteturas legadas, microsserviços e cloud-native.',
      },
      label: 'Sobre',
      title1: 'Staff Engineer na TOTVS',
      title2: 'Fundadora da MindCircle',
      bio: 'Arquiteta de Software/Soluções com mais de 10 anos de experiência em tecnologia, especializada em modernização de arquiteturas legadas, microsserviços e plataformas cloud-native.',
      statsLabels: [
        'Redução de incidentes críticos em produção',
        'Redução no setup time de novos projetos',
        'Redução no tempo de integração de parceiros',
        'Anos de experiência em tecnologia',
      ],
      experienceLabel: 'Experiência',
      currentBadge: 'Atual',
      skillsLabel: 'Habilidades',
      educationLabel: 'Educação',
      photoAlt: 'Paula Leal — Staff Engineer e Fundadora',
      photoRole: 'Staff Engineer · Fundadora · Arquiteta',
      location: 'Belo Horizonte, MG — Brasil',
      eduDegrees: [
        'Pós-Graduação em Gestão e Análise Estratégica de Dados',
        'Bacharelado em Ciência da Computação',
      ],
      timeline: [
        { company: 'TOTVS', role: 'Staff Engineer', period: 'mar 2026 — presente', current: true, highlight: 'CLI plug-and-play e AI Registry para acelerar adoção de IA em escala corporativa' },
        { company: 'MindCircle', role: 'Fundadora', period: 'mar 2026 — presente', current: true, highlight: 'Atuação ponta a ponta: da arquitetura ao produto, IA, colaboração em tempo real e UX' },
        { company: 'Blip', role: 'Staff Architect', period: 'mai 2024 — mar 2026', current: false, highlight: '−40% incidentes críticos; arquitetura unificada de pagamentos (PIX + Open Finance + Fiserv/Cielo)' },
        { company: 'Blip', role: 'Arquiteta de Software', period: 'ago 2023 — mai 2024', current: false, highlight: '−60% setup time de projetos; pipelines CI/CD Azure DevOps padronizados para todas as squads' },
        { company: 'Blip', role: 'Tech Lead', period: 'nov 2021 — ago 2023', current: false, highlight: 'Liderança de 3 squads em produtos B2B modulares com micro-frontends React e APIs .NET' },
        { company: 'dti digital', role: 'Tech Lead', period: 'jan 2021 — nov 2021', current: false, highlight: '−70% tempo de integração de parceiros com API PIX para o Grupo Martins' },
        { company: 'TCE-MG', role: 'Desenvolvedora Sênior', period: 'out 2019 — jan 2021', current: false, highlight: '+35% performance do sistema; modernização com arquitetura hexagonal e DDD' },
        { company: 'Raro Labs', role: 'Desenvolvedora Web', period: 'mar 2019 — set 2019', current: false, highlight: 'Automações e módulos administrativos para o Banco BMG' },
      ],
    },

    contact: {
      meta: {
        title: 'Contato',
        description: 'Entre em contato — uma colaboração, um projeto ou apenas uma boa conversa sobre arquitetura.',
      },
      label: 'Contato',
      heading: 'Entre em Contato',
      sub: 'Uma colaboração, um projeto ou apenas uma boa conversa sobre arquitetura.',
      note: 'Sem formulário — fale diretamente.',
    },

    now: {
      meta: {
        title: 'Agora',
        description: 'No que estou trabalhando, aprendendo e pensando — atualizado em junho de 2026.',
      },
      updated: 'Atualizado em junho de 2026 — Contagem, MG, Brasil',
      workingOn: 'Trabalhando em',
      learning: 'Aprendendo',
      readingWatching: 'Lendo / Assistindo',
      basedIn: 'Baseado em',
      readingEmpty: 'Nada específico no momento — este espaço será atualizado em breve.',
      location: 'Contagem, Minas Gerais, Brasil',
      nowMovement: 'Esta página é inspirada pelo movimento /now —',
      workItems: [
        {
          label: 'Staff Engineer na TOTVS',
          desc: 'Liderando Engineering Experience — ferramentas para desenvolvedores, padrões internos e enablement de plataforma em times de engenharia.',
        },
        {
          label: 'MindCircle',
          desc: 'Construindo a plataforma como fundadora — da arquitetura à UI. Colaboração em tempo real, integração com IA e ferramentas de workspace visual.',
        },
        {
          label: 'Myth Ecosystem',
          desc: 'Evoluindo a suite de bibliotecas — adicionando novos pacotes, refinando APIs e melhorando a documentação com base no uso real.',
        },
      ],
      learnItems: [
        {
          label: 'Ferramentas de IA para workflows de desenvolvimento',
          desc: 'Explorando como LLMs se integram em pipelines de desenvolvimento, automação de code review e ferramentas de enablement.',
        },
        {
          label: 'Padrões de sistemas distribuídos',
          desc: 'Aprofundando em event sourcing, sagas e consistência eventual — passando da teoria para a implementação prática.',
        },
      ],
    },

    labs: {
      meta: {
        title: 'Labs',
        description: 'Experimentos e explorações — projetos pessoais explorando novas ideias, arquiteturas e tecnologias.',
      },
      label: 'Labs',
      heading1: 'Experimentos &',
      heading2: 'Explorações',
      sub: 'Projetos pessoais explorando novas ideias, arquiteturas e tecnologias. Alguns estão prontos. Alguns ainda estão vivos. Todos ensinaram algo útil.',
      active: 'Ativo',
      wip: 'Em Andamento',
      complete: 'Concluído',
    },

    games: {
      meta: {
        title: 'Jogos',
        description: 'Dois jogos no browser para grupos — sem instalação, sem conta.',
      },
      label: 'Jogos',
      heading: 'Jogar Algo',
      sub: 'Dois jogos no browser para grupos — sem instalação, sem conta. Funciona offline em qualquer dispositivo.',
      originLabel: 'Como começou',
      originP1: 'Esses jogos começaram como uma forma de explorar capacidades nativas do browser — Service Workers, manifests PWA, arquitetura offline-first — sem o overhead de um backend ou framework. O desafio era construir algo genuinamente útil e divertido usando apenas HTML, CSS e JavaScript vanilla.',
      originP2: 'Ambos os jogos nasceram de situações sociais reais: precisar de algo para jogar em uma reunião sem preparação. Acabaram se tornando exemplos sólidos do que você pode construir ao aproveitar ao máximo a plataforma web. Sem servidores, sem contas, sem fricção — só abrir o link e jogar.',
    },

    products: {
      meta: {
        title: 'Produtos',
        description: 'O que construímos — MindCircle e o Myth Ecosystem.',
      },
      label: 'Produtos',
      heading: 'O Que Construímos',
      sub: 'Dois produtos em escalas diferentes — uma plataforma SaaS colaborativa e um ecossistema de bibliotecas .NET pronto para produção. Ambos construídos do zero com arquitetura limpa, uso real e zero tolerância para complexidade desnecessária.',
      statusActive: 'Ativo',
      statusWip: 'Em Andamento',
      learnMore: 'Saiba Mais →',
      ctaLabel: 'Vamos Trabalhar Juntos',
      ctaHeading1: 'Construindo algo complexo?',
      ctaHeading2: 'Vamos conversar.',
      ctaBtn: 'Entre em Contato',
    },

    mindcircle: {
      meta: {
        title: 'MindCircle',
        description: 'Pensamento visual, potencializado por IA. Uma plataforma SaaS colaborativa para gestão do conhecimento.',
      },
      category: 'Plataforma SaaS',
      statusActive: 'Ativo',
      featuresLabel: 'Funcionalidades Principais',
      featuresHeading: 'Construído para a forma que você pensa',
      stackLabel: 'Stack Tecnológica',
      stackHeading: 'O que faz funcionar',
      ctaHeading: 'Fique ligado — acesso antecipado chegando em breve.',
      ctaText: 'O MindCircle está sendo ativamente construído. Acompanhe no LinkedIn para atualizações e anúncios de acesso antecipado.',
      ctaBtn: 'Seguir no LinkedIn',
    },

    myth: {
      meta: {
        title: 'Myth Ecosystem',
        description: 'Bibliotecas .NET prontas para produção com arquitetura limpa. 11 pacotes NuGet.',
      },
      category: 'Ecossistema de Bibliotecas .NET',
      statusActive: 'Ativo',
      packagesLabel: 'Pacotes NuGet',
      packagesHeading: '11 bibliotecas focadas',
      packagesSub: 'Cada pacote resolve uma preocupação — e todos se encaixam juntos.',
      philosophyLabel: 'Filosofia',
      whyHeading: 'Por que Myth?',
      builtWithLabel: 'Construído Com',
      viewOnNuget: 'Ver no NuGet',
      gitlabSource: 'Código no GitLab',
      ctaHeading: 'Pronto para usar o Myth no seu projeto?',
      ctaText: 'Todos os pacotes estão disponíveis no NuGet. Código-fonte e documentação vivem no GitLab.',
      browseNuget: 'Explorar no NuGet',
      exploreGitlab: 'Explorar no GitLab',
      whyPoints: [
        { title: 'Zero boilerplate', description: 'APIs fluentes e convenções inteligentes eliminam configuração repetitiva. Escreva o que importa.' },
        { title: 'DDD nativo', description: 'Domain-Driven Design é de primeira classe. Cada biblioteca é projetada em torno de bounded contexts e aggregate roots.' },
        { title: 'Integração perfeita', description: 'Todos os 11 pacotes compartilham um service provider global e seguem as mesmas convenções — eles simplesmente funcionam juntos.' },
      ],
    },

    blog: {
      meta: {
        title: 'Blog',
        description: 'Arquitetura, cultura de engenharia e open-source — escrito para desenvolvedores.',
      },
      label: 'Blog',
      heading1: 'Pensamentos',
      and: '&',
      heading2: 'Artigos',
      sub: 'Arquitetura, cultura de engenharia e open-source — escrito para desenvolvedores.',
      followLinkedIn: 'Seguir no LinkedIn',
      postsSuffix: 'posts',
      noPostsTitle: 'Sem posts ainda',
      noPostsSub: 'Conteúdo sendo criado. Siga no LinkedIn para ser o primeiro a saber.',
    },

    footer: {
      tagline: 'Transformando ideias em realidade —\nsoftware, sistemas e open-source.',
      builtWith: 'Construído com',
      deployedOn: '· Hospedado na DigitalOcean',
    },

    components: {
      productActive: 'Ativo',
      productInDev: 'Em Desenvolvimento',
      productViewDetails: 'Ver Detalhes',
      gamePlayNow: 'Jogar Agora',
      blogReadMore: 'Leia Mais',
      blogViewLinkedIn: 'Ver no LinkedIn',
    },

    gamesContent: {
      impostor: {
        tagline: 'Quem está se escondendo entre vocês?',
        description: 'Jogo de engano em grupo onde um jogador selecionado aleatoriamente — o impostor — não sabe a palavra secreta. Jogadores normais veem a palavra e a categoria; o impostor vê apenas a categoria. Por meio de debates e pistas sutis, o grupo tenta desmascarar o impostor antes que ele adivinhe a palavra.',
        features: [
          '50 categorias com ~600 palavras',
          'Atribuição automática de papéis',
          'Sem servidor ou conta necessária',
          'Tema claro/escuro',
          'Funciona completamente offline',
          'Pronto para PWA',
        ],
        howToPlay: [
          'Cadastre 3 ou mais jogadores',
          'Passe o celular para cada jogador em particular',
          'Jogadores normais veem a palavra + categoria',
          'O impostor vê apenas a categoria',
          'Debata, dê pistas e vote no impostor',
          'O impostor vence adivinhando a palavra antes de ser pego',
        ],
      },
      stop: {
        tagline: 'Corrida para preencher as categorias primeiro',
        description: 'O clássico jogo brasileiro de palavras — Stop! / Adedanha — reinventado como PWA. Uma letra aleatória é sorteada, os jogadores preenchem categorias com aquela letra, e o primeiro a gritar "Stop!" encerra a rodada. Com 143+ categorias em 13 pacotes temáticos, configurações compartilháveis por URL e sistema de pontuação completo.',
        features: [
          '143+ categorias em 13 pacotes temáticos',
          'Criação de categorias personalizadas',
          'Configuração compartilhável por URL',
          'Rodadas configuráveis (3, 5, 7, 10 ou infinito)',
          '100% offline com Service Worker',
          'Instalável como app nativo (PWA)',
        ],
        howToPlay: [
          'Selecione seus pacotes de categorias (ou crie os seus)',
          'Compartilhe o link do jogo com os amigos',
          'Uma letra aleatória é revelada — preencha todas as categorias rápido',
          'O primeiro a pressionar STOP encerra a rodada',
          'Pontuação: 10pts (resposta única), 5pts (empatada), 0pts (inválida)',
          'Jogue várias rodadas e veja o ranking final',
        ],
      },
    },

    labsContent: {
      syncr: {
        tagline: 'Acompanhamento de mídia com discussões assíncronas por timestamp',
        description: 'Rastreador multiplataforma para filmes, séries, anime e jogos. Diferencial: comentários ancorados por timestamp que sincronizam com momentos específicos de reprodução, reações com emoji visíveis como marcadores na linha do tempo e agendamento semanal.',
      },
      buddy: {
        tagline: 'Pet desktop com IA, voz e personalidade',
        description: 'Companheiro desktop interativo com IA para Windows. Escuta via wake-word ou atalho, responde com Edge TTS, reage à sua atividade e exibe sprites animados com estados emocionais.',
      },
      deca: {
        tagline: 'Motor de raciocínio distribuído para assistentes de voz',
        description: 'Arquitetura que separa o raciocínio de IA (Mind) da I/O de hardware (Node). O Mind cuida de memória, classificação de intenção e personalidade — enquanto os Nodes executam ações. Construído para fluxos de voz distribuídos e multi-dispositivo.',
      },
      'sheet-budget': {
        tagline: 'Controle financeiro pessoal — Google Sheets como banco de dados',
        description: 'Rastreador financeiro sem backend que usa sua própria planilha Google. Gerencia despesas recorrentes, parcelamentos, faturas de cartão de crédito e visualiza tendências de gastos em 6 meses. Seus dados ficam no seu Drive.',
      },
    },

    productsContent: {
      mindcircle: {
        tagline: 'Pensamento visual, potencializado por IA',
        description: 'Plataforma SaaS colaborativa para gestão do conhecimento e organização de ideias, com assistência de IA, colaboração em tempo real e ferramentas poderosas de visualização.',
        longDescription: 'MindCircle é uma plataforma colaborativa full-stack construída para pensamento visual e experiências assistidas por IA. Combina um backend .NET 8 com um frontend React 18, entregando colaboração em tempo real via SignalR, geração de conteúdo com IA (OpenAI GPT-4o), ferramentas de diagrama e uma interface internacionalizada — tudo construído sobre o ecossistema Myth.',
        features: [
          { title: 'Colaboração em Tempo Real', description: 'Edição ao vivo e indicadores de presença via hubs SignalR. Trabalhe junto sem fricção.' },
          { title: 'Integração com IA', description: 'Geração de ideias, sumarização de conteúdo e sugestões inteligentes com GPT-4o.' },
          { title: 'Workspace Visual', description: 'Diagramas com Excalidraw, gráficos Mermaid, mapas mentais e editor rich markdown.' },
          { title: 'Feature Flags', description: 'Rollouts controlados em runtime com dashboard admin e suporte a A/B testing.' },
          { title: 'Auth Enterprise', description: 'Autenticação JWT com cookies httpOnly e integração Google OAuth.' },
          { title: 'Clean Architecture', description: 'Camadas Domain, Application, Data com CQRS, arquitetura event-driven e ecossistema Myth.' },
        ],
      },
      myth: {
        tagline: 'Bibliotecas .NET prontas para produção com arquitetura limpa',
        description: 'Coleção abrangente de 11+ pacotes NuGet para construir aplicações .NET robustas e escaláveis — com APIs fluentes, configuração mínima e DDD no núcleo.',
        longDescription: 'Myth é um ecossistema de bibliotecas .NET opinativo e battle-tested que elimina boilerplate enquanto impõe clean architecture, DDD e padrões modernos de engenharia. Cada biblioteca resolve uma preocupação específica — de validação e pipelines a CQRS, repositórios e clientes REST — integrados por um service provider global.',
      },
    },
  },

  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      labs: 'Labs',
      games: 'Games',
      blog: 'Blog',
      about: 'About',
      now: 'Now',
      contact: 'Contact',
    },
    langSwitch: 'PT',

    home: {
      meta: {
        title: 'Home',
        description: 'LealTEK — Software architecture, open-source ecosystems, and digital products built for impact.',
      },
      heroHeadline1: 'Engineering Ideas',
      heroHeadline2: 'Into Reality',
      heroSub: 'Software architecture, open-source ecosystems, and digital products built for impact.',
      cta1: 'View Products',
      cta2: 'About Paula',
      statYears: 'years of experience',
      statPackages: 'NuGet packages',
      statIncidents: 'fewer production incidents',
      statGames: 'games launched',
      productsLabel: 'Products',
      productsHeading: 'What I Build',
      productsDesc: 'Platforms and open-source ecosystems crafted for real-world engineering challenges.',
      labsLabel: 'Labs',
      labsHeading: 'Experiments & Explorations',
      labsDesc: 'Side projects, proofs of concept, and tools built out of curiosity.',
      labActive: 'Active',
      labWip: 'In Progress',
      labComplete: 'Complete',
      labViewProject: 'View project',
      gamesLabel: 'Games',
      gamesHeading: 'Play Something',
      gamesDesc: 'Browser-based party games built for offline use and instant fun.',
      writingLabel: 'Writing',
      writingHeading: 'Thoughts & Articles',
      writingDesc: 'Engineering insights, architecture decisions, and lessons from the field.',
      followLinkedIn: 'Follow on LinkedIn',
      ctaLabel: "Let's Connect",
      ctaHeading: "Let's build something great.",
      ctaText: 'Have an architecture challenge, a product idea, or want to collaborate on open-source?',
      ctaBtn: 'Get in Touch',
    },

    about: {
      meta: {
        title: 'About',
        description: 'Paula Leal — Staff Engineer at TOTVS, Founder at MindCircle. Software architect specialized in legacy modernization, microservices, and cloud-native platforms.',
      },
      label: 'About',
      title1: 'Staff Engineer at TOTVS',
      title2: 'Founder at MindCircle',
      bio: 'Software/Solutions Architect with 10+ years of experience in technology, specialized in legacy architecture modernization, microservices, and cloud-native platforms.',
      statsLabels: [
        'Reduction in critical production incidents',
        'Reduction in new project setup time',
        'Reduction in partner integration time',
        'Years of experience in technology',
      ],
      experienceLabel: 'Experience',
      currentBadge: 'Current',
      skillsLabel: 'Skills',
      educationLabel: 'Education',
      photoAlt: 'Paula Leal — Staff Engineer and Founder',
      photoRole: 'Staff Engineer · Founder · Architect',
      location: 'Belo Horizonte, MG — Brazil',
      eduDegrees: [
        'Postgraduate in Strategic Data Management and Analysis',
        'Bachelor in Computer Science',
      ],
      timeline: [
        { company: 'TOTVS', role: 'Staff Engineer', period: 'Mar 2026 — present', current: true, highlight: 'Plug-and-play internal CLI and AI Registry to accelerate corporate AI adoption at scale' },
        { company: 'MindCircle', role: 'Founder', period: 'Mar 2026 — present', current: true, highlight: 'End-to-end ownership: architecture to product, AI integration, real-time collaboration and UX' },
        { company: 'Blip', role: 'Staff Architect', period: 'May 2024 — Mar 2026', current: false, highlight: '−40% critical incidents; unified payment platform for PIX, Open Finance, Fiserv, Cielo' },
        { company: 'Blip', role: 'Software Architect', period: 'Aug 2023 — May 2024', current: false, highlight: '−60% project setup time; standardized Azure DevOps CI/CD pipelines across all squads' },
        { company: 'Blip', role: 'Tech Lead', period: 'Nov 2021 — Aug 2023', current: false, highlight: 'Led 3 squads building modular B2B products with React micro-frontends and .NET APIs' },
        { company: 'dti digital', role: 'Tech Lead', period: 'Jan 2021 — Nov 2021', current: false, highlight: '−70% partner integration time with PIX payment API for Grupo Martins' },
        { company: 'TCE-MG', role: 'Senior Developer', period: 'Oct 2019 — Jan 2021', current: false, highlight: '+35% system performance via query optimization and hexagonal architecture modernization' },
        { company: 'Raro Labs', role: 'Web Developer', period: 'Mar 2019 — Sep 2019', current: false, highlight: 'Automation systems and administrative modules for Banco BMG' },
      ],
    },

    contact: {
      meta: {
        title: 'Contact',
        description: "Get in touch — whether it's a collaboration, a project, or just a great conversation about architecture.",
      },
      label: 'Contact',
      heading: 'Get in Touch',
      sub: "Whether it's a collaboration, a project, or just a great conversation about architecture.",
      note: 'No contact form — just reach out directly.',
    },

    now: {
      meta: {
        title: 'Now',
        description: "What I'm currently working on, learning, and thinking about — updated June 2026.",
      },
      updated: 'Updated June 2026 — Contagem, MG, Brazil',
      workingOn: 'Working on',
      learning: 'Learning',
      readingWatching: 'Reading / Watching',
      basedIn: 'Based in',
      readingEmpty: 'Nothing specific right now — this space will be updated soon.',
      location: 'Contagem, Minas Gerais, Brazil',
      nowMovement: 'This page is inspired by the /now movement —',
      workItems: [
        {
          label: 'Staff Engineer at TOTVS',
          desc: 'Leading Engineering Experience — developer tooling, internal standards, and platform enablement across engineering teams.',
        },
        {
          label: 'MindCircle',
          desc: 'Building the platform as founder — from architecture to UI. Real-time collaboration, AI integration, and visual workspace tooling.',
        },
        {
          label: 'Myth Ecosystem',
          desc: 'Evolving the library suite — adding new packages, refining APIs, and improving documentation based on real-world usage.',
        },
      ],
      learnItems: [
        {
          label: 'AI tooling for developer workflows',
          desc: 'Exploring how LLMs integrate into development pipelines, code review automation, and engineering enablement tools.',
        },
        {
          label: 'Distributed systems patterns',
          desc: 'Going deeper on event sourcing, sagas, and eventual consistency — moving from theory to practical implementation.',
        },
      ],
    },

    labs: {
      meta: {
        title: 'Labs',
        description: 'Experiments and explorations — personal projects exploring new ideas, architectures, and technologies.',
      },
      label: 'Labs',
      heading1: 'Experiments &',
      heading2: 'Explorations',
      sub: 'Personal projects exploring new ideas, architectures, and technologies. Some are finished. Some are still alive. All of them taught something useful.',
      active: 'Active',
      wip: 'In Progress',
      complete: 'Complete',
    },

    games: {
      meta: {
        title: 'Games',
        description: 'Two browser games built for groups — no installation, no account.',
      },
      label: 'Games',
      heading: 'Play Something',
      sub: 'Two browser games built for groups — no installation, no account. Works offline, runs on any device.',
      originLabel: 'How it started',
      originP1: 'These games started as a way to explore browser-native capabilities — Service Workers, PWA manifests, offline-first architecture — without the overhead of a backend or a framework. The challenge was to build something genuinely useful and fun using only HTML, CSS, and vanilla JavaScript.',
      originP2: 'Both games were born from real social situations: needing something to play at a gathering with no preparation. They ended up becoming solid examples of what you can build when you lean fully into the web platform. No servers, no accounts, no friction — just open the link and play.',
    },

    products: {
      meta: {
        title: 'Products',
        description: 'What we build — MindCircle and the Myth Ecosystem.',
      },
      label: 'Products',
      heading: 'What We Build',
      sub: 'Two products at different scales — a collaborative SaaS platform and a production-ready .NET library ecosystem. Both built from the ground up with clean architecture, real-world usage, and zero tolerance for unnecessary complexity.',
      statusActive: 'Active',
      statusWip: 'In Progress',
      learnMore: 'Learn More →',
      ctaLabel: "Let's Work Together",
      ctaHeading1: 'Building something complex?',
      ctaHeading2: "Let's talk.",
      ctaBtn: 'Get in Touch',
    },

    mindcircle: {
      meta: {
        title: 'MindCircle',
        description: 'Visual thinking, powered by AI. A collaborative SaaS platform for knowledge management with real-time collaboration and GPT-4o integration.',
      },
      category: 'SaaS Platform',
      statusActive: 'Active',
      featuresLabel: 'Core Features',
      featuresHeading: 'Built for the way you think',
      stackLabel: 'Tech Stack',
      stackHeading: 'What powers it',
      ctaHeading: 'Stay tuned — early access coming soon.',
      ctaText: 'MindCircle is actively being built. Follow along on LinkedIn for updates and early access announcements.',
      ctaBtn: 'Follow on LinkedIn',
    },

    myth: {
      meta: {
        title: 'Myth Ecosystem',
        description: 'Production-ready .NET libraries for clean architecture. 11 NuGet packages for DDD, CQRS, validation, pipelines, and more.',
      },
      category: '.NET Library Ecosystem',
      statusActive: 'Active',
      packagesLabel: 'NuGet Packages',
      packagesHeading: '11 focused libraries',
      packagesSub: 'Each package solves one concern — and they all fit together.',
      philosophyLabel: 'Philosophy',
      whyHeading: 'Why Myth?',
      builtWithLabel: 'Built With',
      viewOnNuget: 'View on NuGet',
      gitlabSource: 'GitLab Source',
      ctaHeading: 'Ready to use Myth in your project?',
      ctaText: 'All packages are available on NuGet. Source code and documentation live on GitLab.',
      browseNuget: 'Browse on NuGet',
      exploreGitlab: 'Explore on GitLab',
      whyPoints: [
        { title: 'Zero boilerplate', description: 'Fluent APIs and smart conventions eliminate repetitive setup. Write what matters.' },
        { title: 'DDD native', description: 'Domain-Driven Design is first-class. Every library is designed around bounded contexts and aggregate roots.' },
        { title: 'Perfect integration', description: 'All 11 packages share a global service provider and follow the same conventions — they just work together.' },
      ],
    },

    blog: {
      meta: {
        title: 'Blog',
        description: 'Architecture, engineering culture, and open-source — written for developers.',
      },
      label: 'Blog',
      heading1: 'Thoughts',
      and: '&',
      heading2: 'Articles',
      sub: 'Architecture, engineering culture, and open-source — written for developers.',
      followLinkedIn: 'Follow on LinkedIn',
      postsSuffix: 'posts',
      noPostsTitle: 'No posts yet',
      noPostsSub: 'Content is being crafted. Follow on LinkedIn to be the first to know.',
    },

    footer: {
      tagline: 'Engineering ideas into reality —\nsoftware, systems, and open-source.',
      builtWith: 'Built with',
      deployedOn: '· Deployed on DigitalOcean',
    },

    components: {
      productActive: 'Active',
      productInDev: 'In Development',
      productViewDetails: 'View Details',
      gamePlayNow: 'Play Now',
      blogReadMore: 'Read More',
      blogViewLinkedIn: 'View on LinkedIn',
    },

    gamesContent: {
      impostor: {
        tagline: 'Who is hiding among you?',
        description: "A group deception game where one randomly selected player — the impostor — doesn't know the secret word. Normal players see the word and category; the impostor only sees the category. Through debate and subtle clues, the group tries to unmask the impostor before they guess the word.",
        features: [
          '50 categories with ~600 words',
          'Automatic role assignment',
          'No server or account needed',
          'Light/dark theme',
          'Works fully offline',
          'PWA-ready',
        ],
        howToPlay: [
          'Register 3 or more players',
          'Pass the phone to each player privately',
          'Normal players see the word + category',
          'The impostor sees only the category',
          'Debate, give clues, and vote for the impostor',
          'The impostor wins by guessing the word before being caught',
        ],
      },
      stop: {
        tagline: 'Race to fill the categories first',
        description: 'The classic Brazilian word game — Stop! / Adedanha — reimagined as a PWA. A random letter is chosen, players fill categories that start with that letter, and the first to yell "Stop!" ends the round. Features 143+ categories in 13 themed packs, shareable configurations via URL, and a full scoring system.',
        features: [
          '143+ categories in 13 themed packs',
          'Custom category creation',
          'Shareable config via URL',
          'Configurable rounds (3, 5, 7, 10, or infinite)',
          '100% offline with Service Worker',
          'Installable as native app (PWA)',
        ],
        howToPlay: [
          'Select your category packs (or create custom ones)',
          'Share the game link with friends',
          'A random letter is revealed — fill all categories fast',
          'First to press STOP ends the round',
          'Score: 10pts (unique answer), 5pts (tied), 0pts (invalid)',
          'Play multiple rounds and see the final ranking',
        ],
      },
    },

    labsContent: {
      syncr: {
        tagline: 'Media tracking with timestamp-based async discussions',
        description: 'Multi-platform tracker for movies, series, anime, and games. Unique twist: timestamp-anchored comments that sync to specific moments of playback, plus emoji reactions visible as timeline markers and weekly scheduling.',
      },
      buddy: {
        tagline: 'AI desktop pet with voice and personality',
        description: 'Interactive AI-powered desktop companion for Windows. Listens via wake-word or hotkey, responds with Edge TTS, reacts to your activity, and displays animated sprites with emotional states.',
      },
      deca: {
        tagline: 'Distributed reasoning engine for voice assistants',
        description: 'Architecture that separates AI reasoning (Mind) from hardware I/O (Node). The Mind handles memory, intent classification, and personality — while Nodes execute actions. Built for distributed, multi-device voice workflows.',
      },
      'sheet-budget': {
        tagline: 'Personal finance tracking — Google Sheets as your database',
        description: 'Zero-backend finance tracker that uses your own Google Sheets. Manages recurring expenses, installments, credit card invoices, and visualizes 6-month spending trends. Your data stays in your Drive.',
      },
    },

    productsContent: {
      mindcircle: {
        tagline: 'Visual thinking, powered by AI',
        description: 'Collaborative SaaS platform for knowledge management and idea organization, with AI assistance, real-time collaboration, and powerful visualization tools.',
        longDescription: 'MindCircle is a full-stack collaborative platform built for visual thinking and AI-assisted experiences. It combines a .NET 8 backend with a React 18 frontend, delivering real-time collaboration via SignalR, AI-powered content generation with OpenAI GPT-4o, diagram tools, and an internationalized interface — all built on top of the Myth ecosystem.',
        features: [
          { title: 'Real-time Collaboration', description: 'Live editing and presence indicators via SignalR hubs. Work together without friction.' },
          { title: 'AI Integration', description: 'GPT-4o powered idea generation, content summarization, and smart suggestions.' },
          { title: 'Visual Workspace', description: 'Diagrams with Excalidraw, Mermaid charts, mind maps, and rich markdown editor.' },
          { title: 'Feature Flags', description: 'Runtime-controlled feature rollouts with admin dashboard and A/B testing support.' },
          { title: 'Enterprise Auth', description: 'JWT authentication with httpOnly cookies and Google OAuth integration.' },
          { title: 'Clean Architecture', description: 'Domain, Application, Data layers with CQRS, event-driven architecture, and Myth ecosystem.' },
        ],
      },
      myth: {
        tagline: 'Production-ready .NET libraries for clean architecture',
        description: 'A comprehensive collection of 11+ NuGet packages for building robust, scalable .NET enterprise applications — with fluent APIs, minimal configuration, and DDD at the core.',
        longDescription: 'Myth is an opinionated, battle-tested ecosystem of .NET libraries that eliminates boilerplate while enforcing clean architecture, DDD, and modern engineering patterns. Each library solves a specific concern — from validation and pipelines to CQRS, repositories, and REST clients — and they integrate seamlessly through a global service provider.',
      },
    },
  },
} as const;

export type Translations = typeof translations.pt;
