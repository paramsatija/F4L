import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export function HeartLogo() {
  return (
    <motion.div
      className="fixed top-6 left-6 z-50 flex flex-col items-center gap-1"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              '0 0 20px rgba(224, 17, 95, 0.4)',
              '0 0 40px rgba(224, 17, 95, 0.6)',
              '0 0 20px rgba(224, 17, 95, 0.4)',
            ],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="relative"
        >
          <Heart
            className="w-8 h-8 text-ruby fill-ruby drop-shadow-lg"
            strokeWidth={1.5}
          />
        </motion.div>
      </div>
      <div className="text-center">
        <p className="text-[8px] tracking-[0.3em] text-gold uppercase font-sans">
          For The Stars
        </p>
        <p className="text-[10px] text-ruby font-serif italic">By Jacob</p>
      </div>
    </motion.div>
  );
}
