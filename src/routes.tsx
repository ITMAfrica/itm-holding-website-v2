import { createBrowserRouter, Navigate } from 'react-router';
import { MainLayout } from '@/layouts/MainLayout';
import { Home } from '@/pages/Home';
import { About } from '@/pages/About';
import { Companies } from '@/pages/Companies';
import { CompanyDetail } from '@/pages/CompanyDetail';
import { Contact } from '@/pages/Contact';
import { Industries } from '@/pages/Industries';
import { Investors } from '@/pages/Investors';
import { Media } from '@/pages/Media';
import { Archives } from '@/pages/Archives';
import { ArticleDetail } from '@/pages/ArticleDetail';
import { PrivacyPage, TermsPage, SitemapPage } from '@/pages/LegalPages';
import { LanguageWrapper } from '@/components/LanguageWrapper';
import { LangNotFoundRedirect } from '@/components/LangNotFoundRedirect';
import { languages } from '@/i18n';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={`/${languages[0]}`} replace />,
  },
  {
    path: "/:lng",
    element: <LanguageWrapper><MainLayout /></LanguageWrapper>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "companies",
        Component: Companies,
      },
      {
        path: "companies/:id",
        Component: CompanyDetail,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "industries",
        Component: Industries,
      },
      {
        path: "investors",
        Component: Investors,
      },
      {
        path: "media",
        Component: Media,
      },
      {
        path: "archives",
        Component: Archives,
      },
      {
        path: "archives/:id",
        Component: ArticleDetail,
      },
      {
        path: 'privacy',
        Component: PrivacyPage,
      },
      {
        path: 'terms',
        Component: TermsPage,
      },
      {
        path: 'sitemap',
        Component: SitemapPage,
      },
      {
        path: '*',
        Component: LangNotFoundRedirect,
      },
    ],
  },
]);
