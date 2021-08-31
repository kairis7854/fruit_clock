import React from 'react'

import './CalendarButton.less'

export default function CalendarButton(props){
  const {homeType,setHomeType} = props.props

  return(
    <div className='CalendarButton'>
      <div className='CalendarButton__CalendarButtonImgWrap'>
        <div className='CalendarButton__CalendarButtonImgWrap__IMG' onClick={()=>{setHomeType(!homeType)}}></div>
      </div>
    </div>
  )
}