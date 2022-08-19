
import VueRouter from 'vue-router';

import About from '../components/About.vue'
import Home from '../components/ExampleComponent.vue'
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


