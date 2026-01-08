import { motion } from 'framer-motion';
import { Heart, Mail, Phone, Instagram, Youtube, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-grey-800 border-t border-crimson/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-crimson fill-crimson" />
              <div>
                <p className="text-white text-lg font-display">For The Stars</p>
                <p className="text-crimson text-sm italic">By Jacob</p>
              </div>
            </div>
            <p className="text-grey-300 text-sm leading-relaxed mb-6">
              For The Stars Fashion and Entertainment LLC - FZ
            </p>
            <p className="text-grey-400 text-xs">
              Hollywood's Premier Fashion House bringing glamour to Dubai
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <h3 className="text-crimson text-sm uppercase tracking-wider mb-6 font-headline">
              Contact
            </h3>
            <div className="space-y-4">
              <a
                href="mailto:operations@forthestarsfashion.com"
                className="flex items-center gap-3 text-grey-300 hover:text-crimson transition-colors group"
                data-cursor="hover"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">operations@forthestarsfashion.com</span>
              </a>
              <a
                href="tel:+971506528691"
                className="flex items-center gap-3 text-grey-300 hover:text-crimson transition-colors group"
                data-cursor="hover"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+971 50 652 8691</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-crimson text-sm uppercase tracking-wider mb-6 font-headline">
              Follow Us
            </h3>
            <div className="flex gap-4">
              {[Instagram, Youtube, Facebook].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full border border-crimson/30 flex items-center justify-center text-grey-300 hover:text-crimson hover:border-crimson hover:bg-crimson/10 transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor="hover"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <div className="mt-8">
              <p className="text-grey-400 text-xs uppercase tracking-wider mb-2">
                Event Venue
              </p>
              <p className="text-grey-300 text-sm">Armani Hotel, Dubai</p>
              <p className="text-crimson text-sm font-semibold">
                13 February 2026
              </p>
            </div>
          </motion.div>
        </div>

        <div className="section-divider mt-12 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-grey-400 text-xs">
            &copy; 2026 For The Stars Fashion and Entertainment LLC - FZ. All
            rights reserved.
          </p>
          <p className="text-grey-500 text-xs">
            Fashions for Love 2026 - Hollywood Meets Dubai
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
    </footer>
  );
}
