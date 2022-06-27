<template> <!-- La template est la fiche qui va s'afficher avec notre composant -->
  <div class="container"> 
    <h3>Users:</h3> 
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th> <!-- Scope ça veux dire en VueJS que seul cet element est ciblé, donc le "col" de bootstrap -->
          <th scope="col">Name</th> <!-- Scope ça veux dire en VueJS que seul cet element est ciblé, donc le "col" de bootstrap -->
          <th scope="col">Email</th> <!-- Scope ça veux dire en VueJS que seul cet element est ciblé, donc le "col" de bootstrap --> 
          <th scope="col">City</th> <!-- Scope ça veux dire en VueJS que seul cet element est ciblé, donc le "col" de bootstrap -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.id"> <!-- V-For est une boucle JS en vue avec sa synthaxe, v-bind c'est pour lié des données, attribue key, valeur user.id -->
          <th scope="row">{{user.id}}</th> <!-- {{ Ceci est pour utiliser variable }} -->
          <td class="username">{{user.name}}</td> <!-- {{ Ceci est pour utiliser variable }} -->
          <td class="mail">{{user.email}}</td> <!-- {{ Ceci est pour utiliser variable }} -->
          <td class="city">{{user.address.city}}</td> <!-- {{ Ceci est pour utiliser variable }} -->
        </tr>
      </tbody>
    </table> 
  </div> 
</template> <!-- Fin de la template du site-->

<script> // Début du script 
import axios from "axios"; //
export default {
  name: "UsersMid", // Le nom doit être en 2 mots obligatoirement
  data() { 
    return {
      users: null, // return users null, on met le tableau en null donc vide
    };
  },
  created: function () { // creted function, ceci execute le code à son lancement
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.users = res.data;
    });
  },
};
</script> 
<style> /* Ceci est la balise de style, si le mot "scope" n'est pas mis, cette endroit touche à tous les composants*/
.username {
  color: red;
}

.mail {
  color: rgb(96, 96, 210);
}

.city {
  color: rgb(46, 191, 143);
}
</style>