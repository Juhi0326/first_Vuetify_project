<template>
  <v-container class="mt-12">
    <v-row>
      <v-col class="flex-md-row">
        <v-card>
          <v-form @submit.prevent="login">
            <v-img height="300" src="../assets/haziko.jpg"></v-img>
            <v-card-title class="pa-12">Login Form</v-card-title>
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
                  <v-text-field
                    v-model="password"
                    label="Password"
                    :type="show1 ? 'text' : 'password'"
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                     @click:append="show1 = !show1"
                    required
                    class="px-12"
                  ></v-text-field>
                  <div v-if="errorMessage"
                  class="px-12 pt-12 red--text"
                  >
                    {{errorMessage}}
                  </div>
                </v-col>
              </v-row>
            </div>
            <v-btn type="submit" class="ma-12">Submit</v-btn>
            <v-btn @click="cancel()" class="ma-12">Cancel</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
import {bus} from "../main";
export default {
  data() {
    return {
      show1:false,
      email: "",
      password: "",
      errorMessage: ""
      
    };

  },
  methods: {
   async login() {
     try {
       await firebase.auth().signInWithEmailAndPassword(this.email,this.password);
       this.errorMessage="";
       bus.$emit('login');
       firebase
          .auth()
          .currentUser.getIdTokenResult(/* forceRefresh */ true)
          .then(function(idToken) {
            console.log(idToken.claims.admin);
            console.log(firebase.auth().currentUser)
            // ...
          })
          .catch(function(error) {
            console.log(error);
          });
       this.$router.replace({name:"Dashboard"});

     } catch (error) {
       
       this.errorMessage=error.message
     }
     
    },
    cancel() {
      this.$router.replace({name:"Home"});
    }
  },
};
</script>
