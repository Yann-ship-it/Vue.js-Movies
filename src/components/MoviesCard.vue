<template>
  <div class="cont">
    <div class="test" v-for="movie in movies" v-bind:key="movie.id">
      <h2>{{ movie.title }}</h2>
      <img v-bind:src="preUrl + movie.poster_path" alt="moviePoster" />
      <div class="text">
        {{ movie.overview }}
        <h3>Note : {{ movie.vote_average }}/10</h3>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "MoviesCard",
  props: [
        "id",
        "index",
        "title",
        "release_date",
        "vote_average",
        "overview",
        "poster_path",
    ],
     data() {
        return {
            movies: [],
            loading: true,
            errored: false,
            preUrl: "https://image.tmdb.org/t/p/original/",
        };
    },
};
</script>

<style scoped>

* {
  margin: 0;
  padding: 0;
}

img {
  width: 100%;
}

.cont {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

h2 {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.test {
  background: #7d33c6;
  color: white;
  width: 25%;
  border-radius: 10px;
}
h2 {
  background-color: #001b2e;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.row {
  display: flex;
  justify-content: space-around;
}

</style>
