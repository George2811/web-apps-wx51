<template>
  <v-card class="event-card" max-width="250" elevation="3">
    <v-img
        src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
        alt="Photo"
    ></v-img>
    <div class="mx-3 my-2">
      <v-card-title class="text-body-1 px-0 font-weight-bold pb-2">Name Event</v-card-title>
      <v-btn class="text-action-btn" elevation="0" color="white">
        <v-icon>mdi-calendar</v-icon>15/06/21 - 16/06/21
      </v-btn>
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
  name: "event-card"
}
</script>

<style scoped>

</style>