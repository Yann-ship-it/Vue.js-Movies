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
  emits: ["sortByDate", "SortRating", "SortTitle"],

  // data() {
  //   return {
  //     sortDate: false,
  //     sortRating: false,
  //     sortTitle: false,
  //   };
  // },

  methods: {
    sortByDate() {

      let listmovies = this.movies

      // if (this.sortByDate == false) {
        listmovies.sort(function sortArray(movieA, movieB) {
          if (movieA.release_date > movieB.release_date) {
            return -1;
          }
          if (movieB.release_date > movieA.release_date) {
            return 1;
          }
          return 0
        });
      }
    },
  }

</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
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
