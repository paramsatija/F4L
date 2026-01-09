import { motion } from 'framer-motion';
import { Check, Clock, Gift, Music, Camera, Utensils, Wine, Star } from 'lucide-react';

const TIMELINE_ITEMS = [
  {
    time: '5:00 PM',
    activity: 'Red Carpet Arrival',
    description: 'Professional photography & welcome champagne',
    icon: Camera,
  },
  {
    time: '6:00 PM',
    activity: 'Cocktail Reception',
    description: 'Premium beverages & canapés',
    icon: Wine,
  },
  {
    time: '7:00 PM',
    activity: 'Fashion Show Begins',
    description: '50+ runway looks from international designers',
    icon: Star,
  },
  {
    time: '9:00 PM',
    activity: 'Live Performances',
    description: 'International artists & entertainment',
    icon: Music,
  },
  {
    time: '10:00 PM',
    activity: 'Gourmet Dinner',
    description: 'Five-star dining experience',
    icon: Utensils,
  },
  {
    time: '11:30 PM',
    activity: 'After-Party',
    description: 'DJ set & exclusive networking',
    icon: Music,
  },
];

const VALUE_ITEMS = [
  { item: 'Premium runway seating', value: 2500 },
  { item: 'Welcome champagne & canapés', value: 500 },
  { item: 'Five-star gourmet dinner', value: 800 },
  { item: 'Professional photography package', value: 600 },
  { item: 'Live entertainment & performances', value: 1200 },
  { item: 'Exclusive after-party access', value: 400 },
  { item: 'Designer meet & greet', value: 1000 },
  { item: 'Gift bag with luxury items', value: 800 },
];

export function ValueBreakdownSection() {
  const totalValue = VALUE_ITEMS.reduce((sum, item) => sum + item.value, 0);

  return (
    <section className="relative py-20 bg-gradient-to-b from-grey-900 via-grey-800 to-grey-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gold/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3">
            Your Experience
          </p>
          <h2 className="font-display text-display-md text-white mb-4 uppercase">
            What's Included
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            A comprehensive luxury experience worth over AED {totalValue.toLocaleString()}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 rounded-2xl border border-vibrant-red/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-vibrant-red" />
              <h3 className="font-headline text-2xl text-white tracking-wide">
                Event Timeline
              </h3>
            </div>

            <div className="space-y-6">
              {TIMELINE_ITEMS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.time}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-16">
                      <p className="text-vibrant-red text-sm font-semibold">
                        {item.time}
                      </p>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start gap-3">
                        <motion.div
                          className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-vibrant-red/20 to-crimson/10 flex items-center justify-center"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                        >
                          <Icon className="w-5 h-5 text-vibrant-red" />
                        </motion.div>
                        <div>
                          <p className="text-white font-semibold mb-1">
                            {item.activity}
                          </p>
                          <p className="text-white/60 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 rounded-2xl border border-gold/30"
          >
            <div className="flex items-center gap-3 mb-6">
              <Gift className="w-6 h-6 text-gold" />
              <h3 className="font-headline text-2xl text-white tracking-wide">
                Value Breakdown
              </h3>
            </div>

            <div className="space-y-4 mb-6">
              {VALUE_ITEMS.map((item, index) => (
                <motion.div
                  key={item.item}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-white/80 text-sm">{item.item}</p>
                  </div>
                  <p className="text-white/60 text-sm font-semibold">
                    AED {item.value.toLocaleString()}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex items-center justify-between mb-2">
                <p className="text-white font-headline text-lg">
                  Total Value
                </p>
                <p className="text-white/60 font-headline text-xl line-through">
                  AED {totalValue.toLocaleString()}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gold font-headline text-2xl">
                  Your Price
                </p>
                <motion.p
                  className="text-gold font-headline text-3xl font-bold"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  From AED 2,500
                </motion.p>
              </div>
              <motion.div
                className="mt-4 p-4 bg-green-400/10 border border-green-400/30 rounded-lg"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-green-400 text-sm font-semibold text-center">
                  Save up to AED {(totalValue - 2500).toLocaleString()} with our exclusive pricing
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
