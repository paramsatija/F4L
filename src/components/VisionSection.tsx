import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Users, Globe, Music, Award } from 'lucide-react';

const stats = [
  { value: '600+', label: 'VIP Guests', icon: Users },
  { value: '80+', label: 'International Models', icon: Globe },
  { value: '4', label: 'Grammy Winners', icon: Music },
  { value: '40', label: 'Years of Legacy', icon: Award },
];

export function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section
      id="vision"
      ref={containerRef}
      className="relative py-32 bg-beige-light overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-white via-beige-light to-white" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-30">
        <motion.div className="absolute inset-0 rounded-full border border-crimson/10" style={{ y }} />
        <motion.div className="absolute inset-8 rounded-full border border-gold/10" style={{ y }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-crimson text-sm tracking-[0.4em] uppercase mb-4 font-sans">
            The Vision
          </p>
          <h2 className="font-display text-display-lg text-grey-900 mb-6">
            One Night. One Legacy. One Love.
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto mb-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-grey-700 text-lg md:text-xl leading-relaxed mb-6">
            On Valentine's Eve 2026, the world's tallest tower becomes fashion's most romantic stage.
            <span className="text-crimson font-medium"> Fashions for Love </span>
            unites Hollywood's brightest stars with Dubai's elite for an unforgettable celebration
            of couture, music, and the universal language of love.
          </p>
          <p className="text-grey-600 text-lg leading-relaxed">
            This is where four decades of dressing the world's greatest icons culminates
            in a single, spectacular evening. This is Jacob Meir's masterpiece.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="text-center group"
              >
                <div className="relative mb-4">
                  <motion.div
                    className="w-16 h-16 mx-auto rounded-full bg-white shadow-soft flex items-center justify-center group-hover:shadow-crimson transition-shadow duration-500"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Icon className="w-7 h-7 text-crimson" />
                  </motion.div>
                </div>
                <motion.p
                  className="font-headline text-4xl md:text-5xl text-grey-900 mb-2"
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 200 }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-grey-600 text-sm uppercase tracking-wider font-sans">
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
