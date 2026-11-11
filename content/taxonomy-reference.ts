import { TaxonomyFamily } from './types';

export const TAXONOMY_FAMILIES: TaxonomyFamily[] = [
  {
    id: 'character-design',
    familyName: 'Character Design',
    accentCode: '#9a4f78',
    entries: [
      'Fantasy',
      'Children’s Book',
      'Comic',
      'Indie',
      'Character Sheets',
    ],
  },
  {
    id: 'concept-art',
    familyName: 'Concept Art',
    accentCode: '#1e7868',
    entries: [
      'Backgrounds',
      'Worldbuilding',
      'Children’s Book',
      'Comic',
      'Indie',
      'Character Design',
      'Guide Book',
    ],
  },
  {
    id: 'product-design',
    familyName: 'Product Design',
    accentCode: '#8a6421',
    entries: [
      'P.O.D.',
      'Clothing',
      'Posters and Covers',
      'Board Games',
    ],
  },
  {
    id: 'comic-sequential-art',
    familyName: 'Comic / Sequential Art',
    accentCode: '#9b3b48',
    entries: [
      'Manga',
      'North American Comic',
      'Indie',
      'Comic Strips',
      'Webcomic',
      'Motion Comic',
      'Children’s Art',
    ],
  },
  {
    id: 'animation-audiovisual',
    familyName: 'Animation / Audiovisual',
    accentCode: '#2a6282',
    entries: [
      'Motion Graphics',
      'Motion Comic',
      'Assets for Animation',
      'Guide Book',
    ],
  },
  {
    id: 'manual-art',
    familyName: 'Manual Art',
    accentCode: '#6c4d8c',
    entries: [
      'Children’s',
      'Game',
      'Watercolor',
      'Ink',
      'Painting',
    ],
  },
];
