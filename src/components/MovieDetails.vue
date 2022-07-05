<template>
  <h1>Détails du film</h1>
  <img v-bind:src="preUrl + movie.poster_path" alt="Poster" />
  <h2>{{ movie.title }}</h2>
  <p>{{ movie.overview }}</p>
  <h2>{{ movie.release_date }}</h2>
  <h2>{{ movie.vote_average }}</h2>
  <div id="trailer" v-if="video[0]">
    <iframe
      width="650"
      height="300"
      v-bind:src="'https://www.youtube.com/embed/' + video[0].key"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="shadow"
    ></iframe>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "MovieDetails",
  data() {
    return {
      id: this.$route.params.id,
      movie: [],
      video: [],
      preUrl: "https://image.tmdb.org/t/p/original",
    };
  },

  created: function () {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.id +
          "?api_key=c97ee510a562e501f7a6273d40d73624&language=en-US"
      )
      .then((res) => {
        this.movie = res.data;
        console.log("test " + this.movie);
      });

    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.id +
          "/videos?api_key=c97ee510a562e501f7a6273d40d73624&language=fr"
      )
      .then((res) => {
        this.video = res.data.results;
        console.log(this.video);
      });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

#trailer {
  display: flex;
  width: 600px;
  height: 600px;
}

iframe {
  width: 300px;
  height: 300px;
}
</style>
