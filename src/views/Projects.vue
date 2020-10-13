<template>
  <div class="Projects">
    <h1 class="subheading grey--text">This is projects page</h1>
    <v-container class="my-5">
      <template>
        <v-expansion-panels>
          <v-expansion-panel v-for="(project, i) in myProjects" :key="i">
            <v-expansion-panel-header>
              {{ project.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="px-4 grey--text">
              <div class="font-weight-bold">{{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </template>
    </v-container>
  </div>
</template>

<script>

import db from '@/fb';
export default {
  name: "Projects",
  data() {
    return {
      projects: [],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "Juhász István";
      });
    },
  },
  created() {
    db.collection("projects2").onSnapshot(res=> {
      const changes = res.docChanges();

    changes.forEach(change => {
      if (change.type ==='added') {
        this.projects.push({
          ...change.doc.data(),
          id: change.doc.id
        })
      }
    })


    })
  }
  
};
</script>
