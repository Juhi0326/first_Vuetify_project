<template>
  <v-container class="mt-12">
    This is the Admin page
    <v-row>
      <v-col class="flex-md-row">
        <v-card>
          <v-form @submit.prevent="addFirebaseAdmin" ref="adminForm">
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

                  <v-btn dark color="error mb-5" class="ml-12 mb-12" @click="deleteFirebaseAdmin()">
                    <v-icon left>mdi mdi-xamarin-outline</v-icon>
                    delete Admin
                    
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
import db from "@/fb";
import "firebase/auth";
import * as firebase from "firebase/app";

const fbFunctions = firebase.functions();

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    addFirebaseAdmin() {
      const adminEmail = this.email;
      const addAdminRole = fbFunctions.httpsCallable("addAdminRole");
      addAdminRole({ email: adminEmail }).then((result) => {
        console.log(result);
        this.setAdmin();
      });
    },
    deleteFirebaseAdmin() {
      const adminEmail = this.email;
      const SetAdminFalse = fbFunctions.httpsCallable("SetAdminFalse");
      SetAdminFalse({ email: adminEmail }).then((result) => {
        console.log(result);
        this.setAdminToFalse();
      });
    },
    setAdmin() {
      db.collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().email === this.email) {
              db.collection("users")
                .doc(doc.id)
                .update({ admin: true });
            }
          });
        });
    },
    setAdminToFalse() {
      db.collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().email === this.email) {
              db.collection("users")
                .doc(doc.id)
                .update({ admin: false });
            }
          });
        });
    },
  },
};
</script>

<style scoped></style>
