<template>
  <v-card class="d-flex flex-column flex-md-row justify-md-center" max-width="1000" elevation="3">
    <v-img
        src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
        alt="Photo"
        width="500" height="310"
    ></v-img>
    <div class="d-flex flex-column align-center align-md-start justify-space-between py-5 ml-2 pr-3">
      <div>
        <v-card-title class="text-body-1 font-weight-bold">{{ this.title }}</v-card-title>
        <v-btn elevation="0" color="white">
          <v-icon>mdi-calendar</v-icon>
          15/06/21 - 16/06/21
        </v-btn>
        <p class="pl-3 col-10 col-md-12">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam assumenda autem blanditiis, earum
        </p>
        <v-btn elevation="0" color="white">
          <v-icon>mdi-currency-usd</v-icon>
          500
        </v-btn>
      </div>
      <v-card-actions class="d-flex flex-column align-start">
        <v-btn class="btn-color text-capitalize text-body-1 font-weight-bold">Agregar</v-btn>
      </v-card-actions>
    </div>
  </v-card>

</template>

<script>

export default {
  name: "artist-event-card",
  components: {},
  props: [
    "title",
    "description"
  ]
}
</script>

<style scoped>
.btn-color {
  color: white;
  width: 110px;
  min-height: 30px;
  background: radial-gradient(circle, rgba(203, 144, 40, 1) 0%, rgba(221, 0, 0, 1) 100%);
}
</style>