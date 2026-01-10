/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'vibrant-red': '#ce0000',
        'dark-red': '#ab0d0d',
        'near-black': '#141414',
        'subtle-gray': '#f7f7f7',
        crimson: {
          DEFAULT: '#CF0F0F',
          light: '#FF1744',
          dark: '#A8324E',
          muted: '#B8475F',
        },
        grey: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E8E8E8',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#6B6B6B',
          600: '#525252',
          700: '#3D3D3D',
          800: '#2D2D2D',
          900: '#1A1A1A',
        },
        gold: {
          DEFAULT: '#D4A574',
          champagne: '#C9A87C',
        },
        cream: {
          DEFAULT: '#FAF8F3',
          light: '#FEFDFB',
          dark: '#F5F1E8',
        },
        champagne: {
          DEFAULT: '#FFF9ED',
          light: '#FFFCF5',
          dark: '#F7EFE2',
        },
        stark: '#FFFFFF',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        headline: ['Cinzel', 'Cormorant Garamond', 'Georgia', 'serif'],
        playfair: ['Playfair Display', 'Georgia', 'serif'],
      },
      fontSize: {
        'display-2xl': ['clamp(8rem, 18vw, 18rem)', { lineHeight: '0.8', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(5rem, 14vw, 14rem)', { lineHeight: '0.8', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '0.8', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '0.9', letterSpacing: '-0.01em' }],
        'headline-xl': ['clamp(2.5rem, 6vw, 5rem)', { lineHeight: '0.9', letterSpacing: '-0.02em' }],
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'breath': 'breath 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'neon-pulse': 'neonPulse 1.5s ease-in-out infinite',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'liquid-reveal': 'liquidReveal 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'flip': 'flip 0.6s ease-in-out',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'drift-up': 'driftUp 15s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(224, 17, 95, 0.4), 0 0 40px rgba(224, 17, 95, 0.2)' },
          '50%': { boxShadow: '0 0 30px rgba(224, 17, 95, 0.6), 0 0 60px rgba(224, 17, 95, 0.3)' },
        },
        breath: {
          '0%, 100%': { transform: 'scale(1) translateY(0)' },
          '50%': { transform: 'scale(1.02) translateY(-5px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(1deg)' },
        },
        neonPulse: {
          '0%, 100%': {
            textShadow: '0 0 10px rgba(224, 17, 95, 0.8), 0 0 20px rgba(224, 17, 95, 0.5), 0 0 30px rgba(224, 17, 95, 0.3)',
          },
          '50%': {
            textShadow: '0 0 15px rgba(224, 17, 95, 1), 0 0 30px rgba(224, 17, 95, 0.7), 0 0 45px rgba(224, 17, 95, 0.5)',
          },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        liquidReveal: {
          '0%': { clipPath: 'inset(0 100% 0 0)', opacity: '0' },
          '100%': { clipPath: 'inset(0 0% 0 0)', opacity: '1' },
        },
        flip: {
          '0%': { transform: 'rotateX(0deg)' },
          '50%': { transform: 'rotateX(90deg)' },
          '100%': { transform: 'rotateX(0deg)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        driftUp: {
          '0%': { transform: 'translateY(100vh) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-100vh) rotate(360deg)', opacity: '0' },
        },
      },
      backgroundImage: {
        'crimson-gradient': 'linear-gradient(135deg, #CF0F0F 0%, #FF1744 50%, #CF0F0F 100%)',
        'dark-red-gradient': 'linear-gradient(180deg, #ab0d0d 0%, #141414 100%)',
        'red-black-gradient': 'linear-gradient(135deg, #ab0d0d 0%, #141414 100%)',
        'spotlight': 'radial-gradient(circle at center bottom, rgba(206, 0, 0, 0.3) 0%, transparent 70%)',
        'grey-gradient': 'linear-gradient(180deg, #F5F5F5 0%, #E8E8E8 100%)',
        'shimmer': 'linear-gradient(90deg, transparent 0%, rgba(207, 15, 15, 0.1) 50%, transparent 100%)',
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'large': '0 8px 32px rgba(0, 0, 0, 0.16)',
        'crimson': '0 4px 16px rgba(207, 15, 15, 0.2)',
        'crimson-intense': '0 8px 32px rgba(207, 15, 15, 0.3)',
      },
      backdropBlur: {
        'glass': '20px',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
