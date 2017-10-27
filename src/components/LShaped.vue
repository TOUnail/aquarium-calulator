<template>
  <div id="lshaped" class="row">
    <div class="col s12 m8 offset-m2">
      <img class="responsive-img" src="https://www.f3images.com/IMD/MD_images/Calculators/Sand_Calculator_Images/Sand_L_Shape.jpg">
      <div class="form">
        <label>Length 1</label>
        <input type="text" id="firstNumber" v-model="firstNumber">
      </div>
      <div class="form">
        <label>Length 2</label>
        <input type="text" id="secondNumber" v-model="secondNumber">
      </div>
      <div class="form">
        <label>Width 1</label>
        <input type="text" id="thirdNumber" v-model="thirdNumber">
      </div>
      <div class="form">
        <label>Width 2</label>
        <input type="text" id="forthNumber" v-model="forthNumber">
      </div>
      <div class="form">
        <label>Height</label>
        <input type="text" id="fifthNumber" v-model="fifthNumber">
      </div>
      <p v-if="result==='0.00'">Please enter a Radius &amp; Height.</p>
      <p v-else-if="result==='NaN'">Invalid measurement</p>
      <p v-else>{{ result }} Gallons</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'lshaped',
  data:  function() {
    return {
      firstNumber: '',
      secondNumber: '',
      thirdNumber: '',
      forthNumber: '',
      fifthNumber: ''
    };
  },
  computed: {
    result: function () {
      return (((((this.firstNumber - this.forthNumber) * this.thirdNumber) + (this.secondNumber * this.forthNumber)) * this.fifthNumber)*0.0043290).toFixed(2);
    }
  },
  method: {
    
  }
};
</script>

<!--style>
#lshaped {
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
