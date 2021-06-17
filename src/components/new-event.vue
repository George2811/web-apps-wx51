<template>
  <div class="all">
    <v-card class="card">
      <!--Titulo-->
      <v-card-title class="Titulo">
        <span class="headline">Nuevo Evento</span>
      </v-card-title>
      <!--Texto-->
      <v-card-text>
        <v-form>
          <v-container>
            <v-text-field
                v-model="event.eventTitle" label="Titulo del Evento"
                required
                :rules="formRule.title"
            ></v-text-field>
            <!--Fecha de Inicio y de Fin-->
            <br>
          <v-row justify="space-around">
            <v-date-picker
                v-model="event.dateStart"
                color="red"
                elevation="15"
            ></v-date-picker>
            <v-date-picker
                v-model="event.dateEnd"
                color="red"
                elevation="15"
            ></v-date-picker>
          </v-row>
            <br>
            <v-text-field
                v-model="event.eventDescription" label="Descripción de su evento"
                required
                :counter=250
                :rules="formRule.description"
            ></v-text-field>
            <v-text-field
                v-model="event.eventAditionalinfo" label="Información de su evento"
                required

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
export default {

  /*Aqui falta Axios*/
  /*import EventsApiService from ''*/

  name: "new-event",
  data() {
    return {
      event: {
        eventTitle:'',
        eventType:1,
          dateStart: '',
          dateEnd: '',
        eventDescription:'',
        eventAditionalinfo:''
      },
      formRule:{
        title:[
          v => !!v||'Se requiere titulo'
        ],
        description:[
            v => !!v||'Se requiere descripcion'
        ]
      }
    }
  },
  methods: {
    save(){
      /* aqui hay que guiarnos segun el service
      EventsApiService.create(this.event)
          .then(() => {
            this.navigateToTutorials();
          })
          .catch(e => {
            console.log(e);
          })
       */
    },
    regresar(){
      /*cuando  regresa*/
    }
  }
}
</script>

<style scoped>
.crear-btn{
  color: white;
  background: linear-gradient(175deg, #ff9143 0, #ff824a 12.5%, #ff734e 25%, #ff6352 37.5%, #f25353 50%, #df4453 62.5%, #cd3753 75%, #bd2c54 87.5%, #ae2455 100%);
}
</style>