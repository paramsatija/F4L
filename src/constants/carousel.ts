/** Scroll speed as % of runway-matched baseline (50 = half speed → 2× loop duration) */
export const CAROUSEL_SPEED_PCT = 50;

export function carouselDurationMultiplier(): number {
  return 100 / CAROUSEL_SPEED_PCT;
}
