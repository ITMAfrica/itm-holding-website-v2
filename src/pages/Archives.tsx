import React, { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router';
import { Calendar, ArrowRight, Search, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { getLocalizedPath, resolveLanguageFromParams } from '@/i18n';

interface ArchiveItem {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  entity: string;
  year: number;
}

const ARCHIVE_IMAGES = [
  'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
];

const ITEMS_PER_PAGE = 6;

export const Archives: React.FC = () => {
  const { t } = useTranslation();
  const { lng } = useParams<{ lng: string }>();
  const currentLng = resolveLanguageFromParams(lng);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedEntity, setSelectedEntity] = useState<string>('all');
  const [currentPage, setCurrentPage] = useState(1);

  const archiveItems = t('archives.items', { returnObjects: true }) as ArchiveItem[];

  const years = useMemo(() => {
    const uniqueYears = [...new Set(archiveItems.map(item => item.year))].sort((a, b) => b - a);
    return uniqueYears;
  }, [archiveItems]);

  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(archiveItems.map(item => item.category))];
    return uniqueCategories;
  }, [archiveItems]);

  const entities = useMemo(() => {
    const uniqueEntities = [...new Set(archiveItems.map(item => item.entity))];
    return uniqueEntities;
  }, [archiveItems]);

  const filteredItems = useMemo(() => {
    return archiveItems.filter(item => {
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesYear = selectedYear === 'all' || item.year.toString() === selectedYear;
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesEntity = selectedEntity === 'all' || item.entity === selectedEntity;
      return matchesSearch && matchesYear && matchesCategory && matchesEntity;
    });
  }, [archiveItems, searchQuery, selectedYear, selectedCategory, selectedEntity]);

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  const paginatedItems = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredItems, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedYear('all');
    setSelectedCategory('all');
    setSelectedEntity('all');
    setCurrentPage(1);
  };

  const hasActiveFilters = searchQuery || selectedYear !== 'all' || selectedCategory !== 'all' || selectedEntity !== 'all';

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-cyan-200 selection:text-slate-900">
      <section className="py-16 bg-white">
        <div className="w-full px-8 lg:px-[15vw]">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-transparent"></div>
              <span className="text-cyan-600 font-bold tracking-[0.3em] uppercase text-xs">{t('archives.heroHighlight')}</span>
            </div>
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1]">
                  {t('archives.heroTitleBefore')} <span className="text-slate-400">{t('archives.heroTitleAccent')}</span>
                </h1>
                <p className="text-slate-500 mt-4 max-w-2xl">{t('archives.heroSubtitle')}</p>
              </div>
              <Button variant="outline" asChild className="rounded-none border-slate-300 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all px-6 py-4 uppercase tracking-widest text-sm font-bold">
                <Link to={getLocalizedPath('/media', currentLng)}>
                  <ArrowRight className="rotate-180 h-4 w-4 mr-2" />
                  {t('archives.backToMedia')}
                </Link>
              </Button>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 p-8 mb-12">
            <div className="flex items-center gap-3 mb-6">
              <Filter className="h-5 w-5 text-[#004080]" />
              <h3 className="text-lg font-bold text-slate-900">{t('archives.filterTitle')}</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                <Input
                  placeholder={t('archives.searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                  className="pl-10 border-slate-200 rounded-none focus:border-[#004080] focus:ring-0 h-12"
                />
              </div>

              <Select value={selectedYear} onValueChange={(value: string) => { setSelectedYear(value); setCurrentPage(1); }}>
                <SelectTrigger className="border-slate-200 rounded-none focus:ring-0 focus:border-[#004080] h-12 bg-white">
                  <SelectValue placeholder={t('archives.yearPlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('archives.allYears')}</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year.toString()}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={(value: string) => { setSelectedCategory(value); setCurrentPage(1); }}>
                <SelectTrigger className="border-slate-200 rounded-none focus:ring-0 focus:border-[#004080] h-12 bg-white">
                  <SelectValue placeholder={t('archives.categoryPlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('archives.allCategories')}</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedEntity} onValueChange={(value: string) => { setSelectedEntity(value); setCurrentPage(1); }}>
                <SelectTrigger className="border-slate-200 rounded-none focus:ring-0 focus:border-[#004080] h-12 bg-white">
                  <SelectValue placeholder={t('archives.entityPlaceholder')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">{t('archives.allEntities')}</SelectItem>
                  {entities.map(entity => (
                    <SelectItem key={entity} value={entity}>{entity}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {hasActiveFilters && (
              <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-6">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-slate-500">{t('archives.activeFilters')}</span>
                  {searchQuery && (
                    <Badge variant="secondary" className="rounded-none bg-slate-200 text-slate-700">
                      {searchQuery}
                    </Badge>
                  )}
                  {selectedYear !== 'all' && (
                    <Badge variant="secondary" className="rounded-none bg-slate-200 text-slate-700">
                      {selectedYear}
                    </Badge>
                  )}
                  {selectedCategory !== 'all' && (
                    <Badge variant="secondary" className="rounded-none bg-slate-200 text-slate-700">
                      {selectedCategory}
                    </Badge>
                  )}
                  {selectedEntity !== 'all' && (
                    <Badge variant="secondary" className="rounded-none bg-slate-200 text-slate-700">
                      {selectedEntity}
                    </Badge>
                  )}
                </div>
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  className="text-[#004080] hover:text-[#004080] hover:bg-slate-100 rounded-none"
                >
                  {t('archives.clearFilters')}
                </Button>
              </div>
            )}
          </div>

          <div className="mb-8">
            <p className="text-slate-600">
              <span className="font-bold text-slate-900">{filteredItems.length}</span> {t('archives.resultsCount')}
            </p>
          </div>

          {paginatedItems.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedItems.map((item, idx) => (
                  <Link
                    key={item.id}
                    to={getLocalizedPath(`/archives/${item.id}`, currentLng)}
                    className="group cursor-pointer bg-white border border-slate-200 hover:border-[#004080] hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden relative">
                      <img
                        src={ARCHIVE_IMAGES[idx % ARCHIVE_IMAGES.length]}
                        alt={item.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#004080] text-white rounded-none border-none font-bold px-3 py-1.5 uppercase text-[10px] tracking-wider">
                          {item.category}
                        </Badge>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 text-slate-400 text-[10px] uppercase tracking-widest mb-3">
                        <Calendar size={12} />
                        <span>{item.date}</span>
                        <span className="text-slate-300">|</span>
                        <span className="text-[#004080]">{item.entity}</span>
                      </div>

                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#004080] leading-snug mb-3 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                        {item.excerpt}
                      </p>

                      <div className="flex items-center text-[11px] font-bold uppercase tracking-widest text-[#004080] group-hover:text-cyan-600 transition-all">
                        <span className="mr-2">{t('archives.readMore')}</span>
                        <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="mt-16 flex items-center justify-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="rounded-none border-slate-300 h-12 w-12 p-0 disabled:opacity-50"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                    <Button
                      key={page}
                      variant={currentPage === page ? 'default' : 'outline'}
                      onClick={() => handlePageChange(page)}
                      className={`rounded-none h-12 w-12 p-0 ${
                        currentPage === page
                          ? 'bg-[#004080] hover:bg-[#003366] border-[#004080]'
                          : 'border-slate-300 hover:border-[#004080] hover:text-[#004080]'
                      }`}
                    >
                      {page}
                    </Button>
                  ))}

                  <Button
                    variant="outline"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="rounded-none border-slate-300 h-12 w-12 p-0 disabled:opacity-50"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{t('archives.noResults')}</h3>
              <p className="text-slate-500 mb-6">{t('archives.noResultsDesc')}</p>
              <Button
                onClick={clearFilters}
                className="bg-[#004080] hover:bg-[#003366] text-white rounded-none px-8"
              >
                {t('archives.clearFilters')}
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
