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
    <div className={`flex flex-wrap justify-center gap-4 md:gap-6 ${className}`}>
      {timeLeft.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-4 md:gap-6">
          <motion.div
            className="relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="relative bg-grey-900 rounded-xl p-4 md:p-6 min-w-[80px] md:min-w-[120px] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
              <div className="absolute inset-x-0 top-1/2 h-px bg-grey-800" />

              <div className="relative text-center">
                <motion.span
                  key={unit.value}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="block font-headline text-4xl md:text-6xl lg:text-7xl text-white countdown-digit text-shadow-glow"
                >
                  {String(unit.value).padStart(2, '0')}
                </motion.span>
              </div>
            </div>

            <p className="text-center mt-3 text-grey-400 text-xs md:text-sm uppercase tracking-[0.2em] font-sans">
              {unit.label}
            </p>
          </motion.div>

          {index < timeLeft.length - 1 && (
            <motion.div
              className="hidden md:flex flex-col gap-2 -mt-8"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <div className="w-2 h-2 rounded-full bg-crimson" />
              <div className="w-2 h-2 rounded-full bg-crimson" />
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
