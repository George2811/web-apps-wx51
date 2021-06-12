<template>
  <v-app>
    <tool-bar></tool-bar>

    <v-main>
      <home-preview></home-preview>
    </v-main>
  </v-app>
</template>

<script>

import HomePreview from "./components/home-preview";
import ToolBar from "./components/tool-bar";

export default {
  name: 'App',

  components: {
    ToolBar,
    HomePreview
  },

  data: () => ({
    //
  }),
};
</script>
