
import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Companies } from './pages/Companies';
import { CompanyDetail } from './pages/CompanyDetail';
import { Contact } from './pages/Contact';
import { Industries } from './pages/Industries';
import { Investors } from './pages/Investors';
import { Media } from './pages/Media';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
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
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
