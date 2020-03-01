<template>
  <v-app class="app">
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  
  data () {
    return {
      //
    }
  }
}
</script>

<style scoped>
.app {
font-family: 'Roboto', sans-serif;
}
</style>

