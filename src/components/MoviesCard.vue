<template>
  <router-link :to="`/MovieDetails/${id}`">
    <div class="test">
      <h2>{{ title }}</h2>
      <img v-bind:src="preUrl + poster_path" alt="Poster" />
      <div class="text">
        {{ overview }}
        <h3>Note : {{ vote_average }}/10</h3>
      </div>
    </div>
  </router-link>
  
</template>

<script>
export default {
  name: "MoviesCard",
  props: [
    "id", // Obligatoire pour le movie details
    "title",
    "vote_average",
    "overview",
    "poster_path",
  ],

  data() {
    return {
      movies: [],
      loading: true,
      errored: false,
      preUrl: "https://image.tmdb.org/t/p/original",
    };
  },
};
</script >

<style scoped>
* {
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
}

h2 {
  height: 100px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.test {
  background: #7d33c6;
  color: white;
  width: 370px;
  border-radius: 10px;
}

h2 {
  background-color: #001b2e;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

@media (max-width: 330px) {
  .test {
    width: 200px;
  }
}

</style>
