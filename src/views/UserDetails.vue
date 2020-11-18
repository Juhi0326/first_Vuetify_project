<template>
  <v-container>
    <div>
      <v-card>
        <v-responsive :aspect-ratio="16 / 8">
          <v-form @submit.prevent="save()" ref="form">
            <v-row class="font-weight-black">
              <v-col cols="12" sm="6" md="4" lg="3" class="pl-8">
                Field name
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="pl-8">
                Value
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="pl-8">
                New Value
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                Admin status
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                {{ admin }}
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="text-field pl-8">
                <v-switch
                  v-model="adminStatus"
                  :label="`Admin: ${adminStatus.toString()}`"
                ></v-switch>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                First Name
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                {{ firstName }}
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-8">
                <v-text-field
                  rows="1"
                  v-model="firstName"
                  :error-messages="firstNameErrors"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                Last Name
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                {{ lastName }}
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-8">
                <v-text-field
                  rows="1"
                  v-model="lastName"
                  :error-messages="lastNameErrors"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                Email
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                {{ email }}
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-8">
                <v-text-field
                  rows="1"
                  v-model="email"
                  :error-messages="emailErrors"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                Billing postcode
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                {{ billingPostcode }}
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-8">
                <v-text-field
                  rows="1"
                  v-model="billingPostcode"
                  :error-messages="billingPostcodeErrors"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                Billing City
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                {{ billingCity }}
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-8">
                <v-text-field
                  rows="1"
                  v-model="billingCity"
                  :error-messages="billingCityErrors"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                Billing Street
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                {{ billingStreet }}
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-8">
                <v-text-field
                  rows="1"
                  v-model="billingStreet"
                  :error-messages="billingStreetErrors"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                Billing House number
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                {{ billingHouseNumber }}
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-8">
                <v-text-field
                  rows="1"
                  v-model="billingHouseNumber"
                  :error-messages="billingHouseNumberErrors"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row>
              <v-col cols="12" sm="6" md="4" lg="3" class="pl-8">
                <v-radio-group v-model="radioGroup" column mandatory>
                  <v-radio
                    label="Delivery address is the same as billing address"
                    :value="1"
                  ></v-radio>
                  <v-radio
                    label="Delivery address is NOT the same as billing address"
                    :value="2"
                  ></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-divider v-if="radioGroup === 2"></v-divider>
            <v-row v-if="radioGroup === 2">
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                Delivery Postcode
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                {{ deliveryPostcode }}
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-8">
                <v-text-field
                  rows="1"
                  v-model="deliveryPostcode"
                  :error-messages="deliveryPostcodeErrors"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider v-if="radioGroup === 2"></v-divider>
            <v-row v-if="radioGroup === 2">
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                Delivery City
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                {{ deliveryCity }}
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-8">
                <v-text-field
                  rows="1"
                  v-model="deliveryCity"
                  :error-messages="deliveryCityErrors"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider v-if="radioGroup === 2"></v-divider>
            <v-row v-if="radioGroup === 2">
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                Delivery Street
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                {{ deliveryStreet }}
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-8">
                <v-text-field
                  rows="1"
                  v-model="deliveryStreet"
                  :error-messages="deliveryStreetErrors"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider v-if="radioGroup === 2"></v-divider>

            <v-row v-if="radioGroup === 2">
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                Delivery House number
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="mt-6 pl-8">
                {{ deliveryHouseNumber }}
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="px-8">
                <v-text-field
                  rows="1"
                  v-model="deliveryHouseNumber"
                  :error-messages="deliveryHouseNumberErrors"
                >
                </v-text-field>
              </v-col>
            </v-row>
            <v-divider></v-divider>

            <v-row>
              <v-col cols="12" sm="6" md="4" lg="3" class="pl-8">
                <v-btn type="submit" color="primary" :loading="loading"
                  >Save</v-btn
                >
              </v-col>
              <v-col cols="12" sm="6" md="4" lg="3" class="pl-8">
                <v-btn @click="$router.go(-1)">Cancel</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-responsive>
      </v-card>
    </div>
  </v-container>
</template>

<script>
const fbFunctions = firebase.functions();

