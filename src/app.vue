<template>
  <v-app>
    <tool-bar :logged="logged"></tool-bar>
    <v-main>
     <!--
      <router-view></router-view>
     -->
      <new-event></new-event>
    </v-main>
  </v-app>
</template>

<script>

import ToolBar from "./components/tool-bar";
import NewEvent from "./components/new-event";

export default {
  name: 'App',
  components: {
    NewEvent,
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
