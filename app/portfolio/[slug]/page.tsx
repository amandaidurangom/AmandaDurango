import React from 'react';
import type { Metadata } from 'next';
import { SectionHeading } from '@/components/SectionHeading';
import { RPGPanel } from '@/components/RPGPanel';
import { ArtworkPlaceholder } from '@/components/ArtworkPlaceholder';
import { RPGCommandButton } from '@/components/RPGCommandButton';

export const metadata: Metadata = {
  title: 'Project Detail · Amanda Durango',
  description: 'Project case study view in Amanda Durango’s portfolio.',
};

export default function ProjectDetailPage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeading title="Project Detail" />

      <RPGPanel panelTitle="Featured Artwork">
        <ArtworkPlaceholder
          asset={{
            id: 'project-detail-hero',
            label: 'HERO ARTWORK PLACEHOLDER',
            dimensionsText: '1280 × 720',
            aspectRatioClass: 'aspect-[16/9]',
            aspectRatioPreset: 'landscape',
          }}
        />

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-[#b9945c]/20 pt-4">
          <RPGCommandButton
            label="BACK TO PORTFOLIO"
            href="/portfolio"
            variant="secondary"
          />
          <RPGCommandButton
            label="PLAYING HALL"
            href="/hall"
            variant="secondary"
          />
        </div>
      </RPGPanel>
    </div>
  );
}
