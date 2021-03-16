<template>
  <div id="app">
    <div>
      <span class="title">Vuex - 购物车列表</span>
      <pop-cart class="pop-cart" />
    </div>
    <router-view/>
  </div>
</template>

<script>
import popCart from './components/popCart'
export default {
  name: 'App',
  components: {
    popCart
  }
}

</script>

<style>
#app {
  width: 1000px;
  margin: 0 auto;
  padding: 10px;
}
.pop-cart {
  float: right;
}
.title {
  font-size: 20px;
  color: #333;
}
.el-breadcrumb {
  padding: 20px 0;
}
</style>
