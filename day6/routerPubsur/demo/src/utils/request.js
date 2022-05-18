import axios from 'axios'
// 隐藏小转圈css样式 .spinner { display: none !important; }
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
const instance = axios.create({
    timeout: 5000
})
instance.interceptors.request.use(
    Nprogress.start(),
    (config) => {
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)
instance.interceptors.response.use(
    Nprogress.done(),
    (response) => {
        return response.data
    },
    (err) => {
        return Promise.reject(err)
    }
)
export default instance