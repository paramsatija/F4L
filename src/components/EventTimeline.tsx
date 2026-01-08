import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Clock, Music, Sparkles, Wine, PartyPopper } from 'lucide-react';

const timelineEvents = [
  {
    time: '7:00 PM',
    endTime: '8:00 PM',
    title: 'VIP Red Carpet & Champagne Reception',
    description: 'Live violinist & saxophone ambience',
    icon: Wine,
  },
  {
    time: '8:00 PM',
    endTime: '10:00 PM',
    title: 'Live Performances by Global Music Icons',
    description: '25Band, Deborah Cox, Maya Diab, Akon',
    icon: Music,
  },
  {
    time: '10:00 PM',
    endTime: '11:00 PM',
    title: 'For The Stars Couture Runway Show',
    description: "Jacob Meir's collections on 80+ international models",
    icon: Sparkles,
  },
  {
    time: '11:00 PM',
    endTime: '2:00 AM',
    title: 'Exclusive VIP After Party',
    description: 'Museum collection display, celebrity DJ, curated cocktails',
    icon: PartyPopper,
  },
];

export function EventTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '100%']);

  return (
    <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-crimson/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-beige-light/50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <Clock className="w-5 h-5 text-crimson" />
            <p className="text-grey-500 text-sm tracking-[0.4em] uppercase">
              The Evening
            </p>
          </div>

          <h2 className="font-display text-display-lg text-grey-900 mb-4">
            Friday 13 February 2026
          </h2>

          <motion.p
            className="text-crimson text-2xl md:text-3xl font-headline font-bold tracking-wide"
          >
            Armani Hotel, Dubai
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-grey-200 -translate-x-1/2 hidden md:block">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-crimson to-gold"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={event.time}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-12 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      isLeft ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <motion.div
                      className="glass-light p-6 md:p-8 rounded-lg shadow-medium"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div
                        className={`flex items-center gap-3 mb-4 ${
                          isLeft ? 'md:justify-end' : 'md:justify-start'
                        }`}
                      >
                        <span className="text-crimson font-mono text-sm font-semibold">
                          {event.time}
                        </span>
                        <span className="text-grey-300">-</span>
                        <span className="text-grey-500 font-mono text-sm">
                          {event.endTime}
                        </span>
                      </div>
                      <h3 className="text-grey-900 text-xl md:text-2xl font-display font-semibold mb-3">
                        {event.title}
                      </h3>
                      <p className="text-grey-600 text-sm md:text-base">
                        {event.description}
                      </p>
                    </motion.div>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className="w-14 h-14 rounded-full bg-white border-2 border-crimson/50 flex items-center justify-center shadow-soft"
                      whileHover={{ scale: 1.2, borderColor: 'rgba(207, 15, 15, 1)' }}
                    >
                      <Icon className="w-6 h-6 text-crimson" />
                    </motion.div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="glass-crimson inline-block px-12 py-8 rounded-lg shadow-medium">
            <p className="text-grey-700 text-lg mb-4">
              A spectacular night of couture, music and philanthropy
            </p>
            <p className="text-crimson text-xl font-headline font-bold tracking-wide">
              UNITING HOLLYWOOD'S BIGGEST STARS WITH DUBAI'S ELITE
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
