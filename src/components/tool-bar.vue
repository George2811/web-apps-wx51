<template>
    <v-card color="grey lighten-4" flat tile>
      <v-toolbar dense  height="70px" clipped-left>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up" v-if="!logged"></v-app-bar-nav-icon>
        <v-toolbar-title class="red--text font-weight-bold text-h4 ml-4">PeruStars</v-toolbar-title>
        <v-spacer></v-spacer>
        <div v-if="!logged" class="hidden-sm-and-down">
          <v-btn class="text-toolbar-btn mr-4 red--text" elevation="0" text-to="/" to="/">Home</v-btn>
          <v-btn class="text-toolbar-btn mr-4 red--text" elevation="0" text-to="/" to="/about">About</v-btn>
          <v-btn class="text-toolbar-btn mr-4 white--text btn-color" elevation="1" text-to="/" to="/login">Iniciar Sesión</v-btn>
          <v-btn class="text-toolbar-btn mr-4 red--text" elevation="0" outlined text-to="/" to="/register">Registrar</v-btn>
        </div>
        <v-navigation-drawer
            v-model="drawer"
            temporary
            absolute
            width = "200"
            height="100vh"
            id = "drawer"
        >
          <v-list dense nav>
            <v-list-item
                v-for="item in buttonsList"
                :key="item.name"
                link
                :to='item.path'
            >
                <v-list-item-icon>
                  <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title to="/about">{{ item.name }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-menu left bottom v-if="logged">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on" class="mr-2">
              <v-icon size="2rem">mdi-account-circle</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="() => {}">
              <v-list-item-title class="text-body-2">
                <router-link class="text-body-2" to="/home">
                  <v-icon size="2rem">mdi-home-circle</v-icon>Home
                </router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="() => {}">
              <v-list-item-title class="text-body-2">
                <router-link class="text-body-2" to="/hobbyist/edit">
                  <v-icon size="2rem px-5">mdi-account-edit</v-icon>Perfil
                </router-link>
              </v-list-item-title>
            </v-list-item>
            <v-list-item @click="() => {}">
              <v-list-item-title>
                <router-link class="text-body-2" to="/">
                  <v-icon size="2rem">mdi-logout</v-icon>Cerrar Sesión
                </router-link>
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
  ],
  data(){
    return{
      drawer: null,
      buttonsList: [
        {name:'Home', icon: 'mdi-home', path: '/'},
        {name:'About', icon: 'mdi-information', path: '/about'},
        {name:'Login', icon: 'mdi-login', path: '/login'},
        {name:'Register', icon: 'mdi-format-color-highlight', path: '/register'}
      ]
    }
  }
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