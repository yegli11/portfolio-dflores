import type { SkillGroup } from "@/types";

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Redux Toolkit",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "NestJS", "REST", "GraphQL", "Prisma"],
  },
  {
    category: "Bases de datos",
    items: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "DevOps & Tools",
    items: [
      "Git",
      "Docker",
      "Vercel",
      "CI/CD (GitHub Actions)",
      "Jest",
      "Figma",
    ],
  },
];
