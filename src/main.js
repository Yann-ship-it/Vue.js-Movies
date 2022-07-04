import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import FrenchMovies from './components/FrenchMovies.vue'
import UsMovies from './components/UsMovies.vue'
import Top50Movies from './components/Top50Movies.vue'
import SearchMovies from './components/SearchMovies.vue'
import LastMovies from './components/LastMovies.vue'

  const routes = [
    {
        path: '/',
        component: App
    },
    {
        path: '/FrenchMovies',
        component: FrenchMovies
    },
    {
        path: '/UsMovies',
        component: UsMovies
    },
    {
        path: '/Top50Movies',
        component: Top50Movies
    },
    {
      path: '/LastMovies',
      component: LastMovies
    },
    {
        path: '/SearchMovies',
        component: SearchMovies
    },
  ]

  const router = createRouter({
    history:createWebHashHistory(),
    routes,
  })

createApp(App).use(router).mount('#app')