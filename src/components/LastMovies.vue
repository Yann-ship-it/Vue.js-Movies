<template>
  <h1>lastMovies</h1>
  <SortButtons :movies="lastMovies"/>
   <MoviesList :movies="lastMovies" :loading="loading" :errored="errored" />
</template>
<script>
import MoviesList from "./MoviesList.vue"
import axios from "axios"
import SortButtons from "./SortButtons.vue";
export default {
  name: "lastMovies",
  components: {
    MoviesList,
    SortButtons
  },
  data() {
    return {
      lastMovies: [],
      loading: true,
      errored: false,
      preUrl: "https://image.tmdb.org/t/p/original",
    };
  },
  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=c97ee510a562e501f7a6273d40d73624&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_year=2022"
      )
      .then((res) => {
        this.lastMovies = res.data.results;

        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=c97ee510a562e501f7a6273d40d73624&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&primary_release_year=2022"
          )
          .then((res) => {
            res.data.results.forEach((movie) => {
              this.lastMovies.push(movie);
            });
            console.log(this.lastMovies);
          });
      });
  },

}



</script>

<style>
* {
  margin: 0;
  padding: 0;
}
 
</style>