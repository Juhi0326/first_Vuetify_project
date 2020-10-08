<template>
  <div class="Dashboard">
    <h1 class="subheading grey--text">This is the Dashboard page</h1>
    <v-container class="my-5">
      <v-row justify="center">
        <v-col cols="12" md="3">
          <v-btn outlined block text color="grey">click me</v-btn>
        </v-col>
        <v-col cols="12" md="3">
          <v-btn outlined block text color="grey">click me again</v-btn>
        </v-col>
      </v-row>

      <v-row justify="center" no-gutters>
        <v-col cols="12" md="3">
          
            <v-btn outlined block text color="grey">click me</v-btn>
     
        </v-col>
        <v-col cols="12" md="3">
        
            <v-btn outlined block text color="grey">click me again</v-btn>
         
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  components: {},
};
</script>
