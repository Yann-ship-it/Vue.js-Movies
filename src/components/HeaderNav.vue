<template>
  <div>
    <h1>Movies Vue.JS</h1>
    <nav>
      <ul>
        <a href=""> <li>VueJS Movies</li></a>
        <a href=""> <li>Filme Français</li></a>
        <a href=""> <li>Filme Américains</li></a>
        <a href=""> <li>Top 50 les mieux notés</li></a>
        <a href=""> <li>Recherche un filme</li></a>
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
}

nav {
  color: black;
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
  color: white;
}
</style>
