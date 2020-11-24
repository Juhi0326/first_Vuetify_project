<template>
  <v-container>
    <v-card>
      <v-responsive :aspect-ratio="16 / 8">
        <header>
          <slot name="header" class="text-center" />
        </header>
        <header :class="propClassHeader">
          <slot  name="header2" />
        </header>
        <main v-if="hasMainSlot">
          <slot name="main" class="text-center"> 
            <h1>ide írok valamit</h1>
          </slot>
        </main>
      </v-responsive>
      <footer class="d-flex align-end justify-center" :class="propClassFooter">
        <slot name="footer"  />
      </footer>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["propClassHeader", "propClassFooter"],
  created () {
   console.log(this.propClassFooter);
  },
  computed:{
    hasMainSlot() {
  return !!this.$slots.main
}
  }
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
