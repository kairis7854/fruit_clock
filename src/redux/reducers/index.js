import {combineReducers} from 'redux'
import testReducer from './test.js'
import fruitReducer from './fruit.js'
import missionReducer from './mission.js'


export default combineReducers({
  test:testReducer,
  fruit:fruitReducer,
  mission:missionReducer,
})