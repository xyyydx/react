import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

const instance = axios.create({
    timeout: 5000
})
instance.interceptors.request.use(
    (config) => {
        Nprogress.start()
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)
instance.interceptors.response.use(
    (response) => {
        Nprogress.done()
        return response.data
    },
    (err) => {
        return Promise.reject(err)
    }
)
export default instance