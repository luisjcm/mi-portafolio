import React, { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({ 
  src, 
  alt, 
  className = '', 
  wrapperClassName = '', 
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-brand-surface ${wrapperClassName}`}>
      {/* Skeleton / Indicador de carga mientras la imagen no baja por completo */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-brand-surface animate-pulse flex items-center justify-center border border-brand-border z-10">
          <div className="w-5 h-5 border-2 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Imagen real con transición suave de opacidad */}
      <img
        src={src}
        alt={alt}
        loading="lazy" // Habilita el lazy loading nativo del navegador
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        {...props}
      />
    </div>
  );
};