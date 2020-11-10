import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import "firebase/auth";
import * as firebase from "firebase/app";
import Store from '../Store/index'

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
    meta: {requiresAuth:true}
  },
  {
    path: "/team",
    name: "Team",
    component: () =>
      import(/* webpackChunkName: "Team" */ "../views/Team.vue"),
      meta: {requiresAuth:true}
  },
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
      meta: {requiresAuth:true}
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "Admin" */ "../views/Admin.vue"),
      meta: {requiresAuth:true}
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;

  console.log(Store.getters.getActiveUser);

  if (requiresAuth && !isAuthenticated) {
    next("/login")
  } else {
    next();
  }

})


export default router;
