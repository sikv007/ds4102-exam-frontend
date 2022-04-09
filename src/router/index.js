import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import DevelopersView from "../views/DevelopersView.vue";
import TheDeveloper from "../views/TheDeveloper.vue";

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
      path: "/utviklere/:id",
      component: TheDeveloper,
      props: true,
    },
  ],
});

export default router;
