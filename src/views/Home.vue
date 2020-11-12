<template>
  <div>
    <v-container>
      <h1 class="text-center">
        Welcome to my Page!
      </h1>
      <br />

      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="500px"
        ></v-img>

        <v-card-title>
          <h3 v-if="!loggedIn">
            In order to use this project management page, you should sign in or
            fill the registration form.
          </h3>
          <h3 v-else>
              Welcome on board! :)
          </h3>
        </v-card-title>

        <v-card-actions>
          <router-link class="text-decoration-none" to="/login">
            <v-btn color="orange" text large v-if="!loggedIn">
              Sign in
            </v-btn>
          </router-link>

          <!-- <router-link class="text-decoration-none" to="/register">
            <v-btn large color="orange" text v-if="!loggedIn">
              Register
            </v-btn>
          </router-link> -->
          <router-link class="text-decoration-none" to="/register2">
            <v-btn large color="orange" text v-if="!loggedIn">
              Register
            </v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import "firebase/auth";
import * as firebase from "firebase/app";
export default {
  computed : {
    loggedInUser() {
      return this.$store.getters.getActiveUser;
    }
  },
  created() {
     firebase.auth().onAuthStateChanged(user=>{
       if (user) {
         this.loggedIn=true
       } else {
         this.loggedIn=false
       }
     })
  },
  data() {
    return {
      loggedIn: false,
    };
  },
};
</script>
