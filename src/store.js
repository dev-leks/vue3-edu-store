import { createStore } from "vuex";

const store = createStore({
  state: () => ({
    cartProducts: [],
  }),
  getters: {
    totalAmount: (state) => (
      state.cartProducts.reduce((total, { amount }) => total + amount, 0)
    ),
    totalPrice: (state) => (
      state.cartProducts.reduce((total, { price, amount }) =>
        total + (amount * price), 0)
    ),
    cartIsEmpty: (state) => !state.cartProducts.length,
    getProductById: (state) => (productId) => (
      state.cartProducts.find(({ id }) => productId === id)
    ),
  },
  actions: {},
  mutations: {
    addProductToCart(state, product) {
      state.cartProducts.push({
        ...product,
        amount: 1,
      });
    },
    incrementProductAmount(state, index) {
      const product = state.cartProducts[index];
      state.cartProducts.splice(index, 1, {
        ...product,
        amount: product.amount + 1,
      });
    },
    decrementProductAmount(state, index) {
      const product = state.cartProducts[index];
      state.cartProducts.splice(index, 1, {
        ...product,
        amount: product.amount - 1,
      });
    },
    removeProductFromCart(state, index) {
      state.cartProducts.splice(index,1);
    },
  },
});

export default store;
