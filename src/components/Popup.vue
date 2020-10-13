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
            <v-text-field
              label="Title"
              :error-messages="titleErrors"
              v-model="title"
              prepend-icon="mdi mdi-format-title"
              required
              @input="$v.title.$touch()"
              @blur="$v.title.$touch()"
            >
            </v-text-field>
            <v-textarea
              label="Information"
              :error-messages="contentErrors"
              v-model="content"
              prepend-icon="mdi mdi-grease-pencil"
              required
              @input="$v.content.$touch()"
              @blur="$v.content.$touch()"
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
                        :error-messages="dueErrors"
                        :value="computedDateFormattedDatefns"
                        clearable
                        label="Due date"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        v-model="date"
                        @click:clear="date = null"
                        prepend-icon="mdi-calendar"
                        @input="$v.date.$touch()"
                        @blur="$v.date.$touch()"
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
          <v-btn
            color="green lighten-2 mb-5"
            dark
            @click="submit"
            :loading="loading"
          >
            Add project
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { format, parseISO } from "date-fns";
import db from "@/fb";
import { required, minLength } from "vuelidate/lib/validators";
import { validationMixin } from "vuelidate";

export default {
  mixins: [validationMixin],
  validations: {
    title: { required, minLength: minLength(3) },
    content: { required, minLength: minLength(3) },
    date: { required },
  },
  data() {
    return {
      valid: true,
      date: null,
      menu: false,
      dialog: false,
      title: "",
      content: "",
      loading: false,
    };
  },
  methods: {
    submit() {
      this.$v.$touch();

      if (!this.$v.invalid) {
        const project = {
          title: this.title,
          content: this.content,
          due: this.date.toString(),
          person: "Juhász István",
          status: "ongoing",
        };

        db.collection("projects2")
          .add(project)
          .then(() => {
            this.loading = false;
            this.dialog = false;
            this.$emit("projectAdded");
            this.clear();
            
          });
      }
    },
    clear() {
      this.$v.$reset()
      this.title = "";
      this.content = "";
      this.date = null;
    },
  },
  computed: {
    computedDateFormattedDatefns() {
      return this.date
        ? format(parseISO(new Date().toISOString()), "yyyy-MM-dd")
        : "";
    },

    titleErrors() {
    
      const errors = [];
      if (!this.$v.title.$dirty) return errors;
      !this.$v.title.minLength &&
        errors.push("Title must be more then 3 characters long");
      !this.$v.title.required && errors.push("Title is required.");
      return errors;
    },
    contentErrors() {
      
      const errors = [];
      if (!this.$v.content.$dirty) return errors;
      !this.$v.content.minLength &&
        errors.push("Content must be more then 3 characters long");
      !this.$v.content.required && errors.push("Content is required.");
      return errors;
    },
    dueErrors() {
      const errors = [];
      
      if (!this.$v.date.$dirty) return errors;
      !this.$v.date.required && errors.push("Due is required.");
      return errors;
    },
  },
};
</script>
