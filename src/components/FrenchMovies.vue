<template>
  <h1>FrenchMovies</h1>
  <SortButtons :movies="frenchMovies" />
  <MoviesList :movies="frenchMovies" :loading="loading" :errored="errored" />
</template>
<script>
import MoviesList from "./MoviesList.vue";
import SortButtons from "./SortButtons.vue";
import axios from "axios";
export default {
  name: "FrenchMovies",
  components: {
    MoviesList,
    SortButtons,
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
        "https://api.themoviedb.org/3/discover/movie?api_key=c97ee510a562e501f7a6273d40d73624&language=fr-FR&certification_country=fr&include_adult=false&include_video=false&page=1&vote_count.gte=2700&with_original_language=fr"
      )
      .then((res) => {
        this.frenchMovies = res.data.results;

        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=c97ee510a562e501f7a6273d40d73624&language=fr-FR&certification_country=fr&include_adult=false&include_video=false&page=2&vote_count.gte=200&with_original_language=fr"
          )
          .then((res) => {
            res.data.results.forEach((movie) => {
              this.frenchMovies.push(movie);
            });
            console.log(this.frenchMovies);
          });
      });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>
