import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showDate, setShowDate] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heartRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const heartScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.7]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    const timer = setTimeout(() => setShowDate(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-black">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: textOpacity }}
      >
        <div className="text-center">
          <motion.h1
            className="font-headline text-[clamp(8rem,25vw,28rem)] leading-none tracking-tight text-white font-light"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            LOVE
          </motion.h1>

          <motion.div
            className="mt-12 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: showDate ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center">
              <p className="text-white/60 text-sm tracking-[0.3em] uppercase mb-2">
                One night
              </p>
              <p className="text-crimson text-2xl md:text-3xl font-headline tracking-wider">
                February 13, 2026
              </p>
              <p className="text-white/60 text-sm tracking-[0.3em] uppercase mt-2">
                Dubai
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          rotateY: heartRotate,
          scale: heartScale,
        }}
      >
        <motion.div
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Heart
            className="w-64 h-64 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem] text-crimson fill-crimson"
            style={{
              filter: 'drop-shadow(0 0 80px rgba(220, 20, 60, 0.6))',
            }}
          />
        </motion.div>
      </motion.div>

      <motion.button
        className="absolute bottom-24 left-1/2 -translate-x-1/2 px-12 py-5 text-white text-lg tracking-wider font-headline bg-crimson hover:bg-crimson/90 transition-all duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showDate ? 1 : 0, y: showDate ? 0 : 20 }}
        transition={{ delay: 1, duration: 0.8 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Be There
      </motion.button>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 2, duration: 0.5 },
          y: { delay: 2, duration: 2, repeat: Infinity },
        }}
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="text-xs tracking-[0.3em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
