import {TOMATO} from '../action-types.js'
import {WATERMELON} from '../action-types.js'
import {STRAWBERRY} from '../action-types.js'
import {CANTALOUPE} from '../action-types.js'

let initState = '1'

export default function a(preState=initState,action){
  const {type,data} = action

  switch(type){
    case TOMATO:
      return '1'
    case STRAWBERRY:
      return '2'
    case WATERMELON:
      return '3'
    case CANTALOUPE:
      return '4'
    default:
      return preState
  }
}