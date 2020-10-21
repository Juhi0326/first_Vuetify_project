<template>
  <div>
    <v-container class="mt-12">
      <v-form>
        <v-stepper v-model="counter" vertical>
          <div>
            <v-row>
              <v-col>
                <v-stepper-step :complete="counter > 1" step="1">
                  Enter your first name
                  <small></small>
                </v-stepper-step>

                <v-stepper-content step="1">
                  <v-card
                    color="grey lighten-4"
                    class="mb-12"
                    height="50px"
                    max-width="500"
                  >
                    <v-textarea
                      flat
                      v-model="firstName"
                      label="First Name"
                      required
                    ></v-textarea>
                  </v-card>
                  <v-btn color="primary" @click="increase()">
                    Continue
                  </v-btn>
                  <router-link class="text-decoration-none" to="/">
                    <v-btn color="secondary" text class="ml-3">
                      Cancel
                    </v-btn>
                  </router-link>
                </v-stepper-content>

                <v-stepper-step :complete="counter > 2" step="2">
                  Enter your last name
                </v-stepper-step>

                <v-stepper-content step="2">
                  <v-card
                    color="grey lighten-4"
                    class="mb-12"
                    height="50px"
                    max-width="500"
                  >
                    <v-textarea
                      flat
                      v-model="lastName"
                      label="Last Name"
                      required
                    ></v-textarea>
                  </v-card>
                  <v-btn color="primary" @click="increase()">
                    Continue
                  </v-btn>
                  <v-btn class="ml-3" color="accent" text @click="decrease()">
                    Back
                  </v-btn>
                  <router-link class="text-decoration-none" to="/">
                    <v-btn color="secondary" text class="ml-3">
                      Cancel
                    </v-btn>
                  </router-link>
                </v-stepper-content>

                <v-stepper-step :complete="counter > 3" step="3">
                  Enter your Email address
                </v-stepper-step>

                <v-stepper-content :complete="counter > 3" step="3">
                  <v-card
                    color="grey lighten-4"
                    class="mb-12"
                    height="50px"
                    max-width="500"
                  >
                    <v-textarea
                      flat
                      v-model="email"
                      label="email address"
                      required
                    ></v-textarea
                  ></v-card>
                  <v-btn color="primary" @click="increase()">
                    Continue
                  </v-btn>
                  <v-btn class="ml-3" color="accent" text @click="decrease()">
                    Back
                  </v-btn>
                  <router-link class="text-decoration-none" to="/">
                    <v-btn color="secondary" text class="ml-3">
                      Cancel
                    </v-btn>
                  </router-link>
                </v-stepper-content>

                <v-stepper-step :complete="counter > 4" step="4">
                  Enter a password
                </v-stepper-step>

                <v-stepper-content :complete="counter > 4" step="4">
                  <v-card
                    color="grey lighten-4"
                    class="mb-12"
                    height="50px"
                    max-width="500"
                  >
                    <v-text-field
                      v-model="password1"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Normal with hint text"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field>
                  </v-card>
                  <v-btn color="primary" @click="increase()">
                    Continue
                  </v-btn>
                  <v-btn class="ml-3" color="accent" text @click="decrease()">
                    Back
                  </v-btn>
                  <router-link class="text-decoration-none" to="/">
                    <v-btn color="secondary" text class="ml-3">
                      Cancel
                    </v-btn>
                  </router-link>
                </v-stepper-content>

                <v-stepper-step :complete="counter > 5" step="5">
                  Confirm your password
                </v-stepper-step>

                <v-stepper-content :complete="counter > 5" step="5">
                  <v-card
                    color="grey lighten-4"
                    class="mb-12"
                    height="50px"
                    max-width="500"
                  >
                    <v-text-field
                      v-model="password2"
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      name="input-10-1"
                      label="Normal with hint text"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                    ></v-text-field
                  ></v-card>
                  <v-btn color="primary" @click="increase()">
                    Continue
                  </v-btn>
                  <v-btn class="ml-3" color="accent" text @click="decrease()">
                    Back
                  </v-btn>
                  <router-link class="text-decoration-none" to="/">
                    <v-btn color="secondary" text class="ml-3">
                      Cancel
                    </v-btn>
                  </router-link>
                </v-stepper-content>

                <v-stepper-step step="6">
                  View your data (without password)
                </v-stepper-step>
                <v-stepper-content step="6">
                  <v-card color="grey lighten-4" class="mb-12" height="200px">
                    Your first name: {{ firstName }}
                    <br />
                    Your last name: {{ lastName }}
                    <br />
                    Your email address: {{ email }}
                    <br />
                  </v-card>
                  <v-btn color="primary" @click="save()">
                    Save
                  </v-btn>
                  <v-btn class="ml-3" color="accent" text @click="decrease()">
                    Back
                  </v-btn>
                  <router-link class="text-decoration-none" to="/">
                    <v-btn color="secondary" text class="ml-3">
                      Cancel
                    </v-btn>
                  </router-link>
                </v-stepper-content>
              </v-col>
              <v-col>
                <v-img
                  src="../assets/spacex.jpg"
                  height="600px"
                  class="mr-8 mt-8"
                ></v-img>
              </v-col>
            </v-row>
          </div>
        </v-stepper>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 1,
      show1: false,
      show2: false,
      firstName: "",
      lastName: "",
      email: "",
      password1: "",
      password2: "",
    };
  },
  methods: {
    increase() {
      this.counter = this.counter + 1;
    },
    decrease() {
      this.counter = this.counter - 1;
    },
    save() {},
  },
};
</script>
