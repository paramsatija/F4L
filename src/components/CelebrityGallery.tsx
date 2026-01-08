import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MagneticCard } from './MagneticCard';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';
import { FashionSketches } from './particles/FashionSketches';

const performers = [
  {
    name: '25Band',
    subtitle: 'Tamin & A-Del',
    image: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
    role: 'Live Performance',
  },
  {
    name: 'Akon',
    subtitle: 'Grammy Winner',
    image: 'https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg?auto=compress&cs=tinysrgb&w=600',
    role: 'Headline Performance',
  },
  {
    name: 'Deborah Cox',
    subtitle: 'R&B Icon',
    image: 'https://images.pexels.com/photos/1699161/pexels-photo-1699161.jpeg?auto=compress&cs=tinysrgb&w=600',
    role: 'Live Performance',
  },
  {
    name: 'Maya Diab',
    subtitle: 'Middle East Star',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=600',
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
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative py-16 bg-crimson overflow-hidden">
      <FloatingValentineHearts count={30} variant="white" />
      <FashionSketches variant="light" />

      <div className="absolute inset-0 bg-gradient-to-b from-crimson via-crimson-light to-crimson opacity-30" />

      <motion.div className="relative z-10" style={{ opacity }}>
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
            <h2 className="font-display text-headline-xl text-white mb-4 uppercase">
              Global Music Icons
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {performers.map((performer, index) => (
              <motion.div
                key={performer.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <MagneticCard>
                  <div
                    className="relative group rounded-lg overflow-hidden bg-night-light"
                    data-cursor="hover"
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={performer.image}
                        alt={performer.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/50 to-transparent opacity-80" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-vibrant-red text-xs tracking-wider uppercase mb-1">
                        {performer.role}
                      </p>
                      <h3 className="text-white text-lg font-display font-semibold">
                        {performer.name}
                      </h3>
                      <p className="text-white/60 text-sm">{performer.subtitle}</p>
                    </div>
                    <div className="absolute inset-0 border border-vibrant-red/0 group-hover:border-vibrant-red/30 transition-colors duration-500 rounded-lg" />
                  </div>
                </MagneticCard>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="section-divider mt-32 mb-20 max-w-4xl mx-auto" />

        <div className="max-w-7xl mx-auto px-6 mb-16">
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
            <h2 className="font-display text-display-md text-white">
              Celebrity Guests
            </h2>
          </motion.div>
        </div>

        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-6">
            {celebrities.map((celebrity, index) => (
              <motion.div
                key={celebrity.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="w-40 md:w-48"
              >
                <MagneticCard>
                  <div
                    className="relative group text-center"
                    data-cursor="hover"
                  >
                    <div className="w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 rounded-full overflow-hidden border-2 border-gold/30 group-hover:border-gold/60 transition-colors duration-500">
                      <img
                        src={celebrity.image}
                        alt={celebrity.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <h3 className="text-white text-sm font-medium mb-1">
                      {celebrity.name}
                    </h3>
                    <p className="text-gold text-xs uppercase tracking-wider">
                      {celebrity.role}
                    </p>
                  </div>
                </MagneticCard>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
