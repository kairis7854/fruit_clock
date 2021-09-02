import {NORMAL} from '../action-types.js'
import {SLOW} from '../action-types.js'
import {SPEEDY} from '../action-types.js'
import {FAST} from '../action-types.js'

let initState = 'NORMAL'

export default function a(preState=initState,action){
  const {type,data} = action
  
  switch(type){
    case NORMAL:
      return data
    case SLOW:
      return data
    case SPEEDY:
      return data
    case FAST:
      return data
    default:
      return preState
  }
}