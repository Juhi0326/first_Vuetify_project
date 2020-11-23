<template>
  <div class="ml-8">
    <CustomInputField v-model="firstName" />
    {{firstName}}
  </div>
</template>

<script>
import CustomInputField from "../components/CustomInputField";
export default {
  components: {
    CustomInputField,
  },
  watch: {
    firstName: function(val) {
      this.firstName = val;
      console.log("ez a firstname: ",this.firstName);
    },
  },
  data() {
    return {
      firstName: "",
    };
  },
};
</script>

<style lang="scss" scoped></style>
