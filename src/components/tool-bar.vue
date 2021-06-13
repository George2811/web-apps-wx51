<template>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar dense  height="70px">
        <v-toolbar-title class="red--text font-weight-bold text-h4 ml -4">Perustars</v-toolbar-title>
        <v-spacer></v-spacer>
        <div>
          <v-btn class="text-toolbar-btn mr-4 red--text" elevation="0" text-to="/" to="/">Home</v-btn>
          <v-btn class="text-toolbar-btn mr-4 red--text" elevation="0" text-to="/" to="/about">About</v-btn>
          <v-btn class="text-toolbar-btn mr-4 white--text btn-color" elevation="1" text-to="/">Iniciar Sesión</v-btn>
          <v-btn class="text-toolbar-btn mr-4 red--text" elevation="0" outlined text-to="/">Registrar</v-btn>
        </div>
      </v-toolbar>
    </v-card>

</template>

<script>
export default {
  name: "tool-bar"
}
</script>

<style scoped>
.v-toolbar{
  position: fixed;
  z-index: 200;
  width: 100%;
}

.text-toolbar-btn {
  text-transform: none;
  letter-spacing: 0.02em;
  font-weight: 500;
}
.btn-color {
  color: white;
  background: linear-gradient(175deg, #ff9143 0, #ff824a 12.5%, #ff734e 25%, #ff6352 37.5%, #f25353 50%, #df4453 62.5%, #cd3753 75%, #bd2c54 87.5%, #ae2455 100%);
}
</style>