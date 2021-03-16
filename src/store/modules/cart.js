const state = {
  cartProducts: JSON.parse(window.localStorage.getItem('cartProducts')) || []
}

const getters = {
  totalCount: state => {
    return state.cartProducts.reduce((sum, acc) => sum + acc.count, 0)
  },
  totalPrice: state => {
    return state.cartProducts.reduce((sum, acc) => sum + acc.totalPrice, 0)
  },
  checkedCount: state => {
    return state.cartProducts.reduce((sum, acc) => {
      if (acc.isChecked) {
        sum += acc.count
      }
      return sum
    }, 0)
  },
  checkedPrice: state => {
    return state.cartProducts.reduce((sum, acc) => {
      if (acc.isChecked) {
        sum += acc.totalPrice
      }
      return sum
    }, 0)
  }
  
}
const mutations = {
  // 添加商品到购物车
  addToCart (state, product) {
    const prod = state.cartProducts.find(item => item.id === product.id)
    // 商品已存在 数量++,选中,并计算小计
    if (prod) {
      prod.count++
      prod.isChecked = true
      prod.totalPrice = prod.count *  prod.price
    } else {
      state.cartProducts.push({
        ...product,
        count: 1,
        isChecked: true,
        totalPrice: product.price
      })
    }
  },
  // 从购物车删除商品
  deleteFromCart (state, id) {
    const index = state.cartProducts.findIndex(item => item.id === id)
    index !== -1 && state.cartProducts.splice(index, 1)
  },
  // 修改数据选中状态
  updateProductChecked (state, { id, checked }) {
    const prod = state.cartProducts.find(item => item.id === id)
    prod && (prod.isChecked = checked)
  },
  // 修改数量
  updateProduct (state, { id, count }) {
    const prod = state.cartProducts.find(item => item.id === id)
    if (prod) {
      prod.count = count
      prod.totalPrice = count * prod.price
    }
  },
  // 全选/全部选
  updateAllProductChecked (state, value) {
    state.cartProducts.forEach(item => item.isChecked = value)
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}