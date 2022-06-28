
<template>
  <HeaderNav /> <!-- Nous sommes obligés d'appeler l'élément ici pour l'organiser et l'afficher -->
  <MoviesList /> <!-- Nous sommes obligés d'appeler l'élément ici pour l'organiser et l'afficher -->
  <MoviesCard /> <!-- Nous sommes obligés d'appeler l'élément ici pour l'organiser et l'afficher -->
  <FooterApp /> <!-- Nous sommes obligés d'appeler l'élément ici pour l'organiser et l'afficher -->
</template>

<script>
import HeaderNav from "./components/HeaderNav.vue"; // On importe le code qui est dans HeaderNav.vue
import FooterApp from "./components/FooterApp.vue"; // On importe le code qui est dans FooterApp.vue
import MoviesCard from "./components/MoviesCard.vue"
import  MoviesList from "./components/MoviesList.vue";
export default {
  name: "UsersMid",
  components: {
    HeaderNav,
    MoviesList,
    MoviesCard,
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
