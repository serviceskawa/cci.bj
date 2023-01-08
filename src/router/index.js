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
      title: 'Documents et Rapports'
    }
  },
  {
    path: '/journees-pays',
    name: 'journees-pays',
    component: page('journee-pays'),
    meta: {
      title: 'Journées & Pays'
    }
  },
  {
    path: '/impulse',
    name: 'impulse',
    component: page('impulse'),
    meta: {
      title: 'Impulse'
    }
  },
  {
    path: '/etude-marche',
    name: 'etude-marche',
    component: page('etude-marches'),
    meta: {
      title: 'Études & marchés'
    }
  },
  {
    path: '/aide-montage',
    name: 'aide-montage',
    component: page('aide-montage'),
    meta: {
      title: 'Aide et montage'
    }
  },
  {
    path: '/rdv-experts',
    name: 'rdv-experts',
    component: page('rdv-experts'),
    meta: {
      title: 'Rendez-vous des experts'
    }
  },
  {
    path: '/contact',
    name: 'contact',
    component: page('contact'),
    meta: {
      title: 'Contacts'
    }
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: page('agenda'),
    meta: {
      title: 'Agenda'
    }
  },
  {
    path: '/arbitrage-mediation',
    name: 'arbitrage-mediation',
    component: page('arbitrage-mediation'),
    meta: {
      title: 'Arbitrage et médiation'
    }
  },
  {
    path: '/formations',
    name: 'formations',
    component: page('formations'),
    meta: {
      title: 'Formations'
    }
  },
  {
    path: '/partenaires',
    name: 'partenaires',
    component: page('partenaires'),
    meta: {
      title: 'Nos partenaires'
    }
  },
  {
    path: '/devenir-partenaire',
    name: 'devenir-partenaire',
    component: page('devenir-partenaire'),
    meta: {
      title: 'Devenir partenaire'
    }
  },
  {
    path: '/blog-articles',
    name: 'blog-articles',
    component: page('blog-articles'),
    meta: {
      title: 'Blogs & articles'
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
      title: 'Appel d\'offres'
    }
  },
  {
    path: '/pere',
    name: 'pere',
    component: page('pere'),
    meta: {
      title: 'P.E.R.E'
    }
  },
  {
    path: '/institutionnelle',
    name: 'institutionnelle',
    component: page('institutionnelle'),
    meta: {
      title: 'Institutionnel'
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
      title: 'FAQ'
    }
  },
  {
    path: '/chef-entreprise',
    name: 'chef-entreprise',
    component: page('chef-entreprise'),
    meta: {
      title: 'Chef d\'entreprise'
    }
  },
  {
    path: '/cci',
    name: 'cci',
    component: page('cci'),
    meta: {
      title: 'Ma CCI'
    }
  },
  {
    path: '/createur-entreprise',
    name: 'createur-entreprise',
    component: page('createur-entreprise'),
    meta: {
      title: 'Créateur d\'entreprise'
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
      title: 'Services | Spécifiques'
    }
  },
  {
    path: '/services/informations-orientations',
    name: 'services-infos',
    component: page('services-infos'),
    meta: {
      title: 'Services | Informations-Orientations'
    }
  },
  {
    path: '/services/formations',
    name: 'services-formations',
    component: page('services-formations'),
    meta: {
      title: 'Services | Formations'
    }
  },
  {
    path: '/investissement',
    name: 'investissement',
    component: page('investissement'),
    meta: {
      title: 'Investissement'
    }
  },
  {
    path: '/parcours-entrepreneur',
    name: 'parcours-entrepreneur',
    component: page('parcours-entrepreneur'),
    meta: {
      title: 'Parcours entrepreneur'
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
      title: 'Observatoire commerce'
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
