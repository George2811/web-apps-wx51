<template>
  <div class="home">
    <side-bar></side-bar>
      <v-container class="my-0 mx-0 px-0" fluid>
        <h1>titulo</h1>
        <p>Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Aspernatur, blanditiis consequuntur
          deleniti distinctio doloremque hic iure molestias nostrum
          obcaecati odio perspiciatis quia veritatis vitae. Doloribus
          et eveniet nemo quas voluptatem?q</p>
      </v-container>
  </div>
</template>

<script>
import SideBar from '../components/side-bar'

export default {
  name: 'Home',
  components: {
    SideBar

  },
  data: () => ({
    cards: ['Today', 'Yesterday'],
    drawer: null
  }),
}
</script>

<style scoped>

</style>
