<template>
  <div>
    <v-btn v-on="$listeners" :color="propColorFirst" v-if="hasFirst" small>
      <slot name="first"></slot>
      <v-icon right>mdi mdi-account-search</v-icon>
      
    </v-btn>

    <v-btn v-on="$listeners" :color="propColorSecond" v-if="hasSecond" small>
      <slot name="second"></slot>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ["propColorFirst", "propColorSecond"],
    created () {
   console.log(this.$slots);
  },
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
