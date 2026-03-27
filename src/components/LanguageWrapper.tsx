import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router';
import { useTranslation } from 'react-i18next';
import { isLanguage, languages } from '@/i18n';

interface LanguageWrapperProps {
  children: React.ReactNode;
}

export const LanguageWrapper: React.FC<LanguageWrapperProps> = ({ children }) => {
  const { lng } = useParams<{ lng: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (isLanguage(lng)) {
      document.documentElement.lang = lng;
    }
  }, [lng]);

  if (!isLanguage(lng)) {
    return <Navigate to={`/${languages[0]}`} replace />;
  }

  if (i18n.language !== lng) {
    i18n.changeLanguage(lng);
  }

  return <>{children}</>;
};
