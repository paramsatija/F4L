import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface FloatingValentineHeartsProps {
  count?: number;
  variant?: 'red' | 'white' | 'gold';
}

export function FloatingValentineHearts({ count = 20, variant = 'red' }: FloatingValentineHeartsProps) {
  const hearts = Array.from({ length: count }, (_, i) => {
    const size = Math.random() * 16 + 12;
    const startX = Math.random() * 100;
    const endX = startX + (Math.random() * 30 - 15);
    const duration = Math.random() * 15 + 15;
    const delay = Math.random() * 10;
    const opacity = Math.random() * 0.3 + 0.1;

    return {
      id: i,
      size,
      startX,
      endX,
      duration,
      delay,
      opacity,
    };
  });

  const colorClasses = {
    red: 'text-vibrant-red',
    white: 'text-white',
    gold: 'text-gold',
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          initial={{
            x: `${heart.startX}%`,
            y: '110%',
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            x: [`${heart.startX}%`, `${heart.endX}%`, `${heart.startX}%`],
            y: '-10%',
            opacity: [0, heart.opacity, heart.opacity, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            width: heart.size,
            height: heart.size,
          }}
        >
          <Heart
            className={`w-full h-full ${colorClasses[variant]} fill-current`}
            style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.1))' }}
          />
        </motion.div>
      ))}
    </div>
  );
}
