import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ModelReveal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <motion.svg
        viewBox="0 0 200 400"
        className="w-full h-full"
        style={{ maxWidth: '200px', maxHeight: '400px' }}
        initial={{ scale: 0, y: 50 }}
        animate={isVisible ? { scale: 1, y: 0 } : { scale: 0, y: 50 }}
        transition={{
          duration: 1.5,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.3
        }}
      >
        <defs>
          <linearGradient id="dressGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DC143C" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#C41E3A" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B0000" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="capeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#DC143C" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C41E3A" stopOpacity="0.85" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        <g transform="translate(100, 20)">
          <motion.path
            d="M -35 180 Q -60 120 -45 100 L -30 140 Q -25 180 -35 250 L -40 320 Q -42 360 -50 380 L -30 380 L -25 250 Z"
            fill="url(#capeGradient)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isVisible ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />

          <motion.ellipse
            cx="0"
            cy="0"
            rx="12"
            ry="15"
            fill="#FFE4E1"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
          />

          <motion.path
            d="M -8 15 Q -6 12 0 12 Q 6 12 8 15"
            fill="#8B4513"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.3, delay: 1.2 }}
          />

          <motion.path
            d="M -10 20 Q -12 50 -8 80 L -6 80 Q -8 60 -10 30 Z M 10 20 Q 12 50 8 80 L 6 80 Q 8 60 10 30 Z"
            fill="#FFE4E1"
            initial={{ scaleY: 0 }}
            animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          />

          <motion.path
            d="M -8 80 Q -10 100 -6 180 Q -5 220 -4 280 Q -3 320 -2 360 L 2 360 Q 3 320 4 280 Q 5 220 6 180 Q 10 100 8 80 Q 0 75 -8 80 Z"
            fill="url(#dressGradient)"
            filter="url(#glow)"
            initial={{ scaleY: 0, transformOrigin: 'top' }}
            animate={isVisible ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, delay: 0.9 }}
          />

          <motion.path
            d="M -8 85 L -25 140 Q -20 145 -8 120 Z M 8 85 L 25 140 Q 20 145 8 120 Z"
            fill="url(#dressGradient)"
            opacity="0.8"
            initial={{ scale: 0, transformOrigin: 'top' }}
            animate={isVisible ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          />

          <motion.path
            d="M 35 180 Q 60 120 45 100 L 30 140 Q 25 180 35 250 L 40 320 Q 42 360 50 380 L 30 380 L 25 250 Z"
            fill="url(#capeGradient)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={isVisible ? { pathLength: 1, opacity: 0.6 } : { pathLength: 0, opacity: 0 }}
            transition={{ duration: 1.2, delay: 0.8 }}
          />

          <motion.path
            d="M -2 180 L -15 360 L -10 360 L -2 200 Z M 2 180 L 15 360 L 10 360 L 2 200 Z"
            fill="#8B0000"
            opacity="0.3"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 0.3 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          />

          <motion.ellipse
            cx="-3"
            cy="320"
            rx="1.5"
            ry="2"
            fill="#FFD700"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: [0, 1.2, 1] } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          />
          <motion.ellipse
            cx="0"
            cy="305"
            rx="1.5"
            ry="2"
            fill="#FFD700"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: [0, 1.2, 1] } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 1.6 }}
          />
          <motion.ellipse
            cx="3"
            cy="320"
            rx="1.5"
            ry="2"
            fill="#FFD700"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: [0, 1.2, 1] } : { scale: 0 }}
            transition={{ duration: 0.5, delay: 1.55 }}
          />

          <motion.ellipse
            cx="0"
            cy="370"
            rx="8"
            ry="3"
            fill="#000"
            opacity="0.2"
            initial={{ scale: 0 }}
            animate={isVisible ? { scale: [0, 1.5, 1] } : { scale: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          />
        </g>

        <motion.g
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: [0, 0.8, 0] } : { opacity: 0 }}
          transition={{ duration: 2, delay: 1.8, repeat: Infinity, repeatDelay: 2 }}
        >
          <circle cx="90" cy="120" r="2" fill="#FFD700" opacity="0.6" />
          <circle cx="110" cy="140" r="1.5" fill="#FFD700" opacity="0.6" />
          <circle cx="95" cy="160" r="2" fill="#DC143C" opacity="0.4" />
          <circle cx="105" cy="180" r="1.5" fill="#DC143C" opacity="0.4" />
        </motion.g>
      </motion.svg>
    </motion.div>
  );
}
