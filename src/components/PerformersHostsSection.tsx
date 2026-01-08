import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Music } from 'lucide-react';
import { PERFORMERS } from '../constants/placeholders';

function PerformerSlide({ performer, index }: { performer: typeof PERFORMERS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale }}
      className="relative h-screen flex items-center justify-center snap-start"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${performer.image})`,
            filter: 'brightness(0.4) blur(0px)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-2 mb-6">
            <Music className="w-5 h-5 text-crimson" />
            <span className="text-crimson text-sm tracking-[0.4em] uppercase">
              {performer.description}
            </span>
          </div>

          <h2 className="font-headline text-[clamp(3rem,8vw,6rem)] font-light text-white leading-none mb-4">
            {performer.name}
          </h2>

          <p className="text-gold text-xl md:text-2xl font-light mb-6">
            {performer.title}
          </p>

          <p className="text-white/80 text-lg md:text-xl italic max-w-2xl mx-auto mb-8">
            "{performer.quote}"
          </p>

          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-8 bg-crimson rounded-full"
                  animate={{
                    scaleY: [1, 1.5, 1, 0.8, 1],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            <span className="text-white text-sm tracking-wider">
              {performer.time}
            </span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function PerformersHostsSection() {
  return (
    <section className="relative bg-black">
      <div className="sticky top-0 left-0 right-0 z-20 py-6 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="text-center">
          <p className="text-crimson text-xs tracking-[0.4em] uppercase mb-2">
            The Soundtrack of Love
          </p>
          <h2 className="font-headline text-2xl md:text-3xl text-white tracking-wide">
            LIVE PERFORMANCES
          </h2>
        </div>
      </div>

      <div className="snap-y snap-mandatory">
        {PERFORMERS.map((performer, index) => (
          <PerformerSlide key={performer.name} performer={performer} index={index} />
        ))}
      </div>

      <div className="h-screen flex items-center justify-center bg-gradient-to-b from-black to-crimson/20">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center px-6"
        >
          <div className="inline-block px-8 py-4 bg-white/10 backdrop-blur-md rounded-lg border border-crimson/30">
            <p className="text-white text-lg md:text-xl mb-2">
              Plus artists we can't announce yet
            </p>
            <div className="flex gap-4 justify-center mt-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                >
                  <Music className="w-6 h-6 text-white/40" />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
