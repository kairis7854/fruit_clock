import React,{useState } from 'react'
import Test from './containers/test'
import FuitButton from './containers/fruitButton'
import Clock from './containers/clock'
import List from './containers/list'
import ListAdd from './containers/list-add'
import './app.less'

const App =() => {
  const [isRun,setIsRun] = useState(false)
  const [listType,setListType] = useState(false)
  const [mission,setMission] = useState([
      {key:1,mission:'打疫苗',time:10,smoke:false},
      {key:4,mission:'吃飯',time:12,smoke:false},
      {key:2,mission:'睡覺',time:1800,smoke:false},
      {key:3,mission:'打代碼',time:1800,smoke:false}
  ])
  const [nowMission,setNowMission] = useState({
    key:mission ? mission[0].key : '',
    mission:mission ? mission[0].mission : '任務',
    time:mission ? mission[0].time : 0,
    smoke:mission ? mission[0].smoke : false,
  })

  const changeMission = (item)=>{
    if(!isRun){
      setNowMission({key:item.key,mission:item.mission,time:item.time,smoke:item.smoke})
      return
    }
    return
  } 

  return(
    <div className='app'>
        <div className='wrap1'><FuitButton/></div> 
        <div className='wrap2'><Clock nowMission={nowMission} setNowMission={setNowMission} isRun={isRun} setIsRun={setIsRun} mission={mission} setMission={setMission}/></div> 
        <div className='wrap3' style={{display:listType?'none':'block'}}><List isRun={isRun} mission={mission} changeMission={changeMission}  setListType={setListType} /></div>
        <div className='wrap3' style={{display:listType?'block':'none'}}><ListAdd mission={mission} setMission={setMission}  setListType={setListType}/></div>
    </div>
  )
}
export default App