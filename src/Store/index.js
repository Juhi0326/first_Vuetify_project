import Vue from "vue";
import Vuex from "vuex";
import db from "../fb";
//import * as firebase from "firebase/app";
import { vuexfireMutations, firestoreAction } from "vuexfire";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
    activeUser: "",
    admin: false
  },
  getters: {
    getActiveUser: (state) => {
      return state.activeUser;
    },
    allProjects: (state) => {
      return state.projects;
    },
    filteredProjects: (state, getters) => {
      console.log(state.activeUser);
      return state.projects.filter((project) => {
        return project.person === getters.getActiveUser;
      });
    },
  },
  mutations: {
    SET_ACTIVE_USER(state, user) {
      state.activeUser = user;
    },
    SET_ADMIN(state, userId) {

      db.collection("users")
          .doc(userId)
          .update({admin: "true"})
    },
    ...vuexfireMutations,
  },
  actions: {
    getProjects: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef("projects", db.collection("projects2"));
    }),
    setActiveUser({ commit }, user) {
      commit("SET_ACTIVE_USER", user);
    },
    setAdmin({ commit }, userId) {
      console.log("ez már a setAdmi-ból jön: ",userId)
      commit("SET_ADMIN", userId);
    },
  },
});
