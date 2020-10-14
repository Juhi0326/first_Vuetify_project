<template>
  <div class="Projects">
    <h1 class="subheading grey--text ml-12">Own projects</h1>
    <v-container class="my-5">
      <v-row>
        <v-col>
          <template>
            <v-expansion-panels v-for="(project, i) in myProjects" :key="i">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  {{ project.title }}
                </v-expansion-panel-header>
                <v-expansion-panel-content class="px-4 grey--text">
                  <div class="font-weight-bold">{{ project.due }}</div>
                  <div>{{ project.content }}</div>
                  <v-divider></v-divider>
                  <div class="mt-6 d-flex justify-start">
                    <v-btn small color="error" class="mr-6">
                      <v-icon left>mdi mdi-xamarin-outline</v-icon
                      >Delete</v-btn
                    >
                    
                    <v-btn small color="secondary" class="mr-6">
                      <v-icon left>mdi mdi-checkbox-marked-circle</v-icon>
                      Edit</v-btn
                    >
                    <v-btn
                      small
                      v-if="project.status !== 'completed'"
                      color="primary"
                      dark
                    >
                      <v-icon left>mdi mdi-checkbox-marked-circle</v-icon>
                      Done
                    </v-btn>
                  </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import db from "@/fb";
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
    db.collection("projects2").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
};
</script>
