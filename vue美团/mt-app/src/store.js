import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  position: {name: '武汉'}
}

const mutations = {
  setPosition (state, val) {
    state.position = val
  }
}

const actions = {
  setPosition (ctx, val) {
    // 异步请求后端获取当前位置数据
    ctx.commit('setPosition', val)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
