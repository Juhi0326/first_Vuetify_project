<template>
  <nav>
    <v-toolbar app flat>
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
      <v-list-item>
        <v-list-item-avatar size="150">
          <v-img src="../assets/me3.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Juhász István</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list dense>
        <v-list-item @click="drawer = !drawer">
          <v-list-item-icon>
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
      ],
    };
  },
};
</script>
