import axios from 'axios'
// import { showMessage } from '@/utils'
const ins = axios.create({
  timeout: 5000
})

ins.interceptors.response.use((res) => {
  if (res.data.code === 0) {
    return res.data.data
  } else {
    return Promise.reject(res.data.msg)
  }
})
export default ins
