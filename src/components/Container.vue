<template>

<div id="container">
     <ul  v-for="(color, i) in colors" :key="color.id">
         <Square v-if="checkWin"  :color="pickedColor" :pickedColor="pickedColor" :setMessage="setMessage" />
         <Square v-else  :color="colors[i]" :pickedColor="pickedColor" :setMessage="setMessage" />
    </ul>   
</div>

</template>

<script lang="js">
  import Square from './Square.vue'
  export default  {
    name: 'Container',
    components:{ 
        Square
    },
    props: {
        colors: Array,
        pickedColor: String,
        setMessage: Function,
        checkWin: Function,
    },
}

</script>

<style scoped lang="css">
#container {
	margin: 20px auto;
	max-width: 600px;
}
</style>