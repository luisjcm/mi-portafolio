// src/features/home/ProfileHeader.tsx
// Cabecera de la portada: nombre, badge, foto, datos biográficos y botones.
// DÓNDE CAMBIAR: textos en config/profile.ts · enlaces en config/site.ts ·
// aspecto de botones en components/ui/Button.tsx.
import { useState } from 'react';
import { useToast } from '../../context/ToastContext';
import { SITE, LINKS, CONTACT_MESSAGE } from '../../config/site';
import { PROFILE_DETAILS, AVATAR_SRC } from '../../config/profile';
import Button from '../../components/ui/Button';
import Badge from '../../components/ui/Badge';
import { ProfileIcon } from '../../components/icons/ProfileIcons';
import { PhoneIcon, FileIcon, LinkedinIcon, GithubIcon } from '../../components/icons/ButtonIcons';

// Foto de perfil; si no carga, muestra una silueta
function Avatar() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border border-brand-border bg-brand-surface shrink-0 flex items-center justify-center">
      {!imageError ? (
        <img
          src={AVATAR_SRC}
          alt={SITE.name}
          className="w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full bg-brand-surface-subtle flex items-center justify-center text-brand-muted">
          <svg className="w-10 h-10 translate-y-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm0 2c-3.33 0-10 1.67-10 5v3h20v-3c0-3.33-6.67-5-10-5z" />
          </svg>
        </div>
      )}
    </div>
  );
}

export default function ProfileHeader() {
  const { showToast } = useToast();

  // Descarga del CV desde /public (ruta en config/site.ts)
  const downloadCv = () => {
    showToast('Descargando...', 'success');
    const link = document.createElement('a');
    link.href = SITE.cvPath;
    link.download = SITE.cvPath.slice(1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="mb-10 w-full">
      {/* Nombre, badge y foto */}
      <div className="flex justify-between items-start mb-5 gap-3">
        <div className="flex-1 min-w-0">
          <h1 className="text-2xl md:text-[28px] font-bold text-brand-text mb-1.5 tracking-tight truncate">
            {SITE.name}
          </h1>
          <div className="flex flex-wrap items-center gap-2 text-[13px]">
            <span className="text-brand-muted font-medium">{SITE.handle}</span>
            <Badge dot>Disponible para Proyectos</Badge>
          </div>
        </div>
        <Avatar />
      </div>

      {/* Datos biográficos */}
      <div className="space-y-2 mb-6 text-[11px] md:text-xs text-brand-muted max-w-3xl font-normal leading-relaxed">
        {PROFILE_DETAILS.map(({ icon, text }) => (
          <div key={text} className="flex items-start gap-2.5">
            <ProfileIcon name={icon} className="w-3.5 h-3.5 text-brand-muted shrink-0 mt-0.5" />
            <span className="leading-snug">{text}</span>
          </div>
        ))}
      </div>

      {/* Botones de acción */}
      <div className="flex flex-wrap items-center gap-1 w-full select-none">
        <Button variant="primary" href={LINKS.whatsapp(CONTACT_MESSAGE)} icon={<PhoneIcon />}>
          Contactar
        </Button>
        <Button icon={<FileIcon />} onClick={downloadCv}>
          Descargar CV
        </Button>
        <Button size="icon" href={LINKS.linkedin} icon={<LinkedinIcon />} ariaLabel="Perfil de LinkedIn" />
        <Button size="icon" href={LINKS.github} icon={<GithubIcon />} ariaLabel="Perfil de GitHub" />
      </div>
    </section>
  );
}
