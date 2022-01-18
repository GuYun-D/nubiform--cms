import type { UserMenus } from '@/service/login/types'

export interface LoginModule {
  token: string
  userInfo: any
  userMenus: UserMenus[]
}

export enum LoginMutations {
  CHANGE_TOKEN = 'changeToken',
  CHANGE_USER_INFO = 'changeUserInfo',
  CHANGE_USER_MENUS = 'changeUserMenus',
}
