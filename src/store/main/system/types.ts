import { QueryInfo } from '@/service/main/system/types'

export interface SystemState {
  usersList?: any[]
  usersCount?: number
  roleList?: any[]
  roleCount?: number
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
}
