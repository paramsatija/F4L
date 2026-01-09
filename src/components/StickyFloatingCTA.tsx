import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Ticket, Sparkles } from 'lucide-react';

export function StickyFloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const ticketsSection = document.getElementById('tickets');
      const ticketsSectionTop = ticketsSection?.offsetTop ?? Infinity;

      if (currentScrollY > 800 && currentScrollY < ticketsSectionTop - 200) {
        if (currentScrollY < lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTickets = () => {
    document.getElementById('tickets')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <motion.button
            onClick={scrollToTickets}
            className="group relative bg-gradient-to-r from-vibrant-red via-crimson to-vibrant-red text-white px-8 py-4 rounded-full font-headline text-lg tracking-wider shadow-[0_20px_60px_rgba(220,38,38,0.6)] hover:shadow-[0_25px_70px_rgba(220,38,38,0.8)] transition-all duration-300 border-2 border-white/20 overflow-hidden"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
            />

            <span className="relative z-10 flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 10, -10, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <Ticket className="w-5 h-5" />
              </motion.div>
              RESERVE NOW
              <Sparkles className="w-4 h-4" />
            </span>

            <motion.div
              className="absolute -top-1 -right-1 bg-gold text-grey-900 text-xs font-bold px-2 py-1 rounded-full"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              73% SOLD
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
