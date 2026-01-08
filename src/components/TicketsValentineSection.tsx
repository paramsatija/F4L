import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ChevronLeft, ChevronRight, Crown, Sparkles, Star } from 'lucide-react';
import { TICKET_TIERS } from '../constants/placeholders';

const tierIcons = {
  platinum: Crown,
  gold: Sparkles,
  silver: Star,
};

const tierParticles = {
  platinum: '✨💎✨',
  gold: '⭐🌟⭐',
  silver: '✦✧✦',
};

export function TicketsValentineSection() {
  const [currentTier, setCurrentTier] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const nextTier = () => {
    setCurrentTier((prev) => (prev + 1) % TICKET_TIERS.length);
  };

  const prevTier = () => {
    setCurrentTier((prev) => (prev - 1 + TICKET_TIERS.length) % TICKET_TIERS.length);
  };

  const tier = TICKET_TIERS[currentTier];
  const Icon = tierIcons[tier.id as keyof typeof tierIcons];

  return (
    <section
      id="tickets"
      ref={containerRef}
      className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-radial from-crimson/5 via-black to-black" />

      <motion.div style={{ opacity }} className="relative z-10 w-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-crimson text-xs tracking-[0.4em] uppercase mb-4">
            Your Invitation
          </p>
          <h2 className="font-headline text-4xl md:text-5xl text-white tracking-wide mb-6">
            CHOOSE YOUR PLACE IN HISTORY
          </h2>
          <p className="text-white/60 text-sm max-w-md mx-auto">
            127 seats remaining
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTier}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20"
                >
                  <Icon className="w-12 h-12 text-gold" />
                </motion.div>

                <h3 className="font-headline text-[clamp(3rem,8vw,6rem)] text-white font-light leading-none mb-4">
                  {tier.name.toUpperCase()}
                </h3>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="mb-8"
                >
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-white/60 text-2xl">{tier.currency}</span>
                    <span className="font-headline text-7xl md:text-8xl text-white font-light">
                      {tier.price.toLocaleString()}
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="space-y-3 mb-12 max-w-xl mx-auto"
                >
                  {tier.features.slice(0, 4).map((feature, index) => (
                    <motion.p
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                      className="text-white/70 text-lg"
                    >
                      {feature}
                    </motion.p>
                  ))}
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="px-16 py-6 bg-crimson hover:bg-crimson/90 text-white text-xl font-headline tracking-wider transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Reserve {tier.name.split(' ')[0]}
                </motion.button>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevTier}
              className="p-3 text-white/60 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <div className="flex items-center gap-3">
              {TICKET_TIERS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTier(index)}
                  className="group relative"
                >
                  <div
                    className={`h-0.5 transition-all duration-300 ${
                      index === currentTier
                        ? 'w-12 bg-crimson'
                        : 'w-8 bg-white/30 group-hover:bg-white/50'
                    }`}
                  />
                </button>
              ))}
            </div>

            <button
              onClick={nextTier}
              className="p-3 text-white/60 hover:text-white transition-colors"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-white/50 text-sm">
              No payment required. Reserve your option.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
