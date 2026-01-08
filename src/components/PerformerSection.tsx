import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Music, Clock } from 'lucide-react';
import { PERFORMERS } from '../constants/placeholders';

export function PerformerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative py-32 bg-grey-900 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-grey-900 via-grey-800 to-grey-900" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4 font-sans">
            The Soundtrack
          </p>
          <h2 className="font-playfair text-display-lg text-stark mb-6">
            Global Music Icons Live
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-8" />
          <p className="text-stark/70 text-lg max-w-2xl mx-auto">
            Four continents. Four voices. One unforgettable night of live music.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {PERFORMERS.map((performer, index) => (
            <motion.div
              key={performer.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              className="relative group"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
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
                    <div className="flex items-center gap-3 mb-3">
                      <Music className="w-5 h-5 text-gold" />
                      <span className="text-gold text-sm uppercase tracking-wider font-sans">
                        {performer.description}
                      </span>
                    </div>

                    <h3 className="font-headline text-4xl md:text-5xl text-stark mb-2 tracking-wide">
                      {performer.name}
                    </h3>

                    <p className="text-gold-champagne text-lg font-display italic mb-4">
                      {performer.title}
                    </p>

                    <p className="text-stark/80 text-sm italic mb-4">
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
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-stark/60 text-sm max-w-3xl mx-auto">
            Plus live violin and saxophone during champagne reception, celebrity DJ for the after-party,
            and surprise guest performers to be announced.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
