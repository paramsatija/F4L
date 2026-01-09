import { motion } from 'framer-motion';
import { Shield, Lock, RefreshCw, CreditCard, Clock, CheckCircle } from 'lucide-react';

const TRUST_SIGNALS = [
  {
    icon: Shield,
    title: '100% Secure',
    description: 'SSL encrypted checkout',
  },
  {
    icon: RefreshCw,
    title: 'Easy Transfers',
    description: 'Transfer tickets anytime',
  },
  {
    icon: Clock,
    title: '48hr Refund',
    description: 'Full refund guarantee',
  },
];

const PAYMENT_METHODS = [
  'Visa',
  'Mastercard',
  'Amex',
  'Apple Pay',
  'PayPal',
];

export function TrustBadges() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-3 gap-4">
        {TRUST_SIGNALS.map((signal, index) => {
          const Icon = signal.icon;
          return (
            <motion.div
              key={signal.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center p-4 rounded-lg bg-grey-900/40 border border-white/10"
            >
              <motion.div
                className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/10 flex items-center justify-center mb-2"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Icon className="w-5 h-5 text-green-400" />
              </motion.div>
              <p className="text-white text-xs font-semibold mb-1">
                {signal.title}
              </p>
              <p className="text-white/50 text-xs">
                {signal.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Lock className="w-4 h-4 text-white/50" />
          <p className="text-white/60 text-sm">Payment methods accepted:</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {PAYMENT_METHODS.map((method, index) => (
            <motion.div
              key={method}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="px-4 py-2 bg-grey-900/60 border border-white/10 rounded-lg"
            >
              <p className="text-white/70 text-xs font-medium">{method}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-start gap-3 p-4 bg-green-400/5 border border-green-400/20 rounded-lg"
      >
        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-green-400 text-sm font-semibold mb-1">
            Money-Back Guarantee
          </p>
          <p className="text-white/60 text-xs leading-relaxed">
            Not satisfied? Full refund within 48 hours of purchase, no questions asked.
            Customer satisfaction is our priority.
          </p>
        </div>
      </motion.div>

      <div className="text-center">
        <p className="text-white/40 text-xs">
          Questions? Contact our support team 24/7 at{' '}
          <span className="text-vibrant-red">support@fashionsforlove.com</span>
        </p>
      </div>
    </div>
  );
}
