<template>
  <v-form>
    <section>
      <div class="shape">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
          <path d="M-5.92,83.38 C-5.92,84.38 509.31,143.58 509.87,144.56 L500.00,150.00 L0.00,150.00 Z"
                style="stroke: none; fill: #fff;"></path>
        </svg>
      </div>
      <v-card class="d-flex flex-row mx-10 mt-10 top-content" color="transparent" elevation="0">
        <div class="cont">
          <v-card-title style="width: 320px" class="d-block text-left ml-0 white--text text-h5 font-weight-bold mx-auto">{{ brandName }}</v-card-title>
          <v-img
              src="../assets/img/amateur.jpg"
              alt="artist image"
              width="200" height="200"
              class="img"
          >
          </v-img>
          <v-dialog v-model="informationDialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="btn" fab dark color="deep-orange darken-2" v-bind="attrs" v-on="on">
                <v-icon dark>mdi-plus</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Información del Artista</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field
                          v-model="firstName"
                          label="Nombre*"
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                          v-model="lastName"
                          label="Apellido*"
                          required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field
                          v-model="brandName"
                          label="Apodo*"
                          required
                      ></v-text-field>
                    </v-col>

                  </v-row>
                </v-container>
                <small>*Todos los campos son requeridos</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="error"
                    text
                    @click="informationDialog = false"
                >
                  Aceptar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <div class="profile-data d-flex flex-row justify-space-around mr-10">
          <v-container class="flex-column profile-contact">
            <p class="font-weight-bold">Specialidad</p>
            <p>{{ specialty.name }}

              <v-dialog
                  v-model="specialtyDialog"
                  scrollable
                  max-width="300px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn class="ml-3" small fab dark color="deep-orange darken-2" v-bind="attrs" v-on="on">
                    <v-icon dark>mdi-pencil</v-icon>
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>Elige una especialidad</v-card-title>
                  <v-divider></v-divider>
                  <v-card-text style="height: 300px;">
                    <v-radio-group
                        v-model="specialty"
                        column
                    >
                      <v-radio
                          v-for="(specialty) in specialties" :key="specialty.id"
                          :label="specialty.name"
                          :value="specialty"
                      ></v-radio>
                    </v-radio-group>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-btn
                        color="blue darken-1"
                        text
                        @click="specialtyDialog = false"
                    >
                      Aceptar
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </p>
          </v-container>
          <v-container class="flex-column" style="width: 450px">
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
            <v-btn class="mt-5" small fab dark color="deep-orange darken-2">
              <v-icon dark>mdi-pencil</v-icon>
            </v-btn>
          </v-container>
          <v-container class="flex-column">
            <p class="text-center" style="max-width: 350px">"{{phrase}}"</p>
            <v-dialog v-model="phraseDialog" persistent max-width="600px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn class="mt-5" small fab dark color="deep-orange darken-2" v-bind="attrs" v-on="on">
                  <v-icon dark>mdi-pencil</v-icon>
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="text-h5">Frase</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field
                            v-model="phrase"
                            :rules="rulesPhrase"
                            required
                            counter
                            maxlength="190"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*El campo es requerido.</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                      color="error"
                      text
                      @click="phraseDialog = false"
                  >
                    Aceptar
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-container>
        </div>
      </v-card>
    </section>

    <section>
      <v-card elevation="0" class="ml-15 mb-16">
        <v-card-title class="text-h5 font-weight-medium">
          ¿Quién soy?
          <v-dialog v-model="descriptionDialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn class="ml-3" x-small fab dark color="deep-orange darken-2" v-bind="attrs" v-on="on">
                <v-icon dark>mdi-pencil</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Descripción</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-textarea
                          v-model="description"
                          color="error"
                          :rules="rulesDescription"
                          required
                          counter
                          maxlength="250"
                      >
                      </v-textarea>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*El campo es requerido.</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                    color="error"
                    text
                    @click="descriptionDialog = false"
                >
                  Aceptar
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card-title>
        <p class="description-p">{{description}}</p>

      </v-card>
    </section>

    <section class="artworks-section">
      <v-card class="mx-10 mt-5 mb-13" elevation="0" color="transparent">
        <v-card-title class="white--text text-h5 font-weight-bold">Mis obras de arte</v-card-title>
          <v-btn class="agregar" to="/artwork/new">Agregar +</v-btn>
        <div class="d-flex flex-row align-center">
          <v-btn elevation="0" height="auto" width="100px" color="transparent" v-on:click="previousPage"
                 class="rounded-circle">
            <v-icon class="text-h1 white--text">mdi-chevron-left</v-icon>
          </v-btn>
          <v-list-item-content class="d-flex flex-row justify-space-between justify-center px-10">
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
      <v-card class="mx-10 mt-5 mb-15" elevation="0" color="transparent">
        <v-card-title class="text-h5 font-weight-medium">Futuros eventos</v-card-title>
        <v-btn class="agregar" to="/event/new">Agregar +</v-btn>
        <v-carousel
            height="400"
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
        <v-btn
            color="error"
            dark
            absolute
            top
            class="cambios"
            @click="createArtist"
        >
          Aplicar Cambios
        </v-btn>
      </v-card>
    </section>
  </v-form>
