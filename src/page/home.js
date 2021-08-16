import React,{useState } from 'react'
import FuitButton from '../containers/fruitButton/fruitButton'
import Clock from '../containers/clock/clock'
import List from '../containers/list/list'
import './home.less'

const Home =() => {
  const [isRun,setIsRun] = useState(false)
  const [listType,setListType] = useState(false)
  const [mission,setMission] = useState([
      {key:1,mission:'打疫苗',time:3,smoke:false},
      {key:4,mission:'吃飯',time:6,smoke:false},
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
    <div className='home'>
      <div className='home__FuitButton'><FuitButton/></div>
      <div className='home__Clock'><Clock nowMission={nowMission} setNowMission={setNowMission} isRun={isRun} setIsRun={setIsRun} mission={mission} setMission={setMission}/></div>
      <div className='home__List'><List isRun={isRun} mission={mission} setMission={setMission} changeMission={changeMission} listType={listType} setListType={setListType}/></div>
    </div>
  )
}
export default Home
