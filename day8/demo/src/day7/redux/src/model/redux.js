const initState = {
    value: ''
}
const myReduce = (state = initState, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'changeToken':
            return Object.assign({}, state, action);
        default:
            return state;
    }
}
export { myReduce }