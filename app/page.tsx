import React from 'react';
import { INTRO_CONTENT } from '@/content/site-data';
import { OrnateFrame } from '@/components/OrnateFrame';
import { ArtworkPlaceholder } from '@/components/ArtworkPlaceholder';
import { RPGCommandButton } from '@/components/RPGCommandButton';

export default function IntroHybridPage() {
  return (
    <div className="flex flex-col gap-6">
      <OrnateFrame
        as="section"
        ariaLabel="Intro Hybrid landing showcase"
        variant="hero"
        showCenterCrest
        innerClassName="flex flex-col gap-6 p-4 sm:p-7 lg:p-10"
      >
        {/* Top Artist Identity Banner */}
        <div className="flex flex-col items-center justify-between gap-2 border-b border-[#b9945c]/20 pb-4 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="relative hidden h-8 w-8 items-center justify-center border border-[#b9945c]/25 bg-[#181410] text-xs text-[#dfc088] sm:flex"
            >
              <span className="pointer-events-none absolute -top-px -left-px h-2 w-2 border-t border-l border-[#dfc088]" />
              <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-r border-b border-[#dfc088]" />
              ✦
            </span>
            <div>
              <p className="font-display text-sm font-semibold tracking-[0.16em] text-[#f7ead4] uppercase sm:text-base">
                {INTRO_CONTENT.artistName}
              </p>
              <p className="text-xs tracking-[0.14em] text-[#dfd0b8] uppercase">
                {INTRO_CONTENT.tagline}
              </p>
            </div>
          </div>
        </div>

        {/* Dominant Hero Illustration Placeholder */}
        <div className="w-full">
          <ArtworkPlaceholder asset={INTRO_CONTENT.heroPlaceholder} />
        </div>

        {/* Ornamental Center Divider */}
        <div
          aria-hidden="true"
          className="flex items-center justify-center gap-4 py-1"
        >
          <div className="h-px flex-1 max-w-[240px] bg-gradient-to-r from-transparent via-[#b9945c]/35 to-[#b9945c]/70" />
          <span className="text-xs text-[#dfc088]/85">◆</span>
          <div className="h-px flex-1 max-w-[240px] bg-gradient-to-l from-transparent via-[#b9945c]/35 to-[#b9945c]/70" />
        </div>

        {/* Editorial & RPG Title Block */}
        <div className="flex flex-col items-center gap-3 text-center">
          <h1 className="font-display text-2xl font-semibold tracking-[0.12em] text-[#f7ead4] uppercase sm:text-4xl lg:text-5xl [text-wrap:balance]">
            {INTRO_CONTENT.headline}
          </h1>

          <div className="flex w-full max-w-xl items-center justify-center gap-3">
            <span
              aria-hidden="true"
              className="hidden h-px flex-1 bg-[#b9945c]/25 sm:block"
            />
            <p className="font-display text-xs tracking-[0.28em] text-[#e6c687] uppercase sm:text-sm">
              {INTRO_CONTENT.subheadline}
            </p>
            <span
              aria-hidden="true"
              className="hidden h-px flex-1 bg-[#b9945c]/25 sm:block"
            />
          </div>

          <p className="font-editorial max-w-2xl text-lg text-[#f7ead4] sm:text-2xl [text-wrap:balance]">
            {INTRO_CONTENT.tagline}
          </p>
        </div>

        {/* Primary Dual Navigation Actions: START PLAYING (/hall) & QUICK BROWSE (/portfolio) */}
        <div
          role="group"
          aria-label="Primary portfolio entry paths"
          className="mt-2 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center sm:gap-6"
        >
          {INTRO_CONTENT.primaryActions.map((action) => (
            <RPGCommandButton
              key={action.id}
              label={action.label}
              href={action.href}
              variant={action.variant}
              ariaLabel={`${action.label} — ${action.sublabel}`}
              className="w-full sm:w-auto sm:min-w-[240px]"
            />
          ))}
        </div>
      </OrnateFrame>
    </div>
  );
}
