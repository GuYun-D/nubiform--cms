import { QueryInfo } from '@/service/main/system/types'

export interface SystemState {
  usersList?: any[]
  usersCount?: number
  roleList?: any[]
  roleCount?: number
  goodsList?: any[]
  goodsCount?: number
  menuList?: any[]
  menuCount?: number
}

export interface SystemPayload {
  pageName: string
  queryInfo: QueryInfo
}

export interface DeletePayload {
  pageName: string
  id: number
}

export enum SystemMutations {
  changeUsersList = 'CHANGE_USER_LIST',
  changeUsersCount = 'CHANGE_USER_COUNT',
  changeRoleList = 'CHANGE_ROLE_LIST',
  changeRoleCount = 'CHANGE_ROLE_COUNT',
  changeGoodsList = 'CHANGE_GOODS_LIST',
  changeGoodsCount = 'CHANGE_GOODS_COUNT',
  changeMenuList = 'CHANGE_MENU_LIST',
  changeMenuCount = 'CHANGE_MENU_COUNT',
}
