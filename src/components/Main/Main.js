import React,{useState } from 'react'
import FuitButton from '../../containers/fruitButton/fruitButton'
import Clock from '../../containers/clock/clock'
import List from '../../containers/list/list'
import './Main.less'

const Main =() => {
  const [isRun,setIsRun] = useState(false)

  return(
    <div className='Main'>
      <div className='Main__FuitButton'><FuitButton/></div>
      <div className='Main__Clock'><Clock isRun={isRun} setIsRun={setIsRun} /></div>
      <div className='Main__List'><List isRun={isRun} /></div>
    </div>
  )
}
export default Main
