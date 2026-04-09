import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

export const ImpactSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="w-full max-w-[1920px] mx-auto px-8 lg:px-[15vw]">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10 border-b border-slate-200 pb-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-cyan-500"></div>
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">{t('impact.label')}</span>
            </div>
            <h2 className="md:text-6xl font-light text-slate-900 leading-tight text-[64px]">
              {t('impact.titleLight')}
              <br />
              <span className="font-bold text-[64px]">{t('impact.titleBold')}</span>
            </h2>
          </div>
          <div className="flex flex-col items-end gap-4">
            <p className="text-slate-500 text-right max-w-xs text-sm leading-relaxed hidden lg:block">{t('impact.sidebar')}</p>
            <Button variant="outline" className="rounded-none border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all px-8 py-6 uppercase tracking-widest text-xs font-bold">
              {t('impact.reportCta')} <ChevronRight size={14} className="ml-2" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 min-h-[400px]">
          <div className="min-w-0 border-r border-slate-200 p-6 sm:p-8 xl:p-10 flex flex-col justify-between group hover:bg-slate-50 transition-colors duration-500">
            <div className="min-w-0">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t('impact.b1Label')}</span>
              <h3 className="text-xl font-medium text-slate-900 break-words">{t('impact.b1Title')}</h3>
            </div>
            <div className="mt-12 min-w-0">
              <div className="text-5xl sm:text-6xl xl:text-6xl 2xl:text-7xl font-light text-slate-900 mb-4 tracking-tighter group-hover:text-cyan-600 transition-colors xl:whitespace-nowrap">
                2,500<span className="text-3xl text-cyan-500 align-top font-bold">+</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-6">{t('impact.b1Body')}</p>
            </div>
          </div>

          <div className="relative min-w-0 p-6 sm:p-8 xl:p-10 flex flex-col justify-between overflow-hidden group">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1572182556191-7035e81ef95c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMHNvbGFyJTIwZW5lcmd5JTIwYWZyaWNhJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NDI1MDMxNXww&ixlib=rb-4.1.0&q=80&w=1080"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                alt=""
              />
              <div className="absolute inset-0 bg-slate-900/80 group-hover:bg-slate-900/70 transition-colors"></div>
            </div>
            <div className="relative z-10 min-w-0">
              <span className="block text-xs font-bold text-cyan-400 uppercase tracking-widest mb-2">{t('impact.b2Label')}</span>
              <h3 className="text-xl font-medium text-white break-words">{t('impact.b2Title')}</h3>
            </div>
            <div className="relative z-10 mt-12 min-w-0">
              <div className="text-5xl sm:text-6xl xl:text-6xl 2xl:text-7xl font-light text-white mb-4 tracking-tighter xl:whitespace-nowrap">
                -30<span className="text-3xl text-cyan-400 align-top font-bold">%</span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed border-t border-white/20 pt-6">{t('impact.b2Body')}</p>
            </div>
          </div>

          <div className="min-w-0 border-r border-slate-200 p-6 sm:p-8 xl:p-10 flex flex-col justify-between group hover:bg-slate-50 transition-colors duration-500">
            <div className="min-w-0">
              <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">{t('impact.b3Label')}</span>
              <h3 className="text-xl font-medium text-slate-900 break-words">{t('impact.b3Title')}</h3>
            </div>
            <div className="mt-12 min-w-0">
              <div className="text-5xl sm:text-6xl xl:text-6xl 2xl:text-7xl font-light text-slate-900 mb-4 tracking-tighter group-hover:text-cyan-600 transition-colors xl:whitespace-nowrap">
                12<span className="text-3xl text-slate-300 align-top font-medium ml-2">{t('impact.b2Countries')}</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed border-t border-slate-100 pt-6">{t('impact.b3Body')}</p>
            </div>
          </div>

          <div className="relative min-w-0 p-6 sm:p-8 xl:p-10 flex flex-col justify-between overflow-hidden group">
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1666867936058-de34bfd5b320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwZmVtYWxlJTIwY29ycG9yYXRlJTIwbGVhZGVyJTIwbWVldGluZ3xlbnwxfHx8fDE3NjQyNTAzMTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                alt=""
              />
              <div className="absolute inset-0 bg-cyan-950/90 group-hover:bg-cyan-900/80 transition-colors"></div>
            </div>
            <div className="relative z-10 min-w-0">
              <span className="block text-xs font-bold text-white/60 uppercase tracking-widest mb-2">{t('impact.b4Label')}</span>
              <h3 className="text-xl font-medium text-white break-words">{t('impact.b4Title')}</h3>
            </div>
            <div className="relative z-10 mt-12 min-w-0">
              <div className="text-5xl sm:text-6xl xl:text-6xl 2xl:text-7xl font-light text-white mb-4 tracking-tighter xl:whitespace-nowrap">
                40<span className="text-3xl text-white/60 align-top font-bold">%</span>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed border-t border-white/20 pt-6">{t('impact.b4Body')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
