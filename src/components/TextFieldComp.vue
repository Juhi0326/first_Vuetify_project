<template>
  <v-text-field
    :flat="builtIFlatParam"
    :counter="builtInCounterParam"
    :value="value"
    @input="updateValue($event)"
    :label="builtInLabel"
    :required="builtInRequiredParam"
    @keyup.13="enter()"
    :error-messages="errorMessage"
    ref="input"
    :hint="hintParam"
    :type="show1 == null || show1 == false ? 'text' : 'password'"
    :append-icon="show1 == false ? 'mdi-eye' : 'mdi-eye-off'"
    @click:append="show1 = !show1"
  ></v-text-field>
</template>

<script>
export default {
  props: [
    "builtIFlatParam",
    "builtInRequiredParam",
    "builtInLabel",
    "errorMessage",
    "value",
    "builtInCounterParam",
    "hintParam",
    "appendIcon",
  ],
  created() {
    if (this.appendIcon == null) {
      console.log("nem jött át semmi");
    } else {
      console.log("itt átjött :", this.builtInLabel, this.appendIcon);
    }
    this.show1=this.appendIcon
  },
  data() {
    return {
      show1: false,
      show2: false,
    };
  },
  methods: {
    updateValue(model) {
      this.$emit("input", model);
    },
    enter() {
      this.$emit("enter");
    },
  },
};
</script>

<style lang="scss" scoped></style>
