const initState = {
    value: ''
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'TOKEN':
            return Object.assign({}, state, action)
        default:
            return state
    }
}

export { reducer }