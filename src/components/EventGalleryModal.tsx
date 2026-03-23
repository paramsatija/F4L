import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { buildEventPhotoList } from '../constants/eventPhotos';

type TabKey = 'front' | 'wall' | 'stage';

const TABS: {
  key: TabKey;
  label: string;
  accentText: string;
  accentBorder: string;
  accentBg: string;
  dotColor: string;
}[] = [
  {
    key: 'front',
    label: 'On the Runway',
    accentText: 'text-crimson',
    accentBorder: 'border-crimson',
    accentBg: 'bg-crimson',
    dotColor: '#CF0F0F',
  },
  {
    key: 'wall',
    label: 'The Wall',
    accentText: 'text-gold',
    accentBorder: 'border-gold',
    accentBg: 'bg-gold',
    dotColor: '#D4A574',
  },
  {
    key: 'stage',
    label: 'The Show',
    accentText: 'text-cyan-300',
    accentBorder: 'border-cyan-400',
    accentBg: 'bg-cyan-400',
    dotColor: '#67E8F9',
  },
];

const LISTS: Record<TabKey, { src: string; alt: string }[]> = {
  front: buildEventPhotoList('FRONT SHOTS SEQ'),
  wall: buildEventPhotoList('WALL SHOTS'),
  stage: buildEventPhotoList('STAGE SHOTS SEQ'),
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function EventGalleryModal({ isOpen, onClose }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>('front');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeImages = LISTS[activeTab];
  const activeTabMeta = TABS.find((t) => t.key === activeTab)!;

  /* ── body scroll lock ── */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* ── keyboard navigation ── */
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        if (lightboxIndex !== null) {
          setLightboxIndex(null);
        } else {
          onClose();
        }
      }
      if (lightboxIndex !== null) {
        if (e.key === 'ArrowRight' && lightboxIndex < activeImages.length - 1) {
          setLightboxIndex((i) => (i !== null ? i + 1 : null));
        }
        if (e.key === 'ArrowLeft' && lightboxIndex > 0) {
          setLightboxIndex((i) => (i !== null ? i - 1 : null));
        }
      }
    },
    [isOpen, lightboxIndex, activeImages.length, onClose],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [handleKey]);

  /* ── switch tab (also closes lightbox) ── */
  function switchTab(key: TabKey) {
    setActiveTab(key);
    setLightboxIndex(null);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="gallery-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[150] flex flex-col bg-black/97 backdrop-blur-xl"
        >
          {/* ── Header ── */}
          <div className="flex flex-none items-center justify-between border-b border-white/10 px-6 py-4">
            <div>
              <p className="mb-0.5 text-xs uppercase tracking-widest text-white/40">
                Part I — Dubai 2026
              </p>
              <h2 className="font-display text-xl font-bold uppercase text-white md:text-2xl">
                The Night in Motion
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close gallery"
              className="p-2 text-white/50 transition-colors hover:text-white"
            >
              <X className="h-7 w-7" />
            </button>
          </div>

          {/* ── Tabs ── */}
          <div className="flex flex-none border-b border-white/10">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => switchTab(tab.key)}
                  className={`flex items-center gap-2 border-b-2 px-4 py-3 text-xs uppercase tracking-widest transition-all duration-200 md:px-6 md:text-sm ${
                    isActive
                      ? `${tab.accentText} ${tab.accentBorder} font-semibold`
                      : 'border-transparent text-white/40 hover:text-white/70'
                  }`}
                >
                  {/* colored dot */}
                  <span
                    className="hidden h-2 w-2 rounded-full sm:block"
                    style={{ backgroundColor: isActive ? tab.dotColor : 'transparent', border: `1px solid ${tab.dotColor}` }}
                  />
                  {tab.label}
                  <span className="ml-1 text-xs opacity-50">({LISTS[tab.key].length})</span>
                </button>
              );
            })}
          </div>

          {/* ── Masonry grid ── */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className="columns-2 gap-3 md:columns-3 lg:columns-4 md:gap-4"
              >
                {activeImages.map((image, index) => (
                  <div
                    key={image.src}
                    className="group mb-3 cursor-pointer break-inside-avoid overflow-hidden rounded-lg md:mb-4"
                    onClick={() => setLightboxIndex(index)}
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                        loading="lazy"
                        decoding="async"
                      />
                      {/* hover tint */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/30 group-hover:opacity-100">
                        <div
                          className={`flex h-8 w-8 items-center justify-center rounded-full ${activeTabMeta.accentBg} text-white shadow-large`}
                        >
                          <ChevronRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── Lightbox ── */}
          <AnimatePresence>
            {lightboxIndex !== null && (
              <motion.div
                key="lightbox"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="fixed inset-0 z-[160] flex items-center justify-center bg-black/98"
                onClick={() => setLightboxIndex(null)}
              >
                {/* Close */}
                <button
                  aria-label="Close photo"
                  onClick={() => setLightboxIndex(null)}
                  className="absolute right-5 top-5 z-10 p-2 text-white/60 transition-colors hover:text-white"
                >
                  <X className="h-8 w-8" />
                </button>

                {/* Prev */}
                {lightboxIndex > 0 && (
                  <button
                    aria-label="Previous photo"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex((i) => (i !== null ? i - 1 : null));
                    }}
                    className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
                  >
                    <ChevronLeft className="h-8 w-8" />
                  </button>
                )}

                {/* Next */}
                {lightboxIndex < activeImages.length - 1 && (
                  <button
                    aria-label="Next photo"
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex((i) => (i !== null ? i + 1 : null));
                    }}
                    className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white/70 backdrop-blur-sm transition-all hover:bg-white/20 hover:text-white"
                  >
                    <ChevronRight className="h-8 w-8" />
                  </button>
                )}

                {/* Image */}
                <motion.img
                  key={activeImages[lightboxIndex].src}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  src={activeImages[lightboxIndex].src}
                  alt={activeImages[lightboxIndex].alt}
                  className="max-h-[88vh] max-w-[88vw] rounded-xl object-contain shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />

                {/* Counter */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                  <span
                    className={`rounded-full px-4 py-1.5 text-xs uppercase tracking-widest text-white/70 backdrop-blur-sm`}
                    style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                  >
                    <span className={activeTabMeta.accentText}>{lightboxIndex + 1}</span>
                    {' / '}
                    {activeImages.length}
                    {' — '}
                    {activeTabMeta.label}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
