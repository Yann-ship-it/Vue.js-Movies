<template>
  <MoviesList />
  <HeaderNav />
  <FooterApp />
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue"; // On importe le code qui est dans HeaderNav.vue
import FooterApp from "./components/FooterApp.vue"; // On importe le code qui est dans FooterApp.vue
import  MoviesList from "./components/MoviesList.vue";
export default {
  name: "UsersMid",
  components: {
    MoviesList,
    HeaderNav,
    FooterApp,
  },
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
