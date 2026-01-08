import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Award, Clock, Music, Sparkles, Wine, PartyPopper, Users, Star } from 'lucide-react';
import { PLACEHOLDERS } from '../constants/placeholders';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';

const awards = [
  { year: '2023', title: 'California State Proclamation' },
  { year: '2024', title: 'UN Presidential Medal of Honor' },
  { year: '2024', title: 'Fashion For Peace Foundation' },
];

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

export function DesignerTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative bg-dark-red overflow-hidden">
      <FloatingValentineHearts count={20} variant="white" />

      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-1/2 h-1/2 bg-gradient-to-l from-vibrant-red/5 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 font-sans">
            The Visionary
          </p>
          <h2 className="font-display text-headline-xl text-white mb-4 uppercase">
            Jacob Meir
          </h2>
          <p className="text-gold-champagne text-lg font-display italic">
            Founder & Creative Director, For The Stars Fashion House
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-dark p-6 rounded-lg mb-6">
              <p className="text-gold text-base font-display italic leading-relaxed">
                "Fashion is not about clothes. It's about making people feel like the star they were born to be."
              </p>
            </div>

            <div className="space-y-4 text-white/80 text-sm leading-relaxed">
              <p>
                Born in Jerusalem, Jacob Meir served in the Israeli military before
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
                one-of-a-kind pieces. Each For The Stars creation is a work of art.
              </p>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {awards.map((award, index) => (
                <motion.div
                  key={award.year}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
                  className="glass-gold p-3 rounded-lg text-center"
                >
                  <Award className="w-5 h-5 text-gold mx-auto mb-2" />
                  <p className="text-white text-xs font-headline tracking-wider mb-1">
                    {award.year}
                  </p>
                  <p className="text-white/70 text-xs leading-tight">
                    {award.title}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 via-transparent to-vibrant-red/20 rounded-lg blur-xl" />
            <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src={PLACEHOLDERS.jacobMeir.portrait}
                alt="Jacob Meir"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-red/80 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-1 h-1 rounded-full bg-gold animate-pulse" />
            <Clock className="w-6 h-6 text-gold" />
            <p className="text-gold text-sm tracking-[0.5em] uppercase font-headline">
              An Unforgettable Evening
            </p>
            <Clock className="w-6 h-6 text-gold" />
            <div className="w-1 h-1 rounded-full bg-gold animate-pulse" />
          </div>

          <h3 className="font-display text-5xl md:text-6xl text-white mb-4 uppercase tracking-tight">
            Friday 13 February 2026
          </h3>

          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
            <Star className="w-4 h-4 text-vibrant-red fill-vibrant-red" />
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

          <p className="text-gold-champagne text-2xl font-display font-bold tracking-wide mb-3">
            Armani Hotel, Dubai
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.7, duration: 0.4 }}
            className="inline-flex items-center gap-2 glass-gold px-6 py-3 rounded-full mt-4"
          >
            <Users className="w-4 h-4 text-gold" />
            <span className="text-white/90 text-sm font-medium">
              Limited to 600 Elite Guests
            </span>
          </motion.div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {timelineEvents.map((event, index) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.time}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="relative group"
              >
                <div className="absolute -inset-4 bg-gradient-to-r from-gold/0 via-gold/5 to-gold/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                <div className="relative flex items-start gap-6 glass-dark p-8 rounded-2xl border border-gold/20 hover:border-gold/40 transition-all duration-300">
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-gradient-to-br from-gold/20 to-vibrant-red/20 border-2 border-gold/40 flex items-center justify-center relative overflow-hidden"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Icon className="w-7 h-7 text-gold relative z-10" />
                    </motion.div>
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-gold font-headline text-xl font-bold">
                          {event.time}
                        </span>
                        <span className="text-gold/40 text-lg">→</span>
                        <span className="text-gold-champagne font-headline text-lg">
                          {event.endTime}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-white text-2xl font-display font-bold mb-3 group-hover:text-gold transition-colors">
                      {event.title}
                    </h4>

                    <p className="text-white/70 text-base leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <motion.div
                    className="absolute top-4 right-4 w-2 h-2 rounded-full bg-vibrant-red"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
