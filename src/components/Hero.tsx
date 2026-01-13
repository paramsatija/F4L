import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Play, X } from 'lucide-react';
import { useRef, useMemo, useState, useEffect } from 'react';

function VideoModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-8"
      >
        <motion.button
          onClick={onClose}
          className="absolute top-6 right-6 text-white hover:text-crimson transition-colors p-2 z-[110]"
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
        >
          <X className="w-8 h-8 md:w-10 h-10" />
        </motion.button>

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative h-[85vh] aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl border border-white/10"
        >
          <video
            src="/videos/For the Stars-video.mp4"
            className="w-full h-full object-contain bg-black"
            controls
            autoPlay
            playsInline
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function BackgroundStars() {
  const stars = useMemo(() => {
    return [...Array(100)].map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      left: Math.random() * 100,
      top: Math.random() * 100,
      duration: 2 + Math.random() * 3,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Deep Space Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,20,20,1)_0%,rgba(0,0,0,1)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] bg-gradient-to-t from-crimson/10 via-transparent to-transparent opacity-40" />
      
      {/* Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: star.size,
            height: star.size,
            left: `${star.left}%`,
            top: `${star.top}%`,
            boxShadow: '0 0 4px rgba(255, 255, 255, 0.8)',
          }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
      
      {/* Nebular Glows */}
      <div className="absolute top-1/4 left-1/4 w-[60vw] h-[60vw] bg-crimson/5 rounded-full blur-[120px] mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[100px] mix-blend-screen" />
    </div>
  );
}

