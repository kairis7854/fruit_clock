import React,{useState} from 'react'
import {resetDatabase} from '../../common/Model'
import './Reset.less'

export default function Reset(){
  const [display,setDisplay] = useState(false)

  const clickReset = () => {
    setDisplay(!display)
  }
  const onResetDatabase = () => {
      resetDatabase()
  }
  
  return(
    <div className='Reset' title='初始化'>
      <div className='Reset__imgWrap'>
        <div className='Reset__imgWrap__img' onClick={()=>{clickReset()}}></div>
      </div>
      <div className='Reset__question' style={{display:display ? 'block' : 'none'}}>
        <p>是否回到初始狀態？</p>
        <input className='Reset__question__YES' type="button" value='YES' onClick={()=>{onResetDatabase()}}/>
        <input className='Reset__question__NO' type="button" value='NO' onClick={()=>{setDisplay(false)}}/>
      </div>
    </div>
  )
}