import GYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import localCache from '@/utils/cache'

const gyRequest = new GYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      // 配置token
      const token = localCache.getCache('TOKEN') || ''
      if (token) {
        // @ts-ignore
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },

    requestInterceptorCatch: (error) => {
      return error
    },

    responseInterceptor: (res) => {
      return res
    },

    responseInterCeptorCatch: (error) => {
      return error
    },
  },
})

export default gyRequest
