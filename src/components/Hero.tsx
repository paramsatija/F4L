import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Play } from 'lucide-react';
import { useRef, useEffect, useState, useMemo } from 'react';
import ModelReveal from './ModelReveal';

function BackgroundHearts() {
  const hearts = useMemo(() => {
    return [...Array(60)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 10 + Math.random() * 20,
      duration: 15 + Math.random() * 25,
      delay: Math.random() * 15,
      opacity: 0.05 + Math.random() * 0.10,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: `${heart.left}%`,
            bottom: '-50px',
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
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heartScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heartY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);

  useEffect(() => {
    const eventDate = new Date('2026-02-13T19:00:00+04:00');

    const updateCountdown = () => {
      const now = new Date();
      const diff = eventDate.getTime() - now.getTime();

      if (diff > 0) {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 60000);
    return () => clearInterval(interval);
  }, []);

  const heartPath = "M256 465.5c-10.5 0-21-3.8-29.2-11.4C142.5 377.6 28 252.6 28 163.8 28 89.8 88 32 164.5 32c42.2 0 69.9 19.5 91.5 45.3C277.6 51.5 305.3 32 347.5 32 424 32 484 89.8 484 163.8c0 88.8-114.5 213.8-198.8 290.3-8.2 7.6-18.7 11.4-29.2 11.4z";

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden bg-[#FDFBF7]">
      <BackgroundHearts />

      <motion.div
        className="absolute top-4 left-4 md:top-6 md:left-6 z-20"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="font-headline text-4xl md:text-5xl tracking-wider text-grey-800">FFL</span>
          <Heart className="w-9 h-9 md:w-10 md:h-10 text-crimson fill-crimson" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <p className="text-sm md:text-base lg:text-lg tracking-[0.15em] uppercase text-grey-700 font-sans leading-tight">
            Where Hollywood Glamour
          </p>
          <p className="text-sm md:text-base lg:text-lg tracking-[0.15em] uppercase font-sans leading-tight">
            <span className="text-grey-700">Meets </span>
            <span className="text-crimson font-semibold">ARABIAN NIGHTS</span>
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-4 right-4 md:top-6 md:right-6 z-20 flex items-center gap-3 md:gap-4"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="glass-dark px-3 py-2 md:px-4 md:py-2.5 rounded-full flex items-center gap-2 md:gap-3">
          <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider">Event In</span>
          <div className="flex gap-1.5 md:gap-2">
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-xl font-bold text-gold font-headline">{timeLeft.days}</span>
              <span className="text-[7px] md:text-[8px] text-white/50 uppercase">Days</span>
            </div>
            <span className="text-lg md:text-xl text-white/30">:</span>
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-xl font-bold text-gold font-headline">{timeLeft.hours}</span>
              <span className="text-[7px] md:text-[8px] text-white/50 uppercase">Hrs</span>
            </div>
            <span className="text-lg md:text-xl text-white/30">:</span>
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-xl font-bold text-gold font-headline">{timeLeft.minutes}</span>
              <span className="text-[7px] md:text-[8px] text-white/50 uppercase">Min</span>
            </div>
          </div>
        </div>
        <button className="hidden md:block bg-gradient-to-r from-crimson to-crimson-light hover:from-crimson-light hover:to-crimson px-5 py-2.5 text-white font-headline text-sm tracking-wider transition-all duration-300 hover:scale-105 shadow-lg">
          RESERVE SEAT
        </button>
      </motion.div>

      <motion.div
        className="hidden xl:block absolute left-6 top-1/2 -translate-y-1/2 z-10 max-w-[240px]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <p className="font-playfair text-xl italic text-grey-600 leading-[1.6]">
          "The go-to designer for A-list performers worldwide"
        </p>
        <p className="mt-2 text-sm tracking-[0.2em] uppercase text-gold font-sans font-medium">— Forbes</p>
      </motion.div>

      <motion.div
        className="hidden xl:block absolute right-6 top-1/2 -translate-y-1/2 z-10 text-right max-w-[240px]"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <p className="font-headline text-8xl text-crimson leading-none font-light">40</p>
        <p className="text-sm tracking-[0.25em] uppercase text-grey-600 mt-2 font-sans">Years of</p>
        <p className="font-headline text-2xl tracking-[0.08em] text-grey-800 font-normal mt-1">HOLLYWOOD</p>
        <p className="font-headline text-2xl tracking-[0.08em] text-grey-800 font-normal">GLAMOUR</p>
      </motion.div>

      <div className="container mx-auto px-4 pt-20 md:pt-24 relative z-10 h-full flex flex-col">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.p
            className="font-playfair text-base md:text-lg lg:text-xl italic text-grey-600 mb-4 tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            For the Stars By Jacob Meir presents
          </motion.p>
          <h1 className="font-headline text-[clamp(2.8rem,9vw,7rem)] leading-[1.05] tracking-[0.02em]">
            <span className="text-grey-800 font-light">FASHIONS </span>
            <span className="font-playfair text-[clamp(1.4rem,4.5vw,3rem)] italic text-grey-600 font-normal">for </span>
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-crimson via-crimson-light to-crimson bg-clip-text text-transparent font-medium">
                LOVE
              </span>
              <motion.div
                className="absolute -inset-4 bg-crimson/20 rounded-full blur-2xl -z-10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
          </h1>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[340px] md:max-w-[440px] lg:max-w-[520px] flex-1 min-h-0 my-4 md:my-6"
          style={{ scale: heartScale, y: heartY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
        >
          <svg
            viewBox="0 0 512 512"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="heroHeartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DC143C" />
                <stop offset="50%" stopColor="#FF1744" />
                <stop offset="100%" stopColor="#DC143C" />
              </linearGradient>

              <filter id="heroHeartGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              <clipPath id="heroHeartClip">
                <path d={heartPath} />
              </clipPath>
            </defs>

            <motion.path
              d={heartPath}
              fill="none"
              stroke="#DC143C"
              strokeWidth="12"
              strokeOpacity="0.3"
              filter="url(#heroHeartGlow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
            />

            <motion.path
              d={heartPath}
              fill="none"
              stroke="url(#heroHeartGradient)"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: 'easeInOut', delay: 0.5 }}
            />
          </svg>

          <ModelReveal />
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-4 mb-2">
            <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-crimson" />
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-grey-600 font-sans">
              Valentine's Eve
            </p>
            <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-crimson" />
          </div>
          <p className="font-headline text-3xl md:text-4xl lg:text-5xl tracking-wider text-crimson">
            13 FEBRUARY 2026
          </p>
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-grey-500 mt-2 font-sans">
            Armani Hotel | Burj Khalifa | Dubai
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-5 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          <button className="w-full sm:w-auto bg-gradient-to-r from-crimson to-crimson-light hover:from-crimson-light hover:to-crimson px-8 md:px-12 py-4 md:py-5 text-white font-headline text-base md:text-lg tracking-wider transition-all duration-300 hover:scale-105 shadow-crimson-intense">
            SECURE YOUR INVITATION
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 text-grey-700 font-sans text-sm md:text-base tracking-wider hover:text-crimson border-2 border-grey-300 hover:border-crimson/60 transition-all duration-300 bg-white/50 backdrop-blur-sm">
            <Play className="w-5 h-5 md:w-6 md:h-6" />
            Watch Teaser
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-4 right-4 md:bottom-6 md:right-6 z-10 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
      >
        <Heart className="w-7 h-7 md:w-8 md:h-8 text-crimson fill-crimson" />
        <span className="font-headline text-2xl md:text-3xl tracking-wider text-grey-700">DUBAI</span>
      </motion.div>

      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 2.2, duration: 0.4 },
          y: { delay: 2.2, duration: 1.5, repeat: Infinity },
        }}
      >
        <div className="flex flex-col items-center gap-1.5 text-grey-400">
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase font-sans">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-grey-400 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
