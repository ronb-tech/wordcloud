import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Page404 from "@/views/Page404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  { path: "/:catchAll(.*)", name: "NotFound", component: Page404 },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
