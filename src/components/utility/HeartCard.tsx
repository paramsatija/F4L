import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { ReactNode } from 'react';

interface HeartCardProps {
  children: ReactNode;
  backgroundColor?: string;
  textColor?: string;
  size?: 'small' | 'medium' | 'large';
  delay?: number;
  className?: string;
  glowColor?: string;
}

export function HeartCard({
  children,
  backgroundColor = '#CF0F0F',
  textColor = 'white',
  size = 'medium',
  delay = 0,
  className = '',
  glowColor = 'rgba(207, 15, 15, 0.3)',
}: HeartCardProps) {
  const sizeClasses = {
    small: 'w-32 h-32',
    medium: 'w-48 h-48',
    large: 'w-64 h-64',
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6, type: 'spring' }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`relative ${sizeClasses[size]} ${className}`}
    >
      <div
        className="absolute inset-0 blur-xl"
        style={{
          background: glowColor,
          opacity: 0.6,
        }}
      />

      <svg
        viewBox="0 0 100 100"
        className="w-full h-full drop-shadow-2xl"
        style={{ filter: 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))' }}
      >
        <defs>
          <clipPath id={`heart-clip-${delay}`}>
            <path d="M50,90 C50,90 10,60 10,40 C10,25 20,15 30,15 C40,15 50,25 50,25 C50,25 60,15 70,15 C80,15 90,25 90,40 C90,60 50,90 50,90 Z" />
          </clipPath>
        </defs>

        <path
          d="M50,90 C50,90 10,60 10,40 C10,25 20,15 30,15 C40,15 50,25 50,25 C50,25 60,15 70,15 C80,15 90,25 90,40 C90,60 50,90 50,90 Z"
          fill={backgroundColor}
          stroke={backgroundColor}
          strokeWidth="0.5"
        />
      </svg>

      <div
        className="absolute inset-0 flex items-center justify-center text-center px-6"
        style={{
          clipPath: `url(#heart-clip-${delay})`,
          color: textColor,
        }}
      >
        <div className="flex flex-col items-center justify-center w-full h-full">
          {children}
        </div>
      </div>
    </motion.div>
  );
}

interface StatHeartCardProps {
  value: string;
  label: string;
  delay?: number;
  backgroundColor?: string;
  textColor?: string;
}

export function StatHeartCard({
  value,
  label,
  delay = 0,
  backgroundColor = '#CF0F0F',
  textColor = 'white',
}: StatHeartCardProps) {
  return (
    <HeartCard
      backgroundColor={backgroundColor}
      textColor={textColor}
      size="medium"
      delay={delay}
      glowColor={backgroundColor === '#CF0F0F' ? 'rgba(207, 15, 15, 0.4)' : 'rgba(212, 165, 116, 0.4)'}
    >
      <div className="flex flex-col items-center justify-center">
        <p className="font-headline text-4xl md:text-5xl font-bold mb-2">{value}</p>
        <p className="text-xs md:text-sm uppercase tracking-wider font-sans opacity-90 leading-tight">
          {label}
        </p>
      </div>
    </HeartCard>
  );
}

interface TextHeartCardProps {
  text: string;
  delay?: number;
  backgroundColor?: string;
  textColor?: string;
}

export function TextHeartCard({
  text,
  delay = 0,
  backgroundColor = '#CF0F0F',
  textColor = 'white',
}: TextHeartCardProps) {
  return (
    <HeartCard
      backgroundColor={backgroundColor}
      textColor={textColor}
      size="medium"
      delay={delay}
      glowColor={backgroundColor === '#CF0F0F' ? 'rgba(207, 15, 15, 0.4)' : 'rgba(212, 165, 116, 0.4)'}
    >
      <p className="font-headline text-2xl md:text-3xl font-bold uppercase text-center px-4 leading-tight">
        {text}
      </p>
    </HeartCard>
  );
}

interface PersonHeartCardProps {
  name: string;
  title: string;
  image?: string;
  delay?: number;
  backgroundColor?: string;
  textColor?: string;
  size?: 'small' | 'medium' | 'large';
}

export function PersonHeartCard({
  name,
  title,
  image,
  delay = 0,
  backgroundColor = '#CF0F0F',
  textColor = 'white',
  size = 'large',
}: PersonHeartCardProps) {
  return (
    <HeartCard
      backgroundColor={backgroundColor}
      textColor={textColor}
      size={size}
      delay={delay}
      glowColor={backgroundColor === '#CF0F0F' ? 'rgba(207, 15, 15, 0.4)' : 'rgba(212, 165, 116, 0.4)'}
    >
      <div className="flex flex-col items-center justify-center h-full">
        {image && (
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mb-3 border-2 border-white/30">
            <img src={image} alt={name} className="w-full h-full object-cover" />
          </div>
        )}
        <p className="font-headline text-lg md:text-xl font-bold mb-1 text-center px-4">
          {name}
        </p>
        <p className="text-xs md:text-sm uppercase tracking-wider font-sans opacity-90 text-center px-4">
          {title}
        </p>
      </div>
    </HeartCard>
  );
}
