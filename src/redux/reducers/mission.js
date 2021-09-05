import {NOWMISSION} from '../action-types.js'

let initState = {id:'',missoin:'',time:'',smoke:''}

export default function a(preState=initState,action){
  const {type,data} = action

  switch(type){
    case NOWMISSION:
      return data
    default:
      return preState
  }
}