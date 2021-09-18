import React,{useState } from 'react'
import SpeedButton from '../../containers/SpeedButton/SpeedButton'
import Clock from '../../containers/clock/clock'
import List from '../../containers/list/list'
import './Main.less'

const Main = (props) => {
  const [isRun,setIsRun] = useState(false)

  return(
    <div className='Main' style={{opacity:props.homeType ? 1 : 0,display:props.homeType ?'flex':'none'}}>
      <div className='Main__SpeedButton'><SpeedButton/></div>
      <div className='Main__Clock'><Clock isRun={isRun} setIsRun={setIsRun} /></div>
      <div className='Main__List'><List isRun={isRun} setIsRun={setIsRun}/></div>
    </div>
  )
}
export default Main

