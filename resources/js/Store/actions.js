import axios from "axios";

export const increase = ({ commit }, id) => {
    commit('increase', id)
}
export const decrease = ({ commit }, id) => {
    commit('decrease', id)
}

export const getProducts = ({ commit }) => {
    axios.get('https://elmasriastore.com/api/product').then(response => {
        commit('SET_PRODUCTS', response.data.products.data);
    })
}

export const getOffers = ({ commit }) => {
    axios.get('https://elmasriastore.com/api/product/offer').then(response => {
        commit('SET_OFFERS', response.data.products);
    })
}

export const getCategory = ({ commit }) => {
    axios.get('https://elmasriastore.com/api/categorys').then(response => {
        commit('SET_CATEGORYS', response.data.category);
    })
}