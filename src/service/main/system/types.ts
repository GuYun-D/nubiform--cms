export interface QueryInfo {
  offset?: number
  size?: number
}

export interface PageListData {
  list: UserInfo[],
  totalCount: number
}

export interface UserInfo {
  cellphone: number
  createAt: string
  departmentId: number
  enable: number
  id: number
  name: string
  realname: string
  roleId: number
  updateAt: number
}