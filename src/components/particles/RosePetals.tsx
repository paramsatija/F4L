import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface RosePetalsProps {
  count?: number;
  className?: string;
}

export function RosePetals({ count = 20, className = '' }: RosePetalsProps) {
  const petals = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 10,
      duration: 8 + Math.random() * 6,
      sway: (Math.random() - 0.5) * 100,
    }));
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute w-3 h-4 rounded-full"
          style={{
            left: petal.left,
            top: '-5%',
            background: 'radial-gradient(ellipse at center, rgba(207, 15, 15, 0.4) 0%, rgba(207, 15, 15, 0.1) 100%)',
            filter: 'blur(2px)',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, petal.sway, -petal.sway / 2, petal.sway / 2, 0],
            rotate: [0, 360, 720],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
}
