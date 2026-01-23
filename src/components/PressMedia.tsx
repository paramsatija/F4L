import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { PRESS_QUOTES } from '../constants/placeholders';

const pressLogos = ['Vogue', 'Harper\'s Bazaar', 'WWD', 'Elle', 'Forbes', 'LaPalme Magazine', 'Milan Weekly'];

export function PressMedia() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative py-32 bg-beige-light overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-grey-500 text-sm tracking-[0.4em] uppercase mb-4 font-sans">
            In The Spotlight
          </p>
          <h2 className="font-playfair text-display-lg text-grey-900 mb-6">
            As Featured In
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-wrap justify-center items-center gap-12 mb-20"
        >
          {pressLogos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
              className="text-grey-400 hover:text-grey-900 transition-colors duration-300"
            >
              <span className="font-display text-xl md:text-2xl italic tracking-wide">
                {logo}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {PRESS_QUOTES.map((quote, index) => (
            <motion.div
              key={quote.source}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
              className="glass p-8 rounded-xl"
            >
              <FileText className="w-8 h-8 text-crimson mb-6" />

              <p className="text-grey-700 text-base leading-relaxed mb-6 italic">
                "{quote.quote}"
              </p>

              <div className="flex items-center justify-between">
                <p className="text-grey-900 font-semibold text-sm">
                  — {quote.source}
                </p>
                {quote.rating && (
                  <span className="text-gold text-xs font-sans uppercase tracking-wider">
                    {quote.rating}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center space-y-6"
        >
          <div>
            <p className="text-grey-600 text-sm mb-2">
              For press credentials and media inquiries:
            </p>
            <a
              href="mailto:reservations@forthestarsfashion.com"
              className="text-crimson hover:text-crimson-dark transition-colors font-medium text-lg"
              data-cursor="hover"
            >
              reservations@forthestarsfashion.com
            </a>
          </div>

          <button className="inline-flex items-center gap-2 bg-grey-900 text-white px-8 py-4 rounded-xl font-headline text-sm tracking-wider hover:bg-grey-800 transition-colors">
            <Download className="w-4 h-4" />
            DOWNLOAD PRESS KIT
          </button>
        </motion.div>
      </div>
    </section>
  );
}
