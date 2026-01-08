import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Sparkles, Crown, Star, Heart } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { TICKET_TIERS, VALENTINE_EXPERIENCES } from '../constants/placeholders';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';

export function TicketsValentineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const tierIcons: Record<string, typeof Crown> = {
    platinum: Crown,
    gold: Sparkles,
    silver: Star,
  };

  const tierColors: Record<string, { bg: string; border: string; text: string; accent: string; glow: string }> = {
    platinum: {
      bg: 'bg-gradient-to-br from-amber-900 via-yellow-800 to-amber-950',
      border: 'border-gold',
      text: 'text-gold',
      accent: 'from-gold/30 via-amber-400/20',
      glow: 'shadow-[0_0_40px_rgba(212,165,116,0.3)]',
    },
    gold: {
      bg: 'bg-gradient-to-br from-yellow-700/30 via-amber-600/20 to-yellow-800/30',
      border: 'border-gold-champagne',
      text: 'text-gold-champagne',
      accent: 'from-gold-champagne/20 via-yellow-500/10',
      glow: 'shadow-[0_0_30px_rgba(212,165,116,0.2)]',
    },
    silver: {
      bg: 'bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900',
      border: 'border-slate-500',
      text: 'text-slate-300',
      accent: 'from-slate-600/30 via-slate-500/20',
      glow: 'shadow-[0_0_20px_rgba(148,163,184,0.15)]',
    },
  };

  return (
    <section id="tickets" ref={containerRef} className="relative py-16 bg-dark-red overflow-hidden">
      <FloatingValentineHearts count={25} variant="gold" />

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-vibrant-red/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-vibrant-red text-sm tracking-[0.4em] uppercase mb-3 font-sans">
            Your Invitation
          </p>
          <h2 className="font-display text-headline-xl text-white mb-4 uppercase">
            Reserve Your Place in Fashion History
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-vibrant-red to-transparent mx-auto mb-6" />

          <div className="inline-block mb-6">
            <CountdownTimer variant="small" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="max-w-md mx-auto"
          >
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="text-white/60 font-medium">73% Reserved</span>
              <span className="text-vibrant-red font-semibold">Only 162 Seats Remaining</span>
            </div>
            <div className="relative h-2 bg-grey-800 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-vibrant-red to-crimson rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: '73%' } : {}}
                transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 mb-16">
          {TICKET_TIERS.map((tier, index) => {
            const Icon = tierIcons[tier.id];
            const colors = tierColors[tier.id];
            const isHighlight = tier.highlight;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
                onMouseEnter={() => setHoveredTier(tier.id)}
                onMouseLeave={() => setHoveredTier(null)}
                className={`relative ${isHighlight ? 'md:-mt-6 md:mb-6' : ''}`}
              >
                {isHighlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-vibrant-red text-white text-xs font-headline tracking-wider px-4 py-1.5 rounded-full">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <motion.div
                  className={`relative rounded-2xl overflow-hidden border-4 ${colors.border} ${colors.bg} h-full ${colors.glow} shadow-2xl`}
                  whileHover={{ scale: 1.05, y: -12 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                >
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold/30 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gold/30 rounded-br-2xl" />

                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.accent} to-transparent opacity-60`} />

                  {isHighlight && (
                    <motion.div
                      className="absolute inset-0 opacity-20"
                      animate={{
                        background: [
                          'radial-gradient(circle at 0% 0%, rgba(212,165,116,0.3) 0%, transparent 50%)',
                          'radial-gradient(circle at 100% 100%, rgba(212,165,116,0.3) 0%, transparent 50%)',
                          'radial-gradient(circle at 0% 0%, rgba(212,165,116,0.3) 0%, transparent 50%)',
                        ],
                      }}
                      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}

                  <div className="relative p-8">
                    {tier.id === 'platinum' && (
                      <div className="absolute top-4 right-4">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        >
                          <Sparkles className="w-6 h-6 text-gold opacity-40" />
                        </motion.div>
                      </div>
                    )}

                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <motion.div
                          className={`w-16 h-16 rounded-xl ${
                            isHighlight
                              ? 'bg-gradient-to-br from-gold/40 to-amber-500/30 shadow-[0_0_20px_rgba(212,165,116,0.4)]'
                              : tier.id === 'gold'
                              ? 'bg-gradient-to-br from-gold-champagne/30 to-yellow-600/20 shadow-[0_0_15px_rgba(212,165,116,0.3)]'
                              : 'bg-slate-700/60 shadow-[0_0_10px_rgba(0,0,0,0.3)]'
                          } flex items-center justify-center mb-4 backdrop-blur-sm border-2 ${
                            isHighlight ? 'border-gold/60' : tier.id === 'gold' ? 'border-gold-champagne/50' : 'border-slate-500/40'
                          }`}
                          whileHover={{ rotate: [0, -15, 15, -15, 0], scale: 1.15 }}
                          transition={{ duration: 0.6 }}
                        >
                          <Icon className={`w-8 h-8 ${colors.text}`} />
                        </motion.div>
                        <h3 className={`font-headline text-3xl tracking-wide ${isHighlight ? 'text-white' : 'text-white/90'} mb-1 font-bold`}>
                          {tier.name.toUpperCase()}
                        </h3>
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-baseline gap-3 mb-3">
                        <span className={`text-base font-bold ${isHighlight ? 'text-gold/90' : 'text-white/70'}`}>
                          {tier.currency}
                        </span>
                        <span
                          className={`font-headline text-6xl font-extrabold bg-gradient-to-br ${
                            isHighlight
                              ? 'from-gold via-amber-300 to-gold-champagne drop-shadow-[0_2px_10px_rgba(212,165,116,0.5)]'
                              : tier.id === 'gold'
                              ? 'from-gold-champagne via-yellow-400 to-gold drop-shadow-[0_2px_8px_rgba(212,165,116,0.3)]'
                              : 'from-slate-200 to-slate-400'
                          } bg-clip-text text-transparent`}
                        >
                          {tier.price.toLocaleString()}
                        </span>
                      </div>
                      {isHighlight && (
                        <motion.div
                          className="h-1.5 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full shadow-[0_0_10px_rgba(212,165,116,0.5)]"
                          animate={{ opacity: [0.6, 1, 0.6] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, idx) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.3 + idx * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full ${
                              isHighlight
                                ? 'bg-gradient-to-br from-gold/30 to-amber-500/20 border border-gold/40'
                                : tier.id === 'gold'
                                ? 'bg-gold-champagne/20 border border-gold-champagne/30'
                                : 'bg-slate-600/30 border border-slate-500/30'
                            } flex items-center justify-center mt-0.5`}
                          >
                            <Heart className={`w-3 h-3 ${colors.text} fill-current`} />
                          </div>
                          <span className={`text-sm leading-relaxed ${isHighlight ? 'text-white/90' : 'text-white/80'}`}>
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.button
                      className={`w-full py-5 rounded-xl font-headline text-lg tracking-wider transition-all relative overflow-hidden group border-2 ${
                        isHighlight
                          ? 'bg-gradient-to-r from-gold via-amber-400 to-gold text-grey-900 shadow-[0_12px_40px_rgba(212,165,116,0.5)] border-gold hover:shadow-[0_16px_50px_rgba(212,165,116,0.7)]'
                          : tier.id === 'gold'
                          ? 'bg-gradient-to-r from-gold-champagne to-gold text-grey-900 border-gold-champagne shadow-[0_8px_30px_rgba(212,165,116,0.3)]'
                          : 'bg-gradient-to-r from-slate-600 to-slate-700 text-white border-slate-500 shadow-[0_8px_20px_rgba(0,0,0,0.3)]'
                      }`}
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.96 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                      />
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-white to-transparent"
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 flex items-center justify-center gap-3 font-bold">
                        <Crown className="w-5 h-5" />
                        RESERVE {tier.name.split(' ')[0].toUpperCase()}
                        <Sparkles className="w-4 h-4" />
                      </span>
                    </motion.button>
                  </div>

                  {hoveredTier === tier.id && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className={`absolute inset-0 border-4 ${colors.border} rounded-2xl`} />
                      <motion.div
                        className={`absolute inset-0 border-2 ${colors.border} rounded-2xl`}
                        animate={{ scale: [1, 1.02, 1], opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-white/60 text-sm mb-2">
            Payment plans available | All major cards accepted
          </p>
          <p className="text-vibrant-red text-sm font-medium">
            Limited to 600 guests. Previous editions sold out in 72 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Heart className="w-5 h-5 text-vibrant-red fill-vibrant-red" />
            <p className="text-white/70 text-sm tracking-[0.4em] uppercase">
              The Romance
            </p>
          </div>
          <h3 className="font-display text-display-md text-white mb-4 uppercase">
            Where Fashion Meets Love
          </h3>
          <p className="text-white/60 text-base max-w-3xl mx-auto leading-relaxed">
            Valentine's Eve in Dubai. The world's most spectacular city transforms into a canvas of romance
            as the Burj Khalifa glows with ten thousand hearts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {VALENTINE_EXPERIENCES.slice(0, 3).map((experience, index) => (
            <motion.div
              key={experience.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.08, duration: 0.4 }}
              className="glass-dark p-6 rounded-lg hover:border-vibrant-red/30 border border-transparent transition-all duration-300"
            >
              <h4 className="text-white text-base font-semibold mb-2">
                {experience.title}
              </h4>
              <p className="text-white/70 text-sm leading-relaxed">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
