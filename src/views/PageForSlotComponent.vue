<template>
  <SlotComp propClassHeader="ml-8" propClassFooter="pl-8" :person="person">
    <template #main="slotProps">
      ez a main
      <v-divider></v-divider>
      <v-card class="pa-5 ma-6" max-width="400px">
        <h1>Name: {{ slotProps.personData.name }}</h1>
        <h1>Age: {{ slotProps.personData.age }}</h1>
        <h1>Country: {{ slotProps.personData.country }}</h1>
      </v-card>
    </template>

    <!-- <template #header>Slot header</template> -->
    <template #header2>másik header</template>

    <template #footer>
      <p>this is the footer</p>
    </template>
  </SlotComp>
</template>

<script>
import SlotComp from "../components/SlotComp";
//import SlotButton from "../components/SlotButton";
export default {
  components: {
    SlotComp,

    //SlotButton,
  },
  data() {
    return {
      person: {
        name: "István Juhász",
        Country: "Hungary",
        numberOfChildren: 1,
      },
    };
  },
  methods: {
    log() {
      console.log("hurrá");
    },
  },
};
</script>

<style lang="scss" scoped></style>
