<template>
  <h1>FrenchMovies</h1>
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