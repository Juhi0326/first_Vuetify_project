<template>
  <v-container>
    user list
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left py-6">
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
          <tr v-for="(user, i) in users" :key="i" >
            <td class="py-6">{{ user.firstName }} {{ user.lastName }}</td>
            <td class="py-6" v-if="user.admin">Admin</td>
            <td class="py-6" v-else></td>
            <td class="py-6">
              <v-chip class="chip" :to="{name: 'UserDetails', params: {id:user.userId} }">
                <v-icon left>
                  mdi mdi-pencil
                </v-icon>
                Edit
              </v-chip>
            </td>
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
  method: {
      editUser() {
          
      }
  }
};
</script>

<style scoped>

.chip:hover {
    cursor: pointer;
    background-color:mediumorchid;
    color: snow;
}

</style>
