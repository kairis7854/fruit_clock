import {NOW_MISSION} from '../action-types.js'
import {CLEAN_MISSION} from '../action-types.js'

let initState = {id:'',missoin:'',time:'',smoke:''}

export default function reducers(preState=initState,action){
  const {type,data} = action
  switch(type){
    case NOW_MISSION:
      return data 
    case CLEAN_MISSION:
      return data
    default:
      return preState
  }
}