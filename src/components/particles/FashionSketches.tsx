import { motion } from 'framer-motion';
import { Scissors, Ruler, Sparkles } from 'lucide-react';

interface FashionSketchesProps {
  variant?: 'light' | 'dark';
}

export function FashionSketches({ variant = 'light' }: FashionSketchesProps) {
  const iconColor = variant === 'light' ? 'text-white/15' : 'text-black/5';

  const sketches = [
    { Icon: Scissors, x: '10%', y: '15%', rotate: -15, delay: 0 },
    { Icon: Ruler, x: '85%', y: '25%', rotate: 45, delay: 0.5 },
    { Icon: Sparkles, x: '20%', y: '70%', rotate: 30, delay: 1 },
    { Icon: Scissors, x: '75%', y: '80%', rotate: -25, delay: 1.5 },
    { Icon: Ruler, x: '50%', y: '40%', rotate: -10, delay: 0.8 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sketches.map((sketch, index) => (
        <motion.div
          key={index}
          className={`absolute ${iconColor}`}
          style={{
            left: sketch.x,
            top: sketch.y,
          }}
          initial={{ opacity: 0, rotate: sketch.rotate, scale: 0.8 }}
          animate={{
            opacity: variant === 'light' ? [0.5, 0.8, 0.5] : [0.3, 0.5, 0.3],
            rotate: [sketch.rotate, sketch.rotate + 5, sketch.rotate],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            delay: sketch.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <sketch.Icon className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40" strokeWidth={0.5} />
        </motion.div>
      ))}

      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="diagonal-lines" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="40" y2="40" stroke={variant === 'light' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.03)'} strokeWidth="1" />
          </pattern>
          <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1" fill={variant === 'light' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.05)'} />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}
