import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/Dashboard",
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
