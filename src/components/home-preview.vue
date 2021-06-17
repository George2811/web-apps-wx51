<template>
  <div>
    <v-carousel :show-arrows="true" cycle height="400">
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
      >
      </v-carousel-item>
    </v-carousel>

    <v-container>
      <v-card elevation="0" class="mx-5 mt-15">
        <v-card-title class="px-0 text-h5 font-weight-medium">
          <v-icon>mdi-palette</v-icon>Obras Destacadas
        </v-card-title>
        <v-list-item-content class="d-flex flex-row justify-space-between justify-center">
          <artwork-card v-for="(artwork,i) in cards" :key="i" class="mb-10"></artwork-card>
        </v-list-item-content>
      </v-card>
      <v-divider></v-divider>

      <v-card elevation="0" class="mx-5 mt-15">
        <v-card-title class="px-0 text-h5 font-weight-medium">
          <v-icon>mdi-palette</v-icon>Nuevos Artistas
        </v-card-title>
        <v-list-item-content class="d-flex flex-row flex-wrap">
          <artist-card v-for="(artwork,i) in cards" :key="i" class="mb-10 mr-2"></artist-card>
        </v-list-item-content>
      </v-card>
      <v-divider></v-divider>

      <v-card elevation="0" class="mx-5 mt-15">
        <v-card-title class="px-0 text-h5 font-weight-medium">
          <v-icon>mdi-palette</v-icon>Próximos eventos
        </v-card-title>
        <v-list-item-content class="d-flex flex-row justify-space-between justify-center">
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
      ],
      items: [
        {
          src: require('../assets/img/principal-img.jpg'),
        },
        {
          src: 'https://picsum.photos/id/1049/3900/3120.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
        {
          src: 'https://picsum.photos/id/1050/6000/4000.jpg',
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>