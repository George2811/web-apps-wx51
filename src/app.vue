<template>
  <v-app>
    <tool-bar></tool-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

import ToolBar from "./components/tool-bar";
export default {
  name: 'App',
  components: {
    ToolBar
  },
  data: () => ({
    //
  }),
};
</script>
<style>
main{
  margin-top: 70px;
}
</style>