<template>

<div id="container">
     <ul  v-for="(color, i) in $store.state.colors" :key="color.id">
         <Square v-if="checkWin"  :color="$store.state.color" />
         <Square v-else  :color="$store.state.colors[i]"/>
    </ul>   
</div>

</template>

<script lang="js">
  import Square from './Square.vue'
  import { miMixinLocal } from '../localMixins'
  export default  {
    name: 'Container',
    components:{ 
        Square
    },
    mixins:[miMixinLocal],
    props: {
    },
}

</script>

<style scoped lang="css">
#container {
	margin: 20px auto;
	max-width: 600px;
}
</style>