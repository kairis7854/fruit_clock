import {TOMATO} from '../action-types.js'
import {WATERMELON} from '../action-types.js'
import {STRAWBERRY} from '../action-types.js'
import {CANTALOUPE} from '../action-types.js'

export const TOMATO = (value) =>{
  return {type:TOMATO,data:value}
}
export const WATERMELON = (value) =>{
  return {type:WATERMELON,data:value}
}
export const STRAWBERRY = (value) =>{
  return {type:STRAWBERRY,data:value}
}
export const CANTALOUPE = (value) =>{
  return {type:CANTALOUPE,data:value}
}