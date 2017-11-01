<template>
  <div id="elliptical" class="row">
    <div class="col s12 m8 offset-m2">
      <img class="responsive-img center-block" src="https://www.f3images.com/IMD/MD_images/Calculators/Sand_Calculator_Images/Sand_Elipse.jpg">
      <div class="form input-field">
        <label>Radius 1</label>
        <input type="text" id="firstNumber" v-model="firstNumber">
      </div>
      <div class="form input-field">
        <label>Radius 2</label>
        <input type="text" id="secondNumber" v-model="secondNumber">
      </div>
      <div class="form input-field">
        <label>Height</label>
        <input type="text" id="thirdNumber" v-model="thirdNumber">
      </div>
      <p class="center-align" v-if="result==='0.00'">Please enter Radius 1, Radius 2, &amp; Height.</p>
      <p class="center-align" v-else-if="result==='NaN'">Invalid measurement</p>
      <p class="center-align" v-else>{{ result }} Gallons</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'elliptical',
  data:  function() {
    return {
      firstNumber: '',
      secondNumber: '',
      thirdNumber: ''
    };
  },
  computed: {
    result: function () {
      return ((Math.PI * (this.firstNumber*this.secondNumber*this.thirdNumber))*0.0043290).toFixed(2);
    }
  },
  method: {
    
  }
};
</script>

<!--style>
#elliptical {
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
