import * as types from 'constants'
// 设置查询分组
export const updateRoutePath = ({ commit }, currentPath) => {
  console.log('currentPath', currentPath)
  // 设置searchGroup 值
  commit(types.UPDATE_ROUTE_PATH, currentPath)
  // 查询结果
}
