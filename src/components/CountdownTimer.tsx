import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { EVENT_DATE } from '../constants/placeholders';

interface TimeUnit {
  value: number;
  label: string;
}

function calculateTimeLeft(): TimeUnit[] {
  const difference = EVENT_DATE.getTime() - new Date().getTime();

  if (difference <= 0) {
    return [
      { value: 0, label: 'Days' },
      { value: 0, label: 'Hours' },
      { value: 0, label: 'Minutes' },
      { value: 0, label: 'Seconds' },
    ];
  }

  return [
    { value: Math.floor(difference / (1000 * 60 * 60 * 24)), label: 'Days' },
    { value: Math.floor((difference / (1000 * 60 * 60)) % 24), label: 'Hours' },
    { value: Math.floor((difference / 1000 / 60) % 60), label: 'Minutes' },
    { value: Math.floor((difference / 1000) % 60), label: 'Seconds' },
  ];
}

interface CountdownTimerProps {
  variant?: 'large' | 'small';
  className?: string;
}

export function CountdownTimer({ variant = 'large', className = '' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeUnit[]>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (variant === 'small') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {timeLeft.map((unit, index) => (
          <div key={unit.label} className="flex items-center gap-3">
            <div className="text-center">
              <span className="text-crimson font-headline text-2xl countdown-digit">
                {String(unit.value).padStart(2, '0')}
              </span>
              <span className="text-grey-500 text-xs uppercase tracking-wider ml-1">
                {unit.label.charAt(0)}
              </span>
            </div>
            {index < timeLeft.length - 1 && (
              <span className="text-grey-300 text-lg">:</span>
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-nowrap justify-center gap-2 md:gap-4 ${className}`}>
      {timeLeft.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-2 md:gap-3">
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
                  key={unit.value}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="block font-headline text-3xl md:text-5xl lg:text-6xl text-gold countdown-digit font-black"
                  style={{
                    textShadow: '0 0 40px rgba(212, 165, 116, 0.8), 0 0 80px rgba(212, 165, 116, 0.5), 0 0 120px rgba(212, 165, 116, 0.3)',
                    filter: 'brightness(1.3)',
                  }}
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.span>
              </div>
            </div>

            <p className="text-center mt-2 text-champagne/80 text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] font-sans font-semibold">
              {unit.label}
            </p>
          </motion.div>

          {index < timeLeft.length - 1 && (
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
