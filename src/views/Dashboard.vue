<template>
  <div class="Dashboard">
    <h1 class="subheading grey--text">This is the Dashboard page</h1>
    <v-container class="my-5">
      <v-card class="pa-4">
        <v-row>
          <v-col cols="12" md="6">
            <div class="caption grey--text">
              Project title
            </div>
            <div>Create a new website</div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">
              Person
            </div>
            <div>
              Juhász István
            </div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">
              Due by
            </div>
            <div>
              2020.11.01
            </div>
          </v-col>
          <v-col cols="6" sm="4" md="2">
            <div class="caption grey--text">
              Status
            </div>
            <div>
              ongoing
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
};
</script>
