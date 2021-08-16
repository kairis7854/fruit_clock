import React from 'react'
import {useDispatch } from 'react-redux'
import {TOMATO} from '../../redux/action-types.js'
import {WATERMELON} from '../../redux/action-types.js'
import {STRAWBERRY} from '../../redux/action-types.js'
import {CANTALOUPE} from '../../redux/action-types.js'
import './fruitButton.less'

const Decoration = () =>{
  const dispatch = useDispatch();
  const tomato =()=>{dispatch({type:TOMATO})}
  const strawberry =()=>{dispatch({type:STRAWBERRY})}
  const cantaloupe =()=>{dispatch({type:CANTALOUPE})}
  const watermelon =()=>{dispatch({type:WATERMELON})}

  return(
    <div className='fruitButton'>
        <button className='fruitButton__tomatoButton' onClick={()=>{tomato()}}><div className='fruitButton__tomatoIMG'/></button>
        <button className='fruitButton__strawberryButton' onClick={()=>{strawberry()}}><div className='fruitButton__strawberryIMG'/></button>
        <button className='fruitButton__watermelonButton' onClick={()=>{watermelon()}}><div className='fruitButton__watermelonIMG'/></button>
        <button className='fruitButton__cantaloupeButton' onClick={()=>{cantaloupe()}}><div className='fruitButton__cantaloupeIMG'/></button>
    </div>
  )
}
export default React.memo(Decoration);
