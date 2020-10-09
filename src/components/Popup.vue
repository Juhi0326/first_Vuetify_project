<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="green lighten-2 mb-5" dark v-bind="attrs" v-on="on">
          Add new project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-3"> </v-card-title>

        <v-card-text>
          <v-form class="px-3">
            <v-text-field label="Title" v-model="title" prepend-icon="mdi mdi-format-title"> </v-text-field>
            <v-textarea label="Information" v-model="content" prepend-icon="mdi mdi-grease-pencil"></v-textarea>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green lighten-2 mb-5" dark @click="submit">
            Add project
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
      title: "",
      content:""
    };
  },
  methods: {
      submit() {
          this.dialog=false;
          console.log(this.title, this.content);
          this.title='';
          this.content=''
      }
  }
};
</script>
