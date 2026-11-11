import React from 'react';
import { OrnateFrame } from './OrnateFrame';
import { PlaceholderAsset } from '@/content/types';
import { ArtworkPlaceholder } from './ArtworkPlaceholder';

export interface CharacterPortraitProps {
  name: string;
  subtitle: string;
  portrait: PlaceholderAsset;
}

export function CharacterPortrait({
  name,
  subtitle,
  portrait,
}: CharacterPortraitProps) {
  return (
    <div className="flex flex-col items-center gap-3">
      {/* Portrait Slot */}
      <OrnateFrame variant="portrait" showCenterCrest className="w-full max-w-[155px]" innerClassName="p-1 sm:p-1">
        <ArtworkPlaceholder
          asset={portrait}
          className="aspect-[4/5]"
        />
      </OrnateFrame>

      {/* Character Name Plaque with Corner Brackets & Fine Line */}
      <div className="relative w-full border border-[#b9945c]/22 bg-[#16130f]/85 px-3 py-2.5 text-center">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-px -left-px h-2 w-2 border-t border-l border-[#c8a368]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-px -right-px h-2 w-2 border-t border-r border-[#c8a368]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-px -left-px h-2 w-2 border-b border-l border-[#c8a368]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-r border-b border-[#c8a368]"
        />

        <h2 className="font-display text-base font-semibold tracking-[0.12em] text-[#f7ead4] uppercase sm:text-lg">
          {name}
        </h2>
        <p className="mt-0.5 text-xs text-[#dfd0b8]">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
