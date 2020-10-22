<template>
  <div>
    <v-container>
<template>
  <div>
      <v-col>
    <div class="d-flex justify-space-between flex-column mb-6 flex-md-row">
      <v-card
        v-for="n in 3"
        :key="n"
        class="pa-2"
        outlined
        tile
      >
        Flex item {{ n }}
      </v-card>
    </div>
    <div class="d-flex flex-column-reverse">
      <v-card
        v-for="n in 3"
        :key="n"
        class="pa-2"
        outlined
        tile
      >
        Flex item {{ n }}
      </v-card>
    </div>
    </v-col>
  </div>
</template>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>
