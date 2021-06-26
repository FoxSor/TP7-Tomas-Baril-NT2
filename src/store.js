import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        colorCount : 6,
        isHard : true,
        colors : [],
        color: '',
        messageNavigator: '',
    },
    actions : {
        setMessageNavigator({commit}, message) {
            commit('messageNavigator', message)
        },
        restart({commit}, isHard = true){
            commit('isHard', isHard)
            commit('colorCount')
            commit('colors')
            commit('color')
            commit('messageNavigator', "")
        }
    },
    mutations : {
        isHard(state, isHard) {
            state.isHard = isHard
        },
        colorCount(state) {
            state.colorCount = state.isHard ? 6 : 3;
        },
        colors(state) {
            let arr = [];
            for (let i = 0; i < state.colorCount; i++) {
            const newColor = "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")"
            arr.push(newColor);
            }
            state.colors = arr
        },
        color(state) {
            const color = state.colors[Math.floor(Math.random() * state.colorCount)];
            state.color = color
        },
        messageNavigator(state,message) {
            state.messageNavigator = message
        },
    }
})
