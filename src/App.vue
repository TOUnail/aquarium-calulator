<template>
  <div id="app">
    <router-link v-bind:to="'/'">Rectangle</router-link>
    <router-link v-bind:to="'/cube'">Cube</router-link>
    <router-link v-bind:to="'/hexagon'">Hexagon</router-link>
    <router-link v-bind:to="'/octagon'">Octagon</router-link>
    <router-link v-bind:to="'/flatbackhexagon'">Flat Back Hexagon</router-link>
    <router-link v-bind:to="'/cylinder'">Cylinder</router-link>
    <router-link v-bind:to="'/halfcylinder'">Half Cylinder</router-link>
    <router-link v-bind:to="'/cornercylinder'">Corner Cylinder</router-link>
    <router-link v-bind:to="'/elliptical'">Elliptical</router-link>
    <router-link v-bind:to="'/cornerpentagon'">Corner Pentagon</router-link>
    <router-link v-bind:to="'/lshaped'">L-Shaped</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
