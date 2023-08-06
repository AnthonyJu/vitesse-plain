import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建 axios 实例
const service = axios.create({
  baseURL: '/api',
  timeout: 10000,
  withCredentials: true,
  headers: {},
  validateStatus(status) {
    return status >= 200 && status <= 500 // 默认的
  },
})

// request 拦截器
service.interceptors.request.use(
  (config) => {
    // 在请求发送之前做一些处理，携带 token 等等
    return config
  },
)

// response 拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    // 如果自定义代码不是 200，则判断为错误。
    if (res.code !== 200) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000,
      })
      // 401: 未登录
      if (res.code === 401) {
        // 重新登录
        // to re-login
      }
      return Promise.reject(new Error(res.message || 'Error'))
    }
    else {
      return res
    }
  },
  (error) => {
    if (error.message.includes('timeout')) ElMessage.error('网络超时！')
    else if (error.message.includes('Network Error')) ElMessage.error('网络连接错误！')
    else ElMessage.error(error.message)
    return Promise.reject(error)
  },
)

export default service
