<template>
  <div class="Dashboard">
    <h1 class="subheading grey--text">This is the Dashboard page</h1>
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              color="grey"
              @click="sortBy('title')"
              v-on="on"
              v-bind="attrs"
            >
              <v-icon left small>
                mdi mdi-folder
              </v-icon>
              <span class="caption text lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sorting by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              text
              color="grey"
              @click="sortBy('person')"
              v-on="on"
              v-bind="attrs"
            >
              <v-icon left small>
                mdi mdi-account
              </v-icon>
              <span class="caption text lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sorting by person</span>
        </v-tooltip>
      </v-row>
      <v-card tile class="pa-4" v-for="(project, i) in projects" :key="i">
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
            <div class="caption grey--text">
              Project title
            </div>
            <div>{{ project.title }} {{ project.id }}</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">
              Person
            </div>
            <div>
              {{ project.person }}
            </div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">
              Due by
            </div>
            <div>
              {{ project.due }}
            </div>
          </v-col>
          <v-col cols="6" sm="2" md="1">
            <div>
              <v-chip :class="`${project.status} white--text caption my-2`">{{
                project.status
              }}</v-chip>
            </div>
          </v-col>
          <v-col cols="6" sm="2" md="1">
            <v-btn color="primary" dark @click="dialog = true" class="my-2">
              <v-icon left>mdi mdi-checkbox-marked-circle</v-icon>
              complete
            </v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
      <v-dialog v-model="dialog" width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on" class="my-2">
            complete
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="headline"
              >Are you sure to set project status to complete?</span
            >
          </v-card-title>
          <v-card-text>
            After you set this project complete you will not to change this
            status!
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="dialog = false">
              Yes
            </v-btn>
            <v-btn color="green darken-1" text @click="dialog = false">
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
  name: "Dashboard",
  data() {
    return {
      projects: [],
      dialog: false,
    };
  },
  created() {
    db.collection("projects").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        //get overdue dates
        const d = new Date(change.doc.data().due);
        d.setHours(0, 0, 0, 0);
        const actualDate = new Date();
        actualDate.setHours(0, 0, 0, 0);

        if (actualDate <= d) {
          console.log("ok");
        } else {
          console.log("overdue!");

          let id = change.doc.id;
          db.collection("projects")
            .doc(id)
            .update({ status: "overdue" });

          console.log(id);
        }

        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
  updated() {},
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  components: {},
};
</script>

<style>
.project.complete {
  border-left: 4px solid rgb(0, 255, 0);
}
.project.ongoing {
  border-left: 4px solid rgb(255, 192, 0);
}
.project.overdue {
  border-left: 4px solid rgb(255, 0, 0);
}
.theme--light.v-chip:not(.v-chip--active).complete {
  background: rgb(0, 255, 0);
}
.theme--light.v-chip:not(.v-chip--active).ongoing {
  background: rgb(255, 192, 0);
}
.theme--light.v-chip:not(.v-chip--active).overdue {
  background: rgb(255, 0, 0);
}
</style>
