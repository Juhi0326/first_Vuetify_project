<template>
  <v-snackbar dark :color="color" v-model="snackbar" :timeout="4000" top>
    <span>{{text}}</span>
    <v-btn text color="white" @click="snackbar = false">Close</v-btn>
  </v-snackbar>
</template>

<script>
export default {
  props: ["text", "color"],
  data() {
    return {
    snackbar: false
    };
  },
};
</script>

<style scoped></style>
