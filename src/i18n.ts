import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { enTranslation } from './locales/enTranslation';
import { ptTranslation } from './locales/ptTranslation';

/** Add codes here and matching `resources[code]` blocks when introducing a locale */
export const languages = ['fr', 'en', 'pt'] as const;
export type Language = (typeof languages)[number];

export function isLanguage(code: string | undefined): code is Language {
  return code !== undefined && languages.includes(code as Language);
}

/** Route param + optional i18n.language fallback (e.g. header outside strict match). */
export function resolveLanguageFromParams(lng: string | undefined, i18nLng?: string): Language {
  if (isLanguage(lng)) return lng;
  if (isLanguage(i18nLng)) return i18nLng;
  return languages[0];
}

const LANG_PATH_RE = new RegExp(`^\\/(${languages.join('|')})(\\/.*)?$`);

export function getPathWithoutLang(pathname: string): string {
  const m = pathname.match(LANG_PATH_RE);
  if (!m) return pathname.startsWith('/') ? pathname : `/${pathname}`;
  return m[2] ?? '/';
}

const resources = {
  fr: {
    translation: {
      header: {
        contactCta: 'Contactez-nous',
        langFr: 'FR',
        langEn: 'EN',
        langPt: 'PT',
        langFrName: 'Français',
        langEnName: 'Anglais',
        langPtName: 'Portugais',
        languagesAria: 'Langues',
      },
      nav: {
        home: 'Accueil',
        about: 'À propos',
        services: 'Services',
        contact: 'Contact',
        companies: 'Nos entreprises',
        industries: 'Industries',
        investors: 'Investisseurs',
        media: 'Médias et impact',
      },
      footer: {
        tagline:
          "Leader panafricain multisectoriel, nous transformons le potentiel du continent en performance durable à travers l'excellence opérationnelle et l'innovation.",
        group: 'Groupe',
        expertise: 'Expertise',
        contact: 'Contact',
        privacy: 'Confidentialité',
        terms: 'Conditions',
        sitemap: 'Plan du Site',
        rights: 'Tous droits réservés',
        groupLinks: ['À Propos', 'Gouvernance', 'Nos Filiales', 'Investisseurs', 'Médias et Impact'],
        expertiseLinks: ['Ressources Humaines', 'Mines & Industrie', 'Logistique', 'Technologie', 'Santé', 'Construction'],
        address: '272, Avenue Colonel Mondjiba,<br/>Kinshasa – Ngaliema, RDC',
      },
      home: {
        portfolioLabel: 'Notre Portefeuille',
        portfolioTitle1: 'Un groupe',
        portfolioTitle2: '15 industries',
        portfolioBody:
          "De la gestion des ressources humaines à l'ingénierie minière, ITM Holding excelle grâce à une intégration verticale unique qui nous permet de contrôler la qualité à chaque étape de la chaîne de valeur.",
        portfolioCta: 'Explorer toutes les filiales',
      },
      hero: {
        slide1_title: "L'Excellence",
        slide1_colored: 'africaine',
        slide1_subtitle:
          "Un conglomérat panafricain visionnaire, bâtissant l'avenir à travers 15 industries clés.",
        slide1_highlight: 'Vision',
        slide2_title: 'Innovation',
        slide2_colored: 'industrielle',
        slide2_subtitle:
          'Des solutions minières et industrielles de pointe, adaptées aux défis du continent.',
        slide2_highlight: 'Expertise',
        slide3_title: 'Capital',
        slide3_colored: 'humain',
        slide3_subtitle:
          "Plus de 15 000 collaborateurs unis par une culture de performance et d'intégrité.",
        slide3_highlight: 'Talent',
        slide4_title: 'Connectivité',
        slide4_colored: 'globale',
        slide4_subtitle:
          'Une présence dans 22 pays, reliant les marchés locaux aux opportunités mondiales.',
        slide4_highlight: 'Réseau',
        ctaPrimary: 'Découvrir notre impact',
        ctaSecondary: 'Nos filiales',
      },
      stats: {
        years: "Années d'Excellence",
        subsidiaries: 'Filiales Spécialisées',
        countries: "Pays d'Opérations",
        partners: 'Partenaires de Confiance',
      },
      mission: {
        quote: "L'Afrique n'est pas seulement notre marché, c'est notre maison.",
        quoteAuthor: 'Sylva Monga, Chairman',
        label: 'Héritage & Vision',
        identityTitle: 'Notre identité',
        identityBody:
          'Nous sommes guidés par une ambition unique : transformer le potentiel brut du continent en performance durable. Notre approche fusionne les standards internationaux les plus rigoureux avec un ancrage local profond.',
        missionTitle: 'Notre Mission',
        missionBody:
          "Catalyser la croissance de nos filiales pour délivrer une valeur ajoutée exceptionnelle et pérenne sur l'ensemble de la chaîne de valeur.",
        visionTitle: 'Notre Vision',
        visionBody:
          "Ériger ITM Holding comme la référence absolue de l'excellence opérationnelle et éthique en Afrique d'ici 2030.",
      },
      testimonials: {
        label: 'Voix des Partenaires',
        title: 'Ils nous font ',
        titleAccent: 'confiance.',
        items: [
          {
            quote:
              'ITM Holding a su transformer nos défis logistiques en avantages compétitifs grâce à leur connaissance fine du terrain.',
            author: 'Jean-Michel Kalala',
            role: 'Directeur des opérations',
            company: 'Kibali Gold Mines',
          },
          {
            quote:
              "Un partenaire stratégique qui allie standards internationaux et expertise locale. Indispensable pour nos projets d'infrastructure.",
            author: "Sarah O'Neil",
            role: 'VP Infrastructure',
            company: 'Global construction corp',
          },
          {
            quote:
              'Leur pôle RH nous a permis de recruter et former une élite locale rapidement, accélérant notre déploiement national.',
            author: 'Patrick Mbuyi',
            role: 'DRH afrique centrale',
            company: 'Teleco Group',
          },
        ],
      },
      news: {
        sectionLabel: 'Actualités',
        title: 'À la une',
        readNews: "Lire l'actualités",
        readArticle: "Lire l'article",
        items: [
          {
            category: 'Corporate',
            date: '24 Nov 2025',
            title: 'ITM Holding annonce une croissance de 15% sur le secteur minier',
          },
          {
            category: 'RSE',
            date: '18 Nov 2025',
            title: "Lancement du programme 'Jeunes Talents' en RDC et Zambie",
          },
          {
            category: 'Tech',
            date: '10 Nov 2025',
            title: 'Digitalisation : Nouvelle plateforme logistique intégrée',
          },
        ],
      },
      aboutPage: {
        heroHighlight: 'Notre Histoire',
        heroTitleBefore: 'Bâtir une légende ',
        heroTitleAccent: 'panafricaine',
        heroSubtitle:
          "De 2011 à aujourd'hui, découvrez comment une vision audacieuse a donné naissance à un leader continental.",
      },
      founder: {
        role: 'Fondateur & Chairman',
        label: 'Notre Histoire',
        title1: 'Une vision.',
        title2: 'un continent.',
        pullQuote: "L'Afrique avait besoin de structures capables de rivaliser avec les standards internationaux.",
        p1: "L'histoire d'ITM Holding commence avec une conviction simple mais puissante : le capital humain est la ressource la plus précieuse de l'Afrique. Ce qui a débuté comme une entreprise de formation à Lubumbashi s'est rapidement transformé en un écosystème panafricain.",
        p2: "Face aux défis logistiques et opérationnels rencontrés par nos clients miniers, nous avons compris qu'il ne suffisait pas de former. Il fallait structurer, accompagner et opérer.",
      },
      videoSection: {
        label: 'Immersion',
        title1: 'Au cœur de ',
        title2: 'notre excellence.',
        body: "Plongez dans le quotidien de nos équipes et découvrez comment nous façonnons l'avenir de l'industrie en Afrique.",
        watchNow: 'Voir la vidéo',
      },
      timeline: {
        badge: 'Chronologie',
        title: 'Une Croissance exponentielle',
        items: [
          {
            year: '2011',
            title: 'La Genèse',
            desc: "Création d'ITM à Lubumbashi, RDC, avec une vision claire : transformer le capital humain par la formation d'excellence.",
          },
          {
            year: '2014',
            title: 'Expansion Nationale',
            desc: 'Ouverture stratégique de bureaux à Kinshasa et Kolwezi pour accompagner les grands projets miniers du pays.',
          },
          {
            year: '2017',
            title: 'Internationalisation',
            desc: "Premiers pas hors des frontières avec des implantations en Afrique du Sud et au Rwanda, marquant le début de l'ère panafricaine.",
          },
          {
            year: '2020',
            title: 'Diversification',
            desc: 'Lancement des divisions ITM Mining et ITM Energy pour répondre aux besoins croissants en infrastructure et énergie.',
          },
          {
            year: '2023',
            title: 'Holding Unifiée',
            desc: 'Consolidation de toutes les entités sous ITM Holding SA, un géant structuré pour les défis de demain.',
          },
        ],
      },
      values: {
        principles: 'Nos Principes',
        title1: 'Nos',
        title2: 'Valeurs',
        intro:
          "Elles ne sont pas juste des mots sur un mur. Elles définissent qui nous sommes, comment nous travaillons et ce que nous attendons les uns des autres au quotidien.",
        integrityTitle: 'Intégrité',
        integritySub: 'Integrity',
        integrityBody:
          'Agir avec honnêteté et transparence dans toutes nos interactions. La confiance est notre capital le plus précieux.',
        qualityTitle: 'Qualité',
        qualitySub: 'Quality',
        qualityBody:
          "Viser la plus haute qualité et ne jamais se contenter de la moyenne. L'excellence est notre standard minimum.",
        loyaltyTitle: 'Loyauté',
        loyaltySub: 'Loyalty',
        loyaltyBody:
          "Fidélité et engagement envers nos partenaires et notre vision. Nous ne construisons pas seulement des projets, nous construisons des vies.",
      },
      impact: {
        label: 'Impact & Responsabilité',
        titleLight: 'La performance au service',
        titleBold: 'du progrès collectif.',
        sidebar:
          'Nos engagements sont audités annuellement selon les standards internationaux GRI et ISO 26000.',
        reportCta: 'Rapport RSE 2024',
        b1Label: 'Capital Humain',
        b1Title: 'Formation & Excellence',
        b1Body:
          "Talents formés chaque année via l'ITM Academy, constituant le vivier de leaders de demain.",
        b2Label: 'Environnement',
        b2Title: 'Empreinte Carbone',
        b2Body:
          "Réduction des émissions de CO2 sur nos sites industriels grâce à l'intégration d'énergies renouvelables.",
        b2Countries: 'PAYS',
        b3Label: 'Impact Local',
        b3Title: 'Développement',
        b3Body:
          "Bénéficiant de nos programmes d'infrastructures communautaires (écoles, centres de santé, puits).",
        b4Label: 'Gouvernance',
        b4Title: 'Femmes Dirigeantes',
        b4Body:
          'Taux de féminisation des instances dirigeantes, une exception notable dans le secteur industriel.',
      },
      contactPage: {
        heroHighlight: 'Contact',
        heroTitleBefore: 'Parlons de ',
        heroTitleAccent: 'votre avenir',
        heroSubtitle:
          "Notre équipe d'experts est à votre disposition pour transformer vos défis en opportunités de croissance durable.",
      },
      contactForm: {
        hqTitle: 'Siège Social',
        addressLabel: 'Adresse',
        phoneLabel: 'Téléphone',
        emailLabel: 'Email',
        socialTitle: 'Réseaux Sociaux',
        socialSubtitle: 'Restez connecté avec le HQ',
        formTitle: 'Envoyez-nous un message',
        formIntro:
          "Que vous ayez une question sur nos services, besoin d'un devis ou envie de rejoindre nos équipes, nous sommes à l'écoute.",
        divisionsLabel: 'NOS DIVISIONS',
        divisionPlaceholder: 'Sélectionnez une division',
        divGeneral: 'Direction Générale',
        divPartnership: 'Partenariats',
        divHr: 'Ressources Humaines',
        divMining: 'ITM Mining',
        divEnergy: 'ITM Energy',
        divInvestors: 'Relations Investisseurs',
        messagePlaceholder: 'Détaillez votre demande...',
        namePlaceholder: 'Jean Dupont',
        emailPlaceholder: 'jean@entreprise.com',
        phonePlaceholder: '+243 ...',
      },
      map: {
        title: 'Ancrage Local',
        subtitle: 'Kinshasa • RDC',
        hqTitle: 'Siège Social',
        hqSubtitle: 'Centre névralgique des opérations',
        addressLabel: 'Adresse Physique',
        openMaps: 'Ouvrir dans Maps',
        iframeTitle: 'Carte du siège',
        overlay: 'Satellite Live Feed • Active',
      },
      about: {
        title: 'À propos',
        subtitle: 'Découvrez notre histoire',
      },
      contact: {
        title: 'Contact',
        subtitle: 'Parlons de votre projet',
        form: {
          name: 'Nom Complet',
          email: 'Email Professionnel',
          phone: 'Téléphone',
          division: 'Division',
          message: 'Message',
          submit: 'Envoyer le Message',
        },
      },
      companiesPage: {
        heroHighlight: 'Hub des Filiales',
        heroTitleBefore: 'Le Portefeuille ',
        heroTitleAccent: 'ITM Holding',
        heroSubtitle:
          "Explorez notre écosystème de 15 entreprises interconnectées, conçues pour offrir des solutions intégrées à l'échelle continentale.",
        searchPlaceholder: 'Rechercher une filiale, un service...',
        industryPlaceholder: "Secteur d'activité",
        servicePlaceholder: 'Type de service',
        allIndustries: 'Tous les secteurs',
        allServices: 'Tous les services',
        activeFilters: 'Filtres actifs :',
        clearAll: 'Tout effacer',
        portfolioLabel: 'Portfolio',
        polesTitle1: 'Nos pôles',
        polesTitle2: "d'excellence.",
        entityActive: 'Entité Active',
        entitiesActive: 'Entités Actives',
        discover: 'Découvrir',
        noResultsTitle: 'Aucun résultat trouvé',
        noResultsBody: "Essayez d'ajuster vos filtres ou votre recherche.",
        resetFilters: 'Réinitialiser tous les filtres',
      },
      companyDetail: {
        notFoundTitle: 'Entreprise non trouvée',
        notFoundBody: "L'entreprise que vous recherchez n'existe pas.",
        backPortfolio: 'Retour au portefeuille',
        contactUs: 'Nous contacter',
        servicesTitle: 'Services & Expertises',
        servicesIntro:
          'offre une gamme complète de services pour répondre aux besoins spécifiques du marché africain.',
        serviceCardBody: 'Solution spécialisée adaptée aux défis du secteur.',
        statCountries: "Pays d'Intervention",
        statServices: 'Services Clés',
        statGrowth: 'Croissance Annuelle',
        ctaTitle: 'Collaborer avec',
        ctaBody: 'Découvrez comment notre expertise peut transformer vos projets.',
      },
      industriesPage: {
        heroHighlight: "Secteurs d'Expertise",
        heroTitleBefore: 'Au cœur de ',
        heroTitleAccent: "l'économie réelle",
        heroSubtitle:
          "Au cœur de l'économie globale. Nous transformons des secteurs stratégiques grâce à une compréhension et une expertise profondes des marchés locaux, à l'innovation technologique et à l'intégration des standards internationaux.",
        manifestoBg: 'IMPACT',
        manifestoTitle1: 'Innovation',
        manifestoTitle2: 'Transversale.',
        manifestoBody:
          "La force d'ITM Holding réside dans sa capacité à créer des synergies entre ses métiers. Chaque projet bénéficie non seulement de notre expertise sectorielle, mais aussi de nos capacités logistiques, RH et énergétiques.",
        stat1Label: 'Collaborateurs',
        stat2Label: "Secteurs d'activité couverts",
        stat3Label: 'Entités multisectorielles',
        stat4Label: 'Clients accompagnés',
        bentoLabel: 'Vision Panoramique',
        bentoTitle: "L'Industrie de Demain",
        smartMiningTitle: 'Smart Mining',
        smartMiningBody: "Des solutions adaptées au service d'une extraction responsable.",
        infraTitle: 'Infrastructures',
        infraBody: 'Bâtir les fondations des économies émergentes.',
        greenTitle: 'Green Energy',
        greenBody: 'Accélérer la transition vers des énergies durables.',
        hrBadge: 'ITM HR',
        hrTitle: 'Capital Humain &',
        hrTitle2: 'Formation',
        hrBody: 'Développer les talents qui bâtissent l’économie de demain.',
        digitalTitle: 'Digitalisation Industrielle',
        digitalBody:
          'Nous développons des solutions technologiques avancées pour optimiser la production, renforcer la sécurité des opérations et pérenniser la capacité opérationnelle de nos partenaires.',
        industry40: 'Industrie',
        connected: 'Connecté',
        listLabel: "Portefeuille d'Activités",
        listTitle: 'Pôles Stratégiques',
        navigate: 'Naviguer',
        explore: 'Explorer',
        sectors: {
          mining: {
            name: 'Mines & Industrie',
            description: "Solutions complètes pour le cycle de vie minier, de l'exploration à l'extraction.",
            stats: '3 Projets Majeurs',
          },
          energy: {
            name: 'Énergie & Infrastructure',
            description: 'Développement de projets énergétiques durables et infrastructures critiques.',
            stats: '+450MW Installés',
          },
          hr: {
            name: 'Capital Humain',
            description: 'Recrutement, formation et gestion de la paie pour les multinationales.',
            stats: '15,000+ Placements',
          },
          logistics: {
            name: 'Logistique & Supply Chain',
            description: "Transport, entreposage et gestion de la chaîne d'approvisionnement.",
            stats: '12 Pays Couverts',
          },
          security: {
            name: 'Sécurité & Sûreté',
            description: 'Protection des actifs et du personnel dans les environnements complexes.',
            stats: '24/7 Monitoring',
          },
          tech: {
            name: 'Technologie & Digital',
            description: 'Solutions IT, transformation numérique et connectivité.',
            stats: 'Cloud Solutions',
          },
          consulting: {
            name: 'Conseil & Stratégie',
            description: 'Accompagnement stratégique pour les investisseurs et gouvernements.',
            stats: 'Advisory Board',
          },
        },
      },
      investorsPage: {
        heroHighlight: 'Investisseurs',
        heroTitleBefore: 'Performance ',
        heroTitleAccent: 'durable',
        heroSubtitle:
          'Une gouvernance rigoureuse et une stratégie de diversification pour garantir une croissance stable à long terme.',
        kpi1Title: 'Croissance Annuelle',
        kpi1Body:
          "Une performance soutenue par l'expansion de nos activités minières et l'optimisation des coûts opérationnels.",
        kpi2Title: 'Flux de Revenus',
        kpi2Body:
          "Une diversification sectorielle stratégique (Mines, Énergie, Logistique) réduisant l'exposition aux risques.",
        kpi3Title: 'Solidité Financière',
        kpi3Body:
          'Notation interne reflétant une solvabilité exemplaire et une gestion de trésorerie rigoureuse.',
        strategyTitle: "Stratégie d'Investissement",
        strategyP1:
          "ITM Holding poursuit une stratégie d'expansion agressive mais maîtrisée, axée sur la diversification sectorielle et géographique. Nous investissons prioritairement dans des industries à fort potentiel de rendement en Afrique, tout en maintenant une structure de capital rigoureuse.",
        strategyP2:
          'Notre modèle repose sur l’autonomisation de nos filiales, soutenues par une gouvernance centralisée qui assure la conformité, la gestion des risques et l’optimisation des ressources partagées.',
        reportsTitle: 'Centre de Rapports',
        annualReport: 'Rapport Annuel',
        reportMeta: 'Audit complet & États financiers consolidés',
        pdf: 'PDF',
        irTitle: 'Relations Investisseurs',
        irBody:
          "Pour toute demande d'information financière ou opportunité de partenariat en capital.",
        calendarTitle: 'Calendrier Financier',
        event1Title: 'Résultats T3 2025',
        event1Meta: 'Conférence téléphonique',
        event2Title: 'Résultats Annuels 2025',
        event2Meta: 'Publication Audités',
      },
      mediaPage: {
        heroHighlight: 'Média Center',
        heroTitleBefore: ' Découvrez ',
        heroTitleAccent: ' nos dernières actualités',
        heroSubtitle:
          "Accédez à toutes les informations officielles, communiqués et ressources médias d'ITM Holding et de ses filiales.",
        pressKit: 'Kit Presse Rapide',
        filterEntity: 'Filtrer par Entité',
        entityPlaceholder: 'Entreprise',
        allEntities: 'Toutes les entités',
        chronology: 'Chronologie',
        newest: 'Plus récents',
        oldest: 'Plus anciens',
        searchPlaceholder: 'RECHERCHER...',
        featured: 'À la une',
        readArticle: "Lire l'article",
        dispatches: 'Dernières Dépêches',
        archives: 'Consulter les Archives',
        perspectivesTitle: 'Perspectives & Analyses',
        perspectivesSubtitle: 'Le regard de nos experts sur les enjeux du secteur.',
        marketAnalysis: 'Analyse de marché',
        quote: "L'innovation digitale n'est plus une option, c'est le moteur de la souveraineté industrielle.",
        quoteAuthor: '— CTO ITM Holding',
        readArticleShort: "Lire l'article",
        agenda: 'Agenda',
        viewCalendar: 'Voir le calendrier',
        galleryTitle: 'Retour en images',
        ref: 'REF',
        news: [
          {
            category: 'Corporate',
            date: '27 Nov 2025',
            title: 'ITM Holding annonce une croissance de 18% et confirme ses objectifs 2026.',
            excerpt:
              "Le conseil d'administration valide la stratégie d'expansion en Afrique de l'Ouest et annonce de nouveaux investissements dans le secteur énergétique.",
          },
          {
            category: 'Filiales',
            date: '25 Nov 2025',
            title: 'Nouveau contrat de gestion de flotte signé avec Kamoa Copper.',
            excerpt: 'Une collaboration de 5 ans pour optimiser la logistique sur site.',
          },
          {
            category: 'Annonce',
            date: '20 Nov 2025',
            title: "Lancement du projet solaire 'Kibali Green' : 50MW de capacité.",
            excerpt: '',
          },
          {
            category: 'RSE',
            date: '15 Nov 2025',
            title: "Rapport d'Impact 2024 : 5000 emplois créés en zone rurale.",
            excerpt:
              'Notre engagement pour le développement local porte ses fruits avec des indicateurs sociaux en forte hausse.',
          },
        ],
        insights: [
          { tag: "Leadership d'opinion", title: "L'avenir des mines en Afrique passe par l'humain.", author: 'Sylva Monga, Chairman' },
          { tag: 'Marché', title: "Logistique : Les nouveaux corridors de l'Est.", author: 'Economic Desk' },
          { tag: 'Success Story', title: 'Comment ITM SA a digitalisé 100% de ses processus RH.', author: 'Tech Team' },
        ],
        events: {
          upcoming: [
            { day: '15', month: 'DEC', year: '2025', title: 'Sommet Minier Indaba', location: 'Cape Town, RSA', type: 'Conférence' },
            { day: '22', month: 'JAN', year: '2026', title: 'Vœux Annuels du Chairman', location: 'Kinshasa, RDC', type: 'Interne' },
            { day: '10', month: 'FEV', year: '2026', title: 'Forum Énergie Afrique', location: 'Nairobi, Kenya', type: 'Salon' },
          ],
          past: [
            { title: 'Inauguration Siège Kolwezi', date: 'Oct 2025' },
            { title: 'Team Building 2025', date: 'Sept 2025' },
            { title: 'Signature Partenariat', date: 'Aout 2025' },
          ],
        },
      },
      legal: {
        privacy: {
          metaTitle: 'Politique de confidentialité',
          metaDescription:
            'Comment ITM Holding collecte, utilise et protège vos données personnelles conformément aux lois applicables.',
          h1: 'Politique de confidentialité',
          updated: 'Dernière mise à jour : mars 2025',
          p1:
            'ITM Holding (« nous ») s’engage à protéger la vie privée des visiteurs de ce site et des personnes qui nous contactent. La présente politique décrit les types d’informations traitées et vos droits.',
          s1Title: 'Données collectées',
          s1Body:
            'Nous pouvons collecter des données d’identification et de contact (nom, e-mail, téléphone) lorsque vous remplissez un formulaire, ainsi que des données techniques (adresse IP, type de navigateur) à des fins de sécurité et de statistiques agrégées.',
          s2Title: 'Finalités et base légale',
          s2Body:
            'Les données sont utilisées pour répondre à vos demandes, gérer la relation commerciale et améliorer nos services. Le traitement repose sur votre consentement, l’exécution d’un contrat ou notre intérêt légitime, selon le cas.',
          s3Title: 'Conservation et sécurité',
          s3Body:
            'Nous conservons les données le temps nécessaire aux finalités poursuivies et appliquons des mesures organisationnelles et techniques appropriées pour en limiter l’accès.',
          s4Title: 'Vos droits',
          s4Body:
            'Vous pouvez demander l’accès, la rectification, l’effacement ou la limitation du traitement de vos données, et introduire une réclamation auprès d’une autorité de protection des données compétente.',
          s5Title: 'Contact',
          s5Body: 'Pour toute question relative à cette politique : privacy@itmafrica.com',
        },
        terms: {
          metaTitle: 'Conditions d’utilisation',
          metaDescription:
            'Conditions générales d’utilisation du site web ITM Holding.',
          h1: 'Conditions d’utilisation',
          updated: 'Dernière mise à jour : mars 2025',
          p1:
            'L’accès et l’utilisation de ce site impliquent l’acceptation des présentes conditions. Si vous n’acceptez pas ces termes, veuillez ne pas utiliser le site.',
          s1Title: 'Objet du site',
          s1Body:
            'Le site a pour objet de présenter le groupe ITM Holding, ses filiales et activités. Les informations sont fournies à titre indicatif et peuvent être modifiées sans préavis.',
          s2Title: 'Propriété intellectuelle',
          s2Body:
            'Les contenus (textes, images, logos, marques) sont protégés. Toute reproduction non autorisée est interdite sauf autorisation écrite préalable.',
          s3Title: 'Limitation de responsabilité',
          s3Body:
            'ITM Holding ne saurait être tenu responsable des dommages indirects résultant de l’utilisation du site ou de l’impossibilité d’y accéder, dans les limites permises par la loi.',
          s4Title: 'Droit applicable',
          s4Body: 'Les présentes conditions sont régies par le droit applicable en République démocratique du Congo, sauf disposition impérative contraire.',
        },
        sitemap: {
          metaTitle: 'Plan du site',
          metaDescription: 'Accès rapide aux principales pages du site ITM Holding.',
          h1: 'Plan du site',
          intro: 'Retrouvez ci-dessous les sections principales du site.',
        },
      },
      archives: {
        heroHighlight: 'Archives',
        heroTitleBefore: 'Toutes nos',
        heroTitleAccent: 'publications',
        heroSubtitle: 'Accédez à l\'historique complet des communiqués, articles et actualités d\'ITM Holding.',
        filterTitle: 'Filtres de recherche',
        searchPlaceholder: 'Rechercher...',
        yearPlaceholder: 'Année',
        allYears: 'Toutes les années',
        categoryPlaceholder: 'Catégorie',
        allCategories: 'Toutes les catégories',
        entityPlaceholder: 'Entité',
        allEntities: 'Toutes les entités',
        activeFilters: 'Filtres actifs :',
        clearFilters: 'Réinitialiser les filtres',
        resultsCount: 'publications trouvées',
        readMore: 'Lire la suite',
        backToMedia: 'Retour aux actualités',
        noResults: 'Aucun résultat',
        noResultsDesc: 'Aucune publication ne correspond à vos critères de recherche.',
        items: [
          {
            id: 1,
            category: 'Corporate',
            date: '15 Nov 2025',
            title: 'ITM Holding annonce une croissance de 18% et confirme ses objectifs 2026',
            excerpt: 'Le conseil d\'administration valide la stratégie d\'expansion en Afrique de l\'Ouest et annonce de nouveaux investissements dans le secteur énergétique.',
            entity: 'ITM Holding',
            year: 2025,
          },
          {
            id: 2,
            category: 'Filiales',
            date: '10 Nov 2025',
            title: 'Nouveau contrat de gestion de flotte signé avec Kamoa Copper',
            excerpt: 'Une collaboration de 5 ans pour optimiser la logistique sur site.',
            entity: 'ITM Mining',
            year: 2025,
          },
          {
            id: 3,
            category: 'Annonce',
            date: '05 Nov 2025',
            title: 'Lancement du projet solaire Kibali Green : 50MW de capacité',
            excerpt: 'Un investissement majeur dans les énergies renouvelables pour réduire l\'empreinte carbone.',
            entity: 'ITM Energy',
            year: 2025,
          },
          {
            id: 4,
            category: 'RSE',
            date: '28 Oct 2025',
            title: 'Rapport d\'Impact 2024 : 5000 emplois créés en zone rurale',
            excerpt: 'Notre engagement pour le développement local porte ses fruits avec des indicateurs sociaux en forte hausse.',
            entity: 'ITM Holding',
            year: 2025,
          },
          {
            id: 5,
            category: 'Corporate',
            date: '20 Oct 2025',
            title: 'Inauguration du nouveau siège de Kolwezi',
            excerpt: 'Un bâtiment moderne et écologique pour accompagner la croissance de nos activités au Katanga.',
            entity: 'ITM Holding',
            year: 2025,
          },
          {
            id: 6,
            category: 'Tech',
            date: '15 Oct 2025',
            title: 'Digitalisation : Nouvelle plateforme logistique intégrée',
            excerpt: 'Une solution technologique de pointe pour optimiser la chaîne d\'approvisionnement.',
            entity: 'ITM Mining',
            year: 2025,
          },
          {
            id: 7,
            category: 'Filiales',
            date: '22 Sep 2025',
            title: 'ITM HR obtient la certification ISO 9001:2015',
            excerpt: 'Une reconnaissance de notre engagement envers l\'excellence opérationnelle.',
            entity: 'ITM HR',
            year: 2025,
          },
          {
            id: 8,
            category: 'Corporate',
            date: '10 Sep 2025',
            title: 'Partenariat stratégique avec la Banque Mondiale',
            excerpt: 'Un accord-cadre pour financer des projets d\'infrastructure en Afrique centrale.',
            entity: 'ITM Holding',
            year: 2025,
          },
          {
            id: 9,
            category: 'Annonce',
            date: '28 Août 2025',
            title: 'Expansion au Nigeria : ouverture de bureaux à Lagos',
            excerpt: 'Une nouvelle étape dans notre stratégie de croissance panafricaine.',
            entity: 'ITM Holding',
            year: 2025,
          },
          {
            id: 10,
            category: 'RSE',
            date: '15 Août 2025',
            title: 'Programme Jeunes Talents : 500 bénéficiaires formés',
            excerpt: 'Notre programme de formation professionnelle continue de produire des résultats exceptionnels.',
            entity: 'ITM HR',
            year: 2025,
          },
          {
            id: 11,
            category: 'Corporate',
            date: '20 Juil 2025',
            title: 'Résultats semestriels : croissance de 22% du chiffre d\'affaires',
            excerpt: 'Une performance solide portée par tous les pôles d\'activité du groupe.',
            entity: 'ITM Holding',
            year: 2025,
          },
          {
            id: 12,
            category: 'Filiales',
            date: '05 Juil 2025',
            title: 'ITM Energy signe un contrat de 100MW avec la SNEL',
            excerpt: 'Un projet majeur pour renforcer le réseau électrique en RDC.',
            entity: 'ITM Energy',
            year: 2025,
          },
          {
            id: 13,
            category: 'Corporate',
            date: '18 Déc 2024',
            title: 'ITM Holding clôture l\'année avec une croissance record de 25%',
            excerpt: 'Une année exceptionnelle marquée par des acquisitions stratégiques et une expansion réussie.',
            entity: 'ITM Holding',
            year: 2024,
          },
          {
            id: 14,
            category: 'RSE',
            date: '10 Déc 2024',
            title: 'Inauguration de l\'école ITM à Lubumbashi',
            excerpt: 'Un investissement dans l\'éducation pour les communautés locales.',
            entity: 'ITM Holding',
            year: 2024,
          },
          {
            id: 15,
            category: 'Filiales',
            date: '25 Nov 2024',
            title: 'ITM Mining remporte le contrat d\'exploitation de la mine de Kipushi',
            excerpt: 'Un partenariat de 10 ans avec le groupe minier Ivanhoe.',
            entity: 'ITM Mining',
            year: 2024,
          },
          {
            id: 16,
            category: 'Tech',
            date: '12 Nov 2024',
            title: 'Lancement de la plateforme digitale de gestion RH',
            excerpt: 'Une solution innovante pour digitaliser les processus de ressources humaines.',
            entity: 'ITM HR',
            year: 2024,
          },
          {
            id: 17,
            category: 'Corporate',
            date: '30 Oct 2024',
            title: 'Le Chairman Sylva Monga reçu par le Président de la RDC',
            excerpt: 'Une audience présidentielle pour discuter des investissements du groupe.',
            entity: 'ITM Holding',
            year: 2024,
          },
          {
            id: 18,
            category: 'Annonce',
            date: '15 Oct 2024',
            title: 'Acquisition de 51% dans Transport & Logistics Africa',
            excerpt: 'Une acquisition stratégique pour renforcer notre pôle logistique.',
            entity: 'ITM Holding',
            year: 2024,
          },
        ],
      },
      articleDetail: {
        notFound: 'Article non trouvé',
        notFoundDesc: 'L\'article que vous recherchez n\'existe pas ou a été supprimé.',
        backToArchives: 'Retour aux archives',
        readingTime: '4 min de lecture',
        share: 'Partager',
        articleInfo: 'Informations',
        publishedOn: 'Publié le',
        entity: 'Entité',
        category: 'Catégorie',
        relatedArticles: 'Articles similaires',
        readMore: 'Lire',
        content1: '{{title}} représente une étape importante dans le développement stratégique de {{entity}}. Cette initiative s\'inscrit dans notre vision de long terme pour renforcer notre position sur le marché africain.',
        content2: 'Cette actualité de catégorie {{category}} témoigne de notre engagement continu envers l\'excellence opérationnelle et l\'innovation. Nos équipes travaillent sans relâche pour transformer ces ambitions en réalités concrètes.',
        content3: 'L\'impact de cette annonce se fera ressentir à travers l\'ensemble de notre écosystème, bénéficiant à nos partenaires, employés et aux communautés locales où nous opérons. Nous restons déterminés à créer de la valeur durable pour toutes nos parties prenantes.',
        sectionTitle: 'Perspectives et impact',
        content4: 'Les implications de cette actualité s\'étendent bien au-delà de notre organisation. Elles reflètent notre capacité à anticiper les tendances du marché et à nous positionner comme un leader visionnaire dans notre secteur.',
        quote: 'Notre mission est de transformer le potentiel de l\'Afrique en performance durable, en créant des opportunités pour les générations présentes et futures.',
        content5: 'Nous invitons nos partenaires et parties prenantes à suivre l\'évolution de ce projet. Notre équipe reste à disposition pour toute information complémentaire. Ensemble, continuons à bâtir l\'avenir du continent.',
      },
    },
  },
  en: { translation: enTranslation },
  pt: { translation: ptTranslation },
} as const;

i18n.use(initReactI18next).init({
  resources: resources as unknown as Record<string, { translation: Record<string, unknown> }>,
  lng: 'fr',
  fallbackLng: 'fr',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

export const getLocalizedPath = (path: string, lng?: string): string => {
  const language = lng || i18n.language || 'fr';
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `/${language}${normalized === '/' ? '' : normalized}`;
};
