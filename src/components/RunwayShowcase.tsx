import { motion } from 'framer-motion';
import { useRef } from 'react';
import { MagneticCard } from './MagneticCard';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';
import { FashionSketches } from './particles/FashionSketches';
import { SectionDecorations } from './SectionDecorations';

const runwayImages = [
  { src: '/runway/IMG_8125.jpg', alt: 'Couture Piece 1' },
  { src: '/runway/IMG_8126.jpg', alt: 'Couture Piece 2' },
  { src: '/runway/IMG_8127.jpg', alt: 'Couture Piece 3' },
  { src: '/runway/IMG_8128.jpg', alt: 'Couture Piece 4' },
  { src: '/runway/IMG_8129.jpg', alt: 'Couture Piece 5' },
  { src: '/runway/IMG_8130.jpg', alt: 'Couture Piece 6' },
  { src: '/runway/IMG_8131.jpg', alt: 'Couture Piece 7' },
  { src: '/runway/IMG_8132.jpg', alt: 'Couture Piece 8' },
  { src: '/runway/IMG_8133.jpg', alt: 'Couture Piece 9' },
  { src: '/runway/IMG_8134.jpg', alt: 'Couture Piece 10' },
  { src: '/runway/IMG_8135.jpg', alt: 'Couture Piece 11' },
  { src: '/runway/IMG_8136.jpg', alt: 'Couture Piece 12' },
  { src: '/runway/IMG_8137.jpg', alt: 'Couture Piece 13' },
  { src: '/runway/IMG_8138.jpg', alt: 'Couture Piece 14' },
  { src: '/runway/IMG_8139.jpg', alt: 'Couture Piece 15' },
  { src: '/runway/IMG_8140.jpg', alt: 'Couture Piece 16' },
  { src: '/runway/IMG_8141.jpg', alt: 'Couture Piece 17' },
  { src: '/runway/IMG_8142.jpg', alt: 'Couture Piece 18' },
  { src: '/runway/IMG_8143.jpg', alt: 'Couture Piece 19' },
  { src: '/runway/IMG_8144.jpg', alt: 'Couture Piece 20' },
  { src: '/runway/IMG_8145.jpg', alt: 'Couture Piece 21' },
  { src: '/runway/IMG_8146.jpg', alt: 'Couture Piece 22' },
  { src: '/runway/IMG_8147.jpg', alt: 'Couture Piece 23' },
  { src: '/runway/IMG_8148.jpg', alt: 'Couture Piece 24' },
  { src: '/runway/IMG_8149.jpg', alt: 'Couture Piece 25' },
  { src: '/runway/IMG_8150.jpg', alt: 'Couture Piece 26' },
  { src: '/runway/IMG_8151.jpg', alt: 'Couture Piece 27' },
  { src: '/runway/IMG_8152.jpg', alt: 'Couture Piece 28' },
  { src: '/runway/IMG_8153.jpg', alt: 'Couture Piece 29' },
  { src: '/runway/IMG_8154.jpg', alt: 'Couture Piece 30' },
  { src: '/runway/IMG_8155.jpg', alt: 'Couture Piece 31' },
  { src: '/runway/IMG_8156.jpg', alt: 'Couture Piece 32' },
];

const museumPieces = [
  { src: '/iconic piece/jennifer main.jpg', title: 'Jennifer Lopez - Vegas Residency', year: '2022' },
  { src: '/iconic piece/BRITNEY SPEARS MAIN.jpg', title: 'Britney Spears - Piece of Me', year: '2018' },
  { src: '/iconic piece/nicki-minaj.jpg', title: 'Nicki Minaj - World Tour', year: '2024' },
  { src: '/iconic piece/Jacob with akon.jpg', title: 'Akon - World Tour', year: '2023' },
];

export function RunwayShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="runway" ref={containerRef} className="relative py-16 bg-black overflow-hidden">
      <SectionDecorations variant="dark" />
      <FloatingValentineHearts count={25} variant="red" />
      <FashionSketches variant="dark" />

      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/3 bg-gradient-radial from-crimson/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/3 bg-gradient-radial from-gold/10 to-transparent blur-3xl" />
      </div>

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
          <h2 className="font-display text-headline-xl text-white mb-3 uppercase font-bold">
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
            animate={{ x: [0, -4800] }}
            transition={{
              x: {
                duration: 80,
                repeat: Infinity,
                ease: 'linear',
              },
            }}
          >
            {[...runwayImages, ...runwayImages].map(
              (image, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-64 md:w-80"
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className="relative aspect-[2/3] rounded-lg overflow-hidden shadow-large">
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
          <h2 className="font-display text-display-md text-white mb-3 uppercase font-bold">
            Iconic Pieces Worn by the Stars
          </h2>
          <p className="text-white/80 text-base max-w-2xl mx-auto">
            Exclusive display and access for VIP and private buyers
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
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
                    <div className="aspect-[2/3] overflow-hidden">
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
