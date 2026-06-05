import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Aurora Dashboard",
    description:
      "Dashboard analítico en tiempo real con gráficas interactivas y modo oscuro.",
    stack: ["Next.js", "TypeScript", "Recharts", "Tailwind"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/davidflores/aurora",
    featured: true,
  },
  {
    title: "Nebula Store",
    description:
      "E-commerce headless con carrito persistente y checkout con Stripe.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/davidflores/nebula",
    featured: true,
  },
];
