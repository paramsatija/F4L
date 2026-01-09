import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Users, Globe, Music, Award, Building2, Star, MapPin } from 'lucide-react';
import { PLACEHOLDERS } from '../constants/placeholders';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';
import { FashionSketches } from './particles/FashionSketches';
import { StatHeartCard, TextHeartCard } from './utility/HeartCard';

const stats = [
  { value: '600+', label: 'VIP Guests', icon: Users },
  { value: '80+', label: 'International Models', icon: Globe },
  { value: '4', label: 'Grammy Winners', icon: Music },
  { value: '40', label: 'Years of Legacy', icon: Award },
];

const visionPhases = [
  'One Night',
  'One Legacy',
  'One Love',
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
      className="relative py-24 bg-cream overflow-hidden"
    >
      <FloatingValentineHearts count={25} variant="red" />
      <FashionSketches variant="dark" />

      <motion.div className="absolute inset-0" style={{ y: backgroundY, opacity }}>
        <img
          src={PLACEHOLDERS.venue.burjKhalifa}
          alt="Burj Khalifa"
          className="w-full h-full object-cover opacity-[0.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-transparent to-cream" />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-crimson text-xs tracking-[0.5em] uppercase mb-8 font-sans font-semibold">
            The Vision
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mb-12">
            {visionPhases.map((phase, index) => (
              <TextHeartCard
                key={phase}
                text={phase}
                delay={index * 0.15}
                backgroundColor="#CF0F0F"
                textColor="white"
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <p className="text-grey-800 text-xl leading-relaxed mb-6 font-light">
            On Valentine's Eve 2026, the world's tallest tower becomes fashion's most romantic stage.
            <span className="text-crimson font-semibold"> Fashions for Love </span>
            unites Hollywood's brightest stars with Dubai's elite for an unforgettable celebration
            of couture, music, and the universal language of love.
          </p>
          <p className="text-grey-600 text-lg leading-relaxed">
            Standing 828 meters above the Arabian desert, this is where four decades of dressing
            the world's greatest icons culminates in a single, spectacular evening. This is Jacob Meir's masterpiece.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-20">
          {stats.map((stat, index) => (
            <StatHeartCard
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={0.5 + index * 0.1}
              backgroundColor="#CF0F0F"
              textColor="white"
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-crimson text-xs tracking-[0.5em] uppercase mb-4 font-sans font-semibold">
            The Destination
          </p>
          <h3 className="font-display text-display-md text-grey-900 mb-6 uppercase leading-none">
            Where Dreams Touch the Sky
          </h3>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl bg-white border border-grey-200 hover:border-crimson/40 transition-all duration-500 shadow-medium hover:shadow-large"
                whileHover={{ y: -12 }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grey-900 via-grey-900/50 to-transparent opacity-80" />
                  <div className="absolute top-6 right-6 w-14 h-14 rounded-xl bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-large">
                    <Icon className="w-7 h-7 text-crimson" />
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-grey-900 font-bold text-xl mb-3 font-display">
                    {feature.title}
                  </h4>
                  <p className="text-grey-600 text-base leading-relaxed">
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
