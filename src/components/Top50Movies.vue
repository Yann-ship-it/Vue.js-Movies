<template>
  <h1>Top 50 Movies</h1>
   <MoviesList :movies="movies" :loading="loading" :errored="errored" />
</template>
<script>
import MoviesList from "./MoviesList.vue"
export default {
  name: "FrenchMovies",
  components: {
    MoviesList
  }
}
</script>