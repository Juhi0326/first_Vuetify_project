<template>
  <SlotComp>
    <template v-slot:main>
      ez a main
        <v-divider></v-divider>
        <SlotButton @click="log" class="mt-8 ml-6" >
                Ez a button szövege
        </SlotButton>
    </template>

    <template #header>Slot header</template>
    <template #footer>
      <p>this is the footer</p>
    </template>
  </SlotComp>
</template>

<script>
import SlotComp from "../components/SlotComp";
import SlotButton from "../components/SlotButton";
export default {
  components: {
    SlotComp,
    SlotButton,
  },
  methods: {
    log() {
      console.log("hurrá");
    },
  },
};
</script>

<style lang="scss" scoped></style>
