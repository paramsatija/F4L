import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award } from 'lucide-react';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';
import { FashionSketches } from './particles/FashionSketches';
import { SectionDecorations } from './SectionDecorations';

const awards = [
  { year: '2023', title: 'California State Proclamation' },
  { year: '2024', title: 'UN Presidential Medal of Honor' },
  { year: '2024', title: 'Lifetime Achievement Award - President Joe Biden' },
];

export function DesignerTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="designer" ref={containerRef} className="relative bg-black overflow-hidden">
      <SectionDecorations variant="dark" />
      <FloatingValentineHearts count={20} variant="red" />
      <FashionSketches variant="dark" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-l from-vibrant-red/5 to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-1/2 h-1/2 bg-gradient-to-r from-crimson/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 font-sans">
            The Visionary
          </p>
          <h2 className="font-display text-headline-xl text-white mb-4 uppercase font-bold">
            Jacob Meir
          </h2>
          <p className="text-gold-champagne text-lg font-display italic">
            Founder & Creative Director, For The Stars Fashion House
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-stretch mb-16">
          {/* Image First - Shows at top on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="relative order-1 lg:order-2 h-full"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-transparent to-vibrant-red/20 rounded-lg blur-xl" />
            <div className="relative aspect-[4/5] lg:aspect-auto lg:h-full rounded-lg overflow-hidden shadow-crimson-intense">
              <img
                src="/jacob meir/jacob-meir.jpg"
                alt="Jacob Meir - Founder of For The Stars Fashion House"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
                <p className="text-gold text-sm tracking-[0.3em] uppercase mb-2 font-sans font-semibold">The Visionary</p>
                <p className="text-white text-2xl font-display font-bold">Jacob Meir</p>
              </div>
            </div>
          </motion.div>

          {/* Content - Shows below image on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 flex flex-col"
          >
            <div className="glass-dark p-6 lg:p-8 rounded-lg mb-6 lg:mb-8">
              <p className="text-gold text-lg lg:text-2xl font-display italic leading-relaxed font-semibold">
                "Fashion is not about clothes. It's about making people feel like the star they were born to be."
              </p>
            </div>

            <div className="space-y-4 lg:space-y-6 text-white/90 text-base lg:text-lg leading-relaxed">
              <p className="font-medium">
                Jacob Meir, founder and Creative Director of For The Stars, is the visionary force behind one of Los Angeles' most distinctive high-end fashion houses. Based in the world's entertainment capital, For The Stars has become synonymous with bold creativity, artistic excellence, and cultural impact.
              </p>

              <p className="font-medium">
                From an early age, Jacob demonstrated an innate passion for art and fashion, showing far greater vision for creativity than conventional academics. Guided by this passion, he went on to establish For The Stars, transforming his early artistic instincts into a global fashion enterprise.
              </p>

              <p className="font-medium">
                Since its inception, Jacob has led the brand's creative development while collaborating with artists, designers, and creative talent from around the world. Through his work, he has helped countless individuals bring their artistic visions to life, offering a platform that celebrates innovation, craftsmanship, and self-expression.
              </p>

              <p className="font-medium">
                Jacob's designs have appeared across hundreds of platforms, including music videos, television shows, editorials, fashion events, performances, and feature films. His work has been worn and celebrated by some of the most iconic artists in history, including Prince, Madonna, Cher, Michael Jackson, Beyoncé, Jennifer Lopez, Jason Derulo, Akon, and many others.
              </p>

              <p className="font-medium">
                With over four decades of influence in the entertainment and fashion industries, Jacob continues to leave an indelible mark through his creativity, leadership, and commitment to artistic excellence. His passion for his craft is symbolized by the signature heart logo of For The Stars By Jacob Meir, representing both creativity and purpose.
              </p>

              <p className="font-medium">
                In recognition of his exceptional dedication, long-standing service, and meaningful contributions to the community and charitable organisations, Jacob was honored with the Lifetime Achievement Award 2024, presented by President Joe Biden.
              </p>
            </div>

            <div className="mt-6 lg:mt-8 grid grid-cols-3 gap-3 lg:gap-4">
              {awards.map((award, index) => (
                <motion.div
                  key={award.year}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="glass-gold p-3 lg:p-4 rounded-lg text-center"
                >
                  <Award className="w-5 h-5 lg:w-6 lg:h-6 text-gold mx-auto mb-2" />
                  <p className="text-white text-xs lg:text-sm font-headline tracking-wider mb-1 lg:mb-2 font-bold">
                    {award.year}
                  </p>
                  <p className="text-white/80 text-[10px] lg:text-xs leading-tight font-medium">
                    {award.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
