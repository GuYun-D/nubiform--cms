import type { LoginState } from './login/types'
import type { SystemState } from './main/system/types'

export interface RootState {
  name?: string
}

export interface RootWidthModule {
  login: LoginState
  system: SystemState
}

// 将根state的类型和module的类型结合起来
export type MyStore = RootState & RootWidthModule
