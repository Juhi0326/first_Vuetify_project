<template>
  <v-container>
    user list
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Name
            </th>
            <th class="text-left">
              Admin
            </th>
            <th class="text-left">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, i) in users" :key="i">
            <td>{{ user.firstName }} {{ user.lastName }}</td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
//import db from "@/fb";
//import * as firebase from "firebase/app";
import "firebase/auth";

export default {
  created() {
    this.$store.dispatch("getUsers");
  },
  computed: {
    users() {
      return this.$store.getters.getAllUsers;
    },
  },

};
</script>

<style lang="scss" scoped></style>
