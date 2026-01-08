import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function ModelReveal() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none z-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 1.2 }}
    >
      <motion.div
        className="relative w-full h-full flex items-center justify-center"
        initial={{ scale: 0, y: 100 }}
        animate={isVisible ? { scale: 1, y: 0 } : { scale: 0, y: 100 }}
        transition={{
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.2
        }}
      >
        <motion.img
          src="/gemini_generated_image_(7).png"
          alt="Fashion Model"
          className="w-[85%] h-[85%] object-contain"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        />

        <motion.div
          className="absolute inset-0 bg-gradient-radial from-crimson/20 via-transparent to-transparent blur-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? {
            opacity: [0, 0.6, 0.4],
            scale: [0.8, 1.2, 1]
          } : { opacity: 0, scale: 0.8 }}
          transition={{
            duration: 2,
            delay: 0.8,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 1
          }}
        />

        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 1.2 }}
        >
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-gold rounded-full"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
