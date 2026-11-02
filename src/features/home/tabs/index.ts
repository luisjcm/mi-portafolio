// src/features/home/tabs/index.ts
// =============================================================================
// REGISTRO DE PESTAÑAS DE LA PORTADA.
// Para AÑADIR una pestaña: crea su componente en esta carpeta y agrega UNA
// línea aquí. Para cambiar el ORDEN: reordena las líneas.
// Las pestañas se cargan solo cuando el visitante las abre (lazy), lo que
// reduce el peso inicial de la página. "Proyectos" va normal porque es la
// primera que se ve.
// =============================================================================
import { lazy, type ComponentType } from 'react';
import ProjectExplorer from '../../../components/projects/ProjectExplorer';

export interface HomeTab {
  label: string;
  Component: ComponentType;
}

export const HOME_TABS: HomeTab[] = [
  { label: 'Proyectos', Component: ProjectExplorer },
  { label: 'Stack Técnico', Component: lazy(() => import('./StackTab')) },
  { label: 'Trayectoria', Component: lazy(() => import('./TrayectoriaTab')) },
  { label: 'Formación', Component: lazy(() => import('./FormacionTab')) },
];
