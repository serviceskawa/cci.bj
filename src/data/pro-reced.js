/**
 * ProReCED - Static data (replaces all API calls)
 * Edit arrays below to update content. No runtime fetch needed.
 *
 * Source : Synthèse DPA ProReCED & documents CCI Bénin / EnDev GIZ
 */

// Slides reference images from src/assets/ - resolved at build-time via import
// (HeroSlider uses the `image` field passed from the view)
export const heroSlides = [
  {
    id: 1,
    title: 'Projet ProReCED',
    subtitle: 'Projet de Renforcement des Capacités Entrepreneuriales et de Développement des Entreprises des sous-secteurs énergie solaire et énergie de cuisson',
    // image injected at view level
  },
  {
    id: 2,
    title: 'Mise à l\'échelle des PME',
    subtitle: 'Accompagnement de PME des filières énergie solaire hors réseau et cuisson propre pour leur consolidation et leur croissance durable au Bénin',
  },
  {
    id: 3,
    title: 'Financé par EnDev GIZ & l\'Union Européenne',
    subtitle: 'Mis en œuvre par la CCI Bénin dans le cadre du Programme Energising Development (EnDev) avec le cofinancement de l\'Union Européenne',
  }
]

export const indicators = [
  { metric: '7', label: 'PME solaires accompagnées' },
  { metric: '5', label: 'PME cuisson accompagnées' },
  { metric: '6', label: 'Régions couvertes' },
  { metric: '+30%', label: 'Objectif croissance CA solaire' }
]

export const approach = [
  { name: 'Diagnostic entrepreneurial', text: 'Diagnostic approfondi de chaque PME pour identifier les forces, faiblesses, opportunités et menaces, et élaborer un plan de renforcement individualisé.' },
  { name: 'Renforcement technique & managérial', text: 'Formations collectives et coaching rapproché sur 5 thématiques clés : gestion financière, marketing, qualité produits, management et planification stratégique.' },
  { name: 'Facilitation accès au financement', text: 'Élaboration de business plans, notes d\'investissement, mise en relation avec institutions financières et organisation de salons B2B pour mobiliser les financements nécessaires.' },
  { name: 'Appui à la certification', text: 'Accompagnement vers la certification et l\'autorisation des entreprises solaires, et certification des foyers améliorés pour le secteur cuisson.' },
  { name: 'Suivi opérationnel continu', text: 'Monitoring des performances via indicateurs clés, évaluation périodique des progrès et ajustements stratégiques pour garantir la pérennité des résultats.' }
]

export const interventionModes = [
  {
    name: 'Diagnostic',
    text: 'Diagnostic entrepreneurial approfondi de chaque PME bénéficiaire pour identifier les forces, faiblesses et opportunités de croissance, et élaborer un plan de renforcement individualisé.'
  },
  {
    name: 'Formation de groupe',
    text: 'Sessions de formation collectives sur 5 thématiques clés : gestion financière, marketing et commercialisation, qualité des produits et services, management opérationnel et planification stratégique.'
  },
  {
    name: 'Coaching rapproché',
    text: 'Accompagnement personnalisé et suivi individuel de chaque entreprise par les Structures d\'Appui aux Entreprises (SAE) pour la mise en œuvre des plans de renforcement.'
  },
  {
    name: 'Facilitation d\'accès au financement',
    text: 'Élaboration de business plans et notes d\'investissement, mise en relation avec les institutions financières (IMF, banques), organisation de salons B2B et appui au montage de dossiers de financement.'
  },
  {
    name: 'Suivi opérationnel',
    text: 'Monitoring continu des indicateurs de performance (chiffre d\'affaires, volume de production, nombre de clients), évaluation périodique et ajustements stratégiques.'
  },
  {
    name: 'Appui à la certification',
    text: 'Accompagnement des entreprises solaires vers l\'autorisation et la certification, et des producteurs de foyers améliorés vers la certification de leurs produits conformément aux normes en vigueur.'
  }
]

/* ----------------------------------------------------------------
 *  Objectifs - fidèles à la Synthèse DPA ProReCED
 *  Objectif général + 3 Objectifs spécifiques (OS1, OS2, OS3)
 * ---------------------------------------------------------------- */
export const objectifGeneral = 'Mise à l\'échelle des PME intervenant dans les sous-secteurs de l\'énergie de cuisson et solaire et leur consolidation.'

