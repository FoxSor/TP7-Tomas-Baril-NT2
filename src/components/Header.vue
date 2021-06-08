<template>
	<div id="header" :style="{ background: checkWin ? color : ''  }">
		<h1>The Great <br>
			<span id="colorDisplay">{{color}} </span>
			<br>
			Guessing Game</h1>
	</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
      color: String,
      checkWin: Function,
  },
}
</script>

<style scoped>
#header {
	transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
}
#colorDisplay {
	font-size: 200%;
}

h1 {
	font-weight: normal;
	line-height: 1.1;
	padding: 20px 0;

}
</style>
