import { QueryInfo } from '@/service/main/system/types'

export interface SystemState {
  userList: any[]
  userCount: number
}

export interface SystemPayload {
  pageUrl: string
  queryInfo: QueryInfo
}

export enum SystemMutations {
  CHANGE_USER_LIST = 'changeUserList',
  CHANGE_USER_COUNT = 'changeUserCount',
}
