<template>
  <h1>SearchMovies</h1>
  <input
    type="text"
    v-model="search"
    @keyup="getSearch(search)"
    placeholder="Rechercher un film"
  />
  <SortButtons :movies="movies" />
  <MoviesList :movies="movies" :loading="loading" :errored="errored" />
</template>

<script>
import axios from "axios";
import SortButtons from "./SortButtons.vue";
import MoviesList from "./MoviesList.vue";
export default {
  name: "SearchMovies",
  components: {
    MoviesList,
    SortButtons,
  },
  data() {
    return {
      movies: [],
      loading: true,
      errored: false,
    };
  },
  methods: {
    getSearch(search) {
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=3ea8988340d4ed715d28b9978346c29e&language=en-US&include_adult=false&query=" + search)
        .then((res) => {
          this.movies = res.data.results;
        });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

input {
  display: block;
  width: 350px;
  margin: 20px auto;
  padding: 10px 45px;
  background-size: 15px 15px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
</style>
