import Vue from "vue";
import VueRouter from "vue-router";
import AttendanceView from "@/views/AttendanceView";
import AttendanceUpload from "@/views/AttendanceUpload"

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/AttendanceView",
    },
    {
        path: "/AttendanceView",
        name: "AttendanceView",
        component: AttendanceView,
    },
    {
        path: "/ContentView",
        name: "ContentView",
        component: ContentView,
    },
    {
        path: "/NotificationView",
        name: "NotificationView",
        component: NotificationView,
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
];

const router = new VueRouter({
    routes,
});

export default router;
