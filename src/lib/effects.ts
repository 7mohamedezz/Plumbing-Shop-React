// Master switches for the decorative plumbing effects.
// Set any flag to false to switch that effect off; its CSS/markup becomes inert.
export const EFFECTS = {
  loader: true,
  cards: true,
  fittingsRail: true,
  pressureGauges: true,
};

export const LOADER_SESSION_KEY = "ab-showroom-loader";

// TODO: placeholder showroom figures — replace with the real numbers.
// `max` only controls how far the gauge needle sweeps.
export const SHOWROOM_STATS = [
  { value: 15, suffix: "+", label: "سنوات خبرة", max: 30 },
  { value: 1200, suffix: "+", label: "منتج متوفر", max: 1500 },
  { value: 50, suffix: "", label: "علامات تجارية", max: 100 },
  { value: 1000, suffix: "+", label: "عميل سعيد", max: 10000 },
  { value: 50, suffix: "+", label: "سباك", max: 99 },
];
