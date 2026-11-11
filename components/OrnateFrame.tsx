import React from 'react';
import { cn } from '@/lib/utils';

export interface OrnateFrameProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: 'hero' | 'panel' | 'dialogue' | 'subtle';
  showCenterCrest?: boolean;
  as?: 'div' | 'section' | 'aside' | 'article' | 'nav';
  ariaLabel?: string;
  ariaLabelledBy?: string;
}

export function OrnateFrame({
  children,
  className,
  innerClassName,
  variant = 'panel',
  showCenterCrest = false,
  as: Component = 'div',
  ariaLabel,
  ariaLabelledBy,
}: OrnateFrameProps) {
  const variantStyles: Record<NonNullable<OrnateFrameProps['variant']>, string> = {
    hero: 'bg-[#191511]/90 border border-[#b9945c]/25 shadow-[0_20px_50px_rgba(0,0,0,0.55)]',
    panel: 'bg-[#1d1914]/85 border border-[#b9945c]/20 shadow-[0_12px_30px_rgba(0,0,0,0.38)]',
    dialogue: 'bg-[#181410]/92 border border-[#b9945c]/25 shadow-[0_10px_28px_rgba(0,0,0,0.45)]',
    subtle: 'bg-[#1a1612]/70 border border-[#b9945c]/18',
  };

  const cornerSize = variant === 'hero' ? 'h-5 w-5' : 'h-3.5 w-3.5';
  const cornerColor = variant === 'hero' ? 'border-[#dfc088]' : 'border-[#c8a368]';

  return (
    <Component
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={cn('relative isolate', variantStyles[variant], className)}
    >
      {/* Top-Left Corner Bracket */}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -top-px -left-px z-10 border-t-[2px] border-l-[2px]',
          cornerSize,
          cornerColor
        )}
      />
      {/* Top-Right Corner Bracket */}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -top-px -right-px z-10 border-t-[2px] border-r-[2px]',
          cornerSize,
          cornerColor
        )}
      />
      {/* Bottom-Left Corner Bracket */}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -bottom-px -left-px z-10 border-b-[2px] border-l-[2px]',
          cornerSize,
          cornerColor
        )}
      />
      {/* Bottom-Right Corner Bracket */}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute -bottom-px -right-px z-10 border-b-[2px] border-r-[2px]',
          cornerSize,
          cornerColor
        )}
      />

      {/* Subtle Optional Top & Bottom Center Diamond Accent */}
      {showCenterCrest && (
        <>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-[7px] left-1/2 z-10 -translate-x-1/2 bg-[#14110e] px-2 text-[10px] leading-none text-[#dfc088]/90"
          >
            ✦ ◆ ✦
          </span>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-[7px] left-1/2 z-10 -translate-x-1/2 bg-[#14110e] px-2 text-[10px] leading-none text-[#dfc088]/80"
          >
            ◆
          </span>
        </>
      )}

      <div className={cn('relative z-10 p-4 sm:p-6', innerClassName)}>{children}</div>
    </Component>
  );
}
