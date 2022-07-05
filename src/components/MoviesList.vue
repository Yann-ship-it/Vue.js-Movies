<template>
  <div>
    <ul>
      <li v-for="movie in movies" :key="movie.id">
        <MoviesCard
          :id="movie.id"
          :title="movie.title"
          :poster_path="movie.poster_path"
          :overview="movie.overview"
          :vote_average="movie.vote_average"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import MoviesCard from "./MoviesCard.vue";
export default {
  name: "MoviesList",
  components: {
    MoviesCard,
  },
  props: ["movies"],
};
</script>

<style scoped>

a {
  display: flex;
}

* {
  margin: 0;
  padding: 0;
}

ul {
  display: flex;
  flex-wrap: wrap;
}

li {
  display: flex;
}

</style>
