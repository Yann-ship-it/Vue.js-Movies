<template>
  <div>
    <button @click="sortByNote()">Note</button>
    <button @click="sortByDate()">Date</button>
    <button @click="sortByTitle()">Titre</button>
  </div>
</template>

<script>
export default {
  name: "SortButtons",
  props: ["movies"],
  emits: ["sortByDate", "SortNote", "SortTitle"],

  data() {
    return {
      sortDate: false,
      sortNote: false,
      sortTitle: false,
    };
  },

  methods: {
    sortByDate() {
      let listmovies = this.movies;

      if (this.sortDate == false) {
        listmovies.sort(function sortArray(movieA, movieB) {
          if (movieA.release_date > movieB.release_date) {
            return -1;
          }
          if (movieB.release_date > movieA.release_date) {
            return 1;
          }
          return 0;
        });
        return (this.sortDate = true);
      }

      if (this.sortDate == true) {
        listmovies.sort(function sortArray(movieA, movieB) {
          if (movieA.release_date < movieB.release_date) {
            return -1;
          }
          if (movieB.release_date < movieA.release_date) {
            return 1;
          }
          return 0;
        });
        return (this.sortDate = false);
      }
    },

    sortByNote() {
      let listmovies = this.movies;

      if (this.sortNote == false) {
        listmovies.sort(function sortArray(movieA, movieB) {
          if (movieA.vote_average > movieB.vote_average) {
            return -1;
          }
          if (movieB.vote_average > movieA.vote_average) {
            return 1;
          }
          return 0;
        });
        return (this.sortNote = true);
      }

      if (this.sortNote == true) {
        listmovies.sort(function sortArray(movieA, movieB) {
          if (movieA.vote_average < movieB.vote_average) {
            return -1;
          }
          if (movieB.vote_average < movieA.vote_average) {
            return 1;
          }
          return 0;
        });
        return (this.sortNote = false);
      }
    },

    sortByTitle() {
      let listmovies = this.movies;

      if (this.sortTitle == false) {
        listmovies.sort(function sortArray(movieA, movieB) {
          if (movieA.title > movieB.title) {
            return -1;
          }
          if (movieB.title > movieA.title) {
            return 1;
          }
          return 0;
        });
        return (this.sortTitle = true);
      }

      if (this.sortTitle == true) {
        listmovies.sort(function sortArray(movieA, movieB) {
          if (movieA.title < movieB.title) {
            return -1;
          }
          if (movieB.title < movieA.title) {
            return 1;
          }
          return 0;
        });
        return (this.sortTitle = false);
      }
    },
  },
};

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

div {
  display: flex;
}

button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100px;
  text-align: center;
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
