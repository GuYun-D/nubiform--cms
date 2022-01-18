import gyRequest from '../index'
import type {
  Account,
  HttpServerData,
  AccountResult,
  UserInfo,
  UserMenus,
} from './types'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/',
  UserMenus = '/role/', // role/{id}/menu
}

// 用户登录
export function accountLoginRequest(account: Account) {
  return gyRequest.post<HttpServerData<AccountResult>>({
    url: LoginAPI.AccountLogin,
    data: account,
  })
}

// 获取用户信息
export function requestUserInfoById(id: number) {
  return gyRequest.get<HttpServerData<UserInfo>>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false,
  })
}

// 获取用户的菜单树
export function requestUserMenuByRoleId(id: number) {
  return gyRequest.get<HttpServerData<UserMenus[]>>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false,
  })
}
