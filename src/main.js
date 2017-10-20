import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Rectangle from './components/Rectangle.vue'
import Cube from './components/Cube.vue'
import Hexagon from './components/Hexagon.vue'
import Octagon from './components/Octagon.vue'
import FlatBackHexagon from './components/FlatBackHexagon.vue'
import Cylinder from './components/Cylinder.vue'
import HalfCylinder from './components/HalfCylinder.vue'
import CornerCylinder from './components/CornerCylinder.vue'
import Elliptical from './components/Elliptical.vue'
import CornerPentagon from './components/CornerPentagon.vue'

const routes = [
{ path: '/', component: Rectangle },
{ path: '/cube', component: Cube },
{ path: '/hexagon', component: Hexagon },
{ path: '/octagon', component: Octagon },
{ path: '/FlatBackHexagon', component: FlatBackHexagon },
{ path: '/Cylinder', component: Cylinder },
{ path: '/HalfCylinder', component: HalfCylinder },
{ path: '/CornerCylinder', component: CornerCylinder },
{ path: '/Elliptical', component: Elliptical },
{ path: '/CornerPentagon', component: CornerPentagon }
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
