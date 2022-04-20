import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/DashboardView.vue";
const DeveloperView = () => import("../views/DeveloperView.vue");
const TheDeveloper = () => import("../views/TheDeveloper.vue");
const CompanyView = () => import("../views/CompanyView.vue");
const TheCompany = () => import("../views/TheCompany.vue");
const AssignmentView = () => import("../views/AssignmentView.vue");
const TheAssignment = () => import("../views/TheAssignment.vue");

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
    {
      path: "/kunder",
      component: CompanyView,
    },
    {
      path: "/kunder/:id",
      component: TheCompany,
      props: true,
    },
    {
      path: "/oppdrag",
      component: AssignmentView,
    },
    {
      path: "/oppdrag/:id",
      component: TheAssignment,
      props: true,
    },
  ],
});

export default router;
