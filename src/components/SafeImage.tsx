import { useState } from 'react';
import { AlertCircle } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  objectFit?: 'contain' | 'cover';
  style?: React.CSSProperties;
}

export function SafeImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  objectFit = 'contain',
  style = {},
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError) {
    return (
      <div className={`flex flex-col items-center justify-center p-6 bg-red-950/80 border-2 border-red-500 rounded-xl text-red-200 text-center ${className}`}>
        <AlertCircle className="w-10 h-10 text-red-400 mb-2 animate-bounce" />
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-red-400">
          IMAGE LOAD ERROR
        </span>
        <span className="font-mono text-[11px] text-red-300 break-all mt-1 bg-red-900/50 px-2 py-1 rounded">
          {src}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-900/40 animate-pulse flex items-center justify-center">
          <span className="font-mono text-xs text-cyan-400/60 tracking-widest">LOADING ASSET...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="eager"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`transition-opacity duration-500 max-h-full max-w-full ${isLoaded ? 'opacity-100' : 'opacity-0'} ${
          objectFit === 'cover' ? 'object-cover' : 'object-contain'
        } ${imgClassName}`}
        style={style}
      />
    </div>
  );
}
