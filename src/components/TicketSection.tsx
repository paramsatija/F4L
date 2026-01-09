import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Sparkles, Crown, Star } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { TICKET_TIERS } from '../constants/placeholders';

export function TicketSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [hoveredTier, setHoveredTier] = useState<string | null>(null);

  const tierIcons: Record<string, typeof Crown> = {
    platinum: Crown,
    gold: Sparkles,
    silver: Star,
  };

  const tierColors: Record<string, { bg: string; border: string; text: string; accent: string }> = {
    platinum: {
      bg: 'bg-gradient-to-br from-grey-900 via-grey-800 to-grey-900',
      border: 'border-gold',
      text: 'text-gold',
      accent: 'from-gold/20',
    },
    gold: {
      bg: 'bg-gradient-to-br from-gold/10 via-gold/5 to-gold/10',
      border: 'border-gold/50',
      text: 'text-gold',
      accent: 'from-gold/10',
    },
    silver: {
      bg: 'bg-white',
      border: 'border-grey-200',
      text: 'text-grey-600',
      accent: 'from-grey-100',
    },
  };

  return (
    <section id="tickets" ref={containerRef} className="relative py-32 bg-beige-light overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-beige-light to-white" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-crimson text-sm tracking-[0.4em] uppercase mb-4 font-sans">
            Your Invitation
          </p>
          <h2 className="font-display text-display-lg text-grey-900 mb-6">
            Reserve Your Place in Fashion History
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto mb-8" />

          <div className="inline-block mb-8">
            <CountdownTimer variant="small" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-md mx-auto"
          >
            <div className="flex items-center justify-between mb-2 text-sm">
              <span className="text-grey-600 font-medium">73% Reserved</span>
              <span className="text-crimson font-semibold">Only 162 Seats Remaining</span>
            </div>
            <div className="relative h-2 bg-grey-200 rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-crimson to-crimson-light rounded-full"
                initial={{ width: 0 }}
                animate={isInView ? { width: '73%' } : {}}
                transition={{ delay: 0.5, duration: 1.2, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          {TICKET_TIERS.map((tier, index) => {
            const Icon = tierIcons[tier.id];
            const colors = tierColors[tier.id];
            const isHighlight = tier.highlight;

            return (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                onMouseEnter={() => setHoveredTier(tier.id)}
                onMouseLeave={() => setHoveredTier(null)}
                className={`relative ${isHighlight ? 'md:-mt-8 md:mb-8' : ''}`}
              >
                {isHighlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <div className="bg-crimson text-white text-xs font-headline tracking-wider px-4 py-1.5 rounded-full">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <motion.div
                  className={`relative rounded-2xl overflow-hidden border-2 ${colors.border} ${colors.bg} h-full`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-b ${colors.accent} to-transparent opacity-50`} />

                  <div className="relative p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <div className={`w-12 h-12 rounded-xl ${isHighlight ? 'bg-gold/20' : 'bg-grey-100'} flex items-center justify-center mb-4`}>
                          <Icon className={`w-6 h-6 ${colors.text}`} />
                        </div>
                        <h3 className={`font-headline text-2xl tracking-wide ${isHighlight ? 'text-stark' : 'text-grey-900'}`}>
                          {tier.name.toUpperCase()}
                        </h3>
                      </div>
                    </div>

                    <div className="mb-8">
                      <div className="flex items-baseline gap-1">
                        <span className={`text-sm ${isHighlight ? 'text-stark/60' : 'text-grey-500'}`}>
                          {tier.currency}
                        </span>
                        <span className={`font-headline text-5xl ${isHighlight ? 'text-gold' : 'text-grey-900'}`}>
                          {tier.price.toLocaleString()}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {tier.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 0.4 + index * 0.1 + featureIndex * 0.05, duration: 0.4 }}
                          className="flex items-start gap-3"
                        >
                          <div className={`flex-shrink-0 w-5 h-5 rounded-full ${isHighlight ? 'bg-gold/20' : 'bg-crimson/10'} flex items-center justify-center mt-0.5`}>
                            <Check className={`w-3 h-3 ${isHighlight ? 'text-gold' : 'text-crimson'}`} />
                          </div>
                          <span className={`text-sm ${isHighlight ? 'text-stark/80' : 'text-grey-600'}`}>
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.button
                      className={`w-full py-4 rounded-xl font-headline text-lg tracking-wider transition-all ${
                        isHighlight
                          ? 'bg-gradient-to-r from-gold to-gold-champagne text-grey-900 hover:shadow-[0_8px_30px_rgba(212,165,116,0.4)]'
                          : 'bg-crimson text-white hover:bg-crimson-dark hover:shadow-crimson'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      data-cursor="hover"
                    >
                      RESERVE {tier.name.split(' ')[0].toUpperCase()}
                    </motion.button>
                  </div>

                  {hoveredTier === tier.id && (
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      <div className={`absolute inset-0 border-2 ${colors.border} rounded-2xl`} />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-12 space-y-4"
        >
          <p className="text-grey-600 text-sm">
            Payment plans available | All major cards accepted
          </p>
          <p className="text-crimson text-sm font-medium mt-6">
            Limited to 600 guests. Previous editions sold out in 72 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
