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
  const [isOnHero, setIsOnHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroHeight = window.innerHeight;

      setIsScrolled(scrollPosition > 100);
      setIsOnHero(scrollPosition < heroHeight * 0.8);
    };

    handleScroll();
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
          isScrolled ? 'bg-black/95 backdrop-blur-md shadow-xl py-3' : 'bg-black py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Decorative Hearts */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Heart className="absolute top-3 left-[15%] w-5 h-5 text-crimson fill-crimson opacity-20" />
          <Heart className="absolute top-4 right-[25%] w-4 h-4 text-crimson fill-crimson opacity-15" />
          <Heart className="absolute top-2 left-[60%] w-3 h-3 text-crimson fill-crimson opacity-10" />
          <Heart className="absolute bottom-3 right-[15%] w-5 h-5 text-crimson fill-crimson opacity-20" />
          <Heart className="absolute bottom-2 left-[35%] w-4 h-4 text-crimson fill-crimson opacity-15" />
        </div>

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-10">
          <motion.a
            href="#"
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            data-cursor="hover"
          >
            <span className="font-headline text-3xl tracking-wider transition-colors duration-500 text-white">
              FFL
            </span>
            <Heart className="w-7 h-7 text-crimson fill-crimson" />
          </motion.a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-sans tracking-wide transition-colors duration-500 relative group text-white/80 hover:text-white"
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
              <Menu className="w-6 h-6 transition-colors duration-500 text-white" />
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
                  <div className="flex items-center gap-2">
                    <span className="font-headline text-3xl tracking-wider text-grey-900">FFL</span>
                    <Heart className="w-7 h-7 text-crimson fill-crimson" />
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
