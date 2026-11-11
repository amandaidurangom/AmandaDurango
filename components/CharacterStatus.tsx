import React from 'react';
import { DecorativeMeter } from '@/content/types';

export interface CharacterStatusProps {
  hp: DecorativeMeter;
  mp: DecorativeMeter;
  specs: string[];
}

export function CharacterStatus({
  hp,
  mp,
  specs,
}: CharacterStatusProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* HP & MP Visual Bars */}
      <div
        aria-label="Character status meters"
        className="flex flex-col gap-2.5 border-y border-[#b9945c]/20 py-3"
      >
        {/* HP Bar */}
        <div className="flex items-center gap-2.5" aria-hidden="true">
          <span className="font-display w-7 text-xs font-semibold tracking-wider text-[#e6c687]">
            {hp.label}
          </span>
          <div className="relative h-2.5 flex-1 overflow-hidden border border-[#b9945c]/30 bg-[#13100d]">
            <div
              className="h-full bg-gradient-to-r from-[#8c322b] to-[#c9564c]"
              style={{ width: `${hp.percentage}%` }}
            />
          </div>
          <span className="font-mono w-14 text-right text-xs text-[#dfd0b8] tabular-nums">
            {hp.current}/{hp.max}
          </span>
        </div>

        {/* MP Bar */}
        <div className="flex items-center gap-2.5" aria-hidden="true">
          <span className="font-display w-7 text-xs font-semibold tracking-wider text-[#e6c687]">
            {mp.label}
          </span>
          <div className="relative h-2.5 flex-1 overflow-hidden border border-[#b9945c]/30 bg-[#13100d]">
            <div
              className="h-full bg-gradient-to-r from-[#2c4f6b] to-[#5689b0]"
              style={{ width: `${mp.percentage}%` }}
            />
          </div>
          <span className="font-mono w-14 text-right text-xs text-[#dfd0b8] tabular-nums">
            {mp.current}/{mp.max}
          </span>
        </div>
      </div>

      {/* Specs Section */}
      <div className="flex flex-col gap-2.5">
        <div className="relative border border-[#b9945c]/22 bg-[#16130f]/85 px-3 py-1.5 text-center">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-px -left-px h-2 w-2 border-t border-l border-[#c8a368]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-px -right-px h-2 w-2 border-t border-r border-[#c8a368]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-px -left-px h-2 w-2 border-b border-l border-[#c8a368]"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-r border-b border-[#c8a368]"
          />
          <h3 className="font-display text-xs font-semibold tracking-[0.18em] text-[#e6c687] uppercase">
            Specs
          </h3>
        </div>

        <ul className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-1" aria-label="Specializations">
          {specs.map((spec) => (
            <li
              key={spec}
              className="flex items-center gap-2.5 border-b border-[#b9945c]/15 px-2 py-1.5 text-xs text-[#f7ead4] last:border-b-0 sm:text-sm"
            >
              <span aria-hidden="true" className="text-[10px] text-[#dfc088]/85">
                ◇
              </span>
              <span>{spec}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
