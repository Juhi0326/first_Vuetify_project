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
    :append-icon="getIcon()"
    :type="getType()"
    @click:append="show1 = !show1"
    :class="classParam"
  >
  </v-text-field>
</template>

<script>
export default {
  components: {},
  props: [
    "builtIFlatParam",
    "builtInRequiredParam",
    "builtInLabel",
    "errorMessage",
    "value",
    "builtInCounterParam",
    "hintParam",
    "appendIcon",
    "classParam"
  ],
  created() {
    if (this.appendIcon !== undefined) {
      this.show1 = this.appendIcon;
    }
    console.log(this.classParam);

  },
  data() {
    return {
      show1: null,
    };
  },
  computed: {
    
  },
  methods: {
     getType() {
      if (this.show1 == undefined) { 
        return "text";
      } else if (this.show1 == false) {
        return 'text';
      } else {
        return "password";
      }
    },
    getIcon() {
      if (this.show1 == undefined) {
        return null;
      } else if (this.show1 == false) {
        return 'mdi-eye';
      } else {
        return "mdi-eye-off";
      }
    },
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
