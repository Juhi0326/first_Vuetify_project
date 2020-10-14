<template>
  <div class="Projects">
    <h1 class="subheading grey--text ml-12">Own projects</h1>
    <v-container class="my-5">
      <v-row >
        <v-col>
          <template>
            <v-expansion-panels v-for="(project, i) in myProjects" :key="i" :class="`pa-2 project ${project.status}`">
              <v-expansion-panel>
                <v-expansion-panel-header>
                  {{ project.title }}
                </v-expansion-panel-header>
                <v-expansion-panel-content class="px-4 grey--text">
                  <div class="font-weight-bold">{{ project.due }}</div>
                  <div>{{ project.content }}</div>
                  <v-divider></v-divider>
                  <v-row class="mt-6">
                    <v-col cols="12" md="2">

                    <v-btn small color="error" class="mr-6">
                      <v-icon left>mdi mdi-xamarin-outline</v-icon
                      >Delete</v-btn
                    >
                    </v-col>

                    <v-col cols="12" md="2">
                    
                    <v-btn small color="secondary" class="mr-6">
                      <v-icon left>mdi mdi-checkbox-marked-circle</v-icon>
                      Edit</v-btn
                    >
                    </v-col>

                    <v-col cols="12" md="2">
                    <v-btn
                      small
                      v-if="project.status !== 'completed'"
                      color="primary"
                      dark
                      @click="changeId(project.id)"
                    >
                      <v-icon left>mdi mdi-checkbox-marked-circle</v-icon>
                      Done
                    </v-btn>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
        </v-col>
      </v-row>
       <v-dialog v-model="dialog" width="600px">
        <v-card>
          <v-card-title>
            <span class="headline"
              >Are you sure to set project status to completed?</span
            >
          </v-card-title>
          <v-card-text>
            After you set this project for completed status you will no longer
            be able to change the status!
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="setComplete()">
              Yes
            </v-btn>
            <v-btn color="green darken-1" text @click="clearId()">
              No
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
      dialog: false,
      id: null,
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
  methods : {
    changeId(id) {
      this.id = id;
      this.dialog = true;
    },
    clearId() {
      this.dialog = false;
      this.id = null;
    },
    setComplete() {
      this.dialog = false;
      db.collection("projects2")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.id === this.id) {
              db.collection("projects2")
                .doc(doc.id)
                .update({ status: "completed" })
                .then(() => {
                  console.log("sikerült");
                });
              for (let i = 0; i < this.projects.length; i++) {
                if (this.projects[i].id === this.id) {
                  this.projects[i].status = "completed";
                  break;
                }
              }
            }
          });
        });
    },
  }
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
