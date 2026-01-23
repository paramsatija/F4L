import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ChevronDown, Heart } from 'lucide-react';

const faqs = [
  {
    question: 'What is the dress code?',
    answer: 'Black tie with a touch of red or crimson. Think Hollywood glamour meets Valentine\'s romance. Gentlemen: tuxedos or dark formal suits. Ladies: floor-length gowns, cocktail dresses, or fashion-forward couture.',
  },
  {
    question: 'Where exactly is the venue?',
    answer: 'Armani Hotel Dubai, located inside the Burj Khalifa tower. The event takes place in the hotel\'s grand ballroom and connecting spaces.',
  },
  {
    question: 'Is parking available?',
    answer: 'Valet parking is available at Armani Hotel Dubai entrance. Complimentary for Platinum ticket holders.',
  },
  {
    question: 'Can I bring a plus one?',
    answer: 'Each ticket is for one guest. We offer couples packages at a 10% discount.',
  },
  {
    question: 'What time should I arrive?',
    answer: 'Doors open at 6:30 PM. We recommend arriving by 7:00 PM to enjoy the full red carpet experience.',
  },
  {
    question: 'Is there a photography policy?',
    answer: 'Personal photography is welcome! Professional event photographers will capture the evening.',
  },
  {
    question: 'Are refunds available?',
    answer: 'Tickets are non-refundable but fully transferable.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section ref={containerRef} className="relative py-32 bg-white overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-grey-500 text-sm tracking-[0.4em] uppercase mb-4 font-sans">
            Questions
          </p>
          <h2 className="font-display text-display-lg text-grey-900 mb-6">
            Everything You Need to Know
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-crimson to-transparent mx-auto" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left"
                data-cursor="hover"
              >
                <div className={`glass-light p-6 rounded-xl transition-all duration-300 ${
                  openIndex === index ? 'shadow-medium border-l-4 border-crimson' : 'hover:shadow-soft'
                }`}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <Heart className={`w-5 h-5 flex-shrink-0 transition-colors ${
                        openIndex === index ? 'text-crimson fill-crimson' : 'text-grey-400'
                      }`} />
                      <h3 className="text-grey-900 font-semibold text-base md:text-lg">
                        {faq.question}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-colors ${
                        openIndex === index ? 'text-crimson' : 'text-grey-400'
                      }`} />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-grey-600 text-sm md:text-base leading-relaxed mt-4 pl-9">
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
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-grey-600 text-sm mb-4">
            Still have questions?
          </p>
          <a
            href="mailto:reservations@forthestarsfashion.com"
            className="text-crimson hover:text-crimson-dark transition-colors font-medium"
            data-cursor="hover"
          >
            reservations@forthestarsfashion.com
          </a>
        </motion.div>
      </div>
    </section>
  );
}
