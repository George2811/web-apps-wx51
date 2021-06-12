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
          <artwork-preview v-for="(artwork,i) in cards" :key="i" class="mb-10"></artwork-preview>
        </v-list-item-content>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import ArtworkPreview from "./artwork-preview";
export default {
  name: "home-preview",
  components: {ArtworkPreview},
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
        {hola: 1},
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