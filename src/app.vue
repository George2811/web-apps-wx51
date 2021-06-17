<template>
  <v-app>
    <tool-bar :logged="logged"></tool-bar>
    <v-main>
     <!--
      <router-view></router-view>
     -->
      <new-artwork></new-artwork>
    </v-main>
  </v-app>
</template>

<script>

import ToolBar from "./components/tool-bar";
import NewArtwork from "./components/new-artwork";

export default {
  name: 'App',
  components: {
    NewArtwork,
    ToolBar
  },
  data: () => ({
    logged: false
  }),
  created() {
  }
};
</script>

<style>
main{
  margin-top: 70px;
}
</style>
