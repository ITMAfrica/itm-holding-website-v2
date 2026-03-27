import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const TEAM_IMAGE =
  'https://images.unsplash.com/photo-1573164574511-73c773193279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwYWZyaWNhbiUyMGJ1c2luZXNzJTIwdGVhbSUyG1lYXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzYzNjQ2OTAxfDA&ixlib=rb-4.1.0&q=80&w=1080';

export const MissionVisionSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="w-full px-8 lg:px-[15vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-150px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative group"
          >
            <div className="h-full relative overflow-hidden bg-slate-100">
              <img src={TEAM_IMAGE} alt="ITM Team" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              <div className="absolute top-0 right-0 w-32 h-32 border-t border-r border-[#90A1B9]/30"></div>
              <div className="absolute bottom-12 left-12 bg-white p-10 border-l-4 border-[#90A1B9] shadow-2xl max-w-[90%]">
                <Quote className="text-[#90A1B9] mb-6 opacity-20" size={40} />
                <p className="text-2xl font-light text-slate-900 leading-tight mb-6">{t('mission.quote')}</p>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-px bg-[#90A1B9]"></div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#90A1B9]">{t('mission.quoteAuthor')}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3, margin: "-150px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center py-12"
          >
            <div className="mb-16">
              <span className="text-[#90A1B9] text-sm font-bold uppercase tracking-[0.4em] mb-4 block">{t('mission.label')}</span>
              <h2 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">{t('mission.identityTitle')}</h2>
              <p className="text-slate-500 text-xl leading-relaxed max-w-2xl font-light">{t('mission.identityBody')}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#90A1B9]"></div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">{t('mission.missionTitle')}</h3>
                </div>
                <p className="text-slate-500 leading-relaxed font-light pl-5 border-l border-slate-100">{t('mission.missionBody')}</p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-slate-300"></div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-900">{t('mission.visionTitle')}</h3>
                </div>
                <p className="text-slate-500 leading-relaxed font-light pl-5 border-l border-slate-100">{t('mission.visionBody')}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
