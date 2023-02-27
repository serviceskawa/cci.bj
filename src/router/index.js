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
      title: 'Financement'
    }
  },
  {
    path: '/documents-rapports',
    name: 'documents',
    component: page('documents-rapports'),
    meta: {
      title: 'Documentation et ressources sur l\'environnement des affaires | CCI Bénin '
    }
  },
  {
    path: '/journees-pays',
    name: 'journees-pays',
    component: page('journee-pays'),
    meta: {
      title: 'Rencontres Journées Pays/Produit/Service | CCI Bénin '
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
      title: 'Réaliser une étude de marché sectorielle au Bénin | CCI Bénin '
    }
  },
  {
    path: '/aide-montage',
    name: 'aide-montage',
    component: page('aide-montage'),
    meta: {
      title: 'Aide au montage de dossiers de subvention ou financement | CCI Bénin '
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
      title: 'Contactez la Chambre de Commerce et d\'Industrie du Bénin | CCI Bénin'
    }
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: page('agenda'),
    meta: {
      title: 'Rencontres, événements, salons, foires au Bénin | CCI Bénin'
    }
  },
  {
    path: '/arbitrage-mediation',
    name: 'arbitrage-mediation',
    component: page('arbitrage-mediation'),
    meta: {
      title: 'Règlement de litiges des entreprises au Bénin | CCI Bénin'
    }
  },
  {
    path: '/formations',
    name: 'formations',
    component: page('formations'),
    meta: {
      title: 'Formations pour les chefs d\'entreprise et Startups au Bénin | CCI Bénin'
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
      title: 'Devenir partenaireNouer un partenariat avec la CCI-Bénin | CCI Bénin'
    }
  },
  {
    path: '/blog-articles',
    name: 'blog-articles',
    component: page('blog-articles'),
    meta: {
      title: 'Blog sur l\'environnement des affaires et son développement | CCI Bénin'
    }
  },
  {
    path: '/articles/:id/:slug',
    name: 'read-article',
    component: page('read-article'),
    meta: {
      title: 'Article'
    }
  },

  {
    path: '/appels-offres',
    name: 'appels-offres',
    component: page('appels-offres'),
    meta: {
      title: 'Appels d\'offres | CCI Bénin'
    }
  },
  {
    path: '/pere',
    name: 'pere',
    component: page('pere'),
    meta: {
      title: 'Soutien aux entreprises béninoises en réponse à la Covid-19 | CCI Bénin'
    }
  },
  {
    path: '/institutionnelle',
    name: 'institutionnelle',
    component: page('institutionnelle'),
    meta: {
      title: 'Acceuil des institutions et missions internationales Bénin | CCI Bénin'
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
      title: 'Organiser et gérer efficacement son entreprise au Bénin | CCI Bénin'
    }
  },
  {
    path: '/cci',
    name: 'cci',
    component: page('cci'),
    meta: {
      title: 'À propos de la Chambre de Commerce et d\'Industrie du Bénin | CCI Bénin '
    }
  },
  {
    path: '/createur-entreprise',
    name: 'createur-entreprise',
    component: page('createur-entreprise'),
    meta: {
      title: 'Création et formalisation des entreprises au Bénin | CCI Bénin'
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
      title: 'Programmes d\'accompagnement pour les entreprises au Bénin | CCI Bénin'
    }
  },
  {
    path: '/services/informations-orientations',
    name: 'services-infos',
    component: page('services-infos'),
    meta: {
      title: 'Information et orientation des acteurs économiques du Bénin | CCI Bénin'
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
      title: 'Opportunités d\'investissement dans les entreprises du Bénin | CCI Bénin'
    }
  },
  {
    path: '/parcours-entrepreneur',
    name: 'parcours-entrepreneur',
    component: page('parcours-entrepreneur'),
    meta: {
      title: 'Programme Parcours de l\'entrepreneur | CCI Bénin '
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
      title: 'Observatoire du commerce de la CCI-Bénin | CCI Bénin '
    }
  },
  {
    path: '/:pathMatch(.*)*', name: 'not-found',
    component: () => import('@/views/404.vue'),
    meta: {
      layout: 'empty',
      title: '404 | Not found'
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
