import React from 'react';
import type { Metadata } from 'next';
import {
  ARTIST_PROFILE,
  HALL_CAROUSEL_SLIDES,
  HALL_COMMANDS,
} from '@/content/site-data';
import { SectionHeading } from '@/components/SectionHeading';
import { OrnateFrame } from '@/components/OrnateFrame';
import { CharacterPortrait } from '@/components/CharacterPortrait';
import { CharacterStatus } from '@/components/CharacterStatus';
import { ArtworkCarousel } from '@/components/ArtworkCarousel';
import { RPGCommandButton } from '@/components/RPGCommandButton';
import { DialogueBox } from '@/components/DialogueBox';

export const metadata: Metadata = {
  title: 'Playing Hall · Amanda Durango — Hybrid Fantasy RPG Portfolio',
  description:
    'Main interactive RPG hub featuring Amanda Durango’s character sheet, dominant artwork carousel, command menu, and character welcome dialogue.',
};

export default function PlayingHallPage() {
  return (
    <OrnateFrame variant="hero" className="hall-outer-frame" innerClassName="flex flex-col gap-5 p-4 sm:p-6 lg:p-8">
      <SectionHeading ornate title="Playing Hall" className="hall-heading relative" />

      {/* Main 3-Column RPG Hub Grid on Desktop; Artwork-first priority on Mobile */}
      <div className="grid grid-cols-1 items-start gap-5 lg:grid-cols-[minmax(185px,1fr)_minmax(0,3.2fr)_minmax(195px,1fr)] lg:gap-6">
        {/* Column 1 (Left on Desktop, 2nd on Mobile): Character Sheet */}
        <OrnateFrame
          as="aside"
          ariaLabel="Artist RPG Character Sheet"
          variant="panel"
          className="order-3 lg:order-1"
          innerClassName="flex h-full flex-col justify-between gap-4 p-4 sm:p-5"
        >
          <CharacterPortrait
            name={ARTIST_PROFILE.name}
            subtitle={ARTIST_PROFILE.subtitle}
            portrait={ARTIST_PROFILE.portrait}
          />

          <CharacterStatus
            hp={ARTIST_PROFILE.meters.hp}
            mp={ARTIST_PROFILE.meters.mp}
            specs={ARTIST_PROFILE.specs}
          />
        </OrnateFrame>

        {/* Column 2 (Center Dominant on Desktop, 1st on Mobile): Featured Artwork Carousel */}
        <div className="order-1 lg:order-2">
          <ArtworkCarousel slides={HALL_CAROUSEL_SLIDES} />
        </div>

        {/* Column 3 (Right on Desktop, 3rd on Mobile): Four Main RPG Commands */}
        <OrnateFrame
          as="nav"
          ariaLabel="Playing Hall RPG commands"
          variant="panel"
          className="order-2 lg:order-3"
          innerClassName="flex flex-col gap-3 p-4 sm:p-5"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {HALL_COMMANDS.map((cmd) => (
              <RPGCommandButton
                key={cmd.id}
                label={cmd.label}
                sublabel={cmd.sublabel}
                href={cmd.href}
                icon={cmd.icon}
                variant="command"
              />
            ))}
          </div>
        </OrnateFrame>

        {/* Bottom Row (Full Width): Character Welcome Dialogue */}
        <div className="order-4 lg:col-span-3">
          <DialogueBox
            speaker={ARTIST_PROFILE.welcomeDialogue.speaker}
            quote={ARTIST_PROFILE.welcomeDialogue.quote}
          />
        </div>
      </div>
    </OrnateFrame>
  );
}
