import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Star } from 'lucide-react';

const celebrities = [
  {
    name: 'Victoria Recano',
    role: 'Celebrity Host',
    achievement: 'Emmy Award Winning Journalist',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'April Sutton',
    role: 'Celebrity Co-Host',
    achievement: 'International TV Personality',
    image: 'https://images.pexels.com/photos/3756616/pexels-photo-3756616.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Avi Edri',
    role: 'Celebrity MUA',
    achievement: 'Makeup Artist to the Stars',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Leslie Kee',
    role: 'Celebrity Photographer',
    achievement: 'Award-Winning Visual Artist',
    image: 'https://images.pexels.com/photos/2104252/pexels-photo-2104252.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    name: 'Anderson Silva',
    role: 'Special Guest',
    achievement: 'UFC Legend',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export function CelebrityGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-black py-24 overflow-hidden"
    >
      <motion.div style={{ opacity }}>
        <div className="text-center mb-12 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4">
              The Legends
            </p>
            <h2 className="font-headline text-4xl md:text-5xl text-white tracking-wide">
              HOLLYWOOD'S FINEST
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 px-6 pb-6">
            {celebrities.map((celebrity, index) => (
              <motion.div
                key={celebrity.name}
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[50vw] h-[70vh] snap-center"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative w-full h-full overflow-hidden rounded-lg">
                  <motion.img
                    src={celebrity.image}
                    alt={celebrity.name}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : 1,
                    }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-8"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{
                      y: hoveredIndex === index ? 0 : 20,
                      opacity: hoveredIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Star className="w-4 h-4 text-gold fill-gold" />
                      <span className="text-gold text-sm tracking-[0.3em] uppercase">
                        {celebrity.role}
                      </span>
                    </div>
                    <h3 className="font-headline text-5xl md:text-6xl text-white mb-3 leading-none">
                      {celebrity.name}
                    </h3>
                    <p className="text-white/80 text-lg">
                      {celebrity.achievement}
                    </p>
                  </motion.div>

                  <div className="absolute top-8 right-8">
                    <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center">
                      <span className="text-white text-xl font-headline">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: celebrities.length * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative flex-shrink-0 w-[85vw] md:w-[70vw] lg:w-[50vw] h-[70vh] snap-center"
            >
              <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-br from-black via-crimson/20 to-black rounded-lg border border-white/10">
                <div className="text-center px-8">
                  <p className="text-white/60 text-xl md:text-2xl mb-6">
                    And you
                  </p>
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
                    <Star className="w-12 h-12 text-white/40" />
                  </div>
                  <p className="text-white text-lg">
                    Your place in history awaits
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-8 px-6">
            <p className="text-white/60 text-sm tracking-wider">
              Swipe to explore
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
