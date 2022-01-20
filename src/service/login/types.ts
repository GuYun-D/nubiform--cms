export interface Account {
  name: string
  password: string
}

// 登录的信息
export interface AccountResult {
  id: number
  name: string
  token: string
}

export interface UserInfo {
  cellphone: number
  createAt: string
  department: UserInfoDepartment
  enable: number
  id: number
  name: number
  realname: number
  role: UserInfoRole
  updateAt: string
}

export interface UserInfoDepartment {
  id: number
  name: string
  parentId: null
  createAt: string
  updateAt: string
}

export interface UserInfoRole {
  id: number
  name: string
  intro: string
  createAt: string
  updateAt: string
}

// 从服务器获取到的数据类型
export interface HttpServerData<T = any> {
  code: number
  data: T
}

// 用户菜单树
export interface UserMenus {
  children: any
  icon: string
  id: number
  name: string
  sort: number
  type: number
  url: string
}

export interface UserMenuChild {
  children: any
  id: number
  name: string
  parentId: number
  sort: number
  type: number
  url: string
}
