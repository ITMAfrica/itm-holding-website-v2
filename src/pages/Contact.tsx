import React from 'react';
import { useTranslation } from 'react-i18next';
import { HeroSection } from '@/components/HeroSection';
import { ContactFormSection, MapSection } from '@/components/sections/Contact';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1664289262417-93f2d037adff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZnJpY2FuJTIwb2ZmaWNlJTIwY29ycG9yYXRlJTIwYnVpbGRpbmclMjBleHRlcmlvciUyMGFyY2hpdGVjdHVyZSUyMGdsYXNzfGVufDF8fHx8MTc2MzcxNzQxNXww&ixlib=rb-4.1.0&q=80&w=1920';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-cyan-200 selection:text-slate-900">
      <HeroSection
        highlight={t('contactPage.heroHighlight')}
        title={
          <>
            {t('contactPage.heroTitleBefore')}
            <br />
            <span className="text-[#90A1B9] bg-clip-text ">{t('contactPage.heroTitleAccent')}</span>
          </>
        }
        subtitle={t('contactPage.heroSubtitle')}
        backgroundImage={HERO_IMAGE}
      />

      <ContactFormSection />
      <MapSection />
    </div>
  );
};
