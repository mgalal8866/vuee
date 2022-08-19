import Vue from 'vue';
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
        export const getproducts =  ({commit}) =>{
            axios.get('https://www.elmasriastore.com/product/offer')
            .then(response=>{
                commit('SET_PRODUCTS',response.data)
            })
        }
    },
    modules: {
    }
})

export default store;
