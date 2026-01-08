import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Users } from 'lucide-react';
import { HOSTS, FEATURED_GUESTS } from '../constants/placeholders';

export function HostsGuestsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-rose-gold/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-crimson text-sm tracking-[0.4em] uppercase mb-4 font-sans">
            The Stars
          </p>
          <h2 className="font-playfair text-display-lg text-grey-900 mb-6">
            Hollywood's Finest
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto" />
        </motion.div>

        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <Star className="w-6 h-6 text-gold fill-gold" />
            <h3 className="font-headline text-3xl text-grey-900 tracking-wide">
              YOUR HOSTS
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {HOSTS.map((host, index) => (
              <motion.div
                key={host.name}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl mb-6">
                  <img
                    src={host.image}
                    alt={host.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-grey-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="text-center">
                  <h4 className="font-headline text-2xl text-grey-900 tracking-wide mb-2">
                    {host.name}
                  </h4>
                  <p className="text-crimson text-sm uppercase tracking-wider font-sans mb-3">
                    {host.title}
                  </p>
                  <p className="text-grey-600 text-sm leading-relaxed">
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
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <Users className="w-6 h-6 text-crimson" />
            <h3 className="font-headline text-3xl text-grey-900 tracking-wide">
              FEATURED GUESTS
            </h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {FEATURED_GUESTS.map((guest, index) => (
              <motion.div
                key={guest.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <div className="relative w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img
                    src={guest.image}
                    alt={guest.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 ring-2 ring-gold-rose/20 group-hover:ring-gold-rose/60 transition-all duration-300 rounded-full" />
                </div>

                <h4 className="font-headline text-xl text-grey-900 tracking-wide mb-1">
                  {guest.name}
                </h4>
                <p className="text-crimson text-xs uppercase tracking-wider font-sans mb-2">
                  {guest.title}
                </p>
                <p className="text-grey-600 text-sm">
                  {guest.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-block glass-light px-8 py-4 rounded-full">
            <p className="text-grey-700 font-medium">
              Plus 20+ Surprise Celebrity Attendees
            </p>
            <p className="text-crimson text-sm mt-1">
              To Be Announced
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
