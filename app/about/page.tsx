import React from 'react';
import type { Metadata } from 'next';
import { ARTIST_PROFILE } from '@/content/site-data';
import { SectionHeading } from '@/components/SectionHeading';
import { RPGPanel } from '@/components/RPGPanel';
import { ArtworkPlaceholder } from '@/components/ArtworkPlaceholder';
import { RPGCommandButton } from '@/components/RPGCommandButton';

export const metadata: Metadata = {
  title: 'About · Amanda Durango',
  description:
    'Character profile and specializations of Amanda Durango.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeading ornate title="About" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(260px,1fr)_2fr]">
        <RPGPanel variant="subtle"
          panelTitle={ARTIST_PROFILE.name}
          panelSubtitle={ARTIST_PROFILE.subtitle}
        >
          <ArtworkPlaceholder asset={ARTIST_PROFILE.portrait} />
        </RPGPanel>

        <RPGPanel variant="subtle" panelTitle="Character Profile">
          <div className="flex flex-col gap-4">
            <div className="border-b border-[#b9945c]/20 pb-4">
              <h3 className="font-display text-xs font-semibold tracking-[0.14em] text-[#e6c687] uppercase">
                Specializations
              </h3>
              <ul className="mt-2.5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-[#f7ead4]">
                {ARTIST_PROFILE.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-[10px] text-[#dfc088]/80">
                      ◇
                    </span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-2 flex flex-wrap items-center justify-end gap-4 pt-2">
              <RPGCommandButton
                label="CONTACT"
                href="/contact"
                variant="primary"
              />
            </div>
          </div>
        </RPGPanel>
      </div>
    </div>
  );
}
