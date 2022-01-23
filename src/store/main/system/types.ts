import { QueryInfo } from '@/service/main/system/types'

export interface SystemState {
  usersList?: any[]
  usersCount?: number
  roleList?: any[]
  roleCount?: number
  goodsList?: any[]
  goodsCount?: number
}

export interface SystemPayload {
  pageName: string
  queryInfo: QueryInfo
}

export enum SystemMutations {
  changeUsersList = 'CHANGE_USER_LIST',
  changeUsersCount = 'CHANGE_USER_COUNT',
  changeRoleList = 'CHANGE_ROLE_LIST',
  changeRoleCount = 'CHANGE_ROLE_COUNT',
  changeGoodsList = 'CHANGE_GOODS_LIST',
  changeGoodsCount = 'CHANGE_GOODS+COUNT'
}
