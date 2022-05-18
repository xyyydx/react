const initState = {
    data: [],
    token: ''
}
const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'DATA':
            return Object.assign({}, state, action)
        case 'TOKEN':
            return Object.assign({}, state, action)
        default:
            return state
    }
}
export { reducer }