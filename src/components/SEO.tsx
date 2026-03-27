import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { isLanguage, languages } from '@/i18n';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
}

export const SEO: React.FC<SEOProps> = ({ title, description, keywords, image = '/favicon.png' }) => {
  const { i18n } = useTranslation();
  const siteUrl = 'https://itmholding.com';
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;
  const htmlLang = isLanguage(i18n.language) ? i18n.language : languages[0];

  return (
    <Helmet>
      <html lang={htmlLang} />
      <title>{title} | ITM Holding</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={`${title} | ITM Holding`} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | ITM Holding`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
};
