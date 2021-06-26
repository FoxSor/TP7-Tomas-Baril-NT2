<template>

<div id="navigator">
		<button id="reset" @click="reset"> {{ buttonResetText }} </button>
		<span id="message"> {{ $store.state.messageNavigator }} </span>
		
		<button id="easy" @click="changeDifficult(false)" :class="!$store.state.isHard ? 'selected' : '' ">easy</button>
		<button id="hard" @click="changeDifficult(true)" :class="$store.state.isHard ? 'selected' : '' ">hard</button>
	</div>

</template>

<script lang="js">

  export default  {
    name: 'Navigator',
    props: {
    },
    data () {
      return {
      }
    },
    methods: {
		changeDifficult(isHard){
			if(this.$store.state.isHard !== isHard){
				this.$store.dispatch('restart', isHard)
			}
		},
		reset(){
			this.$store.dispatch('restart', this.$store.state.isHard)
		}
    },
    computed: {
        buttonResetText: function() {
            return this.$store.state.messageNavigator == 'You Picked Right!' ? 'Play Again!' : 'New colors!'  
        }
    },
}

</script>

<style scoped lang="css">
#navigator {
	background: #ffffff;
	height: 30px;
	text-align: center;
	margin: 0;
	margin-top: -30px;

}

button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
}
button:hover {
	color: white;
	background-color: steelblue;
}

#message {
	color: steelblue;
	display: inline-block;
	width: 20%;
}

.selected {
	background-color: steelblue;
	color: white;
}
</style>