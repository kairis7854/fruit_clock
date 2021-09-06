import React from 'react'
import calendar from '../../assets/img/icon/calendar.svg'
import clock from '../../assets/img/icon/clock.svg'
import './CalendarButton.less'

export default function CalendarButton(props){
  const {homeType,setHomeType} = props.props

  return(
    <div className='CalendarButton'>
      <div className='CalendarButton__CalendarButtonImgWrap'>
        <div className='CalendarButton__CalendarButtonImgWrap__IMG' 
          onClick={()=>{setHomeType(!homeType)}}
          style={{  backgroundImage:homeType ? `url(${calendar})` : `url(${clock})`}}
          title={ homeType ? '設定計劃' : '番茄鐘'}
        >
        </div>
      </div>
    </div>
  )
}