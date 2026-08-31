export interface TimelineItem {
  period: string;
  role: string;
  current?: boolean;
  description: string;
  stack: string[];
}

export const timeline: TimelineItem[] = [
  {
    period: "nov 2025 — atual",
    role: "Único desenvolvedor",
    current: true,
    description:
      "Assumi sozinho toda a área técnica: backend, frontend, integrações e infraestrutura de 4 projetos estratégicos. Não tem mais ninguém pra revisar antes de ir pro ar.",
    stack: ["C# .NET", "Vue.js", "CQRS", "DDD", "Entity Framework Core"],
  },
  {
    period: "2024 — nov 2025",
    role: "Full Stack Pleno",
    description:
      "Passei a desenhar a arquitetura das integrações de alto volume — foi quando comecei a levar fila e throttling a sério, depois de ver o que acontece sem isso.",
    stack: ["C# .NET", "Vue.js", "CQRS", "Entity Framework Core"],
  },
  {
    period: "mar 2022 — 2024",
    role: "Desenvolvedor Backend Júnior",
    description: "Entrei em um time ágil sem saber o que era CQRS e aprendi na prática, mexendo em produção desde o primeiro mês.",
    stack: ["C# .NET", "Entity Framework Core", "Git Flow"],
  },
];

export interface Project {
  code: string;
  name: string;
  badge: string;
  description: string;
  stack: string[];
  href: string;
  linkLabel: string;
}

export const personalProjects: Project[] = [
  {
    code: "P01",
    name: "NotificationHub",
    badge: "Pessoal",
    description:
      "Fila de notificação multicanal com retry configurável e Dead Letter Queue. Construí do zero pra estudar o que uso no trabalho — RabbitMQ, Clean Architecture, CQRS — fora da pressão de produção.",
    stack: ["RabbitMQ", "Docker", "PostgreSQL", "CQRS"],
    href: "https://github.com/Bieldev1/notification-hub",
    linkLabel: "Código",
  },
];

export const companyProjects: Project[] = [
  {
    code: "R01",
    name: "Plataforma Omnichannel de Gestão de Demandas",
    badge: "2022 — atual",
    description:
      "SaaS que centraliza WhatsApp, e-mail, Messenger, chatbot e autoatendimento em tickets rastreáveis, usado por cerca de 50 usuários ativos. É o que eu mais mexo, todo dia.",
    stack: ["C# .NET", "ASP.NET Core", "Entity Framework Core", "CQRS", "DDD", "Vue.js", "SQL Server", "Azure"],
    href: "#contato",
    linkLabel: "Detalhes",
  },
  {
    code: "R02",
    name: "Sistema de Normalização Geoespacial de Endereços",
    badge: "2026 — atual",
    description:
      "Validação e normalização de endereço em larga escala, cruzando Google Maps, Correios e OpenAI. Migrei a integração de IA pra Responses API no meio do caminho.",
    stack: ["C# .NET", "Google Maps API", "Correios API", "OpenAI API"],
    href: "#contato",
    linkLabel: "Detalhes",
  },
  {
    code: "R03",
    name: "Ferramenta de Higienização de Mailing",
    badge: "2026 — atual",
    description:
      "Integração com a API do C6 Bank, com fila e throttling pra não estourar o rate limit deles — a integração que mais me ensinou sobre proteger disponibilidade.",
    stack: ["C# .NET", "Vue.js", "C6 Bank API"],
    href: "#contato",
    linkLabel: "Detalhes",
  },
];

export interface ArchLayer {
  name: string;
  items: string[];
}

export const archLayers: ArchLayer[] = [
  { name: "API", items: ["Controllers", "Middlewares"] },
  { name: "Domain", items: ["Entities", "Domain Events"] },
  { name: "Infra", items: ["Repositories", "EF Core"] },
  { name: "Tests", items: ["xUnit"] },
];

export const archPatterns = ["Clean Architecture", "CQRS", "DDD", "SOLID", "Result Pattern"];

export interface SkillGroup {
  title: string;
  items: { name: string; percent: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Back-end",
    items: [
      { name: "C# / .NET 8+", percent: 95 },
      { name: "ASP.NET Core", percent: 92 },
      { name: "Entity Framework Core", percent: 90 },
      { name: "ASP.NET Core Identity / MFA / RBAC", percent: 85 },
      { name: "APIs REST", percent: 92 },
    ],
  },
  {
    title: "Front-end",
    items: [
      { name: "Vue.js / Composition API", percent: 88 },
      { name: "TypeScript", percent: 75 },
      { name: "Vuetify", percent: 78 },
    ],
  },
  {
    title: "Arquitetura",
    items: [
      { name: "Clean Architecture / DDD", percent: 90 },
      { name: "CQRS / SOLID", percent: 90 },
      { name: "Microsserviços", percent: 88 },
    ],
  },
  {
    title: "Integrações & Cloud",
    items: [
      { name: "WhatsApp / Messenger API", percent: 85 },
      { name: "Google Maps / Correios / OpenAI", percent: 80 },
      { name: "Microsoft Azure", percent: 78 },
    ],
  },
];
