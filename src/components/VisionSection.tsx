import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const slides = [
  {
    title: '40 years. 828 meters. One legacy.',
    description: 'Four decades of dressing Hollywood\'s greatest icons culminates in a single spectacular evening at the world\'s tallest tower.',
    stat: '40',
    statLabel: 'Years of Legacy',
  },
  {
    title: 'The venue transforms.',
    description: 'The Armani Hotel at Burj Khalifa becomes fashion\'s most romantic stage, elevated 828 meters above the desert.',
    stat: '828m',
    statLabel: 'Above Dubai',
  },
  {
    title: 'Imagine yourself there.',
    description: 'An evening where Hollywood glamour meets Arabian nights. Where music, fashion, and love unite under the stars.',
    stat: '600+',
    statLabel: 'Elite Guests',
  },
];

export function VisionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      id="vision"
      ref={containerRef}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-crimson/10 via-black to-black" />

      <motion.div style={{ opacity }} className="relative z-10 w-full h-screen flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center px-6 max-w-5xl"
          >
            <motion.div
              className="mb-12"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="text-[clamp(5rem,15vw,12rem)] font-headline font-light text-white/10 leading-none">
                {slides[currentSlide].stat}
              </div>
              <p className="text-white/60 text-sm tracking-[0.3em] uppercase mt-2">
                {slides[currentSlide].statLabel}
              </p>
            </motion.div>

            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-headline font-light text-white leading-tight mb-8">
              {slides[currentSlide].title}
            </h2>

            <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {slides[currentSlide].description}
            </p>

            <div className="flex items-center justify-center gap-3 mt-16">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className="group relative"
                >
                  <div
                    className={`h-0.5 transition-all duration-300 ${
                      index === currentSlide
                        ? 'w-12 bg-crimson'
                        : 'w-8 bg-white/30 group-hover:bg-white/50'
                    }`}
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white transition-colors"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-white/60 hover:text-white transition-colors"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </motion.div>
    </section>
  );
}
