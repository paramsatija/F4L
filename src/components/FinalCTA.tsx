import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function FinalCTA() {
  const [text, setText] = useState('');
  const [showButton, setShowButton] = useState(false);
  const fullText = 'There are 127 seats remaining.';
  const secondText = 'Will one of them be yours?';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowButton(true), 800);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-black flex items-center justify-center overflow-hidden">
      <div className="text-center px-6 max-w-4xl">
        <div className="mb-12">
          <motion.p
            className="text-white text-2xl md:text-3xl font-light mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {text}
            <motion.span
              className="inline-block w-0.5 h-8 bg-white ml-1"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.p>

          <motion.p
            className="text-white/70 text-xl md:text-2xl font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: showButton ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            {secondText}
          </motion.p>
        </div>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: showButton ? 1 : 0, y: showButton ? 0 : 20 }}
          transition={{ duration: 0.8 }}
          className="px-16 py-6 bg-crimson hover:bg-crimson/90 text-white text-xl font-headline tracking-wider transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Reserve My Seat
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: showButton ? 1 : 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-white/50 text-sm mt-8"
        >
          No payment required. Reserve your option.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showButton ? 1 : 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-12 flex items-center justify-center gap-8 text-white/40 text-xs"
        >
          <span>Secure checkout</span>
          <span>•</span>
          <span>Money-back guarantee</span>
          <span>•</span>
          <span>Verified by Stripe</span>
        </motion.div>
      </div>
    </section>
  );
}
