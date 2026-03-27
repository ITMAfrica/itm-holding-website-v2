import React from 'react';
import { Link, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getLocalizedPath, resolveLanguageFromParams } from '@/i18n';

interface NewsItem {
  category: string;
  date: string;
  title: string;
}

const IMAGES = [
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop',
];

export const NewsSection: React.FC = () => {
  const { t } = useTranslation();
  const { lng } = useParams<{ lng: string }>();
  const currentLng = resolveLanguageFromParams(lng);
  const items = t('news.items', { returnObjects: true }) as NewsItem[];

  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="w-full px-8 lg:px-[15vw]">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-gradient-to-r from-cyan-500 to-transparent"></div>
            <span className="text-cyan-600 font-bold tracking-[0.3em] uppercase text-xs">{t('news.sectionLabel')}</span>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.1]">{t('news.title')}</h2>
            <Button variant="outline" asChild className="rounded-none border-slate-300 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all px-6 py-4 uppercase tracking-widest text-[20px] font-bold">
              <Link to={getLocalizedPath('/media', currentLng)}>{t('news.readNews')}</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-slate-200">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group cursor-pointer border-r border-b border-slate-200 bg-white hover:bg-slate-950 transition-all duration-500 relative overflow-hidden"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={IMAGES[idx] ?? IMAGES[0]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-20"
                />
                <div className="absolute top-4 left-4 opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <Badge className="bg-white/90 backdrop-blur-sm text-slate-900 rounded-none border-none font-bold px-3 py-1.5 uppercase text-[10px] tracking-wider">
                    {item.category}
                  </Badge>
                </div>
              </div>

              <div className="p-6 min-h-[220px] flex flex-col justify-between">
                <div className="flex items-center gap-2 text-slate-400 group-hover:text-slate-500 text-[10px] uppercase tracking-widest mb-4 transition-colors">
                  <Calendar size={10} />
                  <span>{item.date}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-white leading-snug mb-6 transition-colors duration-300">{item.title}</h3>

                <div className="flex items-center text-[11px] font-bold uppercase tracking-widest text-cyan-600 group-hover:text-cyan-400 transition-all">
                  <span className="mr-2">{t('news.readArticle')}</span>
                  <ArrowRight size={14} className="transform group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        <div className="h-12"></div>
      </div>
    </section>
  );
};
