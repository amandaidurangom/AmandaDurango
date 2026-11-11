import React from 'react';
import { OrnateFrame, OrnateFrameProps } from './OrnateFrame';
import { cn } from '@/lib/utils';

export interface RPGPanelProps extends Omit<OrnateFrameProps, 'title'> {
  panelTitle?: string;
  panelSubtitle?: string;
}

export function RPGPanel({
  panelTitle,
  panelSubtitle,
  children,
  className,
  innerClassName,
  ...rest
}: RPGPanelProps) {
  return (
    <OrnateFrame
      className={className}
      innerClassName={cn('flex flex-col gap-4', innerClassName)}
      {...rest}
    >
      {(panelTitle || panelSubtitle) && (
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#b9945c]/20 pb-3">
          <div>
            {panelTitle && (
              <h2 className="font-display text-base font-semibold tracking-wider text-[#f7ead4] uppercase sm:text-lg">
                {panelTitle}
              </h2>
            )}
            {panelSubtitle && (
              <p className="text-xs text-[#d4c4ac]">{panelSubtitle}</p>
            )}
          </div>
        </div>
      )}
      {children}
    </OrnateFrame>
  );
}
