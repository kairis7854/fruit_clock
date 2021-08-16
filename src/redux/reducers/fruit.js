import {TOMATO} from '../action-types.js'
import {WATERMELON} from '../action-types.js'
import {STRAWBERRY} from '../action-types.js'
import {CANTALOUPE} from '../action-types.js'

let initState = 'TOMATO'

export default function a(preState=initState,action){
  const {type,data} = action

  switch(type){
    case TOMATO:
      return 'TOMATO'
    case STRAWBERRY:
      return 'STRAWBERRY'
    case WATERMELON:
      return 'WATERMELON'
    case CANTALOUPE:
      return 'CANTALOUPE'
    default:
      return preState
  }
}