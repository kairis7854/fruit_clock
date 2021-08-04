import {TEST} from '../action-types.js'

let initState = 0

export default function a(preState=initState,action){
  const {type,data} = action
  let newState

  switch(type){
    case TEST:
      preState++
      return preState
    default:
      return preState
  }
}