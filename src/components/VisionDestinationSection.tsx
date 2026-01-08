import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Globe, Music, Award, Building2, Star, MapPin } from 'lucide-react';
import { PLACEHOLDERS } from '../constants/placeholders';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';

const stats = [
  { value: '600+', label: 'VIP Guests', icon: Users },
  { value: '80+', label: 'International Models', icon: Globe },
  { value: '4', label: 'Grammy Winners', icon: Music },
  { value: '40', label: 'Years of Legacy', icon: Award },
];

const features = [
  {
    icon: Building2,
    title: "World's Tallest Stage",
    description: '160 floors of architectural wonder',
  },
  {
    icon: Star,
    title: "Armani's Crown Jewel",
    description: 'The only hotel designed by Giorgio Armani',
  },
  {
    icon: MapPin,
    title: "Dubai's Golden Mile",
    description: 'Epicenter of global luxury',
  },
];

export function VisionDestinationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section
      id="vision"
      ref={containerRef}
      className="relative py-16 bg-white overflow-hidden"
    >
      <FloatingValentineHearts count={25} variant="red" />

      <div className="absolute inset-0">
        <img
          src={PLACEHOLDERS.venue.burjKhalifa}
          alt="Burj Khalifa"
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-vibrant-red text-sm tracking-[0.4em] uppercase mb-3 font-sans">
            The Vision
          </p>
          <h2 className="font-display text-headline-xl text-near-black mb-4 uppercase">
            One Night. One Legacy. One Love.
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-vibrant-red to-transparent mx-auto mb-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-grey-800 text-lg leading-relaxed mb-4">
            On Valentine's Eve 2026, the world's tallest tower becomes fashion's most romantic stage.
            <span className="text-vibrant-red font-semibold"> Fashions for Love </span>
            unites Hollywood's brightest stars with Dubai's elite for an unforgettable celebration
            of couture, music, and the universal language of love.
          </p>
          <p className="text-grey-700 text-base leading-relaxed">
            Standing 828 meters above the Arabian desert, this is where four decades of dressing
            the world's greatest icons culminates in a single, spectacular evening. This is Jacob Meir's masterpiece.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                className="text-center group"
              >
                <div className="relative mb-3">
                  <motion.div
                    className="w-14 h-14 mx-auto rounded-full bg-white shadow-soft flex items-center justify-center group-hover:shadow-crimson transition-shadow duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-6 h-6 text-vibrant-red" />
                  </motion.div>
                </div>
                <motion.p
                  className="font-headline text-4xl text-near-black mb-1"
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-grey-600 text-xs uppercase tracking-wider font-sans">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mb-8"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 font-sans">
            The Destination
          </p>
          <h3 className="font-display text-display-md text-near-black mb-6 uppercase">
            Where Dreams Touch the Sky
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="group bg-white/80 backdrop-blur-sm rounded-lg p-6 hover:bg-white hover:shadow-medium transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-lg bg-vibrant-red/10 flex items-center justify-center group-hover:bg-vibrant-red/20 transition-colors mb-4">
                    <Icon className="w-6 h-6 text-vibrant-red" />
                  </div>
                  <h4 className="text-near-black font-semibold text-sm mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-grey-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
