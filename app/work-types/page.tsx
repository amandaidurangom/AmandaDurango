import React from 'react';
import type { Metadata } from 'next';
import { WORK_TYPES_PREVIEW } from '@/content/site-data';
import { SectionHeading } from '@/components/SectionHeading';
import { OrnateFrame } from '@/components/OrnateFrame';
import { ArtworkPlaceholder } from '@/components/ArtworkPlaceholder';
import { RPGCommandButton } from '@/components/RPGCommandButton';

export const metadata: Metadata = {
  title: 'Select Your Type of Work · Amanda Durango',
  description:
    'Specializations of Amanda Durango: The Art, The Story, and The Concept.',
};

export default function WorkTypesPage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionHeading title="Select Your Type of Work" />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {WORK_TYPES_PREVIEW.map((specialty) => (
          <OrnateFrame
            key={specialty.id}
            as="article"
            variant="panel"
            showCenterCrest
            innerClassName="flex h-full flex-col justify-between gap-5 p-5"
          >
            <div className="flex flex-col gap-4">
              {/* Title Plaque */}
              <div className="border-b border-[#b9945c]/20 pb-3 text-center">
                <h2 className="font-display text-xl font-semibold tracking-[0.14em] text-[#f7ead4] uppercase">
                  {specialty.title}
                </h2>
                <p className="mt-1 text-xs tracking-[0.12em] text-[#e6c687] uppercase">
                  {specialty.subtitle}
                </p>
              </div>

              {/* Proportional Placeholder */}
              <ArtworkPlaceholder asset={specialty.placeholder} />

              {/* Description */}
              <p className="font-editorial text-center text-base leading-relaxed text-[#dfd0b8]">
                {specialty.description}
              </p>

              {/* Attributes */}
              <div className="flex flex-col gap-2 border-t border-[#b9945c]/20 pt-3">
                <p className="text-center font-display text-[11px] tracking-[0.2em] text-[#e6c687] uppercase">
                  ✦ Attributes ✦
                </p>
                {specialty.attributes.map((attr) => (
                  <div
                    key={attr.name}
                    className="flex items-center justify-between gap-3 text-xs text-[#dfd0b8]"
                  >
                    <span className="uppercase tracking-wider">{attr.name}</span>
                    <div aria-hidden="true" className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((segment) => (
                        <span
                          key={segment}
                          className={
                            segment <= attr.level
                              ? 'h-2 w-4 border border-[#dfc088]/70 bg-[#dfc088]/75'
                              : 'h-2 w-4 border border-[#b9945c]/25 bg-[#14110e]'
                          }
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <RPGCommandButton
              label={specialty.ctaLabel}
              href={specialty.href}
              variant="secondary"
              className="w-full"
            />
          </OrnateFrame>
        ))}
      </div>
    </div>
  );
}
