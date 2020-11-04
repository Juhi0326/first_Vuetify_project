<template>
  <v-container class="mt-12">
    <v-row>
      <v-col class="max-width: 600px" cols="12" sm="8" md=7>
        <v-card>
          <v-img
            height="250"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
          ></v-img>
          <v-card-title>Login Form</v-card-title>
          <v-divider> </v-divider>
          <v-text-field
            v-model="email"
            label="Email"
            required
            class="px-12 pt-12"
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="Password"
            required
            class="px-12"
          ></v-text-field>
          <v-btn class="ma-12">Submit</v-btn>
          <v-btn class="ma-12">Cancel</v-btn>
        </v-card>
      </v-col>
    </v-row>
    <v-form @submit.prevent="login"> </v-form>
  </v-container>
</template>

<script>
export default {};
</script>
