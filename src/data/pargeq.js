/**
 * PARGeQ - Projet d'Appui au Renforcement de la Gestion Qualité dans les PME
 * Static data extracted from project documents. No runtime fetch needed.
 */

export const projectInfo = {
  fullName: 'Projet d\'Appui au Renforcement de la Gestion Qualité dans les PME',
  shortName: 'PARGeQ',
  funder: 'GIZ Togo, Programme Alliance for Product Quality in Africa (AfPQ)',
  implementer: 'Chambre de Commerce et d\'Industrie du Bénin (CCI Bénin)',
  zone: 'Tout le territoire du Bénin - 12 départements couvrant 33 communes sur les 77 du Bénin',
  duration: '15 mars 2025 – 15 mai 2026',
  budgetGiz: '147 237,89 €',
  budgetCci: '8 605,75 €',
  budgetTotal: '155 843,64 €',
  targetGroup: 'PME exportatrices ou prêtes à l\'exportation'
}

export const context = [
  'Le Bénin, avec un taux de croissance du PIB estimé à 6,4 % en 2023 après 6,3 % en 2022, porté par le secteur tertiaire, a enregistré un accroissement de la valeur ajoutée de ce secteur de 6,6 % en 2023. La branche des industries agro-alimentaires a connu une hausse de 6,7 % en 2023.',
  'L\'ambition du Gouvernement du Bénin décrite dans le Plan National de Développement (PND 2018-2025) vise entre autres à accroître durablement la compétitivité de l\'économie par sa transformation structurelle, avec un accent particulier sur le secteur privé et les MPME pour assurer une amélioration de leur productivité et un élargissement des marchés à forte capacité de création de valeur et d\'emploi durable.',
  'La compétitivité des entreprises dans un environnement de plus en plus exigeant en matière de santé publique, de traçabilité, de bonnes pratiques de fabrication et de sécurité sanitaire des aliments requiert d\'impulser la démarche qualité dans tous les processus de production de biens et services.',
  'C\'est dans ce contexte et en lien avec ses missions de services aux entreprises que la Chambre de Commerce et d\'Industrie du Bénin met en œuvre le PARGeQ, financé par la GIZ Togo à travers le programme Alliance for Product Quality in Africa (AfPQ).'
]

export const objectives = {
  general: 'Renforcer les capacités de PME prêtes à l\'export, dans divers secteurs, pour une meilleure prise en compte de la qualité et un renforcement du Système de Management de la Qualité (SMQ) dans leur entreprise.',
  specific: [
    {
      id: 1,
      title: 'Renforcer les connaissances',
      description: 'Renforcer les connaissances et capacités des PME sur le Management de la Qualité conformément aux normes qualité pertinentes y compris ISO 9001 version 2015.'
    },
    {
      id: 2,
      title: 'Déployer le Q-Boost',
      description: 'Déployer l\'accompagnement de proximité Quality-Boost (Q-Boost) pour le renforcement du SMQ au profit des entreprises qualifiées post formation.'
    },
    {
      id: 3,
      title: 'Donner de la visibilité',
      description: 'Donner de la visibilité aux entreprises appuyées par le projet.'
    },
    {
      id: 4,
      title: 'Développer le Q-Boost',
      description: 'Soutenir et contribuer au développement du dispositif Q-Boost.'
    }
  ]
}

