import {
  ArtistProfile,
  HallCommand,
  HallSlide,
  NavigationItem,
  PlaceholderAsset,
  SpecialtyPreview,
} from './types';

export const GLOBAL_NAVIGATION: NavigationItem[] = [
  {
    id: 'intro',
    label: 'Intro Hybrid',
    shortLabel: 'Intro',
    href: '/',
  },
  {
    id: 'hall',
    label: 'Playing Hall',
    shortLabel: 'Playing Hall',
    href: '/hall',
  },
  {
    id: 'work-types',
    label: 'Select Your Type of Work',
    shortLabel: 'Work Types',
    href: '/work-types',
  },
  {
    id: 'portfolio',
    label: 'The Art Portfolio',
    shortLabel: 'The Art Portfolio',
    href: '/portfolio',
  },
  {
    id: 'about',
    label: 'About',
    shortLabel: 'About',
    href: '/about',
  },
  {
    id: 'contact',
    label: 'Contact',
    shortLabel: 'Contact',
    href: '/contact',
  },
];

export const INTRO_CONTENT = {
  artistName: 'Amanda Durango',
  headerRole: 'Concept Artist · Illustrator',
  headline: 'HYBRID FANTASY RPG',
  subheadline: 'Illustration Portfolio',
  tagline: 'Concept Art, Comics, Illustration and Design',
  heroPlaceholder: {
    id: 'intro-hero-illustration',
    label: 'ILLUSTRATION PLACEHOLDER',
    dimensionsText: '1280 × 540',
    aspectRatioClass: 'aspect-[16/9] sm:aspect-[21/9] lg:aspect-[1280/540]',
    aspectRatioPreset: 'hero',
  } satisfies PlaceholderAsset,
  primaryActions: [
    {
      id: 'start-playing',
      label: 'START PLAYING',
      sublabel: 'Enter Playing Hall',
      href: '/hall',
      variant: 'primary' as const,
    },
    {
      id: 'quick-browse',
      label: 'QUICK BROWSE',
      sublabel: 'Open The Art Portfolio',
      href: '/portfolio',
      variant: 'secondary' as const,
    },
  ],
};

export const ARTIST_PROFILE: ArtistProfile = {
  name: 'Amanda Durango',
  subtitle: 'Concept Art, Comics, Illustration and Design',
  roleHeaderLabel: 'Concept Artist · Illustrator',
  portrait: {
    id: 'hall-artist-portrait',
    label: 'PORTRAIT PLACEHOLDER',
    dimensionsText: '4 : 5',
    aspectRatioClass: 'aspect-[4/5]',
    aspectRatioPreset: 'portrait',
  },
  meters: {
    hp: {
      label: 'HP',
      current: 100,
      max: 100,
      percentage: 85,
    },
    mp: {
      label: 'MP',
      current: 50,
      max: 50,
      percentage: 65,
    },
  },
  specs: [
    'Concept Art',
    'Comic',
    'Animation',
    'Product Design',
    'Character Design',
  ],
  welcomeDialogue: {
    speaker: 'Amanda Durango',
    quote:
      '“Welcome to the Playing Hall. Choose an option to begin your journey, explore my work, or browse by specialty.”',
  },
};

