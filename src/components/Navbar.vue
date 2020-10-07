<template>
  <nav>
    <v-toolbar
      flat
      app
      class="grey text-capital grey--text"
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
      height="120"
    >
      <v-toolbar-title>
        <span class="font-weight-light">Todo</span>
        <span>Projects</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>Sign out</span>
        <v-icon right >mdi mdi-exit-to-app </v-icon>
      </v-btn>
    </v-toolbar>
  </nav>
</template>

<script>
// eslint-disable-next-line no-irregular-whitespace
export default {
  name: "Navbar",
};
</script>
