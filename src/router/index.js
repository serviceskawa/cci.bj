import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router';
import { page } from '@/helpers/routeLoader';
const routes = [
  {
    path: '/',
    component: page('index'),
  },
  {
    path: '/financement',
    component: page('financement'),
  },
  {
    path: '/documents-rapports',
    component: page('documents-rapports'),
  },
  {
    path: '/journees-pays',
    component: page('journee-pays'),
  },
  {
    path: '/impulse',
    component: page('impulse'),
  },
  {
    path: '/etude-marche',
    component: page('etude-marches'),
  },
  {
    path: '/aide-montage',
    component: page('aide-montage'),
  },
  {
    path: '/rdv-experts',
    component: page('rdv-experts'),
  },
  {
    path: '/contact',
    component: page('contact'),
  },
  {
    path: '/agenda',
    component: page('agenda'),
  },
  {
    path: '/arbitrage-mediation',
    component: page('arbitrage-mediation'),
  },
  {
    path: '/formations',
    component: page('formations'),
  },
  {
    path: '/partenaires',
    component: page('partenaires'),
  },
  {
    path: '/blog-articles',
    component: page('blog-articles'),
  },
  {
    path: '/appels-offres',
    component: page('appels-offres'),
  },
  {
    path: '/pere',
    component: page('pere'),
  },
  {
    path: '/institutionnelle',
    component: page('institutionnelle'),
  },
  {
    path: '/faq',
    component: page('faq'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
