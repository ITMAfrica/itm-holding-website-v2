import React from 'react';
import { Link, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { SEO } from '@/components/SEO';
import { getLocalizedPath, resolveLanguageFromParams } from '@/i18n';

const Section: React.FC<{ title: string; body: string }> = ({ title, body }) => (
  <section className="mb-10">
    <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
    <p className="text-slate-600 leading-relaxed">{body}</p>
  </section>
);

export const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'legal.privacy';

  return (
    <>
      <SEO title={t(`${p}.metaTitle`)} description={t(`${p}.metaDescription`)} />
      <div className="min-h-screen bg-white pt-28 md:pt-36 pb-20 px-8 lg:px-[15vw]">
        <article className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-4">{t(`${p}.updated`)}</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-8">{t(`${p}.h1`)}</h1>
          <p className="text-slate-600 leading-relaxed mb-10">{t(`${p}.p1`)}</p>
          <Section title={t(`${p}.s1Title`)} body={t(`${p}.s1Body`)} />
          <Section title={t(`${p}.s2Title`)} body={t(`${p}.s2Body`)} />
          <Section title={t(`${p}.s3Title`)} body={t(`${p}.s3Body`)} />
          <Section title={t(`${p}.s4Title`)} body={t(`${p}.s4Body`)} />
          <Section title={t(`${p}.s5Title`)} body={t(`${p}.s5Body`)} />
        </article>
      </div>
    </>
  );
};

export const TermsPage: React.FC = () => {
  const { t } = useTranslation();
  const p = 'legal.terms';

  return (
    <>
      <SEO title={t(`${p}.metaTitle`)} description={t(`${p}.metaDescription`)} />
      <div className="min-h-screen bg-white pt-28 md:pt-36 pb-20 px-8 lg:px-[15vw]">
        <article className="max-w-3xl mx-auto">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-600 mb-4">{t(`${p}.updated`)}</p>
          <h1 className="text-4xl font-bold text-slate-900 mb-8">{t(`${p}.h1`)}</h1>
          <p className="text-slate-600 leading-relaxed mb-10">{t(`${p}.p1`)}</p>
          <Section title={t(`${p}.s1Title`)} body={t(`${p}.s1Body`)} />
          <Section title={t(`${p}.s2Title`)} body={t(`${p}.s2Body`)} />
          <Section title={t(`${p}.s3Title`)} body={t(`${p}.s3Body`)} />
          <Section title={t(`${p}.s4Title`)} body={t(`${p}.s4Body`)} />
        </article>
      </div>
    </>
  );
};

const SITEMAP_ROUTES: { path: string; labelKey: string }[] = [
  { path: '/', labelKey: 'nav.home' },
  { path: '/about', labelKey: 'nav.about' },
  { path: '/companies', labelKey: 'nav.companies' },
  { path: '/industries', labelKey: 'nav.industries' },
  { path: '/investors', labelKey: 'nav.investors' },
  { path: '/media', labelKey: 'nav.media' },
  { path: '/contact', labelKey: 'nav.contact' },
  { path: '/privacy', labelKey: 'footer.privacy' },
  { path: '/terms', labelKey: 'footer.terms' },
  { path: '/sitemap', labelKey: 'footer.sitemap' },
];

export const SitemapPage: React.FC = () => {
  const { t } = useTranslation();
  const { lng } = useParams<{ lng: string }>();
  const currentLng = resolveLanguageFromParams(lng);
  const lp = (path: string) => getLocalizedPath(path, currentLng);
  const p = 'legal.sitemap';

  return (
    <>
      <SEO title={t(`${p}.metaTitle`)} description={t(`${p}.metaDescription`)} />
      <div className="min-h-screen bg-white pt-28 md:pt-36 pb-20 px-8 lg:px-[15vw]">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{t(`${p}.h1`)}</h1>
          <p className="text-slate-600 mb-10">{t(`${p}.intro`)}</p>
          <ul className="space-y-3 border-t border-slate-200 pt-8">
            {SITEMAP_ROUTES.map((item) => (
              <li key={item.path}>
                <Link
                  to={lp(item.path)}
                  className="text-lg text-[#004080] font-medium hover:text-cyan-600 hover:underline inline-flex items-center gap-2"
                >
                  {t(item.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
