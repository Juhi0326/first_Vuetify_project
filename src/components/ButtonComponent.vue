<template>
  <v-btn
    :color="color"
    @click="click()"
    :class="propClass"
    :text="builtInTextParam"
    :loading="loading"
  >
    {{ propText }}
  </v-btn>
</template>

<script>
export default {
  props: ["color", "propClass", "propText", "builtInTextParam", "loading"],
  methods: {
    click() {
      this.$emit("click");
    },
  },
};
</script>

<style scoped></style>
