import { createApp } from 'vue'
import App from './App.vue'
import FrenchMovies from './components/FrenchMovies'
import UsMovies from './components/UsMovies'
import Top50Movies from './components/Top50Movies'
import SearchMovies from './components/SearchMovies'
import VueRouter from 'vue-router' 

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
  })

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
        path: '/SearchMovies',
        component: SearchMovies
    },
  ]

createApp(App).use(router).mount('#app')
