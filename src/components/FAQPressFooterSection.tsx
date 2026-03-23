import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown, Heart, Mail, Phone, Instagram, Youtube, Facebook } from 'lucide-react';
import { PRESS_QUOTES } from '../constants/placeholders';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';
import { SectionDecorations } from './SectionDecorations';

const faqs = [
  {
    question: 'Will there be a Fashions for Love Part II?',
    answer: 'Yes — Part II is in motion. Date and venue to be announced. Join the waitlist at reservations@forthestarsfashion.com to get priority access.',
  },
  {
    question: 'What happened at Part I?',
    answer: 'Part I took place on February 19, 2026 at Armani Hotel, Burj Khalifa, Dubai. 600+ VIP guests, 80+ international models, live performances by 25Band and Deborah Cox, and a full Jacob Meir couture runway show.',
  },
  {
    question: 'How can I get press credentials or media coverage?',
    answer: 'Email us at reservations@forthestarsfashion.com with your publication details. We work with international press for all future editions.',
  },
  {
    question: 'Can I purchase or view the Part I collection?',
    answer: 'The museum collection pieces from Part I are available for private acquisition. Contact us directly to arrange a viewing.',
  },
  {
    question: 'How do I stay updated on Part II?',
    answer: 'Follow us on social media and join our email list. Part II details — date, venue, performers — will be announced exclusively to waitlist members first.',
  },
];

const pressLogos = ['Vogue', 'Harper\'s Bazaar', 'WWD', 'Elle', 'Forbes', 'LaPalme Magazine'];

export function FAQPressFooterSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative bg-black overflow-hidden">
      <SectionDecorations variant="dark" />
      <FloatingValentineHearts count={20} variant="red" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 font-sans">
            Questions
          </p>
          <h2 className="font-display text-display-md text-white mb-4 uppercase font-bold">
            Questions About Part II
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-gold to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 mb-16 max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.4 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
              >
                <div className={`glass-dark p-4 rounded-lg transition-all duration-300 ${
                  openIndex === index ? 'shadow-medium border-l-4 border-crimson' : 'hover:shadow-soft'
                }`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <Heart className={`w-4 h-4 flex-shrink-0 transition-colors ${
                        openIndex === index ? 'text-crimson fill-crimson' : 'text-white/40'
                      }`} />
                      <h3 className="text-white font-semibold text-sm">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className={`w-4 h-4 flex-shrink-0 transition-colors ${
                        openIndex === index ? 'text-crimson' : 'text-white/40'
                      }`} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/70 text-sm leading-relaxed mt-3 pl-7">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="text-center mb-4"
        >
          <p className="text-white/70 text-sm mb-2">
            Press inquiries, Part II waitlist, or collection acquisitions:
          </p>
          <a
            href="mailto:reservations@forthestarsfashion.com"
            className="text-crimson hover:underline transition-colors font-medium text-sm"
          >
            reservations@forthestarsfashion.com
          </a>
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-grey-300 to-transparent my-12" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-center mb-8"
        >
          <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 font-sans">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {pressLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.05, duration: 0.3 }}
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <span className="font-display text-lg italic tracking-wide">
                  {logo}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-grey-300 to-transparent my-12" />

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-6 h-6 text-crimson fill-crimson" />
              <div>
                <p className="text-white text-base font-display">For The Stars</p>
                <p className="text-crimson text-xs italic">By Jacob</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-3">
              For The Stars Fashion and Entertainment LLC - FZ
            </p>
            <p className="text-white/50 text-xs">
              Hollywood's Premier Fashion House — Part I, Dubai 2026. Part II coming soon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.4 }}
          >
            <h3 className="text-crimson text-sm uppercase tracking-wider mb-4 font-headline">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:reservations@forthestarsfashion.com"
                className="flex items-center gap-2 text-white/70 hover:text-crimson transition-colors group"
              >
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">reservations@forthestarsfashion.com</span>
              </a>
              <a
                href="tel:+971506528691"
                className="flex items-center gap-2 text-white/70 hover:text-crimson transition-colors group"
              >
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="text-sm">+971 50 652 8691</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.4 }}
          >
            <h3 className="text-crimson text-sm uppercase tracking-wider mb-4 font-headline">
              Follow Us
            </h3>
            <div className="flex gap-3 mb-6">
              {[Instagram, Youtube, Facebook].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-full border border-crimson/30 flex items-center justify-center text-white/60 hover:text-crimson hover:border-crimson hover:bg-crimson/10 transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div>
              <p className="text-white/50 text-xs uppercase tracking-wider mb-1">
                Event Venue
              </p>
              <p className="text-white/80 text-sm">Armani Hotel, Dubai</p>
              <p className="text-crimson text-sm font-semibold">
                Part I — 19 February 2026
              </p>
            </div>
          </motion.div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-grey-300 to-transparent my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-white/50 text-xs">
            &copy; 2026 For The Stars Fashion and Entertainment LLC - FZ. All rights reserved.
          </p>
          <p className="text-white/60 text-xs">
            Fashions for Love — Part I, Dubai 2026 · Part II Coming Soon
          </p>
        </div>
      </div>
    </section>
  );
}
