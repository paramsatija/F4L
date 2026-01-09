import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Heart, Crown } from 'lucide-react';

interface InlineCTAProps {
  variant: 'minimal' | 'bold' | 'romantic';
  message: string;
  subtext?: string;
}

export function InlineCTA({ variant, message, subtext }: InlineCTAProps) {
  const scrollToTickets = () => {
    document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (variant === 'minimal') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex justify-center py-12"
      >
        <motion.button
          onClick={scrollToTickets}
          className="group flex items-center gap-3 text-vibrant-red hover:text-white transition-colors font-headline tracking-wider text-lg"
          whileHover={{ x: 5 }}
        >
          {message}
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </motion.div>
    );
  }

  if (variant === 'romantic') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-16 text-center"
      >
        <div className="relative inline-block">
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-vibrant-red/20 via-crimson/30 to-vibrant-red/20 rounded-full blur-2xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.button
            onClick={scrollToTickets}
            className="relative group bg-gradient-to-r from-vibrant-red via-crimson to-vibrant-red text-white px-10 py-5 rounded-full font-headline text-xl tracking-wider shadow-[0_15px_50px_rgba(220,38,38,0.5)] hover:shadow-[0_20px_60px_rgba(220,38,38,0.7)] transition-all duration-300 border-2 border-white/30 overflow-hidden"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative z-10 flex items-center gap-4">
              <Heart className="w-5 h-5 fill-current" />
              {message}
              <Sparkles className="w-5 h-5" />
            </span>
          </motion.button>
        </div>
        {subtext && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-white/60 text-sm tracking-wider"
          >
            {subtext}
          </motion.p>
        )}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="py-16 px-6"
    >
      <div className="max-w-3xl mx-auto glass-dark p-8 rounded-2xl border border-vibrant-red/30">
        <div className="text-center">
          <motion.div
            className="inline-flex items-center gap-2 text-gold mb-4"
            animate={{ y: [-2, 2, -2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Crown className="w-6 h-6" />
            <Sparkles className="w-5 h-5" />
          </motion.div>
          <h3 className="font-headline text-3xl text-white mb-3 tracking-wide">
            {message}
          </h3>
          {subtext && (
            <p className="text-white/70 mb-6 leading-relaxed">{subtext}</p>
          )}
          <motion.button
            onClick={scrollToTickets}
            className="group bg-gradient-to-r from-gold via-amber-400 to-gold text-grey-900 px-8 py-4 rounded-xl font-headline tracking-wider shadow-[0_10px_40px_rgba(212,165,116,0.4)] hover:shadow-[0_15px_50px_rgba(212,165,116,0.6)] transition-all border-2 border-gold/50 overflow-hidden relative"
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative z-10 flex items-center gap-3 font-bold">
              VIEW TICKETS
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
