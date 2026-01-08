import { motion } from 'framer-motion';

const FloatingStar = ({ delay = 0, x = 0, y = 0, scale = 1 }: { delay?: number; x: number; y: number; scale?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 0, rotateX: 0 }}
      animate={{
        opacity: [0.15, 0.35, 0.15],
        rotateY: [0, 360],
        rotateX: [0, 15, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 12,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className="absolute pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transformStyle: 'preserve-3d',
        transform: `scale(${scale})`,
      }}
    >
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 0L24.12 14.12L40 20L24.12 25.88L20 40L15.88 25.88L0 20L15.88 14.12L20 0Z"
          fill="url(#starGradient)"
          stroke="#D4A574"
          strokeWidth="0.5"
        />
        <defs>
          <linearGradient id="starGradient" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#D4A574" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#C9A87C" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#D4A574" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

const OscarStatue = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 0.08, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="absolute left-[5%] bottom-[20%] pointer-events-none"
      style={{ filter: 'drop-shadow(0 0 30px rgba(212, 165, 116, 0.3))' }}
    >
      <svg width="140" height="320" viewBox="0 0 140 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.5" stroke="#D4A574" strokeWidth="1.5" fill="none">
          <ellipse cx="70" cy="40" rx="24" ry="28" fill="#D4A574" fillOpacity="0.2" />

          <rect x="60" y="64" width="20" height="12" fill="#D4A574" fillOpacity="0.15" />

          <path d="M56 76 L84 76 L80 112 L60 112 Z" fill="#D4A574" fillOpacity="0.2" />

          <rect x="48" y="112" width="44" height="64" fill="#D4A574" fillOpacity="0.15" />

          <path d="M52 176 L88 176 L84 216 L56 216 Z" fill="#D4A574" fillOpacity="0.2" />

          <rect x="60" y="216" width="20" height="32" fill="#D4A574" fillOpacity="0.15" />

          <rect x="40" y="248" width="60" height="12" rx="4" fill="#D4A574" fillOpacity="0.3" />
          <rect x="32" y="260" width="76" height="16" rx="4" fill="#D4A574" fillOpacity="0.35" />
          <rect x="24" y="276" width="92" height="20" rx="4" fill="#D4A574" fillOpacity="0.4" />

          <circle cx="70" cy="44" r="6" fill="#D4A574" fillOpacity="0.3" />
        </g>
      </svg>
    </motion.div>
  );
};

export default function HollywoodElements() {
  return (
    <>
      <FloatingStar x={12} y={18} delay={0} scale={0.7} />
      <FloatingStar x={88} y={12} delay={0.6} scale={0.9} />
      <FloatingStar x={22} y={55} delay={1.2} scale={0.5} />
      <FloatingStar x={78} y={52} delay={1.8} scale={0.8} />
      <FloatingStar x={45} y={30} delay={2.4} scale={0.6} />
      <FloatingStar x={92} y={68} delay={3} scale={0.7} />

      <OscarStatue />
    </>
  );
}
