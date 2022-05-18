import axios from "../utils/reqson"

const action = (title) => {
    return {
        type: "TOKEN",
        title: title
    }
}

const asyncAction = () => {
    return (dispatch) => {
        axios.post('/api/data', {
            current: 1,
            pageSize: 10
        }).then(res => {
            console.log(res)
            dispatch(action(res.data))
        })
    }
}

export {
    action,
    asyncAction
}