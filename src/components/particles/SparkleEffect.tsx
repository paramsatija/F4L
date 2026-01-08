import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface SparkleEffectProps {
  count?: number;
  className?: string;
}

export function SparkleEffect({ count = 15, className = '' }: SparkleEffectProps) {
  const sparkles = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 8 + Math.random() * 12,
      delay: Math.random() * 3,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute"
          style={{
            left: sparkle.left,
            top: sparkle.top,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles
            className="text-gold"
            size={sparkle.size}
            style={{ filter: 'drop-shadow(0 0 4px rgba(212, 165, 116, 0.6))' }}
          />
        </motion.div>
      ))}
    </div>
  );
}
