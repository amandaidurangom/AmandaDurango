'use client';

import { useId, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import type { PlaceholderAsset } from '@/content/types';
import { ArtworkPlaceholder } from './ArtworkPlaceholder';

type PortfolioArtworkProps = {
  asset: PlaceholderAsset;
  title: string;
  description: string;
  className?: string;
  image?: { src: string; alt: string };
};

export function PortfolioArtwork({ asset, title, description, className, image }: PortfolioArtworkProps) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);

  function moveArtwork(offset: number) {
    const current = trigger.current;
    const gallery = current?.closest('[data-portfolio-gallery]');
    if (!current || !gallery) return;

    const buttons = [...gallery.querySelectorAll<HTMLButtonElement>('[data-artwork-trigger]')];
    const index = buttons.indexOf(current);
    const next = buttons[(index + offset + buttons.length) % buttons.length];
    if (!next || next === current) return;

    dialog.current?.close();
    next.focus({ preventScroll: true });
    next.click();
  }

  const headingId = useId();
  const descriptionId = useId();
  const preview = (expanded: boolean) => image ? (
    <div className={`relative w-full ${asset.aspectRatioClass}`}>
      <Image src={image.src} alt={image.alt} fill sizes={expanded ? '92vw' : '(min-width: 1024px) 50vw, 100vw'} className="object-contain" />
    </div>
  ) : (
    <ArtworkPlaceholder asset={asset} className={expanded ? undefined : className} />
  );

  return (
    <div className="relative">
      {preview(false)}
      <button
        type="button"
        ref={trigger}
        data-artwork-trigger
        aria-haspopup="dialog"
        aria-label={`Expand ${title} — ${asset.label}`}
        className="group absolute inset-0 rounded-sm focus-visible:outline-2"
        onClick={() => dialog.current?.showModal()}
      >
        <span className="absolute right-1.5 bottom-1.5 rounded bg-[#171411]/90 p-1.5 text-[#f7ead4] group-hover:bg-[#504133]">
          <Maximize2 aria-hidden="true" size={14} />
        </span>
      </button>
      <dialog
        ref={dialog}
        aria-labelledby={headingId}
        aria-describedby={descriptionId}
        className="portfolio-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <div className="space-y-4 p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <h2 id={headingId} className="font-display text-lg text-[#f7ead4] sm:text-2xl">{title}</h2>
            <form method="dialog">
              <button type="submit" aria-label="Close artwork" className="grid h-11 w-11 place-items-center rounded bg-[#312a23] text-[#f7ead4]">
                <X aria-hidden="true" size={20} />
              </button>
            </form>
          </div>
          {preview(true)}
          <p id={descriptionId} className="text-sm leading-relaxed text-[#dfd0b8]">{description}</p>
          <div className="flex flex-wrap justify-between gap-2">
            <button
              type="button"
              onClick={() => moveArtwork(-1)}
              className="inline-flex min-h-11 items-center gap-1 rounded bg-[#312a23] px-3 text-sm text-[#f7ead4]"
            >
              <ChevronLeft aria-hidden="true" size={16} /> Previous artwork
            </button>
            <button
              type="button"
              onClick={() => moveArtwork(1)}
              className="inline-flex min-h-11 items-center gap-1 rounded bg-[#312a23] px-3 text-sm text-[#f7ead4]"
            >
              Next artwork <ChevronRight aria-hidden="true" size={16} />
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
