<template>
<div class="all">
<v-card class="card">
  <!--Titulo-->
  <v-card-title class="Titulo">
    <span class="headline">Nueva Obra de Arte</span>
  </v-card-title>
  <!--Texto-->
  <v-card-text>
    <v-form>
    <v-container>
      <v-text-field
          v-model="artwork.artTitle" label="Titulo de la obra"
          required
          :rules="formRule.title"
      ></v-text-field>
      <v-text-field
          v-model="artwork.artDescription" label="¿De que trata tu obra?"
          required
          :rules="formRule.description"
          :counter=250
      ></v-text-field>
      <v-text-field
          v-model="artwork.artCost" label="S/.Valor"
          required
          :rules="formRule.cost"
      ></v-text-field>
      <v-text-field
          v-model="artwork.linkInfo" label="Links externos"
      ></v-text-field>
    </v-container>
    </v-form>
  </v-card-text>

  <!--Botones-->
  <div class="botones">
  <v-card-actions>
    <v-btn text @click="close">Retroceder</v-btn>
    <v-btn text @click="save" class="crear-btn">Crear</v-btn>
  </v-card-actions>
  </div>
</v-card>
</div>
</template>

<script>
/*Aqui falta Axios*/
/*import ArtworksApiService from ''*/

export default {
  name: "new-artwork",
  data(){
    return{
      artwork:{
        artTitle: '',
        artDescription: '',
        artCost: 0,
        linkInfo:'',
      },
      formRule:{
        title:[
            v => !!v||'Se requiere titulo'
        ],
        cost:[
            v=> v>=0||'Este valor no puede ser negativo'
        ]
      }
    }
  },
  methods: {
    save(){
      /* aqui hay que guiarnos segun el service
      ArtworksApiService.create(this.item)
          .then(() => {
            this.navigateToTutorials();
          })
          .catch(e => {
            console.log(e);
          })
       */
    },
    regresar(){
     /*cuando se regresa*/
    }
  }
}
</script>

<style scoped>
.card{
  align-items: center;
}
.botones{
  display: flex;
}
.crear-btn{
  color: white;
  background: linear-gradient(175deg, #ff9143 0, #ff824a 12.5%, #ff734e 25%, #ff6352 37.5%, #f25353 50%, #df4453 62.5%, #cd3753 75%, #bd2c54 87.5%, #ae2455 100%);
}

</style>