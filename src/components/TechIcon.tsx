import React from 'react';

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function TechIcon({ name, className = "text-blue-500", size = 18 }: TechIconProps) {
  const iconProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className
  };

  switch (name.toLowerCase()) {
    // --- DESARROLLO WEB & APPS ---
    case 'web':
    case 'globe':
      return (
        <svg {...iconProps}>
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );

    case 'app':
    case 'apps':
    case 'mobile':
      return (
        <svg {...iconProps}>
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
        </svg>
      );

    // --- CIBERSEGURIDAD & PROTECCIÓN ---
    case 'security':
    case 'ciberseguridad':
    case 'shield':
    case 'auth':
      return (
        <svg {...iconProps}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );

    case 'lock':
      return (
        <svg {...iconProps}>
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      );

    // --- LENGUAJES & FRAMEWORKS ---
    case 'python':
      return (
        <svg {...iconProps}>
          <path d="M12 2c-3.3 0-4 1.5-4 3v2h8V6c0-1.5-.7-3-4-3z" />
          <path d="M12 22c3.3 0 4-1.5 4-3v-2H8v1c0 1.5.7 3 4 3z" />
          <path d="M4 10c0-1.7 1.3-3 3-3h1v4H5c-1 0-1-.5-1-1z" />
          <path d="M20 14c0 1.7-1.3 3-3 3h-1v-4h3c1 0 1 .5 1 1z" />
          <circle cx="10" cy="4.5" r="0.8" fill="currentColor" />
          <circle cx="14" cy="19.5" r="0.8" fill="currentColor" />
        </svg>
      );

    case 'react':
      return (
        <svg {...iconProps}>
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(0 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="4.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.6" fill="currentColor" />
        </svg>
      );

    case 'js':
    case 'javascript':
      return (
        <svg {...iconProps}>
          {/* Recuadro redondeado */}
          <rect x="3" y="3" width="18" height="18" rx="3" />
          {/* Letra J compactada al centro */}
          <path d="M9.5 9v5a1.5 1.5 0 0 1-3 0" />
          {/* Letra S compactada y centrada */}
          <path d="M15.5 10c-.3-.7-1-1-1.8-1-1 0-1.7.6-1.7 1.5 0 1.7 3.5 1 3.5 2.8 0 1-.8 1.7-1.8 1.7-1 0-1.8-.6-2.1-1.2" />
        </svg>
      );

    case 'node':
    case 'nodejs':
      return (
        <svg {...iconProps}>
          <polygon points="12 2 21 7.2 21 16.8 12 22 3 16.8 3 7.2 12 2" />
          <polyline points="12 2 12 22" />
          <polyline points="21 7.2 12 12 3 7.2" />
        </svg>
      );

    case 'sql':
    case 'postgres':
    case 'postgresql':
      return (
        <svg {...iconProps}>
          <ellipse cx="12" cy="6" rx="8" ry="3" />
          <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
          <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
          <line x1="16" y1="18" x2="20" y2="22" />
        </svg>
      );

    case 'git':
    case 'github':
      return (
        <svg {...iconProps}>
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <circle cx="6" cy="18" r="2" />
          <line x1="6" y1="8" x2="6" y2="16" />
          <path d="M6 12a9 9 0 0 0 9 5.2" />
        </svg>
      );

    // --- ARQUITECTURA / SISTEMAS ---
    case 'frontend':
    case 'layout':
      return (
        <svg {...iconProps}>
          <rect x="2" y="3" width="20" height="15" rx="2" />
          <line x1="2" y1="8" x2="22" y2="8" />
          <line x1="8" y1="8" x2="8" y2="18" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="18" x2="12" y2="21" />
        </svg>
      );

    case 'backend':
    case 'api':
      return (
        <svg {...iconProps}>
          <rect x="4" y="4" width="16" height="6" rx="1.5" />
          <rect x="4" y="14" width="16" height="6" rx="1.5" />
          <circle cx="7" cy="7" r="0.8" fill="currentColor" />
          <circle cx="7" cy="17" r="0.8" fill="currentColor" />
          <line x1="14" y1="7" x2="17" y2="7" />
          <line x1="14" y1="17" x2="17" y2="17" />
        </svg>
      );

    case 'terminal':
    case 'linux':
    case 'bash':
      return (
        <svg {...iconProps}>
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <polyline points="6 9 10 12 6 15" />
          <line x1="13" y1="15" x2="18" y2="15" />
        </svg>
      );

    case 'server':
    case 'devops':
      return (
        <svg {...iconProps}>
          <rect x="2" y="2" width="20" height="8" rx="2" />
          <rect x="2" y="14" width="20" height="8" rx="2" />
          <line x1="6" y1="6" x2="6.01" y2="6" />
          <line x1="6" y1="18" x2="6.01" y2="18" />
        </svg>
      );

    case 'code':
    default:
      return (
        <svg {...iconProps}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
  }
}