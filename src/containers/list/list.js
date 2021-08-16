import React from 'react'
import ListItem from '../listItem/listItem'
import ListAdd from '../listAdd/listAdd'
import './list.less'

export default function list(props){
  const {isRun,mission,setMission,changeMission,setListType,listType} = props
  // const list = listType 
  //   ? <ListAdd mission={mission} setMission={setMission}  setListType={setListType}/>
  //   : <ListItem isRun={isRun} mission={mission} changeMission={changeMission} setListType={setListType}/> 

  return(
    <div className='list'>
      {/* {list} */}
      <div style={{display:listType?'none':'block'}}><ListItem isRun={isRun} mission={mission} changeMission={changeMission}  setListType={setListType} /></div> 
      <div style={{display:listType?'block':'none'}}><ListAdd mission={mission} setMission={setMission}  setListType={setListType}/></div>
    </div>
  )
}