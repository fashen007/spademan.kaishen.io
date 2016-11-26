/**
 * Created by  on 2016/4/1.
 */
import { UPDATE_ROUTE_PATH } from 'constants'
const state = {
  // 查询条件
  currentPath: ''
}
// mutations
const mutations = {
  [UPDATE_ROUTE_PATH] (state, value) {
    state.currentPath = value
  }
}

export default {
  state,
  mutations
}
