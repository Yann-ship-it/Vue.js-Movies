<template>
  <h1>usMovies</h1>
  <SortButtons :movies="usMovies"/>
   <MoviesList :movies="usMovies" :loading="loading" :errored="errored" />
</template>
<script>
import SortButtons from "./SortButtons.vue";
import MoviesList from "./MoviesList.vue"
import axios from "axios"
export default {
  name: "usMovies",
  components: {
    MoviesList,
    SortButtons
  },
  data() {
    return {
      usMovies: [],
      loading: true,
      errored: false,
      preUrl: "https://image.tmdb.org/t/p/original",
    };
  },
  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=c97ee510a562e501f7a6273d40d73624&sort_by=original_title.asc&vote_count.gte=10000&include_adult=false&include_video=false&page=1"
      )
      .then((res) => {
        this.usMovies = res.data.results;

        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=c97ee510a562e501f7a6273d40d73624&sort_by=original_title.asc&vote_count.gte=10000&include_adult=false&include_video=false&page=2"
          )
          .then((res) => {
            res.data.results.forEach((movie) => {
              this.usMovies.push(movie);
            });
            console.log(this.usMovies);
          });
      });
  },

}



</script>


<style scoped>

* {
  margin: 0;
  padding: 0;
}

</style>