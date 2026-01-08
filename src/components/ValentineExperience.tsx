import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock } from 'lucide-react';

const timelineEvents = [
  {
    time: '6:00 PM',
    title: 'Arrival',
    description: 'Red carpet entrance. Champagne reception. Dubai skyline at golden hour.',
  },
  {
    time: '7:30 PM',
    title: 'Cocktail Hour',
    description: 'Panoramic views from the 122nd floor. Live jazz. Networking with global elite.',
  },
  {
    time: '8:30 PM',
    title: 'Runway',
    description: '40 years of Hollywood glamour. 80+ international models. Fashion history unfolds.',
  },
  {
    time: '10:00 PM',
    title: 'Live Performances',
    description: 'Grammy winners. International stars. Music that moves the soul.',
  },
  {
    time: '11:30 PM',
    title: 'After Party',
    description: 'Under the stars. Above the clouds. Where the night becomes legend.',
  },
];

export function ValentineExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={containerRef} className="relative bg-black">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-crimson/10 via-black to-black" />

        {timelineEvents.map((event, index) => {
          const start = index / timelineEvents.length;
          const end = (index + 1) / timelineEvents.length;

          const opacity = useTransform(
            scrollYProgress,
            [start - 0.1, start, end - 0.1, end],
            [0, 1, 1, 0]
          );

          const scale = useTransform(
            scrollYProgress,
            [start - 0.1, start, end - 0.1, end],
            [0.8, 1, 1, 0.8]
          );

          return (
            <motion.div
              key={event.time}
              style={{ opacity, scale }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="text-center px-6 max-w-3xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  style={{ opacity, y: useTransform(scrollYProgress, [start, start + 0.05], [20, 0]) }}
                  className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
                >
                  <Clock className="w-5 h-5 text-crimson" />
                  <span className="text-white text-lg tracking-wider">
                    {event.time}
                  </span>
                </motion.div>

                <h3 className="font-headline text-[clamp(3rem,10vw,8rem)] text-white font-light leading-none mb-8">
                  {event.title}
                </h3>

                <p className="text-white/70 text-xl md:text-2xl leading-relaxed">
                  {event.description}
                </p>

                <div className="mt-12 flex justify-center gap-2">
                  {timelineEvents.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === index ? 'w-12 bg-crimson' : 'w-2 bg-white/20'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div style={{ height: `${timelineEvents.length * 100}vh` }} />
    </section>
  );
}
