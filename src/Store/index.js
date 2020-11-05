import Vue from "vue";
import Vuex from "vuex";
import db from "../fb";
import { vuexfireMutations, firestoreAction } from "vuexfire";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
    activeUser: "",
  },
  getters: {
    getActiveUser: (state) =>{
      return state.activeUser;
    },
    allProjects: (state) => {
      return state.projects;
    },
    filteredProjects: (state) => {
      console.log(state.activeUser);
      return state.projects.filter((project) => {

        return project.person === state.activeUser;
      });
    },
  },
  mutations: {
    SET_ACTIVE_USER(state, user) {
      console.log(user, "és ezt a mutationból írtam ki");
      state.activeUser = user;
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
  },
});
