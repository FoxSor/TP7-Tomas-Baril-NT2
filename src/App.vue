<template>
  <div id="app">
    <Header />
    <Navigator />
    <Container />
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
      }
    },
    methods: {
      restart() {
        this.$store.dispatch('restart')
      } 
    },
    computed: {
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
