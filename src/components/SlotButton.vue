<template>
  <div>
    <v-btn v-on="$listeners" color="primary" v-if="hasFirst">
      <slot name="first"> </slot>
    </v-btn>

    <v-btn v-on="$listeners" color="green" v-if="hasSecond">
      <slot name="second">ez a második button szövege </slot>
    </v-btn>
  </div>
</template>

<script>
export default {
  computed: {
    hasFirst() {
      return !!this.$slots.first;
    },
    hasSecond() {
      return !!this.$slots.second;
    },
  },
};
</script>

<style lang="scss" scoped></style>
