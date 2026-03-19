import {
  createRouter,
  createWebHistory,
} from 'vue-router';
import { page } from '@/helpers/routeLoader';
import { services } from '@/api'
import store from '@/store';
const routes = [
  {
    path: '/',
    name: 'index',
    component: page('index'),
    meta: {
      title: 'Chambre de Commerce et d\'Industrie du Bénin | CCI Bénin',
      description: 'La CCI Bénin assiste créateurs/chefs d\'entreprise, investisseurs... dans leurs projets (création, formation, financement, etc.) pour assurer leur développement.',
      keywords: 'opérateur économique, opérateurs économiques, développement des affaires'
    }
  },
  {
    path: '/financement',
    name: 'financement',
    component: page('financement'),
    meta: {
      title: 'Opportunités de financements pour entreprise et startup | CCI Bénin '
    }
  },
  {
    path: '/sme-business-training-and-coaching-loop',
    name: 'SME Business Training and Coaching Loop',
    component: page('sme-business-training-and-coaching-loop'),
    meta: {
      title: 'SME Business Training and Coaching Loop'
    }
  },
  {
    path: '/documents-rapports',
    name: 'documents',
    component: page('documents-rapports'),
    meta: {
      title: 'Documentation et ressources sur l\'environnement des affaires | CCI Bénin  '
    }
  },
  {
    path: '/ressources-et-outils',
    name: 'ressources',
    component: page('ressources-et-outils'),
    meta: {
      title: 'Ressources et outils : SME Business Training and Coaching Loop'
    }
  },
  {
    path: '/journees-pays',
    name: 'journees-pays',
    component: page('journee-pays'),
    meta: {
      title: 'Opportunités d\'expansion aux rencontres Journées Pays/Produit/Service | CCI Bénin  '
    }
  },
  {
    path: '/impulse',
    name: 'impulse',
    component: page('impulse'),
    meta: {
      title: 'Programme ImPulse : Incubation et accélération de startups | CCI Bénin'
    }
  },
  {
    path: '/etude-marche',
    name: 'etude-marche',
    component: page('etude-marches'),
    meta: {
      title: 'Etude de marché sectorielle pour des décisions fiables | CCI Bénin  '
    }
  },
  {
    path: '/aide-montage',
    name: 'aide-montage',
    component: page('aide-montage'),
    meta: {
      title: 'Aide au montage de dossiers de subventions ou financements | CCI Bénin '
    }
  },
  {
    path: '/rdv-experts',
    name: 'rdv-experts',
    component: page('rdv-experts'),
    meta: {
      title: 'Programme Rendez-vous des experts | CCI Bénin'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: page('contact'),
    meta: {
      title: 'Contactez-nous | CCI Bénin'
    }
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: page('agenda'),
    meta: {
      title: 'Rencontres, événements, salons, foires du secteur privé | CCI Bénin'
    }
  },
  {
    path: '/arbitrage-mediation',
    name: 'arbitrage-mediation',
    component: page('arbitrage-mediation'),
    meta: {
      title: 'Règlement de litiges commerciaux des entreprises avec le CAMeC | CCI Bénin'
    }
  },
  {
    path: '/formations',
    name: 'formations',
    component: page('formations'),
    meta: {
      title: 'Formations pour chefs d\'entreprise, startups et personnel avec l\'ECCI | CCI Bénin'
    }
  },
  {
    path: '/partenaires',
    name: 'partenaires',
    component: page('partenaires'),
    meta: {
      title: 'Partenaires | CCI Bénin'
    }
  },
  {
    path: '/devenir-partenaire',
    name: 'devenir-partenaire',
    component: page('devenir-partenaire'),
    meta: {
      title: 'Collaboration avec la CCI, votre partenaire | CCI Bénin'
    }
  },
  {
    path: '/blog-articles',
    name: 'blog-articles',
    component: page('blog-articles'),
    meta: {
      title: 'Blog sur l\'environnement des affaires et le secteur privé | CCI Bénin'
    }
  },
  {
    path: '/articles/:id/:slug',
    name: 'read-article',
    component: page('read-article'),
    meta: {
      title: 'Titre de l\'article | CCI Bénin'
    }
  },

  {
    path: '/appels-offres',
    name: 'appels-offres',
    component: page('appels-offres'),
    meta: {
      title: 'Avis d\'appel d\'offres / à Projets | CCI Bénin'
    }
  },
  {
    path: '/pere',
    name: 'pere',
    component: page('pere'),
    meta: {
      title: 'Soutien aux eProgramme Économique de Résilience pour les Entreprises (P.E.R.E) | CCI Béninntreprises béninoises en réponse à la Covid-19 | CCI Bénin'
    }
  },
  {
    path: '/institutionnelle',
    name: 'institutionnelle',
    component: page('institutionnelle'),
    meta: {
      title: 'Accueil et orientation des institutions nationales et internationales | CCI Bénin'
    }
  },

  // {
  //   path: '/industriel-commercant',
  //   name: 'industriel-commercant',
  //   component: page('industriel-commercant'),
  // },

  {
    path: '/faq',
    name: 'faq',
    component: page('faq'),
    meta: {
      title: 'Foire aux questions | CCI Bénin '
    }
  },
  {
    path: '/chef-entreprise',
    name: 'chef-entreprise',
    component: page('chef-entreprise'),
    meta: {
      title: 'Organiser et gérer efficacement son entreprise | CCI Bénin'
    }
  },
  {
    path: '/cci',
    name: 'cci',
    component: page('cci'),
    meta: {
      title: 'Qui sommes-nous ? | CCI Bénin'
    }
  },
  {
    path: '/createur-entreprise',
    name: 'createur-entreprise',
    component: page('createur-entreprise'),
    meta: {
      title: 'Procédures de création et de formalisation des entreprises | CCI Bénin'
    }
  },
  {
    path: '/services',
    name: 'services',
    component: page('services'),
    meta: {
      title: 'Services'
    }
  },
  {
    path: '/services/specifiques',
    name: 'services-specs',
    component: page('services-specs'),
    meta: {
      title: 'Programmes d\'accompagnement pour les entreprises | CCI Bénin'
    }
  },
  {
    path: '/services/informations-orientations',
    name: 'services-infos',
    component: page('services-infos'),
    meta: {
      title: 'Information et orientation des acteurs économiques | CCI Bénin'
    }
  },
  {
    path: '/services/formations',
    name: 'services-formations',
    component: page('services-formations'),
    meta: {
      title: 'Formation, assistance et appui-conseil aux entreprises | CCI Bénin'
    }
  },
  {
    path: '/investissement',
    name: 'investissement',
    component: page('investissement'),
    meta: {
      title: 'Opportunités d\'investissement dans l\'écosystème entrepreneurial | CCI Bénin'
    }
  },
  {
    path: '/parcours-entrepreneur',
    name: 'parcours-entrepreneur',
    component: page('parcours-entrepreneur'),
    meta: {
      title: 'Programme Parcours de l\'entrepreneur | CCI Bénin'
    }
  },
  //{
  //path: '/mentions-legales',
  //name: 'legal-mentions',
  //component: page('legal-mention'),
  //},
  {
    path: '/observatoire-commerce',
    name: 'observatoire-commerce',
    component: page('observatoire-commerce'),
    meta: {
      title: 'Observatoire du Commerce, de l\'Industrie et des Services (OCIS) | CCI Bénin  '
    }
  },
  {
    path: '/projet-eat',
    name: 'projet-eat',
    component: page('projet-eat'),
    meta: {
      title: 'Facilitation du Commerce Agricole Transfrontalier Bénin-Nigeria | CCI Bénin  '
    }
  },
  // ── ProReCED routes ──────────────────────────────────────────────
  {
    path: '/pro-reced',
    name: 'proreced.index',
    component: () => import('@/views/pro-reced/index.vue'),
    meta: {
      title: 'ProReCED - Renforcement des Capacités Entrepreneuriales | CCI Bénin'
    }
  },
  {
    path: '/pro-reced/about',
    name: 'proreced.about',
    component: () => import('@/views/pro-reced/about.vue'),
    meta: {
      title: 'À propos du ProReCED | CCI Bénin'
    }
  },
  {
    path: '/pro-reced/team',
    name: 'proreced.team',
    component: () => import('@/views/pro-reced/team.vue'),
    meta: {
      title: 'Équipe du ProReCED | CCI Bénin'
    }
  },
  {
    path: '/pro-reced/beneficiaries',
    name: 'proreced.beneficiaries',
    component: () => import('@/views/pro-reced/beneficiaries.vue'),
    meta: {
      title: 'Entreprises bénéficiaires du ProReCED | CCI Bénin'
    }
  },
  {
    path: '/pro-reced/contact',
    name: 'proreced.contact',
    component: () => import('@/views/pro-reced/contact.vue'),
    meta: {
      title: 'Contacter le ProReCED | CCI Bénin'
    }
  },
  // ── End ProReCED routes ──────────────────────────────────────────
  // ── PARGeQ route ─────────────────────────────────────────────────
  {
    path: '/pargeq',
    name: 'pargeq',
    component: () => import('@/views/pargeq.vue'),
    meta: {
      title: 'PARGeQ - Appui au Renforcement de la Gestion Qualité | CCI Bénin'
    }
  },
  // ── End PARGeQ route ─────────────────────────────────────────────
  {
    path: '/:pathMatch(.*)*', name: 'not-found',
    component: () => import('@/views/404.vue'),
    meta: {
      layout: 'empty',
      title: '404 | Not found'
    }
  },
  {
    path: '/ticket-create',
    name: 'ticket-create',
    component: () => import('@/views/TicketCreate.vue'),
    meta: {
      title: 'Créer un ticket',
      description: 'Page de création de ticket',
      keywords: 'ticket, création, page web'
    }
  }

];

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.meta !== undefined && to.meta.title !== undefined) {
    document.title = to.meta.title
  }
  let configs = sessionStorage.getItem('configs')
  if (configs == undefined || configs == null) {
    await services.get_settings().then((response) => {
      if (response.status == 200) {
        sessionStorage.setItem('configs', JSON.stringify(response.data))
        configs = sessionStorage.getItem('configs')
        configs = JSON.parse(configs)
      }
    })
  } else {
    configs = JSON.parse(configs)
  }
  if (store.state.home_elements.sliders === undefined || store.state.home_elements == undefined || store.state.home_elements == null) {
    await services.home_elements().then((response) => {
      if (response.status == 200) {
        store.state.home_elements = response.data
      }
    })
    if (store.state.home_elements.sliders && (configs !== null && configs !== undefined)) {
      store.state.home_elements.sliders = store.state.home_elements.sliders.map((element) => {
        return {
          ...element,
          slide: configs.image_url + '/' + element.photo,
          slide_content: {
            heading: element.heading,
            content: element.content,
            button1_text: element.button1_text,
            button1_url: element.button1_url,
            button2_text: element.button2_text,
            button2_url: element.button2_url
          }
        }
      })
    }
    store.state.app_ready = true
    next()
  }
  else {
    store.state.app_ready = true
    next()
  }
})
export default router;
