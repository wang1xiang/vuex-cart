import axios from 'axios'
const state = {
  products: []
}

const getters = {}
const mutations = {
  setProducts (state, data) {
    state.products = data
  }
}

const actions = {
  async getProducts ({ commit }) {
    const { data } = await axios({
      method: 'GET',
      url: 'http://localhost:3000/products'
    })
    commit('setProducts', data)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}