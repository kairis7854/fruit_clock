import React,{useState,useEffect} from 'react'
import {db} from '../../common/Model'
import './CalendarLiContent.less'

const CalendarLiContent = (props) => {
  const [mission,setMission] = useState('')
  useEffect(()=>{
    db.plan.where({
      year:props.dateInfo.year,
      month:props.dateInfo.month,
      date:props.dateInfo.date,
    }).toArray().then(res=> setMission(res) )
  },[props.dateInfo])

  const state = (e) =>{
    switch (e.state) {
      case 'wait':
        return <strong style={{color:'rgb(231, 220, 60)'}}>等待</strong>  
      case 'start':
        return <strong style={{color:'white'}}>可執行</strong>  
      case 'done':
        return <strong style={{color:'rgb(137, 218, 56)'}}>完成</strong>  
      case 'fail':
        return <strong style={{color:'rgb(248, 145, 252)'}}>逾期</strong>  
      default:
        return null
    }
  }

  return(
    <>
      {
        mission  
         ? mission.map((item,index)=>
          <li className='CalendarLiContent' key={index}>
            {item.mission}{state(item)}
          </li>) 
         : null
      }
    </>
  )
}
export default CalendarLiContent