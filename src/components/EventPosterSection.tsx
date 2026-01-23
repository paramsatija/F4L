import { Calendar, MapPin, Clock } from 'lucide-react';
import { CountdownTimer } from './CountdownTimer';
import { FloatingValentineHearts } from './particles/FloatingValentineHearts';
import { SectionDecorations } from './SectionDecorations';

export function EventPosterSection() {
  return (
    <section className="relative bg-black py-16 lg:py-24 overflow-hidden">
      {/* Red Hearts & Decorative Elements */}
      <SectionDecorations variant="dark" />
      <FloatingValentineHearts />

      {/* Decorative border lines */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-champagne to-transparent" />
      </div>

      {/* Champagne & Gold Background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-champagne/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-1/4 w-[900px] h-[900px] bg-gold/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gold-champagne/6 rounded-full blur-3xl" />
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* LEFT - Event Poster */}
          <div className="relative">
            {/* Decorative frame corners - Gold & Champagne */}
            <div className="absolute -inset-4 opacity-50">
              {/* Top left */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-gold rounded-tl-2xl" />
              {/* Top right */}
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-champagne rounded-tr-2xl" />
              {/* Bottom left */}
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-champagne rounded-bl-2xl" />
              {/* Bottom right */}
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-gold rounded-br-2xl" />
            </div>

            {/* Poster image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/20">
              <img
                src="/posters/Screenshot 2026-01-23 at 00.05.38.png"
                alt="Fashions for Love 2026 Event Poster"
                className="w-full h-auto"
                loading="eager"
                decoding="async"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* RIGHT - Event Details + Countdown */}
          <div className="space-y-8">
            {/* Section Title */}
            <div className="text-center lg:text-left">
              <p className="text-gold text-sm tracking-[0.4em] uppercase mb-3 font-sans font-semibold">
                Mark Your Calendar
              </p>
              <h2 className="font-headline text-4xl lg:text-5xl text-white mb-4 uppercase font-bold"
                style={{
                  textShadow: '0 4px 20px rgba(212, 165, 116, 0.4)',
                }}
              >
                The Event Begins In
              </h2>
            </div>

            {/* Countdown Timer */}
            <div className="relative">
              <div className="relative bg-gradient-to-br from-black/95 via-grey-900/40 to-black/95 backdrop-blur-xl rounded-2xl border-2 border-gold/40 p-6 lg:p-8 shadow-[0_0_60px_rgba(212,165,116,0.3)]">
                <CountdownTimer variant="large" />
              </div>
            </div>

            {/* Event Details Cards - Gold & Champagne Theme */}
            <div className="grid grid-cols-1 gap-4">
              {/* Date */}
              <div className="relative bg-black/80 backdrop-blur-sm border border-gold/40 rounded-xl p-4 lg:p-5 flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gold/30 to-gold-champagne/20 rounded-full flex items-center justify-center border-2 border-gold/50">
                  <Calendar className="w-6 h-6 lg:w-7 lg:h-7 text-gold" />
                </div>
                <div>
                  <p className="text-champagne/70 text-xs lg:text-sm font-medium mb-1 uppercase tracking-wider">Date</p>
                  <p className="text-white text-base lg:text-lg font-headline font-bold tracking-wide">
                    Valentine's Eve - February 13, 2026
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="relative bg-black/80 backdrop-blur-sm border border-champagne/40 rounded-xl p-4 lg:p-5 flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-champagne/30 to-gold/20 rounded-full flex items-center justify-center border-2 border-champagne/50">
                  <MapPin className="w-6 h-6 lg:w-7 lg:h-7 text-champagne" />
                </div>
                <div>
                  <p className="text-gold/70 text-xs lg:text-sm font-medium mb-1 uppercase tracking-wider">Venue</p>
                  <p className="text-white text-base lg:text-lg font-headline font-bold tracking-wide">
                    Armani Hotel, Burj Khalifa, Dubai
                  </p>
                </div>
              </div>

              {/* Time */}
              <div className="relative bg-black/80 backdrop-blur-sm border border-gold/40 rounded-xl p-4 lg:p-5 flex items-center gap-4">
                <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-gold/30 to-champagne/20 rounded-full flex items-center justify-center border-2 border-gold/50">
                  <Clock className="w-6 h-6 lg:w-7 lg:h-7 text-gold" />
                </div>
                <div>
                  <p className="text-champagne/70 text-xs lg:text-sm font-medium mb-1 uppercase tracking-wider">Time</p>
                  <p className="text-white text-base lg:text-lg font-headline font-bold tracking-wide">
                    7:00 PM - 2:00 AM
                  </p>
                </div>
              </div>
            </div>

            {/* Call to action */}
            <div className="text-center lg:text-left">
              <a href="#tickets" className="inline-block">
                <button className="bg-gradient-to-r from-gold via-gold-champagne to-gold text-grey-900 font-headline font-bold text-base lg:text-lg px-8 lg:px-12 py-4 lg:py-5 rounded-xl shadow-2xl tracking-widest">
                  SECURE YOUR TICKETS
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
