/**
 * Cores oficiais de marca de cada tecnologia, usadas como acento nos badges
 * de stack (borda esquerda / ponto). Fonte: brand guidelines de cada projeto
 * (ou a cor de linguagem do GitHub Linguist quando não há brand color oficial).
 */
export const techColors: Record<string, string> = {
  "C# .NET": "#178600",
  ".NET": "#512bd4",
  "ASP.NET Core": "#512bd4",
  "Entity Framework Core": "#512bd4",
  "Vue.js": "#41b883",
  TypeScript: "#3178c6",
  "Tailwind CSS": "#06b6d4",
  "SQL Server": "#cc2927",
  PostgreSQL: "#336791",
  RabbitMQ: "#ff6600",
  Docker: "#2496ed",
  "Docker Compose": "#2496ed",
  Azure: "#0078d4",
  CQRS: "#473a86",
  DDD: "#473a86",
  SOLID: "#473a86",
  "Clean Architecture": "#473a86",
  "Result Pattern": "#473a86",
  Microsserviços: "#473a86",
  xUnit: "#845ef7",
  "Git Flow": "#f05033",
  "WhatsApp API": "#25d366",
  "Messenger API": "#0866ff",
  "Google Maps API": "#4285f4",
  "Correios API": "#f7c948",
  "OpenAI API": "#10a37f",
  "C6 Bank API": "#ffdd00",
  Vuetify: "#1867c0",
  IMAP: "#6e5f45",
  "Background Service": "#512bd4",
  "PDF Generation": "#e8590c",
  Storage: "#6e5f45",
  "State Machine": "#845ef7",
};

export function techColor(name: string): string {
  return techColors[name] ?? "#6e5f45";
}
