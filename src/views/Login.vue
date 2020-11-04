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
                    required
                    class="px-12"
                  ></v-text-field>
                </v-col>
              </v-row>
            </div>
            <v-btn type="submit" class="ma-12">Submit</v-btn>
            <v-btn class="ma-12">Cancel</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import * as firebase from "firebase/app";
import "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
   async login() {
     try {
       const val= await firebase.auth().signInWithEmailAndPassword(this.email,this.password);
       console.log(val);
       this.$router.replace({name:"Dashboard"});
     } catch (error) {
       console.log(error)
     }
     
    },
  },
};
</script>
