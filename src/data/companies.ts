export type Company = {
  id: string;
  name: string;
  description: string;
  industry: string;
  services: string[];
  logo?: string;
  /** English copy when language is `en` */
  industryEn?: string;
  descriptionEn?: string;
  servicesEn?: string[];
};

export const companies: Company[] = [
  {
    id: 'itm-hr',
    name: 'ITM HR',
    industry: 'Gestion du Capital Humain',
    industryEn: 'Human capital management',
    description: 'Solutions complètes de ressources humaines, recrutement et formation.',
    descriptionEn: 'End-to-end HR, recruitment, and training solutions.',
    services: ['Recrutement', 'Formation', 'Gestion de la paie', 'Audit RH'],
    servicesEn: ['Recruitment', 'Training', 'Payroll', 'HR audit'],
  },
  {
    id: 'itm-environment',
    name: 'ITM Environment',
    industry: 'Environnement & Assainissement',
    industryEn: 'Environment & sanitation',
    description: 'Services de gestion environnementale et assainissement durable.',
    descriptionEn: 'Environmental management and sustainable sanitation services.',
    services: ['Gestion des déchets', 'Assainissement', "Études d'impact"],
    servicesEn: ['Waste management', 'Sanitation', 'Impact assessments'],
  },
  {
    id: 'itm-maintenance',
    name: 'ITM Maintenance',
    industry: 'Mines & Ingénierie',
    industryEn: 'Mining & engineering',
    description: 'Maintenance industrielle et services techniques.',
    descriptionEn: 'Industrial maintenance and technical services.',
    services: ['Maintenance préventive', 'Réparations', 'Support technique'],
    servicesEn: ['Preventive maintenance', 'Repairs', 'Technical support'],
  },
  {
    id: 'ibs',
    name: 'IBS (ITM Border Services)',
    industry: 'Services Frontaliers & Commerce',
    industryEn: 'Border services & trade',
    description: 'Facilitation du commerce transfrontalier et services logistiques.',
    descriptionEn: 'Cross-border trade facilitation and logistics services.',
    services: ['Dédouanement', 'Logistique frontalière', 'Conformité'],
    servicesEn: ['Customs clearance', 'Border logistics', 'Compliance'],
  },
  {
    id: 'itm-px',
    name: 'ITM People Xperience (Cx)',
    industry: 'Gestion du Capital Humain / Tech',
    industryEn: 'Human capital / Tech',
    description: 'Expérience employé et solutions technologiques RH.',
    descriptionEn: 'Employee experience and HR technology solutions.',
    services: ['Digital RH', 'Engagement employés', 'Systèmes SIRH'],
    servicesEn: ['Digital HR', 'Employee engagement', 'HRIS systems'],
  },
  {
    id: 'ems',
    name: 'EMS (Engineering & Maintenance Services)',
    industry: 'Mines & Ingénierie',
    industryEn: 'Mining & engineering',
    description: 'Ingénierie spécialisée et maintenance lourde.',
    descriptionEn: 'Specialised engineering and heavy maintenance.',
    services: ['Ingénierie civile', 'Maintenance lourde', 'Projets EPC'],
    servicesEn: ['Civil engineering', 'Heavy maintenance', 'EPC projects'],
  },
  {
    id: 'walumo',
    name: 'Walumo',
    industry: 'Technologie & Innovation',
    industryEn: 'Technology & innovation',
    description: 'Solutions numériques et développement logiciel.',
    descriptionEn: 'Digital solutions and software development.',
    services: ['Développement Web/Mobile', 'Transformation digitale', 'IoT'],
    servicesEn: ['Web/mobile development', 'Digital transformation', 'IoT'],
  },
  {
    id: 'itm-pharma',
    name: 'ITM Pharma',
    industry: 'Santé & Pharmacie',
    industryEn: 'Health & pharma',
    description: 'Distribution pharmaceutique et solutions de santé.',
    descriptionEn: 'Pharmaceutical distribution and healthcare solutions.',
    services: ['Distribution de médicaments', 'Équipements médicaux', 'Logistique santé'],
    servicesEn: ['Drug distribution', 'Medical equipment', 'Healthcare logistics'],
  },
  {
    id: 'geo-katanga',
    name: 'Geo-Katanga International',
    industry: 'Mines & Immobilier',
    industryEn: 'Mining & real estate',
    description: 'Services géologiques et développement immobilier minier.',
    descriptionEn: 'Geological services and mining real estate development.',
    services: ['Exploration', 'Études géologiques', 'Infrastructures minières'],
    servicesEn: ['Exploration', 'Geological studies', 'Mining infrastructure'],
  },
  {
    id: 'vendis',
    name: 'Vendis',
    industry: 'Transport & Logistique',
    industryEn: 'Transport & logistics',
    description: 'Solutions de distribution et vente.',
    descriptionEn: 'Distribution and sales solutions.',
    services: ['Distribution', 'Logistique de vente', 'Merchandising'],
    servicesEn: ['Distribution', 'Sales logistics', 'Merchandising'],
  },
  {
    id: 'jamon',
    name: 'Jamon',
    industry: 'Transport & Logistique',
    industryEn: 'Transport & logistics',
    description: 'Transport routier et logistique lourde.',
    descriptionEn: 'Road transport and heavy logistics.',
    services: ['Transport de fret', 'Logistique', 'Gestion de flotte'],
    servicesEn: ['Freight transport', 'Logistics', 'Fleet management'],
  },
  {
    id: 'ifs',
    name: 'IFS (ITM FinTech Services / Kitoko Pay)',
    industry: 'Services Financiers',
    industryEn: 'Financial services',
    description: 'Solutions fintech et paiements numériques.',
    descriptionEn: 'Fintech and digital payment solutions.',
    services: ['Paiements mobiles', 'Inclusion financière', 'Solutions de paie'],
    servicesEn: ['Mobile payments', 'Financial inclusion', 'Payroll solutions'],
  },
  {
    id: 'sagevoy',
    name: 'Sagevoy',
    industry: 'Voyages & Hôtellerie',
    industryEn: 'Travel & hospitality',
    description: 'Agence de voyage et gestion de déplacements professionnels.',
    descriptionEn: 'Travel agency and corporate mobility management.',
    services: ['Billetterie', 'Hébergement', "Voyages d'affaires"],
    servicesEn: ['Ticketing', 'Accommodation', 'Business travel'],
  },
  {
    id: 'nyumbani',
    name: 'Nyumbani Ni Tosha',
    industry: 'Immobilier & Construction',
    industryEn: 'Real estate & construction',
    description: 'Développement immobilier résidentiel et commercial.',
    descriptionEn: 'Residential and commercial real estate development.',
    services: ['Construction', 'Promotion immobilière', 'Gestion locative'],
    servicesEn: ['Construction', 'Property development', 'Property management'],
  },
  {
    id: 'kuvulu',
    name: 'Kuvulu',
    industry: 'Fabrication & Production',
    industryEn: 'Manufacturing & production',
    description: 'Production industrielle et manufacturing.',
    descriptionEn: 'Industrial production and manufacturing.',
    services: ['Usines', 'Production locale', 'Agro-industrie'],
    servicesEn: ['Plants', 'Local production', 'Agro-industry'],
  },
];

export function getLocalizedCompany(c: Company, lang: string): { industry: string; description: string; services: string[] } {
  if ((lang === 'en' || lang === 'pt') && c.descriptionEn) {
    return {
      industry: c.industryEn ?? c.industry,
      description: c.descriptionEn,
      services: c.servicesEn ?? c.services,
    };
  }
  return { industry: c.industry, description: c.description, services: c.services };
}