</template>

<script>
import SpecialtiesApiService from '../services/specialties-api.service'
import ArtistsApiService from '../services/artists-api.service'

import ArtworkCard from "../components/artwork-card";
import ArtistEventCard from "../components/artist-event-card";

export default {
  name: "ArtistProfile",
  components: {ArtistEventCard, ArtworkCard},
  data() {
    return {
      informationDialog: false,
      specialtyDialog: false,
      phraseDialog: false,
      descriptionDialog: false,
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
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      phrase: 'Aquí va texto de una frase célebre Aquí va texto de una frase célebre Aquí va textode una frase célebre Aquí va texto de una frase célebre',
      description: 'Aquí va texto de su descripción Aquí va texto de su descripción Aquí va texto de su descripción Aquí va texto de su descripción Aquí va texto de su descripción Aquí va texto de su descripción Aquí va texto de su descripción',
      brandName: 'Nombre Artista',
      firstName: '',
      lastName: '',
      specialty:{
        id: 0,
        name: 'Ninguna'
      },
      rulesPhrase: [v => v.length <= 190 || 'Max 190 characters'],
      rulesDescription: [v => v.length <= 250 || 'Max 250 characters'],
      specialties: [],
      userId: JSON.parse(localStorage.getItem('user')).id
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
    previousPage() {
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
    },
    retrieveSpecialties(){
      SpecialtiesApiService.getAll()
      .then(response => {
        this.specialties = response.data;
      }).catch(e => { console.log(e); })
    },
    getJsonObject(){
      return JSON.stringify({
        "firstname": this.firstName,
        "lastname": this.lastName,
        "userId": parseInt(this.userId),
        "brandName": this.brandName,
        "description": this.description,
        "phrase": this.phrase,
        "specialtyId": this.specialty.id
      })
    },
    createArtist(){
      console.log(this.getJsonObject());
      ArtistsApiService.create(this.getJsonObject())
          .then(response => {
            console.log(response.data)
          }).catch(e => { console.log(e); })
    }
  },
  created() {
    this.updateArtworksPage();
    this.retrieveSpecialties();
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

.cont{
  margin-left: 10px;
  margin-right: 5px;
}

.cont .img{
  border-radius: 50%;
}

.cont .btn{
  margin-left: 138px;
  margin-top: -70px;
  border: none;
  cursor: pointer;
}

.agregar{
  position: absolute;
  top: 1.5%;
  right: 5%;
  color:orangered;
}

.cambios{
  left: 50%;
  transform:translateX(-50%);
  top: 100%;
  background: linear-gradient(90deg, rgba(236, 187, 61, 1) 0%, rgba(223, 0, 0, 1) 100%);
}


</style>