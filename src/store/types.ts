import type { LoginState } from './login/types'
import type { SystemState } from './main/system/types'

export interface RootState {
  name?: string
  entireDepartment: any[]
  entireRole: any[]
}

export interface RootWidthModule {
  login: LoginState
  system: SystemState
}

// 将根state的类型和module的类型结合起来
export type MyStore = RootState & RootWidthModule

export enum EntireDataMutations {
  changeEntireDepartment = 'CHANGE_ENTIRE_DEPARTMENT',
  changeEntireRole = 'CHANGE_ENTIRE_ROLE',
}
