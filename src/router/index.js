import {
  createRouter,
  createWebHashHistory,
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
  },
  {
    path: '/financement',
    name: 'financement',
    component: page('financement'),
  },
  {
    path: '/documents-rapports',
    name: 'documents',
    component: page('documents-rapports'),
  },
  {
    path: '/journees-pays',
    name: 'journees-pays',
    component: page('journee-pays'),
  },
  {
    path: '/impulse',
    name: 'impulse',
    component: page('impulse'),
  },
  {
    path: '/etude-marche',
    name: 'etude-marche',
    component: page('etude-marches'),
  },
  {
    path: '/aide-montage',
    name: 'aide-montage',
    component: page('aide-montage'),
  },
  {
    path: '/rdv-experts',
    name: 'rdv-experts',
    component: page('rdv-experts'),
  },
  {
    path: '/contact',
    name: 'contact',
    component: page('contact'),
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: page('agenda'),
  },
  {
    path: '/arbitrage-mediation',
    name: 'arbitrage-mediation',
    component: page('arbitrage-mediation'),
  },
  {
    path: '/formations',
    name: 'formations',
    component: page('formations'),
  },
  {
    path: '/partenaires',
    name: 'partenaires',
    component: page('partenaires'),
  },
  {
    path: '/devenir-partenaire',
    name: 'devenir-partenaire',
    component: page('devenir-partenaire'),
  },
  {
    path: '/blog-articles',
    name: 'blog-articles',
    component: page('blog-articles'),
  },
  {
    path: '/article/slug=:slug',
    name: 'read-article',
    component: page('read-article'),
  },

  {
    path: '/appels-offres',
    name: 'appels-offres',
    component: page('appels-offres'),
  },
  {
    path: '/pere',
    name: 'pere',
    component: page('pere'),
  },
  {
    path: '/institutionnelle',
    name: 'institutionnelle',
    component: page('institutionnelle'),
  },
  {
    path: '/industriel-commercant',
    name: 'industriel-commercant',
    component: page('industriel-commercant'),
  },
  {
    path: '/faq',
    name: 'faq',
    component: page('faq'),
  },
  {
    path: '/chef-entreprise',
    name: 'chef-entreprise',
    component: page('chef-entreprise'),
  },
  {
    path: '/cci',
    name: 'cci',
    component: page('cci'),
  },
  {
    path: '/createur-entreprise',
    name: 'createur-entreprise',
    component: page('createur-entreprise'),
  },
  {
    path: '/services',
    name: 'services',
    component: page('services'),
  },
  {
    path: '/services/specifiques',
    name: 'services-specs',
    component: page('services-specs'),
  },
  {
    path: '/services/informations-orientations',
    name: 'services-infos',
    component: page('services-infos'),
  },
  {
    path: '/services/formations',
    name: 'services-formations',
    component: page('services-formations'),
  },
  {
    path: '/investissement',
    name: 'investissement',
    component: page('investissement'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach(async (to, from, next) => {
  let configs = sessionStorage.getItem('configs')
    if (configs == undefined || configs == null) {
      await services.get_settings().then((response) => {
        if (response.status == 200) {
          sessionStorage.setItem('configs', JSON.stringify(response.data))
        }
      })
    }
  if (store.state.home_elements.sliders === undefined || store.state.home_elements == undefined || store.state.home_elements == null) {
   
    await services.home_elements().then((response) => {
      if (response.status == 200) {
        store.state.home_elements = response.data
      }
    })
    next()
  }
  else {
    next()
  }
})
export default router;
