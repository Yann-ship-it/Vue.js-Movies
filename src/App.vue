<template>
  <div id="app">
    <HeaderNav />

    <div v-if="$route.path == '/'">
      <!-- Si la route est / (Racine du site) -->
      <h1 class="pt-5 font-weight-light">
        Vos films préférés sont sur VueJS Moviee !
      </h1>
      <MoviesList :movies="movies" :loading="loading" :errored="errored" />
    </div>

    <div v-else>
      <router-view :key="$route.fullPash"></router-view>
    </div>

    <FooterApp />
  </div>
</template>

<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
