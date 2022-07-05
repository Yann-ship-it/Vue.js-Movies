<template>
  <h1>top50Movies</h1>
   <SortButtons :movies="top50Movies"/>
   <MoviesList :movies="top50Movies" :loading="loading" :errored="errored" />
</template>
<script>
import SortButtons from "./SortButtons.vue";
import MoviesList from "./MoviesList.vue"
import axios from "axios"
export default {
  name: "top50Movies",
  components: {
    MoviesList,
    SortButtons
  },
  data() {
    return {
      top50Movies: [],
      loading: true,
      errored: false,
      preUrl: "https://image.tmdb.org/t/p/original",
    };
  },
  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=c97ee510a562e501f7a6273d40d73624&sort_by=vote_average.desc&vote_count.gte=10000&include_adult=false&include_video=false&page=1"
      )
      .then((res) => {
        this.top50Movies = res.data.results;

        axios
          .get(
            "https://api.themoviedb.org/3/discover/movie?api_key=c97ee510a562e501f7a6273d40d73624&sort_by=vote_average.desc&vote_count.gte=10000&include_adult=false&include_video=false&page=2"
          )
          .then((res) => {
            res.data.results.forEach((movie) => {
              this.top50Movies.push(movie);
            });

            
            console.log(this.top50Movies);
          });

          axios
            .get(
              "https://api.themoviedb.org/3/discover/movie?api_key=c97ee510a562e501f7a6273d40d73624&sort_by=vote_average.desc&vote_count.gte=10000&include_adult=false&include_video=false&page=3"
            )
            .then((res) => {
              this.top50Movies.splice(50, 10); 
              res.data.results.forEach((movie) => {
                this.top50Movies.push(movie);
              })
            })
          
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