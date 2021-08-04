import React from 'react'
import {useDispatch } from 'react-redux'
import {TOMATO} from '../redux/action-types.js'
import {WATERMELON} from '../redux/action-types.js'
import {STRAWBERRY} from '../redux/action-types.js'
import {CANTALOUPE} from '../redux/action-types.js'

import './fruitButton.less'

const Decoration = () =>{
  const dispatch = useDispatch();
  const tomato =()=>{dispatch({type:TOMATO})}
  const strawberry =()=>{dispatch({type:STRAWBERRY})}
  const cantaloupe =()=>{dispatch({type:CANTALOUPE})}
  const watermelon =()=>{dispatch({type:WATERMELON})}

  return(
    <div className='fruitButton-wrap'>
        <button className='fruitButton_tomatoButton' onClick={()=>{tomato()}}><div className='fruitButton_tomatoIMG'/></button>
        <button className='fruitButton_strawberryButton' onClick={()=>{strawberry()}}><div className='fruitButton_strawberryIMG'/></button>
        <button className='fruitButton_watermelonButton' onClick={()=>{watermelon()}}><div className='fruitButton_watermelonIMG'/></button>
        <button className='fruitButton_cantaloupeButton' onClick={()=>{cantaloupe()}}><div className='fruitButton_cantaloupeIMG'/></button>
    </div>
  )
}

export default React.memo(Decoration);
