<template>
  <v-container>
    <v-card>
      <v-responsive :aspect-ratio="16 / 8">
        <header>
          <slot name="header" class="text-center" />
        </header>
        <main>
          <slot name="main" class="text-center" />
        </main>
      </v-responsive>
      <footer class="d-flex align-end">
        <slot name="footer" class="text-center" />
      </footer>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  background-color: blueviolet;
}

footer {
  background-color: cornflowerblue;
}
</style>
