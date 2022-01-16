import type { AxiosRequestConfig, AxiosResponse } from 'axios'

/**
 * 拦截器接口封装
 */
export interface GYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: any) => any
  responseInterCeptorCatch?: (error: any) => any
}

/**
 * GYRequestConfig接口封装的目的就是拓展拦截器的使用
 */
export interface GYRequestConfig extends AxiosRequestConfig {
  interceptors?: GYRequestInterceptors
  showLoading?: boolean
}
