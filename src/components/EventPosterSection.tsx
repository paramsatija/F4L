import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';
import { SectionDecorations } from './SectionDecorations';

export function EventPosterSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative bg-black py-16 lg:py-24 overflow-hidden">
      {/* Red Hearts & Decorative Elements */}
      <SectionDecorations variant="dark" />
      <FloatingValentineHearts />

      {/* Decorative border lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-champagne to-transparent" />
      </div>

      {/* Champagne & Gold Background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-champagne/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[900px] h-[900px] bg-gold/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-champagne/6 rounded-full blur-3xl" />
      </div>

      {/* Floating champagne sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-champagne rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `twinkle ${3 + Math.random() * 2}s infinite ${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT - Event Poster */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Decorative frame corners - Gold & Champagne */}
            <div className="absolute -inset-4 opacity-50">
              {/* Top left */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold rounded-tl-2xl shadow-[0_0_20px_rgba(212,165,116,0.5)]" />
              {/* Top right */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-champagne rounded-tr-2xl shadow-[0_0_20px_rgba(245,222,179,0.5)]" />
              {/* Bottom left */}
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-champagne rounded-bl-2xl shadow-[0_0_20px_rgba(245,222,179,0.5)]" />
              {/* Bottom right */}
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gold rounded-br-2xl shadow-[0_0_20px_rgba(212,165,116,0.5)]" />
            </div>

            {/* Glow behind poster - Gold & Champagne only */}
            <div className="absolute -inset-2 bg-gradient-to-br from-gold/40 via-champagne/30 to-gold/40 rounded-2xl blur-2xl opacity-70" />

            {/* Poster image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/20">
              <img
                src="/posters/Screenshot 2026-01-23 at 00.05.38.png"
                alt="Fashions for Love 2026 Event Poster"
                className="w-full h-auto"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating decorative elements - Gold & Champagne */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gold to-gold-champagne rounded-full blur-2xl opacity-70"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-champagne to-gold-champagne rounded-full blur-2xl opacity-70"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.7, 0.9, 0.7],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
            />
            <motion.div
              className="absolute top-1/2 -left-6 w-16 h-16 bg-gradient-to-br from-gold to-champagne rounded-full blur-xl opacity-60"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.6, 0.8, 0.6],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 0.5,
              }}
            />
          </motion.div>

          {/* RIGHT - Event Details + Countdown */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Section Title */}
            <div className="text-center lg:text-left">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="text-gold text-sm tracking-[0.4em] uppercase mb-3 font-sans font-semibold"
              >
                Mark Your Calendar
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="font-headline text-4xl lg:text-5xl text-white mb-4 uppercase font-bold"
                style={{
                  textShadow: '0 4px 20px rgba(212, 165, 116, 0.4)',
                }}
              >
                The Event Begins In
              </motion.h2>
            </div>

            {/* Countdown Timer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="relative"
            >
              {/* Decorative border - Gold & Champagne */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold via-champagne to-gold rounded-2xl opacity-30 blur-xl" />
              <div className="absolute -inset-2 bg-gradient-to-br from-gold/20 to-champagne/20 rounded-2xl blur-lg" />
              <div className="relative bg-gradient-to-br from-black/95 via-grey-900/40 to-black/95 backdrop-blur-xl rounded-2xl border-2 border-gold/40 p-6 lg:p-8 shadow-[0_0_60px_rgba(212,165,116,0.3)]">
                <CountdownTimer variant="large" />
              </div>
            </motion.div>

            {/* Event Details Cards - Gold & Champagne Theme */}
            <div className="grid grid-cols-1 gap-4">
              {/* Date */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all" />
                <div className="relative bg-black/80 backdrop-blur-sm border border-gold/40 rounded-xl p-4 lg:p-5 flex items-center gap-4 hover:border-gold/60 hover:shadow-[0_0_30px_rgba(212,165,116,0.2)] transition-all">
                  <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gold/30 to-gold-champagne/20 rounded-full flex items-center justify-center border-2 border-gold/50 shadow-[0_0_20px_rgba(212,165,116,0.3)]">
                    <Calendar className="w-6 h-6 lg:w-7 lg:h-7 text-gold" />
                  </div>
                  <div>
                    <p className="text-champagne/70 text-xs lg:text-sm font-medium mb-1 uppercase tracking-wider">Date</p>
                    <p className="text-white text-base lg:text-lg font-headline font-bold tracking-wide">
                      Valentine's Eve - February 13, 2026
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Venue */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-champagne/20 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all" />
                <div className="relative bg-black/80 backdrop-blur-sm border border-champagne/40 rounded-xl p-4 lg:p-5 flex items-center gap-4 hover:border-champagne/60 hover:shadow-[0_0_30px_rgba(245,222,179,0.2)] transition-all">
                  <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-champagne/30 to-gold/20 rounded-full flex items-center justify-center border-2 border-champagne/50 shadow-[0_0_20px_rgba(245,222,179,0.3)]">
                    <MapPin className="w-6 h-6 lg:w-7 lg:h-7 text-champagne" />
                  </div>
                  <div>
                    <p className="text-gold/70 text-xs lg:text-sm font-medium mb-1 uppercase tracking-wider">Venue</p>
                    <p className="text-white text-base lg:text-lg font-headline font-bold tracking-wide">
                      Armani Hotel, Burj Khalifa, Dubai
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-transparent rounded-xl blur-lg group-hover:blur-xl transition-all" />
                <div className="relative bg-black/80 backdrop-blur-sm border border-gold/40 rounded-xl p-4 lg:p-5 flex items-center gap-4 hover:border-gold/60 hover:shadow-[0_0_30px_rgba(212,165,116,0.2)] transition-all">
                  <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gold/30 to-champagne/20 rounded-full flex items-center justify-center border-2 border-gold/50 shadow-[0_0_20px_rgba(212,165,116,0.3)]">
                    <Clock className="w-6 h-6 lg:w-7 lg:h-7 text-gold" />
                  </div>
                  <div>
                    <p className="text-champagne/70 text-xs lg:text-sm font-medium mb-1 uppercase tracking-wider">Time</p>
                    <p className="text-white text-base lg:text-lg font-headline font-bold tracking-wide">
                      7:00 PM - 2:00 AM
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Call to action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="text-center lg:text-left"
            >
              <a href="#tickets" className="group inline-block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-gold to-gold-champagne rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                  <button className="relative bg-gradient-to-r from-gold via-gold-champagne to-gold text-grey-900 font-headline font-bold text-base lg:text-lg px-8 lg:px-12 py-4 lg:py-5 rounded-xl shadow-2xl hover:shadow-[0_0_40px_rgba(212,165,116,0.6)] transition-all duration-300 tracking-widest">
                    SECURE YOUR TICKETS
                  </button>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
