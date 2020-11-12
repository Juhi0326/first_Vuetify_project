<template>
  <v-container>
    <v-card class="mt-16 mx-auto" max-width="1200">
      <v-toolbar color="grey darken-1" dark>
        <v-toolbar-title>Admin interface</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-container fluid>
        <v-row dense>
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card class="py-6">
              <router-link :to="card.route" class="">
                <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="300px"
                >
                  <v-card-title v-text="card.title"></v-card-title>
                </v-img>
              </router-link>

              <v-card-actions>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    cards: [
      {
        title: "Stats",
        src: require("../assets/stats.jpg"),
        flex: 6,
        route: "/stats",
      },
      {
        title: "add/remove admin role",
        src: require("../assets/user.jpg"),
        flex: 6,
        route: "/addAdmin",
      },
      {
        title: "User maintenance",
        src: require("../assets/team.jpg"),
        flex: 6,
        route: "/userList",
      },
      {
        title: "Project maintenance",
        src: require("../assets/project.jpg"),
        flex: 6,
        route: "/adminProjectMaintenance",
      },
    ],
  }),
};
</script>

<style scoped>
a {
    text-decoration: none;
}
</style>
