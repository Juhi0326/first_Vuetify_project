<template>
  <div class="Projects">
    <h1 class="subheading grey--text">This is projects page</h1>
    <v-container class="my-5">
      <template>
        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in 1" :key="i">
            <v-expansion-panel-header>
              Item
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <div class="font-weight-bold">2020.10.17</div>
              <div>info</div>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </template>
    </v-container>
  </div>
</template>
