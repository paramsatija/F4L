import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Check, Crown, Star, Heart, ChevronDown } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { CountdownTimer } from './CountdownTimer';
import { TICKET_TIERS, VALENTINE_EXPERIENCES } from '../constants/placeholders';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';
import { FashionSketches } from './particles/FashionSketches';
import { SectionDecorations } from './SectionDecorations';

export function TicketsValentineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [expandedTier, setExpandedTier] = useState<string | null>(null);
  
  // Embla carousel for mobile
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
    containScroll: 'trimSnaps',
  });
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const tierIcons: Record<string, typeof Crown> = {
    platinum: Crown,
    gold: Star,
    silver: Star,
  };

  const tierColors: Record<string, { border: string; iconBg: string; iconColor: string; buttonBg: string; buttonHover: string; buttonText: string }> = {
    platinum: {
      border: 'border-gold',
      iconBg: 'bg-gold/10',
      iconColor: 'text-gold',
      buttonBg: 'bg-gold',
      buttonHover: 'hover:bg-gold-champagne',
      buttonText: 'text-white',
    },
    gold: {
      border: 'border-gold-champagne',
      iconBg: 'bg-gold-champagne/10',
      iconColor: 'text-gold-champagne',
      buttonBg: 'bg-gold-champagne',
      buttonHover: 'hover:bg-gold',
      buttonText: 'text-grey-900',
    },
    silver: {
      border: 'border-grey-400',
      iconBg: 'bg-grey-200',
      iconColor: 'text-grey-600',
      buttonBg: 'bg-grey-800',
      buttonHover: 'hover:bg-grey-700',
      buttonText: 'text-white',
    },
  };

  const renderCard = (tier: typeof TICKET_TIERS[0], index: number, isMobile = false) => {
    const Icon = tierIcons[tier.id];
    const colors = tierColors[tier.id];
    const isHighlight = tier.highlight;
    const visibleFeatures = tier.features.slice(0, 4);
    const hiddenFeatures = tier.features.slice(4);
    const hasMore = hiddenFeatures.length > 0;
    const isExpanded = expandedTier === tier.id;

    return (
      <motion.div
        key={tier.id}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: isMobile ? 0 : 0.2 + index * 0.1, duration: 0.4 }}
        className={`relative ${isMobile ? 'w-[85vw] flex-shrink-0' : ''} ${isHighlight && !isMobile ? 'md:-mt-6 md:mb-6' : ''}`}
      >
        {isHighlight && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-crimson text-white text-xs font-sans font-semibold tracking-wide px-4 py-1 rounded-full shadow-medium">
              MOST POPULAR
            </div>
          </div>
        )}

        <motion.div
          className={`relative rounded-xl overflow-hidden border-2 ${colors.border} bg-white h-full shadow-large`}
          whileHover={{ scale: isMobile ? 1 : 1.02, y: isMobile ? 0 : -8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <div className="relative p-6 md:p-8">
            {/* Icon and Tier Name */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                <div className={`w-12 h-12 rounded-full ${colors.iconBg} border ${colors.border} flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.iconColor}`} />
                </div>
                <h3 className="font-headline text-2xl md:text-3xl tracking-wide text-grey-900 font-bold mb-1">
                  {tier.name.toUpperCase()}
                </h3>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-sm text-grey-600 font-medium">
                  {tier.currency}
                </span>
                <span className="font-headline text-4xl md:text-5xl font-bold text-grey-900">
                  {tier.price.toLocaleString()}
                </span>
              </div>
              {isHighlight && (
                <div className="h-0.5 w-16 bg-gold rounded-full" />
              )}
            </div>

            {/* Features List */}
            <ul className="space-y-3 mb-6">
              {visibleFeatures.map((feature, idx) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: isMobile ? 0 : 0.3 + idx * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className={`flex-shrink-0 w-5 h-5 rounded-full ${colors.iconBg} border ${colors.border} flex items-center justify-center mt-0.5`}>
                    <Check className={`w-3 h-3 ${colors.iconColor}`} />
                  </div>
                  <span className="text-sm text-grey-700 leading-relaxed">
                    {feature}
                  </span>
                </motion.li>
              ))}

              {/* Collapsible Features */}
              <AnimatePresence>
                {isExpanded && hiddenFeatures.map((feature, idx) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-start gap-3 overflow-hidden"
                  >
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full ${colors.iconBg} border ${colors.border} flex items-center justify-center mt-0.5`}>
                      <Check className={`w-3 h-3 ${colors.iconColor}`} />
                    </div>
                    <span className="text-sm text-grey-700 leading-relaxed">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </AnimatePresence>

              {/* Expand/Collapse Button */}
              {hasMore && (
                <li>
                  <button
                    onClick={() => setExpandedTier(isExpanded ? null : tier.id)}
                    className="flex items-center gap-2 text-crimson text-sm font-medium hover:text-crimson-dark transition-colors mt-2"
                  >
                    <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                    {isExpanded ? 'Show less' : `+${hiddenFeatures.length} more features`}
                  </button>
                </li>
              )}
            </ul>

            {/* CTA Button */}
            <motion.button
              className={`w-full py-4 md:py-5 rounded-xl font-headline text-base md:text-lg tracking-wide transition-all shadow-medium hover:shadow-large ${colors.buttonBg} ${colors.buttonHover} ${colors.buttonText} font-bold`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              RESERVE {tier.name.split(' ')[0].toUpperCase()}
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  return (
    <section id="tickets" ref={containerRef} className="relative py-12 md:py-16 lg:py-24 bg-cream overflow-hidden">
      <SectionDecorations variant="light" />
      <FloatingValentineHearts count={25} variant="red" />
      <FashionSketches variant="dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-crimson text-sm tracking-[0.4em] uppercase mb-3 font-sans font-semibold">
            Your Invitation
          </p>
          <h2 className="font-display text-headline-xl text-grey-900 mb-4 uppercase font-bold">
            Reserve Your Place in Fashion History
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto mb-6" />

          <div className="inline-block mb-6">
            <CountdownTimer variant="small" />
          </div>

          {/* Progress Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.4 }}
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
                transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 mb-16">
          {TICKET_TIERS.map((tier, index) => renderCard(tier, index, false))}
        </div>

        {/* Mobile Carousel */}
        <div className="block md:hidden mb-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {TICKET_TIERS.map((tier, index) => renderCard(tier, index, true))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {TICKET_TIERS.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`h-2 rounded-full transition-all ${
                  selectedIndex === index
                    ? 'bg-crimson w-6'
                    : 'bg-grey-300 w-2'
                }`}
                aria-label={`Go to ticket ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Payment Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-grey-600 text-sm mb-2">
            Payment plans available | All major cards accepted
          </p>
          <p className="text-crimson text-sm font-medium">
            Limited to 600 guests. Previous editions sold out in 72 hours.
          </p>
        </motion.div>

        {/* Valentine Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.4 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Heart className="w-5 h-5 text-crimson fill-crimson" />
            <p className="text-grey-600 text-sm tracking-[0.4em] uppercase font-medium">
              The Romance
            </p>
          </div>
          <h3 className="font-display text-display-md text-grey-900 mb-4 uppercase font-bold">
            Where Fashion Meets Love
          </h3>
          <p className="text-grey-600 text-base max-w-3xl mx-auto leading-relaxed">
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
              className="glass-light p-6 rounded-lg border border-grey-200 hover:border-crimson/40 transition-all duration-300"
            >
              <h4 className="text-grey-900 text-base font-semibold mb-2">
                {experience.title}
              </h4>
              <p className="text-grey-600 text-sm leading-relaxed">
                {experience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
