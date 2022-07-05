<template>
  <div>
    <button @click="sortByNote">Note</button>
    <button @click="sortByDate">Date</button>
    <button @click="sortByTitle">Titre</button>
  </div>
</template>

<script>
export default {
  name: "SortButtons",
  props: ["movies"],
  emits: ["sortDate", "SortRating", "SortTitle"],

  data() {
    return {
      sortByDate: false,
      sortByRating: false,
      sortByTitle: false,
    };
  },
  methods: {
    sortDate() {
      let listmovies = this.movies;
      if (this.sortDate === false) {
        listmovies.sort(function sortArray(movieA, movieB) {
          if(movieA.release_date > movieB.release_date) {
            return -1
          }
          if(movieB.release_date > movieA.release_date) {
            return 1
          }
          return 0
        })
      }
      if (this.sortDate === true) {
        listmovies.sort(function sortArray(movieA, movieB) {
          if(movieA.release_date < movieB.release_date) {
            return -1
          }
          if(movieB.release_date < movieA.release_date) {
            return 1
          }
          return 0
        })
      }
    }

  }
};
</script>

<style>

* {
  margin: 0;
  padding: 0;
}

</style>
