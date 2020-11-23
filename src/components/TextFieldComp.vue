<template>
  <v-text-field
    :flat="builtIFlatParam"
    :value="value" @input="updateValue($event)"
    :label="builtInLabel"
    :required="builtInRequiredParam"
    @keyup.13="enter()"
    :error-messages="errorMessage"
    ref='input'
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
  ],
  methods: {
    updateValue(model) {
        this.$emit('input',model)
    },  
    enter() {
      this.$emit("enter");
    },
  },
};
</script>

<style lang="scss" scoped></style>
