import Vue from "vue";
import Vuex from "vuex";
import db from "../fb";
import { vuexfireMutations, firestoreAction } from "vuexfire";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [],
  },
  getters: {
    allProjects: (state)=> {
        return state.projects
    },
    filteredProjects : state=> {
        return state.projects.filter((project) => {
            return project.person === "Juhász István";
        })
    }
  },
  mutations: {
    ...vuexfireMutations,
  },
  actions: {
    getProjects: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef("projects", db.collection("projects2"));
    }),

  },
});
