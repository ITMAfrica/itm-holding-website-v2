import React from 'react';
import { cn } from '@/components/ui/utils';
import type { Language } from '@/i18n';

const flagBox =
  'h-4 w-[22px] shrink-0 overflow-hidden rounded-none shadow-sm ring-1 ring-slate-900/15';

/** Small inline SVG flags (FR, GB for EN, PT) for the language switcher */
export function LanguageFlag({ code, className }: { code: Language; className?: string }) {
  const ukClipId = React.useId().replace(/:/g, '');
  const box = cn(flagBox, className);

  switch (code) {
    case 'fr':
      return (
        <svg className={box} viewBox="0 0 3 2" aria-hidden>
          <rect width="1" height="2" fill="#002395" />
          <rect x="1" width="1" height="2" fill="#fff" />
          <rect x="2" width="1" height="2" fill="#ED2939" />
        </svg>
      );
    case 'en':
      return (
        <svg className={box} viewBox="0 0 60 30" aria-hidden>
          <defs>
            <clipPath id={ukClipId}>
              <path d="M30 15h30v15H0V0h30z" />
            </clipPath>
          </defs>
          <path fill="#012169" d="M0 0h60v30H0z" />
          <path stroke="#fff" strokeWidth="6" d="M0 0l60 30M60 0L0 30" />
          <path
            stroke="#C8102E"
            strokeWidth="4"
            d="M0 0l60 30M60 0L0 30"
            clipPath={`url(#${ukClipId})`}
          />
          <path stroke="#fff" strokeWidth="10" d="M30 0v30M0 15h60" />
          <path stroke="#C8102E" strokeWidth="6" d="M30 0v30M0 15h60" />
        </svg>
      );
    case 'pt':
      return (
        <svg className={box} viewBox="0 0 30 20" aria-hidden>
          <rect width="12" height="20" fill="#006600" />
          <rect x="12" width="18" height="20" fill="#DA020E" />
        </svg>
      );
  }
}
