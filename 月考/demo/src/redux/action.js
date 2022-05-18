import axios from '../utils/request'
const token = (token) => {
    return {
        type: 'TOKEN',
        token: token
    }
}
const action = (data) => {
    return {
        type: 'DATA',
        data: data
    }
}
const asyncAction = () => {
    return (dispatch) => {
        axios.post('/api/data').then(res => {
            dispatch(action(res.data.list))
        })
    }
}

export {
    token, asyncAction
}