import { createStore } from 'redux'
import { myReduce } from './redux'
const store = createStore(myReduce)

export default store
