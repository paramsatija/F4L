import { useRef, useState, useCallback, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Check, Crown, Star, Users, Wine, Eye, Heart, ChevronDown, Ticket } from 'lucide-react';
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
    red: Crown,
    gold: Star,
    silver: Users,
    black: Wine,
    balcony: Eye,
  };

  const tierColors: Record<string, { 
    border: string; 
    iconBg: string; 
    iconColor: string; 
    buttonBg: string; 
    buttonHover: string; 
    buttonText: string;
    cardBg: string;
    glow: string;
    textColor: string;
    priceColor: string;
  }> = {
    red: {
      border: 'border-gold',
      iconBg: 'bg-gold/20',
      iconColor: 'text-gold',
      buttonBg: 'bg-gold',
      buttonHover: 'hover:bg-gold-champagne hover:shadow-[0_8px_30px_rgba(212,165,116,0.6)]',
      buttonText: 'text-crimson-dark',
      cardBg: 'bg-gradient-to-br from-[#CF0F0F] via-[#A8324E] to-[#8B0000]',
      glow: 'shadow-[0_0_50px_rgba(207,15,15,0.4)]',
      textColor: 'text-white',
      priceColor: 'text-gold',
    },
    gold: {
      border: 'border-[#8B6914]',
      iconBg: 'bg-[#8B6914]/20',
      iconColor: 'text-[#8B6914]',
      buttonBg: 'bg-gradient-to-r from-[#8B6914] to-[#6B5310]',
      buttonHover: 'hover:shadow-[0_8px_30px_rgba(212,165,116,0.6)]',
      buttonText: 'text-white',
      cardBg: 'bg-gradient-to-br from-[#D4A574] via-[#C9A87C] to-[#B8956A]',
      glow: 'shadow-[0_0_45px_rgba(212,165,116,0.4)]',
      textColor: 'text-[#3D3D3D]',
      priceColor: 'text-[#3D3D3D]',
    },
    silver: {
      border: 'border-[#8E8E8E]',
      iconBg: 'bg-white/30',
      iconColor: 'text-[#525252]',
      buttonBg: 'bg-[#6B6B6B]',
      buttonHover: 'hover:bg-[#525252]',
      buttonText: 'text-white',
      cardBg: 'bg-gradient-to-br from-[#C0C0C0] via-[#D4D4D4] to-[#B8B8B8]',
      glow: 'shadow-[0_0_35px_rgba(192,192,192,0.3)]',
      textColor: 'text-[#1A1A1A]',
      priceColor: 'text-[#2D2D2D]',
    },
    black: {
      border: 'border-gold',
      iconBg: 'bg-gold/20',
      iconColor: 'text-gold',
      buttonBg: 'bg-gold',
      buttonHover: 'hover:bg-gold-champagne',
      buttonText: 'text-[#1A1A1A]',
      cardBg: 'bg-gradient-to-br from-[#1A1A1A] via-[#000000] to-[#0D0D0D]',
      glow: 'shadow-[0_0_45px_rgba(0,0,0,0.6)]',
      textColor: 'text-white',
      priceColor: 'text-gold',
    },
    balcony: {
      border: 'border-[#1E3A8A]',
      iconBg: 'bg-[#1E3A8A]/20',
      iconColor: 'text-[#1E3A8A]',
      buttonBg: 'bg-[#1E3A8A]',
      buttonHover: 'hover:bg-[#1E40AF]',
      buttonText: 'text-white',
      cardBg: 'bg-gradient-to-br from-[#3B82F6] via-[#60A5FA] to-[#2563EB]',
      glow: 'shadow-[0_0_40px_rgba(59,130,246,0.35)]',
      textColor: 'text-white',
      priceColor: 'text-white',
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
        className={`relative ${isMobile ? 'w-[85vw] flex-shrink-0' : ''} ${isHighlight && !isMobile ? 'md:-mt-8 md:mb-8 md:scale-105' : ''}`}
      >

        <motion.div
          className={`relative rounded-2xl overflow-hidden border-4 ${colors.border} ${colors.cardBg} h-full ${colors.glow} ${isHighlight ? 'ring-4 ring-gold/30' : 'ring-2 ring-white/10'}`}
          whileHover={{ scale: isMobile ? 1 : 1.05, y: isMobile ? 0 : -12 }}
          animate={isHighlight ? {
            borderColor: ['rgb(212, 165, 116)', 'rgb(255, 215, 0)', 'rgb(212, 165, 116)'],
          } : {}}
          transition={{ 
            type: 'spring', 
            stiffness: 300, 
            damping: 20,
            ...(isHighlight ? { duration: 3, repeat: Infinity } : {})
          }}
          style={{
            boxShadow: `
              ${isHighlight ? '0 0 60px rgba(212, 165, 116, 0.5),' : ''}
              inset 0 1px 0 rgba(255, 255, 255, 0.1),
              0 20px 50px -10px rgba(0, 0, 0, 0.3)
            `
          }}
        >
          {/* Theme-specific background textures */}
          {tier.id === 'red' && (
            <>
              {/* Hollywood Red Carpet + Valentine Hearts */}
              <div className="absolute inset-0 opacity-[0.12]" style={{
                backgroundImage: `
                  radial-gradient(circle at 20% 30%, rgba(0, 0, 0, 0.2) 0%, transparent 40%),
                  radial-gradient(circle at 80% 70%, rgba(212, 165, 116, 0.3) 0%, transparent 40%)
                `,
              }} />
              {/* Scattered hearts pattern */}
              <Heart className="absolute top-12 right-16 w-20 h-20 text-gold opacity-[0.12] rotate-12" fill="currentColor" />
              <Heart className="absolute top-32 left-20 w-16 h-16 text-black opacity-[0.08] -rotate-6" fill="currentColor" />
              <Heart className="absolute bottom-20 right-24 w-24 h-24 text-gold opacity-[0.10] rotate-[-15deg]" fill="currentColor" />
              <Heart className="absolute bottom-32 left-16 w-14 h-14 text-black opacity-[0.08] rotate-20" fill="currentColor" />
              {/* Gold shimmer stars */}
              <div className="absolute top-20 left-12 w-3 h-3 bg-gold rounded-full opacity-40" />
              <div className="absolute top-40 right-20 w-2 h-2 bg-gold rounded-full opacity-30" />
              <div className="absolute bottom-24 left-24 w-2.5 h-2.5 bg-gold rounded-full opacity-35" />
            </>
          )}

          {tier.id === 'gold' && (
            <>
              {/* Arabian Geometric Patterns */}
              <div className="absolute inset-0 opacity-[0.12]" style={{
                backgroundImage: `
                  repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(139, 92, 46, 0.15) 20px, rgba(139, 92, 46, 0.15) 40px),
                  repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(139, 92, 46, 0.12) 20px, rgba(139, 92, 46, 0.12) 40px)
                `,
              }} />
              {/* Islamic geometric star patterns */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-12 h-12 border-2 border-gold-champagne opacity-[0.15] rotate-45"
                  style={{
                    top: `${15 + (i % 2) * 60}%`,
                    left: `${10 + (i % 4) * 25}%`,
                    clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)'
                  }}
                />
              ))}
            </>
          )}

          {tier.id === 'silver' && (
            <>
              {/* Valentine's Hearts + Hollywood Elegance */}
              <div className="absolute inset-0 opacity-[0.08]" style={{
                backgroundImage: `
                  radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.2) 0%, transparent 50%)
                `,
              }} />
              {/* Elegant heart outlines */}
              {[...Array(6)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute text-grey-600 opacity-[0.12]"
                  fill="none"
                  strokeWidth={1.5}
                  style={{
                    width: `${20 + (i % 3) * 8}px`,
                    height: `${20 + (i % 3) * 8}px`,
                    top: `${10 + (i * 15)}%`,
                    left: `${i % 2 === 0 ? '10%' : '75%'}`,
                    transform: `rotate(${i * 15}deg)`
                  }}
                />
              ))}
            </>
          )}

          {tier.id === 'black' && (
            <>
              {/* Arabian Nights + Sheesha Lounge */}
              <div className="absolute inset-0 opacity-[0.15]" style={{
                backgroundImage: `
                  radial-gradient(circle at 30% 40%, rgba(212, 165, 116, 0.15) 0%, transparent 40%),
                  radial-gradient(circle at 70% 60%, rgba(212, 165, 116, 0.12) 0%, transparent 40%)
                `,
              }} />
              {/* Geometric Middle Eastern patterns */}
              <div className="absolute inset-0 opacity-[0.10]" style={{
                backgroundImage: `
                  repeating-conic-gradient(from 0deg at 50% 50%, transparent 0deg, rgba(212, 165, 116, 0.3) 45deg, transparent 90deg)
                `,
                backgroundSize: '80px 80px'
              }} />
              {/* Arabesque curves */}
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-16 h-16 border-2 border-gold opacity-[0.15] rounded-full"
                  style={{
                    top: `${20 + i * 20}%`,
                    left: `${i % 2 === 0 ? '15%' : '70%'}`,
                  }}
                />
              ))}
            </>
          )}

          {tier.id === 'balcony' && (
            <>
              {/* Burj Khalifa Silhouette + Elevated View */}
              <div className="absolute inset-0 opacity-[0.12]" style={{
                backgroundImage: `
                  linear-gradient(to top, rgba(255, 255, 255, 0.2) 0%, transparent 60%)
                `,
              }} />
              {/* Architectural lines (representing building) */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-px bg-blue-700 opacity-[0.15]"
                  style={{
                    height: `${40 + (i % 3) * 15}%`,
                    bottom: '0',
                    left: `${20 + i * 6}%`,
                  }}
                />
              ))}
              {/* Stars for night sky */}
              {[...Array(15)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-40"
                  style={{
                    top: `${5 + (i * 5)}%`,
                    left: `${10 + (i * 6)}%`,
                  }}
                />
              ))}
            </>
          )}

          {/* Art Deco Corner Ornaments - Enhanced for each theme */}
          {/* TOP LEFT CORNER */}
          <div className="absolute top-0 left-0 w-20 h-20 opacity-40">
            {/* Outer frame */}
            <div className={`absolute top-0 left-0 w-full h-0.5 ${tier.id === 'red' ? 'bg-gradient-to-r from-gold via-white to-transparent' : tier.id === 'gold' ? 'bg-gradient-to-r from-gold-champagne to-transparent' : tier.id === 'black' ? 'bg-gradient-to-r from-gold via-white to-transparent' : tier.id === 'balcony' ? 'bg-gradient-to-r from-blue-700 to-transparent' : 'bg-gradient-to-r from-grey-600 to-transparent'}`} />
            <div className={`absolute top-0 left-0 w-0.5 h-full ${tier.id === 'red' ? 'bg-gradient-to-b from-gold via-white to-transparent' : tier.id === 'gold' ? 'bg-gradient-to-b from-gold-champagne to-transparent' : tier.id === 'black' ? 'bg-gradient-to-b from-gold via-white to-transparent' : tier.id === 'balcony' ? 'bg-gradient-to-b from-blue-700 to-transparent' : 'bg-gradient-to-b from-grey-600 to-transparent'}`} />
            {/* Inner ornamental curves */}
            <div className={`absolute top-2 left-2 w-10 h-10 border-t-2 border-l-2 ${colors.border} rounded-tl-3xl`} />
            <div className={`absolute top-4 left-4 w-6 h-6 border-t border-l ${colors.border} rounded-tl-2xl`} />
            {/* Decorative dots */}
            <div className={`absolute top-1 left-8 w-1 h-1 rounded-full ${tier.id === 'red' ? 'bg-gold' : 'bg-current'}`} />
            <div className={`absolute top-8 left-1 w-1 h-1 rounded-full ${tier.id === 'red' ? 'bg-gold' : 'bg-current'}`} />
          </div>

          {/* TOP RIGHT CORNER */}
          <div className="absolute top-0 right-0 w-20 h-20 opacity-40">
            <div className={`absolute top-0 right-0 w-full h-0.5 ${tier.id === 'red' ? 'bg-gradient-to-l from-gold via-white to-transparent' : tier.id === 'gold' ? 'bg-gradient-to-l from-gold-champagne to-transparent' : tier.id === 'black' ? 'bg-gradient-to-l from-gold via-white to-transparent' : tier.id === 'balcony' ? 'bg-gradient-to-l from-blue-700 to-transparent' : 'bg-gradient-to-l from-grey-600 to-transparent'}`} />
            <div className={`absolute top-0 right-0 w-0.5 h-full ${tier.id === 'red' ? 'bg-gradient-to-b from-gold via-white to-transparent' : tier.id === 'gold' ? 'bg-gradient-to-b from-gold-champagne to-transparent' : tier.id === 'black' ? 'bg-gradient-to-b from-gold via-white to-transparent' : tier.id === 'balcony' ? 'bg-gradient-to-b from-blue-700 to-transparent' : 'bg-gradient-to-b from-grey-600 to-transparent'}`} />
            <div className={`absolute top-2 right-2 w-10 h-10 border-t-2 border-r-2 ${colors.border} rounded-tr-3xl`} />
            <div className={`absolute top-4 right-4 w-6 h-6 border-t border-r ${colors.border} rounded-tr-2xl`} />
            <div className={`absolute top-1 right-8 w-1 h-1 rounded-full ${tier.id === 'red' ? 'bg-gold' : 'bg-current'}`} />
            <div className={`absolute top-8 right-1 w-1 h-1 rounded-full ${tier.id === 'red' ? 'bg-gold' : 'bg-current'}`} />
          </div>

          {/* BOTTOM LEFT CORNER */}
          <div className="absolute bottom-0 left-0 w-20 h-20 opacity-40">
            <div className={`absolute bottom-0 left-0 w-full h-0.5 ${tier.id === 'red' ? 'bg-gradient-to-r from-gold via-white to-transparent' : tier.id === 'gold' ? 'bg-gradient-to-r from-gold-champagne to-transparent' : tier.id === 'black' ? 'bg-gradient-to-r from-gold via-white to-transparent' : tier.id === 'balcony' ? 'bg-gradient-to-r from-blue-700 to-transparent' : 'bg-gradient-to-r from-grey-600 to-transparent'}`} />
            <div className={`absolute bottom-0 left-0 w-0.5 h-full ${tier.id === 'red' ? 'bg-gradient-to-t from-gold via-white to-transparent' : tier.id === 'gold' ? 'bg-gradient-to-t from-gold-champagne to-transparent' : tier.id === 'black' ? 'bg-gradient-to-t from-gold via-white to-transparent' : tier.id === 'balcony' ? 'bg-gradient-to-t from-blue-700 to-transparent' : 'bg-gradient-to-t from-grey-600 to-transparent'}`} />
            <div className={`absolute bottom-2 left-2 w-10 h-10 border-b-2 border-l-2 ${colors.border} rounded-bl-3xl`} />
            <div className={`absolute bottom-4 left-4 w-6 h-6 border-b border-l ${colors.border} rounded-bl-2xl`} />
            <div className={`absolute bottom-1 left-8 w-1 h-1 rounded-full ${tier.id === 'red' || tier.id === 'black' ? 'bg-gold' : 'bg-current'}`} />
            <div className={`absolute bottom-8 left-1 w-1 h-1 rounded-full ${tier.id === 'red' || tier.id === 'black' ? 'bg-gold' : 'bg-current'}`} />
          </div>

          {/* BOTTOM RIGHT CORNER */}
          <div className="absolute bottom-0 right-0 w-20 h-20 opacity-40">
            <div className={`absolute bottom-0 right-0 w-full h-0.5 ${tier.id === 'red' ? 'bg-gradient-to-l from-gold via-white to-transparent' : tier.id === 'gold' ? 'bg-gradient-to-l from-gold-champagne to-transparent' : tier.id === 'black' ? 'bg-gradient-to-l from-gold via-white to-transparent' : tier.id === 'balcony' ? 'bg-gradient-to-l from-blue-700 to-transparent' : 'bg-gradient-to-l from-grey-600 to-transparent'}`} />
            <div className={`absolute bottom-0 right-0 w-0.5 h-full ${tier.id === 'red' ? 'bg-gradient-to-t from-gold via-white to-transparent' : tier.id === 'gold' ? 'bg-gradient-to-t from-gold-champagne to-transparent' : tier.id === 'black' ? 'bg-gradient-to-t from-gold via-white to-transparent' : tier.id === 'balcony' ? 'bg-gradient-to-t from-blue-700 to-transparent' : 'bg-gradient-to-t from-grey-600 to-transparent'}`} />
            <div className={`absolute bottom-2 right-2 w-10 h-10 border-b-2 border-r-2 ${colors.border} rounded-br-3xl`} />
            <div className={`absolute bottom-4 right-4 w-6 h-6 border-b border-r ${colors.border} rounded-br-2xl`} />
            <div className={`absolute bottom-1 right-8 w-1 h-1 rounded-full ${tier.id === 'red' || tier.id === 'black' ? 'bg-gold' : 'bg-current'}`} />
            <div className={`absolute bottom-8 right-1 w-1 h-1 rounded-full ${tier.id === 'red' || tier.id === 'black' ? 'bg-gold' : 'bg-current'}`} />
          </div>

          {/* Luxury texture overlays */}
          {/* Fabric/Velvet grain texture */}
          <div className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay" style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px),
              repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(0,0,0,0.05) 2px, rgba(0,0,0,0.05) 4px)
            `,
          }} />
          
          {/* Metallic shimmer for Gold/Silver */}
          {(tier.id === 'gold' || tier.id === 'silver') && (
            <motion.div
              className="absolute inset-0 pointer-events-none opacity-30"
              style={{
                background: `linear-gradient(110deg, transparent 0%, transparent 40%, rgba(255, 255, 255, 0.6) 50%, transparent 60%, transparent 100%)`,
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['200% 0', '-200% 0'],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          )}

          {/* Glossy finish highlight */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-20" 
            style={{
              background: 'linear-gradient(180deg, rgba(255,255,255,0.4) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.2) 100%)',
            }}
          />

          <div className="relative p-5 md:p-6">
            {/* Icon and Tier Name */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex-1">
                {/* Enhanced Icon Badge - 3D Embossed */}
                <motion.div 
                  className={`relative w-20 h-20 rounded-full ${colors.iconBg} border-4 ${colors.border} flex items-center justify-center mb-4 ${isHighlight ? 'ring-4 ring-gold/30' : 'ring-2 ring-white/20'} shadow-2xl`}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6, type: 'spring' }}
                  style={{
                    boxShadow: `
                      0 10px 30px -5px rgba(0, 0, 0, 0.3),
                      inset 0 2px 8px rgba(255, 255, 255, 0.2),
                      inset 0 -2px 8px rgba(0, 0, 0, 0.2)
                    `
                  }}
                >
                  {/* Inner decorative ring */}
                  <div className={`absolute inset-2 rounded-full border-2 ${colors.border} opacity-40`} />
                  
                  <Icon className={`w-10 h-10 ${colors.iconColor} drop-shadow-lg`} strokeWidth={2.5} />
                  
                  {/* Jewel corner accents */}
                  <div className={`absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full opacity-80 shadow-lg ${tier.id === 'red' || tier.id === 'black' ? 'bg-gradient-to-br from-gold to-gold-champagne' : tier.id === 'gold' ? 'bg-gradient-to-br from-gold-champagne to-gold' : tier.id === 'silver' ? 'bg-gradient-to-br from-white to-grey-200' : 'bg-gradient-to-br from-blue-300 to-blue-500'}`} 
                       style={{ boxShadow: '0 0 10px rgba(212, 165, 116, 0.6)' }} />
                  <div className={`absolute -bottom-1 -left-1 w-3 h-3 rounded-full opacity-70 shadow-lg ${tier.id === 'red' || tier.id === 'black' ? 'bg-gradient-to-br from-gold to-gold-champagne' : tier.id === 'gold' ? 'bg-gradient-to-br from-gold-champagne to-gold' : tier.id === 'silver' ? 'bg-gradient-to-br from-white to-grey-200' : 'bg-gradient-to-br from-blue-300 to-blue-500'}`}
                       style={{ boxShadow: '0 0 8px rgba(212, 165, 116, 0.6)' }} />
                </motion.div>

                {/* Title with decorative underline - Embossed */}
                <div className="mb-4 relative">
                  {/* Ornamental flourish left */}
                  <div className={`absolute -left-2 top-1/2 -translate-y-1/2 w-6 h-6 opacity-30 ${tier.id === 'red' || tier.id === 'black' ? 'text-gold' : tier.id === 'gold' ? 'text-gold-champagne' : 'text-grey-600'}`}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
                    </svg>
                  </div>
                  
                  {/* Ornamental flourish right */}
                  <div className={`absolute -right-2 top-1/2 -translate-y-1/2 w-6 h-6 opacity-30 ${tier.id === 'red' || tier.id === 'black' ? 'text-gold' : tier.id === 'gold' ? 'text-gold-champagne' : 'text-grey-600'}`}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
                    </svg>
                  </div>
                  
                  <h3 className={`font-headline text-2xl md:text-3xl tracking-wide ${colors.textColor} font-bold mb-3`}
                      style={{
                        textShadow: `
                          ${tier.id === 'red' || tier.id === 'black' ? '0 2px 4px rgba(0,0,0,0.3), 0 0 20px rgba(212,165,116,0.5)' : 
                            tier.id === 'gold' ? '0 2px 4px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.5)' : 
                            tier.id === 'silver' ? '0 2px 4px rgba(0,0,0,0.2), 0 1px 0 rgba(255,255,255,0.8)' : 
                            '0 2px 4px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.3)'}
                        `
                      }}>
                    {tier.name.toUpperCase()}
                  </h3>
                  
                  {/* Ornate decorative line */}
                  <div className="flex items-center justify-center gap-1">
                    <div className={`h-px w-6 ${tier.id === 'red' || tier.id === 'black' ? 'bg-gold' : tier.id === 'gold' ? 'bg-gold-champagne' : 'bg-white/40'}`} />
                    <div className={`h-1.5 w-1.5 rounded-full ${tier.id === 'red' || tier.id === 'black' ? 'bg-gold' : tier.id === 'gold' ? 'bg-gold-champagne' : 'bg-white/40'} shadow-md`} />
                    <div className={`h-px flex-1 ${tier.id === 'red' || tier.id === 'black' ? 'bg-gradient-to-r from-gold to-transparent' : tier.id === 'gold' ? 'bg-gradient-to-r from-gold-champagne to-transparent' : 'bg-gradient-to-r from-white/40 to-transparent'}`} />
                  </div>
      </div>
                
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border ${colors.border} ${colors.iconBg} backdrop-blur-sm`}>
                  <div className={`w-1.5 h-1.5 rounded-full ${colors.iconColor}`} />
                  <p className={`text-xs font-bold tracking-widest ${colors.textColor}`}>
                    {tier.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Luxury Price Box - Premium Tag Style */}
            <div className={`relative mb-6 p-4 rounded-xl border-4 ${colors.border} ${tier.id === 'red' ? 'bg-black/30' : tier.id === 'gold' ? 'bg-white/30' : tier.id === 'black' ? 'bg-white/15' : tier.id === 'balcony' ? 'bg-white/25' : 'bg-white/30'} backdrop-blur-md shadow-2xl`}
                 style={{
                   boxShadow: `
                     0 10px 40px -10px rgba(0, 0, 0, 0.3),
                     inset 0 2px 10px rgba(255, 255, 255, 0.15),
                     inset 0 -2px 10px rgba(0, 0, 0, 0.15)
                   `
                 }}>
              {/* Enhanced corner decorations with jewels */}
              <div className={`absolute -top-1 -left-1 w-4 h-4 border-t-4 border-l-4 ${colors.border} rounded-tl-lg`} />
              <div className={`absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 ${colors.border} rounded-tr-lg`} />
              <div className={`absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 ${colors.border} rounded-bl-lg`} />
              <div className={`absolute -bottom-1 -right-1 w-4 h-4 border-b-4 border-r-4 ${colors.border} rounded-br-lg`} />
              
              {/* Corner jewels */}
              <div className={`absolute top-0 left-0 w-2 h-2 rounded-full ${tier.id === 'red' || tier.id === 'black' ? 'bg-gold' : tier.id === 'gold' ? 'bg-gold-champagne' : 'bg-white'} shadow-lg`} 
                   style={{ boxShadow: '0 0 8px rgba(212, 165, 116, 0.8)' }} />
              <div className={`absolute top-0 right-0 w-2 h-2 rounded-full ${tier.id === 'red' || tier.id === 'black' ? 'bg-gold' : tier.id === 'gold' ? 'bg-gold-champagne' : 'bg-white'} shadow-lg`}
                   style={{ boxShadow: '0 0 8px rgba(212, 165, 116, 0.8)' }} />
              <div className={`absolute bottom-0 left-0 w-2 h-2 rounded-full ${tier.id === 'red' || tier.id === 'black' ? 'bg-gold' : tier.id === 'gold' ? 'bg-gold-champagne' : 'bg-white'} shadow-lg`}
                   style={{ boxShadow: '0 0 8px rgba(212, 165, 116, 0.8)' }} />
              <div className={`absolute bottom-0 right-0 w-2 h-2 rounded-full ${tier.id === 'red' || tier.id === 'black' ? 'bg-gold' : tier.id === 'gold' ? 'bg-gold-champagne' : 'bg-white'} shadow-lg`}
                   style={{ boxShadow: '0 0 8px rgba(212, 165, 116, 0.8)' }} />
              
              <div className="flex items-baseline gap-2 mb-1">
                <span className={`text-xs font-bold tracking-wider ${colors.textColor} opacity-90`}
                      style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                  {tier.currency}
                </span>
                <span className={`font-headline text-5xl md:text-6xl font-black ${colors.priceColor}`}
                      style={{
                        textShadow: `
                          ${tier.id === 'red' || tier.id === 'black' ? '0 3px 6px rgba(0,0,0,0.4), 0 0 30px rgba(212,165,116,0.6)' : 
                            tier.id === 'gold' ? '0 3px 6px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.6)' : 
                            tier.id === 'silver' ? '0 3px 6px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,0.8)' : 
                            '0 3px 6px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.4)'}
                        `
                      }}>
                  {tier.price.toLocaleString()}
                </span>
              </div>
              <div className={`text-sm font-medium ${colors.textColor} opacity-80`}
                   style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                ≈ USD ${tier.priceUSD.toLocaleString()}
              </div>
              {isHighlight && (
                <motion.div 
                  className="h-1 w-32 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full mt-4 shadow-lg"
                  animate={{ 
                    width: ['128px', '100px', '128px'],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ boxShadow: '0 0 15px rgba(212, 165, 116, 0.8)' }}
                />
              )}
            </div>

            {/* Features List with decorative separator */}
            <div className={`relative py-3 mb-5 border-t-2 border-b-2 ${colors.border} border-opacity-30`}>
              {/* Decorative dots on borders */}
              <div className={`absolute top-0 left-0 w-2 h-2 rounded-full ${tier.id === 'red' || tier.id === 'black' ? 'bg-gold' : colors.iconColor.replace('text-', 'bg-')} -translate-y-1/2`} />
              <div className={`absolute top-0 right-0 w-2 h-2 rounded-full ${tier.id === 'red' || tier.id === 'black' ? 'bg-gold' : colors.iconColor.replace('text-', 'bg-')} -translate-y-1/2`} />
              <div className={`absolute bottom-0 left-0 w-2 h-2 rounded-full ${tier.id === 'red' || tier.id === 'black' ? 'bg-gold' : colors.iconColor.replace('text-', 'bg-')} translate-y-1/2`} />
              <div className={`absolute bottom-0 right-0 w-2 h-2 rounded-full ${tier.id === 'red' || tier.id === 'black' ? 'bg-gold' : colors.iconColor.replace('text-', 'bg-')} translate-y-1/2`} />
              
              <ul className="space-y-3">
                {visibleFeatures.map((feature, idx) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: isMobile ? 0 : 0.3 + idx * 0.05 }}
                    className="flex items-start gap-3 group"
                  >
                    <motion.div 
                      className={`flex-shrink-0 w-6 h-6 rounded-full ${colors.iconBg} border-2 ${colors.border} flex items-center justify-center mt-0.5 shadow-md`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                    >
                      <Check className={`w-3.5 h-3.5 ${colors.iconColor}`} strokeWidth={3} />
                    </motion.div>
                    <span className={`text-sm leading-relaxed ${colors.textColor} font-medium`}>
                      {feature}
                    </span>
                  </motion.li>
                ))}

                {/* Collapsible Features */}
                <AnimatePresence>
                  {isExpanded && hiddenFeatures.map((feature) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start gap-3 overflow-hidden group"
                    >
                      <motion.div 
                        className={`flex-shrink-0 w-6 h-6 rounded-full ${colors.iconBg} border-2 ${colors.border} flex items-center justify-center mt-0.5 shadow-md`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Check className={`w-3.5 h-3.5 ${colors.iconColor}`} strokeWidth={3} />
                      </motion.div>
                      <span className={`text-sm leading-relaxed ${colors.textColor} font-medium`}>
                        {feature}
                      </span>
                    </motion.li>
                  ))}
                </AnimatePresence>

                {/* Expand/Collapse Button */}
                {hasMore && (
                  <li className="pt-2">
                    <motion.button
                      onClick={() => setExpandedTier(isExpanded ? null : tier.id)}
                      className={`flex items-center gap-2 text-sm font-bold hover:gap-3 transition-all ${colors.textColor}`}
                      whileHover={{ x: 5 }}
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      {isExpanded ? 'Show less' : `+${hiddenFeatures.length} more features`}
                    </motion.button>
                  </li>
                )}
              </ul>
            </div>

            {/* Premium CTA Button - 3D Embossed */}
            <a
              href="https://events.q-tickets.com/uae/eventdetails/6414851046/fashions-for-love-for-the-stars"
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <motion.div
                className="relative"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                {/* Enhanced button glow */}
                <div className={`absolute inset-0 rounded-2xl blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-300 ${tier.id === 'red' || tier.id === 'black' ? 'bg-gold' : tier.id === 'gold' ? 'bg-gold-champagne' : tier.id === 'silver' ? 'bg-grey-400' : 'bg-blue-500'}`} />
                
                <button
                  className={`relative w-full py-5 md:py-6 rounded-2xl font-headline text-base md:text-lg tracking-[0.2em] transition-all shadow-2xl hover:shadow-2xl ${colors.buttonBg} ${colors.buttonHover} ${colors.buttonText} font-black flex items-center justify-center gap-3 border-4 border-white/20 overflow-hidden`}
                  style={{
                    boxShadow: `
                      0 15px 40px -10px rgba(0, 0, 0, 0.4),
                      inset 0 2px 10px rgba(255, 255, 255, 0.2),
                      inset 0 -2px 10px rgba(0, 0, 0, 0.2),
                      0 0 30px rgba(212, 165, 116, 0.3)
                    `,
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                  }}
                >
                  {/* Animated shine effect - faster */}
                  <motion.div
                    className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
                    animate={{ x: ['-200%', '200%'] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                  />
                  
                  {/* Stitched effect lines */}
                  <div className="absolute inset-3 border-2 border-dashed border-white/10 rounded-xl" />
                  
                  <span className="relative z-10 text-shadow-lg">BOOK NOW</span>
                  <motion.div
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="relative z-10"
                  >
                    <Ticket className="w-6 h-6 drop-shadow-lg" />
                  </motion.div>
                  
                  {/* Enhanced corner decorations */}
                  <div className={`absolute top-2 left-2 w-5 h-5 border-t-3 border-l-3 border-white/40 rounded-tl-lg`} />
                  <div className={`absolute top-2 right-2 w-5 h-5 border-t-3 border-r-3 border-white/40 rounded-tr-lg`} />
                  <div className={`absolute bottom-2 left-2 w-5 h-5 border-b-3 border-l-3 border-white/40 rounded-bl-lg`} />
                  <div className={`absolute bottom-2 right-2 w-5 h-5 border-b-3 border-r-3 border-white/40 rounded-br-lg`} />
                  
                  {/* Corner jewels */}
                  <div className="absolute top-1 left-1 w-2 h-2 bg-white/60 rounded-full shadow-lg" />
                  <div className="absolute top-1 right-1 w-2 h-2 bg-white/60 rounded-full shadow-lg" />
                  <div className="absolute bottom-1 left-1 w-2 h-2 bg-white/60 rounded-full shadow-lg" />
                  <div className="absolute bottom-1 right-1 w-2 h-2 bg-white/60 rounded-full shadow-lg" />
                </button>
              </motion.div>
            </a>
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
            Your Invitation Awaits
          </p>
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl text-grey-900 mb-4 uppercase font-bold">
            Reserve Your Place in Fashion History
          </h2>
          <p className="text-grey-600 text-base md:text-lg max-w-2xl mx-auto mb-6">
            Five exclusive tiers designed for every desire. From premium luxury to intimate lounge experiences.
          </p>
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

        {/* Desktop Grid - 3+2 Layout */}
        <div className="hidden md:block max-w-7xl mx-auto mt-12 mb-16">
          {/* Top Row - Red, Gold, Silver */}
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {TICKET_TIERS.slice(0, 3).map((tier, index) => renderCard(tier, index, false))}
                  </div>
          
          {/* Bottom Row - Black, Balcony */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {TICKET_TIERS.slice(3, 5).map((tier, index) => renderCard(tier, index + 3, false))}
                      </div>
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

        {/* Reservation Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 bg-white border border-grey-200 rounded-full px-6 py-3 shadow-medium">
            <Ticket className="w-5 h-5 text-crimson" />
            <a 
              href="https://events.q-tickets.com/uae/eventdetails/6414851046/fashions-for-love-for-the-stars"
              target="_blank"
              rel="noopener noreferrer"
              className="text-grey-900 font-medium hover:text-crimson transition-colors"
            >
              Book Your Tickets on Q-Tickets
            </a>
          </div>
          <p className="text-grey-600 text-sm mb-2">
            Click any ticket to book now | Secure online payment via Q-Tickets
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
