import React from 'react';
import { MessageSquareQuote } from 'lucide-react';
import { OrnateFrame } from './OrnateFrame';

export interface DialogueBoxProps {
  speaker: string;
  quote: string;
  guidance?: string;
}

export function DialogueBox({
  speaker,
  quote,
  guidance,
}: DialogueBoxProps) {
  return (
    <OrnateFrame
      as="section"
      ariaLabel="Character dialogue window"
      variant="dialogue"
      innerClassName="p-4 sm:p-6"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
        {/* JRPG Dialogue Emblem with Corner Brackets */}
        <div
          aria-hidden="true"
          className="relative flex h-11 w-11 shrink-0 items-center justify-center border border-[#b9945c]/25 bg-[#201a14] text-[#dfc088]"
        >
          <span className="pointer-events-none absolute -top-px -left-px h-2 w-2 border-t border-l border-[#c8a368]" />
          <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-r border-b border-[#c8a368]" />
          <MessageSquareQuote className="h-5 w-5" />
        </div>

        {/* Fine vertical divider on desktop */}
        <div
          aria-hidden="true"
          className="hidden h-10 border-r border-[#b9945c]/25 sm:block"
        />

        {/* Dialogue Content */}
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <span className="font-display text-xs font-semibold tracking-[0.14em] text-[#e6c687] uppercase">
            {speaker}
          </span>

          <p className="font-editorial text-base leading-relaxed text-[#f7ead4] sm:text-lg">
            {quote}
          </p>

          {guidance && (
            <p className="text-xs text-[#dfd0b8]">
              {guidance}
            </p>
          )}
        </div>
      </div>
    </OrnateFrame>
  );
}
