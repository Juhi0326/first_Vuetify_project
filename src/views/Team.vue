<template>
  <div class="Team">
    <h1 class="subheading grey--text ml-12">Our Team</h1>
    <v-container class="my-5">
      <SlotButton @click="log">
        <template #first>
          kattins ide
        </template>
      </SlotButton>

      <v-row>
        <v-col
          cols="12"
          sm="6"
          md="4"
          lg="3"
          v-for="person in team"
          :key="person.name"
        >
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar" alt="" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{ person.name }}
              </div>
              <div class="grey--text">
                {{ person.role }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>
                  mdi mdi-message-text-outline
                </v-icon>
                <span>message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import SlotButton from "../components/SlotButton";

export default {
  name: "Team",
  components: {
    SlotButton,
  },
  data() {
    return {
      team: [
        {
          name: "Juhász István",
          role: "Junior web developer",
          avatar: "/me3.jpg",
        },
        {
          name: "Bigos András",
          role: "Graphic designer",
          avatar: "/santa.webp",
        },
        { name: "Borzsák Anna", role: "web developer", avatar: "/anna.webp" },
        {
          name: "Márkus Szabolcs",
          role: "Sales account manager",
          avatar: "/man.webp",
        },
      ],
    };
  },
  methods: {
    log() {
      console.log("megy a slot");
    },
  },
};
</script>
