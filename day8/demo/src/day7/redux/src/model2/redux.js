const initState = {
    list: []
}

const redux = (state = initState, action) => {
    console.log(action)
    switch (action.type) {
        case "SET_LIST":
            return Object.assign({}, state, action)
        default:
            return state
    }
}
export {
    redux
}