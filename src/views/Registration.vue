<template>
  <div>
    <v-container class="mt-12">
      <v-form>
        <v-stepper v-model="counter" vertical>
          <div>
            <v-row class="d-flex flex-wrap-reverse">
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
                    <v-text-field
                      flat
                      v-model="firstName"
                      label="First Name"
                      required
                      :error-messages="firstNameErrors"
                      v-on:keyup.13="firstNameSubmit()"
                      ref="firstName"
                    ></v-text-field>
                  </v-card>
                  <v-btn color="primary" @click="firstNameSubmit()">
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
                    <v-text-field
                      flat
                      v-model="lastName"
                      label="Last Name"
                      required
                      :error-messages="lastNameErrors"
                      v-on:keyup.13="lastNameSubmit()"
                      ref="lastName"
                    ></v-text-field>
                  </v-card>
                  <v-btn color="primary" @click="lastNameSubmit()">
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
                    <v-text-field
                      flat
                      v-model="email"
                      label="email address"
                      required
                      :error-messages="emailErrors"
                      v-on:keyup.13="emailSubmit()"
                      ref="email"
                    ></v-text-field
                  ></v-card>
                  <v-btn color="primary" @click="emailSubmit()">
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
                      :error-messages="password1Errors"
                      label="Normal with hint text"
                      hint="8-10 Character Password with lowercase, uppercase letters, numbers, 
                    special characters and at least one lowercase letter, one uppercase letter, one number and one special character"
                      counter
                      @click:append="show1 = !show1"
                      v-on:keyup.13="password1Submit()"
                      ref="password1"
                    ></v-text-field>
                  </v-card>
                  <v-btn color="primary" @click="password1Submit()">
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
                      :error-messages="password2Errors"
                      name="input-10-1"
                      label="Normal with hint text"
                      hint="At least 8 characters"
                      counter
                      @click:append="show1 = !show1"
                      v-on:keyup.13="password2Submit()"
                      ref="password2"
                    ></v-text-field
                  ></v-card>
                  <v-btn color="primary" @click="password2Submit()">
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
                  <v-card
                    color="grey lighten-4"
                    class="pl-4 d-flex align-center"
                    height="200px"
                    max-width="500"
                  >
                    <v-card-subtitle>
                      Your first name: {{ firstName }}
                      <br />
                      Your last name: {{ lastName }}
                      <br />
                      Your email address: {{ email }}
                      <br />
                    </v-card-subtitle>
                  </v-card>
                  <v-btn color="primary" @click="save()" class="mt-4">
                    Save
                  </v-btn>
                  <v-btn
                    class="ml-3 mt-4"
                    color="accent"
                    text
                    @click="decrease()"
                  >
                    Back
                  </v-btn>
                  <router-link class="text-decoration-none" to="/">
                    <v-btn color="secondary" text class="ml-3 mt-4">
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
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs
} from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";
const alpha = helpers.regex("alpha", /^[a-zA-ZíÍéÉáÁőŐűŰúÚóÓüÜ/./-_ ]*$/);
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-useless-escape
const passw = helpers.regex("passw", /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~])[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8,20}$/);

export default {
  validations: {
    firstName: {
      required,
      minLength: minLength(3), 
      maxLength: maxLength(30),
      alpha,
    },
    lastName: {
      required,
      minLength: minLength(2),
      maxLength: maxLength(30),
      alpha,
    },
    email: { required, email},
    password1: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(20),
      passw,
    },
    password2: {
      required,
      sameAsPassword: sameAs("password1")
    },
  },
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
  computed: {
    firstNameErrors() {
      const errors = [];
      if (!this.$v.firstName.$dirty) return errors;
      !this.$v.firstName.minLength &&
        errors.push("first name must be more then 2 characters long");
      !this.$v.firstName.maxLength &&
        errors.push("first name must be less then 31 characters long");
      !this.$v.firstName.required && errors.push("first name is required.");
      !this.$v.firstName.alpha && errors.push("the first name can only contain letters");
      return errors;
    },
    lastNameErrors() {
      const errors = [];
      if (!this.$v.lastName.$dirty) return errors;
      !this.$v.lastName.minLength &&
        errors.push("last name must be more then 1 characters long");
      !this.$v.lastName.maxLength &&
        errors.push("last name must be less then 31 characters long");
      !this.$v.lastName.required && errors.push("last name is required.");
      !this.$v.lastName.alpha && errors.push("the last name can only contain letters");
      return errors;
    },
      emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.lastName.required && errors.push("email is required.");
      !this.$v.lastName.email && errors.push("the email must be in email format!");
      return errors;
    },
      password1Errors() {
      const errors = [];
      if (!this.$v.password1.$dirty) return errors;
      !this.$v.password1.required && errors.push("password is required.");
      !this.$v.password1.passw && errors.push("Password has to at least 8 characters long and less then 20 characters long with lowercase, uppercase letters,"+ 
      "numbers, special characters and at least one lowercase letter, one uppercase letter,"+
      " one number and one special character");
      return errors;
    },
      password2Errors() {
      const errors = [];
      if (!this.$v.password2.$dirty) return errors;
      !this.$v.password2.required && errors.push("password is required.");
      !this.$v.password2.sameAsPassword && errors.push("the password does not match")
      return errors;
    },

  },
  mounted() {
    this.setFocus();
  },
  methods: {
    firstNameSubmit() {
      this.$v.firstName.$touch();
      if (!this.$v.firstName.$error == true) {
        this.increase();
      }
    },
    lastNameSubmit() {
      this.$v.lastName.$touch();
      if (!this.$v.lastName.$error == true) {
        this.trimName(this.lastName);
        this.increase();
      }  
    },
      emailSubmit() {
      this.$v.email.$touch();
      if (!this.$v.email.$error == true) {
        this.increase();
      }  
    },
      password1Submit() {
      this.$v.password1.$touch();
      if (!this.$v.password1.$error == true) {
        this.increase();
      }  
    },
      password2Submit() {
        console.log(this.$v.password2);
      this.$v.password2.$touch();
      if (!this.$v.password2.$error == true) {
        this.increase();
      }  
    },
    increase() {
      this.counter = this.counter + 1;
      this.setFocus();
    },
    decrease() {
      this.counter = this.counter - 1;
      this.setFocus();
    },
    trimName(s) {
      return s=s.trim();
    },
    save() {},

    setFocus() {
      switch (this.counter) {
        case 1:
          this.$refs.firstName.focus();
          break;
        case 2:
          this.$refs.lastName.focus();
          break;
        case 3:
          this.$refs.email.focus();
          break;
        case 4:
          this.$refs.password1.focus();
          break;
        case 5:
          this.$refs.password2.focus();
          break;
        default:
          break;
      }
    },
  },
};
</script>
