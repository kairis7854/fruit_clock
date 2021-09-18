import {NORMAL} from '../action-types.js'
import {SLOW} from '../action-types.js'
import {SPEEDY} from '../action-types.js'
import {FAST} from '../action-types.js'

//組件中並未使用這裡的action，而是使用hook直接dispatch，這裡是給類函數預寫的
export const NORMAL_ACTION = (value) =>{
  return {type:NORMAL,data:value}
}
export const SLOW_ACTION = (value) =>{
  return {type:SLOW,data:value}
}
export const SPEEDY_ACTION = (value) =>{
  return {type:SPEEDY,data:value}
}
export const FAST_ACTION = (value) =>{
  return {type:FAST,data:value}
}