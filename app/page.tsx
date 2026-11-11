import React from 'react';
import { INTRO_CONTENT } from '@/content/site-data';
import { OrnateFrame } from '@/components/OrnateFrame';
import { RPGCommandButton } from '@/components/RPGCommandButton';

export default function IntroHybridPage() {
  return (
    <div className="flex flex-col gap-6">
      <OrnateFrame
        as="section"
        ariaLabel="Intro Hybrid landing showcase"
        variant="hero"
        className="intro-frame"
        showCenterCrest
        innerClassName="flex flex-col gap-4 p-5 sm:p-7"
      >
        <div className="intro-art" aria-hidden="true" />

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
              className="rpg-plaque w-full sm:w-auto sm:min-w-[240px]"
            />
          ))}
        </div>
      </OrnateFrame>
    </div>
  );
}
