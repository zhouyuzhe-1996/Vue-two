import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Cookie from 'js-cookie'
const store = new Vuex.Store({
    state: {
        num: 100,
        token: Cookie.get('token') || '',
        isSignIn: 0
    },
    getters: {
        count: (state) => {
            return state.num > 110 ? 110 : state.num
        }
    },
    mutations: {
        changeSigin(state, n) {
            state.isSignIn = n;
        },
        setToken(state, val) {
            state.token = val
        },
        increment(state, plaod) {
            state.num += plaod.n
        },
        mincrement(state, plaod) {
            state.num -= plaod.n
        },
        // increment(state) {
        //     state.num += plaod.n
        // },
        // mincrement(state) {
        //     state.num -= plaod.n
        // }
    },
    actions: {
        increment(context) {
            setTimeout(() => {
                context.commit('increment', { n: 3 })
            }, 1000)
            context.dispatch('test')
        },
        mincrement(context) {
            setTimeout(() => {
                context.commit('mincrement', { n: 3 })
            }, 1000)
            context.dispatch('test')
        },
        test() {
            console.log("你要相信光 盖亚！！！")
        },
    }

})
export default store