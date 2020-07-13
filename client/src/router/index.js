import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "@/views/Dashboard";
import Mark from "@/views/Mark"

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
    {
        path: "/Mark",
        name: "Mark",
        component: Mark,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
