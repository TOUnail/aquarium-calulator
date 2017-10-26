<template>
  <div class="cornerpentagon">
    <img src="https://www.f3images.com/IMD/MD_images/Calculators/Sand_Calculator_Images/Sand_Corner_Pentagon.jpg">
    <div class="form">
      <label>Length (short side)</label>
      <input type="text" id="firstNumber" v-model="firstNumber">
    </div>
    <div class="form">
      <label>Length (long side)</label>
      <input type="text" id="secondNumber" v-model="secondNumber">
    </div>
    <div class="form">
      <label>Height</label>
      <input type="text" id="thirdNumber" v-model="thirdNumber">
    </div>
    <p v-if="result==='0.00'">Please enter a Radius &amp; Height.</p>
    <p v-else-if="result==='NaN'">Invalid measurement</p>
    <p v-else>{{ result }} Gallons</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'cornerpentagon',
  data:  function() {
    return {
      firstNumber: '',
      secondNumber: '',
      thirdNumber: ''
    };
  },
  computed: {
    result: function () {
      return ((0.5*(this.secondNumber*this.secondNumber+2*this.firstNumber*this.secondNumber-this.firstNumber*this.firstNumber)*this.thirdNumber)*0.0043290).toFixed(2);
      //0.5 * (cornerPentLong * cornerPentLong + 2 * cornerPentShort * cornerPentLong - cornerPentShort * cornerPentShort) * cornerPentHeight
    }
  },
  method: {
    
  }
};
</script>

<style>
#cornerpentagon {
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
