<template>
  <div class="card-container mx-auto">
    <br>
    <br>
<v-card class="card justify-center" max-width="450" elevation="3">
  <v-card-title>Eliga la fecha a la cual asistirá</v-card-title>
  <v-date-picker
      v-model="asistance.assitanceDay"
      color="red"
      elevation="15"
  ></v-date-picker>
  <br>
  <br>
  <v-card-actions>
    <v-btn class="btn-back" @click="$router.go(-1)" >Regresar</v-btn>
    <v-btn text @click="assign" class="btn-color">Asistir</v-btn>
  </v-card-actions>


</v-card>
  </div>
</template>

<script>
export default {
  name: "assistance-form",
  data(){
    return{
      asistance:{
        assitanceDay: ''
      }
    }
  },
  methods:{
    assign(){

    }
  }
}
</script>

<style scoped>
.btn-color {
  color: white;
  background: linear-gradient(175deg, #ff9143 0, #ff824a 12.5%, #ff734e 25%, #ff6352 37.5%, #f25353 50%, #df4453 62.5%, #cd3753 75%, #bd2c54 87.5%, #ae2455 100%);
}

.card-container{
  padding-left: 10%;
}
.justify-center{
  align-items: center;
}

.card{
  align-items: center;
  align-content: center;
  margin:auto;
}
</style>