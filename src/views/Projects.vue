<template>
  <div class="Projects">
    <div class="text-center">
      <v-snackbar
        dark
        color="primary"
        v-model="snackbarDelete"
        :timeout="4000"
        top
      >
        <span>You have deleted the project!</span>
        <v-btn text color="white" @click="snackbarDelete = false">Close</v-btn>
      </v-snackbar>

      <v-snackbar
        dark
        color="primary"
        v-model="snackbarCompleted"
        :timeout="4000"
        top
      >
        <span>You have set this project to completed!</span>
        <v-btn text color="white" @click="snackbarCompleted = false"
          >Close</v-btn
        >
      </v-snackbar>
    </div>
    <h1 class="subheading grey--text ml-12">Own projects</h1>
    <v-container class="my-5">
      <v-row>
        <v-col>
          <template>
            <v-expansion-panels
              v-for="(project, i) in myProjects"
              :key="i"
              :class="`pa-2 project ${project.status}`"
            >
              <v-expansion-panel>
                <v-expansion-panel-header @click="id = project.id">
                  {{ project.title }}
                </v-expansion-panel-header>
                <v-expansion-panel-content class="px-4 grey--text">
                  <div class="font-weight-bold">{{ project.due }}</div>
                  <div>{{ project.content }}</div>
                  <v-divider></v-divider>
                  <v-row class="mt-6">
                    <v-col cols="12" sm="4" md="2">
                      <DeleteProjectDialog
                        :id="id"
                        @projectDeleted="deleteProject()"
                        @cancel="clearId()"
                      />
                    </v-col>

                    <v-col cols="12" sm="4" md="2">
                      <ModifyProjectDialog :id="id" />
                    </v-col>

                    <v-col
                      cols="12"
                      sm="4"
                      md="2"
                      v-if="project.status !== 'completed'"
                    >
                      <SetCompletedDialog
                        :id="id"
                        @setCompleted="setComplete()"
                        @cancel="clearId()"
                      />
                    </v-col>
                  </v-row>
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
import { format, parseISO } from "date-fns";

import DeleteProjectDialog from "../components/DeleteProjectDialog";
import SetCompletedDialog from "../components/SetCompletedDialog";
import ModifyProjectDialog from "../components/ModifyProjectDialog";

export default {
  name: "Projects",
  components: {
    DeleteProjectDialog,
    SetCompletedDialog,
    ModifyProjectDialog,
  },

  data() {
    return {
      id: null,
      menu: false,
      loading: false,
      snackbarDelete: false,
      snackbarCompleted: false,
    };
  },
  computed: {
    myProjects: function() {
      this.$store.state.projects.forEach((project) => {
        const d = new Date(project.due);
        d.setHours(0, 0, 0, 0);
        const actualDate = new Date();
        actualDate.setHours(0, 0, 0, 0);
        if (actualDate <= d || project.status === "completed") {
          project.status
        } else {
          project.status = "overdue";
        }
      });
      return this.$store.getters.filteredProjects;
    },

    computedDateFormattedDatefns() {
      return this.date
        ? format(parseISO(new Date().toISOString()), "yyyy-MM-dd")
        : "";
    },
  },

  methods: {
    clearId() {
      this.id = null;
    },
    clearId2() {
      this.dialog2 = false;
      this.id = null;
    },
    setComplete() {

      this.snackbarCompleted = true;
    },

    deleteProject() {
      this.snackbarDelete = true;
    },
  },
};
</script>

<style>
.project.completed {
  border-left: 4px solid rgb(0, 255, 0);
}
.project.ongoing {
  border-left: 4px solid rgb(255, 192, 0);
}
.project.overdue {
  border-left: 4px solid rgb(255, 0, 0);
}
.theme--light.v-chip:not(.v-chip--active).completed {
  background: rgb(0, 255, 0);
}
.theme--light.v-chip:not(.v-chip--active).ongoing {
  background: rgb(255, 192, 0);
}
.theme--light.v-chip:not(.v-chip--active).overdue {
  background: rgb(255, 0, 0);
}
</style>
