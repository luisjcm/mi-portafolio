// src/services/projects.ts
// =============================================================================
// SERVICIO DE PROYECTOS — única puerta de entrada a los archivos .md.
// Las páginas NO leen los .md directamente: llaman a getProjects() o
// getProjectBySlug(). DÓNDE CAMBIAR: si algún día los proyectos vienen de una
// API, solo se modifica este archivo.
// =============================================================================
import frontMatter from 'front-matter';

// Lee todos los .md de /content/proyectos como texto (una sola vez, al compilar)
const mdFiles = import.meta.glob('../content/proyectos/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

// Valor de "order" para proyectos que no lo definen: van al final.
const DEFAULT_ORDER = 999;

// Sub-proyectos que algunos .md definen en su frontmatter (colecciones).
export interface SubProject {
  id: string;
  title: string;
  client: string;
  description: string;
  tech: string[];
  image?: string;
  gallery?: string[];
}

// Campos del frontmatter. Si agregas un campo nuevo a los .md, decláralo aquí.
export interface ProjectMeta {
  title: string;
  description: string;
  category?: string;
  techStack?: string[];
  imageUrl?: string;
  images?: string[];
  wireframeType?: string;
  projectUrl?: string;
  isNew?: boolean;
  badge?: string;
  order?: number;
  subProjects?: SubProject[];
}

export interface Project extends ProjectMeta {
  techStack: string[]; // siempre presente (por defecto [])
  slug: string;
  body: string; // contenido markdown (lo usa ProjectDetail)
}

// Convierte cada archivo en un Project, ya ordenado por "order".
const allProjects: Project[] = Object.entries(mdFiles)
  .map(([path, raw]) => {
    const slug = path.split('/').pop()!.replace('.md', '');
    const { attributes, body } = frontMatter<ProjectMeta>(raw);
    // techStack siempre es un arreglo (aunque el .md no lo defina)
    return { ...attributes, techStack: attributes.techStack ?? [], slug, body };
  })
  .sort((a, b) => (a.order ?? DEFAULT_ORDER) - (b.order ?? DEFAULT_ORDER));

export const getProjects = (): Project[] => allProjects;

export const getProjectBySlug = (slug: string): Project | undefined =>
  allProjects.find((p) => p.slug === slug);