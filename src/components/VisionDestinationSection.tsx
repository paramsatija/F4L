import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Users, Globe, Music, Award, Building2, Star, MapPin } from 'lucide-react';
import { PLACEHOLDERS } from '../constants/placeholders';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';
import { FashionSketches } from './particles/FashionSketches';

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
    image: 'https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Star,
    title: "Armani's Crown Jewel",
    description: 'The only hotel designed by Giorgio Armani',
    image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: MapPin,
    title: "Dubai's Golden Mile",
    description: 'Epicenter of global luxury',
    image: 'https://images.pexels.com/photos/1470502/pexels-photo-1470502.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function VisionDestinationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.5, 1, 0.5]);

  return (
    <section
      id="vision"
      ref={containerRef}
      className="relative py-16 bg-crimson overflow-hidden"
    >
      <FloatingValentineHearts count={25} variant="white" />
      <FashionSketches variant="light" />

      <motion.div className="absolute inset-0" style={{ y: backgroundY, opacity }}>
        <img
          src={PLACEHOLDERS.venue.burjKhalifa}
          alt="Burj Khalifa"
          className="w-full h-full object-cover opacity-[0.08]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-crimson via-transparent to-crimson" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 font-sans">
            The Vision
          </p>
          <h2 className="font-display text-headline-xl text-white mb-4 uppercase">
            One Night. One Legacy. One Love.
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-white/90 text-lg leading-relaxed mb-4">
            On Valentine's Eve 2026, the world's tallest tower becomes fashion's most romantic stage.
            <span className="text-gold font-semibold"> Fashions for Love </span>
            unites Hollywood's brightest stars with Dubai's elite for an unforgettable celebration
            of couture, music, and the universal language of love.
          </p>
          <p className="text-white/80 text-base leading-relaxed">
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
                    className="w-14 h-14 mx-auto rounded-full bg-white/10 backdrop-blur-sm shadow-soft flex items-center justify-center group-hover:shadow-gold transition-shadow duration-300 border border-white/20"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-6 h-6 text-gold" />
                  </motion.div>
                </div>
                <motion.p
                  className="font-headline text-4xl text-white mb-1"
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-white/70 text-xs uppercase tracking-wider font-sans">
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
          <h3 className="font-display text-display-md text-white mb-6 uppercase">
            Where Dreams Touch the Sky
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl border border-gold/30 hover:border-gold/60 transition-all duration-500 hover:shadow-[0_8px_30px_rgba(212,165,116,0.4)] hover:scale-105"
                whileHover={{ y: -8 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gold/30 backdrop-blur-sm flex items-center justify-center border border-gold/50">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h4 className="text-white font-bold text-lg mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gold-champagne text-sm leading-relaxed">
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
