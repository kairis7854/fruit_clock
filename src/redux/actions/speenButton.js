import {NORMAL} from '../action-types.js'
import {SLOW} from '../action-types.js'
import {SPEEDY} from '../action-types.js'
import {FAST} from '../action-types.js'

export const NORMAL = (value) =>{
  return {type:NORMAL,data:value}
}
export const SLOW = (value) =>{
  return {type:SLOW,data:value}
}
export const SPEEDY = (value) =>{
  return {type:SPEEDY,data:value}
}
export const FAST = (value) =>{
  return {type:FAST,data:value}
}