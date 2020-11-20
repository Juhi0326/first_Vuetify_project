import {
    required,
    minLength,
    maxLength,
    email,
    sameAs
  } from "vuelidate/lib/validators";
  import { helpers } from "vuelidate/lib/validators";

  const alpha = helpers.regex("alpha", /^[a-zA-ZíÍéÉáÁöÖőŐűŰúÚóÓüÜ/./ /-]*$/);
  // eslint-disable-next-line no-useless-escape
  const passw = helpers.regex("passw", /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~])[a-zA-Z0-9!"#\$%&'\(\)\*\+,-\.\/:;<=>\?@[\]\^_`\{\|}~]{8,20}$/);
  const postcodeRegex = helpers.regex("postCode",/^[1-9]{1}[0-9]{3}$/);
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
}