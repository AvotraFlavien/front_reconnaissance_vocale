import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    beforeEnter: (to, from, next) => {
      const isLoggedIn = localStorage.getItem("vuex");
      if (to.name !== 'connexion' && isLoggedIn== null) {
        next({ name: 'connexion' });
      } else {
        next();
      }}
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
    {
    path: '/historique',
    name: 'historique',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Historique.vue')
  },
  {
    path: '/',
    name: 'connexion',
    component: () => import("../views/ConnexionView"),
    beforeEnter: (to, from, next) => {
      const isLoggedIn = localStorage.getItem("vuex");
      if (to.name !== 'connexion' && isLoggedIn== null) {
        next({ name: 'connexion' });
      } else {
        next();
      }}
  },
  {
    path: '/template',
    name: 'template',
    component: () => import("../views/TemplateView.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// redirection vers la page connexion si storage vuex est null
// router.beforeEach((to, from, next) => {
//   const vuexData = localStorage.getItem("vuex");
//   if (to.name !== 'connexion' && vuexData === null) {
//     next({ name: "connexion" });
//   } else {
//     next();
//   }
// })
export default router
