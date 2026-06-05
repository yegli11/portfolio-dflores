# Portafolio — David Flores

Portafolio personal de **David Flores**, desarrollador web full stack. Estética
tech/cyberpunk con acento neón sobre fondo oscuro, animaciones fluidas y enfoque
en performance, accesibilidad y SEO.

## Stack

- **Next.js 16** (App Router) + **React 19**
- **TypeScript** en modo `strict`
- **Tailwind CSS v4** con tokens de diseño centralizados
- **Framer Motion** para animaciones y micro-interacciones
- **lucide-react** para iconografía
- **next/font** (Space Grotesk · Inter · JetBrains Mono)
- **ESLint + Prettier**

## Arquitectura

Componentes organizados con **Atomic Design**:

```
src/
├── app/            # Rutas (App Router), layout, metadata, JSON-LD
├── components/
│   ├── atoms/      # Button, Badge, Icon, Text, BrandIcon, Reveal
│   ├── molecules/  # SkillCard, ProjectCard, NavItem, SocialLink, ...
│   ├── organisms/  # Header, HeroSection, SkillsGrid, ContactForm, ...
│   └── templates/  # MainTemplate
├── data/           # Contenido tipado (about, skills, experience, ...)
├── hooks/          # useScrollSpy, usePointerGlow
├── lib/            # Utilidades (cn, variantes de motion)
└── types/          # Interfaces globales
```

El contenido vive en `src/data/` separado de la UI: editar un dato no requiere
tocar componentes.

## Scripts

```bash
npm run dev           # Servidor de desarrollo
npm run build         # Build de producción
npm run start         # Servir el build
npm run lint          # ESLint
npm run format        # Prettier --write
npm run format:check  # Prettier --check
```

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Personalización

Reemplaza los datos placeholder en `src/data/` (about, skills, experience,
projects, contact) y añade tu CV en `public/cv-david-flores.pdf`. Los colores y
tipografías se controlan desde los tokens en `src/app/globals.css`.
