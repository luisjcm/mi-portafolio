// src/components/HeroProfile.tsx
import React, { useState } from 'react';
import { FiFileText, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';
import { useToast } from '../context/ToastContext';
import { HudAction, HudFrame } from './hud';

const WHATSAPP_URL =
  'https://wa.me/584248887150?text=Hola%20Luis,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactarte';
const CV_PATH = '/CV_Luis_Curbata.pdf';

interface ProfileRow {
  label: string;
  value: React.ReactNode;
}

const PROFILE_ROWS: ProfileRow[] = [
  { label: 'Origen', value: 'Venezolano' },
  { label: 'Rol', value: 'Ingeniero de Sistemas + Desarrollador Web Freelance' },
  { label: 'Cargo', value: 'Analista de HelpDesk y Soporte Técnico IT en Avior Airlines' },
  {
    label: 'Enfoque',
    value:
      'Centrado en el rendimiento y la experiencia de usuario, respaldado por años de experiencia en la resolución de problemas técnicos en un entorno corporativo.',
  },
  {
    label: 'Base',
    value: (
      <>
        Barcelona, VZ <span className="ml-1.5 font-mono text-hud-cyan">GMT-4</span>
      </>
    ),
  },
];

const HeroProfile: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const { showToast } = useToast();

  const handleDownloadCv = () => {
    showToast('Descargando...', 'success');
    const link = document.createElement('a');
    link.href = CV_PATH;
    link.download = 'CV_Luis_Curbata.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <HudFrame
      as="section"
      label="ID // LC-001"
      status="Disponible para proyectos"
      className="w-full shadow-xl backdrop-blur-md md:p-6"
    >
      <div className="mb-5 flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <h1 className="mb-1 truncate text-2xl font-bold tracking-tight text-brand-text md:text-[28px]">
            Luis Jesus Curbata
          </h1>
          <span className="font-mono text-[13px] text-brand-muted">luisjcm</span>
        </div>

        <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden border border-brand-border bg-brand-surface md:size-20">
          {!imageError ? (
            <img
              src="/assets/perfil.jpg"
              alt="Luis Jesus Curbata"
              className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-110"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-brand-surface-subtle text-brand-muted">
              <svg className="h-10 w-10 translate-y-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
              </svg>
            </div>
          )}
        </div>
      </div>

      <dl className="mb-6 max-w-3xl text-[12px] leading-relaxed text-brand-text">
        {PROFILE_ROWS.map(({ label, value }) => (
          <div key={label} className="flex gap-3 border-b border-dashed border-brand-border/60 py-1.5 last:border-b-0">
            <dt className="w-[72px] shrink-0 pt-px font-mono text-[11px] uppercase tracking-[0.08em] text-brand-muted">
              {label}
            </dt>
            <dd className="min-w-0 flex-1">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="flex w-full select-none flex-wrap items-center gap-1.5">
        <HudAction href={WHATSAPP_URL} icon={<FiPhone />}>
          Contactar
        </HudAction>
        <HudAction onClick={handleDownloadCv} icon={<FiFileText />}>
          Descargar CV
        </HudAction>
        <HudAction href="https://linkedin.com/in/luisjcm" icon={<FiLinkedin />} aria-label="LinkedIn" />
        <HudAction href="https://github.com/luisjcm" icon={<FiGithub />} aria-label="GitHub" />
      </div>
    </HudFrame>
  );
};

export default HeroProfile;
