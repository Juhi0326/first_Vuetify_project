<template>
  <v-container>
    <v-card>
      <v-responsive :aspect-ratio="16 / 8">
        <header>
          <slot name="header" class="text-center" />
        </header>
        <header>
          <slot name="header2" />
        </header>
        <main v-if="hasMainSlot">
          <slot name="main" class="text-center"> 
            <h1>ide írok valamit</h1>
          </slot>
        </main>
      </v-responsive>
      <footer class="d-flex align-end">
        <slot name="footer" class="text-center" />
      </footer>
    </v-card>
  </v-container>
</template>

<script>
export default {
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
