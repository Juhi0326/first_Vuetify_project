<template>
  <v-container class="mt-12">
    <div>
      <v-snackbar dark color="primary" v-model="snackbar" :timeout="4000" top>
        <span>You have registrated, please go to the login page!</span>
        <v-btn small text color="white" @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </div>
    <v-form v-model="valid" ref="myForm" lazy-validation>
      <v-stepper v-model="counter" vertical>
        <br />
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
              <TextFieldComp
                builtInLabel="First Name"
                :builtInRequiredParam="true"
                :builtIFlatParam="true"
                v-model="firstName"
                ref="firstName"
                @enter="firstNameSubmit()"
                :errorMessage="firstNameErrors"
              />
            </v-card>
            <ButtonComponent
              @click="firstNameSubmit()"
              propText="Continue"
              color="primary"
            />
            <RouterLinkToHomeComp
              propClass="text-decoration-none"
              destination="/"
              btnPropClass="ml-3"
            />
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
              <TextFieldComp
                builtInLabel="Last Name"
                :builtInRequiredParam="true"
                :builtIFlatParam="true"
                v-model="lastName"
                ref="lastName"
                @enter="firstNameSubmit()"
                :errorMessage="lastNameErrors"
              />
            </v-card>
            <ButtonComponent
              @click="lastNameSubmit()"
              propText="Continue"
              color="primary"
            />
            <ButtonComponent
              @click="decrease()"
              propText="BACK"
              color="accent"
              :builtInTextParam="true"
            />
            <RouterLinkToHomeComp
              propClass="text-decoration-none"
              destination="/"
              btnPropClass="ml-3"
            />
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
              <TextFieldComp
                builtInLabel="email address"
                :builtInRequiredParam="true"
                :builtIFlatParam="true"
                v-model="email"
                ref="email"
                @enter="emailSubmit()"
                :errorMessage="emailErrors"
              />
              ></v-card
            >
            <ButtonComponent
              @click="emailSubmit()"
              propText="Continue"
              color="primary"
            />
            <ButtonComponent
              @click="decrease()"
              propText="BACK"
              color="accent"
              :builtInTextParam="true"
            />
            <RouterLinkToHomeComp
              propClass="text-decoration-none"
              destination="/"
              btnPropClass="ml-3"
            />
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
              <TextFieldComp
                builtInLabel="Normal with hint text"
                :builtInRequiredParam="true"
                :builtInCounterParam="true"
                :builtIFlatParam="true"
                :appendIcon="true"
                name="input-10-1"
                hintParam="8-10 Character Password with lowercase, uppercase letters, numbers, 
                    special characters and at least one lowercase letter, one uppercase letter, one number and one special character"
                v-model="password1"
                ref="password1"
                @enter="password1Submit()"
                :errorMessage="password1Errors"
              />
              <!-- <v-text-field
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
              ></v-text-field> -->
            </v-card>
            <ButtonComponent
              color="primary"
              propText="Continue"
              @click="password1Submit()"
            />
            <ButtonComponent
              color="accent"
              propText="Back"
              @click="decrease()"
              :builtInTextParam="true"
            />
            <RouterLinkToHomeComp
              propClass="text-decoration-none"
              destination="/"
              btnPropClass="ml-3"
            />
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
            <ButtonComponent
              color="primary"
              propText="Continue"
              @click="password2Submit()"
            />
            <ButtonComponent
              color="accent"
              propText="Back"
              @click="decrease()"
              :builtInTextParam="true"
            />
            <RouterLinkToHomeComp
              propClass="text-decoration-none"
              destination="/"
              btnPropClass="ml-3"
            />
          </v-stepper-content>

          <!-- address -->

          <v-stepper-step :complete="counter > 6" step="6">
            Enter your billing address
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
                :error-messages="postcodeErrors"
              >
              </v-text-field>

              <v-text-field
                label="city"
                v-model="city"
                :error-messages="cityErrors"
                class="ml-4"
              >
              </v-text-field>

              <v-text-field
                label="street"
                v-model="street"
                :error-messages="streetErrors"
                class="ml-4"
              >
              </v-text-field>

              <v-text-field
                label="house number"
                v-model="houseNumber"
                :error-messages="houseNumberErrors"
                class="ml-4"
              >
              </v-text-field>

              <v-radio-group v-model="radioGroup">
                <v-radio
                  :label="`Delivery address is the same`"
                  :value="1"
                ></v-radio>
                <v-radio
                  :label="`Delivery address is not the same`"
                  :value="2"
                ></v-radio>
              </v-radio-group>
            </v-card>
            <!-- buttons in case of only billing address -->
            <ButtonComponent
              color="primary"
              propText="Continue"
              @click="addressSubmit()"
            />
            <ButtonComponent
              color="accent"
              propText="Back"
              @click="decrease()"
              :builtInTextParam="true"
            />
            <RouterLinkToHomeComp
              propClass="text-decoration-none"
              destination="/"
              btnPropClass="ml-3"
            />
          </v-stepper-content>

          <!-- innen jön a delivery address -->

          <v-stepper-step :complete="counter > 7 && deliveryAddress" step="7">
            Enter your delivery address
          </v-stepper-step>
          <v-stepper-content
            :complete="counter > 7 && deliveryAddress"
            step="7"
          >
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
                v-model="deliveryPostcode"
              >
              </v-text-field>
              <v-text-field
                label="city"
                v-model="deliveryCity"
                :error-messages="deliveryCityErrors"
                class="ml-4"
              >
              </v-text-field>
              <v-text-field
                label="street"
                v-model="deliveryStreet"
                :error-messages="deliveryStreetErrors"
                class="ml-4"
              >
              </v-text-field>
              <v-text-field
                label="house number"
                v-model="deliveryHouseNumber"
                :error-messages="deliveryHouseNumberErrors"
                class="ml-4"
              >
              </v-text-field>
            </v-card>
            <!-- buttons in case of delivery address -->
            <ButtonComponent
              color="primary"
              propText="Continue"
              @click="billingAndDeliveryAddressSubmit()"
            />
            <ButtonComponent
              color="accent"
              propText="Back"
              @click="decrease()"
              :builtInTextParam="true"
            />
            <RouterLinkToHomeComp
              propClass="text-decoration-none"
              destination="/"
              btnPropClass="ml-3"
            />
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
            <ButtonComponent
              :loading="loading"
              propText="Save"
              color="primary"
              propClass="mt-4"
              @click="save()"
            />
            <ButtonComponent
              propText="Back"
              color="accent"
              propClass="ml-3 mt-4"
              @click="addressDecrease()"
              :builtInTextParam="true"
            />
            <RouterLinkToHomeComp
              propClass="text-decoration-none"
              destination="/"
              btnPropClass="ml-3 mt-4"
            />
          </v-stepper-content>
        </div>
      </v-stepper>
    </v-form>
  </v-container>
