<template>
  <div class="detail">
    <h1>Detail Page</h1>
    <p>id：{{ detail.id }}</p>
    <p>name：{{ detail.name }}</p>

    <router-link to="/detail1">Goto detail1</router-link> 
    <router-link to="/detail2">Goto detail12</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'Detail',
    data() {
      return {
      }
    },
    asyncData ({ store, route }) {
      // 触发 action 后，会返回 Promise
      // 由于此函数会在组件实例化之前调用，所以它无法访问 this。需要将 store 和路由信息作为参数传递进去
      return store.dispatch('fetchDetail', route.query.id)
    },
    computed: {
      // 从 store 的 state 对象中的获取 detail
      detail () {
        return this.$store.state.detail
      }
    }
  }
</script>

<style>
.detail {
  background: yellowgreen;
}
</style>