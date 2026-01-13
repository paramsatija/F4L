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
    name: 'Akon',
    subtitle: 'Grammy Winner',
    image: '/performing/akon.avif',
    role: 'Headline Performance',
  },
  {
    name: 'Deborah Cox',
    subtitle: 'R&B Icon',
    image: '/performing/deborah-cox.png',
    role: 'Live Performance',
  },
  {
    name: 'Maya Diab',
    subtitle: 'Middle East Star',
    image: '/performing/maya-diab.png',
    role: 'Live Performance',
  },
];

const celebrities = [
  {
    name: 'Victoria Recano',
    role: 'Celebrity Host',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'April Sutton',
    role: 'Celebrity Co-Host',
    image: 'https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Avi Edri',
    role: 'Celebrity MUA',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Leslie Kee',
    role: 'Celebrity Photographer',
    image: 'https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Anderson Silva',
    role: 'Special Guest',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export function CelebrityGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative py-16 bg-crimson overflow-hidden">
      <SectionDecorations variant="red" />
      <FloatingValentineHearts count={120} variant="white" />
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
              Live Performances
            </p>
                  <h2 className="font-display text-headline-xl text-white mb-4 uppercase font-bold">
                    Global Music Icons
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
                      <img
                        src={performer.image}
                        alt={performer.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
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

        <div className="section-divider mt-16 mb-12 max-w-4xl mx-auto" />

        <div className="max-w-7xl mx-auto px-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4">
              Award Winning
            </p>
                  <h2 className="font-display text-display-md text-white font-bold">
                    Celebrity Guests
                  </h2>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-10 md:gap-12 lg:gap-16">
            {celebrities.map((celebrity, index) => (
              <motion.div
                key={celebrity.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="w-60 md:w-80 lg:w-[22rem]"
              >
                <MagneticCard>
                  <div
                    className="relative group text-center"
                    data-cursor="hover"
                  >
                    <div className="relative w-56 h-56 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] mx-auto mb-6">
                      <svg className="absolute inset-0 w-0 h-0">
                        <defs>
                          <clipPath id={`heart-clip-${index}`} clipPathUnits="objectBoundingBox">
                            <path d="M 0.5,0.9 C 0.5,0.9 0.05,0.65 0.05,0.35 C 0.05,0.15 0.15,0.05 0.3,0.05 C 0.4,0.05 0.45,0.1 0.5,0.2 C 0.55,0.1 0.6,0.05 0.7,0.05 C 0.85,0.05 0.95,0.15 0.95,0.35 C 0.95,0.65 0.5,0.9 0.5,0.9 Z" />
                          </clipPath>
                        </defs>
                      </svg>
                      <div 
                        className="relative w-full h-full transition-all duration-500 group-hover:scale-110"
                        style={{
                          clipPath: `url(#heart-clip-${index})`,
                          filter: 'drop-shadow(0 10px 30px rgba(212, 165, 116, 0.5)) drop-shadow(0 0 20px rgba(212, 165, 116, 0.35))',
                        }}
                      >
                        <img
                          src={celebrity.image}
                          alt={celebrity.name}
                          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-115"
                        />
                        {/* Subtle overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                      {/* Animated pulse ring on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          clipPath: `url(#heart-clip-${index})`,
                        }}
                      >
                        <div className="absolute inset-0 border-2 border-gold/60 animate-ping" style={{ animationDuration: '2s' }} />
                      </div>
                    </div>
                    <h3 className="text-white text-base md:text-lg font-semibold mb-2">
                      {celebrity.name}
                    </h3>
                    <p className="text-gold text-xs md:text-sm uppercase tracking-wider font-medium">
                      {celebrity.role}
                    </p>
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
