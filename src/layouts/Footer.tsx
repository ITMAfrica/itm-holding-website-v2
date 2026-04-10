import React from 'react';
import { Link, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { MapPin, Phone, Mail, Linkedin, Facebook, Instagram } from 'lucide-react';
import logoImg from '@/assets/logo.png';
import { getLocalizedPath, resolveLanguageFromParams } from '@/i18n';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { lng } = useParams<{ lng: string }>();
  const currentLng = resolveLanguageFromParams(lng);
  const lp = (path: string) => getLocalizedPath(path, currentLng);

  const groupLinks = t('footer.groupLinks', { returnObjects: true }) as string[];
  const expertiseLinks = t('footer.expertiseLinks', { returnObjects: true }) as string[];

  return (
    <footer className="bg-[rgb(0,8,43)] text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] -mr-32 -mt-32 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] -ml-20 -mb-20 pointer-events-none"></div>

      <div className="w-full px-8 lg:px-[15vw] relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-20">
          <div className="w-full lg:max-w-xs 2xl:max-w-[247px] shrink-0">
            <Link to={lp('/')} className="block mb-8 group">
              <div className="relative w-36 h-28">
                <img src={logoImg} alt="ITM Holding" className="absolute top-1/2 -translate-y-1/2 left-0 h-28 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
            <p className="text-[rgb(144,161,185)] leading-relaxed mb-8 font-light text-[16px] font-bold font-normal">{t('footer.tagline')}</p>
            <div className="flex gap-4 ">
              {[
                { icon: Linkedin, href: 'https://www.linkedin.com/in/itm-holding-7526a6162/' },
                { icon: Facebook, href: 'https://www.facebook.com/itmholding' },
                { icon: Instagram, href: 'https://www.instagram.com/itm.holding/' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-none border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all duration-300"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 w-full lg:w-auto">
            <div>
              <h4 className="font-bold text-white mb-8 flex items-center gap-3 uppercase tracking-[0.2em] text-[11px]">
                <span className="w-8 h-px bg-cyan-500"></span>
                {t('footer.group')}
              </h4>
              <ul className="space-y-4 text-slate-400 font-bold font-normal">
                {groupLinks.map((item) => (
                  <li key={item} className="font-bold">
                    <Link to={lp('/about')} className="text-[17px] font-light hover:text-cyan-400 hover:translate-x-2 transition-all inline-block duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <h4 className="font-bold text-white mb-8 flex items-center gap-3 uppercase tracking-[0.2em] text-[11px]">
                <span className="w-8 h-px bg-cyan-500"></span>
                {t('footer.expertise')}
              </h4>
              <ul className="space-y-4 text-slate-400">
                {expertiseLinks.map((item) => (
                  <li key={item}>
                    <Link to={lp('/industries')} className="text-[17px] font-light hover:text-cyan-400 hover:translate-x-2 transition-all inline-block duration-300">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-8 flex items-center gap-3 uppercase tracking-[0.2em] text-[11px]">
                <span className="w-8 h-px bg-cyan-500"></span>
                {t('footer.contact')}
              </h4>
              <ul className="space-y-6 text-slate-400">
                <li className="flex items-start gap-4 group">
                  <MapPin size={18} className="text-cyan-500 shrink-0 mt-1" />
                  <span className="text-[17px] font-light leading-relaxed" dangerouslySetInnerHTML={{ __html: t('footer.address') }} />
                </li>
                <li className="flex items-center gap-4 group">
                  <Phone size={18} className="text-cyan-500 shrink-0" />
                  <span className="text-[17px] font-light whitespace-nowrap">+243 81 000 0000</span>
                </li>
                <li className="flex items-center gap-4 group">
                  <Mail size={18} className="text-cyan-500 shrink-0" />
                  <a href="mailto:info@itmafrica.com" className="text-[17px] font-light hover:text-white transition-colors">
                    info@itmafrica.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-600 text-[11px] font-bold uppercase tracking-widest">
          <p>
            &copy; {new Date().getFullYear()} ITM Holding. {t('footer.rights')}.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <Link to={lp('/privacy')} className="hover:text-cyan-400 transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to={lp('/terms')} className="hover:text-cyan-400 transition-colors">
              {t('footer.terms')}
            </Link>
            <Link to={lp('/sitemap')} className="hover:text-cyan-400 transition-colors">
              {t('footer.sitemap')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
