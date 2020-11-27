<template>
  <div>
    <v-stepper-step  :step="computedStep" :complete="value >DataStep">
      <slot>
      </slot>
    </v-stepper-step>
  </div>
</template>

<script>
export default {
  props: ["propStep", "propCompleteNumber", "value"],
  created() {
      this.DataStep=parseInt(this.propCompleteNumber)
  },
  data() {
      return {
          DataStep: null
      }
  },
  computed: {
      computedStep () {
          
          return this.propStep;
      }
  }
};
</script>

<style scoped></style>
