<template>
  <div>
    <v-container>
      <h1 class="text-h1 text--primary text-center">
        Welcome on my Page!
      </h1>
      <br />

      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="600px"
        ></v-img>

        <v-card-title>
          In order to use this project management page, you should sign in or
          fill the registration form.
        </v-card-title>

        <v-card-actions>
          <router-link class="text-decoration-none" to="/login">
            <v-btn color="orange" text large>
              Sign in
            </v-btn>
          </router-link>

          <v-btn large color="orange" text>
            Register
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
