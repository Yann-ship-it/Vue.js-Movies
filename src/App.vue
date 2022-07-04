<template>
  <div id="app">
    <HeaderNav />
    <div>
      <div v-if="$route.path == '/'">
      <h1>Vos films favoris sont sur VueJS Movies</h1>
      <MoviesList :movies="movies" :loading="loading" errored="errored" />
    </div>

    <div v-else>
      <router-view :key="$route.fullPath"></router-view>
    </div>
    </div>
    
    <FooterApp />
  </div>
</template>

<script>
import axios from "axios";
import HeaderNav from "./components/HeaderNav.vue"; // On importe le code qui est dans HeaderNav.vue
import MoviesList from "./components/MoviesList.vue"; 
import FooterApp from "./components/FooterApp.vue"; // On importe le code qui est dans FooterApp.vue
export default {
  name: "App",
  components: {
    HeaderNav,
    MoviesList,
    FooterApp,
  },
  
  data() {
    return {
      movies: [],
      loading: true,
      errored: false,
    };
  },

  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=c97ee510a562e501f7a6273d40d73624&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      )
      .then((res) => {
        this.movies = res.data.results;

        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=c97ee510a562e501f7a6273d40d73624&language=fr-FR&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate"
          )
          .then((res) => {
            res.data.results.forEach((movie) => {
              this.movies.push(movie);
            });
            console.log(this.movies);
          });
      });
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
