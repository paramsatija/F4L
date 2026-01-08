import { motion } from 'framer-motion';

interface HeartPortalProps {
  className?: string;
  children?: React.ReactNode;
}

export function HeartPortal({ className = '', children }: HeartPortalProps) {
  const heartPath = "M256 465.5c-10.5 0-21-3.8-29.2-11.4C142.5 377.6 28 252.6 28 163.8 28 89.8 88 32 164.5 32c42.2 0 69.9 19.5 91.5 45.3C277.6 51.5 305.3 32 347.5 32 424 32 484 89.8 484 163.8c0 88.8-114.5 213.8-198.8 290.3-8.2 7.6-18.7 11.4-29.2 11.4z";

  return (
    <div className={`relative ${className}`}>
      <svg
        viewBox="0 0 512 512"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4A574" />
            <stop offset="50%" stopColor="#E8C8A0" />
            <stop offset="100%" stopColor="#D4A574" />
          </linearGradient>

          <linearGradient id="heartShimmer" x1="0%" y1="0%" x2="100%" y2="0%">
            <motion.stop
              offset="0%"
              stopColor="#D4A574"
              animate={{ stopColor: ['#D4A574', '#F5E6D3', '#D4A574'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.stop
              offset="50%"
              stopColor="#F5E6D3"
              animate={{ stopColor: ['#F5E6D3', '#D4A574', '#F5E6D3'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.stop
              offset="100%"
              stopColor="#D4A574"
              animate={{ stopColor: ['#D4A574', '#F5E6D3', '#D4A574'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            />
          </linearGradient>

          <filter id="heartGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          <clipPath id="heartClip">
            <path d={heartPath} />
          </clipPath>

          <mask id="heartMask">
            <rect width="100%" height="100%" fill="black" />
            <path d={heartPath} fill="white" />
          </mask>
        </defs>

        <motion.path
          d={heartPath}
          fill="none"
          stroke="url(#heartShimmer)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#heartGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
        />

        <motion.path
          d={heartPath}
          fill="none"
          stroke="url(#heartGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
        />
      </svg>

      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          clipPath: 'url(#heartClip)',
        }}
      >
        {children}
      </div>
    </div>
  );
}
