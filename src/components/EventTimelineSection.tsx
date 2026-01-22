import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Clock, Star, Users, Wine, Music, Sparkles, PartyPopper, Heart } from 'lucide-react';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';
import { FashionSketches } from './particles/FashionSketches';
import { SectionDecorations } from './SectionDecorations';

const timelineEvents = [
  {
    time: '7:00 PM',
    endTime: '8:00 PM',
    title: 'VIP Red Carpet & Champagne Reception',
    description: 'Live violinist & saxophone ambience',
    icon: Wine,
    image: '/runway/IMG_8135.jpg', // Woman in white feather dress with champagne - perfect for reception
    color: 'gold',
    multiImage: false,
  },
  {
    time: '8:00 PM',
    endTime: '10:00 PM',
    title: 'Live Performances & Celebrity Appearances',
    description: '25Band, Deborah Cox, Tyra Banks & More',
    icon: Music,
    images: [
      '/performing/25band.png',
      '/performing/deborah-cox.png',
    ],
    color: 'crimson',
    multiImage: true,
  },
  {
    time: '10:00 PM',
    endTime: '11:00 PM',
    title: 'For The Stars Couture Runway Show',
    description: "Jacob Meir's collections on 80+ international models",
    icon: Sparkles,
    image: '/runway/IMG_8154.jpg', // Dramatic black and silver runway shot
    color: 'gold',
    multiImage: false,
  },
  {
    time: '11:00 PM',
    endTime: '2:00 AM',
    title: 'Exclusive VIP After Party',
    description: 'Museum collection display, celebrity DJ, curated cocktails',
    icon: PartyPopper,
    image: '/runway/IMG_8133.jpg', // Step-and-repeat red carpet photo with Jacob and models
    color: 'crimson',
    multiImage: false,
  },
];

export function EventTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Same Background Design as "One Night One Love" Section */}
      <SectionDecorations variant="light" />
      <FloatingValentineHearts count={25} variant="red" />
      <FashionSketches variant="dark" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1 h-1 rounded-full bg-gold animate-pulse" />
            <Clock className="w-6 h-6 text-gold" />
            <p className="text-gold text-sm tracking-[0.5em] uppercase font-headline">
              An Unforgettable Evening
            </p>
            <Clock className="w-6 h-6 text-gold" />
            <div className="w-1 h-1 rounded-full bg-gold animate-pulse" />
          </div>

          <h3 className="font-headline text-5xl md:text-7xl text-grey-900 mb-4 uppercase tracking-tight font-bold">
            Friday 13 February 2026
          </h3>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <Star className="w-5 h-5 text-crimson fill-crimson" />
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <p className="text-gold text-2xl md:text-3xl font-headline font-bold tracking-wide mb-6">
            Armani Hotel, Dubai
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gold/10 to-crimson/10 border-2 border-gold/30 px-8 py-4 rounded-full shadow-large"
          >
            <Users className="w-5 h-5 text-crimson" />
            <span className="text-grey-900 text-base font-semibold tracking-wide">
              Limited to 600 Elite Guests
            </span>
          </motion.div>
        </motion.div>

        {/* Timeline Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {timelineEvents.map((event, index) => {
            const showDecorativeHeart = index === 0; // Show heart after first card
            const Icon = event.icon;
            return (
              <>
                <motion.div
                  key={event.time}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
                  className={`group relative ${event.multiImage ? 'md:col-span-2' : ''}`}
                >
                {/* Glow effect on hover */}
                <div className={`absolute -inset-4 bg-gradient-to-r ${
                  index % 2 === 0 ? 'from-gold/0 via-gold/30 to-gold/0' : 'from-crimson/0 via-crimson/30 to-crimson/0'
                } rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl`} />

                <div className={`relative rounded-2xl overflow-hidden shadow-large hover:shadow-xl transition-all duration-500 ${
                  index % 2 === 0 
                    ? 'bg-gradient-to-br from-gold via-gold to-gold/90 border-2 border-gold/30' 
                    : 'bg-gradient-to-br from-crimson via-crimson to-crimson-dark border-2 border-crimson-light/30'
                }`}>
                  {/* Image */}
                  <div className={`relative overflow-hidden ${event.multiImage ? 'h-64 md:h-80' : 'h-96 md:h-[450px]'}`}>
                    {event.multiImage && event.images ? (
                      /* Horizontal Strip of Performers - Better for landscape images */
                      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-1">
                        {event.images.map((img, idx) => (
                          <motion.div
                            key={idx}
                            className="relative overflow-hidden bg-black"
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            transition={{ duration: 0.3 }}
                          >
                            <img
                              src={img}
                              alt={`Performer ${idx + 1}`}
                              className="w-full h-full object-cover object-center"
                            />
                          </motion.div>
                        ))}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
                      </div>
                    ) : (
                      /* Single Image */
                      <>
                        <motion.img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover object-center"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.6 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                      </>
                    )}

                    {/* Icon Badge */}
                    <motion.div
                      className="absolute top-4 right-4 w-14 h-14 rounded-full flex items-center justify-center shadow-large bg-white/20 backdrop-blur-sm border border-white/30"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Time Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                        <span className="font-headline text-xl font-bold text-white">
                          {event.time}
                        </span>
                        <span className="text-white/70 text-base">→</span>
                        <span className="font-headline text-xl font-bold text-white">
                          {event.endTime}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="font-headline text-2xl text-white mb-3 leading-tight font-bold drop-shadow-lg">
                      {event.title}
                    </h4>

                    {/* Description */}
                    <p className="text-white/90 text-base leading-relaxed font-sans">
                      {event.description}
                    </p>

                    {/* Decorative Line */}
                    <div className="mt-6 h-1 w-20 rounded-full bg-white/40" />
                  </div>
                </div>
              </motion.div>

              {/* Decorative Heart - Only shows next to first card on desktop */}
              {showDecorativeHeart && (
                <motion.div
                  className="hidden md:flex items-center justify-center relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8, duration: 0.6 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                    className="relative"
                  >
                    <Heart
                      className="w-64 h-64 text-crimson fill-crimson drop-shadow-2xl"
                      style={{
                        filter: 'drop-shadow(0 0 30px rgba(207, 15, 15, 0.4))',
                      }}
                    />
                    {/* Inner glow */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Heart
                        className="w-32 h-32 text-crimson-light fill-crimson-light opacity-60"
                        style={{
                          filter: 'blur(20px)',
                        }}
                      />
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </>
            );
          })}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-grey-700 text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed font-sans">
            Seven hours of pure glamour, romance, and world-class entertainment in the heart of Dubai.
          </p>
          <motion.button
            className="bg-gradient-to-r from-crimson to-crimson-light hover:from-crimson-light hover:to-crimson px-12 py-5 text-white font-headline text-lg tracking-wider rounded-full transition-all duration-300 shadow-crimson-intense hover:shadow-crimson font-bold"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            data-cursor="hover"
          >
            RESERVE YOUR EVENING
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
