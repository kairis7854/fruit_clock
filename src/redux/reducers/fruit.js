import {TOMATO} from '../action-types.js'
import {WATERMELON} from '../action-types.js'
import {STRAWBERRY} from '../action-types.js'
import {CANTALOUPE} from '../action-types.js'

console.log('reducers')
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
// Redux商店是存储应用程序状态而不是应用程序 Assets 的地方，但是无论如何您都无法在其中存储任何实际图像。