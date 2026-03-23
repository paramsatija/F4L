import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ArrowRight, Check } from 'lucide-react';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';
import { SectionDecorations } from './SectionDecorations';

export function PartTwoNotify() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    /* Opens their email client pre-filled — swap this for Supabase / Mailchimp when ready */
    window.location.href = `mailto:reservations@forthestarsfashion.com?subject=Part II Waitlist&body=Please add me to the Fashions for Love Part II waitlist.%0A%0AEmail: ${encodeURIComponent(email)}`;
    setSubmitted(true);
  }

  return (
    <section
      id="tickets"
      className="relative overflow-hidden bg-black py-24 md:py-32"
    >
      <SectionDecorations variant="dark" />
      <FloatingValentineHearts count={20} variant="red" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-crimson/8 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-gold/6 blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-crimson" />
          <Heart className="h-5 w-5 fill-crimson text-crimson" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-crimson" />
        </motion.div>

        {/* Headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-3 text-sm uppercase tracking-[0.45em] text-white/50"
        >
          Fashions for Love
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="font-display text-headline-xl mb-6 font-bold uppercase leading-none text-white"
        >
          <span className="bg-gradient-to-r from-crimson via-crimson-light to-crimson bg-clip-text text-transparent">
            Part II
          </span>{' '}
          is coming.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mx-auto mb-12 max-w-xl text-lg leading-relaxed text-white/65"
        >
          Date, venue, and performers to be announced. Leave your email and
          you'll be the first to know — before anyone else.
        </motion.p>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-crimson/15 ring-1 ring-crimson/40">
                  <Check className="h-7 w-7 text-crimson" />
                </div>
                <p className="text-base text-white/80">
                  You're on the list.{' '}
                  <span className="text-crimson font-medium">
                    We'll be in touch.
                  </span>
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-3 sm:flex-row sm:gap-0"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full flex-1 border border-white/15 bg-white/5 px-6 py-4 text-sm text-white placeholder-white/30 outline-none backdrop-blur-sm transition-colors focus:border-crimson/60 sm:rounded-l-none sm:border-r-0"
                  style={{ borderRadius: '4px 0 0 4px' }}
                />
                <motion.button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 bg-crimson px-8 py-4 text-sm font-headline tracking-widest text-white transition-colors hover:bg-crimson-light sm:w-auto"
                  style={{ borderRadius: '0 4px 4px 0' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                >
                  NOTIFY ME
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

          {!submitted && (
            <p className="mt-4 text-xs text-white/30 tracking-wide">
              No spam. Unsubscribe any time.
            </p>
          )}
        </motion.div>

        {/* Divider */}
        <div className="mx-auto mt-16 h-px max-w-xs bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Social proof line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 text-xs uppercase tracking-[0.35em] text-white/30"
        >
          Part I — Sold Out · 600+ Guests · Armani Hotel, Dubai
        </motion.p>
      </div>
    </section>
  );
}
