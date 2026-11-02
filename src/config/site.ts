// src/config/site.ts
// =============================================================================
// CONFIGURACIÓN DEL SITIO — datos que se repiten en varias páginas.
// DÓNDE CAMBIAR: edita aquí y se actualiza en Home, Contacto, etc.
// =============================================================================

export const SITE = {
  name: 'Luis Jesus Curbata',
  handle: 'luisjcm',
  email: 'contacto@luisjcm.com',
  cvPath: '/CV_Luis_Curbata.pdf', // archivo dentro de /public
} as const;

// Número de WhatsApp en formato internacional, sin "+" ni espacios.
const WHATSAPP_NUMBER = '584248887150';
// Cómo se muestra el número en pantalla (Contacto)
export const WHATSAPP_DISPLAY = '+58 424 888 7150';

export const LINKS = {
  linkedin: 'https://linkedin.com/in/luisjcm',
  github: 'https://github.com/luisjcm',

  // Enlace de WhatsApp. El mensaje es opcional.
  whatsapp: (message?: string) =>
    `https://wa.me/${WHATSAPP_NUMBER}${message ? `?text=${encodeURIComponent(message)}` : ''}`,
} as const;

// Mensaje precargado del botón "Contactar" de la portada.
export const CONTACT_MESSAGE = 'Hola Luis, vi tu portafolio y me gustaría contactarte';