import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Building2, Star, MapPin } from 'lucide-react';
import { PLACEHOLDERS } from '../constants/placeholders';

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

export function DestinationSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-beige-light/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4 font-sans">
              The Destination
            </p>
            <h2 className="font-display text-display-lg text-grey-900 mb-6">
              Where Dreams Touch the Sky
            </h2>
            <div className="w-16 h-px bg-crimson mb-8" />

            <p className="text-grey-700 text-lg leading-relaxed mb-8">
              Standing 828 meters above the Arabian desert, the Burj Khalifa has witnessed
              countless historic moments. On February 13th, 2026, it will witness fashion history.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-crimson/10 flex items-center justify-center group-hover:bg-crimson/20 transition-colors">
                        <Icon className="w-5 h-5 text-crimson" />
                      </div>
                      <div>
                        <h3 className="text-grey-900 font-semibold text-sm mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-grey-600 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            style={{ y: imageY }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-transparent to-crimson/10 rounded-2xl blur-xl" />

              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-large">
                <img
                  src={PLACEHOLDERS.venue.burjKhalifa}
                  alt="Burj Khalifa at Night"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grey-900/60 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-gold text-sm uppercase tracking-wider mb-2">
                    Event Venue
                  </p>
                  <h3 className="text-white text-2xl font-display font-semibold mb-1">
                    Armani Hotel Dubai
                  </h3>
                  <p className="text-white/80 text-sm">
                    Burj Khalifa, Downtown Dubai
                  </p>
                </div>
              </div>

              <motion.div
                className="absolute -bottom-6 -left-6 glass p-6 rounded-xl shadow-large"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p className="font-headline text-4xl text-crimson mb-1">828m</p>
                <p className="text-grey-600 text-sm">Above Sea Level</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
