<template>
  <div>
    <v-card>
      <v-img
          src="../assets/img/principal-img.jpg"
          max-height="400px"
          position="relative"
      ></v-img>
    </v-card>

    <v-container>
      <v-card elevation="0" class="mx-5 mt-15">
        <v-card-title class="px-0 text-h5 font-weight-medium">
          <v-icon>mdi-palette</v-icon>Obras Destacadas
        </v-card-title>
        <v-list-item-content class="d-flex flex-row justify-space-between">
          <artwork-card v-for="(artwork,i) in cards" :key="i" class="mb-10"></artwork-card>
        </v-list-item-content>
      </v-card>
      <v-divider></v-divider>

      <v-card elevation="0" class="mx-5 mt-15">
        <v-card-title class="px-0 text-h5 font-weight-medium">
          <v-icon>mdi-palette</v-icon>Nuevos Artistas
        </v-card-title>
        <v-list-item-content class="d-flex flex-row justify-space-between">
          <artist-card v-for="(artwork,i) in cards" :key="i" class="mb-10"></artist-card>
        </v-list-item-content>
      </v-card>
      <v-divider></v-divider>

      <v-card elevation="0" class="mx-5 mt-15">
        <v-card-title class="px-0 text-h5 font-weight-medium">
          <v-icon>mdi-palette</v-icon>Próximos eventos
        </v-card-title>
        <v-list-item-content class="d-flex flex-row justify-space-between">
          <event-card v-for="(artwork,i) in cards" :key="i" class="mb-10"></event-card>
        </v-list-item-content>
      </v-card>

    </v-container>
  </div>
</template>

<script>
import ArtworkCard from "./artwork-card";
import EventCard from "./event-card"
import ArtistCard from "./artist-card"
export default {
  name: "home-preview",
  components: {
    ArtworkCard,
    EventCard,
    ArtistCard
  },
  data() {
    return {
      cards: [
        {hola: 1},
        {hola: 1},
        {hola: 1},
        {hola: 1},
        {hola: 1},
        {hola: 1},
        {hola: 1},
        {hola: 1}
      ]
    }
  }
}
</script>

<style scoped>

</style>