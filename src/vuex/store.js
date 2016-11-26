import Vue from 'vue'
import Vuex from 'vuex'
import routePath from 'modules/routePath'
import middlewares from './middlewares'
const debug = process.env.NODE_ENV !== 'production'
import * as actions from './actions'
import * as getters from './getters'
Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  modules: {
    routePath
  },
  strict: debug,
  middlewares
})
