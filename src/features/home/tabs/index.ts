// src/features/home/tabs/index.ts
import { lazy, type ComponentType } from 'react';
import ProjectExplorer from '../../../components/projects/ProjectExplorer';

export interface HomeTab {
  label: string;
  Component: ComponentType;
  preload?: () => Promise<unknown>;
}

export const HOME_TABS: HomeTab[] = [
  { label: 'Proyectos', Component: ProjectExplorer },
  {
    label: 'Stack Técnico',
    Component: lazy(() => import('./StackTab')),
    preload: () => import('./StackTab'),
  },
  {
    label: 'Trayectoria',
    Component: lazy(() => import('./TrayectoriaTab')),
    preload: () => import('./TrayectoriaTab'),
  },
  {
    label: 'Formación',
    Component: lazy(() => import('./FormacionTab')),
    preload: () => import('./FormacionTab'),
  },
];