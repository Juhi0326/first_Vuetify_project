<template>

  <SlotComp propClassHeader="ml-8" propClassFooter="pl-8" :person="person">
    <!-- <template #main>
      ez a main
      <v-divider></v-divider>
      <SlotButton @click="log" class="mt-8 ml-6">
        <template #first></template>
      </SlotButton>
    </template> -->

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
        numberOfChildren: 1
      }
    }
  },
  methods: {
    log() {
      console.log("hurrá");
    },
  },
};
</script>

<style lang="scss" scoped></style>
