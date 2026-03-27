import React from 'react';
import { Link, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { HeroSliderSection, StatsSection, MissionVisionSection, TestimonialsSection, NewsSection } from '@/components/sections/Home';
import { getLocalizedPath, resolveLanguageFromParams } from '@/i18n';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const { lng } = useParams<{ lng: string }>();
  const currentLng = resolveLanguageFromParams(lng);

  return (
    <div className="bg-white font-sans selection:bg-cyan-200 selection:text-slate-900">
      <HeroSliderSection />

      <section className="py-24 bg-white relative">
        <div className="w-full px-8 lg:px-[15vw] relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">{t('home.portfolioLabel')}</span>
                <div className="h-px flex-1 bg-slate-200"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {t('home.portfolioTitle1')}
                <br />
                <span className="text-[#004080]">{t('home.portfolioTitle2')}</span>
              </h2>
            </div>
            <div className="lg:col-span-7 flex flex-col justify-end">
              <p className="text-slate-600 text-lg leading-relaxed mb-8">{t('home.portfolioBody')}</p>
              <div className="flex gap-4">
                <Button variant="outline" asChild className="rounded-none border-slate-300 text-slate-900 hover:bg-[#0092B8] hover:text-white hover:border-[#0092B8] transition-colors">
                  <Link to={getLocalizedPath('/companies', currentLng)}>{t('home.portfolioCta')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />
      <MissionVisionSection />
      <TestimonialsSection />
      <NewsSection />
    </div>
  );
};