function BackgroundHearts() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const hearts = useMemo(() => {
    const count = isMobile ? 25 : 60;
    return [...Array(count)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: isMobile ? 14 + Math.random() * 22 : 16 + Math.random() * 32,
      duration: (15 + Math.random() * 25) * 0.5,
      delay: Math.random() * 10,
      opacity: 0.3 + Math.random() * 0.4,
      zIndex: Math.random() > 0.6 ? 20 : 5, // 40% of hearts go over the image
    }));
  }, [isMobile]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
            zIndex: heart.zIndex,
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(heart.id) * 30, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'linear',
          }}
        >
          <Heart
            style={{
              width: heart.size,
              height: heart.size,
              opacity: heart.opacity,
              filter: 'drop-shadow(0 0 8px rgba(207, 15, 15, 0.6))',
            }}
            className="text-crimson fill-crimson"
          />
        </motion.div>
      ))}
    </div>
  );
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section ref={containerRef} className="relative min-h-screen lg:h-screen overflow-hidden bg-black flex flex-col">
      <BackgroundStars />
      <BackgroundHearts />

      {/* Main Content Container */}
      <div className="relative z-10 flex-1 flex flex-col lg:grid lg:grid-cols-2 lg:items-center h-full">
        
        {/* LEFT SIDE - TEXT CONTENT */}
        <div className="w-full px-6 lg:px-12 pt-28 lg:pt-0 flex flex-col justify-center lg:h-screen">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <motion.p
              className="font-playfair text-base lg:text-3xl italic text-white/90 mb-3 lg:mb-8 tracking-widest font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              For the Stars By Jacob presents
            </motion.p>
            <h1 className="font-headline text-[clamp(2.25rem,8vw,5rem)] lg:text-[clamp(5rem,8vw,8rem)] leading-[1.05] tracking-[0.02em]">
              <span className="text-white font-normal">FASHIONS </span>
              <span className="text-white/90 font-normal">FOR </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-crimson via-crimson-light to-crimson bg-clip-text text-transparent font-semibold">
                  LOVE
                </span>
                <motion.div
                  className="absolute -inset-6 bg-crimson/20 rounded-full blur-3xl -z-10"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Forbes Quote - Desktop Only */}
          <motion.div
            className="hidden lg:block mt-8 lg:mt-10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <div className="inline-block bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg px-6 py-4 max-w-lg">
              <p className="font-playfair text-base lg:text-lg italic text-white/85 leading-relaxed mb-1.5 font-medium">
                "The go-to designer for A-list performers worldwide"
              </p>
              <p className="text-xs lg:text-sm tracking-[0.2em] uppercase text-gold font-sans font-semibold">— Forbes</p>
            </div>
          </motion.div>

          {/* Event Details */}
          <motion.div
            className="mt-6 lg:mt-10 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-2 lg:mb-3">
              <div className="w-8 lg:w-16 h-px bg-gradient-to-r from-transparent to-crimson" />
              <p className="text-[10px] lg:text-sm tracking-[0.25em] uppercase text-white/80 font-sans whitespace-nowrap font-medium">
                Valentine's Eve
              </p>
              <div className="w-8 lg:w-16 h-px bg-gradient-to-l from-transparent to-crimson" />
            </div>
            <p className="font-headline text-2xl lg:text-5xl tracking-wider font-bold mb-1.5 lg:mb-2.5" style={{ color: '#CF0F0F' }}>
              13 FEBRUARY 2026
            </p>
            <p className="text-[10px] lg:text-base tracking-[0.2em] uppercase text-white/75 font-sans font-medium">
              Armani Hotel | Burj Khalifa | Dubai
            </p>
            
            {/* 40 Years Badge */}
            <div className="hidden lg:flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 lg:gap-3 bg-crimson/10 border border-crimson/30 rounded-full px-4 py-2 lg:px-5 lg:py-2.5 mt-4 lg:mt-6">
                <span className="font-headline text-xl lg:text-4xl text-crimson font-bold">40</span>
                <span className="text-[9px] lg:text-sm uppercase tracking-wider text-white/85 font-sans font-medium">Years of Hollywood Glamour</span>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons - Desktop Only */}
          <motion.div
            className="hidden lg:flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            <button className="bg-gradient-to-r from-crimson to-crimson-light hover:from-crimson-light hover:to-crimson px-12 py-5 text-white font-headline text-lg tracking-wider transition-all duration-300 hover:scale-105 shadow-crimson-intense active:scale-95 font-bold">
              SECURE YOUR INVITATION
            </button>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center justify-center gap-4 px-10 py-5 text-white font-sans text-base tracking-wider hover:text-crimson border-2 border-white/30 hover:border-crimson/60 transition-all duration-300 bg-white/10 backdrop-blur-sm active:scale-95 font-medium"
            >
              <Play className="w-6 h-6" />
              Watch Teaser
            </button>
          </motion.div>
        </div>

        {/* RIGHT SIDE - HERO IMAGE */}
        <motion.div
          className="relative flex-1 flex items-center justify-center px-6 lg:px-0 py-4 lg:py-0"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="relative w-full max-w-xs lg:max-w-none lg:h-screen flex items-center justify-center h-full">
            {/* Main Image */}
            <motion.div
              className="relative w-full h-full flex items-center justify-center"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <img
                src="/main-hero.png"
                alt="Fashions for Love 2026 - Hollywood meets Dubai"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Buttons - Mobile Only */}
        <motion.div
          className="lg:hidden relative z-10 flex flex-col items-stretch gap-3 px-6 pb-10 mt-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
        >
          <button className="w-full bg-gradient-to-r from-crimson to-crimson-light hover:from-crimson-light hover:to-crimson px-6 py-4 text-white font-headline text-sm tracking-wider transition-all duration-300 shadow-crimson-intense active:scale-95 font-bold">
            SECURE YOUR INVITATION
          </button>
          <button 
            onClick={() => setIsVideoOpen(true)}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 text-white font-sans text-sm tracking-wider hover:text-crimson border-2 border-white/30 hover:border-crimson/60 transition-all duration-300 bg-white/10 backdrop-blur-sm active:scale-95 font-medium"
          >
            <Play className="w-4 h-4" />
            Watch Teaser
          </button>
        </motion.div>
      </div>

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-2 lg:bottom-6 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 4, 0] }}
        transition={{
          opacity: { delay: 1.8, duration: 0.4 },
          y: { delay: 1.8, duration: 1.5, repeat: Infinity },
        }}
      >
        <div className="flex flex-col items-center gap-1 text-white/60">
          <span className="text-[8px] lg:text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
          <div className="w-px h-4 lg:h-6 bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
