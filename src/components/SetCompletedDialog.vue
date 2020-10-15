<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          small
          @click="dialog = true"
          color="primary mb-5"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left>mdi mdi-checkbox-marked-circle</v-icon>
          Done
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline"
            >Are you sure to set project status to completed?</span
          >
        </v-card-title>
        <v-card-text>
          After you set this project for completed status you will no longer be
          able to change the status!
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="setComplete()">
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
export default {
  data() {
    return {
      dialog: false,
    };
  },

  methods: {
    setComplete() {
      this.$emit("setCompleted");
      this.dialog = false;
    },
    cancel() {
        this.dialog = false;
    }
  },
};
</script>
