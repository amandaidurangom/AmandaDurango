'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GLOBAL_NAVIGATION } from '@/content/site-data';
import { cn } from '@/lib/utils';

export function GlobalNavigation() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b border-[#b9945c]/22 bg-[#14110e]/90">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-3 px-4 py-3 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:px-8 lg:py-4">
        {/* Zone 1: Brand Identity Link to Intro (/) */}
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            aria-current={pathname === '/' ? 'page' : undefined}
            className="group inline-flex min-h-[44px] items-center gap-3 py-1 text-left focus-visible:outline-[2px] focus-visible:outline-[#ffe19e] focus-visible:outline-offset-[3px]"
          >
            <span
              aria-hidden="true"
              className="relative flex h-8 w-8 shrink-0 items-center justify-center border border-[#b9945c]/25 bg-[#1b1713] text-xs text-[#dfc088]"
            >
              <span className="pointer-events-none absolute -top-px -left-px h-2 w-2 border-t border-l border-[#dfc088]" />
              <span className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-r border-b border-[#dfc088]" />
              ✦
            </span>
            <span className="font-display text-base font-semibold tracking-[0.12em] text-[#f7ead4] uppercase transition-colors group-hover:text-[#ffe19e] sm:text-lg whitespace-nowrap">
              Amanda Durango
            </span>
          </Link>
        </div>

        {/* Zone 2: Global Navigation Links */}
        <nav
          aria-label="Global navigation"
          className="flex flex-wrap items-center gap-1.5 sm:gap-2 lg:justify-end"
        >
          {GLOBAL_NAVIGATION.map((item) => {
            const isActive =
              item.href === '/'
                ? pathname === '/'
                : pathname === item.href || pathname.startsWith(`${item.href}/`);

            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={cn(
                  'font-display relative inline-flex min-h-[40px] items-center justify-center px-2.5 py-1.5 text-xs font-medium tracking-[0.09em] uppercase transition-colors duration-150 whitespace-nowrap sm:min-h-[42px] sm:px-3.5 sm:text-[13px]',
                  isActive
                    ? 'border border-[#b9945c]/30 bg-[#251e17] text-[#ffe19e]'
                    : 'border border-transparent text-[#dfd0b8] hover:border-[#b9945c]/25 hover:bg-[#1e1914] hover:text-[#f7ead4]'
                )}
              >
                {isActive && (
                  <>
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-px -left-px h-2 w-2 border-t border-l border-[#ffe19e]"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -top-px -right-px h-2 w-2 border-t border-r border-[#ffe19e]"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-px -left-px h-2 w-2 border-b border-l border-[#ffe19e]"
                    />
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-px -right-px h-2 w-2 border-r border-b border-[#ffe19e]"
                    />
                  </>
                )}
                <span className="sm:hidden">{item.shortLabel ?? item.label}</span>
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
