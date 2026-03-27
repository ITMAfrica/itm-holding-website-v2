import React from 'react';
import { Navigate, useParams } from 'react-router';
import { isLanguage, languages } from '@/i18n';

/** Unknown child paths under `/:lng` redirect to the same language home. */
export const LangNotFoundRedirect: React.FC = () => {
  const { lng } = useParams<{ lng: string }>();
  const safe = isLanguage(lng) ? lng : languages[0];
  return <Navigate to={`/${safe}`} replace />;
};
