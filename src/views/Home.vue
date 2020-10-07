<template>
  <div class="home">
    <h1>This is the Home page</h1>
    <v-btn class="pink white--text">Click me</v-btn>
    <v-btn depressed dark color="pink">Click me again</v-btn>
    <v-btn text color="primary">Click me again</v-btn>
    <v-btn text dark small color="pink">
       Click me again
      <v-icon right>
        mdi-pencil
      </v-icon>
    </v-btn>
        <v-btn fab dark small color="pink">
      <v-icon>
        mdi mdi-bug
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<!-- csak akkor műkodik a saját style, ha nincs mögötte a scope kifejezés! -->
<style>
.uppercase {
  text-transform: uppercase;
}
</style>
