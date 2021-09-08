import React from 'react'
import Reset from '../Reset/Reset'
import CalendarButton from '../CalendarButton/CalendarButton'
import ClockButton from '../ClockButton/ClockButton'
import './TopNav.less'

export default function TopNav(props){

  return(
    <div className='TopNav'>
      <ClockButton props={props}/>
      <CalendarButton props={props}/>
      <Reset/>
    </div>   
  )
} 