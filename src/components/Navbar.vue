<template>
  <nav>
    <v-toolbar app flat height="150" class="grey lighten-4 ml-4">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="font-weight-light">Todo</span>
        <span>Projects</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>Sign out</span>
        <v-icon right>mdi mdi-exit-to-app </v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="blue-grey lighten-5">
      <v-column align-center >
        <v-row class="mt-5 ml-15" >
          <v-avatar size="120">
            <img src="/me3.jpg" alt="">
          </v-avatar>
        </v-row>
        <v-row class="mt-5 ml-16 mb-5" >
          <p class="subheading mt-5 ">Juhász István</p>
        </v-row>

      </v-column>



      <v-divider></v-divider>
      <v-list dense>
        <v-list-item @click="drawer = !drawer">
          <v-list-item-icon class="font-weight-light">
            <v-icon>mdi mdi-close-circle</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Close</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>


<script>

export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      items: [
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/" },
        { title: "Projects", icon: "mdi-forum", route: "/projects" },
        { title: "Team", icon: "mdi-forum", route: "/team" },
      ],
    };
  },
};
</script>