const postcodeRegex = helpers.regex("postCode", /^[1-9]{1}[0-9]{3}$/);
const regexHouseNumber = helpers.regex("houseNumber", /^[\d]/);
const alpha = helpers.regex("alpha", /^[a-zA-ZíÍéÉáÁőŐűŰúÚóÓüÜ/./ /-]*$/);
import * as firebase from "firebase/app";
import db from "@/fb";
import {
  required,
  minLength,
  maxLength,
  email,
  helpers,
} from "vuelidate/lib/validators";
export default {
  validations() {
    if (this.radioGroup != 1) {
      return {
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
        email: { required, email },
        billingPostcode: {
          required,
          postcodeRegex,
        },
        billingCity: {
          required,
          minLength: minLength(2),
          alpha,
        },
        billingStreet: {
          required,
          minLength: minLength(2),
        },
        billingHouseNumber: {
          required,
          maxLength: maxLength(15),
          regexHouseNumber,
        },

        deliveryPostcode: {
          required,
          postcodeRegex,
        },

        deliveryCity: {
          required,
          minLength: minLength(2),
          alpha,
        },
        deliveryStreet: {
          required,
          minLength: minLength(2),
        },
        deliveryHouseNumber: {
          required,
          maxLength: maxLength(15),
          regexHouseNumber,
        },
      };
    } else
      return {
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
        email: { required, email },
        billingPostcode: {
          required,
          postcodeRegex,
        },
        billingCity: {
          required,
          minLength: minLength(2),
          alpha,
        },
        billingStreet: {
          required,
          minLength: minLength(2),
        },
        billingHouseNumber: {
          required,
          maxLength: maxLength(15),
          regexHouseNumber,
        },
      };
  },
  data() {
    return {
      success: false,
      loading: false,
      adminStatus: false,
      radioGroup: null,
      userId: this.$route.params.id,
      count: 0,
      firstName: "",
      lastName: "",
      email: "",
      billingPostcode: null,
      billingCity: "",
      billingStreet: "",
      billingHouseNumber: "",
      deliveryPostcode: null,
      deliveryCity: "",
      deliveryStreet: "",
      deliveryHouseNumber: "",
      admin: false,
    };
  },
  created() {
    this.userInit();
    this.initRadio();
    this.initAdminStatus();
  },
  computed: {
    fullBillingAddress() {
      return `${this.billingPostcode}${this.billingCity}${this.billingStreet}${this.billingHouseNumber}`;
    },
    fulldeliveryAddress() {
      return `${this.deliveryPostcode}${this.deliveryCity}${this.deliveryStreet}${this.deliveryHouseNumber}`;
    },
    user() {
      return this.$store.getters.getAllUsers.find(
        (user) => user.userId === this.userId
      );
    },
    countAttribute() {
      return Object.keys(this.user).length;
    },
    firstNameErrors() {
      const errors = [];
      if (!this.$v.firstName.$dirty) return errors;
      !this.$v.firstName.minLength &&
        errors.push("first name must be more then 2 characters long");
      !this.$v.firstName.maxLength &&
        errors.push("first name must be less then 31 characters long");
      !this.$v.firstName.required && errors.push("first name is required.");
      !this.$v.firstName.alpha &&
        errors.push("the first name can only contain letters");
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
      !this.$v.lastName.alpha &&
        errors.push("the last name can only contain letters");
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
      !this.$v.password1.passw &&
        errors.push(
          "Password has to at least 8 characters long and less then 20 characters long with lowercase, uppercase letters," +
            "numbers, special characters and at least one lowercase letter, one uppercase letter," +
            " one number and one special character"
        );
      return errors;
    },
    password2Errors() {
      const errors = [];
      if (!this.$v.password2.$dirty) return errors;
      !this.$v.password2.required && errors.push("password is required.");
      !this.$v.password2.sameAsPassword &&
        errors.push("the password does not match");
      return errors;
    },
    billingPostcodeErrors() {
      const errors = [];
      if (!this.$v.billingPostcode.$dirty) return errors;
      !this.$v.billingPostcode.required && errors.push("postcode is required.");
      !this.$v.billingPostcode.postcodeRegex &&
        errors.push("ivalid format of postcode!");
      return errors;
    },
    billingCityErrors() {
      const errors = [];
      if (!this.$v.billingCity.$dirty) return errors;
      !this.$v.billingCity.required && errors.push("city is required.");
      !this.$v.billingCity.alpha &&
        errors.push("the city must contain only letters!!");
      !this.$v.billingCity.minLength &&
        errors.push("city must be more then 1 characters long!");
      return errors;
    },
    billingStreetErrors() {
      const errors = [];
      if (!this.$v.billingStreet.$dirty) return errors;
      !this.$v.billingStreet.required && errors.push("street is required.");
      !this.$v.billingStreet.minLength &&
        errors.push("street must be more then 1 characters long!");
      return errors;
    },
    billingHouseNumberErrors() {
      const errors = [];
      if (!this.$v.billingHouseNumber.$dirty) return errors;
      !this.$v.billingHouseNumber.required &&
        errors.push("house Number is required.");
      !this.$v.billingHouseNumber.maxLength &&
        errors.push("House number must be less then 16 characters long!");
      !this.$v.billingHouseNumber.regexHouseNumber &&
        errors.push("invalid format of house number!");
      return errors;
    },
    deliveryPostcodeErrors() {
      const errors = [];
      if (!this.$v.deliveryPostcode.$dirty) return errors;
      !this.$v.deliveryPostcode.required &&
        this.radioGroup != 1 &&
        errors.push("postcode is required.");
      !this.$v.deliveryPostcode.postcodeRegex &&
        this.radioGroup != 1 &&
        errors.push("ivalid format of delivery postcode!");
      return errors;
    },
    deliveryCityErrors() {
      const errors = [];
      if (!this.$v.deliveryCity.$dirty) return errors;
      !this.$v.deliveryCity.required && errors.push("city is required.");
      !this.$v.deliveryCity.alpha &&
        errors.push("the city must contain only letters!");
      !this.$v.deliveryCity.minLength &&
        errors.push("city must be more then 1 characters long!");
      return errors;
    },
    deliveryStreetErrors() {
      const errors = [];
      if (!this.$v.deliveryStreet.$dirty) return errors;
      !this.$v.deliveryStreet.required && errors.push("street is required.");
      !this.$v.deliveryStreet.minLength &&
        errors.push("street must be more then 1 characters long!");
      return errors;
    },
    deliveryHouseNumberErrors() {
      const errors = [];
      if (!this.$v.deliveryHouseNumber.$dirty) return errors;
      !this.$v.deliveryHouseNumber.required &&
        errors.push("house Number is required.");
      !this.$v.deliveryHouseNumber.maxLength &&
        errors.push("House number must be less then 16 characters long!");
      !this.$v.deliveryHouseNumber.regexHouseNumber &&
        errors.push("invalid format of house number!");
      return errors;
    },
  },
  methods: {
    userInit() {
      this.firstName = this.user.firstName;
      this.lastName = this.user.lastName;
      this.email = this.user.email;
      this.billingPostcode = this.user.billingPostcode;
      this.billingCity = this.user.billingCity;
      this.billingStreet = this.user.billingStreet;
      this.billingHouseNumber = this.user.billingHouseNumber;
      this.deliveryPostcode = this.user.deliveryPostcode;
      this.deliveryCity = this.user.deliveryCity;
      this.deliveryStreet = this.user.deliveryStreet;
      this.deliveryHouseNumber = this.user.deliveryHouseNumber;
      this.admin = this.user.admin;
    },
    save() {
      this.$v.$touch();
      this.loading = true;
      if (this.$v.$error == false) {
        this.changeAdmin();
        this.loading = false;
        this.$store.dispatch("getUsers");
      } else {
        console.log("hiba");
        this.loading = false;
      }
    },
    changeAdmin() {

      if (this.user.admin !== this.adminStatus) {
        if (this.adminStatus == true) {
          this.addFirebaseAdmin();
          this.adminStatus = true;
        } else {
          this.deleteFirebaseAdmin();
          this.adminStatus = false;
        }
      }
    },
    initAdminStatus() {
      if (this.admin == false) {
        this.adminStatus = false;
      } else {
        this.adminStatus = true;
      }
    },
    initRadio() {
  
      if (
        this.deliveryPostcode === null &&
        this.deliveryCity === "" &&
        this.deliveryStreet === "" &&
        this.deliveryHouseNumber === ""
      ) {
        this.radioGroup = 1;
      } else {
        this.radioGroup = 2;
      }
    },
    addFirebaseAdmin() {
      const adminEmail = this.email;
      const addAdminRole = fbFunctions.httpsCallable("addAdminRole");
      addAdminRole({ email: adminEmail }).then((result) => {
        if (result.data.message.includes("hase been maid an admin")) {
          console.log("sikeres admin hozzáadás történt");
          this.updateDatabase();
        } else {
          console.log("nem sikerült az admin hozzáadás, és így a user update is elmaradt.");
        }
      });
    },
    deleteFirebaseAdmin() {
      const adminEmail = this.email;
      const SetAdminFalse = fbFunctions.httpsCallable("SetAdminFalse");
      SetAdminFalse({ email: adminEmail }).then((result) => {
        if (result.data.message.includes("set the admin role to FALSE")) {
          console.log("sikeres admin törlés");
          this.updateDatabase();
          this.loading = false;
        } else {
          console.log("nem sikerült az admin törlés, és így a user update is elmaradt.");
          this.loading = false;
        }
      });
    },
    setAdmin() {
      db.collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().email === this.email) {
              db.collection("users")
                .doc(doc.id)
                .update({ admin: true });
            }
          });
        });
    },
    setAdminToFalse() {
      db.collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().email === this.email) {
              db.collection("users")
                .doc(doc.id)
                .update({ admin: false });
            }
          });
        });
    },
    updateDatabase() {
      db.collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().email === this.user.email) {
              db.collection("users")
                .doc(doc.id)
                .update({
                  admin: this.adminStatus,
                  firstName: this.firstName,
                  lastName: this.lastName,
                  //email: this.email,
                  billingPostcode: this.billingPostcode,
                  billingCity: this.billingCity,
                  billingStreet: this.billingStreet,
                  billingHouseNumber: this.billingHouseNumber,
                  deliveryPostcode: this.deliveryPostcode,
                  deliveryCity: this.deliveryCity,
                  deliveryStreet: this.deliveryStreet,
                  deliveryHouseNumber: this.deliveryHouseNumber,
                })
                .then(() => {
                  console.log("sikeres update!"); 
                })
                .catch((err) => {
                  console.log(err);
                  this.loading = false;
                });
            }
          });
        })
    },
  },
};
</script>

<style scoped>
.row:hover {
  background-color: rgb(206, 206, 195);
}
.col {
  margin-left: 6px;
}
</style>
