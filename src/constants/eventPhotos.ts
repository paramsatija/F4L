/** Base path under `public/` — spaces encoded when building URLs */
const BASE = '/event photos/Front Shots Sequence Feb 19 2026';

export type EventPhotoFolder = 'FRONT SHOTS SEQ' | 'WALL SHOTS' | 'STAGE SHOTS SEQ';

export function eventPhotoUrl(folder: EventPhotoFolder, index: number): string {
  return encodeURI(`${BASE}/${folder}/${index}.JPG`);
}

/** Counts must match files in each folder (1.JPG … n.JPG) */
export const EVENT_PHOTO_COUNTS: Record<EventPhotoFolder, number> = {
  'FRONT SHOTS SEQ': 96,
  'WALL SHOTS': 28,
  'STAGE SHOTS SEQ': 77,
};

export function buildEventPhotoList(folder: EventPhotoFolder): { src: string; alt: string }[] {
  const n = EVENT_PHOTO_COUNTS[folder];
  return Array.from({ length: n }, (_, i) => ({
    src: eventPhotoUrl(folder, i + 1),
    alt: `Fashions for Love — ${folder.replace(/ SEQ/g, '')} ${i + 1}`,
  }));
}
