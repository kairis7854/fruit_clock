import {combineReducers} from 'redux'
import testReducer from './test.js'
import speedReducer from './speed.js'
import missionReducer from './mission.js'

export default combineReducers({
  test:testReducer,
  speed:speedReducer,
  mission:missionReducer,
})