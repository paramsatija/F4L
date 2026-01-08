import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Ticket, ArrowRight } from 'lucide-react';

export function CTASection() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section className="relative py-32 overflow-hidden bg-beige-light">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-beige-light to-white" />

      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(207, 15, 15, 0.05) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]">
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background:
                'radial-gradient(circle, rgba(212, 165, 116, 0.08) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.5, 0.3, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-8"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-20 h-20 rounded-full bg-crimson-gradient flex items-center justify-center mx-auto shadow-crimson">
              <Ticket className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          <h2 className="font-display text-display-lg text-grey-900 mb-6">
            Be Part of the{' '}
            <span className="text-crimson-shimmer">Glamour</span>
          </h2>

          <p className="text-grey-600 text-lg mb-4 max-w-2xl mx-auto">
            One night. One legacy of fashion and love.
          </p>
          <p className="text-crimson text-xl font-headline font-bold mb-12 tracking-wide">
            HOLLYWOOD COMES TO DUBAI!
          </p>

          <motion.button
            ref={buttonRef}
            className="relative group px-12 py-5 rounded-full overflow-hidden"
            onMouseMove={handleMouseMove}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            data-cursor="hover"
            style={
              {
                '--x': `${mousePosition.x}%`,
                '--y': `${mousePosition.y}%`,
              } as React.CSSProperties
            }
          >
            <div className="absolute inset-0 bg-crimson-gradient" />
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at var(--x) var(--y), rgba(255,255,255,0.2) 0%, transparent 50%)`,
              }}
            />
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  '0 4px 20px rgba(207, 15, 15, 0.3)',
                  '0 8px 40px rgba(207, 15, 15, 0.4)',
                  '0 4px 20px rgba(207, 15, 15, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="relative flex items-center gap-3 text-white font-headline font-bold text-lg uppercase tracking-wider">
              Book Your Seat
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>

          <motion.p
            className="mt-8 text-grey-500 text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            Limited seats available for this exclusive event
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
