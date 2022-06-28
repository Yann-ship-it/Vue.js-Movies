<template>
  <div>
    <h1>Movies Vue.JS</h1>
    <nav>
      <ul>
        <router-link to="/"><a href=""> <li>VueJS Movies</li></a></router-link> 
        <a href=""> <li>Films Français</li></a>
        <a href=""> <li>Films Américains</li></a>
        <a href=""> <li>Top 50 les mieux notés</li></a>
        <a href=""> <li>Recherche un film</li></a>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
};
</script>

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

a {
  transition: 0.5s;
  color: white;
}

a:hover {
  transition: 0.7s;
  color:#7D33C6;
}
</style>
