<template>
  <v-card class="artwork-card" max-width="250" elevation="3">
    <v-img
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        alt="Photo"
    ></v-img>
    <div class="mx-3">
      <v-card-title class="text-body-1 px-0 font-weight-bold pb-2">Name Artwork</v-card-title>
      <p class="text-caption text-justify">
        Lorem ipsum dolor sit amet, consectetur
        adipisicing elit adipisicing elit elit.
        Dignissimos dolorem minima minus siu.
      </p>
    </div>
    <v-card-actions class="d-flex justify-space-between mx-2 text-action-btn">
      <v-btn class="text-action-btn" elevation="0" color="white">
        <v-icon>mdi-currency-usd</v-icon>500
      </v-btn>
      <login-dialog v-if="!logged" text="Ver más"></login-dialog>
      <v-btn v-else color="error" to="/artwork">Ver más</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import LoginDialog from '../components/login-dialog'
export default {
  name: "artwork-card",
  props:[
    'logged'
  ],
  components:{
    LoginDialog
  }
}
</script>

<style scoped>

/*.text-action-btn * {*/
/*  text-transform: none;*/
/*  letter-spacing: 0.02em;*/
/*  font-weight: 500;*/
/*  background: linear-gradient(175deg, #ff9143 0, #ff824a 12.5%, #ff734e 25%, #ff6352 37.5%, #f25353 50%, #df4453 62.5%, #cd3753 75%, #bd2c54 87.5%, #ae2455 100%);*/
/*}*/
</style>