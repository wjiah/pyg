import axios from 'axios'
// 配置基准路由
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
// 使用axios拦截器 添加请求头部信息
axios.interceptors.request.use(config => {
  config.headers.Authorization = sessionStorage.getItem('token')
  return config
})
// 接收请求前拦截判断token信息是否失效
axios.interceptors.response.use(res => {
  if (res.data.meta.status === 401) {
    location.href = '#/login'
  } else {
    return res
  }
})

export default axios
