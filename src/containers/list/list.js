import React,{useState} from 'react'
import ListItem from '../listItem/listItem'
import ListAdd from '../listAdd/listAdd'
import './list.less'

export default function List(props){
  const {isRun,setIsRun} = props
  const [listType,setListType] = useState(false)

  // const list = listType 
  //   ? <ListAdd mission={mission} setMission={setMission}  setListType={setListType}/>
  //   : <ListItem isRun={isRun} mission={mission} changeMission={changeMission} setListType={setListType}/> 

  return(
    <div className='list'>
      {/* {list} */}
      <div style={{display:listType?'none':'block'}}><ListItem isRun={isRun} setIsRun={setIsRun} setListType={setListType}/></div> 
      <div style={{display:listType?'block':'none'}}><ListAdd setListType={setListType}/></div>
    </div>
  )
}