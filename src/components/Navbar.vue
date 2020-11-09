<template>
  <nav>
    <v-snackbar dark color="primary" v-model="snackbar" :timeout="4000" top>
      <span>You added a new project!</span>
      <v-btn text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>

    <v-snackbar
      dark
      color="green accent-3"
      v-model="snackbarSingedIn"
      :timeout="4000"
      top
    >
      <span>You have signed in successfuly!</span>
      <v-btn text color="white" @click="snackbarSingedIn = false">Close</v-btn>
    </v-snackbar>

    <v-snackbar
      dark
      color="orange accent-2"
      v-model="snackbarSingedOut"
      :timeout="4000"
      top
      ><div class="d-flex justify-space-around">
        <span class="pt-2">You have signed out!</span>
        <v-btn text color="white" @click="snackbarSingedOut = false"
          >Close</v-btn
        >
      </div>
    </v-snackbar>

    <v-app-bar app flat height="150" class="grey lighten-4" hide-on-scroll>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-if="!isMobile">
        <span class="font-weight-light">Todo</span>
        <span>Projects</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn text color="grey" dark v-bind="attrs" v-on="on">
              Menu
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="(item, index) in items"
              :key="index"
              :to="item.route"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-if="loggedIn">
        <v-btn text color="grey" @click="signedOut()">
          <span>Sign out</span>
          <v-icon right>mdi mdi-exit-to-app </v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-if="loggedIn"
      app
      v-model="drawer"
      class="blue-grey lighten-5"
    >
      <v-list>
        <v-list-item class="px-2 ml-10 mt-5">
          <v-list-item-avatar size="150">
            <v-img src="/me3.jpg"></v-img>
          </v-list-item-avatar>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item class="ml-14">
          <v-list-item-title class="font-weight-bold">{{
            currentUser
          }}</v-list-item-title>
        </v-list-item>
      </v-list>
      <Popup @projectAdded="snackbar = true" />

      <v-divider></v-divider>
      <v-list dense>
        <v-list-item @click="drawer = !drawer">
          <v-list-item-icon class="font-weight-light">
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
import * as firebase from "firebase/app";
import "firebase/auth";
import Popup from "./Popup";
import { bus } from "../main";
export default {
  created() {
    bus.$on("login", () => {
      this.snackbarSingedIn = true;
      //   this.loggedIn = true;
      //   console.log(this.loggedIn);
    });
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
        this.snackbarSingedOut = true;
      }
    });
  },

  components: {
    Popup,
  },
  name: "Navbar",
  data() {
    return {
      snackbar: false,
      snackbar2: false,
      snackbarSingedIn: false,
      snackbarSingedOut: false,
      drawer: false,
      loggedIn: false,
      items: [
        { title: "Home", icon: "mdi mdi-home", route: "/" },
        { title: "Dashboard", icon: "mdi-view-dashboard", route: "/dashboard" },
        { title: "My Projects", icon: "mdi-forum", route: "/projects" },
        { title: "Team", icon: "mdi-forum", route: "/team" },
      ],
    };
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
    currentUser() {
      return this.$store.getters.getActiveUser;
    },
  },
  methods: {
    async signedOut() {
      try {
        await firebase.auth().signOut();
        console.log(this.$router.currentRoute.path);
        if (this.$router.currentRoute.path === "/") {
          this.loggedIn = false;
        } else {
          this.$router.push("/");
          this.loggedIn = false;
        }
        this.snackbarSingedOut = true;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
