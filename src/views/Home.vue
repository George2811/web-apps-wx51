<template>
  <div class="home">
    <side-bar></side-bar>
      <v-container class="my-0 mx-0 px-0 main-container" fluid>
        <!--TODO: Buscador        -->
        <v-card-title class="ml-10 px-0 text-h5 font-weight-medium">
          Artistas
        </v-card-title>
        <v-list-item-content class="d-flex flex-row justify-space-around col-10">
          <artist-card :logged="logged" v-for="(artist,i) in itemsArray" :key="i" class="mb-10"></artist-card>
        </v-list-item-content>
        <v-divider></v-divider>

        <v-card-title class="ml-10 px-0 text-h5 font-weight-medium">
          Obras de Arte
        </v-card-title>
        <v-list-item-content class="d-flex flex-row justify-space-around col-10">
          <artwork-card v-for="(artwork,i) in itemsArray" :key="i" class="mb-10"></artwork-card>
        </v-list-item-content>
        <v-divider></v-divider>

        <v-card-title class="ml-10 px-0 text-h5 font-weight-medium">
          Eventos
        </v-card-title>
        <v-list-item-content class="d-flex flex-row justify-space-around col-10">
          <event-card v-for="(event,i) in itemsArray" :key="i" class="mb-10"></event-card>
        </v-list-item-content>
      </v-container>
  </div>
</template>

<script>
import SideBar from '../components/side-bar'
import ArtistCard from '../components/artist-card'
import ArtworkCard from '../components/artwork-card'
import EventCard from '../components/event-card'

export default {
  name: 'Home',
  components: {
    SideBar,
    ArtistCard,
    ArtworkCard,
    EventCard

  },
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: null,
    itemsArray: [1,2,3,4,5,6],
    logged: true,
    roue: window.location.pathname
  }),
  methods:{
    printRoute(){
      console.log(this.roue);
    }
  }
}
</script>

<style scoped>

.main-container{
  display: flex;
  flex-direction: column;
}

</style>
