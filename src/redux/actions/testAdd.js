import {TEST} from '../action-types.js'

export const testAdd = (value) =>{
  return {type:TEST,data:value}
}
