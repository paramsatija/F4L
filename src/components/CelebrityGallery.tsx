import { useRef } from 'react';
import { motion } from 'framer-motion';
import { MagneticCard } from './MagneticCard';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';
import { FashionSketches } from './particles/FashionSketches';
import { SectionDecorations } from './SectionDecorations';

const performers = [
  {
    name: '25Band',
    subtitle: 'Tamin & A-Del',
    image: '/performing/25band.png',
    role: 'Live Performance',
  },
  {
    name: 'Deborah Cox',
    subtitle: 'R&B Icon',
    image: '/performing/deborah-cox.png',
    role: 'Live Performance',
  },
  {
    name: 'Tyra Banks',
    subtitle: 'Supermodel & TV Icon',
    image: '', // Image coming soon
    role: 'Special Guest',
  },
  {
    name: 'Victoria Recano',
    subtitle: 'Emmy Award Winner',
    image: '', // Image coming soon
    role: 'Celebrity Host',
  },
  {
    name: 'April Sutton',
    subtitle: 'Media Personality',
    image: '', // Image coming soon
    role: 'Celebrity Co-Host',
  },
];

// Additional celebrities section removed - all confirmed celebrities now shown in main section above

export function CelebrityGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="performers" ref={containerRef} className="relative py-16 bg-crimson overflow-hidden">
      <SectionDecorations variant="red" />
      <FloatingValentineHearts count={30} variant="white" />
      <FashionSketches variant="light" />

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-crimson via-crimson-light to-crimson opacity-30" />
      
      {/* Gold shimmer particles */}
      <div className="absolute inset-0 opacity-50">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`shimmer-${i}`}
            className="absolute w-1.5 h-1.5 bg-gold rounded-full shadow-lg shadow-gold/50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
              scale: [0, 2, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3">
              Confirmed Celebrities
            </p>
                  <h2 className="font-display text-headline-xl text-white mb-4 uppercase font-bold">
                    Star-Studded Lineup
                  </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {performers.map((performer, index) => (
              <motion.div
                key={performer.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <MagneticCard>
                  <div
                    className="relative group rounded-xl overflow-hidden bg-night-light shadow-large"
                    data-cursor="hover"
                  >
                    <div className="aspect-[4/5] overflow-hidden">
                      {performer.image ? (
                        <img
                          src={performer.image}
                          alt={performer.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-grey-800 via-grey-900 to-black flex items-center justify-center">
                          <div className="text-center p-8">
                            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gold/10 flex items-center justify-center border-2 border-gold/30">
                              <span className="text-gold text-3xl font-headline">?</span>
                            </div>
                            <p className="text-gold/60 text-sm uppercase tracking-widest">Coming Soon</p>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/60 to-transparent opacity-85" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <p className="text-vibrant-red text-sm md:text-base tracking-wider uppercase mb-2 font-semibold">
                        {performer.role}
                      </p>
                      <h3 className="text-white text-2xl md:text-3xl font-display font-bold mb-2">
                        {performer.name}
                      </h3>
                      <p className="text-white/70 text-base md:text-lg">{performer.subtitle}</p>
                    </div>
                    <div className="absolute inset-0 border-2 border-vibrant-red/0 group-hover:border-vibrant-red/40 transition-colors duration-500 rounded-xl" />
                  </div>
                </MagneticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
