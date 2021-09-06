import React from 'react'
import {useDispatch } from 'react-redux'
import {NORMAL} from '../../redux/action-types.js'
import {SLOW} from '../../redux/action-types.js'
import {SPEEDY} from '../../redux/action-types.js'
import {FAST} from '../../redux/action-types.js'
import './SpeedButton.less'

const SpeedButton = () =>{
  const dispatch = useDispatch();
  const normal =()=>{dispatch({type:NORMAL,data:1000})}
  const slow =()=>{dispatch({type:SLOW,data:2000})}
  const speedy =()=>{dispatch({type:SPEEDY,data:500})}
  const fast =()=>{dispatch({type:FAST,data:10})}

  return(
    <div className='speedButton'>
        <button className='speedButton__normalButton' onClick={normal} title='時間流速:普通'>
          NORMAL
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className='speedButton__slowButton' onClick={slow} title='時間流速:緩慢'>
          SLOW
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className='speedButton__speedyButton' onClick={speedy} title='時間流速:快速'>
          SPEEDY
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className='speedButton__fastButton' onClick={fast} title='時間流速:最快'>
          FAST
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
    </div>
  )
}
export default React.memo(SpeedButton);

