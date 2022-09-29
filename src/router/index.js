import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { page } from '@/helpers/routeLoader';
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
    path: '/blog-articles',
    name: 'blog-articles',
    component: page('blog-articles'),
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
    path: '/investissement',
    name: 'investissement',
    component: page('investissement'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
