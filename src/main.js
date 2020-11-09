import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import store from "./Store";
import Vuelidate from "vuelidate";
import "firebase/auth";
import firebase from "firebase/app";

export const bus = new Vue();

Vue.use(Vuelidate);

Vue.config.productionTip = false;

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log(user);
  if (!app) {
    new Vue({
      router,
      store,
      vuetify,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
