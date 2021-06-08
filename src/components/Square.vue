<template>
    <div class="square" :style="{ background: color }" @click="clickSquare()">

    </div>
</template>

<script lang="js">

  export default  {
    name: 'Square',
    props: {
        color: String,
        pickedColor: String,
        setMessage: Function,
    },
    mounted () {
    },
    data () {
      return {
      }
    },
    methods: {
        clickSquare(){           
            if(this.win()){
                this.setMessage('You Picked Right!')
            }
            else{
                this.color = "#232323"
                this.setMessage('Try Again!')
            }
        },

        win(){
            return this.color == this.pickedColor
        },
    },
}



</script>

<style scoped lang="css">
#colorDisplay {
	font-size: 200%;
}


.square {
	width: 30%;
	background: blue;
	padding-bottom: 30%;
	float: left;
	margin: 1.66%;
	border-radius: 10%;
	transition: background 0.8s;
	-webkit-transition: background 0.8s;
	-moz-transition: background 0.8s;

}
</style>