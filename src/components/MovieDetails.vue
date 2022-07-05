<template>
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
        console.log(this.movie);
      });

    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.id +
          "/videos?api_key=3ea8988340d4ed715d28b9978346c29e&language=fr"
      )
      .then((res) => {
        this.video = res.data;
        console.log(this.video);
      });
  },
};
</script>

<style>
#trailer {
    display: flex;
    width: 600px;
    height: 600px;
}
</style>
