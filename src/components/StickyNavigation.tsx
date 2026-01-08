import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'The Vision', href: '#vision' },
  { label: 'The Visionary', href: '#designer' },
  { label: 'The Stars', href: '#performers' },
  { label: 'The Show', href: '#runway' },
  { label: 'Tickets', href: '#tickets' },
];

export function StickyNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <motion.a
            href="#"
            className="flex items-center gap-3 group"
            whileHover={{ scale: 1.02 }}
            data-cursor="hover"
          >
            <Heart className="w-8 h-8 text-crimson fill-crimson" />
            <div className="hidden sm:block">
              <p className={`text-sm font-display font-semibold transition-colors ${
                isScrolled ? 'text-grey-900' : 'text-grey-900'
              }`}>
                For The Stars
              </p>
              <p className="text-xs text-crimson italic">by Jacob Meir</p>
            </div>
          </motion.a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-sans tracking-wide transition-colors relative group text-grey-600 hover:text-grey-900"
                whileHover={{ y: -2 }}
                data-cursor="hover"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-crimson group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              onClick={() => scrollToSection('#tickets')}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-crimson text-white text-sm font-headline tracking-wider rounded-full hover:bg-crimson-dark transition-colors shadow-crimson"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              data-cursor="hover"
            >
              Reserve Your Seat
            </motion.button>

            <motion.button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(true)}
              whileTap={{ scale: 0.95 }}
              data-cursor="hover"
            >
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-grey-900' : 'text-grey-900'}`} />
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-grey-900/90 backdrop-blur-md"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <Heart className="w-8 h-8 text-crimson fill-crimson" />
                    <div>
                      <p className="text-sm font-display font-semibold text-grey-900">
                        For The Stars
                      </p>
                      <p className="text-xs text-crimson italic">by Jacob Meir</p>
                    </div>
                  </div>
                  <motion.button
                    onClick={() => setIsMobileMenuOpen(false)}
                    whileTap={{ scale: 0.95 }}
                    data-cursor="hover"
                  >
                    <X className="w-6 h-6 text-grey-900" />
                  </motion.button>
                </div>

                <div className="space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.label}
                      onClick={() => scrollToSection(link.href)}
                      className="block w-full text-left px-4 py-3 text-lg font-display text-grey-800 hover:text-crimson hover:bg-crimson/5 rounded-lg transition-colors"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      data-cursor="hover"
                    >
                      {link.label}
                    </motion.button>
                  ))}
                </div>

                <motion.button
                  onClick={() => scrollToSection('#tickets')}
                  className="mt-8 w-full py-4 bg-crimson text-white font-headline text-lg tracking-wider rounded-full hover:bg-crimson-dark transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  data-cursor="hover"
                >
                  Reserve Your Seat
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