</template>

<script>
import * as firebase from "firebase/app";
import db from "@/fb";
import "firebase/auth";
import validation from "../mixins/validation";
import ButtonComponent from "../components/ButtonComponent";
import RouterLinkToHomeComp from "../components/RouterLinkToHomeComp";
import TextFieldComp from "../components/TextFieldComp";

export default {
  mixins: [validation],
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
      deliveryAddress2: "",
      isloggedin: false,
      valid: false,
      loading: false,
      snackbar: false,
    };
  },
  components: {
    ButtonComponent,
    RouterLinkToHomeComp,
    TextFieldComp,
  },
  computed: {
    isMobile() {
      return this.$vuetify.breakpoint.xsOnly;
    },
  },
  mounted() {
    this.setFocus();
  },
  methods: {
    async save() {
      this.loading = true;
      try {
        await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password1);
        var user = firebase.auth().currentUser;
        if (user) {
          const uid = user.uid;
          db.collection("users").add({
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            billingPostcode: this.postcode,
            billingCity: this.city,
            billingStreet: this.street,
            billingHouseNumber: this.houseNumber,
            deliveryPostcode: this.deliveryPostcode,
            deliveryCity: this.deliveryCity,
            deliveryStreet: this.deliveryStreet,
            deliveryHouseNumber: this.deliveryHouseNumber,
            userId: uid,
            admin: false,
          });
          //this.setAdminFalse();
          //this.signedOut();
          this.$router.push("/dashboard");
        } else {
          alert("hiba a kapcsolatban!");
        }
        this.loading = false;
        this.counter = 1;
        this.$refs.myForm.reset();
        this.$v.$reset();
        this.snackbar = true;
      } catch (error) {
        console.log(error);
        this.loading = false;
      }
    },
    async signedOut() {
      try {
        await firebase.auth().signOut();
        this.$router.push("/login");
        this.loggedIn = false;
      } catch (error) {
        console.log(error);
      }
    },
    setFocus() {
      switch (this.counter) {
        case 1:
          this.$refs.firstName.$refs.input.focus();
          this.$refs.myForm.resetValidation();
          break;
        case 2:
          this.$refs.lastName.$refs.input.focus();
          break;
        case 3:
          this.$refs.email.$refs.input.focus();
          break;
        case 4:
          this.$refs.password1.$refs.input.focus();
          break;
        case 5:
          this.$refs.password2.$refs.input.focus();
          break;
        default:
          break;
      }
    },
  },
};
</script>
