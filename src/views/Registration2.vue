<template>
    <v-container class="mt-12">
      <v-form>
        <v-stepper v-model="counter" vertical>
        <br>
          <span class="pa-12">
            Registration 2 form
          </span>
          <div>
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

                <!-- address -->

                <v-stepper-step :complete="counter > 6" step="6">
                  Enter your address
                </v-stepper-step>

                <v-stepper-content :complete="counter > 6" step="6">

                  <v-card
                    color="grey lighten-4"
                    class="mb-12"
                    max-height="1000px"
                    max-width="500"
                  >
                  <v-card-title>Billing Address</v-card-title>
                    <v-text-field 
                    label="postcode" 
                    class="ml-4" 
                    v-model="postcode" 
                    :error-messages="postcodeErrors">
                    </v-text-field>

                    <v-text-field 
                    label="city" 
                    v-model="city"
                    :error-messages="cityErrors"
                    class="ml-4"> 
                    </v-text-field>

                    <v-text-field 
                    label="street" 
                    v-model="street" 
                    :error-messages="streetErrors"
                    class="ml-4"> </v-text-field>

                    <v-text-field 
                    label="house number" 
                    v-model="houseNumber" 
                    :error-messages="houseNumberErrors"
                    class="ml-4">
                    </v-text-field>

                    <v-radio-group v-model="radioGroup">
                      <v-radio
                        :label="`Delivery address is the same`"
                        :value="1"
                      ></v-radio>
                      <v-radio
                        :label="`A kiszállítási cím eltér a számlázási címtől`"
                        :value="2"
                      ></v-radio>
                    </v-radio-group>
  
                  </v-card> 
                  
                  <!-- buttons in case of only billing address -->
                  <v-btn color="primary" @click="addressSubmit()">
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

                <!-- innen jön a delivery address --> 

                <v-stepper-step :complete="counter > 7 && deliveryAddress" step="7">
                  Enter your delivery address
                </v-stepper-step>
                <v-stepper-content :complete="counter > 7 && deliveryAddress" step="7">
               <v-card
                      v-if="deliveryAddress"
                      color="grey lighten-4"
                      class="mb-12"
                      max-height="500px"
                      max-width="500"
                    >
                    <v-card-title>
                        Delivery Address
                      </v-card-title>
                          <v-text-field 
                            label="postcode" 
                            class="ml-4" 
                            :error-messages="deliveryPostcodeErrors"
                            v-model="deliveryPostcode">
                          </v-text-field>
                          <v-text-field 
                            label="city" 
                            v-model="deliveryCity"
                            :error-messages="deliveryCityErrors"
                            class="ml-4"> 
                          </v-text-field>
                          <v-text-field 
                            label="street" 
                            v-model="deliveryStreet" 
                            :error-messages="deliveryStreetErrors"
                            class="ml-4"> 
                          </v-text-field>
                          <v-text-field 
                            label="house number" 
                            v-model="deliveryHouseNumber" 
                            :error-messages="deliveryHouseNumberErrors"
                            class="ml-4">
                          </v-text-field>
                    </v-card>

