<template>
  <v-card class="artist-card d-flex flex-column " max-width="270" height="270" elevation="3">
    <v-card-title class="dark--text flex flex-row align-center">
      <v-avatar size="50">
        <img alt="user" src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg">
      </v-avatar>
      <div class="card-name ml-2">
        <h2 class="text-subtitle-1">{{artist.firstname}} {{artist.lastname}}</h2>
        <h3 class="text-subtitle-2">{{ artist.brandName }}</h3>
      </div>
    </v-card-title>

    <div class="my-2 text-center" v-if="!logged">
      <v-btn class="text-action-btn" elevation="0" color="white">
        <v-icon>mdi-brush</v-icon>
        Pintor
      </v-btn>
      <v-btn class="text-action-btn" elevation="0" color="white">
        <v-icon>mdi-format-paint</v-icon>
        40
      </v-btn>
    </div>
    <p class="text-caption text-justify mx-5" v-if="!logged">
      "{{
        artist.phrase
      }}"
    </p>
    <v-card-actions class="d-flex justify-space-between mx-2 text-action-btn">
      <v-btn class="text-action-btn" elevation="0" color="white">
        <v-icon>mdi-account-group</v-icon>
        500
      </v-btn>
      <login-dialog v-if="!logged" text="Conocer"></login-dialog>
      <v-btn v-else color="error" to="/artist-profile">Conocer</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import LoginDialog from '../components/login-dialog'

export default {
  name: "artist-card",
  components: {
    LoginDialog
  },
  props: [
    'logged',
      'artist'
  ]
}
</script>

<style scoped>

.text-action-btn * {
  text-transform: none;
  letter-spacing: 0.02em;
  font-weight: 500;
}
</style>