import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import DevelopersView from "../views/DevelopersView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: DashboardView,
    },
    {
      path: "/utviklere",
      component: DevelopersView,
    },
    {
      path: "/utviklere/:navn",
      component: DevelopersView,
    },
  ],
});

export default router;