<!-- buttons in case of delivery address -->
                  <v-btn color="primary" @click="billingAndDeliveryAddressSubmit()">
                    Continue
                  </v-btn>
                  <v-btn class="ml-3" color="accent" text @click="decrease()">
                    Back
                  </v-btn>
                  <router-link class="text-decoration-none" to="/">
                    <v-btn  color="secondary" text class="ml-3">
                      Cancel
                    </v-btn>
                  </router-link>
                </v-stepper-content>


                <v-stepper-step step="8">
                  View your data (without password)
                </v-stepper-step>
                <v-stepper-content step="8">
                  <v-card
                    color="grey lighten-4"
                    class="pl-4 d-flex align-center"
                    max-height="1000px"
                    max-width="500"
                  >
                    <v-card-subtitle>
                      Your first name: {{ firstName }}
                      <br />
                      Your last name: {{ lastName }}
                      <br />
                      Your email address: {{ email }}
                      <br />
                      Your billing address: {{ fullAccountAddress }}
                      <br />
                      <div v-if="deliveryAddress">
                        Your delivery address: {{ fulldeliveryAddress }}
                        <br />
                      </div>
                      <div v-if="!deliveryAddress">
                        Your delivery address: {{ fulldeliveryAddress }}
                        <br />
                      </div>
                    </v-card-subtitle>
                  </v-card>
                  <v-btn color="primary" @click="save()" class="mt-4">
                    Save
                  </v-btn>
                  <v-btn
                    class="ml-3 mt-4"
                    color="accent"
                    text
                    @click="addressDecrease()"
                  >
                    Back
                  </v-btn>
                  <router-link class="text-decoration-none" to="/">
                    <v-btn color="secondary" text class="ml-3 mt-4">
                      Cancel
                    </v-btn>
                  </router-link>
                </v-stepper-content>
          </div>
        </v-stepper>
      </v-form>
    </v-container>
</template>

