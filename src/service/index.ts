import GYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const gyRequest = new GYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求成功')
      return config
    },

    requestInterceptorCatch: (error) => {
      console.log('请求失败')
      return error
    },

    responseInterceptor: (res) => {
      console.log('响应成功')
      return res
    },

    responseInterCeptorCatch: (error) => {
      console.log('相应失败')
      return error
    },
  },
})

gyRequest.request({
  url: 'get',
  showLoading: true,
})

export default gyRequest
