import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router';
import { Calendar, ArrowLeft, ArrowRight, Facebook, Twitter, Linkedin, Printer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getLocalizedPath, resolveLanguageFromParams } from '@/i18n';

interface ArchiveItem {
  id: number;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  entity: string;
  year: number;
  content?: string;
}

const ARTICLE_IMAGES: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop',
  2: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=2069&auto=format&fit=crop',
  3: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
  4: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop',
  5: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
  6: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2070&auto=format&fit=crop',
  7: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop',
  8: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop',
};

export const ArticleDetail: React.FC = () => {
  const { t } = useTranslation();
  const { lng, id } = useParams<{ lng: string; id: string }>();
  const currentLng = resolveLanguageFromParams(lng);

  const archiveItems = t('archives.items', { returnObjects: true }) as ArchiveItem[];
  const article = archiveItems.find(item => item.id === parseInt(id || '0', 10));

  const relatedArticles = archiveItems
    .filter(item => item.id !== article?.id && item.category === article?.category)
    .slice(0, 3);

  if (!article) {
    return (
      <div className="bg-white min-h-screen font-sans selection:bg-cyan-200 selection:text-slate-900">
        <div className="w-full px-8 lg:px-[15vw] py-32 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{t('articleDetail.notFound')}</h1>
          <p className="text-slate-500 mb-8">{t('articleDetail.notFoundDesc')}</p>
          <Button asChild className="bg-[#004080] hover:bg-[#003366] text-white rounded-none">
            <Link to={getLocalizedPath('/archives', currentLng)}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('articleDetail.backToArchives')}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const articleImage = ARTICLE_IMAGES[article.id % 8] || ARTICLE_IMAGES[1];

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-cyan-200 selection:text-slate-900">
      <article>
        <header className="relative">
          <div className="aspect-[21/9] md:aspect-[21/7] overflow-hidden">
            <img
              src={articleImage}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-8 lg:px-[15vw]">
            <div className="max-w-4xl">
              <div className="flex items-center gap-4 mb-4">
                <Badge className="bg-[#004080] text-white rounded-none border-none font-bold px-4 py-2 uppercase text-[11px] tracking-wider">
                  {article.category}
                </Badge>
                <span className="text-white/80 text-sm font-medium">{article.entity}</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
                {article.title}
              </h1>

              <div className="flex items-center gap-4 text-white/70 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{article.date}</span>
                </div>
                <span>|</span>
                <span>{t('articleDetail.readingTime')}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="w-full px-8 lg:px-[15vw] py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">
                  {article.excerpt}
                </p>

                <div className="text-slate-700 leading-relaxed space-y-6">
                  <p>
                    {t('articleDetail.content1', { title: article.title, entity: article.entity })}
                  </p>
                  <p>
                    {t('articleDetail.content2', { category: article.category })}
                  </p>
                  <p>
                    {t('articleDetail.content3')}
                  </p>
                  <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">
                    {t('articleDetail.sectionTitle')}
                  </h2>
                  <p>
                    {t('articleDetail.content4')}
                  </p>
                  <blockquote className="border-l-4 border-[#004080] pl-6 italic text-slate-600 my-8">
                    "{t('articleDetail.quote')}"
                  </blockquote>
                  <p>
                    {t('articleDetail.content5')}
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                      {t('articleDetail.share')}
                    </span>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="icon" className="rounded-none h-10 w-10 border-slate-200 hover:bg-[#004080] hover:text-white hover:border-[#004080]">
                        <Facebook size={18} />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-none h-10 w-10 border-slate-200 hover:bg-[#004080] hover:text-white hover:border-[#004080]">
                        <Twitter size={18} />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-none h-10 w-10 border-slate-200 hover:bg-[#004080] hover:text-white hover:border-[#004080]">
                        <Linkedin size={18} />
                      </Button>
                      <Button variant="outline" size="icon" className="rounded-none h-10 w-10 border-slate-200 hover:bg-slate-100">
                        <Printer size={18} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-slate-200">
                <Button variant="outline" asChild className="rounded-none border-slate-300 text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all">
                  <Link to={getLocalizedPath('/archives', currentLng)}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    {t('articleDetail.backToArchives')}
                  </Link>
                </Button>
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="sticky top-8">
                <div className="bg-slate-50 border border-slate-200 p-6 mb-8">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{t('articleDetail.articleInfo')}</h3>
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('articleDetail.publishedOn')}</span>
                      <p className="text-slate-900 font-medium mt-1">{article.date}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('articleDetail.entity')}</span>
                      <p className="text-slate-900 font-medium mt-1">{article.entity}</p>
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{t('articleDetail.category')}</span>
                      <p className="text-slate-900 font-medium mt-1">{article.category}</p>
                    </div>
                  </div>
                </div>

                {relatedArticles.length > 0 && (
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 mb-4">{t('articleDetail.relatedArticles')}</h3>
                    <div className="space-y-4">
                      {relatedArticles.map((related) => (
                        <Link
                          key={related.id}
                          to={getLocalizedPath(`/archives/${related.id}`, currentLng)}
                          className="group block p-4 bg-white border border-slate-200 hover:border-[#004080] hover:shadow-md transition-all"
                        >
                          <div className="flex items-center gap-2 text-slate-400 text-xs uppercase tracking-wider mb-2">
                            <Calendar size={12} />
                            <span>{related.date}</span>
                          </div>
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#004080] transition-colors line-clamp-2">
                            {related.title}
                          </h4>
                          <div className="flex items-center text-[#004080] text-xs font-bold uppercase tracking-wider mt-3">
                            <span>{t('articleDetail.readMore')}</span>
                            <ArrowRight size={12} className="ml-1" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </aside>
          </div>
        </div>
      </article>
    </div>
  );
};
