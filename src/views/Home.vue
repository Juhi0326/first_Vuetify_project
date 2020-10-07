<template>
  <div class="home">
    <h1>This is the Home page</h1>
    <v-btn class="pink white--text">Click me</v-btn>
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
