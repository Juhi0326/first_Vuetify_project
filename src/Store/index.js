import Vue from "vue";
import Vuex from "vuex";
import db from "../fb";
//import * as firebase from "firebase/app";
import { vuexfireMutations, firestoreAction } from "vuexfire";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
    users: [],
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
    getAllUsers: (state) =>{    
      return state.users;
    },
    filteredProjects: (state, getters) => {

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
    getUsers: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef("users", db.collection("users"));
    }),
    setActiveUser({ commit }, user) {
      commit("SET_ACTIVE_USER", user);
    },
  
    setAdmin({ commit }, userId) {
      commit("SET_ADMIN", userId);
    },
  },
});
