import { motion } from 'framer-motion';

interface CountdownTimerProps {
  variant?: 'large' | 'small';
  className?: string;
}

/** The event has taken place. Both variants now show a "Part II — Coming Soon" badge. */
export function CountdownTimer({ variant = 'large', className = '' }: CountdownTimerProps) {
  if (variant === 'small') {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <motion.span
          className="text-crimson font-headline text-sm uppercase tracking-widest"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          Part II — Coming Soon
        </motion.span>
      </div>
    );
  }

  const tiles = [
    { label: 'Part', value: 'II' },
    { label: 'Status', value: '✦' },
    { label: 'Edition', value: 'Next' },
    { label: 'Date', value: 'TBA' },
  ];

  return (
    <div className={`flex flex-nowrap justify-center gap-2 md:gap-4 ${className}`}>
      {tiles.map((tile, index) => (
        <div key={tile.label} className="flex items-center gap-2 md:gap-3">
          <motion.div
            className="relative flex-shrink-0"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative bg-gradient-to-br from-grey-900/60 to-black/80 rounded-lg md:rounded-xl p-3 md:p-5 lg:p-6 min-w-[60px] md:min-w-[90px] lg:min-w-[110px] overflow-hidden border border-gold/20 shadow-[0_0_30px_rgba(212,165,116,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-gold/20" />
              <div className="relative text-center">
                <motion.span
                  animate={tile.value === '✦' ? { opacity: [0.4, 1, 0.4], scale: [1, 1.15, 1] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="block font-headline text-2xl md:text-4xl lg:text-5xl text-gold font-black"
                  style={{
                    textShadow: '0 0 40px rgba(212, 165, 116, 0.8)',
                    filter: 'brightness(1.3)',
                  }}
                >
                  {tile.value}
                </motion.span>
              </div>
            </div>
            <p className="text-center mt-2 text-champagne/80 text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] font-sans font-semibold">
              {tile.label}
            </p>
          </motion.div>

          {index < tiles.length - 1 && (
            <motion.div
              className="flex flex-col gap-1 md:gap-2 -mt-6 md:-mt-8 flex-shrink-0"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gold shadow-[0_0_10px_rgba(212,165,116,0.5)]" />
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-champagne shadow-[0_0_10px_rgba(245,222,179,0.5)]" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
