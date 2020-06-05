<template>
  <div class="detail">
    <h1>Detail Page1</h1>
    <p>id：{{ detail.id }}</p>
    <p>name：{{ detail.name }}</p>
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
      return store.dispatch('fetchDetail', 'detail1')
    },
    computed: {
      // 从 store 的 state 对象中的获取 detail
      detail () {
        return this.$store.state.detail
      }
    }
  }
</script>

<style scoped>
.detail {
  background: gray;
}
</style>