import React from 'react'
import './CalendarButton.less'

export default function CalendarButton(props){
  const {setHomeType} = props.props

  return(
    <div className='CalendarButton'>
      <div className='CalendarButton__CalendarButtonImgWrap'>
        <div className='CalendarButton__CalendarButtonImgWrap__IMG' onClick={()=>{setHomeType(false)}}></div>
      </div>
    </div>
  )
}