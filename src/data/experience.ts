import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    company: "Nova Tech Studio",
    role: "Senior Frontend Developer",
    period: "2023 — Actualidad",
    description:
      "Lidero el desarrollo del frontend de una plataforma SaaS. Migré la app a Next.js App Router, reduje el tiempo de carga un 40% y establecí el design system interno.",
    stack: ["Next.js", "TypeScript", "Tailwind", "GraphQL"],
  },
  {
    company: "PixelForge",
    role: "Full Stack Developer",
    period: "2021 — 2023",
    description:
      "Desarrollé e-commerce y dashboards a medida para clientes. Implementé pasarelas de pago y APIs REST con Node.js.",
    stack: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2020 — 2021",
    description:
      "Landing pages y sitios corporativos para pymes, enfocados en performance y SEO.",
    stack: ["JavaScript", "React", "Sass"],
  },
];
