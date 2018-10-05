<template>
  <v-app>
    <v-navigation-drawer></v-navigation-drawer>
    <v-toolbar></v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer></v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
