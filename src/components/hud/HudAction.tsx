import React from 'react';

interface HudActionBaseProps {
  /** Icono a la izquierda del texto. Si no hay `children`, se renderiza como botón de solo icono. */
  icon: React.ReactNode;
  children?: React.ReactNode;
  /** Obligatorio para botones de solo icono (lectores de pantalla). */
  'aria-label'?: string;
  className?: string;
}

type HudActionProps = HudActionBaseProps &
  (
    | { href: string; onClick?: undefined }
    | { href?: undefined; onClick: () => void }
  );

const BASE_CLASSES =
  'group/act relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden border border-brand-border bg-brand-surface-subtle font-semibold text-brand-text no-underline transition-[color,border-color,transform] duration-200 hover:border-hud-cyan hover:text-hud-cyan active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-hud-cyan';

const TEXT_CLASSES = 'min-w-[115px] max-w-[140px] flex-1 px-3 py-2 text-[12px] md:py-2.5 md:text-[13px]';
const ICON_ONLY_CLASSES = 'size-9 shrink-0 md:size-10';

/**
 * Acción (enlace o botón) con estilo HUD. Con `href` renderiza un <a> que abre en pestaña nueva;
 * con `onClick` renderiza un <button>.
 */
const HudAction: React.FC<HudActionProps> = ({
  icon,
  children,
  href,
  onClick,
  className = '',
  ...rest
}) => {
  const classes = `${BASE_CLASSES} ${children ? TEXT_CLASSES : ICON_ONLY_CLASSES} ${className}`;
  const content = (
    <>
      <span
        aria-hidden="true"
        className="shrink-0 text-base text-brand-accent transition-colors duration-200 group-hover/act:text-hud-cyan"
      >
        {icon}
      </span>
      {children}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        aria-label={rest['aria-label']}
      >
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes} aria-label={rest['aria-label']}>
      {content}
    </button>
  );
};

export default HudAction;
