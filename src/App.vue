<template>
  <div id="app">
    <div class="nav-wrapper">
      <nav class="nav-center">
        <ul class="hide-on-med-and-down">
          <li>
            <router-link v-bind:to="'/'">Rectangle</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/cube'">Cube</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/hexagon'">Hexagon</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/octagon'">Octagon</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/flatbackhexagon'">Flat Back Hexagon</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/cylinder'">Cylinder</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/halfcylinder'">Half Cylinder</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/cornercylinder'">Corner Cylinder</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/elliptical'">Elliptical</router-link>
          </li>
          <!--li>
            <router-link v-bind:to="'/cornerpentagon'">Corner Pentagon</router-link>
          </li-->
          <li>
            <router-link v-bind:to="'/lshaped'">L-Shaped</router-link>
          </li>
        </ul>
        <ul class="side-nav" id="mobile-demo">
          <li>
            <router-link v-bind:to="'/'">Rectangle</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/cube'">Cube</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/hexagon'">Hexagon</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/octagon'">Octagon</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/flatbackhexagon'">Flat Back Hexagon</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/cylinder'">Cylinder</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/halfcylinder'">Half Cylinder</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/cornercylinder'">Corner Cylinder</router-link>
          </li>
          <li>
            <router-link v-bind:to="'/elliptical'">Elliptical</router-link>
          </li>
          <!--li>
            <router-link v-bind:to="'/cornerpentagon'">Corner Pentagon</router-link>
          </li-->
          <li>
            <router-link v-bind:to="'/lshaped'">L-Shaped</router-link>
          </li>
        </ul>
        
        <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>
      </nav>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
$( document ).ready(function(){
  $(".button-collapse").sideNav();
})
</script>

<!--style>
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
</style-->
