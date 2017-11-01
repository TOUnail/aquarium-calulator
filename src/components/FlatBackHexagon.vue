<template>
  <div id="flatbackhexagon" class="row">
    <div class="col s12 m8 offset-m2">
      <img class="responsive-img center-block" src="https://www.f3images.com/IMD/MD_images/Calculators/Sand_Calculator_Images/Sand_Flat_Back_Hexagon.jpg">
      <div class="form input-field">
        <label>Length</label>
        <input type="text" id="firstNumber" v-model="firstNumber">
      </div>
      <div class="form input-field">
        <label>Width</label>
        <input type="text" id="secondNumber" v-model="secondNumber">
      </div>
      <div class="form input-field">
        <label>Height</label>
        <input type="text" id="thirdNumber" v-model="thirdNumber">
      </div>
      <div class="form input-field">
        <label>Front Pane</label>
        <input type="text" id="forthNumber" v-model="forthNumber">
      </div>
      <div class="form input-field">
        <label>End Pane Pane</label>
        <input type="text" id="fifthNumber" v-model="fifthNumber">
      </div>
      <p class="center-align" v-if="firstNumber===''||secondNumber===''||thirdNumber===''||forthNumber===''||fifthNumber===''||result==='0.00'">Please enter a Length, Width, Height, Front Pane &amp; End Pane.</p>
      <p class="center-align" v-else-if="result==='NaN'">Invalid measurement</p>
      <p class="center-align" v-else>{{ result }} Gallons</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'flatbackhexagon',
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
      return ((0.5 * ((this.secondNumber * this.firstNumber) + (this.secondNumber * this.forthNumber) + (this.fifthNumber * this.firstNumber) - (this.forthNumber * this.fifthNumber)) * this.thirdNumber)*0.0043290).toFixed(2);
    }
  }
};
</script>

<!--style>
#flatbackhexagon {
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
</style-->
