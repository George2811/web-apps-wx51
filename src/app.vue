<template>
  <v-app>
    <tool-bar></tool-bar>
    <v-main>
      <about-view></about-view>
    </v-main>
  </v-app>
</template>

<script>


import ToolBar from "./components/tool-bar";
import AboutView from "./components/about-view";

export default {
  name: 'App',
  components: {
    AboutView,
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