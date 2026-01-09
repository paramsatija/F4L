import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, TrendingUp, AlertCircle, Zap, Clock } from 'lucide-react';

const ACTIVITY_MESSAGES = [
  { name: 'Sarah from Dubai', action: 'booked 2 Platinum tickets', time: '2 minutes ago' },
  { name: 'James from London', action: 'reserved Gold package', time: '5 minutes ago' },
  { name: 'Layla from Abu Dhabi', action: 'purchased Silver tickets', time: '8 minutes ago' },
  { name: 'Omar from Riyadh', action: 'booked Platinum experience', time: '12 minutes ago' },
];

export function UrgencyIndicators() {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [viewerCount, setViewerCount] = useState(0);

  useEffect(() => {
    setViewerCount(Math.floor(Math.random() * 15) + 8);
    const interval = setInterval(() => {
      setViewerCount(Math.floor(Math.random() * 15) + 8);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % ACTIVITY_MESSAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-2 glass-dark px-4 py-3 rounded-lg border border-vibrant-red/30"
      >
        <motion.div
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Eye className="w-5 h-5 text-vibrant-red" />
        </motion.div>
        <div className="flex-1">
          <p className="text-white text-sm">
            <motion.span
              key={viewerCount}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-bold text-vibrant-red"
            >
              {viewerCount}
            </motion.span>
            {' '}people viewing tickets now
          </p>
        </div>
        <motion.div
          className="w-2 h-2 rounded-full bg-vibrant-red"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.div>

      <div className="relative h-16 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center gap-3 glass-dark px-4 py-3 rounded-lg border border-white/10"
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-vibrant-red/20 flex items-center justify-center flex-shrink-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              <TrendingUp className="w-5 h-5 text-gold" />
            </motion.div>
            <div className="flex-1 min-w-0">
              <p className="text-white text-sm font-medium truncate">
                {ACTIVITY_MESSAGES[currentMessage].name}
              </p>
              <p className="text-white/60 text-xs truncate">
                {ACTIVITY_MESSAGES[currentMessage].action}
              </p>
            </div>
            <p className="text-white/40 text-xs flex-shrink-0">
              {ACTIVITY_MESSAGES[currentMessage].time}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-dark px-4 py-3 rounded-lg border border-amber-500/30 bg-amber-500/5"
      >
        <div className="flex items-start gap-3">
          <motion.div
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
          >
            <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
          </motion.div>
          <div className="flex-1">
            <p className="text-amber-400 text-sm font-semibold mb-1">
              Price Increase Warning
            </p>
            <p className="text-white/70 text-xs leading-relaxed">
              Ticket prices increase by 25% on January 20th. Lock in current pricing now.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass-dark px-4 py-3 rounded-lg border border-vibrant-red/30"
      >
        <div className="flex items-center gap-3">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <Zap className="w-5 h-5 text-vibrant-red flex-shrink-0" />
          </motion.div>
          <div className="flex-1">
            <p className="text-white text-sm font-semibold">
              Fast Selling Event
            </p>
            <p className="text-white/60 text-xs">
              Previous editions sold out in 72 hours
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
