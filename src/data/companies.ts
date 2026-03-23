
export type Company = {
  id: string;
  name: string;
  description: string;
  industry: string;
  services: string[];
  logo?: string;
};

export const companies: Company[] = [
  {
    id: "itm-hr",
    name: "ITM HR",
    industry: "Gestion du Capital Humain",
    description: "Solutions complètes de ressources humaines, recrutement et formation.",
    services: ["Recrutement", "Formation", "Gestion de la paie", "Audit RH"]
  },
  {
    id: "itm-environment",
    name: "ITM Environment",
    industry: "Environnement & Assainissement",
    description: "Services de gestion environnementale et assainissement durable.",
    services: ["Gestion des déchets", "Assainissement", "Études d'impact"]
  },
  {
    id: "itm-maintenance",
    name: "ITM Maintenance",
    industry: "Mines & Ingénierie",
    description: "Maintenance industrielle et services techniques.",
    services: ["Maintenance préventive", "Réparations", "Support technique"]
  },
  {
    id: "ibs",
    name: "IBS (ITM Border Services)",
    industry: "Services Frontaliers & Commerce",
    description: "Facilitation du commerce transfrontalier et services logistiques.",
    services: ["Dédouanement", "Logistique frontalière", "Conformité"]
  },
  {
    id: "itm-px",
    name: "ITM People Xperience (Cx)",
    industry: "Gestion du Capital Humain / Tech",
    description: "Expérience employé et solutions technologiques RH.",
    services: ["Digital RH", "Engagement employés", "Systèmes SIRH"]
  },
  {
    id: "ems",
    name: "EMS (Engineering & Maintenance Services)",
    industry: "Mines & Ingénierie",
    description: "Ingénierie spécialisée et maintenance lourde.",
    services: ["Ingénierie civile", "Maintenance lourde", "Projets EPC"]
  },
  {
    id: "walumo",
    name: "Walumo",
    industry: "Technologie & Innovation",
    description: "Solutions numériques et développement logiciel.",
    services: ["Développement Web/Mobile", "Transformation digitale", "IoT"]
  },
  {
    id: "itm-pharma",
    name: "ITM Pharma",
    industry: "Santé & Pharmacie",
    description: "Distribution pharmaceutique et solutions de santé.",
    services: ["Distribution de médicaments", "Équipements médicaux", "Logistique santé"]
  },
  {
    id: "geo-katanga",
    name: "Geo-Katanga International",
    industry: "Mines & Immobilier",
    description: "Services géologiques et développement immobilier minier.",
    services: ["Exploration", "Études géologiques", "Infrastructures minières"]
  },
  {
    id: "vendis",
    name: "Vendis",
    industry: "Transport & Logistique",
    description: "Solutions de distribution et vente.",
    services: ["Distribution", "Logistique de vente", "Merchandising"]
  },
  {
    id: "jamon",
    name: "Jamon",
    industry: "Transport & Logistique",
    description: "Transport routier et logistique lourde.",
    services: ["Transport de fret", "Logistique", "Gestion de flotte"]
  },
  {
    id: "ifs",
    name: "IFS (ITM FinTech Services / Kitoko Pay)",
    industry: "Services Financiers",
    description: "Solutions fintech et paiements numériques.",
    services: ["Paiements mobiles", "Inclusion financière", "Solutions de paie"]
  },
  {
    id: "sagevoy",
    name: "Sagevoy",
    industry: "Voyages & Hôtellerie",
    description: "Agence de voyage et gestion de déplacements professionnels.",
    services: ["Billetterie", "Hébergement", "Voyages d'affaires"]
  },
  {
    id: "nyumbani",
    name: "Nyumbani Ni Tosha",
    industry: "Immobilier & Construction",
    description: "Développement immobilier résidentiel et commercial.",
    services: ["Construction", "Promotion immobilière", "Gestion locative"]
  },
  {
    id: "kuvulu",
    name: "Kuvulu",
    industry: "Fabrication & Production",
    description: "Production industrielle et manufacturing.",
    services: ["Usines", "Production locale", "Agro-industrie"]
  }
];
