// src/config/profile.ts
// =============================================================================
// DATOS BIOGRÁFICOS DE LA PORTADA (la lista con iconitos bajo tu nombre).
// DÓNDE CAMBIAR: edita los textos aquí. `icon` debe ser una clave de
// components/icons/ProfileIcons.tsx (globe, code, monitor, bolt, pin).
// =============================================================================
import type { ProfileIconName } from '../components/icons/ProfileIcons';

export interface ProfileDetail {
  icon: ProfileIconName;
  text: string;
}

export const PROFILE_DETAILS: ProfileDetail[] = [
  { icon: 'globe', text: 'Venezolano' },
  { icon: 'code', text: 'Ingeniero de Sistemas + Desarrollador Web Freelance' },
  { icon: 'monitor', text: 'Analista de HelpDesk y Soporte Técnico IT en Avior Airlines' },
  {
    icon: 'bolt',
    text: 'Centrado en el rendimiento y la experiencia de usuario, respaldado por años de experiencia en la resolución de problemas técnicos en un entorno corporativo.',
  },
  { icon: 'pin', text: 'Barcelona, VZ • GMT-4' },
];

// Foto de perfil (archivo dentro de /public)
export const AVATAR_SRC = '/assets/perfil.jpg';
