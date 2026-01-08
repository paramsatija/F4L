import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FloatingHeartsProps {
  count?: number;
  className?: string;
}

export function FloatingHearts({ count = 25, className = '' }: FloatingHeartsProps) {
  const hearts = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: 12 + Math.random() * 16,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 8,
      opacity: 0.1 + Math.random() * 0.3,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: heart.left,
            bottom: '-10%',
          }}
          animate={{
            y: [0, -window.innerHeight * 1.2],
            rotate: [0, 360],
            opacity: [0, heart.opacity, heart.opacity, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Heart
            className="text-crimson fill-crimson"
            size={heart.size}
            style={{ filter: 'blur(1px)' }}
          />
        </motion.div>
      ))}
    </div>
  );
}
