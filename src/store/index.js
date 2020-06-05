import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 模拟一个返回promise的异步api
const fetchDetail = function (id) {
    return new Promise((reslove, reject) => {
      const detail = {
        id,
        name: `name${Math.random()}`
      }
      setTimeout(() => {
        reslove(detail)
      }, 1000)
    })
}

export function createStore () {
  return new Vuex.Store({
    state: {
      detail: {}
    },
    actions: {
      fetchDetail ({ commit }, id) {
        // `store.dispatch()` 会返回 Promise，
        // 以便我们能够知道数据在何时更新
        return fetchDetail(id).then(detail => {
          commit('setDetail', detail)
        })
      }
    },
    mutations: {
      setDetail (state, detail) {
        state.detail = detail
      }
    }
  })
}