export const objectives = [
  {
    code: 'OS1',
    title: 'Améliorer les performances des PME du sous-secteur solaire',
    description: 'Renforcer les capacités entrepreneuriales et managériales de 7 entreprises solaires à travers le diagnostic, la formation sur 5 thématiques, le coaching rapproché, la facilitation de l\'accès au financement et l\'appui à la certification.',
    sector: 'SOLAIRE',
    activities: [
      'Diagnostic entrepreneurial de 7 entreprises solaires',
      'Élaboration et mise en œuvre de plans de renforcement individualisés',
      'Formations collectives sur 5 thématiques (gestion financière, marketing, qualité, management, planification)',
      'Facilitation de l\'accès au financement (business plans, mise en relation IF)',
      'Appui à l\'autorisation et à la certification des entreprises solaires'
    ],
    targetIndicators: [
      'Chiffre d\'affaires en augmentation de 30% minimum',
      '7 entreprises formées sur 5 thématiques',
      'Au moins 3 entreprises ayant obtenu un financement'
    ]
  },
  {
    code: 'OS2',
    title: 'Accroître les capacités des PME du sous-secteur cuisson',
    description: 'Développer les capacités de production et de commercialisation des entreprises de cuisson propre, faciliter l\'arrivée de 3 nouvelles entreprises, et accompagner la certification des foyers améliorés.',
    sector: 'CUISSON',
    activities: [
      'Diagnostic entrepreneurial des entreprises de cuisson propre',
      'Facilitation de l\'arrivée de 3 nouvelles entreprises dans le secteur',
      'Accompagnement de 5 entreprises pour l\'accès au financement',
      'Appui à la certification des foyers améliorés (FA)',
      'Renforcement des capacités de production - objectif 10 000 FA/mois',
      'Formation et coaching sur les techniques de production et la commercialisation'
    ],
    targetIndicators: [
      'Chiffre d\'affaires en augmentation de 20% minimum',
      '3 nouvelles entreprises intégrées dans le secteur',
      '5 entreprises ayant accédé à un financement',
      'Production mensuelle cible de 10 000 foyers améliorés'
    ]
  },
  {
    code: 'OS3',
    title: 'Visibilité et promotion des entreprises partenaires',
    description: 'Améliorer la visibilité des entreprises accompagnées et promouvoir leurs produits et services auprès des consommateurs et partenaires potentiels.',
    sector: null,
    activities: [
      'Organisation de salons, foires et événements B2B',
      'Mise en place de supports de communication et de marketing',
      'Promotion des produits et services des entreprises bénéficiaires sur les canaux institutionnels'
    ],
    targetIndicators: [
      'Augmentation de la notoriété des entreprises accompagnées',
      'Nombre de connexions B2B établies'
    ]
  }
]

/* ----------------------------------------------------------------
 *  Contexte - chiffres tirés de la Synthèse DPA
 * ---------------------------------------------------------------- */
export const contextData = {
  pibContribution: 'Le secteur tertiaire contribue à plus de 50% du PIB du Bénin',
  pnd: 'Le PND 2018-2025 vise à structurer la transformation structurelle de l\'économie et le développement durable',
  cciVision: 'La CCI Bénin s\'est dotée d\'un Plan Stratégique et de sa Vision 2025 pour accompagner le développement du secteur privé',
  energyAccessUrban: '64,96%',
  energyAccessRural: '10,35%',
  cookingEnergyUrban: '12%',
  cookingEnergyRural: '5%',
  solarChallenges: 'Les entreprises du secteur solaire font face à une faible structuration, un accès limité au financement, un manque de compétences managériales et techniques, et des difficultés d\'accès aux marchés.',
  cookingChallenges: 'Le sous-secteur énergie de cuisson est confronté à une insuffisance de la production locale, une faible qualité des produits, une couverture limitée du marché et un manque d\'entreprises structurées.'
}

/* ----------------------------------------------------------------
 *  Zones d'intervention & critères de sélection
 * ---------------------------------------------------------------- */
export const zonesIntervention = [
  'Région économique 1 - Atacora / Donga',
  'Région économique 2 - Borgou / Alibori',
  'Région économique 3 - Zou / Collines',
  'Région économique 4 - Mono / Couffo',
  'Région économique 5 - Ouémé / Plateau',
  'Région économique 6 - Atlantique / Littoral'
]

export const selectionCriteria = [
  'Existence d\'au moins 2 ans dans le secteur énergie solaire ou cuisson propre',
  'Disposer d\'au moins 3 employés qualifiés',
  'Être une entreprise formalisée (enregistrement légal)',
  'Réaliser un chiffre d\'affaires annuel d\'au moins 5 000 000 FCFA',
  'Démontrer un potentiel de croissance et de mise à l\'échelle',
  'Exercer dans l\'un des 2 sous-secteurs ciblés (solaire hors réseau ou cuisson propre)'
]

