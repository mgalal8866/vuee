
import VueRouter from 'vue-router';

import About from '../components/About.vue'
import Navbar from '../components/Navbar.vue'
// import Home from '../components/ExampleComponent.vue'
import Home from '../views/Home.vue'
const routes = [
    {
      path: '/',
      component: Home,
      name: 'Home'
    },
    {
      path: '/about',
      component: About,
      name: 'About'
    },
  ]
const router = new VueRouter({
  mode: 'history',
  routes
})

export default router;


