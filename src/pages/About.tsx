import React from 'react';
import { useTranslation } from 'react-i18next';
import { HeroSection } from '@/components/HeroSection';
import { FounderSection, VideoSection, TimelineSection, ValuesSection, ImpactSection } from '@/components/sections/About';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1686676104932-3d7b6bbaef52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBnbGFzcyUyMG9mZmljZSUyMGJ1aWxkaW5nJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2MzY0ODI2M3ww&ixlib=rb-4.1.0&q=80&w=1920';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-w-0 w-full bg-white min-h-screen font-sans selection:bg-cyan-200 selection:text-slate-900">
      <HeroSection
        highlight={t('aboutPage.heroHighlight')}
        title={
          <>
            {t('aboutPage.heroTitleBefore')}
            <br />
            <span className="text-[#90A1B9] bg-clip-text">{t('aboutPage.heroTitleAccent')}</span>
          </>
        }
        subtitle={t('aboutPage.heroSubtitle')}
        backgroundImage={HERO_IMAGE}
      />

      <FounderSection />
      <VideoSection />
      <TimelineSection />
      <ValuesSection />
      <ImpactSection />
    </div>
  );
};
