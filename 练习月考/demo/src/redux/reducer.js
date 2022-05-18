import axios from "axios"

const initState = {
    title: ''
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