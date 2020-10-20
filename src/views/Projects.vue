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
                        :id="id"
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
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </template>
        </v-col>
      </v-row>
     
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
    myProjects: function() {
      return this.$store.getters.filteredProjects;
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

      this.myProjects.forEach((doc) => {
        if (doc.id === this.id) {
          this.title = doc.title;
          this.contentText = doc.content;
          this.date = doc.due;
        }
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

      for (let i = 0; i < this.myProjects.length; i++) {
        if (this.myProjects[i].id === this.id) {
          this.myProjects[i].title = this.title;
          this.myProjects[i].content = this.contentText;
          this.myProjects[i].due = this.date;

          break;
        }
      }
      this.myProjects.forEach((doc) => {
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
