import axios from "../utils/request"

const action = (value) => {
    return {
        type: 'TOKEN',
        value: value
    }
}

const asyncAction = () => {
    return (dispatch) => {
        axios.post('/api/data').then(res => {
            console.log(res.data.list)
            dispatch(action(res.data.list))
        })
    }
}
export { action, asyncAction }