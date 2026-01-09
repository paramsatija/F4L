import { motion } from 'framer-motion';
import { Quote, Star, Users, Award, TrendingUp } from 'lucide-react';

const PRESS_LOGOS = [
  { name: 'VOGUE', style: 'font-serif italic' },
  { name: 'WWD', style: 'font-bold' },
  { name: "HARPER'S BAZAAR", style: 'font-serif' },
  { name: 'ELLE', style: 'font-serif italic' },
  { name: 'FASHION WEEK DAILY', style: 'font-sans' },
];

const TESTIMONIALS = [
  {
    quote: "The most spectacular fashion event I've ever attended. Pure magic.",
    author: 'Sarah Al-Mansoori',
    role: '2024 Platinum Guest',
    rating: 5,
  },
  {
    quote: 'An unforgettable evening that perfectly blends high fashion with Dubai luxury.',
    author: 'James Richardson',
    role: '2024 Gold Guest',
    rating: 5,
  },
  {
    quote: 'Worth every dirham. The Valentine experience was breathtaking.',
    author: 'Layla Hassan',
    role: '2024 Platinum Guest',
    rating: 5,
  },
];

const STATS = [
  { value: '15K+', label: 'Attendees Across Events', icon: Users },
  { value: '4.9/5', label: 'Guest Satisfaction', icon: Star },
  { value: '98%', label: 'Would Recommend', icon: TrendingUp },
  { value: '50+', label: 'Award-Winning Designers', icon: Award },
];

export function SocialProofSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-grey-900 via-grey-800 to-grey-900 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-vibrant-red/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3">
            Trusted By The Best
          </p>
          <h2 className="font-display text-display-md text-white uppercase">
            As Featured In
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-20 pb-16 border-b border-white/10"
        >
          {PRESS_LOGOS.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="cursor-pointer"
            >
              <p className={`${logo.style} text-xl md:text-2xl text-white/40 hover:text-white/70 transition-colors tracking-wider`}>
                {logo.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center glass-dark p-6 rounded-xl border border-vibrant-red/20 hover:border-vibrant-red/40 transition-colors"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-vibrant-red/20 to-crimson/10 mb-4"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-6 h-6 text-vibrant-red" />
                </motion.div>
                <p className="font-headline text-4xl text-white mb-2 font-bold">
                  {stat.value}
                </p>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3">
            Guest Reviews
          </p>
          <h3 className="font-display text-display-sm text-white uppercase">
            What Our Guests Say
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="glass-dark p-6 rounded-xl border border-white/10 hover:border-vibrant-red/30 transition-all relative"
              whileHover={{ y: -8 }}
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-vibrant-red/20" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>

              <p className="text-white/80 leading-relaxed mb-6 text-sm italic">
                "{testimonial.quote}"
              </p>

              <div>
                <p className="text-white font-semibold text-sm">
                  {testimonial.author}
                </p>
                <p className="text-white/50 text-xs">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 glass-dark px-6 py-3 rounded-full border border-vibrant-red/30">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-gold/40 to-vibrant-red/30 border-2 border-grey-900"
                />
              ))}
            </div>
            <p className="text-white/70 text-sm ml-2">
              <span className="text-vibrant-red font-bold">427 people</span> booked tickets this week
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
