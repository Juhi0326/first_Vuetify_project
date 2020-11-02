import Registration2 from "../src/views/Registration2.vue";
import {
    required,
    minLength,
    maxLength,
    email,
    sameAs
  } from "../node_modules/vuelidate/lib/validators";
  import { helpers } from "vuelidate/lib/validators";
  const alpha = helpers.regex("alpha", /^[a-zA-ZíÍéÉáÁőŐűŰúÚóÓüÜ/./ /-]*$/);
  // eslint-disable-next-line no-unused-vars
  // eslint-disable-next-line no-useless-escape
  const passw = helpers.regex("passw", /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~])[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8,20}$/);
  const postcodeRegex = helpers.regex("postCode",/[1-9]{1}[0-9]{3}$/y);
  const regexHouseNumber = helpers.regex("houseNumber",/^[\d]/);
export default {
  components: {
    Registration2,
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

  kiir(data) {
      console.log(data);
    // eslint-disable-next-line no-debugger
    debugger;
    this.firstName=JSON.stringify(Registration2.data.firstName);
    // eslint-disable-next-line no-debugger
    debugger;
    this.firstName=data;
    const errors = [];
    if (!this.$v.firstName.$dirty) return errors;
    !this.$v.firstName.minLength() &&
      errors.push("first name must be more then 2 characters long");
    !this.$v.firstName.maxLength() &&
      errors.push("first name must be less then 31 characters long");
    !this.$v.firstName.required() && errors.push("first name is required.");
    !this.$v.firstName.alpha() && errors.push("the first name can only contain letters");
    return errors;
    
  },
};
