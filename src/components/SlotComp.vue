<template>
  <v-container>
    <v-card>
      <v-responsive :aspect-ratio="16 / 8">
        <header>
          <slot name="header" class="text-center" />
        </header>
        <header :class="propClassHeader">
          <slot name="header2" />
        </header>
        <main>
          <slot name="main" class="text-center" v-bind:personData="personData">
          </slot>
        </main>
      </v-responsive>
      <footer
        class="d-flex align-end justify-center pt-4"
        :class="propClassFooter"
      >
        <slot name="footer" />

        <SlotButton propColorFirst="red" propColorSecond="green" class="pl-5">
          <template #first> {{ person.name }} </template>
        </SlotButton>
      </footer>
    </v-card>
  </v-container>
</template>

<script>
import SlotButton from "../components/SlotButton";
export default {
  props: ["propClassHeader", "propClassFooter", "person"],
  components: {
    SlotButton,
  },
  created() {
    console.log(this.person);
  },
  data() {
    return {
      personData: { name: "István Juhász", age: 45, country: "Hungary" },
    };
  },
  computed: {
    hasMainSlot() {
      return !!this.$slots.main;
    },
  },
};
</script>

<style scoped>
header {
  background-color: blueviolet;
}

footer {
  background-color: cornflowerblue;
}
</style>
