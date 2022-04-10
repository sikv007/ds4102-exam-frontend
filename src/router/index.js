import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
import DeveloperView from "../views/DeveloperView.vue";
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
      component: DeveloperView,
    },
    {
      path: "/utviklere/:id",
      component: TheDeveloper,
      props: true,
    },
  ],
});

export default router;
