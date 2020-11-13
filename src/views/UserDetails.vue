<template>
  <v-container>
    <div>
      <v-card>
        <v-responsive :aspect-ratio="16 / 8">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th class="text-left">
                    Field name
                  </th>
                  <th class="text-left">
                    Value
                  </th>
                  <th class="text-left">
                    New Value
                  </th>
                  <th class="text-left">
                    save new value
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>First Name</td>
                  <td>{{ user.firstName }}</td>
                  <td>
                    <v-text-field rows="1" v-model="firstName"> </v-text-field>
                  </td>
                  <td>
                    <v-btn>Save</v-btn>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-responsive>
      </v-card>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
      console.log(this.firstName)
  },
  computed: {
    user() {
      return this.$store.getters.getAllUsers.find(
        (user) => user.userId === this.userId
      );
    },
    countAttribute() {
      return Object.keys(this.user).length;
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
  },
};
</script>

<style scoped></style>
