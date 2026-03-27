import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router';
import { Download, Search, ArrowRight, MapPin, Image as ImageIcon } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getLocalizedPath, resolveLanguageFromParams } from '@/i18n';

interface NewsItemT {
  category: string;
  date: string;
  title: string;
  excerpt?: string;
}

interface InsightT {
  tag: string;
  title: string;
  author: string;
}

interface UpcomingEvt {
  day: string;
  month: string;
  year: string;
  title: string;
  location: string;
  type: string;
}

interface PastEvt {
  title: string;
  date: string;
}

const NEWS_IMAGES = [
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop',
  null,
  null,
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop',
];

const INSIGHT_HERO_IMAGE = 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop';

const PAST_IMAGES = [
  'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop',
];

export const Media: React.FC = () => {
  const { t } = useTranslation();
  const { lng } = useParams<{ lng: string }>();
  const currentLng = resolveLanguageFromParams(lng);

  const newsItems = t('mediaPage.news', { returnObjects: true }) as NewsItemT[];
  const insights = t('mediaPage.insights', { returnObjects: true }) as InsightT[];
  const eventsBlock = t('mediaPage.events', { returnObjects: true }) as { upcoming: UpcomingEvt[]; past: PastEvt[] };

  const featuredNews = newsItems[0];
  const restNews = newsItems.slice(1);

  const pastWithImages = useMemo(
    () => eventsBlock.past.map((p, i) => ({ ...p, image: PAST_IMAGES[i] ?? PAST_IMAGES[0] })),
    [eventsBlock.past],
  );

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-cyan-200 selection:text-slate-900">
      <HeroSection
        highlight={t('mediaPage.heroHighlight')}
        title={
          <>
            {t('mediaPage.heroTitleBefore')}
            <br />
            <span className="text-slate-400">{t('mediaPage.heroTitleAccent')}</span>
          </>
        }
        subtitle={t('mediaPage.heroSubtitle')}
        backgroundImage="https://images.unsplash.com/photo-1764083267096-7351f4d0d913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBhcmNoaXRlY3R1cmUlMjBhYnN0cmFjdCUyMGRhcmslMjBibHVlJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY0MjM4MDYyfDA&ixlib=rb-4.1.0&q=80&w=1080"
      >
        <Button type="button" className="bg-white text-slate-900 hover:bg-cyan-500 hover:text-white border-none rounded-none px-10 py-4 font-bold uppercase tracking-widest text-[15px]">
          <Download className="mr-3 h-5 w-5" /> {t('mediaPage.pressKit')}
        </Button>
      </HeroSection>

      <section className="py-24 bg-white" id="news">
        <div className="w-full px-8 lg:px-[15vw]">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10 border-b border-[#004080] pb-8">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-10 w-full lg:w-auto">
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-[#90A1B9] uppercase tracking-widest block">{t('mediaPage.filterEntity')}</span>
                <Select defaultValue="all">
                  <SelectTrigger className="w-[220px] bg-transparent border-0 border-b border-gray-200 rounded-none px-0 focus:ring-0 focus:border-[#004080] h-10 text-[#004080] font-bold shadow-none text-sm">
                    <SelectValue placeholder={t('mediaPage.entityPlaceholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('mediaPage.allEntities')}</SelectItem>
                    <SelectItem value="itm-holding">ITM Holding</SelectItem>
                    <SelectItem value="itm-mining">ITM Mining</SelectItem>
                    <SelectItem value="itm-energy">ITM Energy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-3">
                <span className="text-[11px] font-bold text-[#90A1B9] uppercase tracking-widest block">{t('mediaPage.chronology')}</span>
                <Select defaultValue="date">
                  <SelectTrigger className="w-[180px] bg-transparent border-0 border-b border-gray-200 rounded-none px-0 focus:ring-0 focus:border-[#004080] h-10 text-[#004080] font-bold shadow-none text-sm">
                    <SelectValue placeholder="Date" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="date">{t('mediaPage.newest')}</SelectItem>
                    <SelectItem value="oldest">{t('mediaPage.oldest')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="relative w-full lg:w-80 group/search">
              <Input
                placeholder={t('mediaPage.searchPlaceholder')}
                className="pl-2 justify-center items-center border-0 border-b border-gray-200 rounded-none focus:border-[#004080] focus:ring-0 placeholder:text-gray-400 text-[#004080] uppercase tracking-widest text-xs font-bold h-12 shadow-none transition-colors group-hover/search:border-gray-400"
              />
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 h-4 w-4 text-[#004080] mx-2.5" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-7 group cursor-pointer">
              <div className="relative mb-10 overflow-hidden bg-gray-100">
                <div className="absolute top-0 left-0 bg-[#004080] text-white px-5 py-3 z-20">
                  <span className="text-xs font-bold uppercase tracking-widest block">{t('mediaPage.featured')}</span>
                </div>
                {NEWS_IMAGES[0] && (
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={NEWS_IMAGES[0]}
                      alt=""
                      className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    />
                  </div>
                )}
              </div>
              <div className="space-y-6 pr-8">
                <div className="flex items-center gap-4 text-[#90A1B9] border-t border-gray-200 pt-6">
                  <span className="text-[11px] font-bold text-[#004080] uppercase tracking-widest border border-[#004080] px-3 py-1">ITM Holding</span>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gray-500">
                    {t('mediaPage.ref')}: 1 • {featuredNews?.date}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#004080] leading-none tracking-tight group-hover:text-black transition-colors duration-300">{featuredNews?.title}</h2>
                {featuredNews?.excerpt ? <p className="text-slate-600 text-lg font-normal leading-relaxed pl-1">{featuredNews.excerpt}</p> : null}
                <div className="pt-4 flex items-center gap-4">
                  <Button type="button" className="rounded-none bg-[#004080] text-white hover:bg-[#90A1B9] h-12 px-8 uppercase tracking-widest text-xs font-bold transition-all">
                    {t('mediaPage.readArticle')}
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col">
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px bg-[#004080] w-12"></div>
                <h3 className="text-xs font-bold text-[#004080] uppercase tracking-[0.2em]">{t('mediaPage.dispatches')}</h3>
              </div>
              <div className="flex-grow">
                {restNews.map((item, idx) => (
                  <div key={idx} className="group/item cursor-pointer border-t border-gray-200 py-8 first:border-t-0 hover:bg-gray-50 transition-all -mx-6 px-6">
                    <div className="flex justify-between items-start mb-3">
                      <span className="text-[11px] font-bold text-[#90A1B9] uppercase tracking-widest group-hover/item:text-[#004080] transition-colors">{item.category}</span>
                      <span className="text-[11px] font-bold text-[#90A1B9] uppercase tracking-widest">{item.date}</span>
                    </div>
                    <h4 className="text-xl font-bold text-slate-800 mb-2 leading-tight group-hover/item:text-[#004080] transition-colors">{item.title}</h4>
                    <div className="flex justify-between items-center mt-4 opacity-0 group-hover/item:opacity-100 transition-opacity">
                      <span className="text-[10px] uppercase tracking-widest text-[#004080] font-bold">ITM Holding</span>
                      <ArrowRight className="h-3 w-3 text-[#004080]" />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-gray-900">
                <Button type="button" variant="outline" asChild className="w-full border-[#004080] text-[#004080] hover:bg-[#004080] hover:text-white rounded-none h-14 uppercase tracking-widest text-xs font-bold transition-all">
                  <Link to={getLocalizedPath('/archives', currentLng)}>{t('mediaPage.archives')}</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="w-full px-8 lg:px-[15vw]">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900">{t('mediaPage.perspectivesTitle')}</h2>
            <p className="text-slate-500 mt-2">{t('mediaPage.perspectivesSubtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[500px]">
            <div className="md:col-span-2 relative group cursor-pointer overflow-hidden bg-white border border-slate-200 hover:shadow-xl transition-all">
              <img
                src={INSIGHT_HERO_IMAGE}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-12">
                <Badge className="bg-cyan-500 border-none text-white mb-4 rounded-none">{insights[0]?.tag}</Badge>
                <h3 className="text-3xl font-bold text-white mb-4 leading-tight">{insights[0]?.title}</h3>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-200 border-2 border-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover" alt="" />
                  </div>
                  <div className="text-white text-sm">
                    <div className="font-bold">{insights[0]?.author}</div>
                    <div className="text-slate-300 text-xs">{t('mediaPage.readArticleShort')}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex-1 bg-white p-8 border border-slate-200 hover:border-cyan-300 transition-colors group cursor-pointer flex flex-col justify-center">
                <div className="text-cyan-600 text-xs font-bold uppercase tracking-widest mb-3">{insights[1]?.tag}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-cyan-700">{insights[1]?.title}</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="w-full px-8 lg:px-[15vw]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-slate-900">{t('mediaPage.agenda')}</h2>
                <Button type="button" variant="outline" size="sm" className="rounded-none border-slate-300">
                  {t('mediaPage.viewCalendar')}
                </Button>
              </div>
              <div className="space-y-6">
                {eventsBlock.upcoming.map((evt, i) => (
                  <div key={i} className="flex gap-6 items-start group cursor-pointer">
                    <div className="flex flex-col items-center bg-slate-50 border border-slate-200 w-20 p-2 text-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-colors">
                      <span className="text-2xl font-bold text-slate-900 block leading-none mb-1 group-hover:text-white">{evt.day}</span>
                      <span className="text-xs font-bold text-slate-500 uppercase group-hover:text-cyan-400">{evt.month}</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600 mb-1">
                        <Badge variant="secondary" className="bg-cyan-50 text-cyan-700 hover:bg-cyan-100 border-none rounded-none px-2 py-0.5 text-[10px]">
                          {evt.type}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-cyan-600 transition-colors">{evt.title}</h3>
                      <div className="flex items-center text-sm text-slate-500">
                        <MapPin size={14} className="mr-1" /> {evt.location}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-slate-200 pt-12 lg:pt-0 lg:pl-12">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-slate-900">{t('mediaPage.galleryTitle')}</h2>
                <div className="flex gap-2">
                  <Button type="button" size="icon" variant="outline" className="rounded-none h-8 w-8">
                    <ArrowRight className="rotate-180 h-4 w-4" />
                  </Button>
                  <Button type="button" size="icon" variant="outline" className="rounded-none h-8 w-8">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 relative h-64 group overflow-hidden cursor-pointer">
                  <img src={pastWithImages[0]?.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ImageIcon className="text-white w-12 h-12" />
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full">
                    <p className="text-white font-bold">{pastWithImages[0]?.title}</p>
                    <p className="text-slate-300 text-xs">{pastWithImages[0]?.date}</p>
                  </div>
                </div>
                {pastWithImages.slice(1).map((evt, i) => (
                  <div key={i} className="relative h-40 group overflow-hidden cursor-pointer">
                    <img src={evt.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="" />
                    <div className="absolute bottom-0 left-0 p-3 bg-gradient-to-t from-black/80 to-transparent w-full">
                      <p className="text-white text-sm font-bold truncate">{evt.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
