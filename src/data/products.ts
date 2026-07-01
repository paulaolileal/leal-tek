export interface ProductFeature {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  status: 'active' | 'wip';
  techStack: string[];
  features: ProductFeature[];
  href: string;
  externalUrl?: string;
  nugetUrl?: string;
  githubUrl?: string;
  logo?: string;
}

export interface MythPackage {
  name: string;
  logo?: string;
  description: string;
  nugetUrl: string;
}

export const products: Product[] = [
  {
    id: 'mindcircle',
    name: 'MindCircle',
    tagline: 'Your ideas deserve better than messy notes',
    description:
      'AI-powered visual workspace for brainstorming, documentation, and execution. Real-time collaboration, contextual AI suggestions, and one-click document generation.',
    longDescription:
      'MindCircle transforms creative chaos into structured execution. An infinite collaborative canvas combined with AI that reads your full context and suggests next steps — not just words, but ideas that actually fit. From the first sticky note to the final stakeholder brief, everything happens in one visual workspace.',
    status: 'active',
    techStack: [
      '.NET 8',
      'ASP.NET Core',
      'React 18',
      'TypeScript',
      'SignalR',
      'GPT-4o-mini',
      'PostgreSQL',
      'Tailwind CSS',
      'Stripe',
      'Myth Ecosystem',
    ],
    features: [
      {
        title: 'Infinite Canvas',
        description:
          'Capture ideas anywhere on an infinite collaborative canvas. Speed over perfection — raw, incomplete, messy ideas are welcome.',
      },
      {
        title: 'Contextual AI',
        description:
          'AI reads your entire canvas before suggesting. Never gets stuck. Click any node and get 1-3 ideas that actually fit the context.',
      },
      {
        title: 'Structured Execution',
        description:
          'Evolve nodes from Idea → Refining → Progress → Done. Generate a professional document from your canvas in one click.',
      },
      {
        title: 'Presentation Mode',
        description:
          'Lock the canvas into presentation mode. Guide your audience through your thinking step by step, with AI panels fully active.',
      },
      {
        title: 'Perspectives',
        description:
          'Color nodes by type: Risk, Opportunity, Action, Decision, Assumption. Instant visual clarity on what needs attention.',
      },
      {
        title: 'AI Insights',
        description:
          'Proactive analysis of your full canvas before momentum fades. Tells you what is solid, what is missing, and exactly what to do next.',
      },
    ],
    href: '/products/mindcircle',
    externalUrl: 'https://mindcircle.app',
    logo: '/images/mindcircle-icon.jpg',
  },
  {
    id: 'myth',
    name: 'Myth Ecosystem',
    tagline: 'Production-ready .NET libraries for clean architecture',
    description:
      'A comprehensive collection of 12 NuGet packages for building robust, scalable .NET enterprise applications — with fluent APIs, minimal configuration, and DDD at the core.',
    longDescription:
      'Myth is an opinionated, battle-tested ecosystem of .NET libraries that eliminates boilerplate while enforcing clean architecture, DDD, and modern engineering patterns. Each library solves a specific concern — from validation and pipelines to CQRS, repositories, and REST clients — and they integrate seamlessly through a global service provider.',
    status: 'active',
    techStack: ['.NET 10', 'C#', 'ASP.NET Core', 'Entity Framework Core', 'xUnit', 'NuGet'],
    features: [
      {
        title: 'Myth.Flow',
        description: 'Pipeline orchestration with fluent API, retry policies, and OpenTelemetry.',
      },
      {
        title: 'Myth.Flow.Actions',
        description: 'CQRS and event-driven architecture with IDispatcher, RabbitMQ, and Kafka.',
      },
      {
        title: 'Myth.Guard',
        description: 'Context-aware validation with async service integration and Problem Details.',
      },
      {
        title: 'Myth.Repository',
        description: 'Clean repository abstractions with read/write segregation and Specification.',
      },
      {
        title: 'Myth.Rest',
        description: 'Fluent REST client with resilience patterns and circuit breaker.',
      },
      {
        title: 'Myth.Morph',
        description: 'Schema-based object transformation with async support and DI integration.',
      },
    ],
    href: '/products/myth',
    nugetUrl: 'https://www.nuget.org/profiles/paulaolileal',
    githubUrl: 'https://github.com/paulaolileal/myth',
    logo: '/images/myth-logo.png',
  },
];

