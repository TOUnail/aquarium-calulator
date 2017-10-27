<template>
  <div id="cube" class="row">
    <div class="col s12 m8 offset-m2">
      <img class="responsive-img" src="//www.f3images.com/IMD/MD_images/Calculators/Sand_Calculator_Images/Sand_Square.jpg" alt="">
      <div class="form">
        <label>Length</label>
        <input type="text" id="firstNumber" v-model="firstNumber">
      </div>
      <p v-if="result==='0.00'">Please enter a Length.</p>
      <p v-else-if="result==='NaN'">Invalid Length</p>
      <p v-else>{{ result }} Gallons</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cube',
  data:  function() {
    return {
      firstNumber: '',
    };
  },
  computed: {
    result: function() {
      return ((this.firstNumber*this.firstNumber*this.firstNumber)*0.0043290).toFixed(2);
    }
  },
};
</script>
<!-- styling for the component -->
<!--style>
#cube {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style->