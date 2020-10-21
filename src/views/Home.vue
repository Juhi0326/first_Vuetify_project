<template>
  <div>
    <v-container>
      <h1 class="text-h1 text--primary text-center">
        Welcome to my Page!
      </h1>
      <br />

      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
          height="600px"
        ></v-img>

        <v-card-title>
            <h3>
          In order to use this project management page, you should sign in or
          fill the registration form.
          </h3>
        </v-card-title>

        <v-card-actions>
          <router-link class="text-decoration-none" to="/login">
            <v-btn color="orange" text large>
              Sign in
            </v-btn>
          </router-link>

          <router-link class="text-decoration-none" to="/register">
            <v-btn large color="orange" text>
              Register
            </v-btn>
          </router-link>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