<script>
import Proba from "../Proba"
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs
} from "vuelidate/lib/validators";
import { helpers } from "vuelidate/lib/validators";
const alpha = helpers.regex("alpha", /^[a-zA-ZíÍéÉáÁőŐűŰúÚóÓüÜ/./ /-]*$/);
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-useless-escape
const passw = helpers.regex("passw", /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~])[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8,20}$/);
const postcodeRegex = helpers.regex("postCode",/[1-9]{1}[0-9]{3}$/y);
const regexHouseNumber = helpers.regex("houseNumber",/^[\d]/);

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
    postcode: {
      required,
      postcodeRegex,
    },
    city: {
      required,
      minLength: minLength(2),
      alpha
    },
    street: {
      required,
      minLength: minLength(2)
    },
    houseNumber: {
      required,
      maxLength: maxLength(15),
      regexHouseNumber
    },
    deliveryPostcode: {
      required,
      postcodeRegex,
    },
    deliveryCity: {
      required,
      minLength: minLength(2),
      alpha
    },
    deliveryStreet: {
      required,
      minLength: minLength(2)
    },
    deliveryHouseNumber: {
      required,
      maxLength: maxLength(15),
      regexHouseNumber
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
      radioGroup: 1,
      address: "",
      postcode: null,
      city: "",
      street: "",
      houseNumber: "",
      deliveryPostcode: null,
      deliveryCity: "",
      deliveryStreet: "",
      deliveryHouseNumber: "",
      deliveryAddress2:""
    };
  },
  computed: {
    isMobile() { 
        return this.$vuetify.breakpoint.xsOnly;
    },
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
      !this.$v.email.required && errors.push("email is required.");
      !this.$v.email.email && errors.push("the email must be in email format!");
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
      postcodeErrors() {
      const errors = [];
      if (!this.$v.postcode.$dirty) return errors;
      !this.$v.postcode.required && errors.push("postcode is required.");
      !this.$v.postcode.postcodeRegex && errors.push("ivalid format of postcode!")
      return errors;
      },
      cityErrors() {
      const errors = [];
      if (!this.$v.city.$dirty) return errors;
      !this.$v.city.required && errors.push("city is required.");
      !this.$v.city.alpha && errors.push("the delivery city must contain only letters!!");
      !this.$v.city.minLength && errors.push("city must be more then 1 characters long!");
      return errors;
      },
      streetErrors() {
      const errors = [];
      if (!this.$v.street.$dirty) return errors;
      !this.$v.street.required && errors.push("street is required.");
      !this.$v.street.minLength && errors.push("street must be more then 1 characters long!");
      return errors;
      },
      houseNumberErrors() {
      const errors = [];
      if (!this.$v.houseNumber.$dirty) return errors;
      !this.$v.houseNumber.required && errors.push("house Number is required.");
      !this.$v.houseNumber.maxLength && errors.push("House number must be less then 16 characters long!");
      !this.$v.houseNumber.regexHouseNumber && errors.push("invalid format of house number!");
      return errors;
      },
      deliveryPostcodeErrors() {
      const errors = [];
      if (!this.$v.deliveryPostcode.$dirty) return errors;
      !this.$v.deliveryPostcode.required && errors.push("postcode is required.");
      !this.$v.deliveryPostcode.postcodeRegex && errors.push("ivalid format of delivery postcode!")
      return errors;
      },
      deliveryCityErrors() {
      const errors = [];
      if (!this.$v.deliveryCity.$dirty) return errors;
      !this.$v.deliveryCity.required && errors.push("city is required.");
      !this.$v.deliveryCity.alpha && errors.push("the city must contain only letters!");
      !this.$v.deliveryCity.minLength && errors.push("city must be more then 1 characters long!");
      return errors;
      },
      deliveryStreetErrors() {
      const errors = [];
      if (!this.$v.deliveryStreet.$dirty) return errors;
      !this.$v.deliveryStreet.required && errors.push("street is required.");
      !this.$v.deliveryStreet.minLength && errors.push("street must be more then 1 characters long!");
      return errors;
      },
      deliveryHouseNumberErrors() {
      const errors = [];
      if (!this.$v.deliveryHouseNumber.$dirty) return errors;
      !this.$v.deliveryHouseNumber.required && errors.push("house Number is required.");
      !this.$v.deliveryHouseNumber.maxLength && errors.push("House number must be less then 16 characters long!");
      !this.$v.deliveryHouseNumber.regexHouseNumber && errors.push("invalid format of house number!");
      return errors;
      },
    deliveryAddress() {
      if (this.radioGroup === 2) {
        return true;
      } else {
        return false;
      }
    },
    fullAccountAddress() {
      return `${this.postcode} ${this.city} ${this.street} ${this.houseNumber}`
    },
    fulldeliveryAddress() {
      if (this.deliveryAddress) {
        return `${this.deliveryPostcode} ${this.deliveryCity} ${this.deliveryStreet} ${this.deliveryHouseNumber}`
      } else {
        return "same as billing address"
      }  
    }
  },
  mounted() {
    this.setFocus();
  },
  methods: {
      probamethod() {
          console.log(Proba.kiir(this.firstName));
      },
    firstNameSubmit() {
      this.$v.firstName.$touch();
      this.probamethod();
      if (!this.$v.firstName.$error == true) {
        this.increase();
      }
    },
    lastNameSubmit() {
      this.$v.lastName.$touch();
      if (!this.$v.lastName.$error == true) {
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
      this.$v.password2.$touch();
      if (!this.$v.password2.$error == true) {
        this.increase();
      }  
    },
    addressSubmit() {
      this.$v.postcode.$touch();
      this.$v.city.$touch();
      this.$v.street.$touch();
      this.$v.houseNumber.$touch();
      if (!this.$v.postcode.$error == true 
        && !this.$v.city.$error == true
        && !this.$v.street.$error == true
        && !this.$v.houseNumber.$error == true
        ) {
        if (this.deliveryAddress) {
            this.increase();
        } else {
            this.increase();
            this.increase();
        }
        
      }  
    },

    billingAndDeliveryAddressSubmit() {

      this.$v.deliveryPostcode.$touch();
      this.$v.deliveryCity.$touch();
      this.$v.deliveryStreet.$touch();
      this.$v.deliveryHouseNumber.$touch();

      if (!this.$v.deliveryPostcode.$error == true
        && !this.$v.deliveryCity.$error == true
        && !this.$v.deliveryStreet.$error == true
        && !this.$v.deliveryHouseNumber.$error == true
        ) {
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
    addressDecrease() {
        if (this.deliveryAddress) {
            this.counter = this.counter - 1;
        } else {
            this.counter = this.counter - 2;
        }
      this.setFocus();
    },
    trimName(s) {
      s=s.replace(/ +/g, ' ')
      s=s.trim();
      return s;
      
    },
    save() {

    },

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
