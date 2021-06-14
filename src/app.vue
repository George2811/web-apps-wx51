<template>
  <v-app>
    <tool-bar :logged="logged"></tool-bar>
    <v-main>
      <!--
      <router-view></router-view>
      -->
      <artwork-id></artwork-id>
    </v-main>
  </v-app>
</template>

<script>

import ToolBar from "./components/tool-bar";
import ArtworkId from "./components/artwork-id";
export default {
  name: 'App',
  components: {
    ArtworkId,
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
