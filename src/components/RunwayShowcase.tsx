import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MagneticCard } from './MagneticCard';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';
import { FashionSketches } from './particles/FashionSketches';

const runwayImages = [
  {
    src: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Couture Piece 1',
  },
  {
    src: 'https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Couture Piece 2',
  },
  {
    src: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Couture Piece 3',
  },
  {
    src: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Couture Piece 4',
  },
  {
    src: 'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=600',
    alt: 'Couture Piece 5',
  },
];

const museumPieces = [
  {
    src: 'https://images.pexels.com/photos/2220316/pexels-photo-2220316.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Beyonce - Renaissance Tour',
    year: '2023',
  },
  {
    src: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Jennifer Lopez - Vegas Residency',
    year: '2022',
  },
  {
    src: 'https://images.pexels.com/photos/1755428/pexels-photo-1755428.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Britney Spears - Piece of Me',
    year: '2018',
  },
  {
    src: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Lady Gaga - Chromatica Ball',
    year: '2022',
  },
  {
    src: 'https://images.pexels.com/photos/3622614/pexels-photo-3622614.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Nicki Minaj - World Tour',
    year: '2024',
  },
];

export function RunwayShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <section ref={containerRef} className="relative py-16 bg-black overflow-hidden">
      <FloatingValentineHearts count={25} variant="red" />
      <FashionSketches variant="dark" />

      <motion.div
        className="absolute inset-0 opacity-30"
        style={{ y: backgroundY }}
      >
        <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-radial from-crimson/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-gradient-radial from-gold/10 to-transparent blur-3xl" />
      </motion.div>

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.05)_0%,transparent_70%)]" />
      </div>

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 px-6"
        >
          <p className="text-crimson text-sm tracking-[0.4em] uppercase mb-3">
            Spectacular
          </p>
          <h2 className="font-display text-headline-xl text-white mb-3 uppercase">
            Runway Show
          </h2>
          <p className="text-white/80 text-base max-w-2xl mx-auto">
            For The Stars Couture by Jacob Meir - 80+ international models
            showcasing breathtaking designs
          </p>
        </motion.div>

        <div className="relative overflow-hidden py-8">
          <motion.div
            className="flex gap-6 px-6"
            animate={{ x: [0, -1500] }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {[...runwayImages, ...runwayImages, ...runwayImages].map(
              (image, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 md:w-80"
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-near-black/60 via-transparent to-transparent" />
                  </div>
                </motion.div>
              )
            )}
          </motion.div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-grey-300 to-transparent my-12 max-w-4xl mx-auto" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 px-6"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3">
            Museum Collection
          </p>
          <h2 className="font-display text-display-md text-white mb-3 uppercase">
            Iconic Pieces Worn by the Stars
          </h2>
          <p className="text-white/80 text-base max-w-2xl mx-auto">
            Exclusive display and access for VIP and private buyers
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {museumPieces.map((piece, index) => (
              <motion.div
                key={piece.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <MagneticCard>
                  <div
                    className="relative group rounded-lg overflow-hidden"
                    data-cursor="hover"
                  >
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={piece.src}
                        alt={piece.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-near-black via-near-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-gold text-xs mb-1">{piece.year}</p>
                      <p className="text-white text-sm font-medium leading-tight">
                        {piece.title}
                      </p>
                    </div>
                    <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-colors duration-500 rounded-lg" />
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
