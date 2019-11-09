<template>
  <div id="app">
    <router-view></router-view>
    <NavBottom v-show="shownav"></NavBottom>

  </div>
</template>

<script>
  import NavBottom from './components/NavBottom.vue'
  import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {
    NavBottom
  },
  computed:{
    ...mapGetters(['shownav'])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