export const mythPackages: MythPackage[] = [
  {
    name: 'Myth.Commons',
    logo: '/images/myth-logo.png',
    description: 'Foundation utilities, value objects, JSON extensions, and global service provider management for clean architecture applications.',
    nugetUrl: 'https://www.nuget.org/packages/Myth.Commons',
  },
  {
    name: 'Myth.DependencyInjection',
    logo: '/images/myth-dependency-injection-logo.png',
    description: 'Convention-based auto-registration and assembly scanning. Eliminate manual DI wiring with TypeProvider and interface mapping.',
    nugetUrl: 'https://www.nuget.org/packages/Myth.DependencyInjection',
  },
  {
    name: 'Myth.Flow',
    logo: '/images/myth-flow-logo.png',
    description: 'Fluent pipeline orchestration with Result pattern, OpenTelemetry tracing, retry with exponential backoff, and per-step DI resolution.',
    nugetUrl: 'https://www.nuget.org/packages/Myth.Flow',
  },
  {
    name: 'Myth.Flow.Actions',
    logo: '/images/myth-flow-actions-logo.png',
    description: 'CQRS and event-driven architecture with IDispatcher, ICommandHandler, IQueryHandler, and event bus (InMemory, RabbitMQ, Kafka).',
    nugetUrl: 'https://www.nuget.org/packages/Myth.Flow.Actions',
  },
  {
    name: 'Myth.Guard',
    logo: '/images/myth-guard-logo.png',
    description: '100+ fluent validation rules with context-aware scoping (Create, Update, Delete). ASP.NET Core middleware returns RFC 9457 Problem Details.',
    nugetUrl: 'https://www.nuget.org/packages/Myth.Guard',
  },
  {
    name: 'Myth.Morph',
    logo: '/images/myth-morph-logo.png',
    description: 'Schema-based object transformation with async support, DI integration, and IMorphable<T> for custom mapping scenarios.',
    nugetUrl: 'https://www.nuget.org/packages/Myth.Morph',
  },
  {
    name: 'Myth.Repository',
    logo: '/images/myth-repository-logo.png',
    description: 'Clean read/write repository abstractions: IReadRepositoryAsync<T>, IWriteRepositoryAsync<T>, Specification support, and pagination.',
    nugetUrl: 'https://www.nuget.org/packages/Myth.Repository',
  },
  {
    name: 'Myth.Repository.EntityFramework',
    logo: '/images/myth-repository-ef-logo.png',
    description: 'EF Core implementations with BaseContext (auto-discovers IEntityTypeConfiguration<T>), Unit of Work, savepoints, and AddRepositories() DI.',
    nugetUrl: 'https://www.nuget.org/packages/Myth.Repository.EntityFramework',
  },
  {
    name: 'Myth.Specification',
    logo: '/images/myth-specification-logo.png',
    description: 'Composable query specifications via SpecBuilder<T>. Chain .And()/.Or()/.Not()/.AndIf()/.OrIf() with ordering, skip/take, and DistinctBy.',
    nugetUrl: 'https://www.nuget.org/packages/Myth.Specification',
  },
  {
    name: 'Myth.Rest',
    logo: '/images/myth-rest-logo.png',
    description: 'Fluent REST client with retry (fixed, exponential, jitter), circuit breaker, Bearer/Basic/certificate auth, and IHttpClientFactory integration.',
    nugetUrl: 'https://www.nuget.org/packages/Myth.Rest',
  },
  {
    name: 'Myth.Testing',
    logo: '/images/myth-testing-logo.png',
    description: 'xUnit base classes with DI via AddService<T>(), Bogus Faker, EF Core in-memory database, Moq, FluentAssertions, and HTTP mocking.',
    nugetUrl: 'https://www.nuget.org/packages/Myth.Testing',
  },
  {
    name: 'Myth.Tool',
    logo: '/images/myth-logo.png',
    description: 'Global CLI for CQRS, DDD, and Clean Architecture code generation. Scaffold commands, queries, entities, and models with Scriban templates.',
    nugetUrl: 'https://www.nuget.org/packages/Myth.Tool',
  },
];
