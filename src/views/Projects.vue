<template>
  <div class="Projects">
    <div class="text-center">
      <v-snackbar dark color="primary" v-model="snackbar2" :timeout="4000" top>
        <span>You have deleted the project!</span>
        <v-btn text color="white" @click="snackbar2 = false">Close</v-btn>
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
                <v-expansion-panel-header>
                  {{ project.title }}
                </v-expansion-panel-header>
                <v-expansion-panel-content class="px-4 grey--text">
                  <div class="font-weight-bold">{{ project.due }}</div>
                  <div>{{ project.content }}</div>
                  <v-divider></v-divider>
                  <v-row class="mt-6">
                    <v-col cols="12" sm="3">
                      <v-btn
                        small
                        color="error"
                        @click="changeIdDelete(project.id)"
                      >
                        <v-icon left>mdi mdi-xamarin-outline</v-icon
                        >Delete</v-btn
                      >
                    </v-col>

                    <v-col cols="12" sm="3">
                      <v-btn
                        small
                        color="secondary"
                        class="mr-6"
                        @click="changeIdContent(project.id)"
                      >
                        <v-icon left>mdi mdi-checkbox-marked-circle</v-icon>
                        Edit</v-btn
                      >
                    </v-col>

                    <v-col cols="12" sm="3">
                      <v-btn
                        small
                        v-if="project.status !== 'completed'"
                        color="primary"
                        dark
                        @click="changeIdStatus(project.id)"
                      >
                        <v-icon left>mdi mdi-checkbox-marked-circle</v-icon>
                        Done
                      </v-btn>
                    </v-col>
                    <v-col cols="12" sm="3">
                      <Proba @projectDeleted="deleteProjec2()"/>
                    </v-col>
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
        </v-col>
      </v-row>

      <!-- dialog for completed status -->

      <v-dialog v-model="dialog" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline"
              >Are you sure to set project status to completed?</span
            >
          </v-card-title>
          <v-card-text>
            After you set this project for completed status you will no longer
            be able to change the status!
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" text @click="setComplete()">
              Yes
            </v-btn>
            <v-btn color="green darken-1" text @click="clearId()">
              No
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- dialog for delete project -->
      <v-dialog v-model="dialog2" max-width="600px">
        <v-card>
          <v-card-title>
            <span class="headline">Are you sure to delete this project?</span>
          </v-card-title>
          <v-card-text>
            After you delete this project you will no longer be able to access
            it!
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
import Proba from "../components/Proba";
// title cannot contain new line character
const enter = (value) => value.indexOf("\n") < 1;

export default {
  name: "Projects",
  components: {
    Proba,
  },
  validations: {
    title: { required, minLength: minLength(3), enter },
    contentText: { required, minLength: minLength(3) },
    date: { required },
  },
  data() {
    return {
      projects: [],
      dialog: false,
      dialog2: false,
      dialog3: false,
      id: null,
      title: "",
      contentText: "",
      date: "",
      menu: false,
      loading: false,
      snackbar2: false,
      
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "Juhász István";
      });
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
  created() {
    db.collection("projects2").onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === "added") {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
  methods: {
    changeIdStatus(id) {
      this.id = id;
      this.dialog = true;
    },
    changeIdDelete(id) {
      this.id = id;
      this.dialog2 = true;
    },
    changeIdContent(id) {
      this.id = id;
      this.dialog3 = true;
      this.getContentById();
    },
    getContentById() {
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
      this.dialog = false;
      this.id = null;
    },
    clearId2() {
      this.dialog2 = false;
      this.id = null;
    },
    setComplete() {
      this.dialog = false;
      db.collection("projects2")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.id === this.id) {
              db.collection("projects2")
                .doc(doc.id)
                .update({ status: "completed" })
                .then(() => {});
              for (let i = 0; i < this.projects.length; i++) {
                if (this.projects[i].id === this.id) {
                  this.projects[i].status = "completed";
                  break;
                }
              }
            }
          });
        });
    },
    deleteProjec2() {
      this.snackbar2 = true;

    },
    deleteProject() {
      this.dialog2 = false;

      db.collection("projects2")
        .get()
        .then((snapshot) => {
          snapshot.docs.forEach((doc) => {
            if (doc.id === this.id) {
              db.collection("projects2")
                .doc(doc.id)
                .delete()
                .then(() => {});
              for (let i = 0; i < this.projects.length; i++) {
                if (this.projects[i].id === this.id) {
                  this.projects.splice(i, 1);
                  break;
                }
              }
            }
          });
        });
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
