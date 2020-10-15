<template>
  <div class="text-center">
    <!-- dialog for delete project -->
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn @click="dialog=true" color="green lighten-2 mb-5" dark v-bind="attrs" v-on="on">
          proba
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
          <v-btn color="green darken-1" text @click="clearId2()">
            No
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

export default {

data () {
    return {
    dialog: false
    }
},

methods: {
deleteProject() {
   this.$emit("projectDeleted"); 
   this.dialog=false;
   }
}

};


</script>
