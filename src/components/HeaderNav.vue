<template>
  <div>
    <h1>Movies Vue.JS</h1>
    <nav>
      <ul class="test">
        <router-link to="/"><li>VueJS Movies</li></router-link> 
        <router-link to="/FrenchMovies"><li>Films Français</li></router-link> 
        <router-link to="/UsMovies"><li>Films Américains</li></router-link> 
        <router-link to="/Top50Movies"><li>Top 50 les mieux notés</li></router-link> 
        <router-link to="/LastMovies"><li>Derniers films</li></router-link> 
        <router-link to="/SearchMovies"><li>Recherche un film</li></router-link> 
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script >

<style scoped>

* {
  margin: 0;
  padding: 0;
}

h1 {
  letter-spacing: 50px;
  text-transform: uppercase;
  padding: 20px 0 20px;
}

ul {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 120px;
  font-size: 19px;
  background-color: rgb(49, 46, 46);
  height: 50px;
}

li {
  transition: 0.5s;
  color: white;
}

li:hover {
  transition: 0.7s;
  color:#7D33C6;
}
</style>
