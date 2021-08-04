import {combineReducers} from 'redux'
import testReducer from './test.js'
import fruitReducer from './fruit.js'


export default combineReducers({
  test:testReducer,
  fruit:fruitReducer,
})