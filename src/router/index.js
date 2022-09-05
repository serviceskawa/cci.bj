import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Welcome from "../views/Welcome.vue";
import Blog from "../views/Blog.vue";
import Macci from "../views/Macci.vue";
const routes = [
  {
    path: "/",
    redirect: "/welcome",
    component: DefaultLayout,
    children: [
      { path: "/welcome", name: "Welcome", component: Welcome },
      {
        path: "/blog",
        name: "Blog",
        component: Blog,
      },
      {
        path: "/macci",
        name: "MaCCI",
        component: Macci,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
