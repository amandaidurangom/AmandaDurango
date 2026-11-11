import React from 'react';
import Link from 'next/link';
import {
  Compass,
  Shield,
  ScrollText,
  Swords,
  Sparkles,
  BookOpen,
  ChevronRight,
} from 'lucide-react';
import { CommandIconKey } from '@/content/types';
import { cn } from '@/lib/utils';

const ICON_MAP: Record<CommandIconKey, React.ComponentType<{ className?: string }>> = {
  compass: Compass,
  shield: Shield,
  scroll: ScrollText,
  swords: Swords,
  sparkles: Sparkles,
  book: BookOpen,
};

export interface RPGCommandButtonProps {
  label: string;
  sublabel?: string;
  href?: string;
  onClick?: () => void;
  icon?: CommandIconKey;
  variant?: 'primary' | 'secondary' | 'command';
  className?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

export function RPGCommandButton({
  label,
  sublabel,
  href,
  onClick,
  icon,
  variant = 'command',
  className,
  ariaLabel,
  disabled = false,
}: RPGCommandButtonProps) {
  const IconComponent = icon ? ICON_MAP[icon] : null;

  const baseClasses = cn(
    'group relative inline-flex min-h-[48px] items-center justify-between gap-3 border px-4 py-2.5 text-left transition-colors duration-150',
    'focus-visible:outline-[2px] focus-visible:outline-[#ffe19e] focus-visible:outline-offset-[3px]',
    variant === 'primary' &&
      'border-[#b9945c]/30 bg-[#272018]/90 text-[#f7ead4] hover:border-[#dfc088]/60 hover:bg-[#362b20] justify-center text-center min-w-[200px]',
    variant === 'secondary' &&
      'border-[#b9945c]/22 bg-[#1c1813]/85 text-[#f7ead4] hover:border-[#dfc088]/55 hover:bg-[#2a2219] justify-center text-center min-w-[200px]',
    variant === 'command' &&
      'w-full border-[#b9945c]/22 bg-[#201a15]/85 text-[#f7ead4] hover:border-[#dfc088]/55 hover:bg-[#2f261d]',
    disabled && 'opacity-50 pointer-events-none',
    (variant === 'command' || variant === 'primary') && 'rpg-plaque',
    className
  );

  const innerContent = (
    <>
      {/* Four Corner Brackets on Button */}
      <span
        aria-hidden="true"
        className="rpg-plaque-corner pointer-events-none absolute -top-px -left-px h-2.5 w-2.5 border-t-[1.5px] border-l-[1.5px] border-[#c8a368] transition-colors group-hover:border-[#ffe19e]"
      />
      <span
        aria-hidden="true"
        className="rpg-plaque-corner pointer-events-none absolute -top-px -right-px h-2.5 w-2.5 border-t-[1.5px] border-r-[1.5px] border-[#c8a368] transition-colors group-hover:border-[#ffe19e]"
      />
      <span
        aria-hidden="true"
        className="rpg-plaque-corner pointer-events-none absolute -bottom-px -left-px h-2.5 w-2.5 border-b-[1.5px] border-l-[1.5px] border-[#c8a368] transition-colors group-hover:border-[#ffe19e]"
      />
      <span
        aria-hidden="true"
        className="rpg-plaque-corner pointer-events-none absolute -bottom-px -right-px h-2.5 w-2.5 border-b-[1.5px] border-r-[1.5px] border-[#c8a368] transition-colors group-hover:border-[#ffe19e]"
      />

      {variant === 'command' ? (
        <>
          <div className="flex min-w-0 items-center gap-3">
            {IconComponent && (
              <span
                aria-hidden="true"
                className="flex h-8 w-8 shrink-0 items-center justify-center border border-[#b9945c]/25 bg-[#16130f] text-[#dfc088] transition-transform duration-150 group-hover:scale-105"
              >
                <IconComponent className="h-4 w-4" />
              </span>
            )}
            <div className="min-w-0">
              <span className="font-display block text-sm font-semibold tracking-[0.1em] text-[#f7ead4] uppercase">
                {label}
              </span>
              {sublabel && (
                <span className="block text-xs text-[#d4c4ac]">
                  {sublabel}
                </span>
              )}
            </div>
          </div>
          <ChevronRight
            aria-hidden="true"
            className="h-4 w-4 shrink-0 text-[#b9945c]/80 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:text-[#ffe19e]"
          />
        </>
      ) : (
        <div className="flex items-center justify-center gap-2.5 px-2">
          <span
            aria-hidden="true"
            className="text-[10px] text-[#dfc088]/85 transition-transform duration-150 group-hover:scale-110"
          >
            ✦
          </span>
          <span className="font-display text-sm font-semibold tracking-[0.14em] text-[#f7ead4] uppercase whitespace-nowrap sm:text-base">
            {label}
          </span>
          <span
            aria-hidden="true"
            className="text-[10px] text-[#dfc088]/85 transition-transform duration-150 group-hover:scale-110"
          >
            ✦
          </span>
        </div>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} aria-label={ariaLabel} className={baseClasses}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      className={baseClasses}
    >
      {innerContent}
    </button>
  );
}
