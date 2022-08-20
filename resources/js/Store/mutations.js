export const SET_PRODUCTS = (state, products) => {
    state.products = products;
    // state.products.push("Kiwi");
    // const map1 = new Map();

    state.products.forEach(object => {
        object.quantity = 1;
    });

    // map1.set(state.products, { qty: 'Santiago' });
    console.log(state.products);

}
export const SET_PRODUCTSBYCAT = (state, products) => {
    state.products = products;

}
export const SET_pagination = (state, pagination) => {
    state.pagination = pagination;

}

export const SET_OFFERS = (state, offers) => {
    state.offers = offers;
}

export const SET_CATEGORYS = (state, categorys) => {
    state.categorys = categorys;
}

export const increase = (state, id) => {
    state.products.map((p) => {
        if (p.id == id) {
            p.quantity += 1
        }
    })
}

export const decrease = (state, id) => {
    state.products.map((p) => {
        if (p.id == id && p.quantity > 1) {
            p.quantity -= 1
        }
    })
}
