<template>
  <v-card class="artwork-card" max-width="200" elevation="3">
    <v-img
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        alt="Photo"
    ></v-img>
    <div class="mx-3">
      <v-card-title class="text-body-1 font-weight-bold d-block text-center">{{ specialtyName }}</v-card-title>
    </div>

  </v-card>
</template>

<script>

export default {
  name: "specialty-card",
  props: [
      'specialtyName'
  ]
}
</script>

<style scoped>

.card-title{

}

</style>