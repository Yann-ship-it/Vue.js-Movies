<template>
  <div v-for="movie in movies" v-bind:key="movie.id">
    <h1> {{movie.original_title}} </h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MoviesList",
  data() {
    return {
      movies: null,
    };
  },

  mounted () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=c97ee510a562e501f7a6273d40d73624&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
      )
      .then((res) => {
        this.movies = res.data.results;
        console.log(this.movies);
      });
  },
};
</script>

<style scoped>


</style>
