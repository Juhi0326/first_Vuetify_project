import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Registration",
    component: () =>
      import(/* webpackChunkName: "Registration" */ "../views/Registration.vue"),
  },
  {
    path: "/register2",
    name: "Registration2",
    component: () =>
      import(/* webpackChunkName: "Registration2" */ "../views/Registration2.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "Login" */ "../views/Login.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () =>
      import(/* webpackChunkName: "Projects" */ "../views/Projects.vue"),
  },
  {
    path: "/team",
    name: "Team",
    component: () =>
      import(/* webpackChunkName: "Team" */ "../views/Team.vue"),
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
