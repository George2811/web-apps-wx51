<template>
  <div>
    <!--CARRUSEL-->
    <v-carousel :show-arrows="true" cycle height="400" class="carousel">
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
      >
        <v-row class="fill-height" align="center" justify="center">
          <h1 class="title white--text">{{ artwork.artTitle }}</h1>
        </v-row>
      </v-carousel-item>
    </v-carousel>
    <br>
    <!--CONTENIDO-->
    <div class="info-container  d-flex flex-column flex-sm-row mx-auto  align-center">

      <div class="left-content d-flex flex-column">
        <h2 class="Description text-center text-sm-start">Descripción</h2>
        <br>
        <p class="mx-auto mx-sm-0">
          {{
            artwork.artDescription
          }}
          <br>
        </p>
      </div>

      <div class="right-content">
        <h2 class="aditional-info">Datos adicionales</h2>
        <br>
        <p>
          <v-icon color="red">mdi-cash-multiple</v-icon>
          S/. {{ artwork.artCost }}
        </p>
        <v-btn>
          <v-icon color="red">mdi-share-variant</v-icon>
          Compartir
        </v-btn>
        <v-btn
            class="mx-4"
            fab
            small
            color="white"
            @click="addFavorite()"
        >
          <v-icon :color="colorHearth">
            mdi-heart
          </v-icon>
        </v-btn>
      </div>
      <br>
    </div>

    <div class="go-back my-10">
      <v-btn class="text-toolbar-btn mr-4 white--text btn-color" elevation="1" text-to="/" to="/home">Regresar</v-btn>
    </div>

  </div>
</template>

<script>
import ArtworksApiService from '../services/artworks-api.service'
export default {
  name: "artwork-id",
  data() {
    return {
      artistId : this.$route.params.artistId,
      artworkId : this.$route.params.artworkId,
      artwork : Object,
      items: [
        {
          src: require('../assets/img/principal-img.jpg'),
        },
        {
          src: 'https://picsum.photos/id/1049/3900/3120.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
        {
          src: 'https://picsum.photos/id/1050/6000/4000.jpg',
        },
      ],
      isFavorite: false
    }
  },
  created() {
    this.retrieveArtwork();
  },
  computed:{
    colorHearth: function (){
      return this.isFavorite? 'error': 'dark';
    }
  },
  methods:{
    addFavorite(){
      this.isFavorite = !this.isFavorite;
    },
    retrieveArtwork(){
      ArtworksApiService.get(this.artistId, this.artworkId)
      .then(response => {
        this.artwork = response.data;
        console.log(this.artwork)
      }).catch(e => { console.log(e); })
    }
  }
}

</script>

<style scoped>
.info-container {
  width: 80%;
}

.left-content {
  width: 80%;
}
.red-hearth{
  color: red;
}
.dark-hearth{
  color: black;
}
.btn-color {
  color: white;
  background: linear-gradient(175deg, #ff9143 0, #ff824a 12.5%, #ff734e 25%, #ff6352 37.5%, #f25353 50%, #df4453 62.5%, #cd3753 75%, #bd2c54 87.5%, #ae2455 100%);
}

.go-back {
  display: flex;
  align-items: center;
  justify-content: center;
}

p {
  width: 70%;
  text-align: justify;
}
</style>