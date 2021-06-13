<template>
  <v-app>
    <tool-bar></tool-bar>

    <v-main>
      <terms-and-conditions-view></terms-and-conditions-view>
    </v-main>
  </v-app>
</template>

<script>


import ToolBar from "./components/tool-bar";
import TermsAndConditionsView from "./components/terms-and-conditions-view";

export default {
  name: 'App',

  components: {
    TermsAndConditionsView,
    ToolBar

  },

  data: () => ({
    //
  }),
};
</script>
