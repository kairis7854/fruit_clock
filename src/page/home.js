import React,{useState } from 'react'
import FuitButton from '../containers/fruitButton/fruitButton'
import Clock from '../containers/clock/clock'
import List from '../containers/list/list'
import './home.less'
import {resetDatabase} from '../common/Model'

const Home =() => {
  const [isRun,setIsRun] = useState(false)

  return(
    <div className='home'>
      <div className='home__FuitButton'><FuitButton/></div>
      <div className='home__Clock'><Clock isRun={isRun} setIsRun={setIsRun} /></div>
      <div className='home__List'><List isRun={isRun} /></div>
    </div>
  )
}
export default Home
