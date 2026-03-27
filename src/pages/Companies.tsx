import React, { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Search, X, Briefcase, LayoutGrid, List } from 'lucide-react';
import { companies, getLocalizedCompany } from '@/data/companies';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { HeroSection } from '@/components/HeroSection';
import { getLocalizedPath, resolveLanguageFromParams } from '@/i18n';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop';

function withLocale(c: (typeof companies)[number], lang: string) {
  const loc = getLocalizedCompany(c, lang);
  return { ...c, industry: loc.industry, description: loc.description, services: loc.services };
}

export const Companies: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { lng } = useParams<{ lng: string }>();
  const currentLng = resolveLanguageFromParams(lng);
  const lp = (path: string) => getLocalizedPath(path, currentLng);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState<string | 'all'>('all');
  const [selectedService, setSelectedService] = useState<string | 'all'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const localizedList = useMemo(
    () => companies.map((c) => withLocale(c, i18n.language)),
    [i18n.language],
  );

  const industries = useMemo(() => {
    return Array.from(new Set(localizedList.map((c) => c.industry))).sort();
  }, [localizedList]);

  const services = useMemo(() => {
    const allServices = localizedList.flatMap((c) => c.services);
    return Array.from(new Set(allServices)).sort();
  }, [localizedList]);

  const filteredCompanies = useMemo(() => {
    return localizedList.filter((company) => {
      const matchesSearch =
        company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.services.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesIndustry = selectedIndustry === 'all' || company.industry === selectedIndustry;
      const matchesService = selectedService === 'all' || company.services.includes(selectedService);

      return matchesSearch && matchesIndustry && matchesService;
    });
  }, [localizedList, searchQuery, selectedIndustry, selectedService]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedIndustry('all');
    setSelectedService('all');
  };

  const bgImages = [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800',
    'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800',
    'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=800',
    'https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=800',
  ];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-cyan-200 selection:text-slate-900">
      <HeroSection
        highlight={t('companiesPage.heroHighlight')}
        title={
          <>
            {t('companiesPage.heroTitleBefore')}
            <br />
            <span className="text-[#90A1B9] bg-clip-text">{t('companiesPage.heroTitleAccent')}</span>
          </>
        }
        subtitle={t('companiesPage.heroSubtitle')}
        backgroundImage={HERO_IMAGE}
      />

      <section className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all">
        <div className="w-full px-8 lg:px-[15vw] py-6">
          <div className="flex flex-col lg:flex-row gap-6 justify-between items-center">
            <div className="relative w-full lg:max-w-md group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-600 transition-colors h-4 w-4" />
              <Input
                placeholder={t('companiesPage.searchPlaceholder')}
                className="pl-10 bg-slate-50 border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20 h-12 rounded-none text-base"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                <SelectTrigger className="w-full sm:w-[200px] h-12 rounded-none border-slate-200 bg-white">
                  <SelectValue placeholder={t('companiesPage.industryPlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('companiesPage.allIndustries')}</SelectItem>
                  {industries.map((ind) => (
                    <SelectItem key={ind} value={ind}>
                      {ind}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedService} onValueChange={setSelectedService}>
                <SelectTrigger className="w-full sm:w-[200px] h-12 rounded-none border-slate-200 bg-white">
                  <SelectValue placeholder={t('companiesPage.servicePlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('companiesPage.allServices')}</SelectItem>
                  {services.map((srv) => (
                    <SelectItem key={srv} value={srv}>
                      {srv}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2 border-l border-slate-200 pl-4 ml-2">
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'text-cyan-600 bg-cyan-50' : 'text-slate-400 hover:text-slate-900'}
                >
                  <LayoutGrid size={20} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'text-cyan-600 bg-cyan-50' : 'text-slate-400 hover:text-slate-900'}
                >
                  <List size={20} />
                </Button>
              </div>
            </div>
          </div>

          {(selectedIndustry !== 'all' || selectedService !== 'all' || searchQuery) && (
            <div className="flex items-center gap-2 mt-4 text-sm animate-in fade-in slide-in-from-top-2 flex-wrap">
              <span className="text-slate-400 mr-2">{t('companiesPage.activeFilters')}</span>
              {selectedIndustry !== 'all' && (
                <Badge variant="secondary" className="rounded-none bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200 gap-2 pl-3 pr-1">
                  {selectedIndustry}
                  <X size={14} className="cursor-pointer hover:text-red-500" onClick={() => setSelectedIndustry('all')} />
                </Badge>
              )}
              {selectedService !== 'all' && (
                <Badge variant="secondary" className="rounded-none bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200 gap-2 pl-3 pr-1">
                  {selectedService}
                  <X size={14} className="cursor-pointer hover:text-red-500" onClick={() => setSelectedService('all')} />
                </Badge>
              )}
              {searchQuery && (
                <Badge variant="secondary" className="rounded-none bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200 gap-2 pl-3 pr-1">
                  &quot;{searchQuery}&quot;
                  <X size={14} className="cursor-pointer hover:text-red-500" onClick={() => setSearchQuery('')} />
                </Badge>
              )}
              <Button variant="link" type="button" className="text-slate-500 hover:text-slate-900 text-xs h-auto p-0 ml-4" onClick={clearFilters}>
                {t('companiesPage.clearAll')}
              </Button>
            </div>
          )}
        </div>
      </section>

      <section className="py-20 bg-slate-50 min-h-[600px]">
        <div className="w-full px-8 lg:px-[15vw]">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-slate-200 pb-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-cyan-600"></span>
                <span className="text-cyan-600 font-bold tracking-widest uppercase text-xs">{t('companiesPage.portfolioLabel')}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-light text-slate-900 leading-tight">
                {t('companiesPage.polesTitle1')} <br />
                <span className="font-bold">{t('companiesPage.polesTitle2')}</span>
              </h2>
            </div>

            <div className="flex flex-col items-end mt-8 md:mt-0">
              <div className="text-7xl md:text-8xl font-light text-slate-100 leading-none tracking-tighter">
                {filteredCompanies.length.toString().padStart(2, '0')}
              </div>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">
                {filteredCompanies.length > 1 ? t('companiesPage.entitiesActive') : t('companiesPage.entityActive')}
              </p>
            </div>
          </div>

          <AnimatePresence mode="popLayout">
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12' : 'flex flex-col gap-4'}>
              {filteredCompanies.map((company, index) => {
                if (viewMode === 'grid') {
                  return (
                    <motion.div
                      layout
                      key={company.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="w-full aspect-[3/4] relative group overflow-hidden bg-slate-900 border border-slate-800 shadow-xl"
                    >
                      <Link to={lp(`/companies/${company.id}`)} className="block w-full h-full relative">
                        <img
                          src={bgImages[index % bgImages.length]}
                          alt={company.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent opacity-90"></div>
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-cyan-500/50 transition-colors duration-500 z-20 pointer-events-none"></div>
                        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between z-10">
                          <div className="flex justify-between items-start">
                            <div className="flex flex-col">
                              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest mb-1 truncate max-w-[150px]">{company.industry}</span>
                              <div className="w-8 h-[1px] bg-slate-600 group-hover:w-12 group-hover:bg-cyan-500 transition-all duration-500"></div>
                            </div>
                            <div className="w-10 h-10 rounded bg-white/5 backdrop-blur-sm flex items-center justify-center text-slate-300 group-hover:text-white group-hover:bg-cyan-600 transition-all duration-300 shrink-0">
                              <Briefcase size={20} strokeWidth={1.5} />
                            </div>
                          </div>
                          <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight">{company.name}</h3>
                            <p className="text-sm text-slate-400 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{company.description}</p>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    layout
                    key={company.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link to={lp(`/companies/${company.id}`)} className="block h-full">
                      <div className="group bg-white border border-slate-200 h-full transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 flex flex-col md:flex-row gap-6 p-6 items-center">
                        <div className="flex justify-between items-start md:w-1/4 mb-0">
                          <div className="w-14 h-14 bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-900 font-bold text-xl group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                            {company.name.substring(0, 2).toUpperCase()}
                          </div>
                        </div>
                        <div className="flex-1 text-left">
                          <div className="mb-4">
                            <div className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-1">{company.industry}</div>
                            <h3 className="text-2xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">{company.name}</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">{company.description}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {company.services.slice(0, 3).map((s) => (
                              <span key={s} className="text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-1 uppercase tracking-wide">
                                {s}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="border-t border-slate-100 pt-6 flex items-center justify-between md:w-auto md:border-t-0 md:pt-0 md:pl-6 md:border-l">
                          <span className="text-sm font-bold text-slate-900 group-hover:text-cyan-600 transition-colors mr-4">{t('companiesPage.discover')}</span>
                          <ArrowRight className="text-slate-300 group-hover:text-cyan-600 group-hover:translate-x-2 transition-all duration-300" size={18} />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {filteredCompanies.length === 0 && (
              <div className="text-center py-24">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6 text-slate-400">
                  <Search size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{t('companiesPage.noResultsTitle')}</h3>
                <p className="text-slate-500 max-w-md mx-auto">{t('companiesPage.noResultsBody')}</p>
                <Button variant="link" type="button" onClick={clearFilters} className="mt-4 text-cyan-600">
                  {t('companiesPage.resetFilters')}
                </Button>
              </div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};
