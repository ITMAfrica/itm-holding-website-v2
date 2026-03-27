import React from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import founderImg from 'figma:asset/ee91367a767d2ed2c707479478a80f64808b443e.png';

export const FounderSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-white">
      <div className="w-full px-8 lg:px-[15vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          <div className="lg:col-span-5 relative group sticky top-24">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-slate-950/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img
                src={founderImg}
                alt="Sylva Monga"
                className="w-full aspect-[3/4] object-cover transition-transform duration-1000 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-cyan-500/30 hidden md:block"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-slate-200 hidden md:block"></div>
            </div>
            <div className="mt-6 border-l-2 border-cyan-500 pl-6">
              <h3 className="text-2xl font-bold text-slate-900 leading-tight">Sylva Monga</h3>
              <p className="text-slate-500 text-xs uppercase tracking-[0.2em] font-medium mt-1">{t('founder.role')}</p>
            </div>
          </div>

          <div className="lg:col-span-7 relative z-30">
            <div className="absolute -top-20 -left-10 text-[12rem] font-bold text-slate-50 select-none pointer-events-none leading-none z-0 opacity-60">2011</div>

            <div className="relative z-10 pt-12 bg-white">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-12 h-px bg-slate-300"></span>
                <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">{t('founder.label')}</span>
              </div>
              <h2 className="text-5xl font-bold text-slate-900 mb-5 leading-tight">
                {t('founder.title1')}
                <br />
                <span className="text-[rgb(0,64,128)] bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">{t('founder.title2')}</span>
              </h2>

              <div className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3, margin: "-150px" }}
                  transition={{ duration: 0.8 }}
                  className="prose prose-lg prose-slate text-slate-600 leading-relaxed space-y-6 pb-12"
                >
                  <p className="text-xl text-slate-900 font-light italic">&quot;{t('founder.pullQuote')}&quot;</p>
                  <p>{t('founder.p1')}</p>
                  <p>{t('founder.p2')}</p>
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
