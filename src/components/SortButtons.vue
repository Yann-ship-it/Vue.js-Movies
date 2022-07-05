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
        props: [
            "movies"
        ],
        emits: [
            "sortByDate",
            "SortByRating",
            "SortByTitle"
        ],
            
        data() {
            return {
                sortByDate: false,
                sortByRating: false,
                sortByTitle: false,
            }
        },
        methods: {
            sortByNote() {

            }
        }
     }
</script>

<style>

</style>