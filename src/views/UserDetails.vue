<template>
  <v-container>
    <div>
      <h1>User Details</h1>
      <h1>{{user.firstName}}</h1>
      <h1>{{user.lastName}}</h1>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        userId: this.$route.params.id,
    };
  },
  computed: {
      user() {
          console.log(this.$store.getters.getAllUsers);
          console.log(this.userId);
            return this.$store.getters.getAllUsers.find(user=> user.id === this.userId)
      }
  }
};
</script>

<style scoped></style>
