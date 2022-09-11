import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";
import { page } from '@/helpers/routeLoader'
const routes = [
  {
    path: '/',
    component: page('index')
  },
  {
    path: '/financement',
    component: page('financement')
  },
  {
    path: '/documents-rapports',
    component: page('documents-rapports')
  },
  {
    path: '/journees-pays',
    component: page('journee-pays')
  },
  {
    path: '/impulse',
    component: page('impulse')
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
