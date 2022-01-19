import type { LoginModule } from './login/types'

export interface RootState {
  name?: string
}

export interface RootWidthModule {
  login: LoginModule
}

// 将根state的类型和module的类型结合起来
export type MyStore = RootState & RootWidthModule
