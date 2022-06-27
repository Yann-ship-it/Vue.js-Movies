<template>
  <div id="FooterApp">
    
  </div>
</template>

<script>
// Début du script
import axios from "axios"; //
export default {
  name: "FooterApp", // Le nom doit être en 2 mots obligatoirement
  data() {
    return {
      users: null, // return users null, on met le tableau en null donc vide
    };
  },
  created: function () {
    // creted function, ceci execute le code à son lancement
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.users = res.data;
    });
  },
};
</script> 