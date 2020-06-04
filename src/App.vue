<template>
  <div id="app">
    <router-link to="/detail">Goto detail</router-link> 
    <router-link to="/list">Goto list</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  beforeCreate() {
    console.log('App.vue beforeCreate');
  },

  created() {
    console.log('App.vue created');
  },

  beforeMount() {
    console.log('App.vue beforeMount');
  },

  mounted() {
    console.log('App.vue mounted');
  }
}
</script>