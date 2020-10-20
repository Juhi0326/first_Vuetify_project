<template>
  <div class="Projects">
    <div class="text-center">
      <v-snackbar
        dark
        color="primary"
        v-model="snackbarDelete"
        :timeout="4000"
        top
      >
        <span>You have deleted the project!</span>
        <v-btn text color="white" @click="snackbarDelete = false">Close</v-btn>
      </v-snackbar>

      <v-snackbar
        dark
        color="primary"
        v-model="snackbarCompleted"
        :timeout="4000"
        top
      >
        <span>You have set this project to completed!</span>
        <v-btn text color="white" @click="snackbarCompleted = false"
          >Close</v-btn
        >
      </v-snackbar>
    </div>
    <h1 class="subheading grey--text ml-12">Own projects</h1>
    <v-container class="my-5">
      <v-row>
        <v-col>
          <template>
            <v-expansion-panels
              v-for="(project, i) in myProjects"
              :key="i"
              :class="`pa-2 project ${project.status}`"
            >
              <v-expansion-panel>
                <v-expansion-panel-header @click="id = project.id">
                  {{ project.title }}
                </v-expansion-panel-header>
                <v-expansion-panel-content class="px-4 grey--text">
                  <div class="font-weight-bold">{{ project.due }}</div>
                  <div>{{ project.content }}</div>
                  <v-divider></v-divider>
                  <v-row class="mt-6">
                    <v-col cols="12" sm="4">
                      <DeleteProjectDialog
                        @projectDeleted="deleteProject()"
                        @cancel="clearId()"
                      />
                    </v-col>

                    <v-col cols="12" sm="4">
                      <ModifyProjectDialog
                        :title.sync="title"
                        :contentText="contentText"
                        :date="date"
                        @getContent="getContentById()"
                        @modifyContent="changeContent()"
 
                      />
                    </v-col>

                    <v-col
                      cols="12"
                      sm="4"
                      v-if="project.status !== 'completed'"
                    >
                      <SetCompletedDialog
                        @setCompleted="setComplete()"
                        @cancel="clearId()"
                      />
                    </v-col>

                    <v-col cols="12" sm="4">
                      <v-btn
                        small
                        color="secondary"
                        class="mr-6"
                        @click="getContentById()"
                      >
                        <v-icon left>mdi mdi-checkbox-marked-circle</v-icon>
                        Edit</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
        </v-col>
      </v-row>
      <!-- dialog for change project content -->
      <template>
        <div class="text-center">
          <v-dialog v-model="dialog3" max-width="600px">
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
                  @click="changeContent()"
                  :loading="loading"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </template>
    </v-container>
  </div>
</template>

<script>
import { format, parseISO } from "date-fns";
import db from "@/fb";
import { required, minLength } from "vuelidate/lib/validators";
import DeleteProjectDialog from "../components/DeleteProjectDialog";
import SetCompletedDialog from "../components/SetCompletedDialog";
import ModifyProjectDialog from "../components/ModifyProjectDialog";

// title cannot contain new line character
const enter = (value) => value.indexOf("\n") < 1;

export default {
  name: "Projects",
  components: {
    DeleteProjectDialog,
    SetCompletedDialog,
    ModifyProjectDialog,
  },
  validations: {
    title: { required, minLength: minLength(3), enter },
    contentText: { required, minLength: minLength(3) },
    date: { required },
  },
  data() {
    return {
     
      dialog: false,
      dialog2: false,
      dialog3: false,
      id: null,
      title: "",
      contentText: "",
      date: "",
      menu: false,
      loading: false,
      snackbarDelete: false,
      snackbarCompleted: false,
    };
  },
  computed: {
    // projects: function() {
    //   return this.$store.state.projects;
    // },
    myProjects: function () {
      return this.$store.getters.filteredProjects
    },
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
      this.dialog3 = true;
      db.collection("projects2")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.id === this.id) {
              this.title = doc.data().title;
              this.contentText = doc.data().content;
              this.date = doc.data().due;
            }
          });
        });
    },
    clearId() {
      this.id = null;
    },
    clearId2() {
      this.dialog2 = false;
      this.id = null;
    },
    setComplete() {
      this.dialog = false;
      for (let i = 0; i < this.myProjects.length; i++) {
        if (this.myProjects[i].id === this.id) {
          this.myProjects[i].status = "completed";
          break;
        }
      }
      this.snackbarCompleted = true;
    },

    deleteProject() {
      this.dialog2 = false;

              for (let i = 0; i < this.myProjects.length; i++) {
                if (this.myProjects[i].id === this.id) {
                  this.myProjects.splice(i, 1);
                  break;
                }
              }
    
      this.snackbarDelete = true;
    },
    changeContent() {
      this.dialog3 = false;
      this.$v.$touch();

      for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].id === this.id) {
          this.projects[i].title = this.title;
          this.projects[i].content = this.contentText;
          this.projects[i].due = this.date;

          break;
        }
      }
      //change title
      db.collection("projects2")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.id === this.id) {
              db.collection("projects2")
                .doc(doc.id)
                .update({ title: this.title })
                .then(() => {
                  this.title = "";
                });

              db.collection("projects2")
                .doc(doc.id)
                .update({ content: this.contentText })
                .then(() => {
                  this.contentText = "";
                });

              db.collection("projects2")
                .doc(doc.id)
                .update({ due: this.date })
                .then(() => {
                  this.date = null;
                });
            }
          });
        });
    },
  },
};
</script>

<style>
.project.completed {
  border-left: 4px solid rgb(0, 255, 0);
}
.project.ongoing {
  border-left: 4px solid rgb(255, 192, 0);
}
.project.overdue {
  border-left: 4px solid rgb(255, 0, 0);
}
.theme--light.v-chip:not(.v-chip--active).completed {
  background: rgb(0, 255, 0);
}
.theme--light.v-chip:not(.v-chip--active).ongoing {
  background: rgb(255, 192, 0);
}
.theme--light.v-chip:not(.v-chip--active).overdue {
  background: rgb(255, 0, 0);
}
</style>
