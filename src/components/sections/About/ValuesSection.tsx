import React from 'react';
import { CheckCircle, Award, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ValuesSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="w-full px-8 lg:px-[15vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-[90px] items-end px-[12px] py-[0px] mt-[0px] mr-[-30px] ml-[-10px]">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#004080]"></span>
              <span className="text-[#004080] font-bold tracking-widest uppercase text-xs">{t('values.principles')}</span>
            </div>
            <h2 className="md:text-5xl font-bold text-slate-900 leading-none uppercase tracking-tight text-[48px]">
              {t('values.title1')}
              <br />
              {t('values.title2')}
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-slate-600 text-lg leading-relaxed font-light pl-8 border-l border-slate-200">{t('values.intro')}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-slate-200">
          <div className="group border-b md:border-b-0 md:border-r border-slate-200 p-12 relative overflow-hidden transition-all duration-500 cursor-default">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#004080] to-[#001a33] opacity-95"></div>
              <img
                src="https://images.unsplash.com/photo-1760627927489-c0dc59976f13?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBhcmNoaXRlY3R1cmUlMjBkZXRhaWwlMjBibHVlJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzY5MTYxODE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt=""
                className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              />
            </div>
            <div className="relative z-10">
              <div className="mb-8 text-[#90A1B9] group-hover:text-cyan-400 transition-colors duration-500">
                <CheckCircle size={40} strokeWidth={1} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 group-hover:text-white mb-6 uppercase tracking-widest transition-colors duration-500">
                {t('values.integrityTitle')}
                <br />
                <span className="text-[#90A1B9] group-hover:text-blue-200/60 text-sm normal-case tracking-normal block mt-1 transition-colors duration-500">
                  {t('values.integritySub')}
                </span>
              </h3>
              <p className="text-slate-500 group-hover:text-blue-100 leading-relaxed font-light transition-colors duration-500">{t('values.integrityBody')}</p>
            </div>
          </div>

          <div className="group border-b md:border-b-0 md:border-r border-slate-200 p-12 hover:bg-[#004080] transition-colors duration-500 cursor-default">
            <div className="mb-8 text-[#90A1B9] group-hover:text-white transition-colors duration-500">
              <Award size={40} strokeWidth={1} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-white mb-6 uppercase tracking-widest transition-colors duration-500">
              {t('values.qualityTitle')}
              <br />
              <span className="text-[#90A1B9] group-hover:text-blue-200 text-sm normal-case tracking-normal block mt-1 transition-colors duration-500">
                {t('values.qualitySub')}
              </span>
            </h3>
            <p className="text-slate-500 group-hover:text-blue-100 leading-relaxed font-light transition-colors duration-500">{t('values.qualityBody')}</p>
          </div>

          <div className="group p-12 hover:bg-[#004080] transition-colors duration-500 cursor-default">
            <div className="mb-8 text-[#90A1B9] group-hover:text-white transition-colors duration-500">
              <Users size={40} strokeWidth={1} />
            </div>
            <h3 className="text-lg font-bold text-slate-900 group-hover:text-white mb-6 uppercase tracking-widest transition-colors duration-500">
              {t('values.loyaltyTitle')}
              <br />
              <span className="text-[#90A1B9] group-hover:text-blue-200 text-sm normal-case tracking-normal block mt-1 transition-colors duration-500">
                {t('values.loyaltySub')}
              </span>
            </h3>
            <p className="text-slate-500 group-hover:text-blue-100 leading-relaxed font-light transition-colors duration-500">{t('values.loyaltyBody')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
