import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { GYRequestConfig, GYRequestInterceptors } from './types'
import { ElLoading } from 'element-plus'

const DEFAULT_LOADING = true

class GYRequest {
  instance: AxiosInstance
  interceptors?: GYRequestInterceptors
  loading?: any
  showLoading: boolean

  constructor(config: GYRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // 实例自己的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterCeptorCatch
    )

    // 全局拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '加载数据中',
            background: 'rgba(0,0,0,.5)',
          })
        }
        return config
      },
      (error) => {
        return error
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        const data = res.data
        this.loading?.close()
        // if (data.returnCode === '-1001') {
        //   console.log('请求失败')
        // } else {
        //   return res.data
        // }
      },
      (error) => {
        this.loading?.close()

        if (error.response.status === 404) {
          return '404错误'
        }
        return error
      }
    )
  }

  /**
   * gyRequest.request<Interface>()
   * interface就会传到T
   */
  request<T>(config: GYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      /**
       * 单个请求的拦截器
       * gyRequest.request({
       *  url: "xxxx",
       *  method: "get",
       *  interceptors: {
       *    requestInterceptor: (config) => {
       *      (对config进行操作后返回)
       *      return config
       *    },
       *
       *    responseInterceptor: (res) => {
       *      (对res进行操作)
       *    }
       *  }
       * })
       */

      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      /**
       * 使用了泛型之后，类型推导对res的类型推导错误
       * request的第二个参数的类型才是res的类型，res的类型应是T
       */
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }

          resolve(res)

          this.showLoading = DEFAULT_LOADING
        })
        .catch((error) => {
          this.showLoading = DEFAULT_LOADING
          reject(error)
          return error
        })
    })
  }

  get<T>(config: GYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: GYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: GYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  put<T>(config: GYRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' })
  }
}

export default GYRequest
