<template>
  <div class="hexagon">
    <img src="https://www.f3images.com/IMD/MD_images/Calculators/Sand_Calculator_Images/Sand_hexagon.jpg">
    <div class="form">
      <label>Length</label>
      <input type="text" id="firstNumber" v-model="firstNumber">
    </div>
    <div class="form">
      <label>Width</label>
      <input type="text" id="secondNumber" v-model="secondNumber">
    </div>
    <div class="form">
      <label>Height</label>
      <input type="text" id="thirdNumber" v-model="thirdNumber">
    </div>
    <div class="form">
      <label>Front Pane</label>
      <input type="text" id="forthNumber" v-model="forthNumber">
    </div>
    <p v-if="result==='0.00'">Please enter a Length, Width, Height &amp; Front Pane.</p>
    <p v-else-if="result==='NaN'">Invalid measurement</p>
    <p v-else>{{ result }} Gallons</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'hexagon',
  data:  function() {
    return {
      firstNumber: '',
      secondNumber: '',
      thirdNumber: '',
      forthNumber: ''
    };
  },
  computed: {
    result: function () {
      return (this.secondNumber*this.firstNumber)-(());
    }
  },
  method: {
    
  }
};
</script>

<style>
#hexagon {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
