<template>
  <div>
    <section>
      <div class="shape">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
          <path d="M-5.92,83.38 C-5.92,84.38 509.31,143.58 509.87,144.56 L500.00,150.00 L0.00,150.00 Z"
                style="stroke: none; fill: #fff;"></path>
        </svg>
      </div>
      <v-card class="d-flex flex-md-row mx-10 mt-10 top-content" color="transparent" elevation="0">
        <div class="flex-column ml-10 mr-5 image-profile">
          <v-card-title class="d-block text-center white--text text-h5 font-weight-bold">Artist Name</v-card-title>
          <v-img
              src="https://picsum.photos/id/1011/800"
              alt="artist image"
              width="200" height="200"
              class="rounded-circle"
          >
          </v-img>
        </div>
        <div class="profile-data d-flex flex-row justify-space-around mr-10">
          <div class="flex-column profile-contact">
            <p><v-icon color="white">mdi-account-group</v-icon> 999 seguidores</p>
            <p>Correo/num contacto</p>
          </div>
          <div class="flex-row justify-space-around px-12">
            <v-btn href="https://es-la.facebook.com/" target="_blank" color="transparent" elevation="0" fab>
              <v-icon class="text-h4" color="white">mdi-facebook</v-icon>
            </v-btn>
            <v-btn href="https://www.instagram.com/" target="_blank" color="transparent" elevation="0" fab>
              <v-icon class="text-h4" color="white">mdi-instagram</v-icon>
            </v-btn>
            <v-btn href="https://twitter.com/" target="_blank" color="transparent" elevation="0" fab>
              <v-icon class="text-h4" color="white">mdi-twitter</v-icon>
            </v-btn>
          </div>
          <div>
            <p class="text-center">"Aquí va texto de una frase célebre Aquí va texto de una frase célebre Aquí va texto
              de una frase célebre
              Aquí va texto de una frase célebre"</p>
          </div>
        </div>
      </v-card>
      <div class="float-right">
        <v-btn class="mr-20 btn-color text-capitalize text-body-1 font-weight-bold">Seguir</v-btn>
      </div>
    </section>

    <section>
      <v-card elevation="0" class=" ml-4 ml-md-15 mb-16">
        <v-card-title class="text-h5 font-weight-medium">¿Quién soy?</v-card-title>
        <p class="description-p col-12">"Aquí va texto de su descripción Aquí va texto de su descripción Aquí va texto de su
          descripción Aquí va
          texto de su descripción Aquí va texto de su descripción Aquí va texto de su descripción Aquí va texto de su
          descripción."</p>
      </v-card>
    </section>

    <section class="artworks-section">
      <v-card class="mx-1 mx-md-6 mt-5 mb-13" elevation="0" color="transparent">
        <v-card-title class="white--text text-h5 font-weight-bold">Mis obras de arte</v-card-title>
        <div class="d-flex flex-row align-center">
          <v-btn elevation="0" height="auto" width="100px" color="transparent" v-on:click="previusPage"
                 class="rounded-circle">
            <v-icon class="text-h1 white--text">mdi-chevron-left</v-icon>
          </v-btn>
          <v-list-item-content class="d-flex flex-column flex-md-row justify-space-between px-0 px-md-10">
            <artwork-card v-for="(artwork, i) in showingArtworks" :key="i"></artwork-card>
          </v-list-item-content>
          <v-btn elevation="0" height="auto" width="100px" color="transparent" v-on:click="nextPage"
                 class="rounded-circle">
            <v-icon class="text-h1 white--text rounded-circle">mdi-chevron-right</v-icon>
          </v-btn>
        </div>
        <template>
          <div class="text-center d-none">
            <v-pagination
                v-model="page"
                v-on:input="updateArtworksPage"
                :length="this.pageLength"
                circle
            ></v-pagination>
          </div>
        </template>
      </v-card>
    </section>

    <section>
      <v-card class="mx-0 mx-sm-9 mx-md-10 mt-5 mb-15" elevation="0" color="transparent" >
        <v-card-title class="text-h5 font-weight-medium">Futuros eventos</v-card-title>
        <v-carousel
            height="900"
            hide-delimiter-background
            show-arrows-on-hover
            light
        >
          <v-carousel-item v-for="(event, i) in showingArtworks" :key="i">
            <v-sheet height="100%" class="d-flex justify-center align-center">
              <artist-event-card :title="event.Name"></artist-event-card>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-card>
    </section>
  </div>
</template>

<script>

import ArtworkCard from "../components/artwork-card";
import ArtistEventCard from "../components/artist-event-card";

export default {
  name: "ArtistProfile",
  components: {ArtistEventCard, ArtworkCard},
  data() {
    return {
      page: 1,
      pageLength: 3,
      pageSize: 3,
      artworks: [
        {Name: 'Nombre', Description: 'Description1'},
        {Name: 'Nombre1', Description: 'Description2'},
        {Name: 'Nombre2', Description: 'Description3'},
        {Name: 'Nombre3', Description: 'Descriptio4n'},
        {Name: 'Nombre4', Description: 'Descriptio5n'},
        {Name: 'Nombre5', Description: 'Descript6ion'},
        {Name: 'Nombre6', Description: 'Descripti6on'},
        {Name: 'Nombre7', Description: 'Descripti6on'},
        {Name: 'Nombre8', Description: 'Descripti6on'},
      ],
      showingArtworks: [],
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4',
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
    }
  },
  methods: {
    updateArtworksPage() {
      console.log(this.page);
      this.showingArtworks = [
        this.artworks[(this.page - 1) * this.pageSize],
        this.artworks[(this.page - 1) * this.pageSize + 1],
        this.artworks[(this.page - 1) * this.pageSize + 2]
      ]
    },
    previusPage() {
      if (this.page > 1) {
        this.page--;
        this.updateArtworksPage();
      }
    },
    nextPage() {
      if (this.page < this.pageLength) {
        this.page++;
        this.updateArtworksPage();
      }
    }
  },
  created() {
    this.updateArtworksPage();
  }
}
</script>

<style scoped>
.shape {
  height: 60vh;
  overflow: hidden;
  background: linear-gradient(90deg, rgba(203, 144, 40, 1) 0%, rgba(255, 0, 0, 1) 100%);
  stroke: none;
  position: relative;
  top: 0;
}

.top-content {
  top: 0;
  position: absolute;
}

.mr-20 {
  margin-right: 150px;
  margin-top: -130px;
}

.profile-data > div {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

.btn-color {
  color: white;
  width: 110px;
  min-height: 30px;
  background: radial-gradient(circle, rgba(203, 144, 40, 1) 0%, rgba(221, 0, 0, 1) 100%);
}

.image-profile {
  width: 20%;
}

.profile-contact {
  margin-right: 10px;;
}

.borde-prueba {
  border: 3px solid red;
}

.description-p {
  width: 750px;
}

.artworks-section {
  background: linear-gradient(90deg, rgba(236, 187, 61, 1) 0%, rgba(223, 0, 0, 1) 100%);
  padding: 1px 0;
}
</style>