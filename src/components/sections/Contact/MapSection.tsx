import React from 'react';
import { MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export const MapSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full px-8 lg:px-[15vw]">
      <div className="mt-32 w-full border-t border-gray-200 pt-24">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-light text-[#004080] mb-2">{t('map.title')}</h2>
            <p className="text-[#90A1B9] uppercase tracking-[0.2em] text-xs font-bold">{t('map.subtitle')}</p>
          </div>
        </div>

        <div className="bg-[#004080] w-full min-h-[500px] grid grid-cols-1 lg:grid-cols-12 border border-[#004080]">
          <div className="lg:col-span-4 p-12 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
            <div className="relative z-10">
              <div className="mb-12">
                <MapPin className="text-white mb-6" size={32} strokeWidth={1} />
                <h3 className="text-white text-2xl font-light leading-snug mb-2">{t('map.hqTitle')}</h3>
                <p className="text-[#90A1B9] font-light">{t('map.hqSubtitle')}</p>
              </div>
              <div className="space-y-8">
                <div className="group/addr cursor-default">
                  <span className="text-[10px] uppercase tracking-widest text-[#90A1B9] font-bold block mb-2">{t('map.addressLabel')}</span>
                  <p className="text-white text-lg font-light leading-relaxed border-l-2 border-[#90A1B9] pl-4 group-hover/addr:border-white transition-colors">
                    272, Avenue Colonel Mondjiba
                    <br />
                    Commune de Ngaliema
                    <br />
                    Kinshasa, RDC
                  </p>
                </div>
              </div>
            </div>
            <div className="relative z-10 pt-12">
              <Button type="button" className="w-full bg-white text-[#004080] hover:bg-[#90A1B9] hover:text-white rounded-none h-14 uppercase tracking-widest text-xs font-bold transition-all">
                {t('map.openMaps')}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-8 relative bg-slate-800 border-l border-[#004080]/50 grayscale hover:grayscale-0 transition-all duration-700">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3978.5289567324075!2d15.2652!3d-4.3118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMTgnNDIuNSJTIDE1wrAxNSc1NC43IkU!5e0!3m2!1sen!2scd!4v1620000000000!5m2!1sen!2scd"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title={t('map.iframeTitle')}
              className="opacity-80 hover:opacity-100 transition-opacity min-h-[400px] lg:min-h-0 lg:h-full"
            ></iframe>
            <div className="absolute bottom-0 right-0 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#004080] z-10">{t('map.overlay')}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
