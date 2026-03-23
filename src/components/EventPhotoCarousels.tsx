import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { carouselDurationMultiplier } from '../constants/carousel';
import { buildEventPhotoList } from '../constants/eventPhotos';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';
import { FashionSketches } from './particles/FashionSketches';
import { SectionDecorations } from './SectionDecorations';
import { EventGalleryModal } from './EventGalleryModal';

const FRONT = buildEventPhotoList('FRONT SHOTS SEQ');
const WALL = buildEventPhotoList('WALL SHOTS');
const STAGE = buildEventPhotoList('STAGE SHOTS SEQ');

/** Each card is w-64 (256px) + gap-6 (24px) = 280px per slot */
const CARD_SLOT = 280;

/** Same linear speed as `RunwayShowcase` marquee: 4800px in 80s */
const RUNWAY_MARQUEE_DISTANCE_PX = 4800;
const RUNWAY_MARQUEE_DURATION_S = 80;

function stripDurationMatchingRunway(distancePx: number): number {
  return (distancePx * RUNWAY_MARQUEE_DURATION_S) / RUNWAY_MARQUEE_DISTANCE_PX;
}

function stripDuration(distancePx: number): number {
  return stripDurationMatchingRunway(distancePx) * carouselDurationMultiplier();
}

const STRIPS = [
  {
    key: 'front' as const,
    images: FRONT,
    partLabel: 'Part I —',
    title: 'On the runway',
    eyebrowColor: 'text-crimson',
    borderHover: 'group-hover:border-crimson/50',
    direction: 'left' as const,
    distance: FRONT.length * CARD_SLOT,
    duration: stripDuration(FRONT.length * CARD_SLOT),
  },
  {
    key: 'wall' as const,
    images: WALL,
    partLabel: 'Part I —',
    title: 'The wall',
    eyebrowColor: 'text-gold',
    borderHover: 'group-hover:border-gold/50',
    direction: 'right' as const,
    distance: WALL.length * CARD_SLOT,
    duration: stripDuration(WALL.length * CARD_SLOT),
  },
  {
    key: 'stage' as const,
    images: STAGE,
    partLabel: 'Part I —',
    title: 'The show',
    eyebrowColor: 'text-cyan-300',
    borderHover: 'group-hover:border-cyan-400/50',
    direction: 'left' as const,
    distance: STAGE.length * CARD_SLOT,
    duration: stripDuration(STAGE.length * CARD_SLOT),
  },
];

type StripConfig = (typeof STRIPS)[number];

function InfiniteStrip({ strip }: { strip: StripConfig }) {
  const doubled = [...strip.images, ...strip.images];
  const xValues: [number, number] =
    strip.direction === 'left'
      ? [0, -strip.distance]
      : [-strip.distance, 0];

  return (
    <div className="relative overflow-hidden py-7">
      <motion.div
        className="flex gap-6 px-6"
        style={{ willChange: 'transform' }}
        animate={{ x: xValues }}
        transition={{
          x: {
            duration: strip.duration,
            repeat: Infinity,
            ease: 'linear',
            repeatType: 'loop',
          },
        }}
      >
        {doubled.map((image, index) => (
          <div
            key={`${image.src}-${index}`}
            className="group flex-shrink-0 w-64 md:w-80"
          >
            <div
              className={`relative aspect-[2/3] overflow-hidden rounded-lg shadow-large ring-1 ring-white/5 transition-colors duration-500 ${strip.borderHover}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black/60 via-transparent to-transparent" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function EventPhotoCarousels() {
  const [modalOpen, setModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <section
        id="part-one-photos"
        ref={containerRef}
        className="relative overflow-hidden bg-black py-16"
      >
        <SectionDecorations variant="dark" />
        <FloatingValentineHearts count={18} variant="red" />
        <FashionSketches variant="dark" />

        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0 opacity-50">
          <div className="absolute left-0 top-1/4 h-72 w-72 rounded-full bg-crimson/6 blur-[110px]" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-gold/6 blur-[120px]" />
          <div className="absolute right-1/3 top-1/2 h-56 w-56 rounded-full bg-cyan-500/5 blur-[90px]" />
        </div>

        <div className="relative z-10">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-10 px-6 text-center"
          >
            <p className="mb-3 text-sm uppercase tracking-[0.4em] text-white/50">
              Part I — Dubai, February 2026
            </p>
            <h2 className="font-display text-headline-xl mb-4 font-bold uppercase text-white">
              The night in motion
            </h2>
            <p className="mx-auto max-w-2xl text-base text-white/70">
              The runway, the wall, and the stage — three films of the same evening.
            </p>
          </motion.div>

          {/* Three infinite strips */}
          {STRIPS.map((strip, i) => (
            <div key={strip.key} className={i < STRIPS.length - 1 ? 'mb-2' : 'mb-10'}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="mb-4 px-6 text-center"
              >
                <h3 className="font-display text-display-md font-bold uppercase">
                  <span className={strip.eyebrowColor}>{strip.partLabel}</span>{' '}
                  <span className="text-white">{strip.title}</span>
                </h3>
              </motion.div>

              <InfiniteStrip strip={strip} />

              {i < STRIPS.length - 1 && (
                <div className="mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              )}
            </div>
          ))}

          {/* View All button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex justify-center"
          >
            <motion.button
              onClick={() => setModalOpen(true)}
              className="group flex items-center gap-3 border border-white/25 px-10 py-4 text-xs tracking-[0.35em] uppercase text-white transition-all duration-300 hover:border-crimson/60 hover:bg-crimson/8 hover:text-crimson"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View All Photos</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      <EventGalleryModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
