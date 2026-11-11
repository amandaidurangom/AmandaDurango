import React from 'react';
import type { Metadata } from 'next';
import { TAXONOMY_FAMILIES } from '@/content/taxonomy-reference';
import { SectionHeading } from '@/components/SectionHeading';
import { RPGPanel } from '@/components/RPGPanel';
import { ArtworkPlaceholder } from '@/components/ArtworkPlaceholder';

export const metadata: Metadata = {
  title: 'The Art Portfolio · Amanda Durango',
  description:
    'The Art Portfolio of Amanda Durango — Concept Art, Comics, Illustration, and Design.',
};

export default function ArtPortfolioPage() {
  return (
    <div className="flex flex-col gap-8">
      <SectionHeading title="The Art Portfolio" />

      {/* Editorial Gallery Layout */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr]">
        <RPGPanel
          panelTitle="Featured Project"
          panelSubtitle="Concept Art · Visual Development"
        >
          <ArtworkPlaceholder
            asset={{
              id: 'portfolio-featured-placeholder',
              label: 'FEATURED ARTWORK',
              dimensionsText: '1200 × 675',
              aspectRatioClass: 'aspect-[16/9]',
              aspectRatioPreset: 'landscape',
            }}
          />
        </RPGPanel>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1">
          <RPGPanel
            panelTitle="Project Title"
            panelSubtitle="Comic · Sequential Art"
          >
            <ArtworkPlaceholder
              asset={{
                id: 'portfolio-secondary-a',
                label: 'PROJECT IMAGE',
                dimensionsText: '600 × 338',
                aspectRatioClass: 'aspect-[16/9]',
                aspectRatioPreset: 'card',
              }}
            />
          </RPGPanel>

          <RPGPanel
            panelTitle="Project Title"
            panelSubtitle="Character Design · Character Sheet"
          >
            <ArtworkPlaceholder
              asset={{
                id: 'portfolio-secondary-b',
                label: 'PROJECT IMAGE',
                dimensionsText: '600 × 338',
                aspectRatioClass: 'aspect-[16/9]',
                aspectRatioPreset: 'card',
              }}
            />
          </RPGPanel>
        </div>
      </div>

      {/* Six Creative Families */}
      <section aria-labelledby="disciplines-heading" className="flex flex-col gap-4">
        <div className="border-b border-[#b9945c]/20 pb-2">
          <h2
            id="disciplines-heading"
            className="font-display text-sm font-semibold tracking-[0.16em] text-[#e6c687] uppercase sm:text-base"
          >
            Disciplines & Categories
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TAXONOMY_FAMILIES.map((family) => (
            <RPGPanel
              key={family.id}
              as="article"
              panelTitle={family.familyName}
            >
              <ul className="flex flex-col gap-1.5 text-xs text-[#f7ead4] sm:text-sm">
                {family.entries.map((entry) => (
                  <li key={entry} className="flex items-center gap-2">
                    <span aria-hidden="true" className="text-[10px] text-[#dfc088]/80">
                      ◇
                    </span>
                    <span>{entry}</span>
                  </li>
                ))}
              </ul>
            </RPGPanel>
          ))}
        </div>
      </section>
    </div>
  );
}
