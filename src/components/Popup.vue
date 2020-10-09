<template>
  <div class="text-center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green lighten-2 mb-5"
          dark
          v-bind="attrs"
          v-on="on"
          @click="openDialog()"
        >
          Add new project
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-3"> </v-card-title>

        <v-card-text>
          <v-form class="px-3" ref="form">
            <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="mdi mdi-format-title"
              :rules="inputRules"
              :counter="3"
              required
            >
            </v-text-field>
            <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="mdi mdi-grease-pencil"
              :rules="inputRules"
              :counter="3"
              required
            ></v-textarea>

            <v-container>
              <v-row>
                <v-col cols="12" lg="6">
                  <v-menu
                    v-model="menu"
                    :close-on-content-click="false"
                    max-width="290"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        required
                        :value="computedDateFormattedDatefns"
                        clearable
                        label="Due date"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        v-model="date"
                        @click:clear="date = null"
                        prepend-icon="mdi-calendar"
                        :rules="dateRule"
                      ></v-text-field>
                    </template>
                    <v-date-picker
                      v-model="date"
                      @change="menu = false"
                    ></v-date-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-container>
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
import { format, parseISO } from "date-fns";

export default {
  data() {
    return {
      
      valid: false,
      date: null,
      menu: false,
      dialog: false,
      title: "",
      content: "",
      inputRules: 
      [
        (v) => !!v || "This field is required",
        (v) => v.length >= 3 || "This field must be more than 3 characters",
      ],
      dateRule: [(v) => !!v || "This field is required"],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.dialog = false;
        console.log(this.title, this.content, this.date);
        this.title = "";
        this.content = "";
        
      }
    },
    openDialog() {
      
      this.title = "";
      this.content = "";
      this.date = null;
    },
  },
  computed: {
    computedDateFormattedDatefns() {
      return this.date
        ? format(parseISO(new Date().toISOString()), "yyyy.MM.dd")
        : "";
    },
  },
};
</script>
