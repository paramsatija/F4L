import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Music, Clock, Star, Users } from 'lucide-react';
import { PERFORMERS, HOSTS, FEATURED_GUESTS } from '../constants/placeholders';
import { PersonHeartCard } from './utility/HeartCard';

export function PerformersHostsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative py-24 bg-champagne overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-crimson text-xs tracking-[0.5em] uppercase mb-4 font-sans font-semibold">
            The Soundtrack
          </p>
          <h2 className="font-display text-headline-xl text-grey-900 mb-6 uppercase leading-none">
            Global Music Icons Live
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto mb-6" />
          <p className="text-grey-700 text-lg max-w-2xl mx-auto leading-relaxed">
            Four continents. Four voices. One unforgettable night of live music.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-20">
          {PERFORMERS.map((performer, index) => (
            <PersonHeartCard
              key={performer.name}
              name={performer.name}
              title={performer.title}
              image={performer.image}
              delay={0.2 + index * 0.15}
              backgroundColor="#8B0000"
              textColor="white"
              size="large"
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-crimson text-xs tracking-[0.5em] uppercase mb-4 font-sans font-semibold">
            The Stars
          </p>
          <h3 className="font-display text-display-md text-grey-900 uppercase leading-none">
            Hollywood's Finest
          </h3>
        </motion.div>

        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="flex items-center justify-center gap-3 mb-10"
          >
            <Star className="w-6 h-6 text-gold fill-gold" />
            <h4 className="font-headline text-3xl text-grey-900 tracking-wide">
              YOUR HOSTS
            </h4>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {HOSTS.map((host, index) => (
              <PersonHeartCard
                key={host.name}
                name={host.name}
                title={host.title}
                image={host.image}
                delay={0.8 + index * 0.15}
                backgroundColor="#D4A574"
                textColor="white"
                size="large"
              />
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.4 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Users className="w-6 h-6 text-crimson" />
            <h4 className="font-headline text-3xl text-grey-900 tracking-wide">
              FEATURED GUESTS
            </h4>
          </motion.div>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {FEATURED_GUESTS.map((guest, index) => (
              <PersonHeartCard
                key={guest.name}
                name={guest.name}
                title={guest.title}
                image={guest.image}
                delay={1.1 + index * 0.1}
                backgroundColor="#CF0F0F"
                textColor="white"
                size="large"
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.3, duration: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-block bg-white px-10 py-6 rounded-2xl border-2 border-gold/30 shadow-large">
            <p className="text-grey-900 font-medium text-lg mb-1">
              Plus 20+ Surprise Celebrity Attendees
            </p>
            <p className="text-gold text-sm font-semibold">
              To Be Announced
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