export const outputs = [
  {
    id: 1,
    title: 'Connaissances renforcées',
    description: 'Les connaissances et performances en management de la qualité des PME sont améliorées.',
    kpis: [
      '100 entreprises dont 30 % dirigées par des femmes ont bénéficié du renforcement de capacités',
      '50 entreprises ayant participé aux formations confirment que leurs connaissances en matière de gestion de la qualité se sont améliorées'
    ]
  },
  {
    id: 2,
    title: 'SMQ renforcé',
    description: 'Le Système de Management de la Qualité est renforcé dans les entreprises accompagnées.',
    kpis: [
      '30 entreprises dont 10 dirigées par des femmes ont reçu l\'accompagnement de proximité Q-Boost',
      '10 entreprises confirment que la qualité de leurs produits s\'est améliorée grâce au renforcement du SMQ',
      '05 entreprises, dont 01 dirigée par des femmes, ont satisfait à 70 % des critères de certification du SMQ',
      '10 employés dont 5 femmes confirment qu\'ils ont contribué au respect des exigences en matière de gestion de la qualité'
    ]
  },
  {
    id: 3,
    title: 'Visibilité',
    description: 'La visibilité autour du projet est mise en lumière.',
    kpis: [
      'Une capsule vidéo réalisée et diffusée via les canaux appropriés',
      'Une fenêtre du dispositif visible sur le site de la CCI Bénin',
      'Kakemonos confectionnés et disponibles dans les locaux de la CCI Bénin'
    ]
  }
]

export const keyResults = [
  { metric: '110', label: 'PME formées sur le SMQ' },
  { metric: '49%', label: 'dirigées par des femmes' },
  { metric: '84%', label: 'confirment l\'amélioration de leurs connaissances' },
  { metric: '30', label: 'PME en accompagnement Q-Boost' },
  { metric: '30', label: 'plans de travail validés' },
  { metric: '114', label: 'entreprises sélectionnées et qualifiées' }
]

export const activities = [
  'Sélection et qualification de 114 entreprises en vue du renforcement de leur système de management de la qualité.',
  'Formation des entreprises sélectionnées sur le Système de Management de la Qualité (SMQ).',
  'Sélection des entreprises bénéficiaires de l\'accompagnement de proximité Quality-Boost.',
  'Mise en œuvre de la première session de coaching (durée : 1 mois).'
]

export const qboostStats = {
  totalPme: 30,
  womenLed: 16,
  menLed: 14,
  bySector: [
    { sector: 'Industries Agro-alimentaires', count: 28 },
    { sector: 'Cosmétiques', count: 1 },
    { sector: 'Textile', count: 1 }
  ],
  byDepartment: [
    { department: 'Atlantique', count: 13 },
    { department: 'Ouémé', count: 5 },
    { department: 'Zou', count: 5 },
    { department: 'Borgou', count: 4 },
    { department: 'Collines', count: 1 },
    { department: 'Littoral', count: 1 },
    { department: 'Mono', count: 1 }
  ]
}

export const nextSteps = [
  'La 2ème session de coaching (durée : 2 mois) est en cours.',
  'Réalisation de la 3ème session de coaching (durée : 1 mois).',
  'Organisation de l\'atelier de capitalisation.',
  'Organisation de l\'atelier de clôture.'
]

export const teamMembers = [
  {
    id: 1,
    name: 'M. BELLO Camarou',
    role: 'Point focal',
    photo: 'point-focal-bello.jpg'
  },
  {
    id: 2,
    name: 'M. Gad FAYOMI',
    role: 'Chef projet',
    photo: null
  },
  {
    id: 3,
    name: 'M. ALTINE DIALLO Abdoul Malik',
    role: 'Responsable Financier',
    photo: null
  },
  {
    id: 4,
    name: 'M. Cowiyou GOLE',
    role: 'Assistant suivi-évaluation',
    photo: null
  }
]

/**
 * Gallery images - imported at view level because Vite needs static import paths.
 * This array only holds the metadata; the view maps actual imports onto it.
 */
export const galleryMeta = [
  { id: 1, file: 'training-cotonou-1.jpg', caption: 'Session de formation à Cotonou, Exigences de la norme ISO 9001 v2015' },
  { id: 2, file: 'training-cotonou-2.jpg', caption: 'Session de formation à Cotonou, ISO 9001 v2015' },
  { id: 3, file: 'training-porto-novo.jpg', caption: 'Session de formation à Porto-Novo, ISO 9001 v2015' },
  { id: 4, file: 'group-qboost-1.jpg', caption: 'Partenaires GIZ Togo et coachs déployés pour l\'accompagnement Q-Boost' },
  { id: 5, file: 'group-qboost-2.jpg', caption: 'Photo de famille, Partenaires et coachs Q-Boost' }
]
