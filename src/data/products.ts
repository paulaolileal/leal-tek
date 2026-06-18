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
  gitlabUrl?: string;
  logo?: string;
}

export const products: Product[] = [
  {
    id: 'mindcircle',
    name: 'MindCircle',
    tagline: 'Visual thinking, powered by AI',
    description:
      'Collaborative SaaS platform for knowledge management and idea organization, with AI assistance, real-time collaboration, and powerful visualization tools.',
    longDescription:
      'MindCircle is a full-stack collaborative platform built for visual thinking and AI-assisted experiences. It combines a .NET 8 backend with a React 18 frontend, delivering real-time collaboration via SignalR, AI-powered content generation with OpenAI GPT-4o, diagram tools, and an internationalized interface — all built on top of the Myth ecosystem.',
    status: 'active',
    techStack: [
      '.NET 8',
      'ASP.NET Core',
      'React 18',
      'TypeScript',
      'SignalR',
      'OpenAI',
      'PostgreSQL',
      'Tailwind CSS',
      'Excalidraw',
    ],
    features: [
      {
        title: 'Real-time Collaboration',
        description:
          'Live editing and presence indicators via SignalR hubs. Work together without friction.',
      },
      {
        title: 'AI Integration',
        description:
          'GPT-4o powered idea generation, content summarization, and smart suggestions.',
      },
      {
        title: 'Visual Workspace',
        description:
          'Diagrams with Excalidraw, Mermaid charts, mind maps, and rich markdown editor.',
      },
      {
        title: 'Feature Flags',
        description:
          'Runtime-controlled feature rollouts with admin dashboard and A/B testing support.',
      },
      {
        title: 'Enterprise Auth',
        description:
          'JWT authentication with httpOnly cookies and Google OAuth integration.',
      },
      {
        title: 'Clean Architecture',
        description:
          'Domain, Application, Data layers with CQRS, event-driven architecture, and Myth ecosystem.',
      },
    ],
    href: '/products/mindcircle',
    gitlabUrl: 'https://gitlab.com/users/paulaolileal/',
    logo: '/images/mindcircle-icon.svg',
  },
  {
    id: 'myth',
    name: 'Myth Ecosystem',
    tagline: 'Production-ready .NET libraries for clean architecture',
    description:
      'A comprehensive collection of 11+ NuGet packages for building robust, scalable .NET enterprise applications — with fluent APIs, minimal configuration, and DDD at the core.',
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
        description: 'Compile-time safe object mapping with zero reflection at runtime.',
      },
    ],
    href: '/products/myth',
    nugetUrl: 'https://www.nuget.org/profiles/paulaolileal',
    gitlabUrl: 'https://gitlab.com/users/paulaolileal/',
    logo: '/images/myth-logo.png',
  },
];

export const mythPackages = [
  { name: 'Myth.Commons',                   logo: '/images/myth-logo.png',                       description: 'Foundation utilities, value objects, global service provider, pagination.' },
  { name: 'Myth.DependencyInjection',        logo: '/images/myth-dependency-injection-logo.png',  description: 'Convention-based auto-registration and assembly scanning.' },
  { name: 'Myth.Flow',                       logo: '/images/myth-flow-logo.png',                  description: 'Pipeline orchestration with fluent API, retry, OpenTelemetry.' },
  { name: 'Myth.Flow.Actions',               logo: '/images/myth-flow-actions-logo.png',          description: 'CQRS and event-driven architecture with IDispatcher and event bus.' },
  { name: 'Myth.Guard',                      logo: '/images/myth-guard-logo.png',                 description: 'Fluent, context-aware validation with async integration.' },
  { name: 'Myth.Repository',                 logo: '/images/myth-repository-logo.png',            description: 'Clean read/write repository abstractions.' },
  { name: 'Myth.Repository.EntityFramework', logo: '/images/myth-repository-ef-logo.png',        description: 'EF Core implementations with BaseContext and Unit of Work.' },
  { name: 'Myth.Specification',              logo: '/images/myth-specification-logo.png',         description: 'Composable query specifications with fluent API.' },
  { name: 'Myth.Rest',                       logo: '/images/myth-rest-logo.png',                  description: 'Modern REST client with resilience and circuit breaker.' },
  { name: 'Myth.Morph',                      logo: '/images/myth-morph-logo.png',                 description: 'Compile-time safe object transformations, zero reflection.' },
  { name: 'Myth.Testing',                    logo: '/images/myth-testing-logo.png',               description: 'Pre-configured test base classes, HTTP mocking, Bogus, FluentAssertions.' },
];
