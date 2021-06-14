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
      <h1 class="title">OBRA DE ARTE</h1>
      </v-row>
    </v-carousel-item>
  </v-carousel>
  <br>
 <!--CONTENIDO-->
  <div class="info-container">

    <div class="left-content">
       <h2 class="Description">Descripción</h2>
       <br>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec leo ornare, cursus arcu ut, faucibus odio. Donec non sem gravida, pharetra nisl in, volutpat metus. Aenean eget elementum justo, eu malesuada est. Nulla condimentum eleifend lectus. Mauris ut dapibus magna, nec laoreet lorem. Nunc iaculis sapien a sollicitudin molestie. Phasellus at aliquet nulla. Nam rhoncus, mi ut varius euismod, velit augue tincidunt dolor, venenatis malesuada sem lacus quis mi.
        <br>
       </p>
    </div>

    <div class="right-content">
      <h2 class="aditional-info">Datos adicionales</h2>
      <br>
      <p><v-icon color="red">mdi-cash-multiple</v-icon>   S/. 100.00</p>
      <v-btn><v-icon color="red">mdi-share-variant</v-icon>Compartir</v-btn>
    </div>
    <br>


  </div>

  <div class="go-back">
    <v-btn class="text-toolbar-btn mr-4 white--text btn-color" elevation="1" text-to="/">Regresar</v-btn>
  </div>

</div>
</template>

<script>
export default {
  name: "artwork-id",

  data() {
    return {

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
      ]
    }
  }
}

</script>

<style scoped>
.info-container{
  display: flex;
}

.left-content{
  padding-right: 30%;
  padding-left: 5%;
}

.right-content{
  padding-right: 20%;
}

.btn-color {
  color: white;
  background: linear-gradient(175deg, #ff9143 0, #ff824a 12.5%, #ff734e 25%, #ff6352 37.5%, #f25353 50%, #df4453 62.5%, #cd3753 75%, #bd2c54 87.5%, #ae2455 100%);
}

.go-back{
  display: flex;
  align-items: center;
  justify-content: center;
}

</style>