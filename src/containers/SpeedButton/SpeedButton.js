import React,{useState} from 'react'
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

  const [selectButton,setSelectButton] = useState(1)

  return(
    <div className='speedButton'>
      <div  className='speedButton__title'>
        <div>調整時間流速</div>
      </div>
      <div className='speedButton__buttonWrap'>
        <button className='speedButton__normalButton' 
          style={{border:selectButton === 1 && '2px solid lightblue'  }} 
          onClick={()=>{setSelectButton(1);normal()}} 
          title='時間流速:普通'
        >
          普通速度
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className='speedButton__slowButton' 
          style={{border:selectButton === 2 && '2px solid lightblue'  }} 
          onClick={()=>{setSelectButton(2);slow()}} 
          title='時間流速:緩慢'>
          緩速
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className='speedButton__speedyButton' 
          style={{border:selectButton === 3 && '2px solid lightblue'  }} 
          onClick={()=>{setSelectButton(3);speedy()}} 
          title='時間流速:快速'
        >
          快速
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <button className='speedButton__fastButton' 
          style={{border:selectButton === 4 && '2px solid lightblue'  }} 
          onClick={()=>{setSelectButton(4);fast()}} 
          title='時間流速:最快'
        >
          最快速度
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  )
}
export default React.memo(SpeedButton);

