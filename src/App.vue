<template>
  <div id="app">
    <Header :color="color" :checkWin="checkWin"/>
    <Navigator :messageNavigator="messageNavigator" :restart="restart"/>
    <Container :colors="colors" :pickedColor="color" :checkWin="checkWin" :setMessage="setMessage"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Navigator from './components/Navigator.vue'
import Container from './components/Container.vue'

export default {
  name: 'App',
  components: {
    Header,
    Container,
    Navigator,
  },
  props: {},
  mounted () {
    this.restart();
  },
    data () {
      return {
        colorCount : 6,
        isHard : true,
        colors : [],
        color: '',
        messageNavigator: '',
      }
    },
    methods: {
      restart(isHard = true){
        this.isHard = isHard;
        this.colorCount = isHard ? 6 : 3;
        this.colors = this.createNewColors(this.colorCount);
        this.color = this.colors[this.PickColor()];
        this.messageNavigator = '';
      },

      createNewColors(numbers){
      let arr = [];
      for (let i = 0; i < numbers; i++) {
      arr.push(this.createRandomStringColor());
      }
      return arr;
      },

      createRandomStringColor(){
      const newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
      return newColor;
      },

      randomInt(){
      return Math.floor(Math.random() * 256);
      },

      setMessage(message) {
        return this.messageNavigator = message
      },    

      PickColor(){
      let quantity;
      if (this.isHard) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity );
      },
    },
    computed: {
      checkWin: function() {
      return this.messageNavigator == 'You Picked Right!';
      }
    }
}
</script>

<style>
body{
  background: #232323;
	margin: 0;
	font-family: "Montserrat", "Avenir";
}
</style>
