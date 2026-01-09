import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Award, TrendingUp } from 'lucide-react';
import { JACOB_MEIR_TIMELINE } from '../constants/placeholders';
import { PLACEHOLDERS } from '../constants/placeholders';
import { HeartCard } from './utility/HeartCard';

const awards = [
  { year: '2023', title: 'California State Proclamation' },
  { year: '2024', title: 'UN Presidential Medal of Honor' },
  { year: '2024', title: 'Fashion For Peace Foundation' },
];

const stats = [
  { value: '40+', label: 'Years in Fashion' },
  { value: '11', label: 'In-House Designers' },
  { value: '1000s', label: 'One-of-a-Kind Pieces' },
  { value: 'Featured', label: 'Vogue, WWD, Forbes' },
];

export function DesignerSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['10%', '-10%']);

  return (
    <section ref={containerRef} className="relative py-32 bg-grey-900 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-l from-gold/5 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-grey-800 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-4 font-sans">
            The Visionary
          </p>
          <h2 className="font-playfair text-display-lg text-white mb-6">
            Jacob Meir
          </h2>
          <p className="text-gold-champagne text-xl font-display italic">
            Founder & Creative Director, For The Stars Fashion House
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-dark p-8 rounded-2xl mb-8">
              <p className="text-gold text-lg font-display italic mb-6 leading-relaxed">
                "Fashion is not about clothes. It's about making people feel like the star they were born to be."
              </p>
            </div>

            <div className="space-y-6 text-white/80 leading-relaxed">
              <p>
                Born in the neighborhoods of Jerusalem, Jacob Meir served in the Israeli military before
                following his dream to Los Angeles. In 1986, he founded For The Stars Fashion House on
                Melrose Avenue, building what would become Hollywood's go-to destination for celebrity couture.
              </p>

              <p>
                Over four decades, Meir has dressed entertainment's greatest icons: Prince. Madonna.
                Michael Jackson. Cher. Beyonce. Jennifer Lopez. Lady Gaga. Whitney Houston. Britney Spears.
                Nicki Minaj. His designs have graced world tours, red carpets, music videos, and the most
                photographed moments in pop culture history.
              </p>

              <p>
                A self-taught visionary, Meir employs 11 designers creating thousands of handmade,
                one-of-a-kind pieces. Each For The Stars creation is a work of art - elaborate,
                theatrical, and utterly unforgettable.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-8">
              {awards.map((award, index) => (
                <HeartCard
                  key={award.year}
                  backgroundColor="#D4A574"
                  textColor="white"
                  size="medium"
                  delay={0.4 + index * 0.1}
                  glowColor="rgba(212, 165, 116, 0.4)"
                >
                  <div className="flex flex-col items-center justify-center">
                    <p className="font-headline text-3xl md:text-4xl font-bold mb-2">{award.year}</p>
                    <p className="text-xs md:text-sm uppercase tracking-wide font-sans opacity-90 leading-tight text-center px-3">
                      {award.title}
                    </p>
                  </div>
                </HeartCard>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="relative"
            style={{ y: imageY }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-transparent to-crimson/20 rounded-lg blur-xl" />
              <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
                <img
                  src={PLACEHOLDERS.jacobMeir.portrait}
                  alt="Jacob Meir - Creative Director"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-grey-900/80 via-transparent to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp className="w-6 h-6 text-gold" />
            <h3 className="font-headline text-2xl text-white tracking-wide">
              CAREER TIMELINE
            </h3>
          </div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold via-crimson to-gold" />

            <div className="space-y-12">
              {JACOB_MEIR_TIMELINE.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="glass-dark p-6 rounded-xl">
                      <p className="text-gold font-headline text-2xl mb-2">{item.year}</p>
                      <p className="text-white/80 text-sm leading-relaxed">{item.event}</p>
                    </div>
                  </div>

                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gold rounded-full border-4 border-grey-900 -translate-x-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                className="glass-dark p-6 rounded-lg text-center"
              >
                <motion.p
                  className="text-gold text-3xl md:text-4xl font-display font-bold mb-2"
                  initial={{ scale: 0.5 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 1 + index * 0.1 + 0.2, type: 'spring' }}
                >
                  {stat.value}
                </motion.p>
                <p className="text-white/60 text-sm uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
