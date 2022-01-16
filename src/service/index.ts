import GYRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'

const gyRequest = new GYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
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

gyRequest.request({
  url: 'get',
  showLoading: true,
})

export default gyRequest
