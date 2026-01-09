import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Music, Clock, Star, Users } from 'lucide-react';
import { PERFORMERS, HOSTS, FEATURED_GUESTS } from '../constants/placeholders';

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

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {PERFORMERS.map((performer, index) => (
            <motion.div
              key={performer.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.4 }}
              className="relative group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-white border border-grey-200 shadow-medium hover:shadow-large transition-all duration-500">
                <img
                  src={performer.image}
                  alt={performer.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grey-900 via-grey-900/60 to-transparent" />

                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Music className="w-5 h-5 text-gold" />
                      <span className="text-gold text-sm uppercase tracking-wider font-sans font-medium">
                        {performer.description}
                      </span>
                    </div>

                    <h3 className="font-headline text-4xl md:text-5xl text-white mb-3 tracking-wide">
                      {performer.name}
                    </h3>

                    <p className="text-gold-champagne text-lg font-display italic mb-4">
                      {performer.title}
                    </p>

                    <p className="text-white/90 text-sm italic mb-4 leading-relaxed">
                      "{performer.quote}"
                    </p>

                    <div className="flex items-center gap-2 text-white">
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

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {HOSTS.map((host, index) => (
              <motion.div
                key={host.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className="relative group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-white border border-grey-200 shadow-medium hover:shadow-large transition-all duration-500">
                  <img
                    src={host.image}
                    alt={host.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grey-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="text-center">
                  <h5 className="font-headline text-2xl text-grey-900 tracking-wide mb-2">
                    {host.name}
                  </h5>
                  <p className="text-crimson text-sm uppercase tracking-wider font-sans mb-3 font-semibold">
                    {host.title}
                  </p>
                  <p className="text-grey-600 text-base leading-relaxed">
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
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Users className="w-6 h-6 text-crimson" />
            <h4 className="font-headline text-3xl text-grey-900 tracking-wide">
              FEATURED GUESTS
            </h4>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {FEATURED_GUESTS.map((guest, index) => (
              <motion.div
                key={guest.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1.1 + index * 0.08, duration: 0.4 }}
                className="text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full bg-white border-4 border-grey-200 group-hover:border-gold transition-colors duration-300 shadow-medium">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <h5 className="font-headline text-xl text-grey-900 tracking-wide mb-2">
                  {guest.name}
                </h5>
                <p className="text-crimson text-xs uppercase tracking-wider font-sans mb-3 font-semibold">
                  {guest.title}
                </p>
                <p className="text-grey-600 text-sm leading-relaxed">
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
