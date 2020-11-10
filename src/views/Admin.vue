<template>
  <v-container class="mt-12">
      This is the Admin page
    <v-row>
      <v-col class="flex-md-row">
        <v-card>
          <v-form @submit.prevent="addAdmin" ref="adminForm">
            <v-img height="300" src="../assets/haziko.jpg"></v-img>
            <v-card-title class="pa-12"> Admin Form</v-card-title>
            <v-divider> </v-divider>
            <div>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="email"
                    label="Email"
                    required
                    class="px-12 pt-12"
                  ></v-text-field>
                <v-btn class="ml-12 mb-12" type="submit">
                    add Admin
                </v-btn>
                </v-col>
              </v-row>
            </div>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
//import * as firebase from "firebase/app";
import {fc} from "@/fb";
import "firebase/auth";

//const fbFunctions = firebase.functions();

export default {

    data() {
    return {
      email: "",
    };
  },
  methods: {
      addAdmin() {
        const addAdminRole= fc.functions.httpsCallable('addAdminRole');
        addAdminRole({email: this.email}).then(result=> {
            console.log(result);
        })
      }
  }
};
</script>

<style scoped></style>
