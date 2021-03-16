import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

const myPlugin = store => {
  // 每次 mutation 之后调用
  store.subscribe((mutations, state) => {
    if (mutations.type.startsWith('cart/')) {
      window.localStorage.setItem('cartProducts', JSON.stringify(state.cart.cartProducts))
    }
  })
}

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    products,
    cart
  },
  plugins: [myPlugin]
})
