<template>
  <v-card max-width="270px" elevation="3">
    <v-img
        src="https://material.angular.io/assets/img/examples/shiba2.jpg"
        alt="Photo of a Shiba Inu"
    ></v-img>
    <div class="mx-3">
      <v-card-title class="text-body-1 px-0 font-weight-bold pb-2">NombreArtwork</v-card-title>
      <p class="text-caption text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit adipisicing elit elit.
        Dignissimos dolorem minima minus siu.</p>
    </div>
    <v-card-actions class="d-flex justify-space-between mx-2 text-action-btn">
      <v-btn class="text-action-btn" elevation="0" color="white">
        <v-icon>mdi-currency-usd</v-icon>500
      </v-btn>
      <v-btn class="" color="error">Ver más</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "artwork-preview"
}
</script>

<style scoped>

.text-action-btn * {
  text-transform: none;
  letter-spacing: 0.02em;
  font-weight: 500;
}
</style>