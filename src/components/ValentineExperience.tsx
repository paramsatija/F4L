import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Heart, Flower2, Mail, Camera, Gift, Sparkles } from 'lucide-react';
import { VALENTINE_EXPERIENCES } from '../constants/placeholders';
import { FloatingHearts } from './particles/FloatingHearts';
import { RosePetals } from './particles/RosePetals';

const iconMap = {
  heart: Heart,
  flower: Flower2,
  mail: Mail,
  camera: Camera,
  gift: Gift,
  sparkles: Sparkles,
};

export function ValentineExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative py-32 bg-gradient-to-b from-rose-gold/10 via-rose-gold/5 to-white overflow-hidden">
      <FloatingHearts count={30} />
      <RosePetals count={15} />

      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-crimson text-sm tracking-[0.4em] uppercase mb-4 font-sans">
            The Romance
          </p>
          <h2 className="font-playfair text-display-lg text-grey-900 mb-6">
            Where Fashion Meets Love
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-rose-gold to-transparent mx-auto mb-8" />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-grey-600 text-lg max-w-3xl mx-auto leading-relaxed"
          >
            Valentine's Eve in Dubai. The world's most spectacular city transforms into a canvas of romance
            as the Burj Khalifa glows with ten thousand hearts. Inside the Armani Hotel, love takes on a new meaning.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {VALENTINE_EXPERIENCES.map((experience, index) => {
            const Icon = iconMap[experience.icon as keyof typeof iconMap];

            return (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                className="glass-light p-8 rounded-2xl hover:shadow-medium transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-rose-gold/20 to-crimson/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-crimson" />
                </div>

                <h3 className="text-grey-900 text-xl font-semibold mb-3">
                  {experience.title}
                </h3>

                <p className="text-grey-600 text-sm leading-relaxed">
                  {experience.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-block glass-crimson px-12 py-8 rounded-2xl">
            <p className="text-grey-800 text-lg max-w-2xl leading-relaxed">
              Whether you're celebrating with your partner, your friends, or your own fabulous self -
              this is a Valentine's you'll never forget.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
