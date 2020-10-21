<template>
  <div class="Dashboard">
    <h1 class="subheading grey--text ml-12">Dashboard</h1>
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
          <v-col cols="12" sm="3" md="4">
            <div class="caption grey--text">
              Project title
            </div>
            <div>{{ project.title }}</div>
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
          <v-col cols="6" md="2">
            <div>
              <v-chip :class="`${project.status} white--text caption my-2`">{{
                project.status
              }}</v-chip>
            </div>
          </v-col>
          <v-col cols="6" md="2">
            <v-btn
              v-if="project.status !== 'completed'"
              color="primary"
              dark
              @click="changeId(project.id)"
              class="my-2"
            >
              <v-icon left>mdi mdi-checkbox-marked-circle</v-icon>
              <span>Done</span>
            </v-btn>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
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
export default {
  name: "Dashboard",
  data() {
    return {
      dialog: false,
      id: null,
    };
  },
  computed: {
    projects: function() {
      this.$store.state.projects.forEach((project) => {
        const d = new Date(project.due);
        d.setHours(0, 0, 0, 0);
        const actualDate = new Date();
        actualDate.setHours(0, 0, 0, 0);
        if (actualDate > d || project.status !== "completed") {
          project.status = "overdue";
        }
      });
      return this.$store.state.projects;
    },
  },

  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
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
      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].id === this.id) {
          this.projects[i].status = "completed";
          break;
        }
      }
    },
  },
  components: {},
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
