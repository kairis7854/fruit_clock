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
  const fast =()=>{dispatch({type:FAST,data:6.7})}

  return(
    <div className='speedButton'>
        <button className='speedButton__normalButton' onClick={normal}>
          NORMAL
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className='speedButton__slowButton' onClick={slow}>
          SLOW
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className='speedButton__speedyButton' onClick={speedy}>
          SPEEDY
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className='speedButton__fastButton' onClick={fast}>
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

