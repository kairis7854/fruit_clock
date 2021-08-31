import React from 'react'
import Reset from '../Reset/Reset'
import CalendarButton from '../CalendarButton/CalendarButton'
import './TopNav.less'

export default function TopNav(props){

  return(
    <div className='TopNav'>
      <CalendarButton props={props}/>
      <Reset />
 
    </div>   
  )
} 