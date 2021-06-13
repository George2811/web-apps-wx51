<template>
  <v-card class="artist-card" max-width="270" elevation="3">
    <v-card-title class="dark--text flex flex-row align-center">
    <v-avatar size="50">
      <img alt="user" src="https://cdn.pixabay.com/photo/2020/06/24/19/12/cabbage-5337431_1280.jpg">
    </v-avatar>
      <div class="card-name ml-2">
      <h2 class="text-h6">Leonardo DaVinci</h2>
      <h3 class="text-subtitle-2">DaVinci</h3>
      </div>
    </v-card-title>

    <div class="my-2 text-center">
      <v-btn class="text-action-btn" elevation="0" color="white">
        <v-icon>mdi-brush</v-icon>Pintor
      </v-btn>
      <v-btn class="text-action-btn" elevation="0" color="white">
        <v-icon>mdi-format-paint</v-icon>40
      </v-btn>
    </div>

    <p class="text-caption text-justify mx-5">
      "Lorem ipsum dolor sit amet, consectetur
      adipisicing elit adipisicing elit elit.
      Dignissimos dolorem minima minus siu."
    </p>

    <v-card-actions class="d-flex justify-space-between mx-2 text-action-btn">
      <v-btn class="text-action-btn" elevation="0" color="white">
        <v-icon>mdi-account-group</v-icon>500
      </v-btn>
      <v-btn class="" color="error">Conocer</v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
export default {
  name: "artist-card"
}
</script>

<style scoped>

</style>