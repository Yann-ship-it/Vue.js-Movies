<template>
  <h1>FrenchMovies</h1>
   <MoviesList :movies="frenchMovies" :loading="loading" :errored="errored" />
</template>
<script>
import MoviesList from "./MoviesList.vue"
import axios from "axios"
export default {
  name: "FrenchMovies",
  components: {
    MoviesList
  },
  data() {
    return {
      frenchMovies: [],
      loading: true,
      errored: false,
      preUrl: "https://image.tmdb.org/t/p/original",
    };
  },
  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=c97ee510a562e501f7a6273d40d73624&language=fr-FR&sort_by=popularity.desc&certification_country=fr&include_adult=false&include_video=false&page=1&with_original_language=fr"
      )
      .then((res) => {
        this.frenchMovies = res.data.results;

        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=c97ee510a562e501f7a6273d40d73624&language=fr-FR&sort_by=popularity.desc&certification_country=fr&include_adult=false&include_video=false&page=2&with_original_language=fr"
          )
          .then((res) => {
            res.data.results.forEach((movie) => {
              this.frenchMovies.push(movie);
            });
            console.log(this.frenchMovies);
          });
      });
  },

}



</script>