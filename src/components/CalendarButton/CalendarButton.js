import React from 'react'
import calendar from '../../assets/img/icon/calendar.svg'
import './CalendarButton.less'

export default function CalendarButton(props){
  const {homeType,setHomeType} = props.props

  return(
    <div className='CalendarButton'>
      <div className='CalendarButton__CalendarButtonImgWrap'>
        <div className='CalendarButton__CalendarButtonImgWrap__IMG' onClick={()=>{setHomeType(false)}}></div>
      </div>
    </div>
  )
}