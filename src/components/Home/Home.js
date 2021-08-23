import React from 'react'
import TopNav from '../TopNav/TopNav'
import Main from '../Main/Main'
import './Home.less'

export default function Home(){

  return(
    <div className='Home'>
      <TopNav/>
      <Main/>
    </div>
  )
}