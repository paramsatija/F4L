import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Music, Clock, Star, Users } from 'lucide-react';
import { PERFORMERS, HOSTS, FEATURED_GUESTS } from '../constants/placeholders';

export function PerformersHostsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative py-16 bg-crimson overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-crimson via-crimson-dark to-crimson opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 font-sans">
            The Soundtrack
          </p>
          <h2 className="font-display text-headline-xl text-white mb-4 uppercase">
            Global Music Icons Live
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-4" />
          <p className="text-white/70 text-base max-w-2xl mx-auto">
            Four continents. Four voices. One unforgettable night of live music.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {PERFORMERS.map((performer, index) => (
            <motion.div
              key={performer.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
              className="relative group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <img
                  src={performer.image}
                  alt={performer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-crimson via-crimson/60 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Music className="w-4 h-4 text-gold" />
                      <span className="text-gold text-xs uppercase tracking-wider font-sans">
                        {performer.description}
                      </span>
                    </div>

                    <h3 className="font-headline text-3xl md:text-4xl text-white mb-2 tracking-wide">
                      {performer.name}
                    </h3>

                    <p className="text-gold-champagne text-base font-display italic mb-3">
                      {performer.title}
                    </p>

                    <p className="text-white/80 text-xs italic mb-3">
                      "{performer.quote}"
                    </p>

                    <div className="flex items-center gap-2 text-crimson-light">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm font-headline tracking-wider">
                        {performer.time}
                      </span>
                    </div>
                  </motion.div>
                </div>

                <div className="absolute top-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 font-sans">
            The Stars
          </p>
          <h3 className="font-display text-display-md text-white uppercase">
            Hollywood's Finest
          </h3>
        </motion.div>

        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Star className="w-5 h-5 text-gold fill-gold" />
            <h4 className="font-headline text-2xl text-white tracking-wide">
              YOUR HOSTS
            </h4>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {HOSTS.map((host, index) => (
              <motion.div
                key={host.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="relative group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
                  <img
                    src={host.image}
                    alt={host.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-crimson/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="text-center">
                  <h5 className="font-headline text-xl text-white tracking-wide mb-2">
                    {host.name}
                  </h5>
                  <p className="text-vibrant-red text-xs uppercase tracking-wider font-sans mb-2">
                    {host.title}
                  </p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {host.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1, duration: 0.4 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <Users className="w-5 h-5 text-vibrant-red" />
            <h4 className="font-headline text-2xl text-white tracking-wide">
              FEATURED GUESTS
            </h4>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FEATURED_GUESTS.map((guest, index) => (
              <motion.div
                key={guest.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.1 + index * 0.08, duration: 0.4 }}
                className="text-center group"
              >
                <div className="relative w-28 h-28 mx-auto mb-3 overflow-hidden rounded-full">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-2 ring-gold/20 group-hover:ring-gold/60 transition-all duration-300 rounded-full" />
                </div>

                <h5 className="font-headline text-lg text-white tracking-wide mb-1">
                  {guest.name}
                </h5>
                <p className="text-vibrant-red text-xs uppercase tracking-wider font-sans mb-2">
                  {guest.title}
                </p>
                <p className="text-white/70 text-sm">
                  {guest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.3, duration: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-block glass-dark px-8 py-4 rounded-lg border border-gold/20">
            <p className="text-white/90 font-medium text-sm">
              Plus 20+ Surprise Celebrity Attendees
            </p>
            <p className="text-gold text-xs mt-1">
              To Be Announced
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
