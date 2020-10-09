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
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on" v-bind="attrs">
              <v-icon left small>
                mdi mdi-account
              </v-icon>
              <span class="caption text lowercase">By person</span>
            </v-btn>
          </template>
          <span>Sorting by person</span>
        </v-tooltip>
      </v-row>
      <v-card
        tile
        class="pa-4"
        v-for="(project , i ) in projects"
        :key="i"
      >
        <v-row :class="`pa-3 project ${project.status}`">
          <v-col cols="12" md="6">
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
          <v-col cols="6" sm="4" md="2">
            <div>
              <v-chip :class="`${project.status} white--text caption my-2`">{{
                project.status
              }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Juhász István",
          due: "2020.11.01",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi reprehenderit accusantium itaque distinctio officia ratione error. Soluta, consequatur? Vitae at eum deleniti, iste veniam sapiente! Id hic nisi magni doloribus?",
        },
        {
          title: "Code the homepage",
          person: "Bigos András",
          due: "2020.12.01",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi reprehenderit accusantium itaque distinctio officia ratione error. Soluta, consequatur? Vitae at eum deleniti, iste veniam sapiente! Id hic nisi magni doloribus?",
        },
        {
          title: "Design video thumbnails",
          person: "Borzsák Anna",
          due: "2020.10.01",
          status: "complete",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi reprehenderit accusantium itaque distinctio officia ratione error. Soluta, consequatur? Vitae at eum deleniti, iste veniam sapiente! Id hic nisi magni doloribus?",
        },
        {
          title: "Create a community forum",
          person: "Márkus Szabolcs",
          due: "2020.10.01",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi reprehenderit accusantium itaque distinctio officia ratione error. Soluta, consequatur? Vitae at eum deleniti, iste veniam sapiente! Id hic nisi magni doloribus?",
        },
        {
          title: "Design a new website again",
          person: "Juhász István",
          due: "2020.12.01",
          status: "ongoing",
          content:
            "Ez már a második projectem leírása",
        }
      ],
    };
  },
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
