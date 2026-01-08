import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface HeartParticle {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

interface FloatingHeartsProps {
  count?: number;
  className?: string;
}

export function FloatingHearts({ count = 20, className = '' }: FloatingHeartsProps) {
  const [hearts, setHearts] = useState<HeartParticle[]>([]);

  useEffect(() => {
    const generatedHearts: HeartParticle[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 20,
      size: 8 + Math.random() * 16,
      opacity: 0.1 + Math.random() * 0.2,
    }));
    setHearts(generatedHearts);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.x}%`,
            bottom: '-5%',
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(heart.id) * 50, 0, Math.sin(heart.id + 1) * -30, 0],
            rotate: [0, 15, -15, 10, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <Heart
            size={heart.size}
            className="text-crimson fill-crimson"
            style={{ opacity: heart.opacity }}
          />
        </motion.div>
      ))}
    </div>
  );
}