export const beneficiaries = [
  {
    id: 1,
    name: 'FEU VERT BENIN SARL',
    sector: 'SOLAIRE',
    location: 'Akpro-Missérété',
    description: 'Entreprise spécialisée dans la fourniture et l\'installation de solutions d\'énergie solaire hors réseau pour les ménages et les PME.',
    logo_url: null,
    website_url: null
  },
  {
    id: 2,
    name: 'GUEV ECOLOGICAL VENTURE',
    sector: 'SOLAIRE',
    location: 'Adjarra',
    description: 'Solutions écologiques et systèmes solaires pour l\'usage productif et les institutions sociales.',
    logo_url: null,
    website_url: null
  },
  {
    id: 3,
    name: 'ISMAST ENERGY SARL',
    sector: 'SOLAIRE',
    location: 'Cotonou',
    description: 'Fournisseur de systèmes solaires photovoltaïques et de solutions d\'éclairage pour les entreprises et ménages.',
    logo_url: null,
    website_url: null
  },
  {
    id: 4,
    name: 'IBIOCAM BTP',
    sector: 'CUISSON',
    location: 'Allada / Sékou',
    description: 'Production et commercialisation de foyers améliorés céramiques et métalliques pour la cuisson propre.',
    logo_url: null,
    website_url: null
  },
  {
    id: 5,
    name: 'Ets ZARA DESTIN',
    sector: 'CUISSON',
    location: 'Djougou',
    description: 'Fabrication et distribution de foyers améliorés (FA) pour les ménages et les unités de cuisson professionnelles.',
    logo_url: null,
    website_url: null
  },
  {
    id: 6,
    name: 'SOGEN SARL',
    sector: 'SOLAIRE',
    location: 'Cotonou',
    description: 'Conception, fourniture et installation de systèmes solaires hors réseau et de nanoréseaux.',
    logo_url: null,
    website_url: null
  },
  {
    id: 7,
    name: 'AFRICA GLOBAL SOLAR',
    sector: 'SOLAIRE',
    location: 'Cotonou',
    description: 'Solutions solaires durables pour l\'électrification rurale et l\'usage productif.',
    logo_url: null,
    website_url: null
  },
  {
    id: 8,
    name: 'GREEN KEEPER AFRICA',
    sector: 'CUISSON',
    location: 'Abomey-Calavi',
    description: 'Solutions innovantes de cuisson propre et valorisation de la biomasse pour les ménages et institutions.',
    logo_url: null,
    website_url: null
  },
  {
    id: 9,
    name: 'SUN ENERGY BENIN',
    sector: 'SOLAIRE',
    location: 'Cotonou',
    description: 'Énergie solaire pour les entreprises, ménages et institutions sociales - vente, installation et maintenance.',
    logo_url: null,
    website_url: null
  },
  {
    id: 10,
    name: 'ECO CUISSON SARL',
    sector: 'CUISSON',
    location: 'Cotonou',
    description: 'Fabrication et distribution de foyers améliorés certifiés, contribution à l\'objectif de 10 000 FA/mois.',
    logo_url: null,
    website_url: null
  },
  {
    id: 11,
    name: 'BENIN SOLAIRE PLUS',
    sector: 'SOLAIRE',
    location: 'Porto-Novo',
    description: 'Installation, maintenance et service après-vente de systèmes solaires photovoltaïques.',
    logo_url: null,
    website_url: null
  },
  {
    id: 12,
    name: 'FOURNEAU VERT',
    sector: 'CUISSON',
    location: 'Parakou',
    description: 'Production de foyers améliorés rockets et céramiques, avec un réseau de distribution dans le nord du Bénin.',
    logo_url: null,
    website_url: null
  }
]

export const sectors = {
  SOLAIRE: 'Énergie solaire',
  CUISSON: 'Énergie de cuisson'
}

export const teamMembers = [
  {
    id: 1,
    full_name: 'M. Bell',
    role: 'Point focal ProReCED',
    bio: 'Coordinateur principal du projet ProReCED au sein de la CCI Bénin. Assure la coordination globale du dispositif, le pilotage stratégique et le lien avec les partenaires financiers (EnDev-GIZ, Union Européenne).',
    photo_url: null
  },
  {
    id: 2,
    full_name: 'M. Octave',
    role: 'Responsable opérationnel',
    bio: 'Responsable du suivi opérationnel des entreprises bénéficiaires et de la coordination avec les Structures d\'Appui aux Entreprises (SAE) des deux sous-secteurs.',
    photo_url: null
  }
]

export const contacts = [
  {
    id: 1,
    label: 'M. Bell',
    role: 'Point focal',
    phone_primary: '+229 01 7 69 73 66',
    phone_secondary: null,
    email: 'info@ccib.bj'
  },
  {
    id: 2,
    label: 'M. Octave',
    role: 'Responsable opérationnel',
    phone_primary: '+229 01 97 37 27 60',
    phone_secondary: '+229 01 96 53 74 95',
    email: 'info@ccib.bj'
  },
  {
    id: 3,
    label: 'CCI Bénin (Standard)',
    role: null,
    phone_primary: '+229 01 21 31 12 38',
    phone_secondary: null,
    email: 'info@ccib.bj'
  }
]

export const partners = [
  {
    name: 'Programme EnDev - GIZ',
    description: 'Le programme Energising Development (EnDev) est un partenariat multi-donateurs mis en œuvre par la GIZ, financé par les gouvernements des Pays-Bas, de l\'Allemagne, de la Norvège et de la Suisse. Au Bénin, la stratégie du programme est axée sur la mise en place d\'un marché durable des produits et services énergétiques à travers deux composantes : énergie solaire et énergie de cuisson. La phase actuelle couvre la période 2019-2026.'
  },
  {
    name: 'Union Européenne',
    description: 'Un cofinancement avec la Délégation de l\'Union Européenne a été signé en novembre 2022 pour l\'action "Promouvoir l\'énergie durable au Bénin à travers des solutions solaires et de cuisson propre, énergétiquement efficaces et écologiquement responsables", couvrant la période 2022-2026.'
  }
]
