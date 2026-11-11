'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HallSlide } from '@/content/types';
import { ArtworkPlaceholder } from './ArtworkPlaceholder';
import { OrnateFrame } from './OrnateFrame';
import { cn } from '@/lib/utils';

export interface ArtworkCarouselProps {
  slides: HallSlide[];
}

export function ArtworkCarousel({ slides }: ArtworkCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      handlePrevious();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      handleNext();
    }
  };

  const activeSlide = slides[currentIndex] ?? slides[0];

  return (
    <OrnateFrame
      as="section"
      ariaLabel="Featured artwork showcase carousel"
      variant="hero"
      showCenterCrest
      className="flex h-full flex-col justify-between"
      innerClassName="flex h-full flex-col justify-between gap-4 p-4 sm:p-6"
    >
      {/* Top Carousel Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#b9945c]/20 pb-2.5">
        <div className="flex items-center gap-2 text-xs text-[#dfd0b8]">
          <span className="font-display font-semibold tracking-[0.12em] text-[#e6c687] uppercase">
            {activeSlide.title}
          </span>
          <span aria-hidden="true">·</span>
          <span>{activeSlide.categoryTag}</span>
        </div>
        <span
          aria-live="polite"
          className="font-mono text-xs tracking-wider text-[#d4c4ac] tabular-nums"
        >
          {currentIndex + 1} / {totalSlides}
        </span>
      </div>

      {/* Main Proportional Placeholder Stage */}
      <div
        tabIndex={0}
        onKeyDown={handleKeyDown}
        aria-roledescription="carousel"
        aria-label={`Featured artwork slide ${currentIndex + 1} of ${totalSlides}. Use Left and Right arrow keys to change slide.`}
        className="relative my-auto focus-visible:outline-[2px] focus-visible:outline-[#ffe19e] focus-visible:outline-offset-[4px]"
      >
        <div aria-live="polite" aria-atomic="true">
          <ArtworkPlaceholder asset={activeSlide.asset} />
        </div>
      </div>

      {/* Manual Controls Bar with Corner Brackets & Fine Lines */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#b9945c]/20 pt-3">
        <button
          type="button"
          onClick={handlePrevious}
          aria-label={`Previous slide (currently showing slide ${currentIndex + 1} of ${totalSlides})`}
          className="group relative font-display inline-flex min-h-[42px] items-center justify-center gap-2 border border-[#b9945c]/25 bg-[#221c15] px-4 py-2 text-xs font-semibold tracking-[0.12em] text-[#f7ead4] uppercase transition-colors duration-150 hover:border-[#dfc088]/55 hover:bg-[#31281e] cursor-pointer"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-px -left-px h-2 w-2 border-t border-l border-[#c8a368] group-hover:border-[#ffe19e]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-px -left-px h-2 w-2 border-b border-l border-[#c8a368] group-hover:border-[#ffe19e]"
          />
          <ChevronLeft aria-hidden="true" className="h-4 w-4 text-[#dfc088]" />
          <span>Previous</span>
        </button>

        {/* Position Indicator Diamonds */}
        <div
          role="group"
          aria-label="Select slide position"
          className="flex items-center gap-2"
        >
          {slides.map((slide, index) => {
            const isSelected = index === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1} of ${totalSlides}: ${slide.title}`}
                aria-current={isSelected ? 'true' : undefined}
                className={cn(
                  'flex h-8 w-8 items-center justify-center text-sm transition-colors duration-150 cursor-pointer',
                  isSelected
                    ? 'text-[#ffe19e]'
                    : 'text-[#b9945c]/70 hover:text-[#f7ead4]'
                )}
              >
                <span aria-hidden="true">{isSelected ? '◆' : '◇'}</span>
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={handleNext}
          aria-label={`Next slide (currently showing slide ${currentIndex + 1} of ${totalSlides})`}
          className="group relative font-display inline-flex min-h-[42px] items-center justify-center gap-2 border border-[#b9945c]/25 bg-[#221c15] px-4 py-2 text-xs font-semibold tracking-[0.12em] text-[#f7ead4] uppercase transition-colors duration-150 hover:border-[#dfc088]/55 hover:bg-[#31281e] cursor-pointer"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-px -right-px h-2 w-2 border-t border-r border-[#c8a368] group-hover:border-[#ffe19e]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-r border-b border-[#c8a368] group-hover:border-[#ffe19e]"
          />
          <span>Next</span>
          <ChevronRight aria-hidden="true" className="h-4 w-4 text-[#dfc088]" />
        </button>
      </div>
    </OrnateFrame>
  );
}
