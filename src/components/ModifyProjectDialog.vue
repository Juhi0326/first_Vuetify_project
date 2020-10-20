<template>
  <div>
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          small
          @click="getContentById()"
          color="secondary mb-5"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon left>mdi mdi-checkbox-marked-circle</v-icon>
          Edit
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline grey lighten-3"> </v-card-title>
        <v-card-text>
          <v-form class="px-3">
            <v-textarea
              auto-grow
              rows="1"
              label="Title"
              :error-messages="titleErrors"
              v-model="title"
              prepend-icon="mdi mdi-format-title"
              required
              @input="$v.title.$touch()"
              @blur="$v.title.$touch()"
            >
            </v-textarea>
            <v-textarea
              label="Information"
              :error-messages="contentTextErrors"
              v-model="contentText"
              prepend-icon="mdi mdi-grease-pencil"
              required
              @input="$v.contentText.$touch()"
              @blur="$v.contentText.$touch()"
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
            @click="ModifyContent()"
            :loading="loading"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { format, parseISO } from "date-fns";
import { required, minLength } from "vuelidate/lib/validators";

// title cannot contain new line character
const enter = (value) => value.indexOf("\n") < 1;
export default {
  props: ["id"],
  data() {
    return {
      dialog: false,
      menu: false,
      loading: false,
      title: "",
      contentText: "",
      date: "",
    };
  },
  validations: {
    title: { required, minLength: minLength(3), enter },
    contentText: { required, minLength: minLength(3) },
    date: { required },
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
      !this.$v.title.enter &&
        errors.push("title cannot contain new line character!");
      return errors;
    },
    contentTextErrors() {
      const errors = [];
      if (!this.$v.contentText.$dirty) return errors;
      !this.$v.contentText.minLength &&
        errors.push("Content must be more then 3 characters long");
      !this.$v.contentText.required && errors.push("Content is required.");
      return errors;
    },
    dueErrors() {
      const errors = [];

      if (!this.$v.date.$dirty) return errors;
      !this.$v.date.required && errors.push("Due is required.");
      return errors;
    },
  },

  methods: {
    getContentById() {
      this.dialog = true;
      this.$store.getters.allProjects.forEach((doc) => {
        if (doc.id === this.id) {
          this.title = doc.title;
          this.contentText = doc.content;
          this.date = doc.due;
        }
      });
    },

    ModifyContent() {
      for (let i = 0; i < this.$store.getters.allProjects.length; i++) {
        const element = this.$store.getters.allProjects[i];
        if (element.id === this.id) {
          element.content = this.contentText;
          element.due = this.date;
          element.title = this.title;
        }
      }

      this.dialog = false;
    },
    cancel() {
      this.dialog = false;
    },
  },
};
</script>
