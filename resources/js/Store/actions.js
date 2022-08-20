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

export const getProductsbycategory = ({ commit},id,page=null) => {
    console.log(id + ' - ' + page);
    const data = {id_category:id};
    axios.post('https://elmasriastore.com/api/product/bycategory?page=' + page ,data)
    .then(response => {
        commit('SET_PRODUCTSBYCAT', response.data.products.data);
        commit('SET_pagination', response.data.products.meta)})
    .catch(error => {console.error("There was an error!", error);});
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
