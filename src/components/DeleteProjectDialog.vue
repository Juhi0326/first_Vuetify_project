<template>
  <div class="text-center">
    <!-- dialog for delete project -->
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          small
          @click="dialog = true"
          color="error mb-5"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left>mdi mdi-xamarin-outline</v-icon>
          Delete
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="headline">Are you sure to delete this project?</span>
        </v-card-title>
        <v-card-text>
          After you delete this project you will no longer be able to access it!
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="deleteProject()">
            Yes
          </v-btn>
          <v-btn color="green darken-1" text @click="cancel()">
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
//import db from "@/fb";
import {deleteProjectfromDb} from "../dbService"
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: ["id"],

  methods: {
    deleteProject() {
      for (let i = 0; i < this.$store.getters.allProjects.length; i++) {
        const element=this.$store.getters.allProjects[i]
        if (element.id === this.id) {
          deleteProjectfromDb("projects2",this.id).then(()=> {
              console.log("deleted  project");
          }).catch((err)=> {
            console.log(err)
          })
          break;
        }
      }
      this.$emit("project-deleted");
      this.dialog = false;
    },
    cancel() {
      this.dialog = false;
      this.$emit("cancel");
    },
  },
};
</script>
