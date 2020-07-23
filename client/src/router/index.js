import Vue from "vue";
import VueRouter from "vue-router";
import AttendanceView from "@/views/AttendanceView";
import AttendanceUpload from "@/views/AttendanceUpload";
import Dashboard from "@/views/Dashboard";
import Notices from "@/views/Notices";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/Dashboard",
    },
    {
        path: "/AttendanceView",
        name: "AttendanceView",
        component: AttendanceView,
    },
    {
        path: "/Dashboard",
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/AttendanceUpload",
        name: "AttendanceUpload",
        component: AttendanceUpload,
    },
    {
        path: "/Notices",
        name: "Notices",
        component: Notices,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
