<template>
  <v-app >
    <Navbar/>
    <v-main class="grey lighten-4">
      <router-view :key="$route.path"></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar"

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
  created () {
    this.$store.dispatch('getProjects');
  },
};
</script>
