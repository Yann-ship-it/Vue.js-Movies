<template>
  <div id="app">
    <UsersMid />
  </div>
</template>

<script>
import UsersMid from './components/Users.vue'

export default {
  name: 'app',
  components: {
    UsersMid }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
