<template>
  <v-app>
    <tool-bar :logged="logged"></tool-bar>
    <v-main>
      <router-view @isLogged="login"></router-view>
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
    logged: false
  }),
  created() {
  },
  methods:{
    login(){
      if (window.location.pathname === '/home')
        return this.logged = true;
      return this.logged = false;
    }
  }
};
</script>

<style>
main{
  margin-top: 70px;
}
</style>
