<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="green lighten-2 mb-5" dark v-bind="attrs" v-on="on">
          Add new project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Popup title
        </v-card-title>

        <v-card-text>
          Popup text
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="dialog = false">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
      return {
        dialog: false,
      }
  },
};
</script>
