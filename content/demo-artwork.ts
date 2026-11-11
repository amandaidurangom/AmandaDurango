type DemoArtwork = {
  file: string;
  alt: string;
  label?: string;
};

const moon = {
  file: 'moon-island',
  alt: 'A red-leaf tree and floating crystal island against a pink moon.',
};
const character = {
  file: 'character',
  alt: 'Fantasy character design illustration.',
};
const comic = {
  file: 'comic',
  alt: 'Three fantasy comic panels following a cloaked adventurer through a thorn forest.',
  label: 'AI demo image',
};
const ruins = {
  file: 'ruins',
  alt: 'A ruined fortress and winding staircase in a forest at twilight.',
  label: 'AI demo image',
};

export const demoArtwork: Readonly<Partial<Record<string, DemoArtwork>>> = {
  'hall-artist-portrait': { ...character, label: 'Demo character' },
  'hall-placeholder-01': moon,
  'hall-placeholder-02': character,
  'hall-placeholder-03': comic,
  'specialty-art-placeholder': character,
  'specialty-story-placeholder': comic,
  'specialty-concept-placeholder': ruins,
  'portfolio-featured-placeholder': ruins,
  'portfolio-secondary-a': comic,
  'portfolio-secondary-b': character,
  'project-detail-hero': ruins,
};
