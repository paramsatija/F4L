import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Play } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const heartScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const heartY = useTransform(scrollYProgress, [0, 0.5], [0, -50]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

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
    <section ref={containerRef} className="relative min-h-screen overflow-hidden bg-[#FDFBF7]">
      <motion.div
        className="absolute inset-0 opacity-[0.02]"
        style={{ opacity: backgroundOpacity }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4A574 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </motion.div>

      <motion.div
        className="absolute top-6 left-6 md:top-8 md:left-8 z-20 flex items-center gap-2"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <span className="font-headline text-3xl md:text-4xl tracking-wider text-grey-800">FFL</span>
        <Heart className="w-6 h-6 md:w-8 md:h-8 text-crimson fill-crimson" />
      </motion.div>

      <motion.div
        className="absolute top-6 right-6 md:top-8 md:right-8 z-20 text-right"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-grey-500">Presented By</p>
        <p className="font-playfair text-sm md:text-base text-grey-800 italic">For The Stars</p>
        <p className="font-headline text-lg md:text-xl tracking-wider text-gold">FASHION HOUSE</p>
      </motion.div>

      <motion.div
        className="absolute top-6 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="glass-dark px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-3 md:gap-4">
          <span className="text-[10px] md:text-xs text-white/60 uppercase tracking-wider">Event In</span>
          <div className="flex gap-2 md:gap-3">
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-2xl font-bold text-gold font-headline">{timeLeft.days}</span>
              <span className="text-[8px] md:text-[10px] text-white/50 uppercase">Days</span>
            </div>
            <span className="text-lg md:text-2xl text-white/30">:</span>
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-2xl font-bold text-gold font-headline">{timeLeft.hours}</span>
              <span className="text-[8px] md:text-[10px] text-white/50 uppercase">Hrs</span>
            </div>
            <span className="text-lg md:text-2xl text-white/30">:</span>
            <div className="flex flex-col items-center">
              <span className="text-lg md:text-2xl font-bold text-gold font-headline">{timeLeft.minutes}</span>
              <span className="text-[8px] md:text-[10px] text-white/50 uppercase">Min</span>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 z-10 max-w-[180px]"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <p className="font-playfair text-sm italic text-grey-600 leading-relaxed">
          "The go-to designer for A-list performers worldwide"
        </p>
        <p className="mt-2 text-xs tracking-[0.15em] uppercase text-gold font-sans">- Forbes</p>
      </motion.div>

      <motion.div
        className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 z-10 text-right max-w-[180px]"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <p className="font-headline text-4xl text-crimson leading-none">40</p>
        <p className="text-xs tracking-[0.2em] uppercase text-grey-600 mt-1">Years of</p>
        <p className="font-headline text-xl tracking-wider text-grey-800">HOLLYWOOD</p>
        <p className="font-headline text-xl tracking-wider text-grey-800">GLAMOUR</p>
      </motion.div>

      <div className="container mx-auto px-6 pt-24 md:pt-28 pb-8 relative z-10">
        <motion.div
          className="text-center mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="font-headline text-[clamp(3rem,12vw,10rem)] leading-[0.85] tracking-wider">
            <span className="text-grey-800">FASHIONS</span>
          </h1>
          <div className="flex items-center justify-center gap-3 md:gap-4 mt-2">
            <span className="font-playfair text-[clamp(1.5rem,5vw,3.5rem)] italic text-grey-600">for</span>
            <span className="font-headline text-[clamp(2rem,6vw,4.5rem)] tracking-wider relative">
              <span className="bg-gradient-to-r from-crimson via-crimson-light to-crimson bg-clip-text text-transparent">
                LOVE
              </span>
              <motion.div
                className="absolute -inset-4 bg-crimson/20 rounded-full blur-2xl -z-10"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
          </div>
          <motion.p
            className="font-playfair text-sm md:text-base italic text-grey-500 mt-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Jacob Meir presents
          </motion.p>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-[500px] md:max-w-[600px] aspect-square"
          style={{ scale: heartScale, y: heartY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        >
          <svg
            viewBox="0 0 512 512"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="heroHeartGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4A574" />
                <stop offset="50%" stopColor="#E8C8A0" />
                <stop offset="100%" stopColor="#D4A574" />
              </linearGradient>

              <filter id="heroHeartGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              <clipPath id="heroHeartClip">
                <path d={heartPath} />
              </clipPath>
            </defs>

            <motion.path
              d={heartPath}
              fill="none"
              stroke="#D4A574"
              strokeWidth="8"
              strokeOpacity="0.2"
              filter="url(#heroHeartGlow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.8 }}
            />

            <motion.path
              d={heartPath}
              fill="none"
              stroke="url(#heroHeartGradient)"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.8 }}
            />
          </svg>

          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          >
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: 'url(#heroHeartClip)' }}
            >
              <div className="absolute inset-0 bg-near-black">
                <img
                  src="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=1920"
                  alt="Burj Khalifa"
                  className="w-full h-full object-cover opacity-60"
                  style={{ objectPosition: 'center 30%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-near-black/40 via-transparent to-near-black/80" />
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-[5%] w-[15%] z-20"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 2, duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Burj Khalifa Tower"
                className="w-full h-auto object-contain"
                style={{
                  clipPath: 'polygon(35% 0, 65% 0, 75% 100%, 25% 100%)',
                  filter: 'brightness(1.1) contrast(1.1)',
                }}
              />
              <motion.div
                className="absolute -inset-2 bg-gold/30 blur-xl -z-10"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[25%] left-1/2 -translate-x-1/2 z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <Heart className="w-6 h-6 md:w-8 md:h-8 text-crimson fill-crimson drop-shadow-lg" />
          </motion.div>

          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0.5, 1, 0.5],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: 2.5 + i * 0.5,
              }}
            >
              <Heart className="w-3 h-3 md:w-4 md:h-4 text-crimson/40 fill-crimson/40" />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-6 md:mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="w-12 md:w-20 h-px bg-gradient-to-r from-transparent to-gold" />
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-grey-600 font-sans">
              Valentine's Eve
            </p>
            <div className="w-12 md:w-20 h-px bg-gradient-to-l from-transparent to-gold" />
          </div>
          <p className="font-headline text-2xl md:text-4xl tracking-wider text-crimson">
            13 FEBRUARY 2026
          </p>
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-grey-500 mt-2 font-sans">
            Armani Hotel | Burj Khalifa | Dubai
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 md:mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.6 }}
        >
          <button className="w-full sm:w-auto bg-gradient-to-r from-crimson to-crimson-light hover:from-crimson-light hover:to-crimson px-8 md:px-12 py-4 md:py-5 text-white font-headline text-base md:text-lg tracking-wider transition-all duration-300 hover:scale-105 shadow-crimson-intense">
            SECURE YOUR INVITATION
          </button>
          <button className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 md:px-10 py-4 md:py-5 text-grey-700 font-sans text-sm tracking-wider hover:text-crimson border-2 border-grey-300 hover:border-crimson/60 transition-all duration-300 bg-white/50 backdrop-blur-sm">
            <Play className="w-5 h-5" />
            Watch Teaser
          </button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      >
        <p className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-grey-500 font-sans">
          Where Hollywood Glamour
        </p>
        <p className="text-[10px] md:text-xs tracking-[0.15em] uppercase text-grey-500 font-sans">
          Meets Arabian Nights
        </p>
      </motion.div>

      <motion.div
        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-10 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 0.6 }}
      >
        <Heart className="w-5 h-5 md:w-6 md:h-6 text-crimson fill-crimson" />
        <span className="font-headline text-lg md:text-xl tracking-wider text-grey-700">DUBAI</span>
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          opacity: { delay: 3, duration: 0.5 },
          y: { delay: 3, duration: 2, repeat: Infinity },
        }}
      >
        <div className="flex flex-col items-center gap-2 text-grey-400">
          <span className="text-[10px] tracking-[0.3em] uppercase font-sans">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-grey-400 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
