import {NOWMISSION} from '../action-types.js'

//組件中並未使用這裡的action，而是使用hook直接dispatch，這裡是給類函數預寫的
export const NOWMISSION_ACTION = (value) =>{
  return {type:NOWMISSION,data:value}
}
