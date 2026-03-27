import React from 'react';
import { useTranslation } from 'react-i18next';

export const VideoSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-[#004080] py-16 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] -mr-64 -mt-64 pointer-events-none"></div>

      <div className="w-full px-8 lg:px-[15vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end mb-12 border-b border-white/10 pb-8">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-[#90A1B9]"></span>
              <span className="text-[#90A1B9] font-bold tracking-[0.3em] uppercase text-xs">{t('videoSection.label')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight px-[0px] py-[-2px]">
              {t('videoSection.title1')}
              <br />
              {t('videoSection.title2')}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-blue-100/80 text-lg font-light leading-relaxed pl-8 border-l border-white/20">{t('videoSection.body')}</p>
          </div>
        </div>

        <div className="relative aspect-video w-full bg-slate-900 group cursor-pointer overflow-hidden border border-white/10">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            alt="Corporate Video Cover"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 scale-100 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-[20px] border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-2"></div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent flex justify-end items-end">
            <div className="hidden md:block">
              <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] border border-white/20 px-3 py-1">{t('videoSection.watchNow')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
