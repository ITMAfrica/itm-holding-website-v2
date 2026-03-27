import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { ArrowRight, HardHat, Zap, Briefcase, Truck, Shield, Database, Users, type LucideIcon } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyeSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzYzNjQ4MjYyfDA&ixlib=rb-4.1.0&q=80&w=1920';
const INDUSTRY_IMG_1 =
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb258ZW58MXx8fHwxNzY0MTQzNzY2fDA&ixlib=rb-4.1.0&q=80&w=800';
const INDUSTRY_IMG_2 =
  'https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5fGVufDF8fHx8MTc2NDE0Mzc2Nnww&ixlib=rb-4.1.0&q=80&w=800';
const INDUSTRY_IMG_3 =
  'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyZXxlbnwxfHx8fDE3NjQxNDM3NjZ8MA&ixlib=rb-4.1.0&q=80&w=800';

const SECTOR_IDS = ['mining', 'energy', 'hr', 'logistics', 'security', 'tech', 'consulting'] as const;
type SectorId = (typeof SECTOR_IDS)[number];

const ICONS: Record<SectorId, LucideIcon> = {
  mining: HardHat,
  energy: Zap,
  hr: Users,
  logistics: Truck,
  security: Shield,
  tech: Database,
  consulting: Briefcase,
};

export const Industries: React.FC = () => {
  const { t } = useTranslation();

  const industries = useMemo(
    () =>
      SECTOR_IDS.map((id) => ({
        id,
        icon: ICONS[id],
        name: t(`industriesPage.sectors.${id}.name`),
        description: t(`industriesPage.sectors.${id}.description`),
        stats: t(`industriesPage.sectors.${id}.stats`),
      })),
    [t],
  );

  const statBlocks = [
    { labelKey: 'industriesPage.stat1Label', value: '15 000+' },
    { labelKey: 'industriesPage.stat2Label', value: '20+' },
    { labelKey: 'industriesPage.stat3Label', value: '16+' },
    { labelKey: 'industriesPage.stat4Label', value: '500+' },
  ];

  const bgImages = [
    'https://images.unsplash.com/photo-1579551157243-36a01e4a5380?q=80&w=800',
    'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800',
    'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800',
    'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800',
    'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800',
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-cyan-200 selection:text-slate-900">
      <HeroSection
        highlight={t('industriesPage.heroHighlight')}
        title={
          <>
            {t('industriesPage.heroTitleBefore')}
            <br />
            <span className="text-[#90A1B9] bg-clip-text ">{t('industriesPage.heroTitleAccent')}</span>
          </>
        }
        subtitle={t('industriesPage.heroSubtitle')}
        backgroundImage={HERO_IMAGE}
      />

      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-[15vw]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 relative">
              <div className="text-9xl font-black text-slate-100 absolute -top-20 -left-10 z-0 leading-none select-none">{t('industriesPage.manifestoBg')}</div>
              <h2 className="text-4xl font-bold text-slate-900 relative z-10 mb-6 uppercase tracking-tight">
                {t('industriesPage.manifestoTitle1')}
                <br />
                {t('industriesPage.manifestoTitle2')}
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 relative z-10 font-light">{t('industriesPage.manifestoBody')}</p>
            </div>
            <div className="lg:col-span-7 border-l border-slate-200 pl-8 lg:pl-16 py-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-16">
                {statBlocks.map((stat, i) => (
                  <div key={i} className="relative group">
                    <div className="text-5xl font-bold text-[#004080] mb-3 tracking-tighter group-hover:translate-x-1 transition-transform duration-300 text-[rgb(0,0,0)]">{stat.value}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-[0.3em] font-bold leading-tight max-w-[200px] border-t border-slate-100 pt-4 group-hover:border-[#004080]/30 transition-colors duration-300">
                      {t(stat.labelKey)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="w-full px-8 lg:px-[15vw]">
          <div className="text-center mb-16">
            <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs mb-2 block">{t('industriesPage.bentoLabel')}</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('industriesPage.bentoTitle')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 grid-rows-[auto_auto_auto] gap-4 md:h-[800px]">
            <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-2 md:row-span-2 relative rounded-none overflow-hidden group">
              <img src={INDUSTRY_IMG_2} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-8 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-bold mb-2">{t('industriesPage.smartMiningTitle')}</h3>
                <p className="text-slate-200">{t('industriesPage.smartMiningBody')}</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ scale: 0.99 }} className="md:col-span-1 md:row-span-2 relative rounded-none overflow-hidden bg-slate-900 group">
              <img src={INDUSTRY_IMG_1} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500" alt="" />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white">
                  <HardHat size={20} />
                </div>
                <div>
                  <h3 className="text-white text-xl font-bold mb-2">{t('industriesPage.infraTitle')}</h3>
                  <p className="text-slate-300 text-sm">{t('industriesPage.infraBody')}</p>
                </div>
              </div>
            </motion.div>

            <div className="md:col-span-1 bg-cyan-500 rounded-none p-6 text-white flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute -right-4 -top-4 bg-white/20 w-24 h-24 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <Zap className="mb-4 w-8 h-8" />
              <h3 className="font-bold text-xl mb-1 text-[rgb(255,255,255)]">{t('industriesPage.greenTitle')}</h3>
              <p className="text-cyan-50 text-sm">{t('industriesPage.greenBody')}</p>
            </div>

            <div className="md:col-span-1 relative rounded-none overflow-hidden group">
              <img src={INDUSTRY_IMG_3} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#004080]/90 via-[#004080]/20 to-transparent p-8 flex flex-col justify-between transition-all duration-500">
                <div className="flex justify-start">
                  <div className="bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 text-white text-[9px] font-bold uppercase tracking-[0.2em]">{t('industriesPage.hrBadge')}</div>
                </div>
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                  <h3 className="text-white font-bold leading-tight mb-2 text-[17px]">
                    {t('industriesPage.hrTitle')}
                    <br />
                    {t('industriesPage.hrTitle2')}
                  </h3>
                  <p className="text-blue-100/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">{t('industriesPage.hrBody')}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="sectors" className="py-20 bg-slate-50 border-t border-slate-200 overflow-hidden">
        <div className="w-full px-8 lg:px-[15vw] mb-10 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-cyan-600"></div>
              <span className="text-xs font-bold text-cyan-600 uppercase tracking-widest">{t('industriesPage.listLabel')}</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{t('industriesPage.listTitle')}</h2>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{t('industriesPage.navigate')}</span>
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
                <ArrowRight className="rotate-180" size={18} />
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-8 lg:px-[15vw] max-w-[2400px] mx-auto pb-24">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="w-full aspect-[3/4] relative group overflow-hidden bg-slate-900 cursor-pointer border border-slate-800"
              >
                <img
                  src={bgImages[index % bgImages.length]}
                  alt={industry.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-90"></div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 transition-colors duration-500 z-20 pointer-events-none"></div>
                <div className="absolute inset-0 p-3 md:p-4 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 rounded bg-white/5 backdrop-blur-sm flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-cyan-600 transition-all duration-300">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                  </div>
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="md:text-2xl font-bold text-white mb-2 leading-tight text-[24px]">{industry.name}</h3>
                    <p className="text-sm text-slate-400 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{industry.description}</p>
                    <div className="flex items-center gap-2 text-xs font-bold text-cyan-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {t('industriesPage.explore')} <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
