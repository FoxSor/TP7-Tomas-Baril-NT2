export const miMixinLocal = {
    mounted () {
    },
    computed : {
        checkWin() {
            return this.$store.state.messageNavigator == 'You Picked Right!';
        }
    }
}

