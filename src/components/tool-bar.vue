<template>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar dense  height="70px">
        <v-toolbar-title class="red--text font-weight-bold text-h4 ml-4">Perustars</v-toolbar-title>
        <v-spacer></v-spacer>
        <div v-if="!logged">
          <v-btn class="text-toolbar-btn mr-4 red--text" elevation="0" text-to="/" to="/">Home</v-btn>
          <v-btn class="text-toolbar-btn mr-4 red--text" elevation="0" text-to="/" to="/about">About</v-btn>
          <v-btn class="text-toolbar-btn mr-4 white--text btn-color" elevation="1" text-to="/">Iniciar Sesión</v-btn>
          <v-btn class="text-toolbar-btn mr-4 red--text" elevation="0" outlined text-to="/">Registrar</v-btn>
        </div>
        <v-menu left bottom v-if="logged">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" class="mr-2">
              <v-icon size="2rem">mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="() => {}">
              <v-icon size="2rem">mdi-home-circle</v-icon>
              <v-list-item-title class="text-body-2">
                <router-link class="text-body-2" to="/home">Home</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="() => {}">
              <v-icon size="2rem">mdi-account-edit</v-icon>
              <v-list-item-title class="text-body-2">
                <router-link class="text-body-2" to="/home">Perfil</router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="() => {}">
              <v-icon size="2rem">mdi-logout</v-icon>
              <v-list-item-title>
                <router-link class="text-body-2" to="/">Cerrar Sesión</router-link>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
    </v-card>

</template>

<script>
export default {
  name: "tool-bar",
  props:[
      'logged'
  ]
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
.text-body-2{
  text-decoration: none;
  color: #211c1c;
}
</style>