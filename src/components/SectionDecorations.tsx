import { Heart } from 'lucide-react';
import { useRef, useMemo } from 'react';

interface SectionDecorationsProps {
  variant: 'light' | 'dark' | 'red';
}

export function SectionDecorations({ variant }: SectionDecorationsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isLight = variant === 'light';
  const isRed = variant === 'red';

  const heartColor = isRed ? 'text-white' : isLight ? 'text-crimson' : 'text-crimson-dark';
  const outlineColor = isRed ? 'text-white/40' : isLight ? 'text-gold/20' : 'text-gold/10';
  const glowColor = isRed ? 'rgba(255, 255, 255, 0.6)' : isLight ? 'rgba(207, 15, 15, 0.15)' : 'rgba(207, 15, 15, 0.25)';

  // Generate scattered hearts (more for red variant)
  const heartCount = isRed ? 300 : 216;
  const scatteredHearts = useMemo(() => {
    return [...Array(heartCount)].map((_, i) => ({
      id: i,
      size: 4 + Math.random() * 20,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      rotate: Math.random() * 360,
      opacity: isRed ? 0.1 + Math.random() * 0.3 : 0.02 + Math.random() * 0.35,
    }));
  }, [heartCount, isRed]);

  const words = [
    'COUTURE', 'ROMANCE', 'LEGACY', 'LOVE', 'FASHION', 'HOLLYWOOD', 'DUBAI', 'STARS', 'GLAMOUR',
    'INVITATION', 'VALENTINE', 'ARMANI', 'KHALIFA', 'ELEGANCE', 'MYSTIQUE', 'CELEBRITY', 'RED CARPET',
    'MASTERPIECE', 'ICONIC', 'PREMIERE', 'GRANDEUR', 'PHILANTHROPY', 'BEAUTY', 'PASSION', 'ETERNITY',
    'COUTURE', 'ROMANCE', 'LEGACY', 'LOVE', 'FASHION', 'HOLLYWOOD', 'DUBAI', 'STARS', 'GLAMOUR',
    'COUTURE', 'ROMANCE', 'LEGACY', 'LOVE', 'FASHION', 'HOLLYWOOD', 'DUBAI', 'STARS', 'GLAMOUR',
    'INVITATION', 'VALENTINE', 'ARMANI', 'KHALIFA', 'ELEGANCE', 'MYSTIQUE', 'CELEBRITY', 'RED CARPET',
    'MASTERPIECE', 'ICONIC', 'PREMIERE', 'GRANDEUR', 'PHILANTHROPY', 'BEAUTY', 'PASSION', 'ETERNITY',
    'COUTURE', 'ROMANCE', 'LEGACY', 'LOVE', 'FASHION', 'HOLLYWOOD', 'DUBAI', 'STARS', 'GLAMOUR',
    'COUTURE', 'ROMANCE', 'LEGACY', 'LOVE', 'FASHION', 'HOLLYWOOD', 'DUBAI', 'STARS', 'GLAMOUR',
    'INVITATION', 'VALENTINE', 'ARMANI', 'KHALIFA', 'ELEGANCE', 'MYSTIQUE', 'CELEBRITY', 'RED CARPET',
    'MASTERPIECE', 'ICONIC', 'PREMIERE', 'GRANDEUR', 'PHILANTHROPY', 'BEAUTY', 'PASSION', 'ETERNITY',
    'COUTURE', 'ROMANCE', 'LEGACY', 'LOVE', 'FASHION', 'HOLLYWOOD', 'DUBAI', 'STARS', 'GLAMOUR'
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* 54x Large Watermark Hearts (3x density upgrade) */}
      {[...Array(54)].map((_, i) => (
        <div
          key={`watermark-${i}`}
          style={{ 
            transform: `scale(${0.4 + (i * 0.05)}) rotate(${i * 15}deg)`,
            left: `${(i * 11) % 120 - 10}%`,
            top: `${(i * 13) % 120 - 10}%`,
            zIndex: -1,
            opacity: isRed ? 0.02 + (i * 0.003) : isLight ? 0.004 + (i * 0.0008) : 0.008 + (i * 0.0008)
          }}
          className="absolute"
        >
          <Heart size={100 + (i * 35)} strokeWidth={0.08} className={outlineColor} fill="none" />
        </div>
      ))}

      {/* 216x Scattered Hearts (3x density) */}
      {scatteredHearts.map((heart) => (
        <div
          key={`heart-${heart.id}`}
          style={{ 
            transform: `rotate(${heart.rotate}deg)`,
            left: heart.left,
            top: heart.top,
            opacity: heart.opacity
          }}
          className="absolute"
        >
          <Heart 
            size={heart.size} 
            className={`${heartColor} fill-current`} 
            style={{ filter: `drop-shadow(0 0 ${heart.size/4}px ${glowColor})` }} 
          />
        </div>
      ))}

      {/* Complex Multi-Layered Decorative Fashion Lines */}
      <svg className={`absolute inset-0 w-full h-full ${isRed ? 'opacity-[0.5]' : 'opacity-[0.35]'}`}>
        <pattern id="stitch-pattern-1" width="30" height="30" patternUnits="userSpaceOnUse">
          <line x1="0" y1="15" x2="5" y2="15" stroke={isRed ? "#FFFFFF" : "#D4A574"} strokeWidth="0.1" strokeDasharray="1,2" />
          <circle cx="15" cy="15" r="0.5" fill={isRed ? "#FFFFFF" : "#D4A574"} opacity="0.3" />
        </pattern>
        <pattern id="stitch-pattern-2" width="60" height="60" patternUnits="userSpaceOnUse">
          <line x1="30" y1="0" x2="30" y2="10" stroke={isRed ? "#D4A574" : "#D4A574"} strokeWidth="0.1" strokeDasharray="1,3" />
          <Heart size={4} className={isRed ? "text-white/10" : "text-gold/8"} style={{ transform: 'translate(28px, 28px)' }} />
        </pattern>
        <pattern id="stitch-pattern-3" width="100" height="100" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="0.2" fill={isRed ? "#FFFFFF" : "#D4A574"} opacity="0.2" />
          <line x1="0" y1="0" x2="100" y2="100" stroke={isRed ? "#FFFFFF" : "#D4A574"} strokeWidth="0.05" opacity="0.1" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#stitch-pattern-1)" />
        <rect width="100%" height="100%" fill="url(#stitch-pattern-2)" opacity="0.8" />
        <rect width="100%" height="100%" fill="url(#stitch-pattern-3)" opacity="0.6" />
      </svg>

      {/* 78+ Ghost Typography Words (3x more density) */}
      {words.map((word, i) => (
        <div 
          key={`word-${i}`}
          style={{ 
            left: `${(i * 4) % 100}%`,
            top: `${(i * 7) % 100}%`,
          }}
          className={`absolute font-display uppercase tracking-[1.5em] pointer-events-none
            ${i % 2 === 0 ? 'vertical-text' : ''}
            ${isRed ? 'text-white/[0.12]' : isLight ? 'text-grey-900/[0.02]' : 'text-white/[0.02]'}
            ${i % 6 === 0 ? 'text-9xl md:text-[15rem]' : i % 6 === 1 ? 'text-7xl md:text-9xl' : i % 6 === 2 ? 'text-5xl md:text-7xl' : i % 6 === 3 ? 'text-3xl md:text-5xl' : 'text-xl md:text-3xl'}
          `}
        >
          {word}
        </div>
      ))}
    </div>
  );
}
