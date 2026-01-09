import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, CheckCircle, AlertCircle, Sparkles } from 'lucide-react';

interface EmailWaitlistProps {
  variant?: 'inline' | 'modal';
  title?: string;
  description?: string;
}

export function EmailWaitlist({
  variant = 'inline',
  title = 'Join the Waitlist',
  description = 'Be the first to know about exclusive updates and early access.'
}: EmailWaitlistProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setMessage('You\'re on the list! Check your email for exclusive updates.');
        setEmail('');
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Failed to join waitlist');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const content = (
    <div className={variant === 'inline' ? 'glass-dark p-8 rounded-2xl border border-vibrant-red/30' : ''}>
      <div className="text-center mb-6">
        <motion.div
          className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-vibrant-red/30 to-crimson/20 mb-4"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Mail className="w-7 h-7 text-vibrant-red" />
        </motion.div>
        <h3 className="font-headline text-2xl text-white mb-2 tracking-wide">
          {title}
        </h3>
        <p className="text-white/60 text-sm">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={status === 'loading' || status === 'success'}
            className="w-full px-5 py-4 bg-grey-900/60 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-vibrant-red/50 focus:ring-2 focus:ring-vibrant-red/20 transition-all disabled:opacity-50"
          />
          <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
        </div>

        <motion.button
          type="submit"
          disabled={status === 'loading' || status === 'success'}
          className="w-full bg-gradient-to-r from-vibrant-red via-crimson to-vibrant-red text-white py-4 rounded-xl font-headline tracking-wider shadow-[0_10px_40px_rgba(220,38,38,0.4)] hover:shadow-[0_15px_50px_rgba(220,38,38,0.6)] transition-all disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
          whileHover={status === 'idle' ? { scale: 1.02, y: -2 } : {}}
          whileTap={status === 'idle' ? { scale: 0.98 } : {}}
        >
          {status === 'loading' && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          )}
          <span className="relative z-10 flex items-center justify-center gap-2">
            {status === 'loading' ? 'Joining...' : status === 'success' ? 'Joined!' : 'Join Waitlist'}
            {status === 'idle' && <Sparkles className="w-4 h-4" />}
          </span>
        </motion.button>
      </form>

      <AnimatePresence mode="wait">
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 flex items-center gap-2 text-green-400 text-sm bg-green-400/10 px-4 py-3 rounded-lg border border-green-400/20"
          >
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <p>{message}</p>
          </motion.div>
        )}

        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 flex items-center gap-2 text-red-400 text-sm bg-red-400/10 px-4 py-3 rounded-lg border border-red-400/20"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>{message}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <p className="text-white/40 text-xs text-center mt-4">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </div>
  );

  return content;
}
