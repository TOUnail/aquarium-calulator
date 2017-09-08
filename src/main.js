import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Rectangle from './components/Rectangle.vue'
import Cube from './components/Cube.vue'
import Hexagon from './components/Hexagon.vue'
import Octagon from './components/Octagon.vue'

const routes = [
{ path: '/', component: Rectangle },
{ path: '/cube', component: Cube },
{ path: '/hexagon', component: Hexagon },
{ path: '/octagon', component: Octagon }
]

const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history'
})

new Vue({
//define the selector for the root component
  el: '#app',
  //pass the template to the root component
  template: '<App/>',
  //declare components that the root component can access
  components: { App },
  //pass in the router to the Vue instance
  router
}).$mount('#app')//mount the router on the app
/*
new Vue({
  el: '#app',
  render: h => h(App)
})*/
