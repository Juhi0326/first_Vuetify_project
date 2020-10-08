<template>
  <div class="Projects">
    <h1 class="subheading grey--text">This is projects page</h1>
    <v-container class="my-5">
      <template>
        <v-expansion-panels>
          <v-expansion-panel v-for="(project, i) in myProjects" :key="i">
            <v-expansion-panel-header>
              {{ project.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content class="px-4 grey--text">
              <div class="font-weight-bold">{{ project.due }}</div>
              <div>{{ project.content }}</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </template>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Projects",
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "Juhász István",
          due: "2020.11.01",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi reprehenderit accusantium itaque distinctio officia ratione error. Soluta, consequatur? Vitae at eum deleniti, iste veniam sapiente! Id hic nisi magni doloribus?",
        },
        {
          title: "Code the homepage",
          person: "Bigos András",
          due: "2020.12.01",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi reprehenderit accusantium itaque distinctio officia ratione error. Soluta, consequatur? Vitae at eum deleniti, iste veniam sapiente! Id hic nisi magni doloribus?",
        },
        {
          title: "Design video thumbnails",
          person: "Borzsák Anna",
          due: "2020.10.01",
          status: "complete",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi reprehenderit accusantium itaque distinctio officia ratione error. Soluta, consequatur? Vitae at eum deleniti, iste veniam sapiente! Id hic nisi magni doloribus?",
        },
        {
          title: "Create a community forum",
          person: "Márkus Szabolcs",
          due: "2020.10.01",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi reprehenderit accusantium itaque distinctio officia ratione error. Soluta, consequatur? Vitae at eum deleniti, iste veniam sapiente! Id hic nisi magni doloribus?",
        },
        {
          title: "Design a new website again",
          person: "Juhász István",
          due: "2020.12.01",
          status: "ongoing",
          content:
            "Ez már a második projectem leírása",
        }
      ],
    };
  },
  computed: {
    myProjects() {
      return this.projects.filter((project) => {
        return project.person === "Juhász István";
      });
    },
  },
};
</script>
