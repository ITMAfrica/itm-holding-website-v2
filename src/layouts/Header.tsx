import React, { useEffect, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Menu, X, ExternalLink, ArrowRight, ChevronRight, ChevronDown, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/components/ui/utils';
import { LanguageFlag } from '@/components/LanguageFlag';
import logoImg from '@/assets/logo.png';
import {
  getLocalizedPath,
  getPathWithoutLang,
  languages,
  resolveLanguageFromParams,
  type Language,
} from '@/i18n';

interface NavItem {
  labelKey: string;
  path: string;
  external?: boolean;
}


function languageOptionName(code: Language, t: (key: string) => string): string {
  switch (code) {
    case 'fr':
      return t('header.langFrName');
    case 'en':
      return t('header.langEnName');
    case 'pt':
      return t('header.langPtName');
  }
}

const langTriggerClass =
  'h-8 min-h-0 gap-1.5 rounded-none border-slate-500/50 bg-white/5 px-2 text-white shadow-none backdrop-blur-sm hover:border-cyan-400/45 hover:bg-cyan-500/15 hover:text-white dark:hover:border-cyan-400/45 dark:hover:bg-cyan-500/15 data-[state=open]:border-cyan-400 data-[state=open]:bg-cyan-500/10 data-[state=open]:text-cyan-100';

const langMenuContentClass =
  'min-w-[13rem] rounded-none border border-slate-200 bg-white p-0 text-slate-800 shadow-sm';

const langMenuItemClass =
  'flex cursor-pointer items-center gap-3 rounded-none border-b border-slate-100 px-4 py-2.5 text-sm font-medium tracking-normal text-slate-500 outline-none last:border-b-0 hover:bg-slate-50 hover:text-slate-800 focus:bg-slate-50 data-[highlighted]:bg-slate-50 data-[highlighted]:text-slate-800';

function LanguageSwitcher({
  currentLng,
  t,
  onSelect,
  menuAlign = 'end',
}: {
  currentLng: Language;
  t: (key: string) => string;
  onSelect: (code: Language) => void;
  menuAlign?: 'start' | 'end';
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          className={langTriggerClass}
          aria-label={`${t('header.languagesAria')}: ${languageOptionName(currentLng, t)}`}
          aria-haspopup="menu"
        >
          <LanguageFlag code={currentLng} className="ring-white/25" />
          <ChevronDown className="size-3.5 shrink-0 opacity-80" aria-hidden />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align={menuAlign} sideOffset={6} className={langMenuContentClass}>
        {languages.map((code) => (
          <DropdownMenuItem
            key={code}
            className={cn(
              langMenuItemClass,
              currentLng === code && 'bg-slate-50 text-slate-900',
            )}
            onClick={() => onSelect(code)}
          >
            <LanguageFlag code={code} className="ring-slate-200" />
            <span className="flex-1">{languageOptionName(code, t)}</span>
            {currentLng === code ? (
              <Check className="size-3.5 shrink-0 text-[#0092B8]" strokeWidth={2.5} aria-hidden />
            ) : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

const NAV_PATHS: NavItem[] = [
  { labelKey: 'nav.about', path: '/about' },
  { labelKey: 'nav.companies', path: '/companies' },
  { labelKey: 'nav.industries', path: '/industries' },
  { labelKey: 'nav.investors', path: '/investors' },
  { labelKey: 'nav.media', path: '/media' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { lng } = useParams<{ lng: string }>();
  const { t, i18n } = useTranslation();
  const currentLng = resolveLanguageFromParams(lng, i18n.language);

  const pathWithoutLang = useMemo(() => getPathWithoutLang(location.pathname), [location.pathname]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  const switchLanguage = (next: Language) => {
    const rest = pathWithoutLang === '/' ? '' : pathWithoutLang;
    navigate(`/${next}${rest}`);
    setIsMenuOpen(false);
  };

  // Empêcher le scroll quand le menu est ouvert
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Fermer le menu avec la touche Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMenuOpen]);

  return (
    <header className="absolute top-0 z-50 w-full bg-transparent ">
      <div className="w-full px-8 lg:px-[15vw] py-[14px] flex justify-between items-center">
        <Link to={getLocalizedPath('/', currentLng)} className="flex items-center gap-2 z-50">
          <div className="relative w-40 h-12">
            <img src={logoImg} alt="ITM Holding" className="absolute top-1/2 -translate-y-1/2 left-0 h-32 w-auto object-contain max-w-none" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-5 m-[0px] p-[0px] px-[-1px] py-[0px] px-[6px] bg-[rgba(255,255,255,0)]">
          {NAV_PATHS.map((item) => {
            const to = getLocalizedPath(item.path, currentLng);
            const isActive = pathWithoutLang === item.path || (item.path !== '/' && pathWithoutLang.startsWith(item.path + '/'));
            return item.external ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold transition-colors hover:text-cyan-400 whitespace-nowrap text-slate-300 flex items-center gap-1"
              >
                {t(item.labelKey)}
                <ExternalLink size={14} />
              </a>
            ) : (
              <Link
                key={item.path}
                to={to}
                className={`text-sm font-bold transition-colors hover:text-cyan-400 whitespace-nowrap ${isActive ? 'text-cyan-400 font-bold' : 'text-slate-300'}`}
              >
                {t(item.labelKey)}
              </Link>
            );
          })}

          <div className="ml-2 flex items-center border-l border-white/20 pl-4">
            <LanguageSwitcher currentLng={currentLng} t={t} onSelect={switchLanguage} />
          </div>

          <Button asChild className="bg-[#004080] hover:bg-[#0066a3] hover:shadow-[0_0_20px_rgba(0,146,184,0.35)] text-white font-bold rounded-none px-8 h-10 shadow-none transition-all duration-300 ml-[25px] mr-[0px] my-[0px] uppercase tracking-widest text-[11px]">
            <Link to={getLocalizedPath('/contact', currentLng)} className="flex items-center gap-2">
              {t('header.contactCta')}
              <ArrowRight size={14} />
            </Link>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          type="button" 
          className="xl:hidden p-2 text-white hover:text-cyan-400 transition-colors z-[60]" 
          onClick={toggleMenu} 
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav - Slide from Right */}
      {/* Overlay */}
      <div
        className={`xl:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-[55] transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Side Panel */}
      <div
        className={`xl:hidden fixed top-0 right-0 h-full w-[85%] max-w-[400px] bg-gradient-to-b from-[#0a1628] via-[#0c1e35] to-[#0a1628] z-[60] transform transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header du panel */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <span className="text-white font-bold text-lg tracking-wide">Menu</span>
          <button
            type="button"
            onClick={closeMenu}
            className="p-2 text-white/70 hover:text-cyan-400 transition-colors hover:bg-white/10"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 overflow-y-auto py-6 px-6">
          <ul className="space-y-1">
            {NAV_PATHS.map((item, index) => {
              const to = getLocalizedPath(item.path, currentLng);
              const isActive = pathWithoutLang === item.path;
              return (
                <li
                  key={item.path}
                  className="transform transition-all duration-300"
                  style={{
                    transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                    opacity: isMenuOpen ? 1 : 0,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                  }}
                >
                  {item.external ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between py-4 px-4 text-lg font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 transition-all"
                      onClick={closeMenu}
                    >
                      <span>{t(item.labelKey)}</span>
                      <ExternalLink size={18} className="text-slate-500 group-hover:text-cyan-400 transition-colors" />
                    </a>
                  ) : (
                    <Link
                      to={to}
                      className={`group flex items-center justify-between py-4 px-4 text-lg font-medium transition-all ${
                        isActive
                          ? 'text-cyan-400 bg-cyan-500/10 border-l-4 border-cyan-400'
                          : 'text-slate-300 hover:text-cyan-400 hover:bg-white/5'
                      }`}
                      onClick={closeMenu}
                    >
                      <span>{t(item.labelKey)}</span>
                      <ChevronRight size={20} className={`transition-transform duration-200 ${isActive ? 'text-cyan-400' : 'text-slate-500 group-hover:translate-x-1 group-hover:text-cyan-400'}`} />
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Language Switcher */}
          <div className="mt-6 pt-4 border-t border-white/10">
            <div className="px-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
                {t('header.languagesAria')}
              </p>
              <LanguageSwitcher
                currentLng={currentLng}
                t={t}
                onSelect={switchLanguage}
                menuAlign="start"
              />
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-6 px-4">
            <Button
              asChild
              className="w-full bg-[#004080] hover:bg-[#003366] text-white font-bold h-11 rounded-none transition-colors duration-200 uppercase tracking-widest text-xs"
            >
              <Link to={getLocalizedPath('/contact', currentLng)} onClick={closeMenu} className="flex items-center justify-center gap-2">
                {t('header.contactCta')}
                <ArrowRight size={14} />
              </Link>
            </Button>
          </div>

          {/* Footer Info */}
          <div className="mt-10 pt-6 border-t border-white/10 px-4">
            <div className="text-center">
              <p className="text-xs text-slate-500 mb-2">ITM Holding</p>
              <p className="text-xs text-slate-600">© 2024 All rights reserved</p>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
