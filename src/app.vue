<template>
  <v-app>
    <tool-bar :logged="logged"></tool-bar>
    <v-main>
      <!--
      <router-view></router-view>
      -->
      <!--
      <artwork-id></artwork-id>
      -->
      <event-id></event-id>
    </v-main>
  </v-app>
</template>

<script>

import ToolBar from "./components/tool-bar";
import EventId from "./components/event-id";
export default {
  name: 'App',
  components: {
    EventId,
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
