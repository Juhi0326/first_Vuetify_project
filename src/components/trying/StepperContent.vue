<template>
  <v-stepper-content :step="propStep">
    <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
    <v-btn v-if="save" @click="saveMethod()" color="primary">
      save
    </v-btn>
    <v-btn v-else color="primary" @click="updateValue()" :value="step">
      Continue
    </v-btn>
    <v-btn text @click="start()">
      Cancel
    </v-btn>
  </v-stepper-content>
</template>

<script>
export default {
  data() {
    return {
      step: "",
    };
  },
  props: ["propStep", "value", "save"],
  methods: {
    updateValue() {
      this.$emit("step");
    },
    start() {
      this.$emit("start");
    },
    saveMethod() {
        this.$emit("save");
    }
    
  },
};
</script>

<style lang="scss" scoped></style>
