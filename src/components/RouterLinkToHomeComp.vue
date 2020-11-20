<template>
  <router-link :class="propClass" :to="destination">
    <ButtonComponent
      :builtInTextParam="true"
      propText="Cancel"
      color="secondary"
      :propClass="btnPropClass"
    />
  </router-link>
</template>

<script>
import ButtonComponent from "../components/ButtonComponent";
export default {
  props: ["propClass", "destination", "btnPropClass"],
  components: {
    ButtonComponent,
  },
};
</script>

<style lang="scss" scoped></style>
