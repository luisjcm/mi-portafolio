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
      
      {/* Skeleton / Indicador de carga (z-20 para asegurar que tape cualquier texto nativo del navegador) */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-brand-surface animate-pulse flex items-center justify-center z-20">
          <div className="w-5 h-5 border-2 border-brand-accent border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Imagen real: text-transparent oculta el texto 'alt' mientras carga */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 select-none ${
          isLoaded ? 'opacity-100' : 'opacity-0 text-transparent'
        } ${className}`}
        {...props}
      />
    </div>
  );
};