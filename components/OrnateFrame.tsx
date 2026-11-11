import React from 'react';
import { cn } from '@/lib/utils';

export interface OrnateFrameProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  variant?: 'hero' | 'panel' | 'portrait' | 'gallery' | 'dialogue' | 'subtle';
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
  return (
    <Component
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      className={cn('ornate-frame relative isolate', className)}
      data-frame={variant}
    >
      <span className="frame-trim" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </span>
      {showCenterCrest && <span className="frame-crest" aria-hidden="true" />}

      <div className={cn('relative z-10 p-4 sm:p-6', innerClassName)}>{children}</div>
    </Component>
  );
}