export const HALL_CAROUSEL_SLIDES: HallSlide[] = [
  {
    id: 'hall-slide-01',
    orderLabel: '01 / 03',
    title: 'Concept Art & Worldbuilding',
    categoryTag: 'Concept Art',
    summary: 'Environment, worldbuilding, and key scene illustration.',
    asset: {
      id: 'hall-placeholder-01',
      label: 'ARTWORK PLACEHOLDER 1 OF 3',
      dimensionsText: '1200 × 675',
      aspectRatioClass: 'aspect-[16/9]',
      aspectRatioPreset: 'landscape',
    },
  },
  {
    id: 'hall-slide-02',
    orderLabel: '02 / 03',
    title: 'Character Design & Sheets',
    categoryTag: 'Character Design',
    summary: 'Character design sheets, silhouettes, and visual development.',
    asset: {
      id: 'hall-placeholder-02',
      label: 'ARTWORK PLACEHOLDER 2 OF 3',
      dimensionsText: '1200 × 675',
      aspectRatioClass: 'aspect-[16/9]',
      aspectRatioPreset: 'landscape',
    },
  },
  {
    id: 'hall-slide-03',
    orderLabel: '03 / 03',
    title: 'Comics & Sequential Art',
    categoryTag: 'Comic',
    summary: 'Sequential pages, visual storytelling, and narrative composition.',
    asset: {
      id: 'hall-placeholder-03',
      label: 'ARTWORK PLACEHOLDER 3 OF 3',
      dimensionsText: '1200 × 675',
      aspectRatioClass: 'aspect-[16/9]',
      aspectRatioPreset: 'landscape',
    },
  },
];

export const HALL_COMMANDS: HallCommand[] = [
  {
    id: 'cmd-explore-work',
    label: 'EXPLORE WORK',
    sublabel: 'The Art Portfolio',
    href: '/portfolio',
    icon: 'compass',
  },
  {
    id: 'cmd-select-class',
    label: 'SELECT CLASS',
    sublabel: 'Select Your Type of Work',
    href: '/work-types',
    icon: 'shield',
  },
  {
    id: 'cmd-character-profile',
    label: 'CHARACTER PROFILE',
    sublabel: 'About',
    href: '/about',
    icon: 'scroll',
  },
  {
    id: 'cmd-start-quest',
    label: 'START QUEST',
    sublabel: 'Contact',
    href: '/contact',
    icon: 'swords',
  },
];

export const WORK_TYPES_PREVIEW: SpecialtyPreview[] = [
  {
    id: 'art',
    title: 'THE ART',
    subtitle: 'Illustration & Character Art',
    description:
      'Creation of characters, illustration, and final artwork with a narrative focus.',
    ctaLabel: 'SEE MORE ART',
    href: '/portfolio?specialty=art',
    attributes: [
      { name: 'Character Design', level: 4 },
      { name: 'Illustration', level: 4 },
      { name: 'World Building', level: 3 },
    ],
    placeholder: {
      id: 'specialty-art-placeholder',
      label: 'IMAGE PLACEHOLDER',
      dimensionsText: '16 : 10',
      aspectRatioClass: 'aspect-[16/10]',
      aspectRatioPreset: 'card',
    },
  },
  {
    id: 'story',
    title: 'THE STORY',
    subtitle: 'Comics & Sequential Art',
    description:
      'Visual narrative, comics, and storyboards that bring a world and its stories to life.',
    ctaLabel: 'SEE MORE STORIES',
    href: '/portfolio?specialty=story',
    attributes: [
      { name: 'Narrative', level: 4 },
      { name: 'Sequential', level: 4 },
      { name: 'Storyboard', level: 3 },
    ],
    placeholder: {
      id: 'specialty-story-placeholder',
      label: 'IMAGE PLACEHOLDER',
      dimensionsText: '16 : 10',
      aspectRatioClass: 'aspect-[16/10]',
      aspectRatioPreset: 'card',
    },
  },
  {
    id: 'concept',
    title: 'THE CONCEPT',
    subtitle: 'Design & Art Direction',
    description:
      'Art direction, design, and visual development of resources for creative projects.',
    ctaLabel: 'SEE MORE CONCEPT',
    href: '/portfolio?specialty=concept',
    attributes: [
      { name: 'Art Direction', level: 4 },
      { name: 'Visual Design', level: 4 },
      { name: 'Production', level: 3 },
    ],
    placeholder: {
      id: 'specialty-concept-placeholder',
      label: 'IMAGE PLACEHOLDER',
      dimensionsText: '16 : 10',
      aspectRatioClass: 'aspect-[16/10]',
      aspectRatioPreset: 'card',
    },
  },
];
