// src/data/projects.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  category: 'web' | 'system' | 'design';
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 1,
    title: "Plataforma Inmobiliaria Alicante",
    description: "Desarrollo y optimización de plataforma web enfocada en conversión y SEO técnico para el mercado europeo.",
    tags: ["WordPress", "SEO", "UI/UX"],
    category: "web",
    link: "#"
  },
  {
    id: 2,
    title: "Sistema de Gestión de Soporte",
    description: "Automatización de tickets y flujo de trabajo para equipos de Help Desk, optimizando tiempos de respuesta.",
    tags: ["React", "Node.js", "PostgreSQL"],
    category: "system",
    link: "#"
  },
  {
    id: 3,
    title: "Dashboard de Inventario IT",
    description: "Control de activos tecnológicos y hardware para infraestructura empresarial.",
    tags: ["TypeScript", "Tailwind", "Vite"],
    category: "system"
  },
  {
    id: 4,
    title: "Landing Page Corporativa",
    description: "Diseño minimalista y optimizado para servicios de ingeniería y consultoría técnica.",
    tags: ["React", "Framer Motion"],
    category: "web"
  }
];