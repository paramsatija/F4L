import { motion } from 'framer-motion';

export default function BurjKhalifaSilhouette() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 0.15, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="absolute right-0 top-0 h-full w-auto pointer-events-none"
      style={{ filter: 'drop-shadow(0 0 60px rgba(206, 0, 0, 0.3))' }}
    >
      <svg
        viewBox="0 0 400 2400"
        className="h-full w-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M200 0 L205 150 L200 150 L195 150 Z" fill="white" fillOpacity="0.1" />

          <rect x="190" y="150" width="20" height="100" fill="white" fillOpacity="0.08" />

          <path d="M185 250 L215 250 L215 350 L185 350 Z" fill="white" fillOpacity="0.1" />

          <rect x="180" y="350" width="40" height="150" fill="white" fillOpacity="0.08" />

          <path d="M175 500 L225 500 L225 650 L175 650 Z" fill="white" fillOpacity="0.1" />

          <rect x="170" y="650" width="60" height="200" fill="white" fillOpacity="0.08" />

          <path d="M165 850 L235 850 L235 1050 L165 1050 Z" fill="white" fillOpacity="0.1" />

          <rect x="160" y="1050" width="80" height="300" fill="white" fillOpacity="0.08" />

          <path d="M155 1350 L245 1350 L245 1600 L155 1600 Z" fill="white" fillOpacity="0.1" />

          <rect x="150" y="1600" width="100" height="400" fill="white" fillOpacity="0.08" />

          <path d="M140 2000 L260 2000 L260 2400 L140 2400 Z" fill="white" fillOpacity="0.1" />

          <line x1="160" y1="1700" x2="240" y2="1700" strokeOpacity="0.3" />
          <line x1="160" y1="1800" x2="240" y2="1800" strokeOpacity="0.3" />
          <line x1="160" y1="1900" x2="240" y2="1900" strokeOpacity="0.3" />
          <line x1="165" y1="1100" x2="235" y2="1100" strokeOpacity="0.3" />
          <line x1="165" y1="1200" x2="235" y2="1200" strokeOpacity="0.3" />
          <line x1="165" y1="1300" x2="235" y2="1300" strokeOpacity="0.3" />

          <circle cx="200" cy="100" r="3" fill="white" fillOpacity="0.6" />
          <circle cx="200" cy="200" r="2" fill="white" fillOpacity="0.5" />
          <circle cx="200" cy="300" r="2" fill="white" fillOpacity="0.5" />
        </g>
      </svg>
    </motion.div>
  );
}
